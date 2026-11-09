import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Mailchimp vs ActiveCampaign (2026): Pricing and Automation Plans',
  description: 'Compare Mailchimp and ActiveCampaign trial limits, contact billing, seats, and marketing automation by plan using dated official sources.',
  path: '/mailchimp-vs-activecampaign',
});

const comparisonRows = [
  {
    label: 'Free access',
    mailchimp: 'Free Marketing plan: up to 250 contacts, 500 email sends per month, and 250 per day. It includes one audience and one seat.',
    activecampaign: 'No ongoing free marketing plan is listed in the current plan overview. Its trial lasts 14 days, allows up to 100 email sends, and is limited to one user.',
  },
  {
    label: 'How paid plans scale',
    mailchimp: 'Your plan and selected contact tier set the bill and send limit. Subscribed, unsubscribed, and non-subscribed contacts count; archived and cleaned contacts do not. A duplicate stored in two audiences counts twice.',
    activecampaign: 'Plan features and contact volume determine the price. For accounts created on or after 3 November 2025, every contact counts toward the limit regardless of list status; older accounts count active contacts.',
  },
  {
    label: 'Marketing automation',
    mailchimp: 'Essentials includes single-email automations and automation flows with up to 4 steps. Standard expands flow capabilities; confirm each trigger, branch, and integration in the live matrix.',
    activecampaign: 'Starter lists email automation with up to 5 actions per automation. Plus adds a basic suite of triggers/actions; Professional adds advanced triggers/actions and connected automations.',
  },
  {
    label: 'Users and sales CRM',
    mailchimp: 'Free includes one seat. Paid plans list additional seats and permissions by tier; evaluate those alongside the contact and send limits.',
    activecampaign: 'Starter includes one user seat and allows one additional seat. Enhanced CRM and Sales Engagement are separate add-on packages, so include them in a sales-team quote if needed.',
  },
] as const;

export default function MailchimpVsActiveCampaignPage() {
  return (
    <ComparisonLayout tool1="mailchimp" tool2="activecampaign" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Email marketing · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Mailchimp vs ActiveCampaign: compare plans, costs, and automation
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            The useful comparison is not “simple newsletters versus advanced automation.” Both products offer marketing automation, but the capabilities and seat limits depend on the plan. Mailchimp publishes a free tier; ActiveCampaign offers a short trial. For a paid decision, compare the plan that meets your automation needs and your full contact count, then include any CRM or messaging add-ons.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-11-09">9 November 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Choose a shortlist based on the workflow you actually need. If you are only validating basic campaign creation, Mailchimp’s free tier is available within its published contact and send caps. If you need to trial ActiveCampaign’s Professional-level features, its trial gives 14 days but limits sending to 100 emails and one user. For production, price the relevant paid plan against your full list and check whether sales CRM, SMS, transactional email, or extra seats add to the bill.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published plan differences</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Mailchimp and ActiveCampaign plan limits checked on 9 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Mailchimp</th>
                  <th scope="col" className="p-4">ActiveCampaign</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.mailchimp}</td>
                    <td className="p-4 align-top leading-relaxed">{row.activecampaign}</td>
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
                    <dt className="font-semibold text-blue-200">Mailchimp</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.mailchimp}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">ActiveCampaign</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.activecampaign}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Vendor plan descriptions and pricing flows can change and vary by region, contact tier, billing term, and add-ons. No fixed paid starting price is shown here because ActiveCampaign’s current pricing route asks for a tailored quote and Mailchimp calculates price from plan and contact tier. Confirm the live total before buying.
          </p>
        </section>

        <section aria-labelledby="limit-behavior" className="border-b border-slate-800 py-8">
          <h2 id="limit-behavior" className="text-2xl font-bold text-white">The limit behavior matters more than the headline price</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Mailchimp: paid overages can arrive without a service stop</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                On a paid monthly plan, exceeding the contact or send allowance can add one or more contact blocks to that month’s bill instead of interrupting service. The Free plan behaves differently: exceeding 250 contacts places email sending on hold until the account upgrades or reduces its count.
              </p>
            </article>
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">ActiveCampaign: contact and send caps fail differently</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                At the contact limit, campaigns that have not started will not send and contacts can skip “Send an email” automation actions until the limit is raised. Monthly send overages are billed at $0.005 per email; sending is disabled if overage reaches three times the account’s limit.
              </p>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">
            Before signing, model a high-growth month—not only today’s list. Include duplicate audiences, unsubscribed records, seasonal send spikes, imported contacts, and a buffer for automations that continue running outside campaign day.
          </p>
        </section>

        <section aria-labelledby="evaluation" className="border-b border-slate-800 py-8">
          <h2 id="evaluation" className="text-2xl font-bold text-white">Compare with your own workflow</h2>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Map one real customer journey.</strong> Write down the trigger, conditions, branches, messages, sales handoff, and exit rules you need. Check which exact plan supports each step.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Calculate the billable audience.</strong> Include every contact counted by the vendor, expected send volume, users, and any CRM, SMS, or transactional email add-ons.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Test the handoff and reporting.</strong> Trial the same signup, automation, unsubscribe, sales handoff, and campaign-reporting scenario in each platform. Record setup time and any manual work.</li>
          </ol>
          <p className="mt-5 leading-relaxed text-slate-300">
            Avoid selecting a platform from claims about inbox placement or revenue improvement alone. This comparison does not include a controlled deliverability or conversion test; use a permission-based test list and your own measurement period if those outcomes drive the purchase.
          </p>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This page summarizes plan limits, contact billing, overage behavior, and automation availability in vendor documentation checked on 9 November 2026. It is desk research, not independent deliverability, usability, or revenue testing. Check the vendors’ live account-specific pricing before committing.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer">Mailchimp marketing pricing and free-plan limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/about-mailchimp-pricing-plans/" target="_blank" rel="noopener noreferrer">Mailchimp Help: plan, contact, and send limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/about-additional-charges/" target="_blank" rel="noopener noreferrer">Mailchimp Help: contact blocks and additional charges</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/remove-duplicates-and-bounces-with-excel/" target="_blank" rel="noopener noreferrer">Mailchimp Help: duplicate contacts across audiences</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/change-classic-automation-customer-journey/" target="_blank" rel="noopener noreferrer">Mailchimp Help: plan availability for automation flows</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.activecampaign.com/hc/en-us/articles/14251311251356-Overview-of-ActiveCampaign-plans" target="_blank" rel="noopener noreferrer">ActiveCampaign Help: plan features and add-ons</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.activecampaign.com/hc/en-us/articles/218789987-Free-trial-capabilities" target="_blank" rel="noopener noreferrer">ActiveCampaign Help: free-trial capabilities and limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.activecampaign.com/hc/en-us/articles/115000364264-What-happens-when-I-reach-my-contact-limit" target="_blank" rel="noopener noreferrer">ActiveCampaign Help: contact-limit behavior</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.activecampaign.com/hc/en-us/articles/10918125380764-About-email-send-limits-and-overage-fees" target="_blank" rel="noopener noreferrer">ActiveCampaign Help: send limits and overage fees</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.activecampaign.com/pricing/contact/" target="_blank" rel="noopener noreferrer">ActiveCampaign current pricing inquiry</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
