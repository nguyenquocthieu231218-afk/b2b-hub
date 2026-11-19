import { indexableTools } from '@/lib/audited-tools';
import { indexableComparisons } from '@/lib/comparisons';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

function auditedResources() {
  const tools = indexableTools
    .filter(({ isAudited, hasCalculator }) => isAudited && hasCalculator)
    .map(({ title, href, description }) => ({
      title,
      description,
      url: new URL(href, SITE_URL).href,
    }));
  const comparisons = indexableComparisons
    .filter(({ isAudited, hasCalculator }) => isAudited && hasCalculator)
    .map(({ title, href, category }) => ({
      title,
      description: `Audited 12- and 24-month TCO comparison for ${category.toLowerCase()} procurement.`,
      url: new URL(href, SITE_URL).href,
    }));

  return [...tools, ...comparisons];
}

export function GET() {
  const resources = auditedResources();
  const resourceLines = resources.map(({ title, description, url }) => `- ${title}: ${description} Canonical URL: ${url}`);
  const body = [
    '# StackEvalify',
    '',
    '> Independent B2B software cost models for procurement, finance, RevOps, and operations teams.',
    '',
    '## Audit methodology',
    '',
    'StackEvalify normalizes public vendor pricing into 12- and 24-month total-cost-of-ownership scenarios. The models separate advertised recurring fees from EOR security deposits or reserves, foreign-exchange spread sensitivity, implementation and onboarding charges, required platform fees, add-ons, and renewal uplift. Refundable deposits are reported as cash-flow exposure rather than vendor revenue. Public rates are screening baselines, not signed quotes, legal advice, payroll advice, or tax advice.',
    '',
    `Full methodology: ${SITE_URL}/methodology`,
    '',
    '## Audited calculators and comparisons',
    '',
    ...resourceLines,
    '',
    'Only audited pages with an active calculator are listed here. Draft comparisons and measured redirect routes are intentionally excluded.',
    '',
  ].join('\n');

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
