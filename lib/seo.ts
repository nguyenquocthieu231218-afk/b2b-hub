import type { Metadata } from 'next';

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
  };
}


export function sourceCheckedComparisonMetadata({ title, description, path }: ComparisonDraftMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
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
  };
}
