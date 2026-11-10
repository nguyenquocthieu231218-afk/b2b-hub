import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Notion vs Coda: Database Rows, Doc Limits and Pricing',
  description: 'Compare Notion and Coda, now Superhuman Docs, on database and row limits, member versus Maker billing, automations, sync tables, and team access.',
  path: '/notion-vs-coda',
});

const comparisonRows = [
  {
    label: 'Free workspace limits',
    notion: 'Free is aimed at personal use. A shared Free workspace with multiple members has a block limit; Free file uploads are limited to 5 MB per file.',
    coda: 'Personal, unshared docs have no page or object limit. Shared Free docs are limited to 50 objects and 1,000 table rows per doc.',
  },
  {
    label: 'Paid billing model',
    notion: 'Plus is listed at $10 per member/month and Business at $20 per member/month. Billing can be monthly or yearly; check the selected currency and billing cycle.',
    coda: 'Legacy Coda plans bill Doc Makers; editors and viewers are free in paid workspaces. The public pricing path now leads to Superhuman suite plans, so it is not a standalone Docs quote.',
  },
  {
    label: 'Attachments and history',
    notion: 'The plan table lists a 5 GB per-file upload limit on paid plans; page history is 30 days on Plus and 90 days on Business.',
    coda: 'Free docs allow 10 MB per attachment and 7-day history. Pro allows 250 MB per file and 30-day history; Team and Enterprise list unlimited history.',
  },
  {
    label: 'Automations',
    notion: 'The plan table lists basic button automations on Free and custom database automations on Plus and higher plans.',
    coda: 'Per doc/month: Free lists 35 time-based and 100 event-based automations; Pro lists 100 and 500; Team and Enterprise list unlimited automations.',
  },
  {
    label: 'Rows and synced data',
    notion: 'The pricing table does not publish one universal row cap for ordinary Notion databases. Integration and API limits are separate, so test the largest representative database and views.',
    coda: 'Shared Free docs allow 1,000 table rows. Pack and Cross-doc sync tables are capped at 100 rows on Free and 10,000 rows per sync table on paid plans.',
  },
] as const;

export default function NotionVsCodaPage() {
  return (
    <ComparisonLayout tool1="notion" tool2="coda" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Workspaces · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Notion vs Coda: plans, limits, and team fit
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            The product formerly called Coda is now Superhuman Docs. Notion prices workspace members; Docs prices the people who can create docs and pages. Their free limits also use different units, so “unlimited pages” and “unlimited databases” are not enough to forecast a real team workspace.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-11-10">10 November 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Compare <strong className="text-white">Notion</strong> if per-member plans and team knowledge bases match your needs. Compare <strong className="text-white">Coda / Superhuman Docs</strong> if its Doc Maker billing model, tables, formulas, and automations better match how your team builds shared documents. Because Coda has been renamed and its current public pricing path is bundled with other Superhuman products, check the actual Docs offer before comparing subscription totals.
          </p>
        </section>

        <section aria-labelledby="product-name" className="border-b border-slate-800 py-8">
          <h2 id="product-name" className="text-2xl font-bold text-white">What happened to Coda?</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Coda became Superhuman Docs on 8 July 2026. The vendor says existing documents, workflows, tables, Packs, automations, formulas, and plans remain in place; the product name, URL, and interface changed. Existing subscribers can keep their current plans. New customers get Docs through the Superhuman suite, and joining that bundle is optional for existing subscribers. The vendor maps Coda Pro to Superhuman Pro and Coda Team to Superhuman Business when customers switch.
          </p>
        </section>

        <section aria-labelledby="plan-details" className="border-b border-slate-800 py-8">
          <h2 id="plan-details" className="text-2xl font-bold text-white">Plans and documented limits</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published Notion and Coda (Superhuman Docs) plan and row limits checked on 10 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Notion</th>
                  <th scope="col" className="p-4">Coda / Superhuman Docs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.notion}</td>
                    <td className="p-4 align-top leading-relaxed">{row.coda}</td>
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
                    <dt className="font-semibold text-blue-200">Notion</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.notion}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Coda / Superhuman Docs</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.coda}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Notion’s page lists per-member prices and a monthly/yearly selector. Coda’s published Maker-billing help describes its legacy Free, Pro, Team, and Enterprise plans; the current public pricing route presents Superhuman suite plans. Those suite prices include other products and should not be presented as a standalone Coda/Docs rate.
          </p>
        </section>

        <section aria-labelledby="billing" className="border-b border-slate-800 py-8">
          <h2 id="billing" className="text-2xl font-bold text-white">Seat billing is different</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Notion: per member</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Notion says paid plans charge per workspace member. Add the number of people who need member access to the estimate, then account for monthly or annual billing and any seat changes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Coda: Doc Makers</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Coda’s legacy Maker model charges for Doc Makers who create docs and pages. Editors and viewers are free on paid workspaces. This can change the total for teams where only a few people build docs, but confirm that the current Superhuman Docs offer preserves the billing terms for your account.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="data-scale" className="border-b border-slate-800 py-8">
          <h2 id="data-scale" className="text-2xl font-bold text-white">Coda publishes row limits; Notion needs a workload test</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Notion database planning</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Notion’s public plan table describes page and block access, uploads, history, guests, automations, and integrations, but it does not provide one ordinary-database row ceiling to use as a universal procurement number. Build the largest real database, then test views, relations, rollups, search, export, and the integration path you depend on.</p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Superhuman Docs data boundaries</h3>
              <p className="mt-3 leading-relaxed text-slate-300">A shared Free doc has a hard 1,000-row and 50-object boundary. Paid docs remove page and object caps, but Pack and Cross-doc sync tables still have a published 10,000-row maximum. The new Superhuman Databases product targets larger scale and is still described as early access.</p>
            </article>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">Do not confuse local table rows, sync-table rows, objects, blocks, and an external database record. They are different capacity units.</p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">A practical way to decide</h2>
          <ul className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Shortlist Notion</strong> if its member-based plans, databases, forms, and connected workspace features fit your collaboration model.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Shortlist Coda / Superhuman Docs</strong> if you want to test its maker/editor roles, formulas, table-driven docs, and per-doc automation features.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Before migrating</strong>, model one real team workspace in both products. Check permissions, doc/table limits, automations, integrations, export needs, and a written quote for the current product and billing plan.</li>
          </ul>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This comparison summarizes official pricing, plan, billing, row-limit, and product-change documentation checked on 10 November 2026. It is desk research, not independent usability or performance testing. Verify the current product, plan, and checkout price before purchase.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.notion.com/pricing" target="_blank" rel="noopener noreferrer">Notion plans and pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.superhuman.com/hc/en-us/articles/46210161369741-Superhuman-Docs-billing-and-pricing-basics" target="_blank" rel="noopener noreferrer">Superhuman Docs billing and pricing basics</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.superhuman.com/hc/en-us/articles/46210176318477-Overview-Doc-limits" target="_blank" rel="noopener noreferrer">Superhuman Docs document and sync-table limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.superhuman.com/hc/en-us/articles/46210093285773-What-s-changing-Coda-becomes-Superhuman-Docs" target="_blank" rel="noopener noreferrer">Announcement: Coda becomes Superhuman Docs</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://superhuman.com/plans" target="_blank" rel="noopener noreferrer">Current Superhuman suite plans</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
