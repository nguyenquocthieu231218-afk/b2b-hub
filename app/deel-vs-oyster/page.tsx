import ComparisonLayout from '@/app/components/ComparisonLayout';
import TcoCalculator from '@/app/components/TcoCalculator';
import { sourceCheckedComparisonMetadata } from '@/lib/seo';
import { tcoConfigs } from '@/lib/tco-configs';

export const metadata = sourceCheckedComparisonMetadata({
  title: 'Deel vs Oyster TCO Calculator (2026): Annual Seats, FX and EOR Deposits',
  description: 'Compare Deel and Oyster over 12 and 24 months with EOR fees, annual seat prepayment, contractors, FX assumptions, refundable deposits, and renewal risk.',
  path: '/deel-vs-oyster',
});

const sourceClass = 'underline decoration-blue-400/50 underline-offset-4 hover:text-white';

export default function DeelVsOysterPage() {
  return (
    <ComparisonLayout tool1="deel" tool2="oyster" showDraftNotice={false}>
      <article>
        <header className="border-b border-slate-800 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">HR &amp; payroll · CFO audit</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">Deel vs Oyster: price annual seats, FX, and refundable EOR cash</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Deel publishes an EOR starting rate of $599 per employee per month. Oyster publishes $699 month-to-month and offers a lower negotiated annual seat rate, but the annual amount is prepaid and non-refundable. The budget decision depends on the signed discount, seat utilization, FX path, deposit, and country liabilities—not the monthly headline alone.</p>
          <p className="mt-4 text-sm text-slate-400">Source check: <time dateTime="2026-11-15">15 November 2026</time> · US vendor pages · USD · desk research, not payroll, legal, or tax advice</p>
        </header>

        <section aria-labelledby="pricing-model" className="border-b border-slate-800 py-8">
          <h2 id="pricing-model" className="text-2xl font-bold text-white">Build the 12- and 24-month invoice</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">The Oyster baseline below uses its public $699 monthly rate. To test annual, replace the Oyster EOR input with the signed annual price divided by 12, run the same workforce again, and compare the saving with prepaid vacant-seat exposure. Replace FX and renewal assumptions with the signed schedules for both vendors.</p>
          <TcoCalculator config={tcoConfigs['deel-vs-oyster']} />
          <p className="mt-5 rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 text-sm leading-relaxed text-blue-100"><strong>Audit Baseline (Nov 15, 2026):</strong> Modeled from vendor public pricing schedules &amp; standard MSA terms. Excludes custom enterprise volume discounts and statutory local employer taxes.</p>
        </section>

        <section aria-labelledby="annual-seat-math" className="border-b border-slate-800 py-8">
          <h2 id="annual-seat-math" className="text-2xl font-bold text-white">Oyster annual trades a negotiated discount for prepaid utilization risk</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Monthly baseline</h3><p className="mt-3 leading-relaxed text-slate-300">Oyster lists EOR at $699 per employee per month. This is the public comparison baseline when no annual quote is available.</p></article>
            <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="font-bold text-white">Annual discount</h3><p className="mt-3 leading-relaxed text-slate-300">Oyster says annual seats receive a reduced negotiated rate but publishes no universal discount. Annual, semi-annual, and quarterly terms can have different per-seat prices.</p></article>
            <article className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5"><h3 className="font-bold text-amber-100">Prepayment exposure</h3><p className="mt-3 leading-relaxed text-slate-300">Annual is invoiced upfront, net 30, and non-refundable. An empty seat can be reused for a backfill, but the prepaid cash remains committed when hiring pauses.</p></article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300"><strong className="text-white">CFO formula:</strong> annual saving = ($699 − signed annual monthly equivalent) × purchased seats × 12. Subtract the signed annual rate × forecast vacant-seat months, then add the working-capital cost of prepayment before calling annual cheaper.</p>
        </section>

        <section aria-labelledby="fx-and-deposits" className="border-b border-slate-800 py-8">
          <h2 id="fx-and-deposits" className="text-2xl font-bold text-white">FX and deposits are separate cash controls</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5"><h3 className="font-bold text-white">Deel</h3><p className="mt-3 leading-relaxed text-slate-300">Deel says a banking-partner forward rate is calculated between invoice availability and payment and locks when the invoice is funded. Its standard deposit is 1–1.5 times monthly charges, subject to country and contract terms.</p></article>
            <article className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5"><h3 className="font-bold text-white">Oyster</h3><p className="mt-3 leading-relaxed text-slate-300">Oyster says it charges currency conversion when payment currency differs from contract currency. Its normal refundable deposit is approximately one month of total cost of services, including platform fee, and the terms permit a higher or supplementary deposit.</p></article>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">The calculator&apos;s percentage and salary-month inputs are scenario proxies. The approval model must use the actual invoice currency, payment currency, reference-rate date, conversion fee, total-cost deposit basis, refund timing, and any right to increase security cash.</p>
        </section>

        <section aria-labelledby="exit-boundary" className="border-b border-slate-800 py-8">
          <h2 id="exit-boundary" className="text-2xl font-bold text-white">Separate subscription exit from employee termination</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5"><h3 className="font-bold text-white">Software and seat commitment</h3><p className="mt-3 leading-relaxed text-slate-300">Record annual-seat non-refundability, reuse rights, overage fees, renewal notice, price cap, country removal, minimums, and the treatment of unused prepaid subscriptions.</p></article>
            <article className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5"><h3 className="font-bold text-amber-100">Statutory employment liabilities</h3><p className="mt-3 leading-relaxed text-slate-300">Notice, severance, accrued leave, benefits, taxes, claims, and local termination procedure depend on jurisdiction and employee facts. Deposits may secure these amounts; they are not software cancellation fees.</p></article>
          </div>
        </section>

        <section aria-labelledby="sources" className="pt-8">
          <h2 id="sources" className="text-2xl font-bold text-white">Sources and method</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Vendor pricing, Help Center, and legal pages checked 15 November 2026 supply the published rates and billing mechanics. Neither vendor publishes one universal FX percentage, and Oyster does not publish one annual-seat discount; the editable model must be reconciled to signed documents.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-blue-200">
            <li><a className={sourceClass} href="https://www.deel.com/pricing/">Deel pricing</a> — EOR and contractor starting prices.</li>
            <li><a className={sourceClass} href="https://help.letsdeel.com/hc/en-gb/articles/4407745380241-About-Exchange-Rates-and-Fees">Deel exchange rates and fees</a> — rate timing, invoice currency, and payment fees.</li>
            <li><a className={sourceClass} href="https://help.letsdeel.com/hc/en-gb/articles/15574494993297-About-EOR-Deposit-Calculations">Deel EOR deposits</a> — standard deposit range and refund mechanics.</li>
            <li><a className={sourceClass} href="https://www.oysterhr.com/pricing">Oyster pricing</a> — monthly EOR rate, annual option, FX trigger, and deposit disclosure.</li>
            <li><a className={sourceClass} href="https://support.oysterhr.com/hc/en-us/articles/13566621374353-How-Does-EOR-Annual-Work">Oyster annual EOR</a> — prepaid seats, negotiated discount, non-refundability, reuse, and renewal cap.</li>
            <li><a className={sourceClass} href="https://support.oysterhr.com/hc/en-us/articles/34221683638289-Why-is-a-deposit-required">Oyster deposit requirements</a> — normal total-cost basis, refund conditions, and possible increases.</li>
            <li><a className={sourceClass} href="https://legal.oysterhr.com/legal/terms">Oyster customer terms</a> — deposits, administrative costs, transition costs, and invoice obligations.</li>
          </ul>
        </section>
      </article>
    </ComparisonLayout>
  );
}
