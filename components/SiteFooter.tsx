import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} StackEvalify · Technical evaluations for engineering teams</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
          <Link href="/category/saas" className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">SaaS</Link>
          <Link href="/category/hardware" className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Hardware</Link>
          <Link href="/about" className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">About</Link>
          <Link href="/methodology" className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Methodology</Link>
          <Link href="/contact" className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
