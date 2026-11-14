'use client';

import { useMemo, useState } from 'react';

type CalculatorInputs = {
  usEmployees: number;
  eorEmployees: number;
  contractors: number;
  fxSpread: number;
  renewalUplift: number;
  deelUsRate: number;
  deelEorRate: number;
  deelContractorRate: number;
  deelBaseFee: number;
  deelImplementation: number;
  ripplingUsRate: number;
  ripplingEorRate: number;
  ripplingContractorRate: number;
  ripplingBaseFee: number;
  ripplingImplementation: number;
};

type VendorEstimate = {
  advertised12: number;
  advertised24: number;
  yearOne: number;
  yearTwo: number;
  total24: number;
  delta24: number;
};

const VERIFY_LABEL = '[VERIFY_BILLING_DATA]';

const initialInputs: CalculatorInputs = {
  usEmployees: 20,
  eorEmployees: 5,
  contractors: 5,
  fxSpread: 1,
  renewalUplift: 5,
  // [VERIFY_BILLING_DATA] Replace every rate below with a dated quote, order form, or invoice before approval.
  deelUsRate: 0,
  deelEorRate: 599,
  deelContractorRate: 49,
  deelBaseFee: 0,
  deelImplementation: 0,
  ripplingUsRate: 8,
  ripplingEorRate: 0,
  ripplingContractorRate: 0,
  ripplingBaseFee: 0,
  ripplingImplementation: 0,
};

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function estimateVendor(
  inputs: CalculatorInputs,
  rates: { us: number; eor: number; contractor: number; baseFee: number; implementation: number },
): VendorEstimate {
  const recurringMonthly = (
    inputs.usEmployees * rates.us
    + inputs.eorEmployees * rates.eor
    + inputs.contractors * rates.contractor
  );
  const fxEligibleMonthly = inputs.eorEmployees * rates.eor + inputs.contractors * rates.contractor;
  const fxMonthly = fxEligibleMonthly * (inputs.fxSpread / 100);
  const advertised12 = recurringMonthly * 12;
  const advertised24 = advertised12 * 2;
  const yearOne = (recurringMonthly + rates.baseFee + fxMonthly) * 12 + rates.implementation;
  const yearTwo = (recurringMonthly + rates.baseFee + fxMonthly) * 12 * (1 + inputs.renewalUplift / 100);
  const total24 = yearOne + yearTwo;

  return {
    advertised12,
    advertised24,
    yearOne,
    yearTwo,
    total24,
    delta24: total24 - advertised24,
  };
}

function NumberField({
  id,
  label,
  value,
  onChange,
  step = 1,
  suffix,
  verify = false,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  suffix?: string;
  verify?: boolean;
}) {
  return (
    <label htmlFor={id} className="grid gap-2 text-sm text-slate-200">
      <span className="font-semibold">
        {label}
        {verify && <span className="ml-2 font-mono text-[0.68rem] text-amber-300">{VERIFY_LABEL}</span>}
      </span>
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

export default function TcoCalculator() {
  const [inputs, setInputs] = useState(initialInputs);
  const [copyStatus, setCopyStatus] = useState('');

  const update = (key: keyof CalculatorInputs, value: number) => {
    setInputs((current) => ({ ...current, [key]: value }));
    setCopyStatus('');
  };

  const estimates = useMemo(() => ({
    Deel: estimateVendor(inputs, {
      us: inputs.deelUsRate,
      eor: inputs.deelEorRate,
      contractor: inputs.deelContractorRate,
      baseFee: inputs.deelBaseFee,
      implementation: inputs.deelImplementation,
    }),
    Rippling: estimateVendor(inputs, {
      us: inputs.ripplingUsRate,
      eor: inputs.ripplingEorRate,
      contractor: inputs.ripplingContractorRate,
      baseFee: inputs.ripplingBaseFee,
      implementation: inputs.ripplingImplementation,
    }),
  }), [inputs]);

  const copySlackSummary = async () => {
    const summary = [
      '*Deel vs Rippling — 24-month TCO draft*',
      `Scope: ${inputs.usEmployees} US payroll employees · ${inputs.eorEmployees} EOR employees · ${inputs.contractors} contractors`,
      `Deel: advertised 12-month run rate ${currency.format(estimates.Deel.advertised12)} · normalized 24-month invoice ${currency.format(estimates.Deel.total24)}`,
      `Rippling: advertised 12-month run rate ${currency.format(estimates.Rippling.advertised12)} · normalized 24-month invoice ${currency.format(estimates.Rippling.total24)}`,
      `Assumptions: ${inputs.fxSpread}% FX spread · ${inputs.renewalUplift}% year-two uplift`,
      `${VERIFY_LABEL}: replace every editable vendor rate, base fee, and implementation fee with a dated quote or order form before approval.`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus('Slack summary copied.');
    } catch {
      setCopyStatus('Copy failed. Select the figures from the table instead.');
    }
  };

  const vendorRows = Object.entries(estimates) as Array<[keyof typeof estimates, VendorEstimate]>;

  return (
    <div className="mt-6 grid gap-6" data-tco-calculator>
      <aside className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-5 text-sm leading-relaxed text-amber-100">
        <strong>Approval gate:</strong> Public starting prices are prefilled only to expose the math. Every vendor rate, base fee, and implementation fee remains <span className="font-mono text-xs">{VERIFY_LABEL}</span> until replaced with dated billing evidence. This estimates platform and service invoices, not wages, employer taxes, benefits, or statutory severance.
      </aside>

      <fieldset className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <legend className="px-2 text-base font-bold text-white">Workforce and contract assumptions</legend>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NumberField id="us-employees" label="US payroll employees" value={inputs.usEmployees} onChange={(value) => update('usEmployees', value)} />
          <NumberField id="eor-employees" label="International EOR employees" value={inputs.eorEmployees} onChange={(value) => update('eorEmployees', value)} />
          <NumberField id="contractors" label="Contractors" value={inputs.contractors} onChange={(value) => update('contractors', value)} />
          <NumberField id="fx-spread" label="FX spread assumption" value={inputs.fxSpread} onChange={(value) => update('fxSpread', value)} step={0.1} suffix="%" />
          <NumberField id="renewal-uplift" label="Year-two renewal uplift" value={inputs.renewalUplift} onChange={(value) => update('renewalUplift', value)} step={0.1} suffix="%" />
        </div>
      </fieldset>

      <div className="grid gap-5 lg:grid-cols-2">
        <fieldset className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
          <legend className="px-2 text-base font-bold text-white">Deel quote inputs</legend>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">The public defaults are not invoice proof. US Payroll stays at $0 because the published US PEO starting price is not interchangeable with a payroll-only rate.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <NumberField id="deel-us-rate" label="US payroll / employee / month" value={inputs.deelUsRate} onChange={(value) => update('deelUsRate', value)} verify suffix="USD" />
            <NumberField id="deel-eor-rate" label="EOR / employee / month" value={inputs.deelEorRate} onChange={(value) => update('deelEorRate', value)} verify suffix="USD" />
            <NumberField id="deel-contractor-rate" label="Contractor / month" value={inputs.deelContractorRate} onChange={(value) => update('deelContractorRate', value)} verify suffix="USD" />
            <NumberField id="deel-base-fee" label="Base platform fee / month" value={inputs.deelBaseFee} onChange={(value) => update('deelBaseFee', value)} verify suffix="USD" />
            <NumberField id="deel-implementation" label="Implementation fee" value={inputs.deelImplementation} onChange={(value) => update('deelImplementation', value)} verify suffix="USD" />
          </div>
        </fieldset>

        <fieldset className="rounded-xl border border-violet-400/20 bg-violet-400/5 p-5">
          <legend className="px-2 text-base font-bold text-white">Rippling quote inputs</legend>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">The $8 default is the public platform starting point, not a complete US Payroll, EOR, contractor, IT, or spend quote. Enter the contracted per-worker rates.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <NumberField id="rippling-us-rate" label="US payroll / employee / month" value={inputs.ripplingUsRate} onChange={(value) => update('ripplingUsRate', value)} verify suffix="USD" />
            <NumberField id="rippling-eor-rate" label="EOR / employee / month" value={inputs.ripplingEorRate} onChange={(value) => update('ripplingEorRate', value)} verify suffix="USD" />
            <NumberField id="rippling-contractor-rate" label="Contractor / month" value={inputs.ripplingContractorRate} onChange={(value) => update('ripplingContractorRate', value)} verify suffix="USD" />
            <NumberField id="rippling-base-fee" label="Base platform fee / month" value={inputs.ripplingBaseFee} onChange={(value) => update('ripplingBaseFee', value)} verify suffix="USD" />
            <NumberField id="rippling-implementation" label="Implementation fee" value={inputs.ripplingImplementation} onChange={(value) => update('ripplingImplementation', value)} verify suffix="USD" />
          </div>
        </fieldset>
      </div>

      <section aria-labelledby="tco-results" className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Normalized output</p>
            <h3 id="tco-results" className="mt-2 text-xl font-bold text-white">Advertised price versus 24-month invoice</h3>
          </div>
          <button type="button" onClick={copySlackSummary} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
            Copy Slack summary
          </button>
        </div>
        <p className="mt-3 min-h-5 text-sm text-emerald-300" aria-live="polite">{copyStatus}</p>

        <div className="mt-4 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
          <table className="w-full min-w-[52rem] border-collapse text-left text-sm" data-comparison-table>
            <caption className="sr-only">Deel and Rippling advertised annual prices and normalized 12- and 24-month invoice estimates</caption>
            <thead className="bg-slate-950 text-slate-200">
              <tr>
                <th scope="col" className="p-4">Vendor</th>
                <th scope="col" className="p-4">Advertised list price · 12 months</th>
                <th scope="col" className="p-4">Normalized year 1</th>
                <th scope="col" className="p-4">Normalized year 2</th>
                <th scope="col" className="p-4">Total invoice · 24 months</th>
                <th scope="col" className="p-4">24-month delta vs list</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {vendorRows.map(([vendor, estimate]) => (
                <tr key={vendor}>
                  <th scope="row" className="bg-slate-950/60 p-4 font-bold text-white">{vendor}</th>
                  <td className="p-4">{currency.format(estimate.advertised12)}</td>
                  <td className="p-4">{currency.format(estimate.yearOne)}</td>
                  <td className="p-4">{currency.format(estimate.yearTwo)}</td>
                  <td className="p-4 font-bold text-white">{currency.format(estimate.total24)}</td>
                  <td className="p-4 text-amber-200">{currency.format(estimate.delta24)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid gap-3 sm:hidden">
          {vendorRows.map(([vendor, estimate]) => (
            <article key={vendor} className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
              <h4 className="font-bold text-white">{vendor}</h4>
              <dl className="mt-3 grid gap-2 text-sm text-slate-300">
                <div className="flex justify-between gap-4"><dt>Advertised · 12 mo</dt><dd>{currency.format(estimate.advertised12)}</dd></div>
                <div className="flex justify-between gap-4"><dt>Normalized · year 1</dt><dd>{currency.format(estimate.yearOne)}</dd></div>
                <div className="flex justify-between gap-4"><dt>Normalized · year 2</dt><dd>{currency.format(estimate.yearTwo)}</dd></div>
                <div className="flex justify-between gap-4 border-t border-slate-800 pt-2 font-bold text-white"><dt>Total · 24 mo</dt><dd>{currency.format(estimate.total24)}</dd></div>
                <div className="flex justify-between gap-4 text-amber-200"><dt>Delta vs list</dt><dd>{currency.format(estimate.delta24)}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
