import Link from 'next/link';

export default function AuthorProfile() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur-md">
        <Link
          href="/"
          className="rounded p-1 text-xl font-black tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          StackEvalify
        </Link>

        <nav aria-label="Main navigation" className="flex flex-wrap gap-4 text-sm font-medium text-slate-300 md:gap-6">
          <Link
            href="/"
            className="rounded p-1 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Home
          </Link>
          <Link
            href="/methodology"
            className="rounded p-1 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Methodology
          </Link>
          <a
            href="mailto:contact@stackevalify.com"
            className="rounded p-1 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Contact
          </a>
        </nav>
      </header>

      <section aria-labelledby="author-name" className="mx-auto mt-16 max-w-4xl px-4 lg:mt-24">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div
            aria-hidden="true"
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-3xl font-bold text-blue-300 md:h-36 md:w-36"
          >
            TN
          </div>

          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-300">
              Technical Reviewer
            </p>

            <h1 id="author-name" className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Thieu Nguyen
            </h1>

            <p className="text-slate-400">Based in Da Nang, Vietnam</p>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              I review developer hardware and B2B software through the lens of practical engineering workflows.
              My current hands-on development setup is an Acer Nitro 5 with an Intel Core i7-10750H, a GTX 1650 Ti,
              and upgraded 16 GB of RAM. I work with Next.js App Router, React, and Node.js in local development.
            </p>

            <p className="max-w-2xl leading-relaxed text-slate-400">
              Each evaluation identifies its evidence method—hands-on testing, performance benchmarking, or desk
              research—and should explain the test setup and relevant limitations.
            </p>

            <a
              href="mailto:contact@stackevalify.com"
              className="inline-flex rounded-lg bg-slate-100 px-5 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Contact the reviewer
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="latest-review"
        className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 px-4 lg:grid-cols-3"
      >
        <div className="space-y-8 lg:col-span-2">
          <div>
            <h2 id="latest-review" className="mb-6 border-b border-slate-800 pb-4 text-2xl font-bold text-white">
              Latest Evaluation
            </h2>

            <Link
              href="/reviews/acer-nitro-5-web-dev"
              className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Developer Hardware · Hands-on
              </p>
              <h3 className="mb-3 text-xl font-bold text-white">
                Acer Nitro 5 for Full-Stack Web Development
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                An evaluation of a daily-use development setup running Node.js and Next.js. The full review should
                include the test conditions, measurements, and limitations behind its findings.
              </p>
              <span className="mt-5 inline-block text-sm font-medium text-blue-400">
                Read the evaluation →
              </span>
            </Link>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-3 text-lg font-bold text-white">How I evaluate products</h2>
            <p className="leading-relaxed text-slate-400">
              I label whether an evaluation is based on direct use, performance testing, or product documentation.
              For benchmark results, the review should describe the configuration and conditions so readers can
              understand what the numbers do—and do not—show.
            </p>
            <Link
              href="/methodology"
              className="mt-4 inline-block rounded text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Read the testing methodology →
            </Link>
          </div>
        </div>

        <aside aria-label="Reviewer setup" className="space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Current Test Machine
            </h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Acer Nitro 5</li>
              <li>Intel Core i7-10750H</li>
              <li>GeForce GTX 1650 Ti</li>
              <li>Upgraded 16 GB RAM</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Development Tools
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Next.js App Router', 'React', 'Node.js', 'Tailwind CSS', 'Vercel', 'Git'].map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
