import type { Metadata } from 'next';
import { SITE_LOGO, SITE_NAME } from './site';

export const guides = [
  {
    title: 'How to choose B2B software',
    href: '/guides/choose-b2b-software',
    description: 'Build a shortlist, test the same workflow, and record a software decision with an acceptance checklist your team can reuse.',
    stage: 'Shortlist and evaluate',
  },
  {
    title: 'Calculate the total cost of SaaS',
    href: '/guides/saas-total-cost',
    description: 'Compare the full first-year cost of SaaS seats, usage, onboarding, integrations, and exit work with a transparent cost worksheet.',
    stage: 'Budget and buy',
  },
] as const;

export type BuyingGuide = (typeof guides)[number];

export function guideMetadata(guide: BuyingGuide): Metadata {
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: guide.href },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article', title: guide.title, description: guide.description,
      url: guide.href, siteName: SITE_NAME,
      images: [{ url: SITE_LOGO, width: 2000, height: 2000, alt: `${SITE_NAME} logo` }],
    },
    twitter: { card: 'summary', title: guide.title, description: guide.description, images: [SITE_LOGO] },
  };
}
