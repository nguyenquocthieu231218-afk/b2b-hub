import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import { guides, guideMetadata } from '@/lib/guides';

const guide = guides[1];
export const metadata = guideMetadata(guide);
const contents = [
  { id: 'same-horizon', title: 'Choose the same cost horizon' },
  { id: 'cost-formula', title: 'Build the cost formula' },
  { id: 'worked-example', title: 'A hypothetical example' },
  { id: 'uncertainty', title: 'Show the uncertainty' },
  { id: 'quote-checklist', title: 'Check the written quote' },
  { id: 'decision', title: 'Use cost with workflow evidence' },
];

export default function SaasCostGuide() {
  return (
    <GuideLayout guide={guide} contents={contents}>
      <section id="same-horizon">
        <h2>1. Choose the same cost horizon</h2>
        <p>A monthly per-user headline is only one input to a purchase. Compare both candidates over the same period, using the same users, required features, expected usage, and currency. A 12-month operating estimate and a separate renewal-year estimate help distinguish launch work from recurring costs.</p>
        <p>Record whether a quoted rate is monthly billing or an annual commitment expressed per month. Keep cash due at signing separate from the cost attributed to each month. For a changing team, estimate billable seats month by month and check minimum seat commitments rather than multiplying today’s headcount by twelve.</p>
        <p>Write down what is included and what is still unknown. A blank integration or implementation line is not evidence that the item costs nothing.</p>
      </section>
      <section id="cost-formula">
        <h2>2. Build the cost formula</h2>
        <p className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5 font-semibold text-blue-100">Estimated period cost = subscription + usage and add-ons + implementation and training + integration and administration + transition and exit work.</p>
        <ul>
          <li><strong>Subscription:</strong> Billable seats or other charged units, the required edition, and the applicable rate for each period.</li>
          <li><strong>Usage and add-ons:</strong> Credits, automations, contacts, storage, or other charges relevant to the quoted product.</li>
          <li><strong>Implementation:</strong> Migration, configuration, training, and paid onboarding that the team actually needs.</li>
          <li><strong>Operating effort:</strong> Internal time or external services required to maintain integrations, permissions, and reports.</li>
          <li><strong>Transition:</strong> Overlapping subscriptions, export work, and any contractual costs associated with moving.</li>
        </ul>
        <p>Track taxes, currency conversion, and financing separately if they apply. The formula is a planning worksheet, not an accounting rule or a statement that every vendor charges each item. Avoid counting the same implementation hours under both a supplier fee and internal labor.</p>
      </section>
      <section id="worked-example">
        <h2>3. A hypothetical first-year example</h2>
        <p><strong>Illustration only:</strong> These invented figures are not prices or terms for any named product. Suppose a team models 15 constant billable seats at $20 per seat per month for twelve months, plus a $50 monthly add-on, $800 implementation, and 20 hours of internal setup at an assumed $40 per hour.</p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Hypothetical first-year SaaS cost calculation in US dollars</caption>
            <thead><tr className="bg-slate-900"><th scope="col" className="p-4">Cost item</th><th scope="col" className="p-4">Calculation</th><th scope="col" className="p-4">Amount</th></tr></thead>
            <tbody className="divide-y divide-slate-800">
              <tr><th scope="row" className="p-4">Subscription</th><td className="p-4">15 × $20 × 12</td><td className="p-4">$3,600</td></tr>
              <tr><th scope="row" className="p-4">Add-on</th><td className="p-4">$50 × 12</td><td className="p-4">$600</td></tr>
              <tr><th scope="row" className="p-4">Implementation</th><td className="p-4">One-time assumption</td><td className="p-4">$800</td></tr>
              <tr><th scope="row" className="p-4">Internal setup</th><td className="p-4">20 hours × $40</td><td className="p-4">$800</td></tr>
              <tr className="bg-slate-900 font-bold text-white"><th scope="row" className="p-4">Modeled first-year total</th><td className="p-4">Sum of the four lines</td><td className="p-4">$5,800</td></tr>
            </tbody>
          </table>
        </div>
        <p>In this example, $5,800 includes $800 of internal labor; the modeled supplier spend is $5,000 before any omitted items. Taxes, integration maintenance, overlap, and exit costs are not included because no assumptions were supplied for them. Add those lines before treating the estimate as complete.</p>
      </section>
      <section id="uncertainty">
        <h2>4. Show the uncertainty</h2>
        <p>Create a base case and a plausible higher-use case. Change the inputs that could alter the decision: seat growth, usage above an allowance, a necessary edition upgrade, or more migration effort. Label every figure as quoted, measured, estimated, or unknown.</p>
        <p>If a feature is required but its price is “contact sales,” request a written quote for the full scope. Keep the comparison incomplete until you have it; substituting a lower public plan rate produces a precise-looking answer to the wrong question.</p>
      </section>
      <section id="quote-checklist">
        <h2>5. Check the written quote</h2>
        <ul><li>Which edition, users, charged units, and capabilities are included?</li><li>What allowances, overage rates, minimums, or true-up rules apply?</li><li>When does a promotional rate end, and how is renewal priced?</li><li>Which onboarding, support, integration, or security capabilities cost extra?</li><li>What are the payment schedule, cancellation window, and export arrangements?</li></ul>
        <p>Save the dated quote and the assumptions beside the worksheet. Ask the appropriate finance, procurement, or legal owner to review terms that fall within their responsibility.</p>
      </section>
      <section id="decision">
        <h2>6. Use cost with workflow evidence</h2>
        <p>The lowest estimate is useful only if the product meets the accepted requirements. Pair this worksheet with the <Link href="/guides/choose-b2b-software">software selection and pilot checklist</Link>. Record an unresolved requirement as a risk instead of assuming a more expensive tier will fix it.</p>
        <p>For product-specific research, start with <Link href="/hubspot-vs-salesforce">HubSpot vs Salesforce</Link>, <Link href="/pipedrive-vs-hubspot">Pipedrive vs HubSpot</Link>, or <Link href="/zapier-vs-make">Zapier vs Make</Link>. Check each comparison’s source date, then confirm current rates and billable units directly with the vendor.</p>
      </section>
    </GuideLayout>
  );
}
