import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Shopify vs WooCommerce (2026): Costs and Store Setup',
  description: 'A dated comparison of Shopify Basic pricing and managed hosting with WooCommerce platform, hosting, extension, and payment costs from official sources.',
  path: '/shopify-vs-woocommerce',
});

const comparisonRows = [
  {
    label: 'Platform subscription',
    shopify: 'Basic is listed at US$39 per month, or US$29 per month with annual billing. Annual billing charges the year upfront.',
    woocommerce: 'The core WooCommerce platform is free to download and use, with no monthly platform subscription or revenue share.',
  },
  {
    label: 'Hosting',
    shopify: 'Secure commerce hosting and unlimited bandwidth are included with the Shopify plan.',
    woocommerce: 'You choose and pay a hosting provider. WooCommerce estimates US$25–350 per month for hosting for most stores; actual costs depend on the provider and store needs.',
  },
  {
    label: 'Extensions',
    shopify: 'The subscription includes core store features; apps and optional services can add to the bill.',
    woocommerce: 'Extensions are optional and bought separately. WooCommerce lists a typical range of US$29–299 per year per extension.',
  },
  {
    label: 'Payment processing',
    shopify: 'Card processing fees apply; third-party transaction fees may also apply when using another payment provider. Rates depend on plan and market.',
    woocommerce: 'You select a payment processor. WooPayments has no setup or monthly fee, but charges per transaction; rates vary by merchant country, customer country, currency, and payment method.',
  },
  {
    label: 'Store setup model',
    shopify: 'A hosted commerce subscription combines the storefront and hosting in one managed service.',
    woocommerce: 'An open-source commerce platform for WordPress. You select the host and decide which extensions and services to add.',
  },
] as const;

export default function ShopifyVsWooCommercePage() {
  return (
    <ComparisonLayout tool1="shopify" tool2="woocommerce" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Commerce platforms · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Shopify vs WooCommerce: costs and store setup
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Shopify and WooCommerce price different parts of running a store. Shopify sells a hosted subscription; WooCommerce’s core platform is free, while the store owner chooses hosting, payment processing, and any paid extensions. A fair budget compares the full stack, not just the platform fee.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Shopify gives a clearer starting subscription price and includes secure hosting. WooCommerce has no platform subscription, but hosting, payment processing, extensions, and store maintenance still contribute to its total cost. Neither headline price alone tells you which option will cost less for your store.
          </p>
        </section>

        <section aria-labelledby="cost-comparison" className="border-b border-slate-800 py-8">
          <h2 id="cost-comparison" className="text-2xl font-bold text-white">What the published costs include</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            Shopify amounts below are US-dollar list prices. WooCommerce’s hosting range and extension range are vendor estimates, not required fees or a quote for a particular store.
          </p>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published Shopify Basic and WooCommerce cost details checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Cost or setup area</th>
                  <th scope="col" className="p-4">Shopify</th>
                  <th scope="col" className="p-4">WooCommerce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.shopify}</td>
                    <td className="p-4 align-top leading-relaxed">{row.woocommerce}</td>
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
                    <dt className="font-semibold text-blue-200">Shopify</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.shopify}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">WooCommerce</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.woocommerce}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Shopify’s displayed subscription price depends on the selected billing cycle and market. Card-processing and third-party transaction charges depend on the store’s country, payment method, and plan. WooCommerce hosting, extension, and gateway costs likewise depend on the setup; request local quotes before estimating annual cost.
          </p>
        </section>

        <section aria-labelledby="workflow-fit" className="border-b border-slate-800 py-8">
          <h2 id="workflow-fit" className="text-2xl font-bold text-white">Which operating model fits?</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Shopify</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Consider it if you want the storefront and secure commerce hosting under one subscription. Check payment processing rates, any third-party provider charges, and which features are included in the plan for your country.
              </p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist WooCommerce</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Consider it if you want an open-source store built on WordPress and are prepared to choose a host, payment processor, and extensions. Compare those services and the time needed to operate them against Shopify’s subscription cost.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">Build a realistic cost estimate</h2>
          <ol className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Estimate annual sales and order value.</strong> Payment rates and higher plan features can matter more as sales volume grows.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Add every recurring service.</strong> Include platform or hosting, domains, extensions/apps, payment processing, backups, security, and support where applicable.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Trial the real operating workflow.</strong> Test product setup, order handling, refunds, shipping, tax settings, and the integrations your team needs.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This page summarizes vendor-published plan and cost information checked on 29 October 2026. It is desk research, not independent usability testing. Prices and terms vary by market and can change; confirm current charges with the vendors and service providers.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.shopify.com/pricing" target="_blank" rel="noopener noreferrer">Shopify plans, hosting, and payment fees</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.shopify.com/en/manual/your-account/manage-billing/managing-your-bills/viewing-your-bills/billing-cycles-thresholds" target="_blank" rel="noopener noreferrer">Shopify Help Center: billing cycles and thresholds</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://woocommerce.com/pricing/" target="_blank" rel="noopener noreferrer">WooCommerce pricing, hosting, and extensions</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://woocommerce.com/document/woopayments/fees/" target="_blank" rel="noopener noreferrer">WooCommerce documentation: WooPayments fees</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
