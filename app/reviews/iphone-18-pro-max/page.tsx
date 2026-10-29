import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../../../components/SiteFooter';
import SiteHeader from '../../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'iPhone Review in Progress',
  description: 'This product review is being held while product details and testing evidence are verified.',
  alternates: { canonical: '/reviews/iphone-18-pro-max' },
  robots: { index: false, follow: true },
};

export default function IphoneReviewPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto min-h-[65vh] max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-200">Review on hold</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">This evaluation is not ready to publish</h1>
          <p className="mt-5 leading-relaxed text-slate-200">
            Product availability, specifications, images, and hands-on testing records need verification before this page can make review claims. The draft is withheld until those sources are available.
          </p>
          <Link href="/" className="mt-6 inline-flex rounded-lg bg-slate-100 px-4 py-2.5 font-semibold text-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300">
            Return to StackEvalify
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
