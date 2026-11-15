'use client';

import { useMemo, useState } from 'react';
import type { EorCostCalculatorConfig, EorCostVendorConfig } from '@/lib/eor-cost-calculator';

type CalculatorInputs = EorCostCalculatorConfig['defaultInputs'];

type VendorEstimate = {
  managementMonthly: number;
  management12: number;
  management24: number;
  fxMonthly: number;
  fx12: number;
  fx24: number;
  service12: number;
  service24: number;
  refundableDeposit: number;
};

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

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
          onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-white outline-none"
        />
        {suffix && <span className="border-l border-slate-800 px-3 text-xs font-semibold text-slate-400">{suffix}</span>}
      </span>
    </label>
  );
}

function estimateVendor(inputs: CalculatorInputs, vendor: EorCostVendorConfig): VendorEstimate {
  const managementMonthly = (
    inputs.eorEmployees * vendor.eorMonthlyFee
    + inputs.contractors * vendor.contractorMonthlyFee
  );
  const fxMonthly = inputs.eorEmployees * inputs.averageMonthlySalary * (inputs.fxSpreadPercent / 100);
  const depositBase = vendor.depositModel === 'salary-plus-fee'
    ? inputs.averageMonthlySalary + vendor.eorMonthlyFee
    : inputs.averageMonthlySalary;
  const refundableDeposit = inputs.eorEmployees * depositBase;

  return {
    managementMonthly,
    management12: managementMonthly * 12,
    management24: managementMonthly * 24,
    fxMonthly,
    fx12: fxMonthly * 12,
    fx24: fxMonthly * 24,
    service12: (managementMonthly + fxMonthly) * 12,
    service24: (managementMonthly + fxMonthly) * 24,
    refundableDeposit,
  };
}

export default function EorCostCalculator({ config }: { config: EorCostCalculatorConfig }) {
  const [inputs, setInputs] = useState<CalculatorInputs>(config.defaultInputs);
  const [copyStatus, setCopyStatus] = useState('');

  const estimates = useMemo(() => Object.fromEntries(config.vendors.map((vendor) => [
    vendor.id,
    estimateVendor(inputs, vendor),
  ])) as Record<EorCostVendorConfig['id'], VendorEstimate>, [config.vendors, inputs]);

  const updateInput = (key: keyof CalculatorInputs, value: number) => {
    setInputs((current) => ({ ...current, [key]: value }));
    setCopyStatus('');
  };

  const copySlackSummary = async () => {
    const vendorLines = config.vendors.map((vendor) => {
      const estimate = estimates[vendor.id];
      return `*${vendor.name}*: 12 mo ${currency.format(estimate.service12)} · 24 mo ${currency.format(estimate.service24)} · refundable deposit proxy ${currency.format(estimate.refundableDeposit)}`;
    });
    const summary = [
      '*EOR cost baseline — Deel vs Remote vs Oyster*',
      `Scope: ${inputs.eorEmployees} EOR employees · ${inputs.contractors} contractors · ${currency.format(inputs.averageMonthlySalary)} average monthly EOR salary · ${inputs.fxSpreadPercent}% FX scenario`,
      ...vendorLines,
      'Service totals include management fees and modeled FX. Wages, employer taxes, benefits, statutory termination costs, and refundable deposits are excluded from service TCO.',
      `Source check: ${config.sourceCheckedAt}. Replace public starting rates and deposit proxies with the signed order form before approval.`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus('Slack summary copied.');
      window.dispatchEvent(new CustomEvent('stackevalify:track', {
        detail: { event: 'calculator_copy', path: '/eor-cost-calculator', format: 'slack' },
      }));
    } catch {
      setCopyStatus('Copy failed. Select the figures from the table instead.');
    }
  };

  return (
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-6" data-eor-cost-calculator>
      <aside className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-5 text-sm leading-relaxed text-amber-100">
        <strong>Audit boundary:</strong> This model compares public starting management fees and applies one user-selected FX sensitivity to EOR gross salary. It excludes wages, employer taxes, benefits, statutory termination costs, country pass-through charges, and negotiated discounts. Refundable security cash is shown separately from service expense.
      </aside>

      <fieldset className="min-w-0 rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <legend className="px-2 text-base font-bold text-white">Workforce and FX inputs</legend>
        <div className="mt-3 grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
          <NumberField id="eor-calculator-employees" label="International EOR employees" value={inputs.eorEmployees} onChange={(value) => updateInput('eorEmployees', value)} />
          <NumberField id="eor-calculator-contractors" label="Contractors" value={inputs.contractors} onChange={(value) => updateInput('contractors', value)} />
          <NumberField id="eor-calculator-salary" label="Average EOR gross salary / month" value={inputs.averageMonthlySalary} onChange={(value) => updateInput('averageMonthlySalary', value)} suffix="USD" />
          <NumberField id="eor-calculator-fx" label="FX spread sensitivity" value={inputs.fxSpreadPercent} onChange={(value) => updateInput('fxSpreadPercent', value)} step={0.1} suffix="%" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-400">FX is applied to EOR gross salary only. Contractor invoice FX, employer costs, and vendor-specific rate timing are not modeled because those amounts require invoice currency and signed contract data.</p>
      </fieldset>

      <section aria-labelledby="eor-calculator-results" className="min-w-0 rounded-xl border border-slate-800 bg-slate-950/50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Normalized output</p>
            <h2 id="eor-calculator-results" className="mt-2 text-2xl font-bold text-white">12- and 24-month service cost</h2>
          </div>
          <button type="button" onClick={copySlackSummary} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
            Copy Slack summary
          </button>
        </div>
        <p className="mt-3 min-h-5 text-sm text-emerald-300" aria-live="polite">{copyStatus}</p>

        <div className="mt-4 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
          <table className="w-full min-w-[74rem] border-collapse text-left text-sm" data-comparison-table>
            <caption className="sr-only">Deel, Remote, and Oyster management fees, modeled FX, service cost, and refundable deposit pressure over 12 and 24 months</caption>
            <thead className="bg-slate-950 text-slate-200">
              <tr>
                <th scope="col" className="p-4">Vendor</th>
                <th scope="col" className="p-4">Management · 12 mo</th>
                <th scope="col" className="p-4">FX · 12 mo</th>
                <th scope="col" className="p-4">Service total · 12 mo</th>
                <th scope="col" className="p-4">Management · 24 mo</th>
                <th scope="col" className="p-4">FX · 24 mo</th>
                <th scope="col" className="p-4">Service total · 24 mo</th>
                <th scope="col" className="p-4">Refundable deposit proxy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {config.vendors.map((vendor) => {
                const estimate = estimates[vendor.id];
                return (
                  <tr key={vendor.id}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-bold text-white">{vendor.name}</th>
                    <td className="p-4">{currency.format(estimate.management12)}</td>
                    <td className="p-4">{currency.format(estimate.fx12)}</td>
                    <td className="p-4 font-bold text-white">{currency.format(estimate.service12)}</td>
                    <td className="p-4">{currency.format(estimate.management24)}</td>
                    <td className="p-4">{currency.format(estimate.fx24)}</td>
                    <td className="p-4 font-bold text-white">{currency.format(estimate.service24)}</td>
                    <td className="p-4 text-blue-200">{currency.format(estimate.refundableDeposit)}</td>
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
              <article key={vendor.id} className="min-w-0 rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                <h3 className="font-bold text-white">{vendor.name}</h3>
                <dl className="mt-3 grid min-w-0 gap-2 text-sm text-slate-300">
                  <div className="flex min-w-0 justify-between gap-4"><dt>Management · 12 mo</dt><dd className="shrink-0">{currency.format(estimate.management12)}</dd></div>
                  <div className="flex min-w-0 justify-between gap-4"><dt>FX · 12 mo</dt><dd className="shrink-0">{currency.format(estimate.fx12)}</dd></div>
                  <div className="flex min-w-0 justify-between gap-4 border-t border-slate-800 pt-2 font-bold text-white"><dt>Service total · 12 mo</dt><dd className="shrink-0">{currency.format(estimate.service12)}</dd></div>
                  <div className="flex min-w-0 justify-between gap-4"><dt>Management · 24 mo</dt><dd className="shrink-0">{currency.format(estimate.management24)}</dd></div>
                  <div className="flex min-w-0 justify-between gap-4"><dt>FX · 24 mo</dt><dd className="shrink-0">{currency.format(estimate.fx24)}</dd></div>
                  <div className="flex min-w-0 justify-between gap-4 border-t border-slate-800 pt-2 font-bold text-white"><dt>Service total · 24 mo</dt><dd className="shrink-0">{currency.format(estimate.service24)}</dd></div>
                  <div className="flex min-w-0 justify-between gap-4 text-blue-200"><dt>Refundable deposit</dt><dd className="shrink-0">{currency.format(estimate.refundableDeposit)}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="deposit-models" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <h2 id="deposit-models" className="text-2xl font-bold text-white">Deposit pressure is cash, not vendor revenue</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {config.vendors.map((vendor) => (
            <article key={vendor.id} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
              <h3 className="font-bold text-white">{vendor.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{vendor.depositLabel}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
