import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonAnalytics from '@/components/ComparisonAnalytics';
import JsonLd from '@/components/JsonLd';
import EorCostCalculator from '@/app/components/EorCostCalculator';
import { auditedToolMetadata } from '@/lib/seo';
import { eorCostCalculatorConfig } from '@/lib/eor-cost-calculator';
import { eorCalculatorComparisonPaths } from '@/lib/audited-tools';
import { comparisons } from '@/lib/comparisons';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { getAffiliateCtaHref, getAffiliateLink } from '@/lib/affiliate-links';

const path = '/eor-cost-calculator';
const canonicalUrl = `${SITE_URL}${path}`;
const description = 'Model 12- and 24-month EOR management fees, contractor fees, FX exposure, and refundable deposit pressure across Deel, Remote, and Oyster HR.';

export const metadata = auditedToolMetadata({
  title: 'EOR Cost Calculator: Deel vs Remote vs Oyster (2026)',
  description,
  path,
});

const faqs = [
  {
    question: 'Does the EOR cost total include employee salaries and employer taxes?',
    answer: 'No. The service total includes public starting management fees and the selected FX sensitivity. Salaries, employer taxes, benefits, statutory termination costs, country pass-through charges, and refundable deposits remain separate.',
  },
  {
    question: 'Why is the refundable deposit excluded from 12- and 24-month service cost?',
    answer: 'A refundable deposit or reserve creates cash pressure but is not vendor revenue when it is returned after final obligations are settled. The calculator therefore reports it separately instead of inflating service expense.',
  },
  {
    question: 'Can this calculator replace a Deel, Remote, or Oyster order form?',
    answer: 'No. Public starting rates and lower-bound deposit proxies are useful for screening, but approval should use the signed country schedule, FX method, employer costs, payment fees, deposit terms, discounts, and renewal language.',
  },
] as const;

const buyerFaqs = [
  { question: 'Can an EOR contract lock us in?', answer: 'Terms vary by provider, country, and order form. Check the initial term, renewal, notice window, minimums, early-exit charges, and price changes; the EOR service commitment can differ from the employee’s local employment contract.' },
  { question: 'How should we budget an upfront security deposit?', answer: 'Treat a refundable reserve as a separate cash requirement. Get the amount and currency by country and worker, its calculation basis, refund or final-invoice offset trigger, timing, and whether credit review can change it.' },
  { question: 'What FX conversion markup should we expect?', answer: 'There is no universal spread across vendors, currencies, and payment routes. Confirm invoice and funding currencies, rate source and spread, when the rate is fixed, processor fees, and refund currency; use the signed quote instead of the calculator sensitivity.' },
  { question: 'How much effort does switching EOR providers take?', answer: 'Plan the transition country by country with both providers. Confirm employee notice and consent, the new legal employer and agreement, payroll cutoffs, accrued pay and leave, local continuity or termination requirements, and deposit refund timing before setting a go-live date.' },
] as const;

const relatedComparisons = eorCalculatorComparisonPaths.map((href) => {
  const comparison = comparisons.find((item) => item.href === href);
  if (!comparison) throw new Error(`Missing comparison inventory entry for ${href}`);
  return comparison;
});

const sourceLinkClass = 'font-medium text-blue-300 underline decoration-blue-400/50 underline-offset-4 hover:text-blue-200';
const outboundProps = {
  target: '_blank',
  rel: 'nofollow sponsored noopener noreferrer',
  'data-track': 'outbound-source',
} as const;
const eorVendorCtas = ['deel', 'remote', 'oyster'] as const;

export default function EorCostCalculatorPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        '@id': `${canonicalUrl}#application`,
        name: 'StackEvalify EOR Cost Calculator',
        description,
        url: canonicalUrl,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        browserRequirements: 'Requires JavaScript',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
        dateModified: '2026-11-20',
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }} />
      <main id="main-content" className="mx-auto min-h-screen w-full min-w-0 max-w-6xl px-4 py-10 pb-24 sm:px-6 sm:py-14 sm:pb-14">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'EOR cost calculator' },
        ]} />

        <ComparisonAnalytics path={path} className="min-w-0">
          <article>
            <header className="max-w-4xl border-b border-slate-800 pb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">Audited HR &amp; payroll tool</p>
              <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">EOR cost calculator: Deel vs Remote vs Oyster</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Put the same international headcount, contractor count, salary base, and FX sensitivity through three public rate cards. Service expense and refundable security cash stay separate so the lower subscription headline cannot hide onboarding liquidity.</p>
              <p className="mt-4 text-sm text-slate-400">Pricing &amp; terms source check: <time dateTime="2026-11-15">15 November 2026</time> · page updated 20 November 2026 · USD · desk research · public starting prices, not a vendor quote</p>
            </header>

            <section aria-labelledby="eor-quick-verdict" className="my-6 min-w-0 rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 via-slate-950/70 to-slate-950 p-5 shadow-lg shadow-emerald-950/20 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Buyer snapshot · audit baseline 15 Nov 2026</p>
              <h2 id="eor-quick-verdict" className="mt-2 text-2xl font-bold text-white">The 5-second cost verdict</h2>
              <div className="mt-5 grid min-w-0 gap-3 sm:grid-cols-2">
                <article className="min-w-0 rounded-xl border border-emerald-300/25 bg-slate-950/70 p-4"><h3 className="text-xs font-bold uppercase tracking-wide text-emerald-300">Best overall</h3><p className="mt-2 break-words font-semibold leading-relaxed text-white">Scope-dependent: compare the country-level EOR fee, FX and funding terms for your actual worker mix.</p></article>
                <article className="min-w-0 rounded-xl border border-blue-300/25 bg-slate-950/70 p-4"><h3 className="text-xs font-bold uppercase tracking-wide text-blue-300">Best for small teams</h3><p className="mt-2 break-words leading-relaxed text-slate-200">Choose the provider with confirmed coverage and a written quote for each country; public starting rates are only a screening baseline.</p></article>
                <article className="min-w-0 rounded-xl border border-amber-300/25 bg-amber-300/5 p-4 sm:col-span-2"><h3 className="text-xs font-bold uppercase tracking-wide text-amber-200">#1 cash-flow watch-out</h3><p className="mt-2 break-words leading-relaxed text-amber-50">Refundable deposits or reserves can materially raise onboarding cash needs and are separate from the model’s service-cost total.</p></article>
              </div>
              <a href="#calculator" data-track="quick-verdict-jump" className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">Run your cost model <span aria-hidden="true" className="ml-2">↓</span></a>
            </section>

            <section aria-labelledby="calculator" className="border-b border-slate-800 py-10">
              <h2 id="calculator" className="text-3xl font-bold text-white">Run the cost model</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">The same FX percentage is applied to EOR gross salary for all three vendors. This is a sensitivity test—not a claim that the vendors use identical exchange-rate timing or publish one universal spread.</p>
              <div className="mt-6">
                <EorCostCalculator config={eorCostCalculatorConfig} />
              </div>
              <p className="mt-6 rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 text-sm leading-relaxed text-blue-100"><strong>Audit Baseline (Nov 15, 2026):</strong> Modeled from vendor public pricing schedules and published deposit or reserve guidance. Excludes custom enterprise volume discounts, employer taxes, benefits, statutory severance, and country-specific pass-through costs.</p>
            </section>

            <section aria-labelledby="rate-card" className="border-b border-slate-800 py-10">
              <h2 id="rate-card" className="text-3xl font-bold text-white">Public rate-card boundary</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <article className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
                  <h3 className="text-lg font-bold text-white">Deel</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">Starts at $599 per EOR employee per month and $49 per contractor per month. The deposit proxy is intentionally lower than Deel&apos;s disclosed 1–1.5× all-monthly-charge standard.</p>
                </article>
                <article className="rounded-xl border border-violet-400/20 bg-violet-400/5 p-5">
                  <h3 className="text-lg font-bold text-white">Remote</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">Starts at $599 per EOR employee per month on an annual contract and $29 per active contractor per month. Its standard EOR reserve normally includes employer costs that this screening model cannot infer.</p>
                </article>
                <article className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                  <h3 className="text-lg font-bold text-white">Oyster HR</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">Lists $699 per EOR employee per month and $29 per contractor per month. Its normal deposit uses approximately one month of total cost of services and may exceed the lower-bound proxy shown here.</p>
                </article>
              </div>
              <div className="mt-6 flex flex-wrap gap-3" aria-label="Vendor websites">
                {eorVendorCtas.map((vendor) => (
                  <a
                    key={vendor}
                    href={getAffiliateCtaHref(vendor, path, true)}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    data-track="affiliate-cta"
                    data-vendor={vendor}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-600 bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-colors hover:border-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Check {getAffiliateLink(vendor)?.name} plans &amp; pricing <span aria-hidden="true" className="ml-2">→</span>
                  </a>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">Disclosure: These links open official vendor sites through measured referral redirects. We currently have no active paid partner relationship with Deel, Remote, or Oyster; commercial terms do not determine our findings.</p>
            </section>

            <section aria-labelledby="hr-payroll-research" className="border-b border-slate-800 py-10">
              <h2 id="hr-payroll-research" className="text-3xl font-bold text-white">Open the contract-level comparisons</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">The calculator screens the budget. These four audited pages cover product scope, cancellation, deposit mechanics, modules, and the contract questions the simplified model cannot settle.</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedComparisons.map((comparison) => (
                  <li key={comparison.href}>
                    <Link href={comparison.href} className="block h-full rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Audited comparison</p>
                      <h3 className="mt-3 text-xl font-bold text-white">{comparison.title}</h3>
                      <span className="mt-4 inline-flex text-sm font-semibold text-blue-300">Read the CFO audit <span aria-hidden="true" className="ml-2">→</span></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="sources" className="border-b border-slate-800 py-10">
              <h2 id="sources" className="text-3xl font-bold text-white">Sources and model limits</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">Prices and deposit mechanics were checked against first-party pages on 15 November 2026. Vendor claims remain subject to country schedules, contract currency, worker classification, credit review, and the signed order form.</p>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-relaxed text-slate-300">
                <li><a className={sourceLinkClass} href="https://www.deel.com/pricing/" {...outboundProps}>Deel pricing</a> and <a className={sourceLinkClass} href="https://help.letsdeel.com/hc/en-gb/articles/15574494993297-About-EOR-Deposit-Calculations" {...outboundProps}>Deel deposit calculation</a>.</li>
                <li><a className={sourceLinkClass} href="https://remote.com/pricing" {...outboundProps}>Remote pricing</a> and <a className={sourceLinkClass} href="https://support.remote.com/eor/Reserve-payments/1-reserve-payments" {...outboundProps}>Remote reserve guidance</a>.</li>
                <li><a className={sourceLinkClass} href="https://www.oysterhr.com/pricing" {...outboundProps}>Oyster pricing</a> and <a className={sourceLinkClass} href="https://support.oysterhr.com/hc/en-us/articles/34221683638289-Why-is-a-deposit-required" {...outboundProps}>Oyster deposit guidance</a>.</li>
              </ul>
            </section>

            <section aria-labelledby="faq" className="py-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Procurement questions</p>
              <h2 id="faq" className="mt-2 text-3xl font-bold text-white">Frequently asked questions</h2>
              <div className="mt-6 grid gap-4">
                {[...faqs, ...buyerFaqs].map((faq) => (
                  <details key={faq.question} className="rounded-xl border border-slate-800 bg-slate-900 p-5 open:border-slate-700">
                    <summary className="cursor-pointer list-none pr-8 font-bold text-white marker:hidden">{faq.question}</summary>
                    <p className="mt-3 leading-relaxed text-slate-300">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </ComparisonAnalytics>
        <nav aria-label="Quick page navigation" className="fixed inset-x-3 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-slate-700 bg-slate-950/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(2,6,23,0.55)] backdrop-blur md:hidden">
          <a href="#eor-quick-verdict" className="inline-flex min-h-11 items-center justify-center rounded-lg px-2 text-xs font-bold text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-300">Verdict</a>
          <a href="#calculator" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-300 px-2 text-xs font-bold text-slate-950 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200">Calculator</a>
          <a href="#faq" className="inline-flex min-h-11 items-center justify-center rounded-lg px-2 text-xs font-bold text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-300">FAQ</a>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
