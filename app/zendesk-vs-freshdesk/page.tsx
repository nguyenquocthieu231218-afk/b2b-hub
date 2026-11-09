import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Zendesk vs Freshdesk (2026): Agent Seats and Omnichannel Cost',
  description: 'Compare Zendesk and Freshdesk agent pricing, omnichannel plan gaps, occasional-agent costs, and AI add-ons using dated official sources.',
  path: '/zendesk-vs-freshdesk',
});

const comparisonRows = [
  {
    label: 'Email-first entry plan',
    zendesk: 'Support Team is $19 per agent/month billed annually. It covers core email ticketing rather than the full Zendesk Suite channel bundle.',
    freshdesk: 'Growth is $19 per agent/month billed annually. It includes ticketing, shared inbox, portal, knowledge base, reports, roles, and permissions.',
  },
  {
    label: 'Omnichannel entry plan',
    zendesk: 'Suite Team is $55 per agent/month billed annually and adds messaging, live chat, voice, SMS, knowledge base, and omnichannel routing.',
    freshdesk: 'Freshdesk Omni Growth is $29 per agent/month billed annually and adds omnichannel support to the Growth-level service desk.',
  },
  {
    label: 'Higher public tiers',
    zendesk: 'Suite Growth, Professional, and Enterprise are listed at $89, $115, and $169 per agent/month billed annually.',
    freshdesk: 'Freshdesk Pro and Enterprise are $55 and $89; Freshdesk Omni Pro and Enterprise are $79 and $119 per agent/month billed annually.',
  },
  {
    label: 'Flexible or limited agents',
    zendesk: 'Light agents have restricted ticket access and are included only on eligible Suite tiers or bought as an add-on; assigning other product roles can consume a full seat.',
    freshdesk: 'Full-time agents require seats. Occasional agents use day passes when they log in; every plan includes three passes before paid usage.',
  },
] as const;

export default function ZendeskVsFreshdeskPage() {
  return (
    <ComparisonLayout tool1="zendesk" tool2="freshdesk" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Customer support · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Zendesk vs Freshdesk: price the channels and people you actually need
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            The cheapest helpdesk plan is not an omnichannel quote. Zendesk separates Support Team from its Suite, while Freshworks separates Freshdesk from Freshdesk Omni. Model full-time agents, occasional collaborators, voice or messaging channels, AI usage, and add-ons before comparing the headline per-agent price.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-11-09">9 November 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Compare Zendesk Support Team with Freshdesk Growth only for an email-first helpdesk. For messaging, live chat, voice, and unified routing, compare Zendesk Suite with Freshdesk Omni. Freshdesk currently calls its entry paid plan Growth—not Starter—so older comparisons using “Starter” do not represent the November 2026 catalog.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published annual-billing prices</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="sr-only">Zendesk and Freshdesk public plan prices checked on 9 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr><th scope="col" className="p-4">Criteria</th><th scope="col" className="p-4">Zendesk</th><th scope="col" className="p-4">Freshdesk</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.zendesk}</td>
                    <td className="p-4 align-top leading-relaxed">{row.freshdesk}</td>
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
                  <div><dt className="font-semibold text-blue-200">Zendesk</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.zendesk}</dd></div>
                  <div><dt className="font-semibold text-blue-200">Freshdesk</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.freshdesk}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Prices are USD per agent/month with annual billing. Taxes, regional pricing, contracts, voice usage, phone numbers, and negotiated terms are excluded.</p>
        </section>

        <section aria-labelledby="omnichannel-gap" className="border-b border-slate-800 py-8">
          <h2 id="omnichannel-gap" className="text-2xl font-bold text-white">The omnichannel gap changes the budget</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Zendesk</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Moving from Support Team at $19 to Suite Team at $55 adds $36 per full agent each month on the annual-billing view. Suite includes the channel bundle; standalone Support can require separate products or add-ons for chat, messaging, knowledge, collaboration, and other capabilities.</p>
            </article>
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Freshdesk</h3>
              <p className="mt-3 leading-relaxed text-slate-300">The annual-price gap from Freshdesk to Freshdesk Omni is $10 per agent on Growth, $24 on Pro, and $30 on Enterprise. Voice usage and numbers can still add costs even after choosing Omni.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="seat-cost" className="border-b border-slate-800 py-8">
          <h2 id="seat-cost" className="text-2xl font-bold text-white">Seat labels can hide billable access</h2>
          <p className="mt-4 leading-relaxed text-slate-300">Zendesk charges for agents, admins, and the account owner; suspended agents still consume seats. Light agents are usually non-billable only while their other Zendesk product roles remain limited. A light agent assigned as an Agent, Admin, or Editor in Chat, Knowledge, or Analytics can consume a full seat.</p>
          <p className="mt-4 leading-relaxed text-slate-300">Freshdesk bills active full-time agent seats and prorates additions or removals for the remaining billing period. Occasional agents consume a pass only when they log in. Extra Freshdesk passes cost $2 on Growth, $7 on Pro, and $12 on Enterprise; Omni passes cost $5, $10, and $15 respectively.</p>
        </section>

        <section aria-labelledby="add-ons" className="border-b border-slate-800 py-8">
          <h2 id="add-ons" className="text-2xl font-bold text-white">AI and capacity add-ons need their own line items</h2>
          <p className="mt-4 leading-relaxed text-slate-300">Freshdesk includes a one-time pool of 500 Freddy AI Agent sessions, then lists additional sessions at $49 per 100. Freddy AI Copilot is $29 per assigned agent/month billed annually and can be assigned to a subset of agents. Connector tasks and MCP actions are also metered separately.</p>
          <p className="mt-4 leading-relaxed text-slate-300">Zendesk lists Copilot and the Workforce Engagement Bundle at $50 per agent/month billed annually, Quality Assurance at $35, and Contact Center from $83, on top of the eligible base plan. AI-agent usage is measured in automated resolutions, with plan-based allowances and paid capacity beyond them. Storage, high-volume API access, WhatsApp numbers, telephony, and several enterprise controls can add usage charges or sales-quoted costs.</p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">Build a comparable quote</h2>
          <ol className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Count access.</strong> Separate full agents, admins, light or occasional agents, and external collaborators.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Count channels.</strong> List email, portal, chat, messaging, WhatsApp, voice, SMS, and social channels required at launch.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Meter usage.</strong> Estimate AI sessions or resolutions, voice minutes, API volume, storage, temporary-agent days, and connector actions.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">This comparison uses official pricing, plan, billing, role, and add-on documentation checked on 9 November 2026. It is desk research, not independent support-quality, usability, or uptime testing.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.zendesk.com/pricing/" target="_blank" rel="noopener noreferrer">Zendesk pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.zendesk.com/hc/en-us/articles/4408846875034-About-the-Zendesk-Suite-plan-types" target="_blank" rel="noopener noreferrer">Zendesk Help: Suite plan types</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.zendesk.com/hc/en-us/articles/11010510119962-What-counts-as-an-agent-license-in-Zendesk" target="_blank" rel="noopener noreferrer">Zendesk Help: billable agent licenses</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.zendesk.com/hc/en-us/articles/4408834152730-About-Zendesk-product-add-ons" target="_blank" rel="noopener noreferrer">Zendesk Help: product add-ons</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.freshworks.com/freshdesk/pricing/" target="_blank" rel="noopener noreferrer">Freshdesk pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.freshworks.com/freshdesk/omni/pricing/" target="_blank" rel="noopener noreferrer">Freshdesk Omni pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.freshdesk.com/support/solutions/articles/37602" target="_blank" rel="noopener noreferrer">Freshdesk Support: full-time and occasional agents</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.freshdesk.com/support/solutions/articles/50000011778" target="_blank" rel="noopener noreferrer">Freshdesk Support: subscription and seat changes</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
