import Link from 'next/link';
import { eorCalculatorComparisonPaths } from '@/lib/audited-tools';
import { comparisons } from '@/lib/comparisons';

const auditedComparisons = eorCalculatorComparisonPaths.map((href) => {
  const comparison = comparisons.find((item) => item.href === href);
  if (!comparison) throw new Error(`Missing audited recovery route: ${href}`);
  return comparison;
});

export default function RecoveryNavigation() {
  return (
    <section aria-labelledby="recovery-navigation" className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Continue with audited models</p>
      <h2 id="recovery-navigation" className="mt-2 text-2xl font-bold text-white">Open a verified procurement route</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">Use the three-vendor calculator for a first budget screen, or return to one of the four CFO-audited comparisons.</p>

      <Link href="/eor-cost-calculator" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-300 px-5 py-2.5 text-center text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200">
        Open the EOR cost calculator
      </Link>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {auditedComparisons.map((comparison) => (
          <Link key={comparison.href} href={comparison.href} className="flex min-h-16 items-center rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 font-semibold text-blue-200 transition-colors hover:border-blue-400/60 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            {comparison.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
