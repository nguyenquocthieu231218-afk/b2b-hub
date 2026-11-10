import ComparisonLayout from '@/app/components/ComparisonLayout';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'ActiveCampaign vs Kit: Automation, Subscribers and Commerce',
  description: 'Compare ActiveCampaign and Kit on workflow depth, contact billing, send limits, subscriber tiers, creator commerce fees, and team seats.',
  path: '/activecampaign-vs-convertkit',
});

const rows = [
  {
    label: 'Entry offer',
    activecampaign: 'Pricing starts at $15 for accounts below 1,000 contacts. The trial is 14 days and is limited to 100 contacts and 100 email sends.',
    kit: 'Free is $0 for up to 10,000 subscribers, unlimited forms and landing pages, and unlimited broadcasts. Visual automations and email sequences require a paid plan.',
  },
  {
    label: 'Automation depth',
    activecampaign: 'Starter supports multi-step automation but caps each automation at 5 actions. Plus, Pro, and Enterprise list unlimited actions; higher plans add sales automation, conditional content, and predictive features.',
    kit: 'Creator and Pro include unlimited Visual Automations, sequences, rules, link triggers, tags, and segments. Pro adds deeper reporting, engagement scoring, audiences, and growth features.',
  },
  {
    label: 'Audience and sending meter',
    activecampaign: 'Newer accounts count all contacts regardless of list status. Monthly email sends are 10× the contact limit on Starter and Plus, 12× on Pro, and 15× on Enterprise.',
    kit: 'Billing is based on confirmed subscribers, not email volume. Kit says every plan has unlimited sends and automatically moves a growing account to the next subscriber tier.',
  },
  {
    label: 'Creator revenue',
    activecampaign: 'The platform is oriented to marketing lifecycle and cross-channel automation; ecommerce and sales workflows depend on plan, integration, and add-on choices.',
    kit: 'Every plan can sell digital products and subscriptions. Kit lists a 0.6% platform fee plus typical Stripe processing of 2.9% + $0.30 per transaction.',
  },
] as const;

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 transition-colors hover:text-white';

export default function ActiveCampaignVsKitPage() {
  return (
    <ComparisonLayout tool1="activecampaign" tool2="convertkit" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Email marketing · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">ActiveCampaign vs Kit: lifecycle automation or a creator revenue stack?</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">ActiveCampaign gives marketing teams more levers for branching, cross-channel work, CRM handoffs, attribution, and conditional delivery. Kit keeps the operating model closer to one creator audience, unlimited sends, newsletters, and built-in product sales. The first limit you hit matters more than the feature count.</p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-10">10 November 2026</time> · US vendor pages · USD · desk research, not a deliverability or revenue test</p>
        </header>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">The operating model behind each plan</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="sr-only">ActiveCampaign and Kit plan limits checked 10 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200"><tr><th scope="col" className="p-4">Constraint</th><th scope="col" className="p-4">ActiveCampaign</th><th scope="col" className="p-4">Kit (ConvertKit)</th></tr></thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">{rows.map((row) => <tr key={row.label}><th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th><td className="p-4 align-top leading-relaxed">{row.activecampaign}</td><td className="p-4 align-top leading-relaxed">{row.kit}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:hidden">{rows.map((row) => <article key={row.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-bold text-white">{row.label}</h3><dl className="mt-3 grid gap-3 text-sm"><div><dt className="font-semibold text-blue-200">ActiveCampaign</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.activecampaign}</dd></div><div><dt className="font-semibold text-blue-200">Kit</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.kit}</dd></div></dl></article>)}</div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Public prices and promotions can change by subscriber/contact tier, billing term, region, and add-on. Use the live selector and checkout for the final total.</p>
        </section>

        <section aria-labelledby="automation" className="border-b border-slate-800 py-8">
          <h2 id="automation" className="text-2xl font-bold text-white">Automation: count actions, channels, and failure behavior</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5"><h3 className="font-bold text-white">ActiveCampaign is the deeper workflow engine</h3><p className="mt-3 leading-relaxed text-slate-300">All current plans list multi-step automation, multiple triggers, email automation, and ecommerce automation. Starter’s five-action ceiling per automation is the meaningful constraint. Plus and above remove that action limit, while Pro and Enterprise expose more advanced segmentation, content, attribution, and sales capabilities.</p></article>
            <article className="rounded-xl border border-violet-400/20 bg-violet-400/5 p-5"><h3 className="font-bold text-white">Kit is simpler around one creator graph</h3><p className="mt-3 leading-relaxed text-slate-300">Kit’s paid plans include unlimited Visual Automations and sequences, with subscribers organized through tags and segments rather than duplicated lists. That is a strong fit for lead magnets, launches, and paid newsletters, but it is not the same as a multi-channel B2B CRM workflow.</p></article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">At the ActiveCampaign contact ceiling, automations can keep advancing while contacts skip “Send an email” steps. Without auto-upgrade enabled, a quiet billing limit can become a live journey failure. Test this behavior before using a workflow for onboarding or revenue-critical messages.</p>
        </section>

        <section aria-labelledby="billing" className="border-b border-slate-800 py-8">
          <h2 id="billing" className="text-2xl font-bold text-white">Subscriber and contact math changes the forecast</h2>
          <ul className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">ActiveCampaign:</strong> accounts created on or after 3 November 2025 count all contacts regardless of list status. Starter is capped at 25,000 contacts. If the limit is exceeded, scheduled campaigns may not send and automation email actions may be skipped until capacity changes.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Kit:</strong> only confirmed subscribers count toward billing; unsubscribed, unconfirmed, hard-bounced, complained, and blocked profiles do not. Cold subscribers still count while they remain confirmed.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Tier movement:</strong> Kit automatically upgrades the subscriber tier and prorates the difference. A qualifying downgrade is selected from billing settings and starts at the next billing date.</li>
          </ul>
        </section>

        <section aria-labelledby="creator-commerce" className="border-b border-slate-800 py-8">
          <h2 id="creator-commerce" className="text-2xl font-bold text-white">Kit’s creator advantage has a transaction cost</h2>
          <p className="mt-4 leading-relaxed text-slate-300">Kit can sell digital products, recurring subscriptions, tips, and paid newsletters on every plan. Its current pricing page shows transaction cost as 3.5% + $0.30, composed of a 0.6% Kit platform fee plus typical 2.9% + $0.30 card processing. That can remove a separate storefront from a small creator stack, but it must be modelled against revenue—not treated as free because the email plan is free.</p>
          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Break-even check</h3><p className="mt-2 leading-relaxed text-slate-300">Calculate monthly subscription cost, transaction fees, refunds, tax tooling, and any external checkout or CRM you still need. Then compare that total with ActiveCampaign plus the commerce platform already in your stack.</p></div>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">Run one representative journey before buying</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 leading-relaxed text-slate-300">
            <li>Use the same opt-in, segmentation rule, branch, sales event, purchase, cancellation, and re-engagement scenario in both products.</li>
            <li>Count every automation action, contact status, subscriber, monthly email, seat, SMS message, and integration involved.</li>
            <li>Test consent changes, unsubscribes, hard bounces, failed payments, a contact-tier breach, and export before committing production data.</li>
            <li>Compare the second-year price after introductory discounts and the next audience tier—not only the first invoice.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">This comparison summarizes vendor documentation checked on 10 November 2026. StackEvalify has not run controlled deliverability, conversion, support, or revenue tests for these products.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className={sourceClass} href="https://www.activecampaign.com/pricing">ActiveCampaign pricing and feature matrix</a> — sends, seats, plans, and automation limits.</li>
            <li><a className={sourceClass} href="https://help.activecampaign.com/hc/en-us/articles/218251828-Automation-actions-explained">ActiveCampaign automation actions</a> — Starter’s five-action limit.</li>
            <li><a className={sourceClass} href="https://help.activecampaign.com/hc/en-us/articles/115000364264-What-happens-when-I-reach-my-contact-limit">ActiveCampaign contact-limit behavior</a> — counted contacts and workflow impact.</li>
            <li><a className={sourceClass} href="https://www.activecampaign.com/about/faq">ActiveCampaign pricing and trial FAQ</a> — entry price and trial limits.</li>
            <li><a className={sourceClass} href="https://kit.com/pricing">Kit pricing</a> — subscriber tiers, sends, automation, seats, and commerce fees.</li>
            <li><a className={sourceClass} href="https://help.kit.com/en/articles/16627071-the-kit-free-plan">Kit Free plan</a> — included features and paid automation boundary.</li>
            <li><a className={sourceClass} href="https://help.kit.com/en/articles/2502679-billing-at-kit">Kit billing</a> — confirmed-subscriber billing and tier movement.</li>
            <li><a className={sourceClass} href="https://help.kit.com/en/articles/2502651-the-subscriber-profile-page-and-status">Kit subscriber statuses</a> — which profiles count toward billing.</li>
            <li><a className={sourceClass} href="https://kit.com/features/commerce/paid-newsletter">Kit paid newsletters</a> — commerce capabilities and fee components.</li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
