import ComparisonLayout from '@/app/components/ComparisonLayout';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Jira vs monday.com for Dev (2026): Users and Automation Limits',
  description: 'Compare Jira Cloud and monday dev free access, paid seat minimums, automation quotas, counting units, and the announced Jira step-model change.',
  path: '/jira-vs-monday',
});

const comparisonRows = [
  {
    label: 'Free access',
    jira: 'Jira Cloud Free supports up to 10 users with no time limit. It includes 2 GB of storage and Community Support.',
    monday: 'monday dev has a 14-day trial, not a permanent Free plan. Its paid plans start at 3 seats; read-only viewers do not count as paid seats.',
  },
  {
    label: 'Current entry automation allowance',
    jira: 'The public Jira pricing page lists 100 successful rule runs/month on Free and 1,700/month on Standard as of 9 November 2026.',
    monday: 'monday dev Standard includes 250 automation actions and a separate 250 integration actions/month. Basic does not list an action allowance.',
  },
  {
    label: 'Higher automation allowance',
    jira: 'Premium lists 1,000 successful rule runs per paid user/month; Enterprise lists unlimited rule runs under the current pricing model.',
    monday: 'Pro includes 25,000 automation actions plus 25,000 integration actions/month. Enterprise documentation lists 250,000 of each.',
  },
  {
    label: 'What consumes quota',
    jira: 'Under the live run model, one successful rule run counts once even when the rule performs several actions. Runs that perform no action do not count.',
    monday: 'Actions are counted individually. Notifying three people can consume three actions, and multi-block workflows may consume several actions per trigger.',
  },
] as const;

export default function JiraVsMondayPage() {
  return (
    <ComparisonLayout tool1="jira" tool2="monday" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Issue tracking · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Jira vs monday.com for dev teams: compare the unit, not just the limit
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Jira and monday dev can both run a sprint board, but their entry economics and automation meters are not equivalent. Jira offers a permanent 10-user Free plan and currently counts successful rule runs. monday dev starts with a trial, requires at least three paid seats, and counts the individual actions a workflow performs.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-11-09">9 November 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Atlassian merged Jira Software Cloud and Jira Work Management into the current Jira Cloud product in 2024. This comparison uses today&apos;s Jira Cloud pricing and limits for software-development workflows; it does not compare the self-managed Jira Software Data Center product.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Jira is the lower-risk starting point for a development team of ten or fewer that needs a real free workspace, backlog, Scrum or Kanban boards, and light automation. monday dev is the more visual paid option, with sprint management, roadmap features, GitHub integration, and separate automation and integration pools from Standard upward. A raw “250 versus 100” comparison is misleading because monday counts actions while Jira still counts successful rule executions.
          </p>
        </section>

        <section aria-labelledby="limits" className="border-b border-slate-800 py-8">
          <h2 id="limits" className="text-2xl font-bold text-white">Users and monthly automation limits</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="sr-only">Jira Cloud and monday dev limits checked on 9 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr><th scope="col" className="p-4">Criteria</th><th scope="col" className="p-4">Jira Cloud</th><th scope="col" className="p-4">monday dev</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.jira}</td>
                    <td className="p-4 align-top leading-relaxed">{row.monday}</td>
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
                  <div><dt className="font-semibold text-blue-200">Jira Cloud</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.jira}</dd></div>
                  <div><dt className="font-semibold text-blue-200">monday dev</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.monday}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="free-plan" className="border-b border-slate-800 py-8">
          <h2 id="free-plan" className="text-2xl font-bold text-white">Jira has a free product; monday dev has a trial</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Jira Free remains free for up to 10 users. Atlassian says exceeding that limit automatically starts a seven-day Standard trial, so access above ten users is not a larger free tier. Free also omits paid-plan controls such as configurable user roles, audit logs, data residency, and an uptime SLA.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            monday dev is not included in monday.com&apos;s permanent Free plan. The dev product offers a 14-day trial and then starts at three paid seats. Annual list prices checked for three seats are $9 per seat/month for Basic, $12 for Standard, and $20 for Pro, before tax and regional pricing. Unlimited viewers are read-only and should not be confused with full member seats.
          </p>
        </section>

        <section aria-labelledby="counting" className="border-b border-slate-800 py-8">
          <h2 id="counting" className="text-2xl font-bold text-white">One Jira run can equal several monday actions</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Under Jira&apos;s live allowance, a successful rule that performs at least one action consumes one run. Adding more actions to that same execution does not add more runs. Once the monthly product pool is exhausted, all rules for that product stop until the next calendar month; unused runs do not roll over.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            monday&apos;s meter follows the work performed. A notification uses one action per recipient, an email uses one action per message, and recurring work consumes an action each time it executes. monday documents separate automation and integration pools, and says Pro overuse can be deducted from the following month&apos;s allocation. Model a representative sprint workflow block by block before choosing a plan.
          </p>
        </section>

        <section aria-labelledby="jira-change" className="border-b border-slate-800 py-8">
          <h2 id="jira-change" className="text-2xl font-bold text-white">Jira&apos;s meter changes on 3 December 2026</h2>
          <aside className="mt-5 rounded-lg border border-amber-400/30 bg-amber-400/5 p-5 text-amber-100">
            <p className="font-semibold">Do not use the current rule-run table for a 2027 capacity forecast.</p>
            <p className="mt-2 leading-relaxed text-amber-50/90">Atlassian&apos;s automation documentation says usage-based billing starts 3 December 2026. The announced Jira Cloud allowances are 150 steps/month per Free subscription, 400 steps per Standard user, 750 per Premium user, and 1,000 per Enterprise user. A step is an executed trigger, condition, action, branch, or loop, so a multi-step rule will consume more than one unit.</p>
          </aside>
          <p className="mt-4 leading-relaxed text-slate-300">
            This article records both states because the source-check date precedes the announced switchover. Jira&apos;s pricing page still presents the live run-based quotas on 9 November; Atlassian&apos;s support documentation describes the future step-based model. Recheck the admin usage screen and contract after the effective date.
          </p>
        </section>

        <section aria-labelledby="product-fit" className="border-b border-slate-800 py-8">
          <h2 id="product-fit" className="text-2xl font-bold text-white">Jira Cloud and monday dev solve different admin problems</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Choose Jira when issue semantics come first</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Jira centers backlog, work-item types, workflows, Scrum and Kanban boards, releases, permissions, and the wider Atlassian ecosystem. It fits teams that need engineering-specific issue control and are willing to administer it.</p>
            </article>
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Choose monday dev when cross-team visibility comes first</h3>
              <p className="mt-3 leading-relaxed text-slate-300">monday dev layers sprint, roadmap, hierarchy, GitHub sync, and agile reporting onto monday boards. It can be easier to expose product work to non-engineering stakeholders, but the paid-seat floor and per-action meter belong in the pilot budget.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Official pricing, licensing, plan, and automation documentation checked on 9 November 2026. Product quality, workflow speed, and integration reliability were not hands-on tested.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.atlassian.com/software/jira/pricing" target="_blank" rel="noopener noreferrer">Atlassian: Jira pricing and plan limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.atlassian.com/licensing/cloud" target="_blank" rel="noopener noreferrer">Atlassian: Cloud licensing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.atlassian.com/licensing/jira" target="_blank" rel="noopener noreferrer">Atlassian: Jira Cloud naming and licensing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.atlassian.com/automation/kb/difference-between-automation-service-limits-and-automation-usage-limits" target="_blank" rel="noopener noreferrer">Atlassian Support: automation usage limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.atlassian.com/cloud-automation/docs/how-is-my-usage-calculated/" target="_blank" rel="noopener noreferrer">Atlassian Support: automation step usage and effective date</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://monday.com/dev/pricing" target="_blank" rel="noopener noreferrer">monday.com: monday dev pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.monday.com/hc/en-us/articles/26061127699730-Available-plan-types-on-monday-dev" target="_blank" rel="noopener noreferrer">monday Support: available monday dev plans</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.monday.com/hc/en-us/articles/360002826680-Automations-and-integrations-pricing" target="_blank" rel="noopener noreferrer">monday Support: automation and integration quotas</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.monday.com/hc/en-us/articles/360010487220-Understanding-the-Free-Plan" target="_blank" rel="noopener noreferrer">monday Support: Free plan product availability</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
