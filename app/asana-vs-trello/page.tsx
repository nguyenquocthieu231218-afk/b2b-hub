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
    asana: 'Starter is $10.99 per user/month billed annually. It removes the two-user cap and adds Timeline and Gantt views, dashboards, unlimited automations, forms, and custom fields; paid seats still determine the bill.',
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
            Both can organize team work, but their headline per-user prices hide different billing traps. Compare internal members, external guests, paid Workspaces, automation operations, views, and file sizes—not only the number printed on the pricing card.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-11-09">9 November 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
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
              <caption className="sr-only">Published Asana and Trello plan details checked on 9 November 2026</caption>
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

        <section aria-labelledby="access-billing" className="border-b border-slate-800 py-8">
          <h2 id="access-billing" className="text-2xl font-bold text-white">Guest access can change the real seat count</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Asana: the space and email domain matter</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Paid plans start at two seats, then use set seat increments as the team grows. In an organization, external guests who do not share the company email domain are free; members in the paid space count. A Workspace behaves differently: everyone collaborating there counts toward its paid plan, including guests.
              </p>
            </article>
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Trello: a second board can make a guest billable</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                A guest on one board in a paid Workspace is free. Put that person on two or more boards and Trello treats them as a multi-board guest billed at the member rate. Each paid Workspace is billed separately, so the same person can create charges in multiple Workspaces.
              </p>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">
            Build the quote from an access map: internal members, contractors, the boards or projects each person needs, and the Asana space or Trello Workspace holding that work. A simple headcount is not enough.
          </p>
        </section>

        <section aria-labelledby="automation" className="border-b border-slate-800 py-8">
          <h2 id="automation" className="text-2xl font-bold text-white">Automation limits use different labels</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Asana describes Starter automation actions as unlimited. Trello uses two counters shared across the Workspace: an automation run when a rule or button triggers, plus one or more operations for its actions. Free includes 250 runs and 2,500 operations per month; Standard includes 1,000 runs and 20,000 operations.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Trello Premium lists unlimited runs, but not unlimited operations: its published pool starts at 150,000 operations plus 10,000 per paid user, capped at 250,000 per Workspace. Trello also limits a single run to 20 actions or operations. Model the actions inside each rule rather than comparing the word “unlimited.”
          </p>
        </section>

        <section aria-labelledby="free-plan-risk" className="border-b border-slate-800 py-8">
          <h2 id="free-plan-risk" className="text-2xl font-bold text-white">Trello’s free collaborator cap is Workspace-wide</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Trello counts Workspace members, board guests, and pending invitations toward the Free plan’s ten-collaborator limit. If the Workspace goes above the cap, its boards become view-only and its automations stop running until the collaborator count is reduced or the Workspace upgrades. A board with fewer than ten people can still be affected when other boards push the Workspace total over the limit.
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
            This comparison summarizes official plan, billing, guest, and automation documentation checked on 9 November 2026. It is desk research, not independent usability or performance testing. Plan names, included features, seat allowances, and prices can change.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://asana.com/pricing" target="_blank" rel="noopener noreferrer">Asana plans and pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.asana.com/s/article/asana-subscriptions-and-pricing?language=en_US" target="_blank" rel="noopener noreferrer">Asana Help: seats, spaces, and guest billing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.asana.com/s/article/guests-faq" target="_blank" rel="noopener noreferrer">Asana Help: organization guest access</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://trello.com/pricing" target="_blank" rel="noopener noreferrer">Trello plans and pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.atlassian.com/trello/docs/how-billing-works-with-trello-premium-and-standard" target="_blank" rel="noopener noreferrer">Trello Help: member and multi-board guest billing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.atlassian.com/trello/docs/butler-quotas-and-limits/" target="_blank" rel="noopener noreferrer">Trello Help: automation runs and operation quotas</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.atlassian.com/trello/docs/workspace-user-limit/" target="_blank" rel="noopener noreferrer">Trello Help: Free Workspace collaborator limit</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
