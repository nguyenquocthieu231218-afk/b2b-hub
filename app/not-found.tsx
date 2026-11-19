import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import RecoveryNavigation from '@/app/components/RecoveryNavigation';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested StackEvalify route does not exist. Continue with an audited B2B software cost model.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto min-h-[70vh] w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">404 · Route not found</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">This URL is not part of the current audit set.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">The link may be outdated or mistyped. No calculator inputs or procurement data were changed. Return home or continue through one of the audited cost models below.</p>
        <Link href="/" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Return to StackEvalify home
        </Link>
        <RecoveryNavigation />
      </main>
      <SiteFooter />
    </>
  );
}
