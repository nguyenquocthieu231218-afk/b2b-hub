import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Review Methodology',
  description: 'See how StackEvalify audits B2B software TCO, separates evidence types, and keeps affiliate relationships independent from formulas and editorial conclusions.',
  alternates: { canonical: '/methodology' },
};

const methods = [
  {
    title: 'Hands-on testing',
    body:
      'We use the product in a stated workflow. The review identifies the tested product and configuration, versions, duration where known, and relevant limitations. Hands-on use does not by itself make every observation a controlled benchmark.',
  },
  {
    title: 'Performance testing',
    body:
      'We state the workload, test environment, measurement method, number of repetitions, and how results are summarized. SaaS API tests identify the subscription tier, endpoint, and execution region. Hardware thermal claims require more than a temperature reading: performance or clock measurements are needed to establish throttling.',
  },
  {
    title: 'Desk research',
    body:
      'We assess vendor documentation, specifications, and product demonstrations when direct testing is not feasible. We label this method clearly and do not describe it as hands-on testing.',
  },
];

export default function MethodologyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link><span aria-hidden="true" className="mx-2">/</span>
          <span className="text-slate-300">Methodology</span>
        </nav>
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Editorial standards</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">How StackEvalify evaluates products</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            We identify the evidence behind each conclusion so readers can judge how
            well it applies to their team, workload, and budget.
          </p>
        </header>
        <section aria-labelledby="evidence-methods" className="mt-12">
          <h2 id="evidence-methods" className="text-2xl font-bold text-white">Evidence methods</h2>
          <div className="mt-5 space-y-4">
            {methods.map((method) => (
              <article key={method.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-bold text-white">{method.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{method.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="review-principles" className="mt-12 border-t border-slate-800 pt-10">
          <h2 id="review-principles" className="text-2xl font-bold text-white">Review principles</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-slate-300">
            <li>State who the product is suited to and its main trade-offs.</li>
            <li>Separate measured results from interpretation and recommendation.</li>
            <li>Do not infer thermal throttling from temperature alone.</li>
            <li>Disclose when a result comes from one setup and is not comparative.</li>
            <li>Correct a review when a material error is found.</li>
          </ul>
        </section>
        <section aria-labelledby="tco-audit" className="mt-12 border-t border-slate-800 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">B2B procurement method</p>
          <h2 id="tco-audit" className="mt-2 text-2xl font-bold text-white">How we audit total cost of ownership</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">A TCO model is a screening tool, not a substitute for an order form. We keep public evidence, contract assumptions, service expense, and refundable security cash on separate lines so a low advertised rate cannot conceal implementation, FX, renewal, or deposit exposure.</p>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-bold text-blue-300">1 · Establish the public baseline</p>
              <p className="mt-3 leading-relaxed text-slate-300">Record first-party pricing, billing unit, contract period, included scope, currency, and source-check date. A “starts at” rate stays labeled as a starting point.</p>
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-bold text-blue-300">2 · Normalize the quote</p>
              <p className="mt-3 leading-relaxed text-slate-300">Apply the same headcount and time horizon, then expose platform fees, per-worker charges, modules, implementation, FX, payment fees, minimums, and year-two changes.</p>
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-bold text-blue-300">3 · Read the MSA and schedules</p>
              <p className="mt-3 leading-relaxed text-slate-300">When documents are available, check renewal, cancellation, price protection, service credits, data export, deposit rights, country schedules, and the definition of a billable worker.</p>
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-bold text-blue-300">4 · Separate expense from liquidity</p>
              <p className="mt-3 leading-relaxed text-slate-300">Refundable deposits and reserves are reported as cash-flow pressure, not vendor revenue. Wages, employer taxes, benefits, and statutory severance remain outside software service fees.</p>
            </li>
          </ol>
          <p className="mt-5 leading-relaxed text-slate-300">The <Link href="/eor-cost-calculator" className="font-medium text-emerald-300 underline underline-offset-4 hover:text-emerald-200">EOR cost calculator</Link> shows this separation directly across Deel, Remote, and Oyster.</p>
        </section>
        <section aria-labelledby="sources-and-corrections" className="mt-12 border-t border-slate-800 pt-10">
          <h2 id="sources-and-corrections" className="text-2xl font-bold text-white">Sources, dates and corrections</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
            <p>
              A source-check date records a review of the cited vendor documentation. It is distinct from a publication date, a page edit, and a hands-on test. Editing a heading or improving navigation does not establish that product prices, plan limits, or features have been checked again.
            </p>
            <p>
              Changing claims should link to the relevant primary source and state the edition, billing period, region, and other conditions needed to interpret them. A later source check should update the affected claim and its date together. Historical dates remain visible until that review is performed.
            </p>
            <p>
              To report a correction, email <a href="mailto:contact@stackevalify.com" className="font-medium text-blue-300 hover:text-blue-200">contact@stackevalify.com</a> with the page URL, the specific claim, and a supporting source or repeatable test. Reports should be checked against that evidence; material corrections should explain what changed and update the relevant source-check or test information. A product preference alone does not establish a factual error.
            </p>
            <p>
              For a practical evaluation process, use our guides to <Link href="/guides/choose-b2b-software" className="font-medium text-blue-300 hover:text-blue-200">choosing B2B software</Link> and <Link href="/guides/saas-total-cost" className="font-medium text-blue-300 hover:text-blue-200">calculating SaaS total cost</Link>. They help turn a comparison into a workflow test and a cost estimate for your own team.
            </p>
          </div>
        </section>
        <section aria-labelledby="affiliate-policy" className="mt-12 rounded-2xl border border-amber-300/25 bg-amber-300/5 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200">Commercial transparency</p>
          <h2 id="affiliate-policy" className="mt-2 text-2xl font-bold text-white">Editorial Independence &amp; Affiliate Disclosure</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
            <p>Product links currently point to official vendor websites. If StackEvalify activates a commissionable link, the relevant page will place a plain-language disclosure next to the recommendation or link: <strong className="text-white">“StackEvalify may earn a commission if you purchase through this link; it does not increase your price.”</strong> This policy page does not replace that link-level notice.</p>
            <p>Affiliate networks, advertisers, sponsorships, free access, and commissions do not buy a ranking, remove a documented drawback, or change a calculator result. Calculator outputs use fixed, inspectable formulas applied to the reader&apos;s inputs and the dated rates or assumptions shown on the page. Commercial terms are reviewed after the editorial method is defined.</p>
            <p>StackEvalify does not claim hands-on use when evidence is desk research. A vendor may identify a factual error and provide primary evidence, but it cannot purchase a favorable conclusion or suppress a supported criticism. Material corrections update the claim and evidence trail, not the commercial relationship.</p>
            <p>This disclosure process follows the FTC principle that a material connection should be clear and conspicuous and placed close to the endorsement or affiliate link. See the <a href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" target="_blank" rel="nofollow sponsored noopener noreferrer" className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200">FTC Endorsement Guides Q&amp;A</a>. PartnerStack, Impact, and individual advertiser programs may impose additional program-specific terms; publishing this policy does not guarantee acceptance into any program.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
