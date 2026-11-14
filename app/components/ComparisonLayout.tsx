import Link from 'next/link';
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import Breadcrumbs from '../../components/Breadcrumbs';
import ComparisonAnalytics from '../../components/ComparisonAnalytics';
import JsonLd from '../../components/JsonLd';
import TableOfContents from '../../components/TableOfContents';
import { getArticleContent, getComparisonContext } from '@/lib/article-content';
import { getAffiliateLink } from '@/lib/affiliate-links';
import { getComparisonCro, type ComparisonFaq } from '@/lib/comparison-cro';
import { SITE_NAME, SITE_URL } from '@/lib/site';

interface ComparisonLayoutProps {
  children?: ReactNode;
  tool1?: string;
  tool2?: string;
  title?: string;
  description?: string;
  lead?: string;
  toolAName?: string;
  toolBName?: string;
  verdictText?: string;
  tableData?: Array<{
    metric: string;
    toolA: string;
    toolB: string;
  }>;
  coreDifferenceTextA?: string;
  coreDifferenceTextB?: string;
  recommendationA?: string;
  recommendationB?: string;
  showDraftNotice?: boolean;
}

type HtmlElementProps = {
  children?: ReactNode;
  href?: string;
  rel?: string;
  target?: string;
  [key: string]: unknown;
};

function normalizeOutboundLinks(nodes: ReactNode): ReactNode {
  return Children.map(nodes, (node) => {
    if (!isValidElement<HtmlElementProps>(node)) return node;
    const children = normalizeOutboundLinks(node.props.children);
    if (node.type === 'a' && typeof node.props.href === 'string' && /^https?:\/\//.test(node.props.href)) {
      return cloneElement(node, {
        target: '_blank',
        rel: 'nofollow sponsored noopener noreferrer',
        'data-track': node.props['data-track'] ?? 'outbound-source',
      }, children);
    }
    return cloneElement(node, {}, children);
  });
}

function injectArticleSections(nodes: ReactNode, quickVerdict: ReactElement, faqSection: ReactElement): ReactNode {
  return Children.map(nodes, (node) => {
    if (!isValidElement<HtmlElementProps>(node) || node.type !== 'article') return node;
    const articleChildren = Children.toArray(node.props.children);
    const headerIndex = articleChildren.findIndex((child) => isValidElement(child) && child.type === 'header');
    const insertionIndex = headerIndex >= 0 ? headerIndex + 1 : 0;
    articleChildren.splice(insertionIndex, 0, quickVerdict);
    articleChildren.push(faqSection);
    return cloneElement(node, {}, articleChildren);
  });
}

function faqSchema(articleUrl: string, faqs: readonly ComparisonFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${articleUrl}#faq`,
    url: `${articleUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export default function ComparisonLayout({
  children,
  tool1,
  tool2,
  title,
  description,
  lead,
  toolAName,
  toolBName,
  verdictText,
  tableData = [],
  coreDifferenceTextA,
  coreDifferenceTextB,
  recommendationA,
  recommendationB,
  showDraftNotice = true,
}: ComparisonLayoutProps) {
  const productA = toolAName
    ? { name: toolAName, href: getAffiliateLink(tool1)?.href }
    : getAffiliateLink(tool1);
  const productB = toolBName
    ? { name: toolBName, href: getAffiliateLink(tool2)?.href }
    : getAffiliateLink(tool2);
  const hasChildren = children !== undefined && children !== null;
  const pageTitle = title ?? `${productA?.name ?? 'Product A'} vs ${productB?.name ?? 'Product B'}`;
  const articleContent = getArticleContent(children);
  const { current: comparison, related: relatedComparisons } = getComparisonContext(tool1, tool2);
  const articleUrl = comparison ? `${SITE_URL}${comparison.href}` : undefined;
  const cro = getComparisonCro(comparison?.href);
  const faqs: ComparisonFaq[] = cro && productA && productB ? [
    cro.faq,
    {
      question: `Which is better for a team: ${productA.name} or ${productB.name}?`,
      answer: `There is no universal winner. ${cro.chooseA} ${cro.chooseB} Validate the shortlist with the same representative workflow and current vendor documentation.`,
    },
  ] : [];
  const quickVerdict = cro && productA && productB ? (
    <section key="quick-verdict" aria-labelledby="quick-verdict" className="border-b border-slate-800 py-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">TL;DR / Quick verdict</p>
      <h2 id="quick-verdict" className="mt-2 text-2xl font-bold text-white">Budget gates before approval</h2>
      {cro.verdictBullets ? (
        <ul className="mt-5 grid gap-3 text-slate-200">
          {cro.verdictBullets.map((bullet) => (
            <li key={bullet} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 leading-relaxed before:mr-3 before:text-emerald-300 before:content-['•']">{bullet}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-blue-400/25 bg-blue-400/5 p-5">
            <h3 className="font-bold text-white">Who should choose {productA.name}?</h3>
            <p className="mt-3 leading-relaxed text-slate-300">{cro.chooseA}</p>
          </article>
          <article className="rounded-xl border border-violet-400/25 bg-violet-400/5 p-5">
            <h3 className="font-bold text-white">Who should choose {productB.name}?</h3>
            <p className="mt-3 leading-relaxed text-slate-300">{cro.chooseB}</p>
          </article>
        </div>
      )}
      <a href={`#${cro.tableAnchor}`} data-track="quick-verdict-jump" className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
        {cro.verdictBullets ? 'Open the 12- and 24-month cost model' : 'Jump to the detailed comparison'} <span aria-hidden="true" className="ml-2">↓</span>
      </a>
    </section>
  ) : null;
  const faqSection = faqs.length > 0 ? (
    <section key="comparison-faq" aria-labelledby="faq" className="border-t border-slate-800 pt-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Common buying questions</p>
      <h2 id="faq" className="mt-2 text-2xl font-bold text-white">Frequently asked questions</h2>
      <div className="mt-5 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-xl border border-slate-800 bg-slate-950/60 p-5 open:border-slate-700">
            <summary className="cursor-pointer list-none pr-8 font-bold text-white marker:hidden">{faq.question}</summary>
            <p className="mt-3 leading-relaxed text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  ) : null;
  const enhancedChildren = quickVerdict && faqSection
    ? normalizeOutboundLinks(injectArticleSections(children, quickVerdict, faqSection))
    : normalizeOutboundLinks(children);

  return (
    <>
      <SiteHeader />
      {!showDraftNotice && comparison && articleUrl && articleContent.headline && articleContent.description && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `${articleUrl}#article`,
          headline: articleContent.headline,
          description: articleContent.description,
          url: articleUrl,
          mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
          inLanguage: 'en',
          dateModified: comparison.dateModified,
          author: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: `${SITE_URL}/about`,
          },
          publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, url: `${SITE_URL}/` },
          isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
        }} />
      )}
      {!showDraftNotice && articleUrl && faqs.length > 0 && <JsonLd data={faqSchema(articleUrl, faqs)} />}
      <main id="main-content" className="mx-auto min-h-screen w-full min-w-0 max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'Software comparisons', href: '/category/saas' },
          { name: pageTitle },
        ]} />

        {showDraftNotice && (
          <aside role="note" className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm leading-relaxed text-amber-100">
            <strong>Editorial draft · not ready to publish:</strong> Product features, plan limits, and prices need dated primary-source checks. The page stays out of search results until its evidence is reviewed. Product links currently point to official sites; any future affiliate relationship must be disclosed beside the link.
          </aside>
        )}

        <TableOfContents headings={articleContent.headings} />

        <ComparisonAnalytics path={comparison?.href ?? ''} className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl sm:p-8 lg:p-10 [&_h2[id]]:scroll-mt-40">
          {hasChildren ? (
            enhancedChildren
          ) : (
            <article>
              <header className="border-b border-slate-800 pb-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Product comparison</p>
                <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">{pageTitle}</h1>
                {(description || lead) && (
                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">{description ?? lead}</p>
                )}
              </header>

              {tableData.length > 0 && (
                <section aria-labelledby="at-a-glance" className="border-b border-slate-800 py-8">
                  <h2 id="at-a-glance" className="text-2xl font-bold text-white">At a glance</h2>
                  <div className="mt-5 hidden overflow-x-auto rounded-lg border border-slate-800 sm:block">
                    <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                      <caption className="sr-only">Comparison of {productA?.name ?? 'Product A'} and {productB?.name ?? 'Product B'}</caption>
                      <thead className="bg-slate-950 text-slate-200">
                        <tr>
                          <th scope="col" className="p-4">Criteria</th>
                          <th scope="col" className="p-4">{productA?.name ?? 'Product A'}</th>
                          <th scope="col" className="p-4">{productB?.name ?? 'Product B'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        {tableData.map((row) => (
                          <tr key={row.metric}>
                            <th scope="row" className="bg-slate-950/60 p-4 font-semibold text-white">{row.metric}</th>
                            <td className="p-4 align-top">{row.toolA}</td>
                            <td className="p-4 align-top">{row.toolB}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 grid gap-3 sm:hidden">
                    {tableData.map((row) => (
                      <article key={row.metric} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                        <h3 className="font-bold text-white">{row.metric}</h3>
                        <dl className="mt-3 grid gap-3 text-sm">
                          <div>
                            <dt className="font-semibold text-blue-200">{productA?.name ?? 'Product A'}</dt>
                            <dd className="mt-1 leading-relaxed text-slate-300">{row.toolA}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-blue-200">{productB?.name ?? 'Product B'}</dt>
                            <dd className="mt-1 leading-relaxed text-slate-300">{row.toolB}</dd>
                          </div>
                        </dl>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {(coreDifferenceTextA || coreDifferenceTextB) && (
                <section aria-labelledby="core-differences" className="border-b border-slate-800 py-8">
                  <h2 id="core-differences" className="text-2xl font-bold text-white">Core differences</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {coreDifferenceTextA && (
                      <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                        <h3 className="font-bold text-white">{productA?.name ?? 'Product A'}</h3>
                        <p className="mt-3 leading-relaxed text-slate-300">{coreDifferenceTextA}</p>
                      </article>
                    )}
                    {coreDifferenceTextB && (
                      <article className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                        <h3 className="font-bold text-white">{productB?.name ?? 'Product B'}</h3>
                        <p className="mt-3 leading-relaxed text-slate-300">{coreDifferenceTextB}</p>
                      </article>
                    )}
                  </div>
                </section>
              )}

              {(recommendationA || recommendationB) && (
                <section aria-labelledby="recommendations" className="border-b border-slate-800 py-8">
                  <h2 id="recommendations" className="text-2xl font-bold text-white">Who may prefer each option</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {recommendationA && (
                      <p className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 leading-relaxed text-slate-300">
                        <strong className="text-white">{productA?.name ?? 'Product A'}:</strong> {recommendationA}
                      </p>
                    )}
                    {recommendationB && (
                      <p className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 leading-relaxed text-slate-300">
                        <strong className="text-white">{productB?.name ?? 'Product B'}:</strong> {recommendationB}
                      </p>
                    )}
                  </div>
                </section>
              )}

              {verdictText && (
                <section aria-labelledby="verdict" className="pt-8">
                  <h2 id="verdict" className="text-2xl font-bold text-white">Summary</h2>
                  <p className="mt-4 leading-relaxed text-slate-300">{verdictText}</p>
                </section>
              )}
            </article>
          )}

          <div className="mt-8 grid gap-3 border-t border-slate-800 pt-6 sm:flex sm:flex-wrap">
            {productA?.href && (
              <a href={productA.href} target="_blank" rel="nofollow sponsored noopener noreferrer" data-track="affiliate-cta" data-vendor={productA.name} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Visit {productA.name} official site
              </a>
            )}
            {productB?.href && (
              <a href={productB.href} target="_blank" rel="nofollow sponsored noopener noreferrer" data-track="affiliate-cta" data-vendor={productB.name} className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300">
                Visit {productB.name} official site
              </a>
            )}
          </div>
        </ComparisonAnalytics>

        {relatedComparisons.length > 0 && (
          <section aria-labelledby="related-comparisons" className="mt-10">
            <h2 id="related-comparisons" className="text-2xl font-bold text-white">Continue your research</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">Explore comparisons with a shared product or a related workflow.</p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {relatedComparisons.map((related) => (
                <li key={related.href}>
                  <Link href={related.href} className="block h-full rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-300">{related.category}</p>
                    <h3 className="mt-3 text-lg font-bold text-white">{related.title}</h3>
                    <span className="mt-4 inline-flex text-sm font-semibold text-blue-300">Read comparison <span aria-hidden="true" className="ml-2">→</span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav aria-label="More StackEvalify resources" className="mt-6 grid gap-4 sm:grid-cols-3">
          <Link href="/guides/choose-b2b-software" className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm font-semibold text-blue-300 hover:border-slate-600 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Build your software shortlist <span aria-hidden="true">→</span>
          </Link>
          <Link href="/category/saas" className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm font-semibold text-blue-300 hover:border-slate-600 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Browse all software comparisons <span aria-hidden="true">→</span>
          </Link>
          <Link href="/methodology" className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm font-semibold text-blue-300 hover:border-slate-600 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Read the evaluation methodology <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
