import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D2137',
};

export const metadata: Metadata = {
  title: 'Leak Detection Lake Norman NC | Cornelius, Davidson, Mooresville | 24/7 Emergency',
  description:
    'Professional leak detection for Lake Norman homes. Non-invasive slab leak detection, water line locating, pool leak repair & sewer camera inspection. Serving Cornelius, Davidson, Huntersville & Mooresville. Call 980-405-4186.',
  keywords: [
    'leak detection lake norman',
    'leak detection cornelius nc',
    'leak detection davidson nc',
    'leak detection mooresville nc',
    'slab leak detection lake norman',
    'pool leak detection lake norman',
    'plumber lake norman',
    'emergency plumber cornelius',
    'water line leak detection',
    'sewer camera inspection lake norman',
    'plumber huntersville nc',
    'leak detection near me',
  ],
  authors: [{ name: 'Leak Detection Lake Norman' }],
  creator: 'Leak Detection Lake Norman',
  publisher: 'Leak Detection Lake Norman',
  formatDetection: { telephone: true, email: true, address: true },
  metadataBase: new URL('https://leakdetectionlakenorman.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Leak Detection Lake Norman NC | Cornelius, Davidson, Mooresville | 24/7',
    description:
      'Professional non-invasive leak detection for Lake Norman homes. Acoustic, thermal & video inspection. Licensed NC & SC. Call 980-405-4186.',
    url: 'https://leakdetectionlakenorman.com',
    siteName: 'Leak Detection Lake Norman',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leak Detection Lake Norman NC | 24/7 Emergency Service',
    description:
      'Professional leak detection for Lake Norman. Cornelius, Davidson, Huntersville, Mooresville. Call 980-405-4186.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
