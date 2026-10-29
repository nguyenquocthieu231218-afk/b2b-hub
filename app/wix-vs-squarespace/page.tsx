import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Wix vs Squarespace (2026): Plans, Store Fees and Trial',
  description: 'A dated comparison of Wix and Squarespace US annual plan prices, free access, hosting, contributor limits, and online store fees from official sources.',
  path: '/wix-vs-squarespace',
});

const comparisonRows = [
  {
    label: 'Free access',
    wix: 'A free plan can publish on a Wix-branded wixsite.com address. It includes hosting, but not a custom domain or online payment acceptance.',
    squarespace: 'No permanent free plan; Squarespace offers a 14-day free trial. Paid plans include managed hosting.',
  },
  {
    label: 'Paid entry plan',
    wix: 'Light is listed at US$17/month with annual billing, paid in full. It adds a custom domain for one year, 2 GB storage, and 2 collaborators; it is not the first plan for accepting payments.',
    squarespace: 'Basic is listed at US$19/month with annual billing. It allows 2 contributors and can sell products, but charges a 2% online store transaction fee.',
  },
  {
    label: 'First plan for online payments',
    wix: 'Core is listed at US$29/month with annual billing, paid in full. It adds payment acceptance, basic ecommerce, 50 GB storage, and up to 5 site collaborators.',
    squarespace: 'Core is listed at US$29/month with annual billing. It removes the 2% online store transaction fee and allows unlimited contributors.',
  },
  {
    label: 'Payment processing',
    wix: 'Payment processing is an additional cost; Wix says rates vary by location and payment method.',
    squarespace: 'Squarespace Payments lists US card processing from 2.9% + US$0.30 on Basic and Core. These processing fees are separate from the online store transaction fee.',
  },
  {
    label: 'Hosting and domain',
    wix: 'Wix includes hosting. Paid plans include a domain voucher for one year; renewal and plan prices depend on location.',
    squarespace: 'Paid plans include managed hosting. Annual plans include one year of domain registration on eligible domains.',
  },
] as const;

export default function WixVsSquarespacePage() {
  return (
    <ComparisonLayout tool1="wix" tool2="squarespace" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Website builders · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Wix vs Squarespace: plans, store fees, and trial options
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Wix and Squarespace both combine site building and hosting, but their free access and store charges differ. This comparison uses US-dollar annual-plan prices as a reference and focuses on what a small business gets before paying for add-ons or payment processing.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Wix offers a permanent free plan, but it uses Wix branding and a wixsite.com address. Squarespace has a 14-day trial instead. For a basic online store, Wix Core and Squarespace Core are both listed at US$29/month with annual billing in the US; Squarespace Basic is US$19/month but includes a 2% online store transaction fee that Core removes.
          </p>
          <p className="mt-3 leading-relaxed text-slate-300">
            A simple break-even illustration: the US$10 monthly difference between Squarespace Basic and Core equals a 2% fee on US$500 in monthly store sales. This compares only the plan price and that platform fee; payment processing, taxes, promotions, and regional prices can change the total.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Published plans and costs</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published Wix and Squarespace plan details checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">Wix</th>
                  <th scope="col" className="p-4">Squarespace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.wix}</td>
                    <td className="p-4 align-top leading-relaxed">{row.squarespace}</td>
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
                    <dt className="font-semibold text-blue-200">Wix</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.wix}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Squarespace</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.squarespace}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Wix states that prices and currency vary by location, and annual prices are charged in full at purchase. Squarespace prices also vary by plan and location. Confirm your checkout total, billing period, tax, processor rates, and renewal price before subscribing.
          </p>
        </section>

        <section aria-labelledby="workflow-fit" className="border-b border-slate-800 py-8">
          <h2 id="workflow-fit" className="text-2xl font-bold text-white">Which option should you trial?</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Wix</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Try Wix if you want to experiment on a free published site, or if its Core plan’s listed storage and collaborator allowance fits your team. Before launching a store, verify the payment methods and processing rates available in your country.
              </p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Shortlist Squarespace</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Try Squarespace if its Core plan’s 0% online store transaction fee or unlimited contributors matter to your business. If you expect lower sales, compare Basic’s lower subscription price with its 2% transaction fee and your payment processing rate.
              </p>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">
            Do not choose from templates or price alone. Build the same representative page and checkout flow in both trials, then check mobile editing, product setup, tax and shipping settings, accessibility, SEO controls, and the total price at renewal.
          </p>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This page summarizes vendor-published plan and fee information checked on 29 October 2026. It is desk research, not independent usability testing. Prices and plan terms can change and vary by location; confirm the current options for your site and billing address.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.wix.com/plans" target="_blank" rel="noopener noreferrer">Wix plans, pricing, and feature comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.wix.com/blog/how-much-is-a-wix-website" target="_blank" rel="noopener noreferrer">Wix pricing guide, updated October 2026</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://www.squarespace.com/pricing" target="_blank" rel="noopener noreferrer">Squarespace pricing, store fees, and feature comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://support.squarespace.com/hc/en-us/articles/206536797-Choosing-the-right-Squarespace-plan" target="_blank" rel="noopener noreferrer">Squarespace Help: plan features and fees</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
