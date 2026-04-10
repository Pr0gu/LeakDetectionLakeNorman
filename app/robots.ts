import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://leakdetectionlakenorman.com/sitemap.xml',
    host: 'https://leakdetectionlakenorman.com',
  };
}
