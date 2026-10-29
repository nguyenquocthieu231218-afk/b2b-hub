import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import ComparisonLayout from '@/app/components/ComparisonLayout';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'ChatGPT vs Claude (2026): Plans, Pricing and Features',
  description: 'A dated comparison of ChatGPT Plus and Claude Pro prices, included web-app features, annual billing, and practical team fit based on official vendor sources.',
  path: '/chatgpt-vs-claude',
});

const comparisonRows = [
  {
    label: 'Monthly price',
    chatgpt: 'Plus is listed at US$20 per month, billed monthly.',
    claude: 'Pro is US$20 per month when billed monthly.',
  },
  {
    label: 'Annual billing',
    chatgpt: 'The current Plus help page says annual billing is not available.',
    claude: 'Pro is listed at US$17 per month with an annual subscription, billed as US$200 upfront.',
  },
  {
    label: 'Included workflow features',
    chatgpt: 'The plan page lists expanded deep research, memory and context, projects, scheduled tasks, custom GPTs, and expanded Codex usage.',
    claude: 'The plan page lists more usage, hand-off and scheduled tasks, Claude Code, Claude Science, projects, more models, and Claude in Chrome and Microsoft 365.',
  },
  {
    label: 'Usage limits',
    chatgpt: 'Limits can vary with system conditions and model availability; check the account model picker and current plan details.',
    claude: 'Usage limits apply and can vary by plan and usage; check the account and current plan details.',
  },
] as const;

export default function ChatGPTvsClaudePage() {
  return (
    <ComparisonLayout tool1="chatgpt" tool2="claude" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">AI assistants · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            ChatGPT vs Claude: plans, pricing, and features
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            ChatGPT Plus and Claude Pro are individual subscriptions with different included tools and billing options. This comparison uses the vendors&apos; published plan details; it does not claim that one assistant writes, reasons, or codes better for every person.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-10-29">29 October 2026</time> · Desk research only; StackEvalify has not run a hands-on product test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            The listed monthly price is the same for both plans: US$20. Claude Pro has a lower effective monthly price if you pay US$200 upfront for a year; ChatGPT Plus currently has no annual billing. Choose by the tools you will actually use, then test both with the same representative tasks before committing.
          </p>
        </section>

        <section aria-labelledby="plan-comparison" className="border-b border-slate-800 py-8">
          <h2 id="plan-comparison" className="text-2xl font-bold text-white">Plan comparison</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            These are consumer web-app subscriptions, not an API price comparison. Both vendors can change plan details, model access, and usage limits; check the live plan page for your account and region before purchasing.
          </p>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Published ChatGPT Plus and Claude Pro details checked on 29 October 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr>
                  <th scope="col" className="p-4">Criteria</th>
                  <th scope="col" className="p-4">ChatGPT Plus</th>
                  <th scope="col" className="p-4">Claude Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.chatgpt}</td>
                    <td className="p-4 align-top leading-relaxed">{row.claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:hidden">
            {comparisonRows.map((row) => (
              <article key={row.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="font-bold text-white">{row.label}</h3>
                <dl className="mt-3 grid gap-3 text-sm">
                  <div>
                    <dt className="font-semibold text-blue-200">ChatGPT Plus</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.chatgpt}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-blue-200">Claude Pro</dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{row.claude}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            OpenAI says Plus usage limits may vary with system conditions and API usage is billed separately. Anthropic says usage limits apply; its annual Pro price is paid upfront. Vendor prices and plan terms can change; confirm the price shown at checkout before subscribing.
          </p>
        </section>

        <section aria-labelledby="workflow-fit" className="border-b border-slate-800 py-8">
          <h2 id="workflow-fit" className="text-2xl font-bold text-white">Match the plan to your workflow</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">When to shortlist ChatGPT Plus</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Consider it if you will use custom GPTs, scheduled tasks, projects, expanded deep research, or Codex. OpenAI lists these among the Plus features; availability and limits still depend on the current plan and account.
              </p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">When to shortlist Claude Pro</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Consider it if Claude Code, Claude projects, scheduled task hand-off, or the listed Claude integrations fit your work. Its annual option may also suit you if paying US$200 upfront is preferable to monthly billing.
              </p>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">
            Product feature lists do not prove which model is more accurate for your prompts. For a fair comparison, give both services the same project brief, source material, and success criteria; check factual claims and editing effort, then compare the results against your budget and limits.
          </p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">A practical way to decide</h2>
          <ol className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. List your real tasks.</strong> For example: code review, research with citations, long-document analysis, drafting, or recurring project work.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Run the same test in both.</strong> Use identical instructions and source files, then score accuracy, missed requirements, useful citations, and how much correction each answer needs.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Check the actual subscription terms.</strong> Confirm current features, usage limits, regional price, and whether the annual upfront payment makes sense for you.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            This page summarizes vendor-published subscription information checked on 29 October 2026. It is desk research, not independent usability testing. Prices, features, model access, and usage limits can change; verify details directly before purchase.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://chatgpt.com/pricing/" target="_blank" rel="noopener noreferrer">OpenAI ChatGPT plan pricing and feature comparison</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus" target="_blank" rel="noopener noreferrer">OpenAI Help Center: What is ChatGPT Plus?</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer">Anthropic Claude pricing and plan comparison</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
