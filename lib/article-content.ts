import { Children, isValidElement, type ReactElement, type ReactNode } from 'react';
import { comparisons } from './comparisons';

type ContentProps = {
  children?: ReactNode;
  id?: string;
  hidden?: boolean;
  'aria-hidden'?: boolean | 'true' | 'false';
};

export type ArticleHeading = {
  id: string;
  text: string;
};

function isHidden(element: ReactElement<ContentProps>) {
  return element.props.hidden || element.props['aria-hidden'] === true || element.props['aria-hidden'] === 'true';
}

function visitElements(nodes: ReactNode, visit: (element: ReactElement<ContentProps>) => void) {
  Children.forEach(nodes, (node) => {
    if (!isValidElement<ContentProps>(node) || isHidden(node)) return;
    if (node.type === 'script' || node.type === 'style') return;
    visit(node);
    visitElements(node.props.children, visit);
  });
}

function contentText(nodes: ReactNode): string {
  const parts: string[] = [];
  Children.forEach(nodes, (node) => {
    if (typeof node === 'string' || typeof node === 'number' || typeof node === 'bigint') {
      parts.push(String(node));
    } else if (isValidElement<ContentProps>(node) && !isHidden(node)) {
      if (node.type === 'br') parts.push(' ');
      else if (node.type !== 'script' && node.type !== 'style') parts.push(contentText(node.props.children));
    }
  });
  return parts.join('');
}

function normalizedText(nodes: ReactNode) {
  return contentText(nodes).replace(/\s+/g, ' ').trim();
}

// Inspect supplied elements without invoking components or changing the article tree.
export function getArticleContent(nodes: ReactNode) {
  const headings: ArticleHeading[] = [];
  const seenIds = new Set<string>();
  let header: ReactElement<ContentProps> | undefined;

  visitElements(nodes, (element) => {
    if (!header && element.type === 'header') header = element;
    if (element.type !== 'h2' || typeof element.props.id !== 'string' || !element.props.id.trim()) return;
    const text = normalizedText(element.props.children);
    if (!text || seenIds.has(element.props.id)) return;
    seenIds.add(element.props.id);
    headings.push({ id: element.props.id, text });
  });

  let headline = '';
  let description = '';
  if (header) {
    visitElements(header.props.children, (element) => {
      if (!headline && element.type === 'h1') headline = normalizedText(element.props.children);
      else if (headline && !description && element.type === 'p') description = normalizedText(element.props.children);
    });
  }

  return { headings, headline, description };
}

type Comparison = typeof comparisons[number];

const relatedCategories: Record<string, readonly string[]> = {
  SEO: ['Website builders', 'Commerce platforms', 'Email marketing'],
  Workspaces: ['Project management', 'Workflow automation', 'AI assistants'],
  'Project management': ['Issue tracking', 'Workspaces', 'Team communication'],
  'AI assistants': ['Workspaces', 'Workflow automation', 'Issue tracking'],
  CRM: ['Email marketing', 'Workflow automation', 'Commerce platforms'],
  'Email marketing': ['CRM', 'Commerce platforms', 'Workflow automation'],
  'Issue tracking': ['Project management', 'Workspaces', 'Team communication'],
  'Commerce platforms': ['Website builders', 'Email marketing', 'CRM'],
  'Team communication': ['Project management', 'Workspaces', 'Issue tracking'],
  'Website builders': ['SEO', 'Commerce platforms', 'Email marketing'],
  'Workflow automation': ['Workspaces', 'CRM', 'Project management'],
  'Customer support': ['CRM', 'Team communication', 'Workflow automation'],
};

// Keep high-intent topic clusters reciprocal before filling the remaining slots
// with the broader product/category relevance score below.
const comparisonClusters: readonly (readonly string[])[] = [
  ['/clickup-vs-notion', '/asana-vs-trello', '/jira-vs-monday', '/linear-vs-jira'],
  ['/hubspot-vs-salesforce', '/pipedrive-vs-hubspot', '/zendesk-vs-freshdesk'],
  ['/mailchimp-vs-activecampaign', '/mailchimp-vs-convertkit'],
];

export function getComparisonContext(tool1?: string, tool2?: string) {
  const current = comparisons.find(({ href }) => href === `/${tool1}-vs-${tool2}` || href === `/${tool2}-vs-${tool1}`);
  if (!current) return { current, related: [] as Comparison[] };

  const currentTools = current.href.slice(1).split('-vs-');
  const categoryOrder = relatedCategories[current.category] ?? [];
  const currentCluster = comparisonClusters.find((cluster) => cluster.includes(current.href));
  const score = (comparison: Comparison) => {
    const sharedTools = comparison.href.slice(1).split('-vs-').filter((tool) => currentTools.includes(tool)).length;
    const categoryIndex = categoryOrder.indexOf(comparison.category);
    const clusterPriority = currentCluster?.includes(comparison.href) ? 1_000 : 0;
    return clusterPriority + sharedTools * 100 + (comparison.category === current.category ? 30 : categoryIndex >= 0 ? 20 - categoryIndex : 0);
  };

  const related = comparisons
    .filter((comparison) => comparison.href !== current.href)
    .map((comparison, index) => ({ comparison, index, relevance: score(comparison) }))
    .sort((a, b) => b.relevance - a.relevance || a.index - b.index)
    .slice(0, 3)
    .map(({ comparison }) => comparison);

  return { current, related };
}
