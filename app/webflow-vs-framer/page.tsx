import ComparisonLayout from '@/app/components/ComparisonLayout';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Webflow vs Framer (2026): CMS, Bandwidth and Seats',
  description: 'A source-checked Webflow vs Framer cost comparison covering CMS items, bandwidth overages, site plans, and collaborator seats for teams and agencies.',
  path: '/webflow-vs-framer',
});

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 hover:text-white';

const rows = [
  {
    label: 'Annual entry plan',
    webflow: 'Basic is $15/month per site, billed yearly. It includes a custom domain, 300 static pages, and 10 GB bandwidth, but no CMS items.',
    framer: 'Basic is $10/month on yearly billing. It includes 30 site pages, 2 CMS collections, 1,000 CMS items, and 50 GB bandwidth.',
  },
  {
    label: 'Content-heavy plan',
    webflow: 'Premium is $25/month per site, billed yearly. The comparison table lists 20,000 CMS items and 40 CMS collections.',
    framer: 'Pro is $30/month on yearly billing. It includes 150 pages, 10 CMS collections, 2,500 CMS items, and 100 GB bandwidth.',
  },
  {
    label: 'CMS expansion',
    webflow: 'Premium starts much higher at 20,000 items; larger Team and Enterprise platform configurations are separate sales motions.',
    framer: 'Pro can add 10,000 CMS items for $20/month, up to 40,000, and 10 collections for $40/month, up to 40 collections.',
  },
  {
    label: 'Collaboration seats',
    webflow: 'The Workspace includes one member. Extra Full seats are $39/month and Limited seats are $15/month, both billed yearly; reviewer/commenter seats are free.',
    framer: 'Additional editors are $20/month and viewers are free. Enterprise lists unlimited editors with custom pricing.',
  },
] as const;

export default function WebflowVsFramerPage() {
  return (
    <ComparisonLayout tool1="webflow" tool2="framer" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Website builders · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Webflow vs Framer: CMS, bandwidth, and team-seat economics
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">The cheap plan is rarely the agency bill. Webflow separates each published Site plan from Workspace seats; Framer exposes smaller CMS limits and explicit expansion prices. Model content growth, traffic, and collaborators before comparing the $15 and $10 entry points.</p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-12">12 November 2026</time> · US vendor pages · USD · desk research, not an independent builder or hosting benchmark</p>
        </header>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published annual plans and scaling limits</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
              <caption className="sr-only">Webflow and Framer site, CMS, bandwidth, and seat constraints checked 12 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200"><tr><th scope="col" className="p-4">Constraint</th><th scope="col" className="p-4">Webflow</th><th scope="col" className="p-4">Framer</th></tr></thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {rows.map((row) => <tr key={row.label}><th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th><td className="p-4 align-top leading-relaxed">{row.webflow}</td><td className="p-4 align-top leading-relaxed">{row.framer}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:hidden">
            {rows.map((row) => <article key={row.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-bold text-white">{row.label}</h3><dl className="mt-3 grid gap-3 text-sm"><div><dt className="font-semibold text-blue-200">Webflow</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.webflow}</dd></div><div><dt className="font-semibold text-blue-200">Framer</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.framer}</dd></div></dl></article>)}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Prices are listed in USD before tax on yearly-billing views. Site/domain costs, Workspace members, localization, analytics, optimization, ecommerce, enterprise services, and negotiated terms can be separate.</p>
        </section>

        <section aria-labelledby="bandwidth-overage" className="border-b border-slate-800 py-8">
          <h2 id="bandwidth-overage" className="text-2xl font-bold text-white">Bandwidth is a price ladder, not a footnote</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Webflow</h3><p className="mt-3 leading-relaxed text-slate-300">Basic lists 10 GB/month. Premium publishes add-on blocks: +50 GB for $20/month, +100 GB for $40, +150 GB for $60, and +250 GB for $100 on annual billing. Webflow says two consecutive months above certain plan limits trigger an automatic upgrade.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Framer</h3><p className="mt-3 leading-relaxed text-slate-300">Basic includes 50 GB and Pro 100 GB. Pro lists another 100 GB for $40/month, with scaling up to 2 TB. That makes a traffic forecast directly convertible into an add-on budget.</p></article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">Use CDN logs or current host transfer, not page views alone. Images, video, downloadable files, bot traffic, and cache behavior determine transfer. Forecast an ordinary month and a campaign spike.</p>
        </section>

        <section aria-labelledby="workspace-seats" className="border-b border-slate-800 py-8">
          <h2 id="workspace-seats" className="text-2xl font-bold text-white">Agency cost appears when collaborators become editors</h2>
          <p className="mt-4 leading-relaxed text-slate-300">Webflow&apos;s Site plan pays for publishing a specific site; its Workspace organizes sites and collaborators. One Workspace member is included, then Full and Limited capabilities carry different annual seat prices. Framer&apos;s model is simpler on the public page: additional editors are $20/month and viewers are free. For either vendor, map designers, developers, content editors, client reviewers, and temporary contractors to the lowest permission that still lets them work.</p>
          <div className="mt-5 rounded-xl border border-blue-400/20 bg-blue-400/5 p-5"><h3 className="font-bold text-blue-100">A five-person team can invert the headline comparison</h3><p className="mt-2 leading-relaxed text-slate-300">The site subscription may be smaller than the collaboration layer. Price one live site plus every paid editor for twelve months before choosing on the basis of Basic or Pro alone.</p></div>
        </section>

        <section aria-labelledby="agency-model" className="border-b border-slate-800 py-8">
          <h2 id="agency-model" className="text-2xl font-bold text-white">Build a quote for the site you expect in year two</h2>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Inventory content.</strong> Count static pages, CMS collections, CMS items, locales, redirects, forms, files, and search requirements.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Forecast bandwidth.</strong> Model median and peak monthly transfer with a growth buffer and the published expansion blocks.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Assign permissions.</strong> Separate full designers, limited content editors, reviewers, guests, and client stakeholders.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">4. Test the exit path.</strong> Export representative code/content, document redirect and domain handoff, and price the migration work before committing.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">This page analyzes public vendor pricing checked 12 November 2026. It does not claim independent design-quality, accessibility, uptime, export, SEO-performance, or support testing.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className={sourceClass} href="https://webflow.com/pricing">Webflow pricing</a> — Site plans, CMS limits, bandwidth add-ons, Workspace seats, and plan separation.</li>
            <li><a className={sourceClass} href="https://help.webflow.com/hc/en-us/articles/33961232582419-Choose-a-Site-plan">Webflow Help: choose a Site plan</a> — publishing and plan scope.</li>
            <li><a className={sourceClass} href="https://www.framer.com/pricing">Framer pricing</a> — pages, CMS items, bandwidth, expansion units, and editor cost.</li>
            <li><a className={sourceClass} href="https://www.framer.com/help/articles/site-plans-explained/">Framer Help: Site plans</a> — plan and Workspace billing context.</li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
