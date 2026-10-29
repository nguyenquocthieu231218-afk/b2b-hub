import ComparisonLayout from '../components/ComparisonLayout';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'HubSpot vs Salesforce: Plans, Pricing and Product Scope',
  description: 'A source-checked desk-research comparison of HubSpot CRM and Salesforce editions, with current US pricing caveats and official vendor sources.',
  path: '/hubspot-vs-salesforce',
});

const sourceClass = 'font-medium text-blue-300 underline decoration-blue-400/50 underline-offset-4 hover:text-blue-200';

export default function HubSpotVsSalesforce() {
  return (
    <ComparisonLayout tool1="hubspot" tool2="salesforce" showDraftNotice={false}>
      <article className="mx-auto max-w-4xl py-2">
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">CRM · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">HubSpot vs Salesforce: compare the packages before comparing the price</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            These products do not line up as identical editions. HubSpot’s free CRM and Sales Hub tiers are sold separately from Salesforce’s Starter Suite and Sales Cloud editions. Match the package to your workflow and user count before comparing totals.
          </p>
          <p className="mt-4 text-sm text-slate-400">Source check: 29 October 2026 · US vendor pages · USD · not a hands-on test</p>
        </header>

        <section aria-labelledby="snapshot" className="border-b border-slate-800 py-8">
          <h2 id="snapshot" className="text-2xl font-bold text-white">At a glance</h2>
          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-800">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">HubSpot and Salesforce product scope and published US starting prices checked 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">What to compare</th>
                  <th scope="col" className="p-4">HubSpot</th>
                  <th scope="col" className="p-4">Salesforce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">Free entry point</th>
                  <td className="p-4 align-top">HubSpot says its free CRM is not time-limited, with up to 2 users and 1,000 contacts. <a className={sourceClass} href="https://www.hubspot.com/products/crm">Source</a></td>
                  <td className="p-4 align-top">Salesforce lists a Free Suite in its edition table; its FAQ describes a 30-day trial for Sales Cloud and Starter Suite. Confirm which SKU and eligibility apply. <a className={sourceClass} href="https://www.salesforce.com/sales/pricing/">Source</a></td>
                </tr>
                <tr>
                  <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">Published entry pricing</th>
                  <td className="p-4 align-top">Sales Hub Starter is shown from $15 per seat/month on HubSpot’s product page. The page notes a new-customer discount that can change. <a className={sourceClass} href="https://www.hubspot.com/products/crm">Source</a></td>
                  <td className="p-4 align-top">Starter Suite is shown at $25 per user/month, billed monthly or annually. Salesforce says pricing can change and detailed quotes may require sales. <a className={sourceClass} href="https://www.salesforce.com/sales/pricing/">Source</a></td>
                </tr>
                <tr>
                  <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">Starter package scope</th>
                  <td className="p-4 align-top">HubSpot lists required fields, permission sets, multiple currencies, and removal of HubSpot branding among Starter features. <a className={sourceClass} href="https://www.hubspot.com/products/crm">Source</a></td>
                  <td className="p-4 align-top">Salesforce describes Starter Suite as a bundle covering sales, service, marketing, and commerce; listed sales features include lead routing and sales flows. <a className={sourceClass} href="https://www.salesforce.com/sales/pricing/">Source</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Prices above are snapshots from US pages, not equivalent quotes. They exclude any taxes, negotiated terms, add-ons, onboarding, or contact/usage costs not shown here. Check the vendor pricing pages before purchase.
          </p>
        </section>

        <section aria-labelledby="differences" className="border-b border-slate-800 py-8">
          <h2 id="differences" className="text-2xl font-bold text-white">Where the choice changes</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Starting small</h3>
              <p className="mt-3 leading-relaxed text-slate-300">If you are evaluating a small team, first check HubSpot’s published free-user/contact limits and Salesforce’s current Free Suite eligibility. Do not assume a free CRM tier and a time-limited Sales Cloud trial are the same offer.</p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Buying a package</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Compare the included products as well as the CRM. Salesforce positions Starter Suite as a multi-function bundle; HubSpot’s pricing page separates Sales Hub from its other Hubs and customer-platform bundles.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">A practical way to decide</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 leading-relaxed text-slate-300">
            <li>Write down the records, pipelines, permissions, reports, and automations your team actually needs.</li>
            <li>Build the same sample workflow in each product or trial, using the edition you would purchase.</li>
            <li>Calculate a 12-month total for your users and required features; include onboarding, add-ons, and any limits that trigger an upgrade.</li>
            <li>Test export, access controls, and the integrations that are essential to your sales process before migrating live data.</li>
          </ol>
        </section>

        <section aria-labelledby="verdict" className="pt-8">
          <h2 id="verdict" className="text-2xl font-bold text-white">Verdict</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Start with HubSpot if its published free limits or Sales Hub packaging match the team you have today. Evaluate Salesforce Starter Suite if its broader bundled scope is useful to your business. For either option, choose from a trial or representative workflow and a written total-cost estimate—not from a generic claim that one CRM is always easier or cheaper.
          </p>
        </section>

        <footer className="mt-8 border-t border-slate-800 pt-6">
          <h2 className="text-lg font-bold text-white">Sources and update policy</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300">
            <li><a className={sourceClass} href="https://www.hubspot.com/products/crm">HubSpot CRM product and pricing overview</a> — free limits, Starter features, and advertised starting price.</li>
            <li><a className={sourceClass} href="https://legal.hubspot.com/hubspot-product-and-services-catalog/free-tools">HubSpot Product & Services Catalog: Free Tools</a> — plan details and limits.</li>
            <li><a className={sourceClass} href="https://www.salesforce.com/sales/pricing/">Salesforce Sales Pricing</a> — suite prices, included features, trial details, and change caveat.</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">This is desk research based on public vendor documentation, not independent hands-on testing. Recheck volatile details before relying on this comparison.</p>
        </footer>
      </article>
    </ComparisonLayout>
  );
}
