import type { MetadataRoute } from 'next';
import { comparisons } from '@/lib/comparisons';
import { SITE_URL } from '@/lib/site';

const informationalRoutes = ['/', '/about', '/contact', '/methodology'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...informationalRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      changeFrequency: route === '/' ? 'weekly' as const : 'yearly' as const,
      priority: route === '/' ? 1 : 0.5,
    })),
    {
      url: `${SITE_URL}/category/saas`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...comparisons.map(({ href }) => ({
      url: `${SITE_URL}${href}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
