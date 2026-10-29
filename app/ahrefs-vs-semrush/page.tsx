import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Ahrefs vs Semrush (2026): SEO Plan Limits and Usage',
  description: 'Compare Ahrefs Starter and Semrush SEO Toolkit Pro pricing, project and keyword limits, report usage, and trial access using official sources.',
  path: '/ahrefs-vs-semrush',
});

const comparisonRows = [
  {
    label: 'Entry-level access',
    ahrefs: 'Free access is available for verified website owners. The paid Starter plan is listed at US$29/month and includes 200 credits, 1 unverified project, 50 tracked keywords, and 1 user.',
    semrush: 'The SEO Toolkit Pro plan is listed at US$139.95/month and includes 5 websites to monitor, 500 tracked keywords, and 100,000 pages to crawl per month.',
  },
  {
    label: 'How usage is limited',
    ahrefs: 'Starter credits are used by opening reports and requesting data in credit-based tools. Site Audit and Rank Tracker have separate limits. Starter does not allow extra users or credits.',
    semrush: 'The SEO Toolkit sets limits by tool, including report rows, keyword tracking, and monthly crawl volume. Account users share the plan’s subscription limits.',
  },
  {
    label: 'More capacity',
    ahrefs: 'Lite is listed at US$129/month with 1,000 credits, 5 projects, 750 tracked keywords, and 1 included user; up to 2 additional users can be added at an extra monthly cost.',
    semrush: 'Guru and Business increase project, keyword, crawl, and report limits. Historical data, content features, and API access depend on the selected tier.',
  },
  {
    label: 'Trial and billing',
    ahrefs: 'Starter is a monthly plan. Ahrefs also offers free tools for verified sites; its current Starter documentation does not list a free trial.',
    semrush: 'Semrush advertises a 7-day free trial. SEO Toolkit subscriptions can be billed monthly or annually; annual payment is made upfront.',
  },
] as const;

export default function AhrefsVsSemrushPage() {
  return (
    <ComparisonLayout tool1="ahrefs" tool2="semrush" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">SEO software · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Ahrefs vs Semrush: compare plans before comparing SEO data
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            These tools do not meter usage the same way. Ahrefs Starter uses monthly credits for many reports and has tighter project and user limits; Semrush SEO Toolkit Pro publishes website, keyword, and crawl allowances. This page compares the entry plans and published limits, not the accuracy or completeness of either vendor’s search database.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on tool or data-accuracy test.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Ahrefs Starter has a lower listed monthly price, but its 200-credit and single-user limits make it a different workload tier from Semrush SEO Toolkit Pro. Compare the exact number of reports, projects, tracked keywords, crawled pages, and seats you need. If you need to evaluate backlink or keyword-data accuracy, test the same domains and queries in both products; vendor-published limits cannot establish which dataset is more accurate.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published entry-plan limits</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Ahrefs and Semrush SEO plan limits checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Ahrefs</th>
                  <th scope="col" className="p-4">Semrush SEO Toolkit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.ahrefs}</td>
                    <td className="p-4 align-top leading-relaxed">{row.semrush}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>          <div className="mt-4 grid gap-3 sm:hidden">
            {comparisonRows.map((row) => (
              <article key={row.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="font-bold text-white">{row.label}</h3>
                <dl className="mt-3 grid gap-3 text-sm">
                  <div>
                    <dt className="font-semibold text-blue-200">Ahrefs</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.ahrefs}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Semrush SEO Toolkit</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.semrush}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Prices and plan limits are vendor-listed US examples and may vary by country, billing interval, taxes, promotions, and account age. Ahrefs credits and Semrush keyword/crawl quotas are different measures and should not be treated as equivalent units.
          </p>
        </section>

        <section aria-labelledby="evaluation" className="border-b border-slate-800 py-8">
          <h2 id="evaluation" className="text-2xl font-bold text-white">Choose a test that matches your work</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Evaluate Ahrefs if…</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Your team is small, owns the sites it needs to verify, and can work within Starter’s credit and user limits. Track how many report opens and filter changes your weekly research actually uses before sizing a paid plan.
              </p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Evaluate Semrush if…</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                The SEO Toolkit Pro limits for sites, tracked keywords, and monthly crawl volume fit your workload, or you want to use its 7-day trial to compare reports against your current process.
              </p>
            </article>
          </div>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Use the same test set.</strong> Compare the same domains, keyword list, locations, devices, and date ranges in both tools.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Check quota burn.</strong> Record credit consumption, tracked-keyword count, crawl volume, export limits, and user seats required for a normal month.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Validate the buying plan.</strong> Add required seats, project count, integrations, and any separate toolkit or API access before comparing the total.</li>
          </ol>
          <p className="mt-5 leading-relaxed text-slate-300">
            The old claims that one database is “industry-leading” or “more accurate” are not established by plan pages. A defensible accuracy comparison needs a dated, repeatable test against a known query set.
          </p>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This page summarizes official plan, pricing, and usage documentation checked on 29 October 2026. It is desk research, not an independent crawler, backlink, or keyword-data accuracy test. Plan limits and prices can change; confirm the current terms before purchase.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://ahrefs.com/pricing" target="_blank" rel="noopener noreferrer">Ahrefs pricing and plan limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.ahrefs.com/en/articles/9419051-about-ahrefs-starter-plan" target="_blank" rel="noopener noreferrer">Ahrefs Help: Starter limits and verified-site access</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.ahrefs.com/en/articles/6061657-ahrefs-usage-based-pricing-for-credit-based-plans" target="_blank" rel="noopener noreferrer">Ahrefs Help: credits and usage-based billing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.semrush.com/kb/1547-seo-toolkit-pricing-and-plans" target="_blank" rel="noopener noreferrer">Semrush Help: SEO Toolkit plan prices and limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.semrush.com/kb/1409-user-management" target="_blank" rel="noopener noreferrer">Semrush Help: user seats and shared usage</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.semrush.com/kb/1013-billing-faq" target="_blank" rel="noopener noreferrer">Semrush Help: billing intervals and renewals</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
