import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { comparisons } from '@/lib/comparisons';
import Breadcrumbs from '../../../components/Breadcrumbs';
import ComparisonDirectory from '../../../components/ComparisonDirectory';

export const metadata: Metadata = {
  title: 'B2B SaaS Comparisons and Research',
  description: 'A directory of StackEvalify software comparisons, including desk research with dated primary-source checks.',
  alternates: { canonical: '/category/saas' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'B2B SaaS Comparisons and Research',
    description: 'A directory of StackEvalify software comparisons, including desk research with dated primary-source checks.',
    url: '/category/saas',
    siteName: 'StackEvalify',
    type: 'website',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: 'StackEvalify logo' }],
  },
};

export default function SaasCategoryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'B2B SaaS & DevOps' },
        ]} />
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Category</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">B2B SaaS comparisons</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Browse software comparisons across engineering, collaboration, marketing, and operations. All {comparisons.length} comparisons have dated source checks. These pages are vendor-source desk research, not hands-on product tests.
          </p>
        </header>
        <section aria-labelledby="comparison-list" className="mt-12">
          <h2 id="comparison-list" className="text-2xl font-bold text-white">Comparisons and research status</h2>
          <p className="mt-3 max-w-3xl rounded-lg border border-blue-500/30 bg-blue-500/5 p-4 text-sm leading-relaxed text-blue-100">
            A source-check date records when vendor documentation was reviewed. It does not indicate hands-on testing; check the linked vendors for current prices and terms.
          </p>
          <ComparisonDirectory comparisons={comparisons} />
        </section>
        <section aria-labelledby="comparison-questions" className="mt-12 border-t border-slate-800 pt-8">
          <h2 id="comparison-questions" className="text-2xl font-bold text-white">Before you choose a tool</h2>
          <div className="mt-5 space-y-3 text-slate-300">
            <details className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <summary className="cursor-pointer rounded font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Are these hands-on product reviews?</summary>
              <p className="mt-3 leading-relaxed">These software comparisons are desk research based on linked vendor sources. The date records a source check, not a hands-on test. Our <Link href="/methodology" className="text-blue-300 underline underline-offset-4">methodology</Link> explains the difference.</p>
            </details>
            <details className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <summary className="cursor-pointer rounded font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Are prices and plan limits updated live?</summary>
              <p className="mt-3 leading-relaxed">No. Each comparison is a dated snapshot. Check the linked official vendor pages and your own quote before a purchase; seat prices alone may omit usage, onboarding, and migration costs.</p>
            </details>
            <details className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <summary className="cursor-pointer rounded font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-400">How should I narrow my shortlist?</summary>
              <p className="mt-3 leading-relaxed">Start with a real workflow and a list of non-negotiable requirements, compare the same tier of service, and run a small pilot. Use the <Link href="/guides/choose-b2b-software" className="text-blue-300 underline underline-offset-4">software selection checklist</Link> and <Link href="/guides/saas-total-cost" className="text-blue-300 underline underline-offset-4">total-cost worksheet</Link> to record the decision.</p>
            </details>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
