const robotsHeader = { 'X-Robots-Tag': 'noindex, nofollow' } as const;

export function GET(request: Request) {
  return new Response(null, {
    status: 302,
    headers: {
      ...robotsHeader,
      'Cache-Control': 'private, no-store',
      Location: new URL('/eor-cost-calculator', request.url).toString(),
    },
  });
}
