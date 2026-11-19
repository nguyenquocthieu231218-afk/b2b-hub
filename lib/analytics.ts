export const STACK_EVALIFY_TRACK_EVENT = 'stackevalify:track';

export type AnalyticsPayload = Record<string, string | number | boolean> & {
  event: string;
  path: string;
};

type Gtag = (command: 'config' | 'event' | 'js', target: string | Date, parameters?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    stackEvalifyEvents?: AnalyticsPayload[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? '';

export function trackAnalyticsEvent(payload: AnalyticsPayload) {
  if (typeof window === 'undefined') return;

  window.stackEvalifyEvents = [...(window.stackEvalifyEvents ?? []), payload].slice(-100);
  window.dispatchEvent(new CustomEvent<AnalyticsPayload>(STACK_EVALIFY_TRACK_EVENT, { detail: payload }));
}

export function ensureGtagQueue() {
  if (typeof window === 'undefined') return;

  window.dataLayer ??= [];
  window.gtag ??= (...args) => {
    window.dataLayer?.push(args);
  };
}

export function forwardAnalyticsEventToGa4(payload: AnalyticsPayload) {
  if (typeof window === 'undefined' || !window.gtag) return;

  const { event, ...parameters } = payload;
  window.gtag('event', event, parameters);
}
