import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Pipedrive vs HubSpot (2026): Free CRM and Pricing Structure',
  description: 'Compare Pipedrive trials, current plan structure, per-seat billing, and HubSpot free CRM and marketing contact tiers using official sources.',
  path: '/pipedrive-vs-hubspot',
});

const comparisonRows = [
  {
    label: 'Free access',
    pipedrive: 'A 14-day full-access trial is available with no credit card required. Pipedrive does not list an ongoing free CRM plan.',
    hubspot: 'Free tools have no time limit and include up to 2 users and 1,000 contacts. Free tools include a basic Smart CRM and sales pipeline features.',
  },
  {
    label: 'Paid plan structure',
    pipedrive: 'The current US annual-billing view lists Lite at $14, Growth at $39, Premium at $59, and Ultimate at $79 per seat/month. Optional add-ons and usage top-ups can increase the total.',
    hubspot: 'HubSpot sells product Hubs and bundles. Starter Customer Platform combines Starter editions; pricing depends on seats, product selection, and other limits.',
  },
  {
    label: 'Marketing email costs',
    pipedrive: 'Campaigns is a separate add-on on Lite, Growth, Premium, and Ultimate plans.',
    hubspot: 'Marketing Hub Starter, Professional, and Enterprise use marketing contact tiers. Only contacts marked as marketing count toward the tier; non-marketing contacts do not.',
  },
  {
    label: 'Add-ons and features',
    pipedrive: 'LeadBooster, Projects, and Smart Docs are add-ons on Lite and Growth, and included on Premium and Ultimate. Campaigns and Web Visitors remain add-ons across plans.',
    hubspot: 'Marketing, Sales, Service, Content, Data, and other products have separate editions and feature sets. Confirm the exact Hub and seat types needed for your workflow.',
  },
] as const;

export default function PipedriveVsHubSpotPage() {
  return (
    <ComparisonLayout tool1="pipedrive" tool2="hubspot" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">CRM · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Pipedrive vs HubSpot: compare free CRM and total plan cost
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            The old headline comparison—Pipedrive as a simple sales CRM and HubSpot as an all-in-one suite—misses important billing details. Pipedrive has refreshed its plan names and sells marketing email as an add-on. HubSpot has an ongoing free CRM, while paid Marketing Hub bills by marketing-contact tier. Compare your actual seats, contacts, and add-ons before choosing.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-11-09">9 November 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            If you need a small no-cost CRM to evaluate first, HubSpot’s free tools give up to two users and 1,000 contacts without a time limit. If you are comparing paid sales setups, price Pipedrive by seats and required add-ons against the exact HubSpot products and seat types you need. A CRM headline price is not the full cost if you also need marketing email, sales automation, or additional paid capabilities.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Current plan and billing differences</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Pipedrive and HubSpot plan details checked on 9 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Pipedrive</th>
                  <th scope="col" className="p-4">HubSpot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.pipedrive}</td>
                    <td className="p-4 align-top leading-relaxed">{row.hubspot}</td>
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
                    <dt className="font-semibold text-blue-200">Pipedrive</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.pipedrive}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">HubSpot</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.hubspot}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Plan prices vary by country, currency, billing interval, discounts, seats, product selection, and add-ons. HubSpot’s current pricing page may show temporary offers; Pipedrive’s annual amount is billed upfront. Use the live checkout or quote for an account-specific total.
          </p>
        </section>

        <section aria-labelledby="billing-traps" className="border-b border-slate-800 py-8">
          <h2 id="billing-traps" className="text-2xl font-bold text-white">Model the billing triggers the headline price omits</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Pipedrive: seats, add-ons, and top-ups</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Pipedrive says every seat is billed whether it is assigned to a user or not. Annual subscriptions are paid upfront. LeadBooster, Projects, and Smart Docs are included from Premium; Campaigns and Web Visitors remain separate add-ons. Growth and higher tiers can also buy top-ups for limits such as API tokens, leads and deals, reports, or automations.</p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">HubSpot: contact-tier expansion</h3>
              <p className="mt-3 leading-relaxed text-slate-300">For Marketing Hub accounts with marketing contacts, HubSpot says exceeding the current tier—even by one contact—triggers an automatic move to the next tier. The higher tier remains billable until renewal even if the count later falls. Changing a contact to non-marketing also takes effect on the account’s next update date, not immediately.</p>
            </article>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">A safer estimate therefore includes a seat-owner process in Pipedrive and a marketing-contact ceiling, update-date review, and renewal plan in HubSpot. These are billing controls, not claims about which CRM is easier to use.</p>
        </section>

        <section aria-labelledby="evaluation" className="border-b border-slate-800 py-8">
          <h2 id="evaluation" className="text-2xl font-bold text-white">Build a like-for-like CRM estimate</h2>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. List your sales users.</strong> Count full seats, access levels, and any shared or read-only users. Compare Pipedrive’s per-seat billing with the HubSpot products and seat types required.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Count only the contacts you market to.</strong> For HubSpot Marketing Hub, review which records are set as marketing contacts and which can remain non-marketing.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Add the full workflow cost.</strong> Include email marketing, lead capture/prospecting tools, data migration, and any add-ons needed to reproduce your current process.</li>
          </ol>
          <p className="mt-5 leading-relaxed text-slate-300">
            To assess usability or sales outcomes, trial both with the same imported sample, pipeline stages, follow-up routine, and reporting questions. This page does not claim either CRM improves close rates or is easier to use.
          </p>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This comparison summarizes official pricing, plan, and billing documentation checked on 9 November 2026. It is desk research, not independent product testing or a conversion study. Plan names, offers, included features, and billing rules can change; confirm the current terms in your account.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.pipedrive.com/en/pricing" target="_blank" rel="noopener noreferrer">Pipedrive pricing and trial details</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.pipedrive.com/en/article/what-features-do-the-pipedrive-plans-have" target="_blank" rel="noopener noreferrer">Pipedrive Help: current plan features and add-ons</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.pipedrive.com/en/article/how-does-pricing-work-in-pipedrive" target="_blank" rel="noopener noreferrer">Pipedrive Help: billing cycles, seats, and add-ons</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.hubspot.com/pricing/crm" target="_blank" rel="noopener noreferrer">HubSpot pricing and free CRM limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://knowledge.hubspot.com/records/marketing-contacts" target="_blank" rel="noopener noreferrer">HubSpot Knowledge Base: marketing contact tiers</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://knowledge.hubspot.com/account/understand-marketing-contacts-billing" target="_blank" rel="noopener noreferrer">HubSpot Knowledge Base: automatic contact-tier upgrades and update dates</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
