import type { MetadataRoute } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { HOME_SEO } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — 3D Model Animator`,
    short_name: SITE_NAME,
    description: HOME_SEO.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#60a5fa',
    icons: [
      {
        src: '/apple-touch-icon.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  };
}
