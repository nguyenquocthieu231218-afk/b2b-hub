import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Zapier vs Make (2026): Pricing, Tasks and Credits',
  description: 'A dated desk-research comparison of Zapier and Make plans, usage units, workflow features, and how to estimate the right automation tool.',
  path: '/zapier-vs-make',
});

const comparisonRows = [
  {
    label: 'Free plan',
    zapier: '100 tasks per month, one user, unlimited Zaps, two-step workflows, and a 15-minute polling interval.',
    make: 'Up to 1,000 credits per month, a visual workflow builder, routers and filters, and a 15-minute minimum run interval.',
  },
  {
    label: 'How usage is counted',
    zapier: 'A task is counted for each successful action step. Triggers, filters, and some built-in steps do not count.',
    make: 'A credit is the billing unit. Most non-AI module operations use one credit; some AI features can use more, depending on the connection.',
  },
  {
    label: 'Paid plans',
    zapier: 'Professional starts at $19.99/month and adds multi-step Zaps, premium app access, and webhooks. Team starts at $69/month and lists 25 users and shared workflows.',
    make: 'At the displayed 10,000-credit monthly tier, Core is listed at $12/month, Pro at $21/month, and Teams at $38/month. Core adds unlimited active scenarios and minute-level scheduling; higher plans add features such as priority execution and team roles.',
  },
  {
    label: 'App connections',
    zapier: 'Zapier lists 9,000+ app integrations on its pricing page.',
    make: 'Make lists 3,500+ apps on its pricing page. App counts are vendor-reported and may use different counting methods.',
  },
] as const;

export default function ZapierVsMakePage() {
  return (
    <ComparisonLayout tool1="zapier" tool2="make" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Workflow automation · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Zapier vs Make: plans, usage, and workflow fit
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Both connect apps and automate workflows, but they meter usage differently. Compare the workflow you actually need, then estimate its monthly tasks or credits before choosing a plan.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Shortlist <strong className="text-white">Zapier</strong> if its supported app connections and action-based workflow model fit your process. Shortlist <strong className="text-white">Make</strong> if you want to design flows in its visual builder and use routers or filters. Pricing units are different, so the free-plan allowances and starting prices do not establish which service will cost less for your workload.
          </p>
        </section>

        <section aria-labelledby="plans" className="border-b border-slate-800 py-8">
          <h2 id="plans" className="text-2xl font-bold text-white">Plans and usage at a glance</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published Zapier and Make plan details checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Zapier</th>
                  <th scope="col" className="p-4">Make</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.zapier}</td>
                    <td className="p-4 align-top leading-relaxed">{row.make}</td>
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
                    <dt className="font-semibold text-blue-200">Zapier</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.zapier}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Make</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.make}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Prices are listed in USD on vendor pricing pages and can vary with usage tier and billing selection. Make’s paid examples above use the 10,000-credit monthly tier shown on its pricing page. Check the current plan selector, taxes, and terms before purchase.
          </p>
        </section>

        <section aria-labelledby="usage" className="border-b border-slate-800 py-8">
          <h2 id="usage" className="text-2xl font-bold text-white">Tasks and credits are different measures</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Zapier counts successful actions</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                A trigger that starts a Zap does not use a task. Successful action steps do. For example, if a workflow updates a CRM record and then sends a message, those two successful actions count as two tasks for that run.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Make counts module operations as credits</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Make says most actions consume one credit, while some AI features may use more. Routers and certain error-handler modules are listed as exceptions that do not consume credits. A workflow’s data volume and module path affect its usage.
              </p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-slate-300">
            To compare cost fairly, map one representative workflow in each product and count the billable actions or module operations for a typical month. Include retries, branches, AI features, and expected run volume; do not treat one Zapier task as automatically equal to one Make credit.
          </p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">How to choose</h2>
          <ul className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Choose a Zapier trial</strong> if your exact apps and actions are available and you want to validate a trigger-and-action flow. Check how many successful actions each run will consume.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Choose a Make trial</strong> if the visual scenario builder, routing, or filters match your process. Estimate credits from each module operation and test any AI modules separately.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">Before subscribing</strong>, verify connector behavior, error handling, polling frequency, data transfer, and the price for your task or credit tier using a real sample workflow.</li>
          </ul>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This comparison summarizes vendor-published pricing and help documentation checked on 29 October 2026. It is desk research, not independent performance or usability testing. Plan limits, included features, app catalogs, and pricing may change.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://zapier.com/pricing" target="_blank" rel="noopener noreferrer">Zapier plans and pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits" target="_blank" rel="noopener noreferrer">Zapier Help: task limits and what counts</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.make.com/pricing" target="_blank" rel="noopener noreferrer">Make plans and pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.make.com/credits" target="_blank" rel="noopener noreferrer">Make Help: credits and usage</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
