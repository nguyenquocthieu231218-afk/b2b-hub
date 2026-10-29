import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Slack vs Microsoft Teams (2026): Pro and Essentials Compared',
  description: 'A dated comparison of Slack Pro and Microsoft Teams Essentials pricing, message history, integrations, meetings, and collaboration features from official sources.',
  path: '/slack-vs-teams',
});

const comparisonRows = [
  {
    label: 'Plans compared',
    slack: 'Slack Pro, a paid team communication plan.',
    teams: 'Microsoft Teams Essentials, a standalone small-business meeting and collaboration plan.',
  },
  {
    label: 'Published price',
    slack: 'US$8.75 per user/month when billed monthly, or US$7.25 per user/month when billed annually.',
    teams: 'US$4 per user/month, paid yearly; Microsoft lists an annual subscription that auto-renews.',
  },
  {
    label: 'Message history',
    slack: 'Pro includes unlimited message history; Slack Free is limited to 90 days of searchable message history.',
    teams: 'Microsoft lists unlimited chat, including guest access, on the Essentials plan.',
  },
  {
    label: 'App and partner collaboration',
    slack: 'Pro lists unlimited app integrations from Slack’s directory and group external messages through Slack Connect.',
    teams: 'Essentials lists real-time file sharing, tasks and polling, plus Outlook or Google calendar connection.',
  },
  {
    label: 'Meetings',
    slack: 'Pro includes group audio and video meetings with screen sharing through Slack huddles.',
    teams: 'Essentials supports meetings up to 30 hours and 300 participants, with recordings and transcripts listed by Microsoft.',
  },
  {
    label: 'Cloud storage',
    slack: 'The Slack Pro pricing page emphasizes searchable message and file history; check its current plan details for storage terms.',
    teams: 'Microsoft lists 10 GB of cloud storage per user for Essentials.',
  },
] as const;

export default function SlackVsTeamsPage() {
  return (
    <ComparisonLayout tool1="slack" tool2="teams" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Team communication · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Slack vs Microsoft Teams: Pro and Essentials compared
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Slack Pro and Microsoft Teams Essentials are different paid plans, so their prices and features are not a like-for-like score. This comparison focuses on their published communication, meeting, and collaboration terms to help a team decide what to trial.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Teams Essentials has the lower published annual per-user price and a clearly stated meeting allowance of up to 300 participants for up to 30 hours. Slack Pro costs more but publishes unlimited message history and app integrations, group huddles, and external collaboration through Slack Connect. Those differences may matter more than a single headline price.
          </p>
          <p className="mt-3 leading-relaxed text-slate-300">
            Microsoft 365 bundles are a separate buying decision. This page compares Slack Pro with Teams Essentials, not Microsoft 365 Business plans or every Teams license.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published plan details</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published Slack Pro and Microsoft Teams Essentials details checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Slack Pro</th>
                  <th scope="col" className="p-4">Teams Essentials</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.slack}</td>
                    <td className="p-4 align-top leading-relaxed">{row.teams}</td>
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
                    <dt className="font-semibold text-blue-200">Slack Pro</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.slack}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Teams Essentials</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.teams}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Prices are vendor-listed US-dollar amounts checked on 29 October 2026. Slack’s displayed Pro price may include a limited-time promotion; the comparison uses its listed standard monthly and annual rates. Teams Essentials is listed with annual billing and auto-renewal. Confirm the current checkout price, currency, tax, and subscription terms for your organization.
          </p>
        </section>

        <section aria-labelledby="workflow-fit" className="border-b border-slate-800 py-8">
          <h2 id="workflow-fit" className="text-2xl font-bold text-white">Which workflow should you trial?</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Slack Pro</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Trial it if your team needs searchable long-term conversation history, a broad app directory, or channels and group conversations with external partners. Check Slack Connect setup and the plan’s current data-retention terms before moving important records.
              </p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Teams Essentials</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Trial it if your work centers on scheduled meetings, guest chat, file sharing, and the published 300-participant meeting capacity. If your decision also depends on Microsoft 365 apps, business email, or broader administration, compare the relevant Microsoft 365 plan separately.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">How to evaluate them with your team</h2>
          <ol className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Map your communication.</strong> List daily channels, recurring meetings, external partners, and the apps that must connect.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Pilot the same project in both.</strong> Ask a representative team to test message retrieval, meeting hand-offs, guest collaboration, mobile use, and admin tasks.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Compare total cost and operating fit.</strong> Include annual commitment, seats, existing Microsoft licenses, migration effort, data retention, and the actual regional quote.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This comparison summarizes vendor-published plans and features checked on 29 October 2026. It is desk research, not independent usability testing. Features, prices, promotions, and plan terms may change; verify details with the vendors before purchasing.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://slack.com/intl/en-us/pricing" target="_blank" rel="noopener noreferrer">Slack Pro pricing and feature comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.microsoft.com/en-us/microsoft-teams/essentials" target="_blank" rel="noopener noreferrer">Microsoft Teams Essentials features and pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-business-options" target="_blank" rel="noopener noreferrer">Microsoft Teams business plan comparison</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
