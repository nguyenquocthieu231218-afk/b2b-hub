export const eorCalculatorComparisonPaths = [
  '/deel-vs-rippling',
  '/deel-vs-remote',
  '/rippling-vs-gusto',
  '/deel-vs-oyster',
] as const;

export const auditedTools = [
  {
    title: 'EOR Cost Calculator',
    href: '/eor-cost-calculator',
    description: 'Compare 12- and 24-month EOR management fees, FX exposure, contractor fees, and refundable deposit pressure across Deel, Remote, and Oyster.',
    dateModified: '2026-11-20',
    isAudited: true,
    hasCalculator: true,
  },
] as const;

export const indexableTools = auditedTools.filter(({ isAudited, hasCalculator }) => isAudited && hasCalculator);

export function getAuditedToolByPath(path: string) {
  return auditedTools.find((tool) => tool.href === path);
}

export function linksToEorCalculator(path: string | undefined) {
  return eorCalculatorComparisonPaths.some((comparisonPath) => comparisonPath === path);
}
