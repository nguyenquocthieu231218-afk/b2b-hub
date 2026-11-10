# StackEvalify SEO & CRO standards

Apply these rules to every published comparison page. They are release gates, not optional style guidance.

## Evidence and editorial integrity

- Use current first-party vendor pricing, legal, product, or help documentation. Record the exact source-check date in the visible article and in `lib/comparisons.ts`.
- Never invent hands-on experience, prices, limits, ratings, or customer outcomes. Label desk research as desk research. Separate promotional claims from facts.
- Keep the visible source-check date, `Article.dateModified`, and sitemap `lastmod` accurate. A content update date is not a source-check date.
- Preserve the StackEvalify name, logo, navigation, and current color palette unless the task explicitly authorizes a brand change.

## TL;DR / Quick Verdict

- Place `#quick-verdict` after the article header and before the first detailed comparison table.
- State who should choose Product A and who should choose Product B. Tie each choice to a measurable constraint such as seats, contacts, sends, rows, automation actions, permissions, or billing model.
- Include one tracked in-page CTA to the primary comparison table using `data-track="quick-verdict-jump"`.
- Do not declare a universal winner when plans or workloads are not equivalent.

The shared `ComparisonLayout` injects this block from `lib/comparison-cro.ts`. New published comparisons must have a matching CRO entry and a valid `tableAnchor` that resolves to a visible section.

## FAQ and structured data

- Show at least two useful buying questions in the page UI and emit one matching `FAQPage` JSON-LD object.
- Every schema question and answer must appear verbatim in visible content. Do not hide SEO-only answers.
- Keep answers concise, source-grounded, and free of fabricated ratings or guarantees.
- Emit JSON-LD with the native `<script type="application/ld+json">` pattern and escape `<` as `\u003c` through the shared `JsonLd` component.
- The page must also emit an `Article` whose headline matches the visible `h1`, canonical URL matches the route, and `dateModified` matches the content date used by the sitemap.

## Outbound links

- Every external `http://` or `https://` anchor must open a new tab and use the exact relationship tokens `nofollow sponsored noopener noreferrer`.
- The shared layout must normalize source links as well as vendor CTAs. Do not apply this rule to internal links or `mailto:` links.
- Vendor CTAs use `data-track="affiliate-cta"`; ordinary external evidence links use `data-track="outbound-source"` unless a more specific approved event applies.
- `sponsored` is a conservative site-wide link policy. It does not by itself claim that a commission is currently earned; any actual affiliate relationship still requires visible disclosure.

## Privacy-first event tracking contract

- Comparison interactions are recorded by `components/ComparisonAnalytics.tsx` as first-party browser events. Required event names are:
  - `cta_click` for vendor CTA clicks;
  - `outbound_link_click` for external evidence links;
  - `quick_verdict_jump` for the table jump;
  - `scroll_depth` at 25%, 50%, 75%, and 100%;
  - `comparison_table_interaction` for pointer, keyboard, or horizontal-scroll interaction.
- Every payload contains `event` and `path`; link events may add `label`, `destination`, and `vendor`; depth/table events may add their relevant numeric fields.
- Dispatch `stackevalify:track`, retain at most 100 events in page memory, and push to `window.dataLayer` only when a compatible layer already exists.
- Do not add cookies, local storage, fingerprinting, a network analytics endpoint, or a third-party analytics script without explicit approval and a same-release Privacy Notice update. Never claim data is collected remotely while no receiver is configured.

## Publication gate

- A published comparison must be listed in `lib/comparisons.ts`, have a canonical metadata entry, be included in the generated sitemap, expose three related comparisons, and pass `.claude/skills/seo-qa-check/SKILL.md`.
- Keep held or incomplete content `noindex` and out of the sitemap. Do not publish a draft merely to increase route count.
