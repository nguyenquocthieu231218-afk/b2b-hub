import ComparisonLayout from '@/app/components/ComparisonLayout';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Mailchimp vs ConvertKit (Kit) 2026: Subscriber Billing',
  description: 'Compare Mailchimp and Kit subscriber counting, duplicate contacts, email send limits, overages, automatic tier upgrades, and free-plan limits.',
  path: '/mailchimp-vs-convertkit',
});

const comparisonRows = [
  {
    label: 'How one person is counted',
    mailchimp: 'One email is deduplicated inside a single audience, but the same address in two audiences counts as two contacts toward the account total.',
    kit: 'Kit keeps one subscriber list. A person stays one subscriber even after joining several forms or landing pages, and is organized with tags and segments.',
  },
  {
    label: 'Free-plan ceiling',
    mailchimp: 'Up to 250 contacts, 500 sends/month, and 250 sends/day. Sending is paused when the contact or send limit is exceeded.',
    kit: 'Up to 10,000 active subscribers with unlimited forms, landing pages, and email broadcasts. Paid automation features are excluded.',
  },
  {
    label: 'Paid email send allowance',
    mailchimp: 'Essentials allows 10× the selected contact tier, Standard 12×, and Premium 15× each month.',
    kit: 'Kit states that all plans have unlimited email sends; subscriber count, rather than send volume, determines the paid tier.',
  },
  {
    label: 'What happens above the tier',
    mailchimp: 'Paid plans continue service and add one or more contact blocks to the bill. The block size and price depend on the plan and contact tier.',
    kit: 'Kit automatically moves a growing paid account to the next subscriber tier and applies prorated billing. It does not add a send-overage fee.',
  },
] as const;

export default function MailchimpVsConvertKitPage() {
  return (
    <ComparisonLayout tool1="mailchimp" tool2="convertkit" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Email marketing · Desk research</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Mailchimp vs ConvertKit: count people before comparing plan prices
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            ConvertKit is now called Kit. The bigger purchasing difference is not the name: Mailchimp can bill the same address once for every audience that contains it, while Kit stores one unique active subscriber and uses tags or segments for every interest and entry path.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Source check: <time dateTime="2026-11-09">9 November 2026</time> · Desk research only; StackEvalify has not run a hands-on deliverability test for this comparison.
          </p>
        </header>

        <section aria-labelledby="quick-take" className="border-b border-slate-800 py-8">
          <h2 id="quick-take" className="text-2xl font-bold text-white">Quick take</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Kit is easier to forecast when one customer can subscribe through several lead magnets: the person remains one active subscriber and email sends are unlimited. Mailchimp can be stronger for teams that need several genuinely separate audiences, but duplicate addresses, unsubscribed contacts, non-subscribed commerce contacts, and peak monthly storage can all raise the bill. Consolidate Mailchimp audiences with tags, groups, and segments before comparing tiers.
          </p>
        </section>

        <section aria-labelledby="limits" className="border-b border-slate-800 py-8">
          <h2 id="limits" className="text-2xl font-bold text-white">Subscriber and send limits</h2>
          <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="sr-only">Mailchimp and Kit subscriber billing checked on 9 November 2026</caption>
              <thead className="bg-slate-950 text-slate-200">
                <tr><th scope="col" className="p-4">Criteria</th><th scope="col" className="p-4">Mailchimp</th><th scope="col" className="p-4">Kit (ConvertKit)</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.label}</th>
                    <td className="p-4 align-top leading-relaxed">{row.mailchimp}</td>
                    <td className="p-4 align-top leading-relaxed">{row.kit}</td>
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
                  <div><dt className="font-semibold text-blue-200">Mailchimp</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.mailchimp}</dd></div>
                  <div><dt className="font-semibold text-blue-200">Kit (ConvertKit)</dt><dd className="mt-1 leading-relaxed text-slate-300">{row.kit}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="duplicates" className="border-b border-slate-800 py-8">
          <h2 id="duplicates" className="text-2xl font-bold text-white">Mailchimp audiences can multiply one contact</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Mailchimp removes duplicate addresses during import into one audience. It does not deduplicate across independent audiences. If the same address exists in Audience A and Audience B, Mailchimp treats it as two contacts and says that duplication can contribute to the monthly bill.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Kit uses one list and stores each subscriber once, regardless of how many forms or landing pages they joined. Tags record sources and actions; segments combine those attributes for targeting. In a simple model, 8,000 unique people duplicated across two Mailchimp audiences can occupy 16,000 contact records, while the same 8,000 active people remain 8,000 Kit subscribers. Actual billing still depends on contact status and account configuration.
          </p>
        </section>

        <section aria-labelledby="billable-contacts" className="border-b border-slate-800 py-8">
          <h2 id="billable-contacts" className="text-2xl font-bold text-white">An unsubscribed Mailchimp contact can still be billable</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            On Mailchimp&apos;s current pricing model, subscribed, unsubscribed, and non-subscribed contacts count toward the monthly contact limit. Cleaned, pending, archived, and deleted contacts do not. Archiving removes a contact from billing while preserving historical report data, but the contact cannot receive marketing messages while archived.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Mailchimp also bills against the peak contact total reached during the billing period. Reducing the audience after a spike does not rewrite that month&apos;s peak. Kit&apos;s pricing page defines its subscriber total as unique and active; subscriber tiers scale with that active count.
          </p>
        </section>

        <section aria-labelledby="overages" className="border-b border-slate-800 py-8">
          <h2 id="overages" className="text-2xl font-bold text-white">Over-tier charges are not the same policy</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Mailchimp: add-on contact blocks</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Paid service continues when contact storage or sends exceed the selected tier. Mailchimp adds a smaller contact block to the monthly bill, and multiple blocks can apply. A Standard block of 1,000 contacts includes 12,000 sends, but Mailchimp says block size and price vary by plan and tier—there is no honest universal overage price.</p>
            </article>
            <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Kit: automatic subscriber-tier upgrade</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Kit has no email-send overage because sends are unlimited. When a paid account crosses its subscriber ceiling, Kit upgrades it to the next tier. Monthly accounts pay the new monthly price at the next billing date plus a prorated charge for the current period; annual accounts are charged the prorated difference immediately.</p>
            </article>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Mailchimp Free behaves differently from paid plans: sending is held above the 250-contact or send allowance until the account upgrades or drops below the limit.</p>
        </section>

        <section aria-labelledby="decision" className="border-b border-slate-800 py-8">
          <h2 id="decision" className="text-2xl font-bold text-white">Run this billing audit before switching</h2>
          <ol className="mt-4 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Export every audience.</strong> Match normalized email addresses to measure cross-audience duplication.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Separate status from permission.</strong> Count subscribed, unsubscribed, non-subscribed, cleaned, archived, and active records independently.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Model a peak month.</strong> Multiply campaign frequency by recipients, then add growth, automations, tests, and seasonal sends.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Official pricing, billing, contact, and subscriber documentation checked on 9 November 2026. Deliverability, editor quality, and automation reliability were not hands-on tested.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer">Mailchimp marketing pricing</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/remove-duplicates-and-bounces-with-excel/" target="_blank" rel="noopener noreferrer">Mailchimp Help: duplicate contacts across audiences</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/about-additional-charges/" target="_blank" rel="noopener noreferrer">Mailchimp Help: additional charges and peak contacts</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://mailchimp.com/help/about-your-contacts/" target="_blank" rel="noopener noreferrer">Mailchimp Help: billable contact types</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://kit.com/pricing" target="_blank" rel="noopener noreferrer">Kit pricing and send policy</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.kit.com/en/articles/2502716-how-subscriber-organization-works-in-kit" target="_blank" rel="noopener noreferrer">Kit Help: unique subscriber organization</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.kit.com/en/articles/2537095-account-upgrade-downgrade-faqs" target="_blank" rel="noopener noreferrer">Kit Help: automatic tier upgrades and prorating</a></li>
            <li><a className="underline decoration-blue-400/50 underline-offset-4 hover:text-white" href="https://help.kit.com/en/articles/16627071-the-kit-free-plan" target="_blank" rel="noopener noreferrer">Kit Help: Free plan limits</a></li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
