import ComparisonLayout from '@/app/components/ComparisonLayout';
import TcoCalculator from '@/app/components/TcoCalculator';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import { tcoConfigs } from '@/lib/tco-configs';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Deel vs Remote TCO Calculator (2026): FX, Deposits and EOR Cost',
  description: 'Compare Deel and Remote over 12 and 24 months with EOR headcount, contractors, FX assumptions, refundable reserves, implementation, and renewal inputs.',
  path: '/deel-vs-remote',
});

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 hover:text-white';

export default function DeelVsRemotePage() {
  return (
    <ComparisonLayout tool1="deel" tool2="remote" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">HR &amp; payroll · CFO audit</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Deel vs Remote: price the EOR bill, FX, and refundable cash
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Both vendors publish a $599 EOR starting price on an annual commitment. That does not settle a purchase decision. The approved budget must identify the actual employing entity in each country and normalize worker fees, invoice currency, FX mechanics, refundable cash, contract term, and employment liabilities over 24 months.</p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-15">15 November 2026</time> · US vendor pages · USD · desk research, not payroll, legal, or tax advice</p>
        </header>

        <section aria-labelledby="pricing-model" className="border-b border-slate-800 py-8">
          <h2 id="pricing-model" className="text-2xl font-bold text-white">Build the 12- and 24-month invoice</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">Use the same EOR employees, contractors, salaries, and invoice volumes for both vendors. Replace every editable scenario input with the signed quote. The cash-flow deposit appears outside TCO because it is refundable if all final invoices and employment liabilities are settled.</p>
          <TcoCalculator config={tcoConfigs['deel-vs-remote']} />
          <p className="mt-5 rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 text-sm leading-relaxed text-blue-100"><strong>Audit Baseline (Nov 15, 2026):</strong> Modeled from vendor public pricing schedules &amp; standard MSA terms. Excludes custom enterprise volume discounts and statutory local employer taxes.</p>
        </section>

        <section aria-labelledby="entity-ownership" className="border-b border-slate-800 py-8">
          <h2 id="entity-ownership" className="text-2xl font-bold text-white">Verify the employing entity country by country</h2>
          <p className="mt-4 leading-relaxed text-slate-300">A procurement memo should not describe Remote as the owned-entity vendor and Deel as a partner-only network. Remote says its EOR entities are 100% owned. Deel says it owns more than 250 entities. Neither network-wide statement proves which legal entity will employ a worker in one target country.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Required before signature</h3>
              <p className="mt-3 leading-relaxed text-slate-300">For every hiring country, record the legal employer name, registration number, ownership status, payroll account, data-processing role, and entity that signs the employment agreement.</p>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-bold text-white">Escalate exceptions</h3>
              <p className="mt-3 leading-relaxed text-slate-300">If the named employer is a partner or the contract permits substitution, require the subcontractor, liability allocation, service-level, data-transfer, and termination provisions before approving that country.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="fx-and-reserves" className="border-b border-slate-800 py-8">
          <h2 id="fx-and-reserves" className="text-2xl font-bold text-white">FX and reserves can move cash without changing the headline fee</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
              <h3 className="font-bold text-white">Deel</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Deel says its banking partners calculate a forward rate between invoice availability and payment, and the rate locks when the invoice is funded. Its standard EOR deposit is 1–1.5 times all monthly charges, including salary, employer costs, allowances, and management fee, subject to country and contract terms.</p>
            </article>
            <article className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <h3 className="font-bold text-white">Remote</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Remote says it fixes an FX rate for each monthly billing cycle. Its Help Center says the standard EOR reserve is typically one month of total cost of employment; its pricing FAQ says no standard deposit applies and a reserve is required only in some circumstances. Put the reserve or written waiver in the order form.</p>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">Run the same invoice in the worker&apos;s salary currency and the buyer&apos;s funding currency. Record the reference rate, markup or spread, lock timestamp, refund currency, payment-method fee, and who absorbs gains or losses after payroll corrections.</p>
        </section>

        <section aria-labelledby="termination-boundary" className="border-b border-slate-800 py-8">
          <h2 id="termination-boundary" className="text-2xl font-bold text-white">Do not combine software cancellation with employee severance</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
              <h3 className="font-bold text-white">Software cancellation and commercial terms</h3>
              <p className="mt-3 leading-relaxed text-slate-300">The order form controls the subscription term, minimum commitment, notice deadline, auto-renewal, early-termination charge, unused prepaid fees, country-removal rules, and any non-refundable implementation work. These are vendor-contract costs.</p>
            </article>
            <article className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
              <h3 className="font-bold text-amber-100">Statutory employee notice and severance</h3>
              <p className="mt-3 leading-relaxed text-slate-300">Notice, severance, accrued leave, mandatory benefits, tax, and termination procedure depend on country law, tenure, compensation, employee status, and reason for dismissal. These are employment liabilities, not software cancellation fees.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="quote-test" className="border-b border-slate-800 py-8">
          <h2 id="quote-test" className="text-2xl font-bold text-white">Four controls before budget approval</h2>
          <ol className="mt-5 grid gap-3 text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">1. Match the population.</strong> Use the same employees, contractors, countries, salaries, start dates, annual commitment, and growth case in both quotes.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">2. Identify every employer.</strong> Attach the legal name and registration number of the employing entity for each target country.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">3. Reconcile cash and expense.</strong> Keep refundable deposits or reserves outside expense TCO while showing the working-capital requirement and refund conditions.</li>
            <li className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 leading-relaxed"><strong className="text-white">4. Price the exit.</strong> Model software cancellation under the commercial agreement and employee termination under each country&apos;s law as separate schedules.</li>
          </ol>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Vendor pricing and Help Center pages checked 15 November 2026 supply the public starting rates and billing mechanics below. Editable FX and renewal percentages remain scenario inputs until the signed order form fixes them. This analysis does not replace country-specific legal, tax, payroll, security, or procurement review.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className={sourceClass} href="https://www.deel.com/pricing/">Deel pricing</a> — EOR and contractor starting prices.</li>
            <li><a className={sourceClass} href="https://www.deel.com/blog/how-to-choose-an-employer-of-record-a-procurement-buyers-guide/">Deel EOR procurement guide</a> — owned-entity disclosure and country-level due-diligence questions.</li>
            <li><a className={sourceClass} href="https://help.letsdeel.com/hc/en-gb/articles/4407745380241-About-Exchange-Rates-and-Fees">Deel exchange rates and fees</a> — forward-rate timing, invoice currency, and payment fees.</li>
            <li><a className={sourceClass} href="https://help.letsdeel.com/hc/en-gb/articles/15574494993297-About-EOR-Deposit-Calculations">Deel EOR deposit calculation</a> — deposit basis and refund mechanics.</li>
            <li><a className={sourceClass} href="https://remote.com/pricing">Remote pricing</a> — annual EOR, Global Payroll, contractor pricing, and reserve FAQ.</li>
            <li><a className={sourceClass} href="https://remote.com/global-hr/employer-of-record">Remote EOR</a> — owned-entity model and service scope.</li>
            <li><a className={sourceClass} href="https://support.remote.com/pricing/client-pricing-and-billing/remote-fx-rate">Remote FX rate</a> — monthly-cycle exchange-rate method.</li>
            <li><a className={sourceClass} href="https://support.remote.com/eor/Reserve-payments/1-reserve-payments">Remote reserve payments</a> — standard reserve calculation, exceptions, and refund conditions.</li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
