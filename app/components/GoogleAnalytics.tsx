'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import {
  ensureGtagQueue,
  forwardAnalyticsEventToGa4,
  STACK_EVALIFY_TRACK_EVENT,
  type AnalyticsPayload,
} from '@/lib/analytics';

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    if (!measurementId) return;

    ensureGtagQueue();
    const forwardEvent = (event: Event) => {
      forwardAnalyticsEventToGa4((event as CustomEvent<AnalyticsPayload>).detail);
    };
    window.addEventListener(STACK_EVALIFY_TRACK_EVENT, forwardEvent);
    return () => window.removeEventListener(STACK_EVALIFY_TRACK_EVENT, forwardEvent);
  }, [measurementId]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        id="stackevalify-ga4-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
      <Script id="stackevalify-ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config',${JSON.stringify(measurementId)});`}
      </Script>
    </>
  );
}
