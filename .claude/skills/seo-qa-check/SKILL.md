---
name: seo-qa-check
description: Audit StackEvalify comparison changes before a pull request, including source integrity, SEO/CRO markup, outbound links, privacy-first tracking, internal links, Next.js build output, and local production HTML. Use for every new or modified comparison page; do not use as a substitute for editorial source verification.
---

# StackEvalify SEO QA check

Run this workflow from the repository root. Stop on the first product error, fix it, and restart the affected checks.

## Eight-step workflow

1. **Establish a clean baseline.** Run `git status --short --branch`, inspect the intended diff, confirm the branch starts with `codex/`, and verify that no unrelated brand, logo, palette, or content files are being changed.
2. **Verify evidence and dates.** Open every first-party source, recheck volatile prices and limits, confirm the visible source-check date, and keep `lib/comparisons.ts`, `Article.dateModified`, and sitemap `lastmod` aligned with the real update.
3. **Audit the page contract.** Confirm one `h1`, at least three addressable `h2` sections, a comparison table with a caption and mobile rendering, a pre-table Quick Verdict, two visible FAQ answers with matching `FAQPage` JSON-LD, a canonical, and `Article` plus breadcrumb schema.
4. **Audit links and tracking.** Confirm all external anchors render with `target="_blank"` and `rel="nofollow sponsored noopener noreferrer"`; both vendor CTAs, the Quick Verdict jump, scroll depths, and comparison-table interactions use the event contract in `.claude/rules/seo-cro-standards.md`.
5. **Run static checks.** Execute `npm run lint` and `npx tsc --noEmit`. Warnings count as failures for the release gate.
6. **Run repository checks and build.** Execute `npm run check:search` and `npm run build`. If this Windows environment produces a confirmed Turbopack infrastructure panic rather than an application error, retry once with the official fallback `npm run build -- --webpack`, preserve the first failure in the report, and never use the fallback to hide code errors.
7. **Inspect production HTML.** Start the completed build on a free local port, for example `npm run start -- --hostname 127.0.0.1 --port 3001`, then run `npm run check:seo -- http://127.0.0.1:3001`. Inspect each changed page at approximately 390 px and 1440 px widths; test the table, Quick Verdict anchor, FAQ disclosure, keyboard focus, and outbound links.
8. **Prepare and verify release.** Review `git diff --check`, `git diff --stat`, and `git status`; commit only intended files; push the branch; open a focused PR; wait for required checks; merge into `main`; then verify the production deployment and changed URLs before reporting the commit and deployment status.

## `check-seo.mjs`

The checker requires a running local production build and rejects non-local origins:

```powershell
npm run start -- --hostname 127.0.0.1 --port 3001
npm run check:seo -- http://127.0.0.1:3001
```

It validates sitemap pages, unique metadata, canonicals, headings, Article/Breadcrumb/FAQ schema, Quick Verdict placement, tracking markers, standardized outbound links, topic-cluster links, held-page `noindex`, permanent redirects, and the original logo bytes. When comparison inventory changes, update the expected comparison and directory counts in the script in the same commit.

## Pre-PR checklist

- [ ] Official sources opened and source-check date recorded.
- [ ] No invented first-person experience, rating, price, limit, or outcome.
- [ ] Quick Verdict, primary table anchor, visible FAQ, and JSON-LD agree.
- [ ] Outbound relationship tokens and tracking events pass rendered-HTML QA.
- [ ] New route is in comparison inventory, directory, sitemap, and an appropriate reciprocal topic cluster.
- [ ] Responsive table and content work at mobile and desktop widths.
- [ ] `npm run lint`, `npx tsc --noEmit`, `npm run check:search`, build, and `check:seo` pass with zero application warnings or errors.
- [ ] Final diff preserves StackEvalify branding and contains no unrelated files.
- [ ] PR checks pass, merge completes, Vercel production is ready, and live URLs return the updated content.
