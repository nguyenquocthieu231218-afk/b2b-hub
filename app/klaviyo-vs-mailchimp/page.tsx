import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Klaviyo vs Mailchimp (2026): Free Limits and Contact Billing',
  description: 'Compare Klaviyo and Mailchimp free email limits, billable contact definitions, and how their paid tiers scale, based on dated official sources.',
  path: '/klaviyo-vs-mailchimp',
});

const comparisonRows = [
  {
    label: 'Free email allowance',
    klaviyo: 'Up to 250 active profiles and 500 email sends per month. Suppressed profiles do not count toward this email-plan limit.',
    mailchimp: 'Up to 250 contacts and 500 email sends per month, with a separate maximum of 250 sends per day.',
  },
  {
    label: 'What counts toward the audience limit',
    klaviyo: 'The Email/Profile plan is based on active profiles: people who can be emailed through Klaviyo. Suppressed email profiles are excluded from this limit.',
    mailchimp: 'The paid contact tier covers contacts stored across all audiences. Subscribed, unsubscribed, and non-subscribed contacts count toward the limit.',
  },
  {
    label: 'How paid costs scale',
    klaviyo: 'The Email/Profile plan price and included email capacity depend on active-profile count. Other Klaviyo products can have separate plans and usage limits.',
    mailchimp: 'The selected marketing plan and maximum contact tier determine the base price and included monthly sends. The tier counts contacts across the account’s audiences.',
  },
  {
    label: 'Key free-plan constraints',
    klaviyo: 'The free email plan is limited to the profile and send allowances above. Free email support is available for the first 60 days after signup.',
    mailchimp: 'The free plan includes one seat and one audience. Sending is paused when the contact or send limit is exceeded.',
  },
] as const;

export default function KlaviyoVsMailchimpPage() {
  return (
    <ComparisonLayout tool1="klaviyo" tool2="mailchimp" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Email marketing · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Klaviyo vs Mailchimp: compare audience limits before choosing
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Both vendors currently list a free email allowance of up to 250 audience records and 500 monthly sends. The important difference is how the audience count is defined: Klaviyo’s Email/Profile plan uses active profiles, while Mailchimp’s paid contact tiers also count unsubscribed and non-subscribed contacts. That can change the plan tier you need, so compare using your actual cleaned list and sending volume.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Do not choose from a headline “starting at” price alone. First count the records each vendor will bill, your expected monthly sends, required users, and any separate products. Klaviyo can be worth pricing when a large share of your stored profiles are suppressed from email; Mailchimp’s tier calculation includes several contact statuses across the account. Verify the result in each vendor’s live calculator before moving a list or committing to a paid plan.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published limits and billing model</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Klaviyo and Mailchimp email plan limits and contact billing checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Klaviyo</th>
                  <th scope="col" className="p-4">Mailchimp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.klaviyo}</td>
                    <td className="p-4 align-top leading-relaxed">{row.mailchimp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:hidden">
            {comparisonRows.map((row) => (
              <article key={row.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="font-bold text-white">{row.label}</h3>
                <dl className="mt-3 grid gap-3 text-sm">
                  <div>
                    <dt className="font-semibold text-blue-200">Klaviyo</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.klaviyo}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Mailchimp</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.mailchimp}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            These limits describe the vendors’ published US free plans at the source-check date. Paid prices can vary by contact/profile tier, country, currency, billing terms, and product selection. Confirm the amount and included send capacity displayed for your own account before purchase.
          </p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">A practical way to choose</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Price Klaviyo when…</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                You already have a sizeable stored list but many records are suppressed from email, or you need Klaviyo-specific data and workflows. Count active profiles and projected sends in its pricing flow; include the cost of any additional Klaviyo products you actually need.
              </p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Price Mailchimp when…</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                You want to keep using its account and audience setup, or its included seats, features, and send allowance fit your workflow. Count subscribed, unsubscribed, and non-subscribed contacts across every audience before selecting a tier.
              </p>
            </article>
          </div>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Export a contact count.</strong> Separate subscribed, unsubscribed, non-subscribed, and suppressed records; remove duplicates and records you do not intend to retain.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Model sends, not just contacts.</strong> Add campaign and automation sends for a normal month and a peak month, then compare each plan’s included allowance.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Check migration constraints.</strong> Verify consent records, integrations, templates, automations, sender-domain setup, and data-export options before importing or switching.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This page summarizes vendor-published plan limits and billing definitions checked on 29 October 2026. It is desk research, not independent deliverability, usability, or revenue testing. Plans and limits can change; use the linked live pricing pages to confirm current terms.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.klaviyo.com/pricing" target="_blank" rel="noopener noreferrer">Klaviyo pricing and free-plan limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.klaviyo.com/hc/en-us/articles/360050759151" target="_blank" rel="noopener noreferrer">Klaviyo Help Center: free and paid plan limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.klaviyo.com/hc/en-us/articles/115000976672" target="_blank" rel="noopener noreferrer">Klaviyo Help Center: how billing works</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer">Mailchimp marketing pricing and free-plan limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/mailchimp-pricing-tiers/" target="_blank" rel="noopener noreferrer">Mailchimp Help: contact-based pricing tiers</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/about-your-contacts/" target="_blank" rel="noopener noreferrer">Mailchimp Help: contact types and which count toward limits</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
