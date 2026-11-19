'use client';

import { useId, useRef, useState } from 'react';

export default function AuditTooltip({
  term,
  definition,
  align = 'left',
}: {
  term: string;
  definition: string;
  align?: 'left' | 'right';
}) {
  const tooltipId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-flex shrink-0 align-middle"
      data-audit-tooltip={term}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        if (document.activeElement !== triggerRef.current) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Explain ${term}`}
        aria-describedby={tooltipId}
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false);
            triggerRef.current?.blur();
          }
        }}
        className="inline-flex size-7 items-center justify-center rounded-full border border-slate-500 bg-slate-900 text-sm font-black text-slate-100 transition-colors hover:border-cyan-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        i
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        hidden={!open}
        className={`fixed inset-x-4 bottom-4 z-50 w-auto rounded-lg border border-cyan-300/40 bg-slate-950 p-3 text-left text-sm font-medium normal-case leading-relaxed tracking-normal text-slate-100 shadow-2xl shadow-black/50 sm:absolute sm:inset-x-auto sm:bottom-auto sm:top-full sm:mt-2 sm:w-56 sm:max-w-[calc(100vw-2rem)] ${align === 'right' ? 'sm:right-0' : 'sm:left-0'}`}
      >
        <strong className="block text-cyan-200">{term}</strong>
        <span className="mt-1 block">{definition}</span>
      </span>
    </span>
  );
}
