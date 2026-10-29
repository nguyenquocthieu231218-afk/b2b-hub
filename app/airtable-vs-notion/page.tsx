import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Airtable vs Notion (2026): Data Limits and Team Billing',
  description: 'Compare Airtable and Notion free workspace limits, collaboration permissions, and paid seat billing using dated official vendor sources.',
  path: '/airtable-vs-notion',
});

const comparisonRows = [
  {
    label: 'Free content limits',
    airtable: 'Up to 1,000 records per base, 1 GB attachment storage per base, and 1,000 API calls per workspace per month.',
    notion: 'A solo Free workspace has unlimited blocks. A multi-person Free workspace is limited to 1,000 blocks before it must upgrade or reduce membership.',
  },
  {
    label: 'Free collaboration',
    airtable: 'Up to 5 collaborators with Editor or Creator permissions, 50 Commenters, and unlimited Read-only collaborators.',
    notion: 'Free collaboration is available, but block limits apply in a multi-person workspace. Guests can be invited to specific pages, subject to plan limits.',
  },
  {
    label: 'What changes on paid plans',
    airtable: 'The Team plan raises capacity to 50,000 records per base and 20 GB of attachments per base; API and automation allowances also increase.',
    notion: 'Paid plans include unlimited blocks for workspaces with members. Plus and higher plans add team features; compare the specific permissions and integrations your team needs.',
  },
  {
    label: 'How team billing works',
    airtable: 'Plans attach to a workspace. On the Team plan, Owners, Creators, Editors, and Commenters are billable; Read-only collaborators are not charged.',
    notion: 'Paid plans bill per member, per workspace. Guests invited to specific pages are free within the plan’s guest limit; each paid workspace is billed separately.',
  },
] as const;

export default function AirtableVsNotionPage() {
  return (
    <ComparisonLayout tool1="airtable" tool2="notion" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Work management · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Airtable vs Notion: compare capacity and team costs
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            These tools measure free capacity in different units: Airtable sets record, storage, and API limits per base or workspace; Notion counts content blocks in a shared Free workspace. Their paid collaboration bills also differ. Count the editors or members you actually need and price the workspace structure you plan to use.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Airtable’s published limits are easier to map when your work depends on a defined number of records, attachments, or API calls. Notion’s Free plan can stay unlimited for one person, while a multi-person Free workspace has a block cap. For paid teams, compare billable Airtable collaborators with Notion members in each workspace; a displayed starting price alone will not tell you your team’s total.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published limits and billing</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Airtable and Notion workspace limits checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Airtable</th>
                  <th scope="col" className="p-4">Notion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.airtable}</td>
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
                    <dt className="font-semibold text-blue-200">Airtable</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.airtable}</dd>
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
            Record counts and content blocks are not interchangeable measures. Paid pricing and plan availability can vary by location, billing interval, workspace configuration, and seat permissions. Compare the final totals in the vendors’ own billing flows before migrating.
          </p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">Which setup should you evaluate?</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Airtable if…</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                You can describe the workload in records per base, attachment storage, API use, and editor permissions. Estimate those totals first, then check whether the Free or Team plan covers the peak month and all collaborators who need edit access.
              </p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Notion if…</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Your team’s content and collaboration model fits its page-and-block workspace, and you can budget for the member count in each paid workspace. If you rely on Free with multiple people, estimate how soon the shared block limit could affect new content.
              </p>
            </article>
          </div>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Model one representative workflow.</strong> Recreate the same intake form, data structure, owner handoff, and report in each product.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Calculate team access.</strong> Separate editors, commenters, read-only users, paid members, and page guests before comparing workspace bills.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Check limits at expected scale.</strong> Project record or block growth, attachments, API calls, and integrations for the next year, then confirm behavior when you hit a cap.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This comparison summarizes official plan and help documentation checked on 29 October 2026. It is desk research, not independent usability or performance testing. Limits and localized prices can change; confirm your current workspace’s terms before purchase.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://airtable.com/pricing" target="_blank" rel="noopener noreferrer">Airtable pricing and seat billing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.airtable.com/articles/2277136852-airtable-plans-overview" target="_blank" rel="noopener noreferrer">Airtable Help: plan limits and capacity</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.airtable.com/articles/1636857517-How-Airtable-collaborators-impact-billing" target="_blank" rel="noopener noreferrer">Airtable Help: collaborator permissions and billing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.notion.com/pricing" target="_blank" rel="noopener noreferrer">Notion pricing and plan comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.notion.com/help/understanding-block-usage" target="_blank" rel="noopener noreferrer">Notion Help: free workspace block limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.notion.com/help/billing" target="_blank" rel="noopener noreferrer">Notion Help: per-member, per-workspace billing</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
