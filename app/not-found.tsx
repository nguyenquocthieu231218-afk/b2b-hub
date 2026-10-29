import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto flex min-h-[65vh] max-w-4xl flex-col justify-center px-4 py-16 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">404 · Page not found</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white">That page isn’t here.</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
          The address may have changed, or the page may still be in editorial review. Browse the current sections or return to the homepage.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex min-h-11 items-center rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">Go home</Link>
          <Link href="/category/saas" className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300">Browse software comparisons</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
