'use client';
import { useEffect } from 'react';

export default function ImpactVerification() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'impact-site-verification';
    meta.setAttribute('value', '8b40ba0e-e24c-4340-bb46-5f63f9772766');
    document.head.appendChild(meta);
  }, []);

  return null;
}
