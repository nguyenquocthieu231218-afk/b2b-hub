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
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
        dateModified: '2026-11-15',
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
      <main id="main-content" className="mx-auto min-h-screen w-full min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
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
              <p className="mt-4 text-sm text-slate-400">Audit baseline: <time dateTime="2026-11-15">15 November 2026</time> · USD · desk research · public starting prices, not a vendor quote</p>
            </header>

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
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-xl border border-slate-800 bg-slate-900 p-5 open:border-slate-700">
                    <summary className="cursor-pointer list-none pr-8 font-bold text-white marker:hidden">{faq.question}</summary>
                    <p className="mt-3 leading-relaxed text-slate-300">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </ComparisonAnalytics>
      </main>
      <SiteFooter />
    </>
  );
}
