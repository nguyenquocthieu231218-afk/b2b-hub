import ComparisonLayout from '@/app/components/ComparisonLayout';
import TcoCalculator from '@/app/components/TcoCalculator';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Deel vs Rippling TCO Calculator (2026): 12 and 24 Months',
  description: 'Model Deel and Rippling over 12 and 24 months with worker mix, EOR, contractor, base-fee, implementation, FX, and renewal inputs.',
  path: '/deel-vs-rippling',
});

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 hover:text-white';

export default function DeelVsRipplingPage() {
  return (
    <ComparisonLayout tool1="deel" tool2="rippling" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">HR &amp; payroll · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Deel vs Rippling: normalize the 12- and 24-month workforce bill
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Public prices do not support a $25,000 annual approval. Deel&apos;s starting rates apply to named worker services; Rippling&apos;s $8 starting point does not price the required payroll, EOR, contractor, IT, or spend scope. Normalize both signed quotes against the same monthly headcount and 24-month term.</p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-12">12 November 2026</time> · US vendor pages · USD · desk research, not payroll, legal, or tax advice</p>
        </header>

        <section aria-labelledby="pricing-model" className="border-b border-slate-800 py-8">
          <h2 id="pricing-model" className="text-2xl font-bold text-white">Build the 12- and 24-month invoice</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">Enter the same worker population for both vendors, then replace every <span className="font-mono text-xs text-amber-300">[VERIFY_BILLING_DATA]</span> value with a dated quote, order form, or invoice. A zero means the cost is unknown or excluded—not free.</p>
          <TcoCalculator />
        </section>

        <section aria-labelledby="deel-boundary" className="border-b border-slate-800 py-8">
          <h2 id="deel-boundary" className="text-2xl font-bold text-white">Deel&apos;s clear entry price still needs a service boundary</h2>
          <p className="mt-4 leading-relaxed text-slate-300">A worker-service rate is not fully burdened employment cost. The order form must identify each country, worker classification, monthly headcount, included service, deposit, FX treatment, payment fee, implementation charge, and excluded product. Keep wages, employer taxes, statutory benefits, optional benefits, and employment liabilities outside the platform-fee subtotal.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
              <h3 className="font-bold text-white">Software cancellation and commercial terms</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Use the signed order form—not a pricing-page FAQ—to record subscription term, notice deadline, early-termination fee, auto-renewal, minimum commitment, and any non-refundable implementation charge.</p>
            </article>
            <article className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
              <h3 className="font-bold text-amber-100">Statutory employee notice and severance</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Country-specific notice, accrued leave, severance, tax, and mandatory-benefit obligations are employment liabilities. Model them by employee and jurisdiction; do not book them as software cancellation fees.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="rippling-modules" className="border-b border-slate-800 py-8">
          <h2 id="rippling-modules" className="text-2xl font-bold text-white">Rippling&apos;s risk is quote expansion across modules</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">HRIS</h3><p className="mt-3 leading-relaxed text-slate-300">Require the core-platform price, billable employee definition, minimum headcount, and modules that depend on HRIS.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Payroll</h3><p className="mt-3 leading-relaxed text-slate-300">Price US Payroll, Global Payroll, EOR, contractor, benefits, and time as separate order-form lines for the populations that use them.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">IT</h3><p className="mt-3 leading-relaxed text-slate-300">List identity, device, inventory, compliance, and helpdesk charges separately, including hardware logistics and support.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Spend</h3><p className="mt-3 leading-relaxed text-slate-300">Record subscription, transaction, card, travel, bill-pay, procurement, and banking fees instead of treating Finance as one module.</p></article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">Reject a quote that does not map every charge to a worker population, billing unit, contract term, implementation milestone, renewal uplift, and price-protection period.</p>
        </section>

        <section aria-labelledby="quote-test" className="border-b border-slate-800 py-8">
          <h2 id="quote-test" className="text-2xl font-bold text-white">Normalize both quotes before deciding</h2>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Split worker types.</strong> Count direct employees, EOR employees, PEO employees, contractors, and Contractor of Record workers by country.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Draw the module boundary.</strong> Mark HRIS, payroll, benefits, time, recruiting, IT, equipment, identity, expense, cards, and procurement as required or optional.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Add non-platform costs.</strong> Include wages, employer taxes, statutory and optional benefits, FX, payment fees, hardware logistics, implementation, and offboarding.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">4. Stress-test growth.</strong> Price today, a 25% headcount increase, one new country, and the next module the team is likely to add.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Vendor pages checked 12 November 2026 supply the public defaults, not invoice evidence. Calculator fields marked <span className="font-mono text-xs text-amber-300">[VERIFY_BILLING_DATA]</span> must be replaced with dated commercial documents. This analysis does not replace country-specific legal, tax, payroll, security, or procurement review.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className={sourceClass} href="https://www.deel.com/pricing/">Deel pricing</a> — contractor, Contractor of Record, PEO, and EOR starting prices and service FAQ.</li>
            <li><a className={sourceClass} href="https://www.deel.com/hr/">Deel HR</a> — workforce-management product scope.</li>
            <li><a className={sourceClass} href="https://www.rippling.com/pricing">Rippling pricing</a> — starting price, base-fee disclosure, per-employee and modular quote model.</li>
            <li><a className={sourceClass} href="https://www.rippling.com/products">Rippling product ecosystem</a> — HRIS, payroll, global, IT, and Finance product boundaries.</li>
            <li><a className={sourceClass} href="https://www.rippling.com/products/payroll/employer-of-record">Rippling EOR</a> — employer-of-record scope and country coverage.</li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
