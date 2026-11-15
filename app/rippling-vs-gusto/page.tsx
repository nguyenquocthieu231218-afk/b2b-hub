import ComparisonLayout from '@/app/components/ComparisonLayout';
import TcoCalculator from '@/app/components/TcoCalculator';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import { tcoConfigs } from '@/lib/tco-configs';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Rippling vs Gusto TCO Calculator (2026): Modules, Base Fees and Payroll Cost',
  description: 'Compare Rippling and Gusto over 12 and 24 months with employees, contractors, platform fees, payroll modules, implementation, add-ons, and renewal assumptions.',
  path: '/rippling-vs-gusto',
});

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 hover:text-white';

export default function RipplingVsGustoPage() {
  return (
    <ComparisonLayout tool1="rippling" tool2="gusto" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">HR &amp; payroll · CFO audit</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">Rippling vs Gusto: price the platform, payroll, and every required module</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Gusto publishes a complete starting equation for Simple. Rippling publishes a starting per-employee rate and base fee, then quotes the selected products. A valid budget comparison must hold headcount, states, payroll scope, contractors, implementation, support, and renewal terms constant.</p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-15">15 November 2026</time> · US vendor pages · USD · desk research, not payroll, legal, or tax advice</p>
        </header>

        <section aria-labelledby="pricing-model" className="border-b border-slate-800 py-8">
          <h2 id="pricing-model" className="text-2xl font-bold text-white">Build the 12- and 24-month invoice</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">Use identical active employees and paid contractors. Rippling&apos;s module rates, implementation, and renewal inputs are quote-normalization assumptions until replaced by the signed order form. Gusto&apos;s baseline models Simple; add Plus, Premium, state registrations, time, support, benefits administration, and payment charges when required.</p>
          <TcoCalculator config={tcoConfigs['rippling-vs-gusto']} />
          <p className="mt-5 rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 text-sm leading-relaxed text-blue-100"><strong>Audit Baseline (Nov 15, 2026):</strong> Modeled from vendor public pricing schedules &amp; standard MSA terms. Excludes custom enterprise volume discounts and statutory local employer taxes.</p>
        </section>

        <section aria-labelledby="public-price-boundary" className="border-b border-slate-800 py-8">
          <h2 id="public-price-boundary" className="text-2xl font-bold text-white">Gusto publishes the equation; Rippling publishes the entry point</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <h3 className="font-bold text-white">Gusto Simple</h3>
              <p className="mt-3 leading-relaxed text-slate-300">The public price is $49 per month plus $6 per paid person. It covers one-state payroll and unlimited payroll runs. US contractors are billed in months when they are paid. Plus, Premium, multi-state functionality, priority support, time, benefits, and compliance add-ons change the bill.</p>
            </article>
            <article className="rounded-xl border border-violet-400/20 bg-violet-400/5 p-5">
              <h3 className="font-bold text-white">Rippling quote</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Rippling says plans start at $8 per employee per month plus a monthly base fee; its small-business page lists a $40 base. Payroll and other products depend on selected scope and headcount. The order form—not the starting price—must state every required module and billing unit.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="rippling-quote-test" className="border-b border-slate-800 py-8">
          <h2 id="rippling-quote-test" className="text-2xl font-bold text-white">Reject a Rippling quote that collapses modules into one total</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Platform</h3><p className="mt-3 leading-relaxed text-slate-300">Record the monthly base, core per-employee fee, minimum headcount, billable-worker definition, and price protection.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Payroll and HR</h3><p className="mt-3 leading-relaxed text-slate-300">Separate payroll, time, benefits, recruiting, learning, performance, and compliance charges by eligible population.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Implementation</h3><p className="mt-3 leading-relaxed text-slate-300">Rippling does not publish one standard implementation fee. The calculator&apos;s $1,000 input is a stress-test assumption; replace it with the signed fee or a written $0 waiver.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Renewal</h3><p className="mt-3 leading-relaxed text-slate-300">State the year-two uplift, discount expiry, auto-renewal deadline, and whether removed modules reduce the minimum commitment.</p></article>
          </div>
        </section>

        <section aria-labelledby="scope-gates" className="border-b border-slate-800 py-8">
          <h2 id="scope-gates" className="text-2xl font-bold text-white">Keep software cancellation and payroll liabilities separate</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5"><h3 className="font-bold text-white">Software and implementation exit</h3><p className="mt-3 leading-relaxed text-slate-300">Track subscription term, notice, auto-renewal, minimums, remaining implementation milestones, data export, and unused prepaid fees under the vendor agreement.</p></article>
            <article className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5"><h3 className="font-bold text-amber-100">Payroll and employment obligations</h3><p className="mt-3 leading-relaxed text-slate-300">Final wages, payroll tax filings, benefits deductions, state notices, unemployment accounts, and employee records remain operating and legal obligations. Do not classify them as software cancellation charges.</p></article>
          </div>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Public pages checked 15 November 2026 establish Gusto&apos;s listed tiers and Rippling&apos;s starting price and base-fee model. Rippling module, implementation, and renewal figures remain editable procurement assumptions until the order form supplies billing proof.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className={sourceClass} href="https://www.rippling.com/pricing">Rippling pricing</a> — starting per-employee rate, base-fee disclosure, and modular quote method.</li>
            <li><a className={sourceClass} href="https://www.rippling.com/solutions/small-businesses">Rippling small-business pricing</a> — $40 monthly base and $8 per-user starting point.</li>
            <li><a className={sourceClass} href="https://gusto.com/product/pricing">Gusto pricing</a> — Simple, Plus, Premium, add-ons, contractor billing, and month-to-month terms.</li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
