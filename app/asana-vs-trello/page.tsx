import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Asana vs Trello (2026): Plans, Pricing and Limits',
  description: 'A dated desk-research comparison of Asana and Trello free plans, annual pricing, project views, and automation allowances.',
  path: '/asana-vs-trello',
});

const comparisonRows = [
  {
    label: 'Free plan',
    asana: 'Two users can collaborate on unlimited tasks and projects. Includes list, board, and calendar views, with 100 MB per-file storage.',
    trello: 'Up to 10 collaborators per Workspace, unlimited cards, up to 10 boards, and 250 Workspace command runs per month.',
  },
  {
    label: 'First paid tier',
    asana: 'Starter is $10.99 per user/month billed annually. It adds no user-seat limit, Timeline and Gantt views, dashboards, unlimited automations, forms, and custom fields.',
    trello: 'Standard is $5 per user/month billed annually ($6 monthly). It adds unlimited boards, custom fields, advanced checklists, and 1,000 Workspace command runs per month.',
  },
  {
    label: 'Broader planning',
    asana: 'Advanced is $24.99 per user/month billed annually. It adds portfolios, goals, resource management, approvals, proofing, and branching forms.',
    trello: 'Premium is $10 per user/month billed annually ($12.50 monthly). It adds Calendar, Timeline, Table, Dashboard, and Map views, plus unlimited Workspace command runs.',
  },
  {
    label: 'File storage',
    asana: 'Unlimited storage, with a 100 MB per-file limit on Personal.',
    trello: 'Unlimited storage with a 10 MB per-file limit on Free; the Standard plan raises the file limit to 250 MB.',
  },
] as const;

export default function AsanaVsTrelloPage() {
  return (
    <ComparisonLayout tool1="asana" tool2="trello" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Project management · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Asana vs Trello: plans, pricing, and team fit
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Both can organize team work, but their free-plan limits and paid features differ. Compare the number of collaborators, views, file sizes, automation usage, and planning features your team needs.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Shortlist <strong className="text-white">Asana</strong> if you need the project-level Timeline/Gantt views, dashboards, goals, or portfolio and resource features listed on its higher plans. Shortlist <strong className="text-white">Trello</strong> if your team can organize work as cards on boards and wants to compare its free collaborator allowance or lower listed Standard price. Verify the view and automation limits against the plan you would actually buy.
          </p>
        </section>

        <section aria-labelledby="plan-details" className="border-b border-slate-800 py-8">
          <h2 id="plan-details" className="text-2xl font-bold text-white">Plans and documented limits</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published Asana and Trello plan details checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Asana</th>
                  <th scope="col" className="p-4">Trello</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.asana}</td>
                    <td className="p-4 align-top leading-relaxed">{row.trello}</td>
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
                    <dt className="font-semibold text-blue-200">Asana</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.asana}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Trello</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.trello}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Prices above are USD per user/month with annual billing, where stated. Trello also publishes monthly prices for Standard and Premium. Confirm seat count, billing frequency, taxes, and the current checkout total before subscribing.
          </p>
        </section>

        <section aria-labelledby="automation" className="border-b border-slate-800 py-8">
          <h2 id="automation" className="text-2xl font-bold text-white">Automation limits use different labels</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Asana describes Starter automations as unlimited. Trello publishes monthly Workspace command-run limits for Free and Standard, then lists unlimited runs for Premium. The labels and counting rules differ, so do not assume the caps are directly equivalent. Test your recurring workflows and check each product’s usage counter before choosing a plan.
          </p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">A practical way to decide</h2>
          <ul className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Shortlist Asana</strong> if you need its documented multi-project planning, timeline views, goals, portfolios, or resource management.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Shortlist Trello</strong> if cards, boards, and its included Power-Ups cover your process and the collaborator, board, and command-run limits fit your team.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Before migrating</strong>, model one active project in both products. Compare permissions, recurring work, attachments, reports, integrations, automation counts, and total price for your team size.</li>
          </ul>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This comparison summarizes the vendors’ plan and pricing pages checked on 29 October 2026. It is desk research, not independent usability or performance testing. Plan names, included features, seat allowances, and prices can change.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://asana.com/pricing" target="_blank" rel="noopener noreferrer">Asana plans and pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://trello.com/pricing" target="_blank" rel="noopener noreferrer">Trello plans and pricing</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
