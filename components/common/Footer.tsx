'use client';

import { Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';
import { SITE, SERVICES, SERVICE_AREAS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: SITE.name,
    url: SITE.url,
    telephone: '+19804054186',
    email: SITE.email,
    areaServed: [
      { '@type': 'City', name: 'Cornelius', addressRegion: 'NC' },
      { '@type': 'City', name: 'Davidson', addressRegion: 'NC' },
      { '@type': 'City', name: 'Huntersville', addressRegion: 'NC' },
      { '@type': 'City', name: 'Mooresville', addressRegion: 'NC' },
      { '@type': 'City', name: 'Denver', addressRegion: 'NC' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        description: 'Emergency service available 24/7',
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '89',
    },
  };

  return (
    <footer className="bg-brand-deep text-brand-silver" role="contentinfo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Contact */}
          <div>
            <Logo size="sm" variant="light" />
            <p className="mb-6 mt-4 text-sm leading-relaxed text-brand-silver-dark">
              Professional leak detection and plumbing services for Lake Norman&rsquo;s finest
              communities.
            </p>
            <div className="space-y-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-sm transition-colors hover:text-brand-accent"
              >
                <Phone className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-brand-accent"
              >
                <Mail className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm transition-colors hover:text-brand-accent">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {SERVICE_AREAS.map((a) => (
                <li key={a.name}>
                  <a href="#areas" className="text-sm transition-colors hover:text-brand-accent">
                    {a.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Business Hours
            </h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Mon - Fri</p>
                  <p>7:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Saturday</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Sunday</p>
                  <p>Emergency Service 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-brand-silver-dark">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved. Licensed in NC &amp; SC.
          </p>
        </div>
      </div>
    </footer>
  );
}
