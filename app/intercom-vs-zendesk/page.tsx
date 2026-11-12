import ComparisonLayout from '@/app/components/ComparisonLayout';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Intercom vs Zendesk (2026): Fin, Copilot and Real Cost',
  description: 'A source-checked Intercom vs Zendesk cost analysis covering seats, Fin outcomes, automated resolutions, omnichannel tiers, and Copilot licensing.',
  path: '/intercom-vs-zendesk',
});

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 hover:text-white';

const rows = [
  {
    label: 'Published human-support entry point',
    intercom: 'Essential displays $19 per seat/month billed annually for new customers, against a crossed-out $29 price. Advanced is $85 and Expert is $132 per seat/month billed annually.',
    zendesk: 'Support Team is $19 per agent/month annually. Suite Team is $55 and Suite Professional is $115; monthly billing is listed at $25, $69, and $149 respectively.',
  },
  {
    label: 'AI resolution meter',
    intercom: 'Fin starts at $0.99 per outcome. Intercom says it charges at most one outcome per conversation; a standard resolution, procedure handoff, disqualification, or self-serve routing is $0.99, while a sales qualification is $9.99.',
    zendesk: 'Support Team and Suite Team list 5 automated resolutions per agent/month; Suite Professional lists 10. Additional committed resolutions are $1.50 and pay-as-you-go resolutions are $2.00.',
  },
  {
    label: 'Omnichannel boundary',
    intercom: 'All plans include live chat, support email, and in-app chat. Email campaigns, SMS, WhatsApp, and phone are pay-as-you-go channels.',
    zendesk: 'Suite Team adds omnichannel routing, messaging, and live chat. Support Team is the email-and-ticketing starting tier, so channel requirements can force a Suite upgrade.',
  },
  {
    label: 'Agent-assist add-on',
    intercom: 'Copilot availability varies by Intercom tier and feature; the cost model still starts with the helpdesk seat plus any Fin outcomes and paid channels.',
    zendesk: 'Copilot is an add-on for eligible Suite and Support plans. Zendesk says it must be purchased for the entire account and is charged for all agent seats, even if feature access is limited to selected groups.',
  },
] as const;

export default function IntercomVsZendeskPage() {
  return (
    <ComparisonLayout tool1="intercom" tool2="zendesk" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Customer support · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Intercom vs Zendesk: price the AI outcome, not just the agent seat
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Both vendors now mix human-agent seats with AI usage, but the meters are different. Intercom puts Fin outcomes beside its helpdesk seats; Zendesk combines plan-based automated-resolution allowances with paid resolution capacity and an account-wide Copilot decision.
          </p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-12">12 November 2026</time> · US vendor pages · USD · desk research, not a hands-on implementation</p>
        </header>

        <section aria-labelledby="cost-model" className="border-b border-slate-800 py-8">
          <h2 id="cost-model" className="text-2xl font-bold text-white">The cost model at a glance</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
              <caption className="sr-only">Intercom and Zendesk pricing constraints checked 12 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200"><tr><th scope="col" className="p-4">Cost driver</th><th scope="col" className="p-4">Intercom</th><th scope="col" className="p-4">Zendesk</th></tr></thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {rows.map((row) => <tr key={row.label}><th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th><td className="p-4 align-top leading-relaxed">{row.intercom}</td><td className="p-4 align-top leading-relaxed">{row.zendesk}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:hidden">
            {rows.map((row) => <article key={row.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-bold text-white">{row.label}</h3><dl className="mt-3 grid gap-3 text-sm"><div><dt className="font-semibold text-blue-200">Intercom</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.intercom}</dd></div><div><dt className="font-semibold text-blue-200">Zendesk</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.zendesk}</dd></div></dl></article>)}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Prices exclude tax, implementation, negotiated discounts, voice and messaging usage, extra capacity, and services not explicitly listed. Intercom&apos;s Essential price is displayed as a new-customer annual offer; do not treat it as a guaranteed renewal price.</p>
        </section>

        <section aria-labelledby="fin-meter" className="border-b border-slate-800 py-8">
          <h2 id="fin-meter" className="text-2xl font-bold text-white">Intercom&apos;s Fin bill moves with outcomes</h2>
          <p className="mt-4 leading-relaxed text-slate-300">A forecast based only on “$0.99 per resolution” can miss two things. First, Intercom now describes several billable outcome types and prices a sales qualification at $9.99. Second, the helpdesk seat remains a separate cost unless Fin runs on another supported helpdesk. Model support resolutions, procedure handoffs, routing, and sales qualifications as distinct volumes.</p>
          <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5"><h3 className="font-bold text-amber-100">The control to verify</h3><p className="mt-2 leading-relaxed text-slate-300">Intercom documents usage reminders and hard limits. Set a monthly Fin ceiling during rollout, then reconcile assumed and confirmed outcomes against the invoice before expanding traffic.</p></div>
        </section>

        <section aria-labelledby="zendesk-stack" className="border-b border-slate-800 py-8">
          <h2 id="zendesk-stack" className="text-2xl font-bold text-white">Zendesk&apos;s trap is the stack of plan, capacity, and Copilot</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Channel tier</h3><p className="mt-3 leading-relaxed text-slate-300">A team that needs messaging and omnichannel routing is comparing against Suite Team or higher, not the $19 Support Team headline.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Resolution capacity</h3><p className="mt-3 leading-relaxed text-slate-300">Included automated resolutions scale with plan and agent count. Committed and pay-as-you-go units have different published prices.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Account-wide Copilot</h3><p className="mt-3 leading-relaxed text-slate-300">Zendesk says the add-on is bought for all agent seats. Restricting access to a group does not turn it into selective-seat licensing.</p></article>
          </div>
        </section>

        <section aria-labelledby="budget-test" className="border-b border-slate-800 py-8">
          <h2 id="budget-test" className="text-2xl font-bold text-white">Run one 12-month support-volume model</h2>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Count licensed people.</strong> Separate full agents, admins, lite users, seasonal staff, and anyone who needs Copilot.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Forecast conversations by outcome.</strong> Include AI resolutions, human handoffs, procedure executions, sales qualifications, and peak-month headroom.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Add every channel.</strong> Price phone, WhatsApp, SMS, social messaging, email campaigns, numbers, recording, and other usage separately.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">4. Get the renewal mechanics in writing.</strong> Record promotional expiry, committed-volume terms, overage rates, seat floors, and downgrade timing.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">This is a desk-research cost model based on first-party pages checked 12 November 2026. It does not claim independent deployment, AI-accuracy, support-quality, or migration testing.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className={sourceClass} href="https://www.intercom.com/pricing">Intercom pricing</a> — annual seat prices, channel notes, and Fin entry price.</li>
            <li><a className={sourceClass} href="https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes">Intercom Help: Fin outcomes</a> — billable outcome definitions and prices.</li>
            <li><a className={sourceClass} href="https://www.zendesk.com/pricing/">Zendesk pricing</a> — Support and Suite prices, plan features, automated-resolution allowances, and additional-unit prices.</li>
            <li><a className={sourceClass} href="https://support.zendesk.com/hc/en-us/articles/10361828111514-Can-I-buy-a-Zendesk-Copilot-license-for-some-agents-only">Zendesk Help: Copilot licensing</a> — account-wide agent-seat rule.</li>
            <li><a className={sourceClass} href="https://support.zendesk.com/hc/en-us/articles/4408834152730-About-Zendesk-product-add-ons">Zendesk Help: product add-ons</a> — eligibility and capacity add-ons.</li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
