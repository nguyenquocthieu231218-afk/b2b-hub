import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'How StackEvalify handles local comparison searches, website visits, email correspondence, and links to external vendors.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'StackEvalify Privacy Notice',
    description: 'Information about local search, infrastructure logs, email correspondence, and external vendor links.',
    url: '/privacy',
    siteName: 'StackEvalify',
    type: 'website',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: 'StackEvalify logo' }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Privacy notice' }]} />
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">StackEvalify</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Privacy notice</h1>
          <p className="mt-4 text-sm text-slate-400">Last updated: <time dateTime="2026-11-05">5 November 2026</time></p>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            This notice describes the current StackEvalify website: a public library of software comparisons, guides, and developer hardware field notes. It explains what happens when you browse, search the directory, follow vendor links, or email us.
          </p>
        </header>

        <div className="prose mt-10">
          <section aria-labelledby="site-features">
            <h2 id="site-features">Browsing and directory search</h2>
            <p>
              The current application has no user accounts, contact forms, customer database, analytics scripts, advertising, or affiliate tracking. It does not operate a newsletter or use your browsing activity to build an advertising profile.
            </p>
            <p>
              The comparison directory filters the existing page data in your browser. Search words and category selections stay in page memory; the search feature does not send them to StackEvalify or a search provider, add them to the page address, or save them in cookies or browser storage. All comparison links remain available without using search.
            </p>
          </section>

          <section aria-labelledby="technical-requests">
            <h2 id="technical-requests">Technical requests and infrastructure logs</h2>
            <p>
              Your browser still requests pages, scripts, styles, and images from the website’s infrastructure. Hosting services may process technical details such as an IP address, requested URL, timestamp, browser information, and response status to deliver content, diagnose failures, or protect the service.
            </p>
            <p>
              Hosting log settings and a specific retention period are not documented in this notice. The absence of site-operated analytics does not mean that no infrastructure logs exist. You can contact us with a question about a particular request or privacy concern.
            </p>
          </section>

          <section aria-labelledby="email-correspondence">
            <h2 id="email-correspondence">Email correspondence</h2>
            <p>
              If you email <a href="mailto:contact@stackevalify.com">contact@stackevalify.com</a>, your address, message, and any attachments are handled through email providers and received as correspondence. They may remain in the inbox or reply history; email is separate from the website’s local directory search.
            </p>
            <p>
              For a correction, a page URL, the claim you are querying, and a public source are usually enough. Please do not send passwords, payment information, confidential customer records, or other sensitive material. Sending an editorial question does not subscribe you to marketing messages.
            </p>
          </section>

          <section aria-labelledby="external-sites">
            <h2 id="external-sites">Links to other websites</h2>
            <p>
              Vendor and source links take you to independently operated websites. Those services may collect information or use cookies under their own policies. Review the destination’s privacy notice before registering, uploading files, or purchasing a product. StackEvalify’s local search description does not apply to external services.
            </p>
          </section>

          <section aria-labelledby="privacy-changes">
            <h2 id="privacy-changes">Questions and changes</h2>
            <p>
              Email us with privacy questions and include the relevant page or feature. If website features or data practices change, this notice should be updated to describe them. For the purpose and limits of our editorial content, see <Link href="/terms">terms and editorial use</Link> and our <Link href="/methodology">review methodology</Link>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
