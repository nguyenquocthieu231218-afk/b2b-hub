import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Webflow vs Framer (2026): Plans, CMS and Publishing',
  description: 'A dated comparison of Webflow and Framer site plans, CMS limits, hosting, and separate workspace costs based on official vendor sources.',
  path: '/webflow-vs-framer',
});

const comparisonRows = [
  {
    label: 'Free publishing',
    webflow: 'Starter sites can publish to a webflow.io subdomain, with a limit of 2 static pages and 50 CMS items. A paid Site plan is required for a custom domain.',
    framer: 'Free plan includes a Framer domain, 1 GB bandwidth, and design pages. A paid Site plan is required to connect a custom domain and remove Framer branding.',
  },
  {
    label: 'Paid site plan price',
    webflow: 'Basic is US$15/month billed yearly or US$25/month billed monthly. It is for sites without CMS or ecommerce. Premium is US$25/month billed yearly or US$39/month billed monthly.',
    framer: 'Basic is US$10/month and Pro is US$30/month on the pricing page’s yearly-billing view.',
  },
  {
    label: 'CMS capacity',
    webflow: 'The new Premium plan includes 20,000 CMS items and 40 CMS collections.',
    framer: 'Basic includes 2 CMS collections and 1,000 items. Pro includes 10 collections and 2,500 items before optional scaling.',
  },
  {
    label: 'Hosting and custom domain',
    webflow: 'A paid Site plan is needed to host an individual site on a custom domain. Site plans are billed separately from Workspace plans.',
    framer: 'Paid Site plans include hosting and support connecting a custom domain. Workspace editor limits and costs depend on the highest-tier Site plan in that Workspace.',
  },
] as const;

export default function WebflowVsFramerPage() {
  return (
    <ComparisonLayout tool1="webflow" tool2="framer" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Website builders · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Webflow vs Framer: plans, CMS, and publishing
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            The old price comparison for these builders is no longer reliable. Webflow updated its self-serve Site plans in 2026, and both vendors separate at least some site-publishing costs from workspace collaboration. This comparison focuses on current published plans and CMS needs.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Framer’s listed Basic plan starts lower at US$10/month on its yearly-billing view. Webflow’s new Basic Site plan is US$15/month billed yearly and does not include CMS; its Premium plan is US$25/month billed yearly and includes substantially larger published CMS capacity. Compare the exact site and workspace plan your project needs rather than treating those starting prices as equivalent.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published plans and limits</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published Webflow and Framer site plan details checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Webflow</th>
                  <th scope="col" className="p-4">Framer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.webflow}</td>
                    <td className="p-4 align-top leading-relaxed">{row.framer}</td>
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
                    <dt className="font-semibold text-blue-200">Webflow</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.webflow}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Framer</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.framer}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            The vendors display prices in US dollars, but workspace charges, taxes, billing frequency, and existing customer terms can differ. Webflow says new Site plan prices apply to new purchases, while existing sites may transition on a later renewal or billable change. Confirm your own plan details before budgeting.
          </p>
        </section>

        <section aria-labelledby="workflow-fit" className="border-b border-slate-800 py-8">
          <h2 id="workflow-fit" className="text-2xl font-bold text-white">Which site should you trial?</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Webflow</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Consider Webflow Premium if your site needs a larger structured CMS under its published 20,000-item and 40-collection limits. Check the separate Workspace plan if you need more staging sites or collaboration controls, and note that each custom-domain site needs its own Site plan.
              </p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Framer</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Consider Framer Basic or Pro if their published page and CMS limits fit your site. Compare workspace editor requirements as well as the Site plan: Framer ties editor limits and pricing to the highest-tier Site plan in the Workspace.
              </p>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">
            Do not infer design quality, SEO performance, or ease of use from these plan tables. Trial both with the same page, CMS content, responsive breakpoints, forms, and publishing checklist; then compare editing time, accessibility, performance, and the bill for your required seats and limits.
          </p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">A practical evaluation checklist</h2>
          <ol className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Count what you need.</strong> List static pages, CMS collections and items, bandwidth, forms, redirects, and custom domains.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Price the whole team setup.</strong> Include the Site plan for each published site, Workspace features, editor seats, add-ons, and annual commitment.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Test the handoff.</strong> Try content editing, staging, publishing, redirects, accessibility, and exporting or migrating the site before choosing.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This page summarizes vendor-published plans checked on 29 October 2026. It is desk research, not independent usability testing. Plans, prices, limits, and migration terms can change; confirm the current details for your Workspace and site before purchasing.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://webflow.com/pricing" target="_blank" rel="noopener noreferrer">Webflow Site and Workspace pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://webflow.com/blog/simplified-plans-and-updated-pricing-2026" target="_blank" rel="noopener noreferrer">Webflow announcement: 2026 plan and price changes</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.webflow.com/hc/en-us/articles/33961232582419-Choose-a-Site-plan" target="_blank" rel="noopener noreferrer">Webflow Help Center: choosing a Site plan</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.framer.com/pricing" target="_blank" rel="noopener noreferrer">Framer pricing and plan limits</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.framer.com/help/articles/site-plans-explained/" target="_blank" rel="noopener noreferrer">Framer Help: Site plans and Workspace editor costs</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
