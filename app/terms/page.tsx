import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Terms and Editorial Use',
  description: 'Understand the purpose, evidence limits, source dates, vendor links, and correction process for StackEvalify research.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'StackEvalify Terms and Editorial Use',
    description: 'How to interpret, refer to, and report corrections to StackEvalify product research.',
    url: '/terms',
    siteName: 'StackEvalify',
    type: 'website',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: 'StackEvalify logo' }],
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Terms and editorial use' }]} />
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">StackEvalify</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Terms and editorial use</h1>
          <p className="mt-4 text-sm text-slate-400">Last updated: <time dateTime="2026-11-05">5 November 2026</time></p>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            StackEvalify publishes product comparisons, decision guides, and developer hardware field notes. This page explains the scope of that research and how to interpret or refer to it.
          </p>
        </header>

        <div className="prose mt-10">
          <section aria-labelledby="research-purpose">
            <h2 id="research-purpose">Research to support your evaluation</h2>
            <p>
              Our content provides general information for comparing products and planning practical evaluations. A desk-research comparison summarizes published sources; it is not a claim that we tested the products ourselves. A field note from one configuration is not automatically a benchmark or a result you can expect on another setup.
            </p>
            <p>
              Read the stated method, source links, configuration, and limitations alongside each conclusion. Our <Link href="/methodology">review methodology</Link> explains these distinctions. A recommendation should be assessed against your own team, workload, required integrations, and budget.
            </p>
          </section>

          <section aria-labelledby="dates-and-limits">
            <h2 id="dates-and-limits">Dates, prices, and product limits</h2>
            <p>
              A source-check date records when the cited documentation was reviewed. It does not promise that every detail remains current or that the product has been independently tested. Publication and page-update dates have different meanings and should not be treated as a fresh source check unless the page says one was performed.
            </p>
            <p>
              Prices, feature access, quotas, regional availability, eligibility, and contract terms can change. Confirm the relevant edition and billing conditions with the vendor before purchasing or migrating data. Use a trial or representative workflow to evaluate requirements that matter to your organization.
            </p>
          </section>

          <section aria-labelledby="vendor-relationships">
            <h2 id="vendor-relationships">Vendors, names, and external links</h2>
            <p>
              StackEvalify publishes editorial research; it does not sell the vendor products discussed on this site. Purchases, subscriptions, support, and product-specific terms are handled by the vendor. A source link or product mention does not itself indicate a partnership or endorsement.
            </p>
            <p>
              Product names and trademarks identify their respective owners. The current website has no advertising or affiliate tracking. If a commercial relationship is introduced, it should be disclosed beside the relevant recommendation and reflected in our editorial information.
            </p>
          </section>

          <section aria-labelledby="referring-to-findings">
            <h2 id="referring-to-findings">Keep findings in context</h2>
            <p>
              When referring to a StackEvalify finding, include the page title, URL, and relevant source-check or test date so readers can inspect its basis. Keep qualifications, tested conditions, and evidence limits with the statement. Avoid presenting a vendor claim we cited as an independent measured result or a preliminary observation as a universal conclusion.
            </p>
          </section>

          <section aria-labelledby="editorial-corrections">
            <h2 id="editorial-corrections">Questions and corrections</h2>
            <p>
              To report a factual error, email <a href="mailto:contact@stackevalify.com">contact@stackevalify.com</a> with the page URL, the specific claim, and supporting source material. The correction process is described in our methodology. See the <Link href="/privacy">privacy notice</Link> before sending correspondence; sensitive customer data or account credentials are not needed for an editorial report.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
