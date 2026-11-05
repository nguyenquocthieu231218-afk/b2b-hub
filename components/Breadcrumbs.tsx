import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import JsonLd from './JsonLd';

type BreadcrumbItem = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          ...(item.href ? { item: new URL(item.href, SITE_URL).href } : {}),
        })),
      }} />
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {items.map((item, index) => (
          <li key={item.name} className="inline-flex items-center gap-3">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-slate-300">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
