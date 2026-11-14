'use client';

import { useMemo, useState } from 'react';
import type { TcoComparisonConfig, TcoHeadcountKey, TcoVendorConfig } from '@/lib/tco-configs';

type WorkforceInputs = TcoComparisonConfig['defaultWorkforce'];

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

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

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
    <label htmlFor={id} className="grid gap-2 text-sm text-slate-200">
      <span className="font-semibold">{label}</span>
      <span className="flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-950 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20">
        <input
          id={id}
          type="number"
          min="0"
          step={step}
          value={value}
          onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-white outline-none"
        />
        {suffix && <span className="border-l border-slate-800 px-3 text-xs font-semibold text-slate-400">{suffix}</span>}
      </span>
    </label>
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
  const [copyStatus, setCopyStatus] = useState('');

  const updateWorkforce = (key: keyof WorkforceInputs, value: number) => {
    setWorkforce((current) => ({ ...current, [key]: value }));
    setCopyStatus('');
  };

  const updateVendor = <K extends keyof VendorScenario>(vendorId: string, key: K, value: VendorScenario[K]) => {
    setVendorScenarios((current) => ({
      ...current,
      [vendorId]: { ...current[vendorId], [key]: value },
    }));
    setCopyStatus('');
  };

  const estimates = useMemo(() => Object.fromEntries(config.vendors.map((vendor) => [
    vendor.id,
    estimateVendor(workforce, vendor, vendorScenarios[vendor.id]),
  ])) as Record<string, VendorEstimate>, [config.vendors, vendorScenarios, workforce]);

  const warnings = config.vendors.flatMap((vendor) => coverageWarnings(vendor, vendorScenarios[vendor.id], workforce));

  const copySlackSummary = async () => {
    const vendorLines = config.vendors.map((vendor) => {
      const estimate = estimates[vendor.id];
      return `${vendor.name}: advertised 12-month run rate ${currency.format(estimate.advertised12)} · 24-month service invoice ${currency.format(estimate.total24)} · refundable cash-flow deposit ${currency.format(estimate.cashFlowDeposit)}`;
    });
    const summary = [
      `*${config.title} — 24-month TCO baseline*`,
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

  return (
    <div className="mt-6 grid gap-6" data-tco-calculator data-tco-slug={config.slug}>
      <aside className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-5 text-sm leading-relaxed text-amber-100">
        <strong>Audit baseline:</strong> Public list prices and disclosed model assumptions are editable below. The 24-month invoice excludes wages, employer taxes, benefits, statutory severance, and country-specific pass-through costs. Refundable deposits are shown separately from vendor revenue.
      </aside>

      {warnings.length > 0 && (
        <aside className="rounded-xl border border-rose-400/25 bg-rose-400/5 p-5 text-sm leading-relaxed text-rose-100" aria-label="Coverage gaps">
          <strong>Scope gap:</strong> {warnings.join(' ')} Enter the signed quote rate before using the total for approval.
        </aside>
      )}

      <fieldset className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <legend className="px-2 text-base font-bold text-white">Workforce and cash-flow assumptions</legend>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NumberField id={`${config.slug}-us-employees`} label="US payroll employees" value={workforce.usEmployees} onChange={(value) => updateWorkforce('usEmployees', value)} />
          <NumberField id={`${config.slug}-eor-employees`} label="International EOR employees" value={workforce.eorEmployees} onChange={(value) => updateWorkforce('eorEmployees', value)} />
          <NumberField id={`${config.slug}-contractors`} label="Contractors" value={workforce.contractors} onChange={(value) => updateWorkforce('contractors', value)} />
          <NumberField id={`${config.slug}-eor-salary`} label="Average EOR gross salary / month" value={workforce.eorMonthlyGrossSalary} onChange={(value) => updateWorkforce('eorMonthlyGrossSalary', value)} suffix="USD" />
          <NumberField id={`${config.slug}-contractor-invoice`} label="Average contractor invoice / month" value={workforce.contractorAverageMonthlyInvoice} onChange={(value) => updateWorkforce('contractorAverageMonthlyInvoice', value)} suffix="USD" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-400">FX cost is applied to modeled EOR gross salary plus contractor invoice volume. It is not applied to platform fees.</p>
      </fieldset>

      <div className="grid gap-5 lg:grid-cols-2">
        {config.vendors.map((vendor, index) => {
          const scenario = vendorScenarios[vendor.id];
          const tint = index === 0 ? 'border-blue-400/20 bg-blue-400/5' : 'border-violet-400/20 bg-violet-400/5';
          return (
            <fieldset key={vendor.id} className={`rounded-xl border p-5 ${tint}`}>
              <legend className="px-2 text-base font-bold text-white">{vendor.name} rate inputs</legend>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{vendor.pricingBasis}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <NumberField id={`${config.slug}-${vendor.id}-us`} label="US payroll / employee / month" value={scenario.usPayrollPerEmployee} onChange={(value) => updateVendor(vendor.id, 'usPayrollPerEmployee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-eor`} label="EOR / employee / month" value={scenario.eorPerEmployee} onChange={(value) => updateVendor(vendor.id, 'eorPerEmployee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-contractor`} label="Contractor / month" value={scenario.contractorPerWorker} onChange={(value) => updateVendor(vendor.id, 'contractorPerWorker', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-core`} label="Core platform / employee / month" value={scenario.corePlatformPerEmployee} onChange={(value) => updateVendor(vendor.id, 'corePlatformPerEmployee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-it`} label="IT management / employee / month" value={scenario.itManagementPerEmployee} onChange={(value) => updateVendor(vendor.id, 'itManagementPerEmployee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-base`} label="Base platform fee / month" value={scenario.basePlatformFee} onChange={(value) => updateVendor(vendor.id, 'basePlatformFee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-implementation`} label="Implementation fee" value={scenario.implementationFee} onChange={(value) => updateVendor(vendor.id, 'implementationFee', value)} suffix="USD" />
                <NumberField id={`${config.slug}-${vendor.id}-fx`} label="FX spread" value={scenario.fxSpreadPercent} onChange={(value) => updateVendor(vendor.id, 'fxSpreadPercent', value)} step={0.1} suffix="%" />
                <NumberField id={`${config.slug}-${vendor.id}-renewal`} label="Year-two renewal uplift" value={scenario.renewalUpliftPercent} onChange={(value) => updateVendor(vendor.id, 'renewalUpliftPercent', value)} step={0.1} suffix="%" />
                <NumberField id={`${config.slug}-${vendor.id}-deposit`} label="Refundable deposit / EOR salary months" value={scenario.depositMonths} onChange={(value) => updateVendor(vendor.id, 'depositMonths', value)} step={0.1} suffix="months" />
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
            <h3 id={`${config.slug}-tco-results`} className="mt-2 text-xl font-bold text-white">Advertised price versus 24-month invoice</h3>
          </div>
          <button type="button" onClick={copySlackSummary} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
            Copy Slack summary
          </button>
        </div>
        <p className="mt-3 min-h-5 text-sm text-emerald-300" aria-live="polite">{copyStatus}</p>

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
    </div>
  );
}
