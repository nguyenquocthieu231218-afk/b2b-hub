import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Linear vs Jira (2026): Plans, Limits and Team Fit',
  description: 'A dated desk-research comparison of Linear and Jira plans, free-tier limits, workflow features, and how to choose based on your team.',
  path: '/linear-vs-jira',
});

const comparisonRows = [
  {
    label: 'Free plan',
    linear: 'Unlimited members, 2 teams, 250 issues, and 10 MB file uploads.',
    jira: 'Up to 10 users, unlimited goals, projects, tasks, and forms; 2 GB storage and 150 automation steps per subscription each month.',
  },
  {
    label: 'First paid tier',
    linear: 'Basic is $10 per user/month billed yearly. It raises the team limit to 5 and removes the issue and file-upload caps.',
    jira: 'Standard adds user roles and permissions, external collaboration, and 400 automation steps per user each month. Atlassian prices the subscription with a calculator based on seats and billing cycle.',
  },
  {
    label: 'Higher-tier planning',
    linear: 'Business is $16 per user/month billed yearly; it adds unlimited teams, private teams and guests, Insights, Asks, and other listed features.',
    jira: 'Premium adds cross-team planning, dependency management, customizable approval processes, and 750 automation steps per user each month.',
  },
  {
    label: 'Planning workflow',
    linear: 'Cycles are repeating, time-boxed work periods that are not tied to releases. Teams can set a duration from 1 to 8 weeks.',
    jira: 'The official feature page lists backlog, list, board, timeline, and calendar views, plus customizable workflows and dependency planning.',
  },
] as const;

export default function LinearVsJiraPage() {
  return (
    <ComparisonLayout tool1="linear" tool2="jira" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Issue tracking · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Linear vs Jira: plans, limits, and team fit
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Both products can track team work, but their published plans set different limits and emphasize different planning features. This comparison focuses on what the vendors currently document so you can shortlist the tool against your own workflow.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Start with <strong className="text-white">Linear</strong> if its issue and team model fits and you want scheduled cycles with a clear free-plan issue cap. Consider <strong className="text-white">Jira</strong> if you need its documented range of work views, customizable workflows, forms, or cross-team planning. Those are product-fit signals, not a claim that one tool is faster or easier for every team.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Plans and documented limits</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            The free plans are not like-for-like: Linear publishes an unlimited-member allowance but caps teams and issues; Jira’s free plan caps users and publishes different storage and automation allowances.
          </p>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published Linear and Jira plan details checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Linear</th>
                  <th scope="col" className="p-4">Jira</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.linear}</td>
                    <td className="p-4 align-top leading-relaxed">{row.jira}</td>
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
                    <dt className="font-semibold text-blue-200">Linear</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.linear}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Jira</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.jira}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Linear’s listed paid prices are billed yearly. Atlassian asks buyers to use its pricing calculator with their seat count and billing cycle; confirm the current quote, currency, taxes, and plan terms before purchase. Published limits and prices can change.
          </p>
        </section>

        <section aria-labelledby="workflows" className="border-b border-slate-800 py-8">
          <h2 id="workflows" className="text-2xl font-bold text-white">How the planning models differ</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Linear: cycles</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Linear describes cycles as scheduled, time-boxed work periods, similar to agile-flavored sprints, and says they are not tied to releases. Teams configure a repeating duration from one to eight weeks and can create up to 15 future cycles.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Jira: multiple views and configurable workflows</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Atlassian lists backlog, list, board, timeline, calendar, and summary views. Its feature page also describes customizable workflows, forms, dependency management, and integrations through the Atlassian Marketplace. Check the plan matrix to confirm which capabilities your chosen plan includes.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">A practical way to decide</h2>
          <ul className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Shortlist Linear</strong> if the 250-issue free cap is workable, you want its cycle model, or its paid plan limits match the number of teams and controls you need.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Shortlist Jira</strong> if you need its documented range of views, configurable workflows, or Premium cross-team planning and dependency management.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Before migrating</strong>, trial both with the same representative project. Compare issue intake, permissions, reports, integrations, migration effort, and the actual quote for your seat count.</li>
          </ul>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This is a comparison of vendor-published plan details and documentation, checked on 29 October 2026. It is desk research, not independent usability testing. Plan features, limits, regional availability, and prices may change; verify them with the vendors before making a purchase decision.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://linear.app/pricing" target="_blank" rel="noopener noreferrer">Linear pricing and plan comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://linear.app/docs/use-cycles" target="_blank" rel="noopener noreferrer">Linear documentation: cycles</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.atlassian.com/en/software/jira/pricing" target="_blank" rel="noopener noreferrer">Atlassian Jira pricing and plan comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.atlassian.com/software/jira/features" target="_blank" rel="noopener noreferrer">Atlassian Jira feature overview</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
