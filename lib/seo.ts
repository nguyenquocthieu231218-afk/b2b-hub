import type { Metadata } from 'next';
import { SITE_LOGO, SITE_NAME } from './site';
import { getComparisonByPath } from './comparisons';
import { getAuditedToolByPath } from './audited-tools';

type ComparisonDraftMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function comparisonDraftMetadata({ title, description, path }: ComparisonDraftMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
    openGraph: {
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      type: 'article',
      images: [{
        url: '/logo.png',
        width: 2000,
        height: 2000,
        alt: 'StackEvalify logo',
      }],
    },
    twitter: { card: 'summary', title, description, images: [SITE_LOGO] },
  };
}


export function sourceCheckedComparisonMetadata({ title, description, path }: ComparisonDraftMetadataInput): Metadata {
  const comparison = getComparisonByPath(path);
  const canIndex = comparison?.isAudited === true && comparison.hasCalculator === true;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: canIndex, follow: true },
    openGraph: {
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      type: 'article',
      images: [{
        url: '/logo.png',
        width: 2000,
        height: 2000,
        alt: 'StackEvalify logo',
      }],
    },
    twitter: { card: 'summary', title, description, images: [SITE_LOGO] },
  };
}

export function auditedToolMetadata({ title, description, path }: ComparisonDraftMetadataInput): Metadata {
  const tool = getAuditedToolByPath(path);
  const canIndex = tool?.isAudited === true && tool.hasCalculator === true;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: canIndex, follow: true },
    openGraph: {
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      type: 'website',
      images: [{
        url: '/logo.png',
        width: 2000,
        height: 2000,
        alt: 'StackEvalify logo',
      }],
    },
    twitter: { card: 'summary', title, description, images: [SITE_LOGO] },
  };
}
