import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import { guides, guideMetadata } from '@/lib/guides';

const guide = guides[0];
export const metadata = guideMetadata(guide);
const contents = [
  { id: 'decision-brief', title: 'Write the decision brief' },
  { id: 'requirements', title: 'Separate gates from preferences' },
  { id: 'pilot', title: 'Run the same pilot' },
  { id: 'worksheet', title: 'Use a decision worksheet' },
  { id: 'acceptance', title: 'Check acceptance and exit' },
  { id: 'next-step', title: 'Make the next step explicit' },
];

export default function ChooseSoftwareGuide() {
  return (
    <GuideLayout guide={guide} contents={contents}>
      <section id="decision-brief">
        <h2>1. Write the decision brief</h2>
        <p>Start with one job the team needs to do better. “Replace our task tool” is too broad to test. “Let a support request become an assigned engineering issue without retyping the customer context” gives a pilot a clear beginning and end.</p>
        <p>Record the current problem, who experiences it, the workflow volume, and the change you expect. Choose a decision owner and include an everyday user and the person who will administer the service. A feature can look useful in a demo while creating work for the team that must maintain it.</p>
        <ul><li><strong>Outcome:</strong> What should become faster, less error-prone, or easier to audit?</li><li><strong>Boundary:</strong> Which workflow, team, and data are in scope?</li><li><strong>Constraint:</strong> What budget, rollout date, or integration must the choice respect?</li></ul>
      </section>
      <section id="requirements">
        <h2>2. Separate gates from preferences</h2>
        <p>Use pass/fail gates for requirements that cannot be traded away. Examples might include export of necessary records, a required integration, or an access-control capability. Name the exact plan that supplies each capability; a product-level feature list does not establish that it is included in the edition you can buy.</p>
        <p>Keep preferences in a second list and rank them before viewing vendor demos. That avoids changing the scoring rules to favor the most polished presentation. Leave a requirement as “unknown” until there is evidence instead of converting a sales statement into a pass.</p>
        <p>Ask your security or data owner which controls matter for the proposed data. The <a href="https://www.ncsc.gov.uk/collection/cloud/the-cloud-security-principles" target="_blank" rel="nofollow sponsored noopener noreferrer">NCSC Cloud Security Principles</a> provide a useful structure for questions about identity, user management, audit information, and data protection. This is a source for your assessment questions, not a certification of any product.</p>
      </section>
      <section id="pilot">
        <h2>3. Run the same pilot</h2>
        <p>Shortlist a manageable number of candidates and give each the same representative task, users, sample data, and completion criteria. Avoid sensitive production data until the relevant owner approves its use. Record the tested plan, date, configuration, and any vendor assistance.</p>
        <ol><li>Import a small, representative dataset and check whether required fields survive.</li><li>Complete the workflow with a normal user account, not only an administrator.</li><li>Test the integration with a failure case: a duplicate record, missing permission, or interrupted step.</li><li>Export the result and verify that another person can interpret and reuse it.</li></ol>
        <p>Observe where users need help. If you measure task time or errors, document the method and repeat the same conditions. A single successful demo is evidence that a path exists, not proof that a team can operate it reliably.</p>
      </section>
      <section id="worksheet">
        <h2>4. Use a decision worksheet</h2>
        <p>Copy this record for each candidate. Attach a screenshot, export, source URL, or test note to each important result so another person can challenge the conclusion.</p>
        <dl className="mt-4 grid gap-4 rounded-xl border border-slate-700 bg-slate-900 p-5 sm:grid-cols-2">
          <div><dt className="font-bold text-white">Product and edition</dt><dd>Exact plan, billing basis, and pilot configuration.</dd></div>
          <div><dt className="font-bold text-white">Requirement and owner</dt><dd>What must work and who accepts the result.</dd></div>
          <div><dt className="font-bold text-white">Evidence and status</dt><dd>Pass, fail, or unknown, with the supporting artifact.</dd></div>
          <div><dt className="font-bold text-white">Trade-off and action</dt><dd>Remaining limitation, cost, follow-up owner, and deadline.</dd></div>
        </dl>
        <p>Score preferences only after gates are resolved. If two tools are close, show the disagreement and the uncertainty rather than hiding them inside one impressive-looking total.</p>
      </section>
      <section id="acceptance">
        <h2>5. Check acceptance and exit</h2>
        <ul><li>Can an administrator add and remove access in the intended way?</li><li>Can the everyday user complete the chosen task without undocumented workarounds?</li><li>Do integrations and required controls fit the purchased plan?</li><li>Are the full cost, renewal assumptions, and cancellation terms recorded?</li><li>Can the team export the data it would need to move away?</li></ul>
        <p>Decide which unresolved issue blocks purchase and which has a named mitigation. Include migration effort and the time spent running the old and new tools together. Use the <Link href="/guides/saas-total-cost">SaaS total-cost worksheet</Link> to compare those costs on the same horizon.</p>
      </section>
      <section id="next-step">
        <h2>6. Make the next step explicit</h2>
        <p>Finish with a short decision: selected edition, reason, rejected alternatives, evidence links, outstanding risks, and the date the decision will be revisited. A defensible “not yet” is useful when a critical requirement remains unverified.</p>
        <p>Start product research with <Link href="/linear-vs-jira">Linear vs Jira</Link> for issue tracking, <Link href="/clickup-vs-monday">ClickUp vs monday.com</Link> for project work, or <Link href="/hubspot-vs-salesforce">HubSpot vs Salesforce</Link> for CRM. These source-based comparisons help frame questions; your own workflow test should determine the final fit.</p>
      </section>
    </GuideLayout>
  );
}
