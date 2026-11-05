import Link from 'next/link';
import Image from 'next/image';

const linkClass = 'rounded px-1 py-1 text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400';

export default function SiteHeader() {
  return (
    <>
      <a href="#main-content" className="sr-only z-50 rounded bg-white px-4 py-2 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" aria-label="StackEvalify home" className="inline-flex shrink-0 items-center gap-3 rounded p-1 text-xl font-black tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            <Image src="/logo.png" alt="StackEvalify logo" width={32} height={32} sizes="32px" loading="eager" className="h-8 w-8 object-contain" />
            StackEvalify
          </Link>
          <nav aria-label="Main navigation" className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
            <Link href="/category/saas" className={linkClass}>Software comparisons</Link>
            <Link href="/guides" className={linkClass}>Buyer guides</Link>
            <Link href="/#reviews" className={linkClass}>Reviews</Link>
            <Link href="/#categories" className={linkClass}>Categories</Link>
            <Link href="/methodology" className={linkClass}>Methodology</Link>
            <Link href="/about" className={linkClass}>About</Link>
            <Link href="/contact" className={linkClass}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
