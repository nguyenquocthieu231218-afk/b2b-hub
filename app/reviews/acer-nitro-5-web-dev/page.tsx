import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Acer Nitro 5 for Web Development',
  description: 'A preliminary single-configuration field note on an Acer Nitro 5 development setup, with test limitations stated.',
  alternates: { canonical: '/reviews/acer-nitro-5-web-dev' },
  robots: { index: false, follow: true },
};

export default function AcerNitroReviewPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <Link href="/category/hardware" className="hover:text-white">Developer hardware</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span className="text-slate-300">Acer Nitro 5</span>
        </nav>

        <article>
          <header className="border-b border-slate-800 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="rounded-md bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300">Hands-on · Developer hardware</span>
              <time dateTime="2026-10">Last tested: October 2026</time>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">Acer Nitro 5 for web development</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              A single-configuration account of local Next.js and Node.js development
              on an Acer Nitro 5. These observations apply to the stated hardware and
              workload; they are not a comparison across laptops.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Reviewed by <Link href="/author/thieu-nguyen" className="text-blue-300 hover:text-blue-200">Thieu Nguyen</Link>
            </p>
          </header>

          <section aria-labelledby="summary" className="py-8">
            <h2 id="summary" className="text-2xl font-bold text-white">Summary</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              The test notes supplied for this page report Fast Refresh under 1.5
              seconds with Next.js 14 App Router and Node.js 20. They also report a
              CPU temperature peak of 92°C during sustained Webpack compilation.
              That temperature is an observation; by itself, it does not establish
              thermal throttling. The supplied notes do not include clock-speed or
              throughput traces demonstrating performance loss.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Potential fit</h3>
                <p className="mt-2 text-slate-200">Budget-conscious web developers who primarily work at a desk.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Observed trade-off</h3>
                <p className="mt-2 text-slate-200">A reported 92°C CPU temperature peak during sustained compilation.</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="configuration" className="border-t border-slate-800 py-8">
            <h2 id="configuration" className="text-2xl font-bold text-white">Test configuration in the supplied notes</h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-900 p-4"><dt className="text-sm text-slate-400">Processor</dt><dd className="mt-1 font-medium text-slate-200">Intel Core i7-10750H</dd></div>
              <div className="rounded-lg bg-slate-900 p-4"><dt className="text-sm text-slate-400">Graphics</dt><dd className="mt-1 font-medium text-slate-200">GeForce GTX 1650 Ti</dd></div>
              <div className="rounded-lg bg-slate-900 p-4"><dt className="text-sm text-slate-400">Memory</dt><dd className="mt-1 font-medium text-slate-200">Upgraded 16 GB RAM</dd></div>
              <div className="rounded-lg bg-slate-900 p-4"><dt className="text-sm text-slate-400">Software listed</dt><dd className="mt-1 font-medium text-slate-200">Next.js 14 App Router, Node.js 20, Webpack</dd></div>
            </dl>
          </section>

          <section aria-labelledby="limitations" className="border-t border-slate-800 py-8">
            <h2 id="limitations" className="text-2xl font-bold text-white">Limitations of the available test notes</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
              <p>
                The information provided does not specify the exact Nitro 5 model
                number, operating system, memory speed or channel configuration,
                project size, run count, timing procedure, temperature sensor, ambient
                temperature, or power and fan profile.
              </p>
              <p>
                No measured battery-runtime result was provided, so this review does
                not rate battery life. A temperature peak alone is not evidence of
                throttling; that conclusion requires supporting performance or clock
                measurements.
              </p>
              <p className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-100">
                Treat these figures as observations from one setup, not as a fully
                reproducible or comparative benchmark. Add the missing test details
                before presenting them as repeatable benchmark results.
              </p>
            </div>
          </section>

          <section aria-labelledby="method" className="border-t border-slate-800 py-8">
            <h2 id="method" className="text-2xl font-bold text-white">Method</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              This evaluation is labeled hands-on because the supplied notes identify
              the laptop as the reviewer’s daily development machine. See the{' '}
              <Link href="/methodology" className="text-blue-300 hover:text-blue-200">full testing methodology</Link>
              {' '}for how StackEvalify distinguishes direct use, performance testing,
              and desk research.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
