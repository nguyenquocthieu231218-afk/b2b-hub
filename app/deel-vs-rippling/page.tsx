import ComparisonLayout from '@/app/components/ComparisonLayout';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Deel vs Rippling (2026): EOR, Payroll and Module Costs',
  description: 'A source-checked Deel vs Rippling comparison of EOR, contractor, HRIS, payroll, IT, spend modules, base fees, and quote risk.',
  path: '/deel-vs-rippling',
});

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 hover:text-white';

const rows = [
  {
    label: 'Public pricing model',
    deel: 'Publishes starting prices by worker or service type: $49 per contractor/month, $325 per Contractor of Record/month, $599 per EOR employee/month, and $125 per US PEO employee/month.',
    rippling: 'Starts at $8 per employee/month plus a monthly base fee. The public pricing page says total cost depends on selected products and services and requires a custom quote.',
  },
  {
    label: 'Global employment',
    deel: 'EOR covers legal employment, payroll, benefits administration, compliance, and ongoing HR/legal support in the quoted service; local employment liabilities still exist.',
    rippling: 'Offers EOR, global payroll, global contractors, Contractor of Record, and global HRIS as separate products in the same workforce platform; public pricing is quote-based.',
  },
  {
    label: 'HR and payroll modules',
    deel: 'The buying path starts with the worker service, then can expand into HR, payroll, benefits, mobility, IT, security, and related platform products.',
    rippling: 'HRIS, US or global payroll, benefits, time, recruiting, performance, and other HCM products are modular. Most products are priced per employee/month; some include a base fee.',
  },
  {
    label: 'IT and spend scope',
    deel: 'Deel markets separate IT, equipment, and security capabilities. Confirm which products are included in the order form rather than assuming the EOR fee covers them.',
    rippling: 'Identity, device and inventory management sit in the IT suite; expenses, cards, travel, bill pay, procurement, and banking sit in Finance. Each selected module can change the quote.',
  },
] as const;

export default function DeelVsRipplingPage() {
  return (
    <ComparisonLayout tool1="deel" tool2="rippling" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">HR &amp; payroll · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Deel vs Rippling: fixed worker fees versus a modular workforce quote
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Deel makes several global-hiring entry prices visible. Rippling starts lower for core software but builds the final price from headcount, a base fee, and selected HR, payroll, IT, and Finance products. The decision is about system scope, not one headline number.</p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-12">12 November 2026</time> · US vendor pages · USD · desk research, not payroll, legal, or tax advice</p>
        </header>

        <section aria-labelledby="pricing-model" className="border-b border-slate-800 py-8">
          <h2 id="pricing-model" className="text-2xl font-bold text-white">How the two bills are assembled</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
              <caption className="sr-only">Deel and Rippling pricing and module constraints checked 12 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200"><tr><th scope="col" className="p-4">Cost driver</th><th scope="col" className="p-4">Deel</th><th scope="col" className="p-4">Rippling</th></tr></thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {rows.map((row) => <tr key={row.label}><th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th><td className="p-4 align-top leading-relaxed">{row.deel}</td><td className="p-4 align-top leading-relaxed">{row.rippling}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:hidden">
            {rows.map((row) => <article key={row.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-bold text-white">{row.label}</h3><dl className="mt-3 grid gap-3 text-sm"><div><dt className="font-semibold text-blue-200">Deel</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.deel}</dd></div><div><dt className="font-semibold text-blue-200">Rippling</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.rippling}</dd></div></dl></article>)}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Starting prices are not complete payroll budgets. Employer taxes, wages, statutory benefits, optional benefits, payment and FX mechanics, implementation, country coverage, local legal obligations, and negotiated order-form terms can change total cost.</p>
        </section>

        <section aria-labelledby="deel-boundary" className="border-b border-slate-800 py-8">
          <h2 id="deel-boundary" className="text-2xl font-bold text-white">Deel&apos;s clear entry price still needs a service boundary</h2>
          <p className="mt-4 leading-relaxed text-slate-300">The public EOR fee is easier to multiply by headcount, but it is not the employee&apos;s fully burdened cost. Deel says the quoted EOR service includes onboarding, compliance, payroll processing, tax filings, benefits administration, and ongoing HR/legal support. The employer still needs a country-by-country forecast for compensation, statutory costs, benefits, FX, terminations, and any products outside that order.</p>
          <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5"><h3 className="font-bold text-amber-100">Cancellation is not the same as zero exit cost</h3><p className="mt-2 leading-relaxed text-slate-300">Deel describes month-to-month pricing, but its own FAQ says local labor law can require notice periods or severance for EOR employees. Model the employment exit, not only the software cancellation.</p></div>
        </section>

        <section aria-labelledby="rippling-modules" className="border-b border-slate-800 py-8">
          <h2 id="rippling-modules" className="text-2xl font-bold text-white">Rippling&apos;s risk is quote expansion across modules</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">HRIS</h3><p className="mt-3 leading-relaxed text-slate-300">Core employee data and workflows can become the platform layer required by other products.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Payroll</h3><p className="mt-3 leading-relaxed text-slate-300">US Payroll, Global Payroll, EOR, contractor, benefits, and time products have different operational scopes.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">IT</h3><p className="mt-3 leading-relaxed text-slate-300">Identity, device, inventory, compliance, and helpdesk requirements can add products beyond HR.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Spend</h3><p className="mt-3 leading-relaxed text-slate-300">Expense, cards, travel, bill pay, procurement, and banking expand the Finance footprint and quote.</p></article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">Rippling&apos;s public page explains the model but not a complete module price card. Treat any unofficial calculator as a lead, not a source of truth; require an itemized order form with per-employee populations, base fees, implementation, term, and renewal terms.</p>
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
          <p className="mt-3 leading-relaxed text-slate-300">This analysis uses vendor-published pricing and product descriptions checked 12 November 2026. It does not replace a country-specific legal, tax, payroll, security, or procurement review.</p>
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
