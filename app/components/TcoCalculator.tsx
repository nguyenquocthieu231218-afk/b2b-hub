'use client';

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import AuditTooltip from '@/app/components/AuditTooltip';
import type { TcoComparisonConfig, TcoHeadcountKey, TcoVendorConfig } from '@/lib/tco-configs';

type WorkforceInputs = TcoComparisonConfig['defaultWorkforce'];

type DurationMonths = 12 | 24;

type VendorScenario = {
  usPayrollPerEmployee: number;
  eorPerEmployee: number;
  contractorPerWorker: number;
  corePlatformPerEmployee: number;
  itManagementPerEmployee: number;
  basePlatformFee: number;
  implementationFee: number;
  waiveImplementation: boolean;
  fxSpreadPercent: number;
  renewalUpliftPercent: number;
  depositMonths: number;
};

type VendorEstimate = {
  advertised12: number;
  yearOne: number;
  yearTwo: number;
  total24: number;
  delta24: number;
  cashFlowDeposit: number;
  peakCashRequirement: number;
};

type ChartEstimate = {
  advertised: number;
  hiddenOutlay: number;
  totalCash: number;
};

type CfoCostBreakdown = {
  advertisedBaseFee: number;
  securityDeposit: number;
  fxSpread: number;
  additionalFees: number;
  totalOutlay: number;
};

type PinnedVendorSnapshot = {
  id: string;
  name: string;
  fxSpreadPercent: number;
  depositMonths: number;
  totalOutlay: number;
};

type PinnedBaselineScenario = {
  version: 1;
  slug: string;
  pinnedAt: string;
  workforce: WorkforceInputs;
  durationMonths: DurationMonths;
  vendors: PinnedVendorSnapshot[];
};
const workforceParamNames: Record<keyof WorkforceInputs, string> = {
  usEmployees: 'us',
  eorEmployees: 'eor',
  contractors: 'contractors',
  eorMonthlyGrossSalary: 'salary',
  contractorAverageMonthlyInvoice: 'contractorInvoice',
};

const vendorParamSuffixes: Record<keyof VendorScenario, string> = {
  usPayrollPerEmployee: 'us_rate',
  eorPerEmployee: 'eor_rate',
  contractorPerWorker: 'contractor_rate',
  corePlatformPerEmployee: 'core_rate',
  itManagementPerEmployee: 'it_rate',
  basePlatformFee: 'base_fee',
  implementationFee: 'implementation',
  waiveImplementation: 'waive_implementation',
  fxSpreadPercent: 'fx',
  renewalUpliftPercent: 'renewal',
  depositMonths: 'deposit',
};

const numericVendorScenarioKeys = [
  'usPayrollPerEmployee',
  'eorPerEmployee',
  'contractorPerWorker',
  'corePlatformPerEmployee',
  'itManagementPerEmployee',
  'basePlatformFee',
  'implementationFee',
  'fxSpreadPercent',
  'renewalUpliftPercent',
  'depositMonths',
] as const satisfies readonly (keyof VendorScenario)[];

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const teamPresets = [
  { id: 'seed', label: 'Seed (5 US + 2 EOR, 12m)', usEmployees: 5, eorEmployees: 2, durationMonths: 12 },
  { id: 'series-a', label: 'Series A (15 US + 8 EOR, 24m)', usEmployees: 15, eorEmployees: 8, durationMonths: 24 },
  { id: 'scale-up', label: 'Scale-up (40 US + 20 EOR, 24m)', usEmployees: 40, eorEmployees: 20, durationMonths: 24 },
] as const satisfies readonly {
  id: string;
  label: string;
  usEmployees: number;
  eorEmployees: number;
  durationMonths: DurationMonths;
}[];

function baselineStorageKey(slug: string) {
  return `stackevalify:tco-baseline:${slug}`;
}

const baselineChangeEvent = 'stackevalify:baseline-change';
const baselineServerSnapshot = '__stackevalify_baseline_loading__';

function subscribePinnedBaseline(onStoreChange: () => void) {
  window.addEventListener(baselineChangeEvent, onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    window.removeEventListener(baselineChangeEvent, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function isNonNegativeFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

function parsePinnedBaseline(raw: string | null, config: TcoComparisonConfig): PinnedBaselineScenario | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<PinnedBaselineScenario>;
    const workforce = parsed.workforce;
    if (
      parsed.version !== 1
      || parsed.slug !== config.slug
      || (parsed.durationMonths !== 12 && parsed.durationMonths !== 24)
      || typeof parsed.pinnedAt !== 'string'
      || !workforce
      || !isNonNegativeFiniteNumber(workforce.usEmployees)
      || !isNonNegativeFiniteNumber(workforce.eorEmployees)
      || !isNonNegativeFiniteNumber(workforce.contractors)
      || !isNonNegativeFiniteNumber(workforce.eorMonthlyGrossSalary)
      || !isNonNegativeFiniteNumber(workforce.contractorAverageMonthlyInvoice)
      || !Array.isArray(parsed.vendors)
      || parsed.vendors.length !== config.vendors.length
    ) return null;

    const vendorsAreValid = parsed.vendors.every((snapshot, index) => {
      const vendor = config.vendors[index];
      return snapshot.id === vendor.id
        && snapshot.name === vendor.name
        && isNonNegativeFiniteNumber(snapshot.fxSpreadPercent)
        && isNonNegativeFiniteNumber(snapshot.depositMonths)
        && isNonNegativeFiniteNumber(snapshot.totalOutlay);
    });
    return vendorsAreValid ? parsed as PinnedBaselineScenario : null;
  } catch {
    return null;
  }
}

function initialVendorScenarios(config: TcoComparisonConfig) {
  return Object.fromEntries(config.vendors.map((vendor) => [vendor.id, {
    usPayrollPerEmployee: vendor.rates.usPayrollPerEmployee,
    eorPerEmployee: vendor.rates.eorPerEmployee,
    contractorPerWorker: vendor.rates.contractorPerWorker,
    corePlatformPerEmployee: vendor.rates.corePlatformPerEmployee,
    itManagementPerEmployee: vendor.rates.itManagementPerEmployee,
    basePlatformFee: vendor.rates.basePlatformFee,
    implementationFee: vendor.rates.implementationFee,
    waiveImplementation: false,
    fxSpreadPercent: vendor.rates.fxSpreadPercent,
    renewalUpliftPercent: vendor.rates.renewalUpliftPercent,
    depositMonths: vendor.cashFlowDeposit.monthsOfEorGrossSalary,
  }])) as Record<string, VendorScenario>;
}

function parseNonNegativeNumber(params: URLSearchParams, key: string, fallback: number) {
  const raw = params.get(key);
  if (raw === null || raw.trim() === '') return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function readUrlState(config: TcoComparisonConfig) {
  const params = new URLSearchParams(window.location.search);
  const defaultScenarios = initialVendorScenarios(config);
  const workforce = Object.fromEntries(
    (Object.keys(workforceParamNames) as (keyof WorkforceInputs)[]).map((key) => [
      key,
      parseNonNegativeNumber(params, workforceParamNames[key], config.defaultWorkforce[key]),
    ]),
  ) as WorkforceInputs;
  const vendorScenarios = Object.fromEntries(config.vendors.map((vendor) => {
    const defaults = defaultScenarios[vendor.id];
    const scenario = { ...defaults };
    for (const key of numericVendorScenarioKeys) {
      const value = parseNonNegativeNumber(params, `${vendor.id}_${vendorParamSuffixes[key]}`, defaults[key]);
      scenario[key] = key === 'fxSpreadPercent' ? Math.min(3.5, value) : value;
    }
    const waiveParam = params.get(`${vendor.id}_${vendorParamSuffixes.waiveImplementation}`);
    if (waiveParam === '1' || waiveParam === '0') scenario.waiveImplementation = waiveParam === '1';
    return [vendor.id, scenario];
  })) as Record<string, VendorScenario>;
  const durationMonths: DurationMonths = params.get('months') === '12' ? 12 : 24;

  return { workforce, vendorScenarios, durationMonths };
}

function buildScenarioUrl(
  baseUrl: string,
  config: TcoComparisonConfig,
  workforce: WorkforceInputs,
  vendorScenarios: Record<string, VendorScenario>,
  durationMonths: DurationMonths,
) {
  const url = new URL(baseUrl);
  const defaultScenarios = initialVendorScenarios(config);

  for (const key of Object.keys(workforceParamNames) as (keyof WorkforceInputs)[]) {
    url.searchParams.set(workforceParamNames[key], String(workforce[key]));
  }
  url.searchParams.set('months', String(durationMonths));

  for (const vendor of config.vendors) {
    const scenario = vendorScenarios[vendor.id];
    const defaults = defaultScenarios[vendor.id];
    for (const key of numericVendorScenarioKeys) {
      const param = `${vendor.id}_${vendorParamSuffixes[key]}`;
      if (scenario[key] === defaults[key]) url.searchParams.delete(param);
      else url.searchParams.set(param, String(scenario[key]));
    }
    const waiveParam = `${vendor.id}_${vendorParamSuffixes.waiveImplementation}`;
    if (scenario.waiveImplementation === defaults.waiveImplementation) url.searchParams.delete(waiveParam);
    else url.searchParams.set(waiveParam, scenario.waiveImplementation ? '1' : '0');
  }

  return url;
}

function buildShareableUrl(
  config: TcoComparisonConfig,
  workforce: WorkforceInputs,
  vendorScenarios: Record<string, VendorScenario>,
  durationMonths: DurationMonths,
) {
  return buildScenarioUrl(window.location.href, config, workforce, vendorScenarios, durationMonths);
}

function buildPublicShareableUrl(
  config: TcoComparisonConfig,
  workforce: WorkforceInputs,
  vendorScenarios: Record<string, VendorScenario>,
  durationMonths: DurationMonths,
) {
  return buildScenarioUrl(`https://stackevalify.com/${config.slug}`, config, workforce, vendorScenarios, durationMonths);
}
function chartEstimate(estimate: VendorEstimate, durationMonths: DurationMonths): ChartEstimate {
  const advertised = estimate.advertised12 * (durationMonths / 12);
  const serviceInvoice = durationMonths === 12 ? estimate.yearOne : estimate.total24;
  const hiddenOutlay = Math.max(0, serviceInvoice - advertised) + estimate.cashFlowDeposit;
  return { advertised, hiddenOutlay, totalCash: advertised + hiddenOutlay };
}

function cfoCostBreakdown(
  workforce: WorkforceInputs,
  scenario: VendorScenario,
  estimate: VendorEstimate,
  durationMonths: DurationMonths,
): CfoCostBreakdown {
  const advertisedBaseFee = estimate.advertised12 * (durationMonths / 12);
  const serviceInvoice = durationMonths === 12 ? estimate.yearOne : estimate.total24;
  const fxEligibleMonthly = (
    workforce.eorEmployees * workforce.eorMonthlyGrossSalary
    + workforce.contractors * workforce.contractorAverageMonthlyInvoice
  );
  const fxSpread = fxEligibleMonthly * (scenario.fxSpreadPercent / 100) * durationMonths;
  const additionalFees = Math.max(0, serviceInvoice - advertisedBaseFee - fxSpread);

  return {
    advertisedBaseFee,
    securityDeposit: estimate.cashFlowDeposit,
    fxSpread,
    additionalFees,
    totalOutlay: serviceInvoice + estimate.cashFlowDeposit,
  };
}

function csvCell(value: string | number) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function csvMoney(value: number) {
  return value.toFixed(2);
}
function scopedHeadcount(workforce: WorkforceInputs, scopes: readonly TcoHeadcountKey[]) {
  return scopes.reduce((total, scope) => total + workforce[scope], 0);
}

function estimateVendor(
  workforce: WorkforceInputs,
  vendor: TcoVendorConfig,
  scenario: VendorScenario,
): VendorEstimate {
  const workerServiceMonthly = (
    workforce.usEmployees * scenario.usPayrollPerEmployee
    + workforce.eorEmployees * scenario.eorPerEmployee
    + workforce.contractors * scenario.contractorPerWorker
  );
  const coreMonthly = scopedHeadcount(workforce, vendor.rates.corePlatformScopes) * scenario.corePlatformPerEmployee;
  const itMonthly = scopedHeadcount(workforce, vendor.rates.itManagementScopes) * scenario.itManagementPerEmployee;
  const recurringMonthly = workerServiceMonthly + coreMonthly + itMonthly;
  const fxEligibleMonthly = (
    workforce.eorEmployees * workforce.eorMonthlyGrossSalary
    + workforce.contractors * workforce.contractorAverageMonthlyInvoice
  );
  const fxMonthly = fxEligibleMonthly * (scenario.fxSpreadPercent / 100);
  const implementation = scenario.waiveImplementation ? 0 : scenario.implementationFee;
  const advertised12 = recurringMonthly * 12;
  const yearOne = (recurringMonthly + scenario.basePlatformFee + fxMonthly) * 12 + implementation;
  const yearTwo = (
    (recurringMonthly + scenario.basePlatformFee) * (1 + scenario.renewalUpliftPercent / 100)
    + fxMonthly
  ) * 12;
  const total24 = yearOne + yearTwo;
  const cashFlowDeposit = workforce.eorEmployees * workforce.eorMonthlyGrossSalary * scenario.depositMonths;

  return {
    advertised12,
    yearOne,
    yearTwo,
    total24,
    delta24: total24 - advertised12 * 2,
    cashFlowDeposit,
    peakCashRequirement: total24 + cashFlowDeposit,
  };
}

function monthOneCashRequired(
  workforce: WorkforceInputs,
  vendor: TcoVendorConfig,
  scenario: VendorScenario,
  estimate: VendorEstimate,
) {
  const workerServiceMonthly = (
    workforce.usEmployees * scenario.usPayrollPerEmployee
    + workforce.eorEmployees * scenario.eorPerEmployee
    + workforce.contractors * scenario.contractorPerWorker
  );
  const coreMonthly = scopedHeadcount(workforce, vendor.rates.corePlatformScopes) * scenario.corePlatformPerEmployee;
  const itMonthly = scopedHeadcount(workforce, vendor.rates.itManagementScopes) * scenario.itManagementPerEmployee;
  const fxEligibleMonthly = (
    workforce.eorEmployees * workforce.eorMonthlyGrossSalary
    + workforce.contractors * workforce.contractorAverageMonthlyInvoice
  );
  const fxMonthly = fxEligibleMonthly * (scenario.fxSpreadPercent / 100);
  const implementation = scenario.waiveImplementation ? 0 : scenario.implementationFee;

  return workerServiceMonthly
    + coreMonthly
    + itMonthly
    + scenario.basePlatformFee
    + fxMonthly
    + implementation
    + estimate.cashFlowDeposit;
}

function NumberField({
  id,
  label,
  value,
  onChange,
  step = 1,
  suffix,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  suffix?: string;
}) {
  return (
    <label htmlFor={id} className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-2 text-sm text-slate-200">
      <span className="font-semibold">{label}</span>
      <span className="flex min-h-11 min-w-0 items-center rounded-lg border border-slate-700 bg-slate-950 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20">
        <input
          id={id}
          type="number"
          min="0"
          step={step}
          value={value}
          aria-label={label}
          onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-white outline-none"
        />
        {suffix && <span className="border-l border-slate-800 px-3 text-xs font-semibold text-slate-400">{suffix}</span>}
      </span>
    </label>
  );
}

function StackedCostChart({
  config,
  estimates,
  durationMonths,
}: {
  config: TcoComparisonConfig;
  estimates: Record<string, VendorEstimate>;
  durationMonths: DurationMonths;
}) {
  const chartData = config.vendors.map((vendor) => ({
    vendor,
    ...chartEstimate(estimates[vendor.id], durationMonths),
  }));
  const maxTotal = Math.max(...chartData.map(({ totalCash }) => totalCash), 1);
  const plotBottom = 285;
  const plotHeight = 205;
  const barWidth = 88;
  const positions = [58, 214];

  return (
    <figure className="mt-6 min-h-[36rem] rounded-xl border border-slate-800 bg-slate-900/70 p-4 sm:min-h-[34rem] sm:p-6" data-stacked-tco-chart data-chart-cls-guard data-months={durationMonths}>
      <figcaption>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-300">Cash exposure chart · {durationMonths} months</p>
        <h4 className="mt-2 text-lg font-bold text-white">Advertised base versus hidden outlay</h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">The warning segment combines deposits, FX, implementation, base-platform charges, add-ons, and renewal uplift not captured by the advertised recurring baseline.</p>
      </figcaption>

      <svg viewBox="0 0 360 345" role="img" aria-labelledby={`${config.slug}-chart-title ${config.slug}-chart-description`} className="mx-auto mt-5 h-auto w-full max-w-3xl overflow-visible">
        <title id={`${config.slug}-chart-title`}>{config.title} advertised base fee and hidden cash outlay over {durationMonths} months</title>
        <desc id={`${config.slug}-chart-description`}>Two stacked bars compare the advertised recurring baseline with deposits, foreign exchange costs, platform fees, add-ons, implementation, and renewal effects.</desc>
        <line x1="30" x2="330" y1={plotBottom} y2={plotBottom} stroke="#334155" strokeWidth="1" />
        {chartData.map(({ vendor, advertised, hiddenOutlay, totalCash }, index) => {
          const totalHeight = (totalCash / maxTotal) * plotHeight;
          const advertisedHeight = totalCash > 0 ? (advertised / totalCash) * totalHeight : 0;
          const hiddenHeight = totalHeight - advertisedHeight;
          const x = positions[index];
          const totalLabelY = Math.max(28, plotBottom - totalHeight - 12);
          return (
            <g
              key={vendor.id}
              aria-label={`${vendor.name}: ${currency.format(advertised)} advertised, ${currency.format(hiddenOutlay)} hidden outlay, ${currency.format(totalCash)} total cash exposure`}
              data-chart-vendor={vendor.id}
              data-advertised={Math.round(advertised)}
              data-hidden-outlay={Math.round(hiddenOutlay)}
              data-total-cash={Math.round(totalCash)}
            >
              <text x={x + barWidth / 2} y={totalLabelY} textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="700">{currency.format(totalCash)}</text>
              <rect x={x} y={plotBottom - advertisedHeight} width={barWidth} height={advertisedHeight} fill="#64748b" />
              <rect x={x} y={plotBottom - totalHeight} width={barWidth} height={hiddenHeight} rx="6" fill="#fb7185" />
              <text x={x + barWidth / 2} y="313" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="700">{vendor.name}</text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 grid gap-3 text-sm sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-950/70 p-3 text-slate-300">
          <span className="mt-1 size-3 shrink-0 rounded-sm bg-slate-500" aria-hidden="true" />
          <span><strong className="text-white">Advertised Base Fee</strong><br />Recurring worker, module, and platform rates presented as the list-price baseline.</span>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-rose-400/20 bg-rose-400/5 p-3 text-slate-300">
          <span className="mt-1 size-3 shrink-0 rounded-sm bg-rose-400" aria-hidden="true" />
          <span><strong className="text-rose-200">Hidden Outlay: Deposits, FX &amp; Add-ons</strong><br />Cash beyond the advertised baseline, including refundable security cash.</span>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">Chart totals include the refundable deposit as cash exposure. The service-invoice table below continues to report refundable deposits separately from vendor revenue.</p>
    </figure>
  );
}

function CfoPrintReport({
  config,
  workforce,
  vendorScenarios,
  estimates,
  durationMonths,
}: {
  config: TcoComparisonConfig;
  workforce: WorkforceInputs;
  vendorScenarios: Record<string, VendorScenario>;
  estimates: Record<string, VendorEstimate>;
  durationMonths: DurationMonths;
}) {
  const [firstVendor, secondVendor] = config.vendors;
  const breakdowns = Object.fromEntries(config.vendors.map((vendor) => [
    vendor.id,
    cfoCostBreakdown(workforce, vendorScenarios[vendor.id], estimates[vendor.id], durationMonths),
  ])) as Record<string, CfoCostBreakdown>;
  const publicShareableUrl = buildPublicShareableUrl(config, workforce, vendorScenarios, durationMonths).toString();
  const costRows: { label: string; key: keyof CfoCostBreakdown }[] = [
    { label: 'Advertised Base Fee', key: 'advertisedBaseFee' },
    { label: 'Security Deposit / Reserve', key: 'securityDeposit' },
    { label: 'FX Spread', key: 'fxSpread' },
    { label: 'Additional Fees / Onboarding', key: 'additionalFees' },
    { label: 'Total Outlay', key: 'totalOutlay' },
  ];

  return (
    <section data-cfo-print-report aria-label={`${config.title} CFO TCO report`}>
      <header data-cfo-print-header>
        <p>StackEvalify CFO TCO Report</p>
        <h2>{config.title}</h2>
        <p>{durationMonths}-month decision horizon · USD · Source checked {config.sourceCheckedAt}</p>
      </header>

      <dl data-cfo-print-scenario>
        <div><dt>US payroll employees</dt><dd>{workforce.usEmployees}</dd></div>
        <div><dt>International EOR employees</dt><dd>{workforce.eorEmployees}</dd></div>
        <div><dt>Contractors</dt><dd>{workforce.contractors}</dd></div>
        <div><dt>Calculation horizon</dt><dd>{durationMonths} months</dd></div>
        <div><dt>Average EOR gross salary</dt><dd>{currency.format(workforce.eorMonthlyGrossSalary)} / month</dd></div>
        <div><dt>Average contractor invoice</dt><dd>{currency.format(workforce.contractorAverageMonthlyInvoice)} / month</dd></div>
        {config.vendors.flatMap((vendor) => [
          <div key={`${vendor.id}-print-fx`}><dt>{vendor.name} negotiated FX spread</dt><dd>{vendorScenarios[vendor.id].fxSpreadPercent.toFixed(1)}%</dd></div>,
          <div key={`${vendor.id}-print-deposit`}><dt>{vendor.name} security deposit</dt><dd>{vendorScenarios[vendor.id].depositMonths} salary months</dd></div>,
        ])}
      </dl>

      <div data-cfo-print-grid>
        <StackedCostChart config={config} estimates={estimates} durationMonths={durationMonths} />
        <section data-cfo-print-costs aria-labelledby={`${config.slug}-print-cost-table`}>
          <h2 id={`${config.slug}-print-cost-table`}>Detailed cost comparison</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">Cost line item</th>
                <th scope="col">{firstVendor.name}</th>
                <th scope="col">{secondVendor.name}</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((row) => (
                <tr key={row.key}>
                  <th scope="row">{row.label}</th>
                  <td>{currency.format(breakdowns[firstVendor.id][row.key])}</td>
                  <td>{currency.format(breakdowns[secondVendor.id][row.key])}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Refundable deposits are included in Total Outlay as cash exposure, not vendor revenue.</p>
        </section>
      </div>

      <footer data-cfo-print-footer>
        <p>{publicShareableUrl}</p>
        <p>Audited via StackEvalify.com — Independent B2B SaaS TCO Methodology</p>
      </footer>
    </section>
  );
}
function coverageWarnings(vendor: TcoVendorConfig, scenario: VendorScenario, workforce: WorkforceInputs) {
  const warnings: string[] = [];
  if (workforce.usEmployees > 0 && scenario.usPayrollPerEmployee === 0) warnings.push('US payroll is outside this baseline.');
  if (workforce.eorEmployees > 0 && scenario.eorPerEmployee === 0) warnings.push('EOR is outside this baseline.');
  if (workforce.contractors > 0 && scenario.contractorPerWorker === 0) warnings.push('Contractor service is outside this baseline.');
  return warnings.map((warning) => `${vendor.name}: ${warning}`);
}

export default function TcoCalculator({ config }: { config: TcoComparisonConfig }) {
  const [workforce, setWorkforce] = useState<WorkforceInputs>(config.defaultWorkforce);
  const [vendorScenarios, setVendorScenarios] = useState<Record<string, VendorScenario>>(() => initialVendorScenarios(config));
  const [durationMonths, setDurationMonths] = useState<DurationMonths>(24);
  const [urlStateReady, setUrlStateReady] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [shareStatus, setShareStatus] = useState('');
  const [exportStatus, setExportStatus] = useState('');
  const [baselineOverride, setBaselineOverride] = useState<{ slug: string; value: PinnedBaselineScenario | null }>();
  const [baselineStatus, setBaselineStatus] = useState('');
  const shareStatusTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const baselineKey = baselineStorageKey(config.slug);
  const baselineRaw = useSyncExternalStore(
    subscribePinnedBaseline,
    () => {
      try {
        return window.sessionStorage.getItem(baselineKey) ?? '';
      } catch {
        return '';
      }
    },
    () => baselineServerSnapshot,
  );
  const storedBaseline = useMemo(
    () => baselineRaw === baselineServerSnapshot ? null : parsePinnedBaseline(baselineRaw, config),
    [baselineRaw, config],
  );
  const baselineStateReady = baselineRaw !== baselineServerSnapshot;
  const pinnedBaseline = baselineOverride?.slug === config.slug ? baselineOverride.value : storedBaseline;

  useEffect(() => {
    const applyUrlState = () => {
      const state = readUrlState(config);
      setWorkforce(state.workforce);
      setVendorScenarios(state.vendorScenarios);
      setDurationMonths(state.durationMonths);
      setUrlStateReady(true);
    };
    applyUrlState();
    window.addEventListener('popstate', applyUrlState);
    return () => window.removeEventListener('popstate', applyUrlState);
  }, [config]);

  useEffect(() => {
    if (!urlStateReady) return;
    const url = buildShareableUrl(config, workforce, vendorScenarios, durationMonths);
    window.history.replaceState(window.history.state, '', url);
  }, [config, durationMonths, urlStateReady, vendorScenarios, workforce]);

  useEffect(() => () => {
    if (shareStatusTimer.current) clearTimeout(shareStatusTimer.current);
  }, []);

  const updateWorkforce = (key: keyof WorkforceInputs, value: number) => {
    setWorkforce((current) => ({ ...current, [key]: value }));
    setCopyStatus('');
    setShareStatus('');
    setExportStatus('');
    setBaselineStatus('');
  };

  const updateVendor = <K extends keyof VendorScenario>(vendorId: string, key: K, value: VendorScenario[K]) => {
    setVendorScenarios((current) => ({
      ...current,
      [vendorId]: { ...current[vendorId], [key]: value },
    }));
    setCopyStatus('');
    setShareStatus('');
    setExportStatus('');
    setBaselineStatus('');
  };

  const updateDuration = (months: DurationMonths) => {
    setDurationMonths(months);
    setCopyStatus('');
    setShareStatus('');
    setExportStatus('');
    setBaselineStatus('');
  };

  const applyTeamPreset = (preset: (typeof teamPresets)[number]) => {
    setWorkforce((current) => ({
      ...current,
      usEmployees: preset.usEmployees,
      eorEmployees: preset.eorEmployees,
    }));
    setDurationMonths(preset.durationMonths);
    setCopyStatus('');
    setShareStatus('');
    setExportStatus('');
    setBaselineStatus('');
    window.dispatchEvent(new CustomEvent('stackevalify:track', {
      detail: { event: 'calculator_team_preset', path: window.location.pathname, preset: preset.id },
    }));
  };

  const estimates = useMemo(() => Object.fromEntries(config.vendors.map((vendor) => [
    vendor.id,
    estimateVendor(workforce, vendor, vendorScenarios[vendor.id]),
  ])) as Record<string, VendorEstimate>, [config.vendors, vendorScenarios, workforce]);

  const outlayComparison = config.vendors.map((vendor) => ({
    vendor,
    totalOutlay: cfoCostBreakdown(workforce, vendorScenarios[vendor.id], estimates[vendor.id], durationMonths).totalOutlay,
    monthOneCash: monthOneCashRequired(workforce, vendor, vendorScenarios[vendor.id], estimates[vendor.id]),
  }));
  const [firstOutlay, secondOutlay] = outlayComparison;
  const lowerOutlay = firstOutlay.totalOutlay <= secondOutlay.totalOutlay ? firstOutlay : secondOutlay;
  const higherOutlay = lowerOutlay === firstOutlay ? secondOutlay : firstOutlay;
  const outlayDelta = Math.abs(firstOutlay.totalOutlay - secondOutlay.totalOutlay);
  const currentCombinedOutlay = outlayComparison.reduce((total, item) => total + item.totalOutlay, 0);
  const pinnedCombinedOutlay = pinnedBaseline?.vendors.reduce((total, vendor) => total + vendor.totalOutlay, 0) ?? 0;
  const pinnedOutlayDelta = currentCombinedOutlay - pinnedCombinedOutlay;

  const warnings = config.vendors.flatMap((vendor) => coverageWarnings(vendor, vendorScenarios[vendor.id], workforce));

  const pinCurrentScenario = () => {
    const snapshot: PinnedBaselineScenario = {
      version: 1,
      slug: config.slug,
      pinnedAt: new Date().toISOString(),
      workforce: { ...workforce },
      durationMonths,
      vendors: config.vendors.map((vendor) => ({
        id: vendor.id,
        name: vendor.name,
        fxSpreadPercent: vendorScenarios[vendor.id].fxSpreadPercent,
        depositMonths: vendorScenarios[vendor.id].depositMonths,
        totalOutlay: cfoCostBreakdown(workforce, vendorScenarios[vendor.id], estimates[vendor.id], durationMonths).totalOutlay,
      })),
    };
    setBaselineOverride({ slug: config.slug, value: snapshot });
    setBaselineStatus('Current scenario pinned as the comparison baseline.');
    try {
      window.sessionStorage.setItem(baselineKey, JSON.stringify(snapshot));
    } catch {
      setBaselineStatus('Baseline pinned for this view. Session storage is unavailable.');
    }
    window.dispatchEvent(new Event(baselineChangeEvent));
    window.dispatchEvent(new CustomEvent('stackevalify:track', {
      detail: { event: 'calculator_pin_baseline', path: window.location.pathname, months: durationMonths },
    }));
  };

  const clearPinnedBaseline = () => {
    setBaselineOverride({ slug: config.slug, value: null });
    setBaselineStatus('Pinned baseline cleared.');
    try {
      window.sessionStorage.removeItem(baselineKey);
    } catch {
      // State still clears when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(baselineChangeEvent));
    window.dispatchEvent(new CustomEvent('stackevalify:track', {
      detail: { event: 'calculator_clear_baseline', path: window.location.pathname },
    }));
  };

  const copySlackSummary = async () => {
    const vendorLines = config.vendors.map((vendor) => {
      const estimate = estimates[vendor.id];
      const advertised = estimate.advertised12 * (durationMonths / 12);
      const serviceInvoice = durationMonths === 12 ? estimate.yearOne : estimate.total24;
      return `${vendor.name}: advertised ${durationMonths}-month baseline ${currency.format(advertised)} · ${durationMonths}-month service invoice ${currency.format(serviceInvoice)} · refundable cash-flow deposit ${currency.format(estimate.cashFlowDeposit)}`;
    });
    const summary = [
      `*${config.title} — ${durationMonths}-month TCO baseline*`,
      `Scope: ${workforce.usEmployees} US payroll employees · ${workforce.eorEmployees} EOR employees · ${workforce.contractors} contractors`,
      ...vendorLines,
      `FX volume basis: ${currency.format(workforce.eorEmployees * workforce.eorMonthlyGrossSalary + workforce.contractors * workforce.contractorAverageMonthlyInvoice)} per month`,
      warnings.length ? `Coverage gaps: ${warnings.join(' ')}` : 'Coverage gaps: none in the current baseline.',
      `Source check: ${config.sourceCheckedAt}. Replace scenario assumptions with the signed order form before approval.`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus('Slack summary copied.');
    } catch {
      setCopyStatus('Copy failed. Select the figures from the table instead.');
    }
  };

  const copyShareableLink = async () => {
    const url = buildShareableUrl(config, workforce, vendorScenarios, durationMonths);
    window.history.replaceState(window.history.state, '', url);
    try {
      await navigator.clipboard.writeText(url.toString());
      setShareStatus('Link Copied!');
      if (shareStatusTimer.current) clearTimeout(shareStatusTimer.current);
      shareStatusTimer.current = setTimeout(() => setShareStatus(''), 2000);
      window.dispatchEvent(new CustomEvent('stackevalify:track', {
        detail: { event: 'calculator_share_link', path: window.location.pathname, months: durationMonths },
      }));
    } catch {
      setShareStatus('Link copy failed. Copy the browser address instead.');
    }
  };

  const exportCfoCsv = () => {
    const publicShareableUrl = buildPublicShareableUrl(config, workforce, vendorScenarios, durationMonths);
    const vendorBreakdowns = Object.fromEntries(config.vendors.map((vendor) => [
      vendor.id,
      cfoCostBreakdown(workforce, vendorScenarios[vendor.id], estimates[vendor.id], durationMonths),
    ])) as Record<string, CfoCostBreakdown>;
    const [firstVendor, secondVendor] = config.vendors;
    const rows: (string | number)[][] = [
      ['StackEvalify CFO TCO Export', config.title, `${durationMonths} months`, 'USD'],
      [],
      ['Scenario Input', 'Value', 'Unit', 'Notes'],
      ['US Payroll Employees', workforce.usEmployees, 'employees', 'Current calculator state'],
      ['International EOR Employees', workforce.eorEmployees, 'employees', 'Current calculator state'],
      ['Contractors', workforce.contractors, 'contractors', 'Current calculator state'],
      ['Calculation Horizon', durationMonths, 'months', 'Current calculator state'],
      ...config.vendors.flatMap((vendor) => [
        [`${vendor.name} Custom FX Spread`, vendorScenarios[vendor.id].fxSpreadPercent, '%', 'Negotiated scenario override'],
        [`${vendor.name} Security Deposit`, vendorScenarios[vendor.id].depositMonths, 'salary months', 'Negotiated scenario override'],
      ]),
      [],
      ['Cost Line Item', 'Currency', firstVendor.name, secondVendor.name],
      ['Advertised Base Fee', 'USD', csvMoney(vendorBreakdowns[firstVendor.id].advertisedBaseFee), csvMoney(vendorBreakdowns[secondVendor.id].advertisedBaseFee)],
      ['Security Deposit / Reserve', 'USD', csvMoney(vendorBreakdowns[firstVendor.id].securityDeposit), csvMoney(vendorBreakdowns[secondVendor.id].securityDeposit)],
      ['FX Spread', 'USD', csvMoney(vendorBreakdowns[firstVendor.id].fxSpread), csvMoney(vendorBreakdowns[secondVendor.id].fxSpread)],
      ['Additional Fees / Onboarding', 'USD', csvMoney(vendorBreakdowns[firstVendor.id].additionalFees), csvMoney(vendorBreakdowns[secondVendor.id].additionalFees)],
      ['Total Outlay', 'USD', csvMoney(vendorBreakdowns[firstVendor.id].totalOutlay), csvMoney(vendorBreakdowns[secondVendor.id].totalOutlay)],
      [],
      ['Source Note', 'Shareable Scenario URL', publicShareableUrl.toString(), ''],
      ['Methodology Note', 'Audited via StackEvalify.com — Independent B2B SaaS TCO Methodology', '', ''],
    ];
    const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(',')).join('\r\n')}`;
    const blobUrl = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const download = document.createElement('a');
    download.href = blobUrl;
    download.download = `stackevalify-${config.slug}-tco.csv`;
    download.hidden = true;
    document.body.appendChild(download);
    download.click();
    download.remove();
    window.setTimeout(() => URL.revokeObjectURL(blobUrl), 0);
    setExportStatus('CFO CSV downloaded.');
    window.dispatchEvent(new CustomEvent('stackevalify:track', {
      detail: { event: 'calculator_export_csv', path: window.location.pathname, months: durationMonths },
    }));
  };
  const saveCfoPdf = () => {
    const url = buildShareableUrl(config, workforce, vendorScenarios, durationMonths);
    window.history.replaceState(window.history.state, '', url);
    window.dispatchEvent(new CustomEvent('stackevalify:track', {
      detail: { event: 'calculator_export_pdf', path: window.location.pathname, months: durationMonths },
    }));
    window.print();
  };
  return (
    <div className="mt-6 grid min-h-[120rem] min-w-0 grid-cols-[minmax(0,1fr)] gap-6 sm:min-h-[96rem] lg:min-h-[88rem]" data-tco-calculator data-cls-guard data-tco-slug={config.slug} data-url-state-sync={urlStateReady ? 'ready' : 'loading'} aria-busy={!urlStateReady}>
      <aside className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-5 text-sm leading-relaxed text-amber-100">
        <strong>Audit baseline:</strong> Public list prices and disclosed model assumptions are editable below. The 24-month invoice excludes wages, employer taxes, benefits, statutory severance, and country-specific pass-through costs. Refundable deposits are shown separately from vendor revenue.
      </aside>

      <aside
        className={`min-h-32 rounded-xl border p-5 text-sm leading-relaxed sm:min-h-24 ${warnings.length > 0 ? 'border-rose-400/25 bg-rose-400/5 text-rose-100' : 'border-emerald-400/25 bg-emerald-400/5 text-emerald-100'}`}
        aria-label="Coverage status"
        aria-live="polite"
        data-coverage-cls-guard
      >
        <strong>{warnings.length > 0 ? 'Scope gap:' : 'Scope coverage:'}</strong>{' '}
        {warnings.length > 0
          ? `${warnings.join(' ')} Enter the signed quote rate before using the total for approval.`
          : 'No zero-rate coverage gaps were detected for the current worker mix. The signed quote still controls final approval.'}
      </aside>

      <fieldset className="min-w-0 rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <legend className="px-2 text-base font-bold text-white">Workforce and cash-flow assumptions</legend>
        <div className="mt-3" data-team-presets>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">1-click team presets</p>
          <div className="mt-3 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3" role="group" aria-label="Team size presets">
            {teamPresets.map((preset) => {
              const isActive = workforce.usEmployees === preset.usEmployees
                && workforce.eorEmployees === preset.eorEmployees
                && durationMonths === preset.durationMonths;
              return (
                <button
                  key={preset.id}
                  type="button"
                  data-team-preset={preset.id}
                  aria-pressed={isActive}
                  aria-label={`Apply ${preset.label} team preset`}
                  onClick={() => applyTeamPreset(preset)}
                  className={`min-h-11 min-w-0 rounded-lg border px-3 py-2.5 text-sm font-bold leading-snug transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${isActive ? 'border-blue-400 bg-blue-500 text-white' : 'border-slate-700 bg-slate-900 text-slate-200 hover:border-blue-400/70 hover:bg-slate-800'}`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">Presets update US headcount, EOR headcount, and the decision horizon. Contractor, salary, and vendor-rate assumptions stay unchanged.</p>
        </div>
        <div className="mt-3 grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NumberField id={`${config.slug}-us-employees`} label="US payroll employees" value={workforce.usEmployees} onChange={(value) => updateWorkforce('usEmployees', value)} />
          <NumberField id={`${config.slug}-eor-employees`} label="International EOR employees" value={workforce.eorEmployees} onChange={(value) => updateWorkforce('eorEmployees', value)} />
          <NumberField id={`${config.slug}-contractors`} label="Contractors" value={workforce.contractors} onChange={(value) => updateWorkforce('contractors', value)} />
          <NumberField id={`${config.slug}-eor-salary`} label="Average EOR gross salary / month" value={workforce.eorMonthlyGrossSalary} onChange={(value) => updateWorkforce('eorMonthlyGrossSalary', value)} suffix="USD" />
          <NumberField id={`${config.slug}-contractor-invoice`} label="Average contractor invoice / month" value={workforce.contractorAverageMonthlyInvoice} onChange={(value) => updateWorkforce('contractorAverageMonthlyInvoice', value)} suffix="USD" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-400">FX cost is applied to modeled EOR gross salary plus contractor invoice volume. It is not applied to platform fees.</p>

        <details className="mt-5 min-w-0 rounded-xl border border-cyan-300/30 bg-cyan-300/5 p-4 open:bg-slate-900/80" data-negotiation-levers>
          <summary className="cursor-pointer text-sm font-bold text-cyan-100 marker:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            Negotiation Levers: Deposit &amp; FX Overrides
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Model the terms Sales puts into the order form. These overrides change cash exposure only; the audited vendor defaults remain unchanged.
          </p>
          <div className="mt-4 grid min-w-0 gap-4 lg:grid-cols-2">
            {config.vendors.map((vendor) => {
              const scenario = vendorScenarios[vendor.id];
              const defaultDeposit = vendor.cashFlowDeposit.monthsOfEorGrossSalary;
              const depositChoices = [
                { id: 'default', label: `Vendor default (${defaultDeposit} mo)`, value: defaultDeposit },
                { id: 'one-month', label: '1 month deposit', value: 1 },
                { id: 'waived', label: '0 months · waived', value: 0 },
              ] as const;

              return (
                <fieldset key={vendor.id} className="min-w-0 rounded-lg border border-slate-700 bg-slate-950/80 p-4" data-negotiation-vendor={vendor.id}>
                  <legend className="px-2 text-sm font-bold text-white">{vendor.name}</legend>
                  <div>
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">Security Deposit / Reserve</p>
                      <AuditTooltip
                        term="Security Deposit / Reserve"
                        definition="A refundable deposit or reserve is cash held to cover payroll or employment obligations. It raises near-term cash exposure but is not the same as a non-refundable service fee."
                        align="right"
                      />
                    </div>
                    <div className="mt-2 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3" role="group" aria-label={`${vendor.name} security deposit options`}>
                      {depositChoices.map((choice) => {
                        const isSelected = scenario.depositMonths === choice.value
                          && (choice.id === 'default' || choice.value !== defaultDeposit);
                        return (
                          <button
                            key={choice.id}
                            type="button"
                            data-deposit-override={choice.id}
                            aria-label={`${vendor.name}: set security deposit to ${choice.label}`}
                            aria-pressed={isSelected}
                            onClick={() => updateVendor(vendor.id, 'depositMonths', choice.value)}
                            className={`min-h-11 min-w-0 rounded-lg border px-3 py-2 text-xs font-bold leading-snug transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300 ${isSelected ? 'border-cyan-300 bg-cyan-500 text-slate-950' : 'border-slate-600 bg-slate-900 text-slate-100 hover:border-cyan-300 hover:bg-slate-800'}`}
                          >
                            {choice.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 min-w-0">
                    <div className="flex min-w-0 flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex min-w-0 items-center gap-2">
                        <label htmlFor={`${config.slug}-${vendor.id}-negotiated-fx`} className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">
                          FX Conversion Spread
                        </label>
                        <AuditTooltip
                          term="FX Conversion Spread"
                          definition="The conversion spread is the percentage markup embedded in currency conversion. It scales with the payment volume converted, not merely the software subscription."
                          align="right"
                        />
                      </span>
                      <output htmlFor={`${config.slug}-${vendor.id}-negotiated-fx`} className="rounded-md border border-cyan-300/40 bg-cyan-300/10 px-2 py-1 text-sm font-black text-cyan-100">
                        {scenario.fxSpreadPercent.toFixed(1)}%
                      </output>
                    </div>
                    <input
                      id={`${config.slug}-${vendor.id}-negotiated-fx`}
                      type="range"
                      min="0"
                      max="3.5"
                      step="0.1"
                      value={scenario.fxSpreadPercent}
                      data-fx-override={vendor.id}
                      aria-label={`${vendor.name} custom FX spread`}
                      aria-valuetext={`${scenario.fxSpreadPercent.toFixed(1)} percent`}
                      onChange={(event) => updateVendor(vendor.id, 'fxSpreadPercent', Number(event.target.value))}
                      className="mt-3 h-11 w-full cursor-pointer accent-cyan-400"
                    />
                    <div className="flex justify-between text-xs font-semibold text-slate-300" aria-hidden="true"><span>0.0%</span><span>3.5%</span></div>
                    <button
                      type="button"
                      aria-label={`Reset ${vendor.name} FX spread to vendor default ${vendor.rates.fxSpreadPercent} percent`}
                      onClick={() => updateVendor(vendor.id, 'fxSpreadPercent', vendor.rates.fxSpreadPercent)}
                      className="mt-3 min-h-11 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-100 transition-colors hover:border-cyan-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    >
                      Reset FX to default ({vendor.rates.fxSpreadPercent.toFixed(1)}%)
                    </button>
                  </div>
                </fieldset>
              );
            })}
          </div>
        </details>
      </fieldset>

      <fieldset className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <legend className="px-2 text-base font-bold text-white">Decision horizon</legend>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">Choose the horizon used by the chart, Slack summary, and shareable URL. The detailed table continues to show both years.</p>
        <div className="mt-4 inline-flex rounded-lg border border-slate-700 bg-slate-950 p-1" role="group" aria-label="Calculation period">
          {([12, 24] as const).map((months) => (
            <button
              key={months}
              type="button"
              aria-pressed={durationMonths === months}
              aria-label={`Use a ${months}-month calculation horizon`}
              onClick={() => updateDuration(months)}
              className={`min-h-11 rounded-md px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${durationMonths === months ? 'bg-blue-500 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
            >
              {months} months
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 lg:grid-cols-2">
        {config.vendors.map((vendor, index) => {
          const scenario = vendorScenarios[vendor.id];
          const tint = index === 0 ? 'border-blue-400/20 bg-blue-400/5' : 'border-violet-400/20 bg-violet-400/5';
          return (
            <fieldset key={vendor.id} className={`min-w-0 rounded-xl border p-5 ${tint}`}>
              <legend className="px-2 text-base font-bold text-white">{vendor.name} rate inputs</legend>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{vendor.pricingBasis}</p>
              <div className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
                <NumberField id={`${config.slug}-${vendor.id}-us`} label="US payroll / employee / month" value={scenario.usPayrollPerEmployee} onChange={(value) => updateVendor(vendor.id, 'usPayrollPerEmployee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-eor`} label="EOR / employee / month" value={scenario.eorPerEmployee} onChange={(value) => updateVendor(vendor.id, 'eorPerEmployee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-contractor`} label="Contractor / month" value={scenario.contractorPerWorker} onChange={(value) => updateVendor(vendor.id, 'contractorPerWorker', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-core`} label="Core platform / employee / month" value={scenario.corePlatformPerEmployee} onChange={(value) => updateVendor(vendor.id, 'corePlatformPerEmployee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-it`} label="IT management / employee / month" value={scenario.itManagementPerEmployee} onChange={(value) => updateVendor(vendor.id, 'itManagementPerEmployee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-base`} label="Base platform fee / month" value={scenario.basePlatformFee} onChange={(value) => updateVendor(vendor.id, 'basePlatformFee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-implementation`} label="Implementation fee" value={scenario.implementationFee} onChange={(value) => updateVendor(vendor.id, 'implementationFee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-renewal`} label="Year-two renewal uplift" value={scenario.renewalUpliftPercent} onChange={(value) => updateVendor(vendor.id, 'renewalUpliftPercent', value)} step={0.1} suffix="%" />
              </div>
              {vendor.rates.implementationWaivableWithAnnualCommitment && (
                <label className="mt-4 flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-200">
                  <input type="checkbox" checked={scenario.waiveImplementation} onChange={(event) => updateVendor(vendor.id, 'waiveImplementation', event.target.checked)} className="size-4 accent-blue-500" />
                  Waive implementation fee for annual commitment
                </label>
              )}
              <ul className="mt-4 list-disc space-y-2 pl-5 text-xs leading-relaxed text-slate-400">
                {vendor.assumptions.map((assumption) => <li key={assumption}>{assumption}</li>)}
              </ul>
            </fieldset>
          );
        })}
      </div>

      <section aria-labelledby={`${config.slug}-tco-results`} className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Normalized output</p>
            <h3 id={`${config.slug}-tco-results`} className="mt-2 text-xl font-bold text-white">Advertised price versus normalized invoice</h3>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:justify-end" data-print-actions>
            <button type="button" onClick={pinCurrentScenario} disabled={!urlStateReady} data-pin-baseline className="inline-flex min-h-11 items-center justify-center rounded-lg border border-cyan-300/50 bg-cyan-300/10 px-4 py-2.5 text-sm font-bold text-cyan-100 transition-colors hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 disabled:cursor-wait disabled:opacity-60">
              Pin as Baseline
            </button>
            <button type="button" onClick={copySlackSummary} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
              Copy Slack summary
            </button>
            <button type="button" onClick={copyShareableLink} data-share-calculator-link className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-400/40 bg-blue-400/10 px-4 py-2.5 text-sm font-bold text-blue-100 transition-colors hover:bg-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Copy Shareable Link
            </button>
            <button type="button" onClick={exportCfoCsv} data-export-cfo-csv aria-label="Export CFO CSV" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-4 py-2.5 text-sm font-bold text-emerald-100 transition-colors hover:bg-emerald-400/20 focus:outline-none focus:ring-2 focus:ring-emerald-300">
              Export CSV
            </button>
            <button type="button" onClick={saveCfoPdf} data-save-cfo-pdf className="inline-flex min-h-11 items-center justify-center rounded-lg border border-amber-300/40 bg-amber-300/10 px-4 py-2.5 text-sm font-bold text-amber-100 transition-colors hover:bg-amber-300/20 focus:outline-none focus:ring-2 focus:ring-amber-200">
              Save PDF
            </button>
          </div>
        </div>
        <div className="mt-3 grid min-h-5 gap-1 text-sm" aria-live="polite">
          {copyStatus && <p className="text-emerald-300">{copyStatus}</p>}
          {shareStatus && <p className="text-blue-200">{shareStatus}</p>}
          {exportStatus && <p className="text-emerald-300">{exportStatus}</p>}
          {baselineStatus && <p className="text-cyan-200">{baselineStatus}</p>}
        </div>

        <section
          className="mt-4 min-h-[14rem] rounded-xl border border-cyan-300/25 bg-cyan-300/5 p-5"
          data-pinned-baseline
          data-baseline-state={baselineStateReady ? (pinnedBaseline ? 'pinned' : 'empty') : 'loading'}
          aria-live="polite"
        >
          {!baselineStateReady ? (
            <div className="animate-pulse" aria-label="Loading pinned baseline">
              <div className="h-4 w-40 rounded bg-slate-700" />
              <div className="mt-4 h-8 w-3/4 rounded bg-slate-800" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="h-20 rounded bg-slate-800" /><div className="h-20 rounded bg-slate-800" /></div>
            </div>
          ) : pinnedBaseline ? (
            <>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">Pinned baseline scenario</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {pinnedBaseline.workforce.usEmployees} US · {pinnedBaseline.workforce.eorEmployees} EOR · {pinnedBaseline.workforce.contractors} contractors · {pinnedBaseline.durationMonths} months
                  </p>
                  <p className="mt-2 text-lg font-black text-white" data-baseline-delta>
                    {pinnedOutlayDelta === 0
                      ? 'The current combined outlay matches the pinned baseline.'
                      : `The current combined outlay is ${currency.format(Math.abs(pinnedOutlayDelta))} ${pinnedOutlayDelta < 0 ? 'cheaper' : 'more expensive'} than the pinned baseline.`}
                  </p>
                </div>
                <button type="button" onClick={clearPinnedBaseline} data-clear-baseline className="min-h-11 shrink-0 rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm font-bold text-slate-100 transition-colors hover:border-rose-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-300">
                  Clear Baseline
                </button>
              </div>
              <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2">
                {pinnedBaseline.vendors.map((snapshot) => {
                  const currentVendor = outlayComparison.find(({ vendor }) => vendor.id === snapshot.id);
                  const vendorDelta = (currentVendor?.totalOutlay ?? 0) - snapshot.totalOutlay;
                  return (
                    <article key={snapshot.id} className="min-w-0 rounded-lg border border-slate-700 bg-slate-950/80 p-4">
                      <h4 className="font-bold text-white">{snapshot.name}</h4>
                      <p className="mt-1 text-sm text-slate-300">Pinned outlay: <strong className="text-white">{currency.format(snapshot.totalOutlay)}</strong></p>
                      <p className="mt-1 text-sm text-slate-300">Deposit {snapshot.depositMonths} mo · FX {snapshot.fxSpreadPercent.toFixed(1)}%</p>
                      <p className={`mt-2 text-sm font-bold ${vendorDelta <= 0 ? 'text-emerald-300' : 'text-amber-200'}`}>
                        Current: {vendorDelta === 0 ? 'no change' : `${currency.format(Math.abs(vendorDelta))} ${vendorDelta < 0 ? 'lower' : 'higher'}`}
                      </p>
                    </article>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex min-h-[10rem] flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">Pinned baseline scenario</p>
              <h4 className="mt-2 text-lg font-bold text-white">No baseline pinned yet</h4>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">Adjust headcount, contract horizon, deposit, and FX assumptions, then choose “Pin as Baseline” to compare the next negotiation case against this snapshot.</p>
            </div>
          )}
        </section>

        <aside className="mt-5 rounded-xl border border-amber-300/30 bg-gradient-to-br from-amber-300/10 via-slate-900 to-blue-400/10 p-5" data-cash-shock-callout aria-label={`${durationMonths}-month cost delta and month-one cash requirement`}>
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-200">{durationMonths}-month delta &amp; Month-1 Upfront Cash</p>
            <AuditTooltip
              term="Month-1 Upfront Cash"
              definition="Month-1 upfront cash combines the first billing cycle with implementation charges and any refundable deposit or reserve. It measures liquidity required at launch, not just recognized expense."
            />
          </div>
          <p className="mt-3 text-lg font-bold leading-snug text-white" data-outlay-delta>
            {outlayDelta === 0
              ? `${firstOutlay.vendor.name} and ${secondOutlay.vendor.name} tie at ${currency.format(firstOutlay.totalOutlay)} total outlay.`
              : `${lowerOutlay.vendor.name} is ${currency.format(outlayDelta)} lower than ${higherOutlay.vendor.name} in total outlay.`}
          </p>
          <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2">
            {outlayComparison.map(({ vendor, monthOneCash }) => (
              <div key={vendor.id} className="min-w-0 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-slate-300">{vendor.name} month-1 upfront cash</p>
                <p className="mt-1 break-words text-2xl font-black text-white">{currency.format(monthOneCash)}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-400">Month-1 upfront cash required = first-month recurring, platform and FX charges + implementation fee (if applicable) + refundable security deposit or reserve.</p>
        </aside>
        <StackedCostChart config={config} estimates={estimates} durationMonths={durationMonths} />

        <div className="mt-4 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
          <table className="w-full min-w-[68rem] border-collapse text-left text-sm" data-comparison-table>
            <caption className="sr-only">{config.title} advertised annual prices, normalized 12- and 24-month invoice estimates, and refundable cash-flow deposits</caption>
            <thead className="bg-slate-950 text-slate-200">
              <tr>
                <th scope="col" className="p-4">Vendor</th>
                <th scope="col" className="p-4">Advertised · 12 months</th>
                <th scope="col" className="p-4">Normalized year 1</th>
                <th scope="col" className="p-4">Normalized year 2</th>
                <th scope="col" className="p-4">Service invoice · 24 months</th>
                <th scope="col" className="p-4">Delta vs list</th>
                <th scope="col" className="p-4">Cash-flow deposit</th>
                <th scope="col" className="p-4">Peak 24-month cash need</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {config.vendors.map((vendor) => {
                const estimate = estimates[vendor.id];
                return (
                  <tr key={vendor.id}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-bold text-white">{vendor.name}</th>
                    <td className="p-4">{currency.format(estimate.advertised12)}</td>
                    <td className="p-4">{currency.format(estimate.yearOne)}</td>
                    <td className="p-4">{currency.format(estimate.yearTwo)}</td>
                    <td className="p-4 font-bold text-white">{currency.format(estimate.total24)}</td>
                    <td className="p-4 text-amber-200">{currency.format(estimate.delta24)}</td>
                    <td className="p-4 text-blue-200">{currency.format(estimate.cashFlowDeposit)}</td>
                    <td className="p-4 font-bold text-white">{currency.format(estimate.peakCashRequirement)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid gap-3 sm:hidden">
          {config.vendors.map((vendor) => {
            const estimate = estimates[vendor.id];
            return (
              <article key={vendor.id} className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                <h4 className="font-bold text-white">{vendor.name}</h4>
                <dl className="mt-3 grid gap-2 text-sm text-slate-300">
                  <div className="flex justify-between gap-4"><dt>Advertised · 12 mo</dt><dd>{currency.format(estimate.advertised12)}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Normalized · year 1</dt><dd>{currency.format(estimate.yearOne)}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Normalized · year 2</dt><dd>{currency.format(estimate.yearTwo)}</dd></div>
                  <div className="flex justify-between gap-4 border-t border-slate-800 pt-2 font-bold text-white"><dt>Service invoice · 24 mo</dt><dd>{currency.format(estimate.total24)}</dd></div>
                  <div className="flex justify-between gap-4 text-amber-200"><dt>Delta vs list</dt><dd>{currency.format(estimate.delta24)}</dd></div>
                  <div className="flex justify-between gap-4 text-blue-200"><dt>Refundable deposit</dt><dd>{currency.format(estimate.cashFlowDeposit)}</dd></div>
                  <div className="flex justify-between gap-4 font-bold text-white"><dt>Peak cash need</dt><dd>{currency.format(estimate.peakCashRequirement)}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-400">Cash-flow deposits are excluded from the 24-month service invoice because they are modeled as refundable. Peak cash need adds the deposit to the service invoice without treating it as vendor revenue.</p>
      </section>

      <CfoPrintReport
        config={config}
        workforce={workforce}
        vendorScenarios={vendorScenarios}
        estimates={estimates}
        durationMonths={durationMonths}
      />
    </div>
  );
}
