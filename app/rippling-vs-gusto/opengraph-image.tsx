import { ImageResponse } from 'next/og';
import AuditedTcoOpenGraphImage from '@/app/components/AuditedTcoOpenGraphImage';

export const alt = 'Rippling vs Gusto audited TCO and hidden deposit model';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(<AuditedTcoOpenGraphImage title="Rippling vs Gusto" />, size);
}
