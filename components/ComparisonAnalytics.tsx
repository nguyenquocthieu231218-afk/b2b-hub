'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type AnalyticsPayload = Record<string, string | number | boolean> & {
  event: string;
  path: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    stackEvalifyEvents?: AnalyticsPayload[];
  }
}

function record(payload: AnalyticsPayload) {
  window.stackEvalifyEvents = [...(window.stackEvalifyEvents ?? []), payload].slice(-100);
  window.dispatchEvent(new CustomEvent('stackevalify:track', { detail: payload }));
  window.dataLayer?.push({ ...payload, stackevalify_event: payload.event, event: 'stackevalify_event' });
}

export default function ComparisonAnalytics({ path, className, children }: { path: string; className: string; children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    window.stackEvalifyEvents ??= [];

    const sentDepths = new Set<number>();
    let frame = 0;
    const inspectDepth = () => {
      frame = 0;
      const page = document.documentElement;
      const scrollable = Math.max(page.scrollHeight - window.innerHeight, 1);
      const depth = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      for (const threshold of [25, 50, 75, 100]) {
        if (depth >= threshold && !sentDepths.has(threshold)) {
          sentDepths.add(threshold);
          record({ event: 'scroll_depth', path, percent: threshold });
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(inspectDepth);
    };

    const onClick = (event: Event) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a') : null;
      if (!target || !root.contains(target)) return;
      const tracking = target.dataset.track;
      if (!tracking && !/^https?:\/\//.test(target.href)) return;
      record({
        event: tracking === 'affiliate-cta' ? 'cta_click' : tracking === 'quick-verdict-jump' ? 'quick_verdict_jump' : 'outbound_link_click',
        path,
        label: target.textContent?.trim().slice(0, 120) || 'link',
        destination: target.href,
        vendor: target.dataset.vendor ?? '',
      });
    };

    const cleanups: Array<() => void> = [];
    root.querySelectorAll<HTMLTableElement>('table').forEach((table, index) => {
      let interacted = false;
      const trackInteraction = (kind: string) => {
        if (interacted) return;
        interacted = true;
        record({ event: 'comparison_table_interaction', path, table: index + 1, kind });
      };
      const onPointer = () => trackInteraction('pointer');
      const onFocus = () => trackInteraction('keyboard');
      table.addEventListener('pointerdown', onPointer, { passive: true });
      table.addEventListener('focusin', onFocus);

      const scroller = table.parentElement;
      let trackedHorizontalScroll = false;
      const onTableScroll = () => {
        if (!trackedHorizontalScroll && scroller && scroller.scrollLeft > 0) {
          trackedHorizontalScroll = true;
          record({ event: 'comparison_table_interaction', path, table: index + 1, kind: 'horizontal_scroll' });
        }
      };
      scroller?.addEventListener('scroll', onTableScroll, { passive: true });
      cleanups.push(() => {
        table.removeEventListener('pointerdown', onPointer);
        table.removeEventListener('focusin', onFocus);
        scroller?.removeEventListener('scroll', onTableScroll);
      });
    });

    document.addEventListener('click', onClick);
    window.addEventListener('scroll', onScroll, { passive: true });
    inspectDepth();
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [path]);

  return (
    <div ref={rootRef} data-comparison-root={path} className={className}>
      {children}
      <span hidden data-comparison-analytics="cta,scroll-depth,table-interaction" />
    </div>
  );
}

