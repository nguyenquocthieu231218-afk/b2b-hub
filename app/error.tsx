'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import RecoveryNavigation from '@/app/components/RecoveryNavigation';

export default function ErrorPage({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto min-h-[70vh] w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Temporary application error</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">The current view could not finish loading.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Your scenario remains in the browser URL when URL state sync is available. Retry this view, return home, or reopen an audited calculator below.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button type="button" onClick={() => retry()} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Try loading again
          </button>
          <Link href="/" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Return to home
          </Link>
        </div>
        <RecoveryNavigation />
      </main>
      <SiteFooter />
    </>
  );
}
