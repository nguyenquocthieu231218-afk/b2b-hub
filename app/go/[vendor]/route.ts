import { getMeasuredAffiliateLink } from '@/lib/affiliate-links';

const robotsHeader = { 'X-Robots-Tag': 'noindex, nofollow' } as const;

function normalizeSource(value: string | null) {
  if (!value) return 'direct';
  const normalized = value.toLowerCase().replace(/[^a-z0-9/_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
  return normalized || 'direct';
}

export async function GET(request: Request, context: { params: Promise<{ vendor: string }> }) {
  const { vendor } = await context.params;
  const normalizedVendor = /^[a-z0-9-]{1,40}$/i.test(vendor) ? vendor.toLowerCase() : '';
  const config = getMeasuredAffiliateLink(normalizedVendor);

  if (!config) {
    return new Response(null, {
      status: 302,
      headers: {
        ...robotsHeader,
        'Cache-Control': 'private, no-store',
        Location: new URL('/eor-cost-calculator', request.url).toString(),
      },
    });
  }

  const requestUrl = new URL(request.url);
  const source = normalizeSource(requestUrl.searchParams.get('source'));
  const destination = new URL(config.destinationUrl);
  destination.searchParams.set('utm_source', config.utm.source);
  destination.searchParams.set('utm_medium', config.utm.medium);
  destination.searchParams.set('utm_campaign', config.utm.campaign);
  destination.searchParams.set('utm_content', source);
  destination.searchParams.set('ref', 'stackevalify');
  destination.searchParams.set('source', source);

  return new Response(null, {
    status: 307,
    headers: {
      ...robotsHeader,
      'Cache-Control': 'private, no-store',
      Location: destination.toString(),
    },
  });
}
