import ComparisonLayout from '@/app/components/ComparisonLayout';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'HubSpot vs Zoho CRM: Pricing, Seats and Scale Costs',
  description: 'A source-checked comparison of HubSpot and Zoho CRM pricing, seat models, marketing-contact costs, ecosystem licensing, and scale risks.',
  path: '/hubspot-vs-zoho-crm',
});

const rows = [
  {
    label: 'Free entry point',
    hubspot: 'HubSpot Smart CRM is available as a free service. Product packaging and free-tool limits still vary by feature, so validate the exact workflow before rollout.',
    zoho: 'Zoho CRM Free is listed for up to 3 users and includes core contact management, activities, reports, import/export allowances, and 5,000 API calls per day.',
  },
  {
    label: 'Published sales pricing',
    hubspot: 'Sales Hub starts at $20/month per Core Seat for Starter, $100/month per Sales Seat for Professional, and $150/month per Sales Seat for Enterprise when billed annually.',
    zoho: 'Annual US prices are listed at $14/user/month for Standard, $23 for Professional, and $40 for Enterprise. Ultimate is separately positioned for larger deployments.',
  },
  {
    label: 'Seat expansion',
    hubspot: 'Professional and Enterprise can require both Sales Seats for advanced sales work and Core Seats for broader platform access. Published additional-seat prices differ by edition.',
    zoho: 'Standalone Zoho CRM is priced per user. If the team moves to Zoho One, it must choose flexible-user licensing or an all-employee model that requires licenses for every employee.',
  },
  {
    label: 'Marketing scale',
    hubspot: 'Marketing Hub bills by marketing-contact tier. Exceeding a tier can trigger an automatic upgrade, and HubSpot does not downgrade the tier mid-term.',
    zoho: 'CRM seat pricing does not represent the whole marketing stack. Campaigns, CRM Plus, Zoho One, extensions, support, and implementation can change the final architecture and invoice.',
  },
] as const;

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 transition-colors hover:text-white';

export default function HubSpotVsZohoCrmPage() {
  return (
    <ComparisonLayout tool1="hubspot" tool2="zoho-crm" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">CRM · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">HubSpot vs Zoho CRM: the scale cost is bigger than the seat price</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Zoho CRM publishes lower standalone seat prices. HubSpot can be easier to start through its free CRM, but paid Sales Hub seats, additional Hubs, and marketing-contact tiers can change the curve quickly. The fair test is a 12-month system quote, not two pricing-page headlines.
          </p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-10">10 November 2026</time> · US vendor pages · USD · desk research, not a hands-on implementation</p>
        </header>

        <section aria-labelledby="scale-costs" className="border-b border-slate-800 py-8">
          <h2 id="scale-costs" className="text-2xl font-bold text-white">Where the bill changes as you scale</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="sr-only">HubSpot and Zoho CRM pricing and scale constraints checked 10 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200"><tr><th scope="col" className="p-4">Constraint</th><th scope="col" className="p-4">HubSpot</th><th scope="col" className="p-4">Zoho CRM</th></tr></thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {rows.map((row) => <tr key={row.label}><th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th><td className="p-4 align-top leading-relaxed">{row.hubspot}</td><td className="p-4 align-top leading-relaxed">{row.zoho}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:hidden">
            {rows.map((row) => <article key={row.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-bold text-white">{row.label}</h3><dl className="mt-3 grid gap-3 text-sm"><div><dt className="font-semibold text-blue-200">HubSpot</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.hubspot}</dd></div><div><dt className="font-semibold text-blue-200">Zoho CRM</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.zoho}</dd></div></dl></article>)}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Prices are public US list prices before taxes, negotiated discounts, onboarding, implementation, support, telephony, messaging, credits, extensions, and other products. Product scope is not equivalent across tiers.</p>
        </section>

        <section aria-labelledby="hubspot-trap" className="border-b border-slate-800 py-8">
          <h2 id="hubspot-trap" className="text-2xl font-bold text-white">HubSpot’s scale trap: three meters can move at once</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Seat type</h3><p className="mt-3 leading-relaxed text-slate-300">A Core Seat and a Sales Seat do not unlock the same paid capabilities. Map every employee to the seat they actually need instead of multiplying one headline price.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Hub scope</h3><p className="mt-3 leading-relaxed text-slate-300">Sales Hub pricing does not automatically represent Marketing, Service, Content, Operations, or Commerce requirements. Add each required product to the model.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Marketing contacts</h3><p className="mt-3 leading-relaxed text-slate-300">Going even one contact over a marketing tier can upgrade the account. A later count reduction does not produce a mid-term tier downgrade.</p></article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">The current catalog lists Marketing Hub Starter from $20/month with 1,000 marketing contacts. Its published incremental contact rates then vary by range. That is separate from a Sales Hub seat calculation.</p>
        </section>

        <section aria-labelledby="zoho-complexity" className="border-b border-slate-800 py-8">
          <h2 id="zoho-complexity" className="text-2xl font-bold text-white">Zoho’s trade-off: lower CRM seats, more architecture decisions</h2>
          <p className="mt-4 leading-relaxed text-slate-300">Zoho CRM Standard, Professional, and Enterprise can be priced directly per user, but a growing company may also evaluate Bigin, CRM Plus, Campaigns, Desk, Books, Analytics, or Zoho One. Zoho One’s cheaper all-employee model requires licensing the whole payroll; flexible-user pricing lets the company license a subset at a higher per-user rate. Marketplace extensions are not currently consolidated into the Zoho One invoice.</p>
          <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
            <h3 className="font-bold text-amber-100">The practical risk</h3>
            <p className="mt-2 leading-relaxed text-slate-300">The risk is not an automatic “hidden fee.” It is selecting overlapping apps, mismatched editions, or a licensing model before ownership and data flow are defined. Draw the system boundary before requesting a quote.</p>
          </div>
        </section>

        <section aria-labelledby="buying-model" className="border-b border-slate-800 py-8">
          <h2 id="buying-model" className="text-2xl font-bold text-white">Build a quote that exposes the real difference</h2>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Classify users.</strong> Count sales operators, admins, managers, read-only users, and people who only need another business app.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Forecast records and messaging.</strong> Include marketing contacts, email volume, calling, credits, API traffic, storage, and a growth buffer.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Price the ecosystem.</strong> List every Hub or Zoho app, extension, support plan, migration, and implementation service required for one production workflow.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">4. Get written renewal terms.</strong> Compare the same contract length, currency, tax treatment, discount expiry, overage behavior, and downgrade rules.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">This page analyzes public vendor documentation checked on 10 November 2026. It does not claim independent CRM deployment, usability, migration, or support testing.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className={sourceClass} href="https://legal.hubspot.com/hubspot-product-and-services-catalog/products">HubSpot Products & Services Catalog</a> — Sales Hub seats and Marketing Hub contact tiers.</li>
            <li><a className={sourceClass} href="https://knowledge.hubspot.com/account/understand-marketing-contacts-billing">HubSpot marketing-contact billing</a> — automatic upgrades and downgrade timing.</li>
            <li><a className={sourceClass} href="https://www.zoho.com/en-us/crm/zohocrm-pricing.html">Zoho CRM pricing and editions</a> — free-user limit and annual US list prices.</li>
            <li><a className={sourceClass} href="https://www.zoho.com/one/pricing/">Zoho One pricing</a> — flexible-user and all-employee models.</li>
            <li><a className={sourceClass} href="https://www.zoho.com/one/pricing/faq.html">Zoho One pricing FAQ</a> — licensing, invoicing, support, and extension caveats.</li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
