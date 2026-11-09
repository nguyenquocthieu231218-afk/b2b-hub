import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'ClickUp vs Notion (2026): Free Limits and Team Billing',
  description: 'Compare ClickUp and Notion free workspace limits, automation allowances, and member billing using dated official documentation.',
  path: '/clickup-vs-notion',
});

const comparisonRows = [
  {
    label: 'Free capacity',
    clickup: 'Unlimited tasks and members, with 60 MB of attachment storage per Workspace.',
    notion: 'Unlimited blocks when the Free workspace has one owner. A Free workspace with two or more owners is limited to 1,000 blocks, followed by a three-day grace period.',
  },
  {
    label: 'Free automation',
    clickup: 'Up to 5 active Automations and 100 Actions per month. Automations pause for the rest of the month after the limit is reached.',
    notion: 'Automation features differ by plan. The pricing matrix distinguishes basic button actions from custom database automations; confirm the needed feature in the live plan comparison.',
  },
  {
    label: 'Paid capacity',
    clickup: 'Core is listed at $9 per user per month when billed yearly and includes unlimited storage. Higher tiers expand automation allowances and controls.',
    notion: 'Plus is listed at $10 per member per month and Business at $20 per member per month when billed yearly; both include unlimited file uploads with a 5 GB per-file limit.',
  },
  {
    label: 'Team billing',
    clickup: 'Pricing depends on plan and user role. Free Forever allows unlimited members and guests; paid plans have plan-specific paid user and external guest rules.',
    notion: 'Paid plans bill per member in each workspace. Guests can be invited to specific pages at no charge within the workspace’s guest limit.',
  },
] as const;

export default function ClickUpVsNotionPage() {
  return (
    <ComparisonLayout tool1="clickup" tool2="notion" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Work management · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            ClickUp vs Notion: compare free limits and team costs
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            The free plans constrain different things. ClickUp lists storage and monthly automation limits, while Notion limits blocks when a Free workspace has multiple owners. Paid bills depend on team membership and role rules. Start by estimating attachments, automations, content growth, and the people who need access.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-11-09">9 November 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            If you are evaluating a shared free workspace, estimate whether ClickUp’s attachment and automation quotas or Notion’s block limit is more likely to constrain your work. For paid plans, compare the same team size and access pattern: ClickUp prices by plan and role, while Notion charges paid members per workspace. Their limits use different units, so there is no meaningful single “capacity” winner.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published plan differences</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">ClickUp and Notion plan limits checked on 9 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">ClickUp</th>
                  <th scope="col" className="p-4">Notion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.clickup}</td>
                    <td className="p-4 align-top leading-relaxed">{row.notion}</td>
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
                    <dt className="font-semibold text-blue-200">ClickUp</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.clickup}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Notion</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.notion}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            These products count storage, automation, and content in different ways. Current prices vary by region, billing interval, plan, and user type. Confirm the billable seats, guest rules, and selected features in each vendor’s live pricing flow before committing.
          </p>
        </section>

        <section aria-labelledby="access-billing" className="border-b border-slate-800 py-8">
          <h2 id="access-billing" className="text-2xl font-bold text-white">Access permissions can quietly create paid seats</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">ClickUp: permission level matters</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                View-only guests are free. A permission-controlled guest can use a paid guest allowance or cost the same as a member after that allowance is exhausted. People invited with the organization’s email domain or SSO cannot remain guests; ClickUp adds them as paid limited members.
              </p>
            </article>
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Notion: member and guest are different billing states</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Members are billed for workspace-wide access, while guests are free and page-scoped within the plan limit. An invite using an allowed organization domain can create a member instead of a guest. New members are prorated; removing a member reduces the bill at the next billing cycle rather than immediately.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="evaluation" className="border-b border-slate-800 py-8">
          <h2 id="evaluation" className="text-2xl font-bold text-white">Evaluate the same work in both tools</h2>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Recreate a real project.</strong> Add the same tasks, docs, owners, status changes, and reporting needs to each trial or workspace.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Measure workload growth.</strong> Estimate monthly file storage and, for ClickUp, automation executions. For a shared Notion Free workspace, estimate how quickly new content could reach the block cap.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Count access by role.</strong> List internal members, external collaborators, read-only users, and page guests, then calculate the paid setup in each product.</li>
          </ol>
          <p className="mt-5 leading-relaxed text-slate-300">
            These published plan limits do not establish which product is easier to use or better for task execution. Test your own workflow and record any manual work, missing reports, and access constraints before choosing.
          </p>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This comparison summarizes official plan and help documentation checked on 9 November 2026. It is desk research, not independent usability or performance testing. Product limits and localized prices can change; confirm current terms before purchasing.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://clickup.com/pricing" target="_blank" rel="noopener noreferrer">ClickUp pricing and plan comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.clickup.com/hc/en-us/articles/23477062949911-Automations-feature-availability-and-limits" target="_blank" rel="noopener noreferrer">ClickUp Help: automation availability and limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.clickup.com/hc/en-us/articles/6310022323991-Guest-type-user-roles" target="_blank" rel="noopener noreferrer">ClickUp Help: guest roles and billing rules</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.clickup.com/hc/en-us/articles/6303244318999-Pricing-per-user-role-and-plan" target="_blank" rel="noopener noreferrer">ClickUp Help: pricing by user role and plan</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.notion.com/pricing" target="_blank" rel="noopener noreferrer">Notion pricing and plan comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.notion.com/help/understanding-block-usage" target="_blank" rel="noopener noreferrer">Notion Help: Free workspace block limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.notion.com/help/billing" target="_blank" rel="noopener noreferrer">Notion Help: per-member, per-workspace billing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.notion.com/help/members-and-billing" target="_blank" rel="noopener noreferrer">Notion Help: members, guests, prorating, and seat changes</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
