'use client';

import { Phone, AlertTriangle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SITE } from '@/lib/constants';

export default function EmergencyCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative overflow-hidden bg-transparent py-20 sm:py-24" aria-label="Emergency call to action">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06)_0%,transparent_60%)]" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div className="h-[500px] w-[500px] rounded-full border border-red-500/5 animate-ripple-1" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 ring-2 ring-red-500/20">
          <AlertTriangle className="h-8 w-8 text-red-400" aria-hidden="true" />
        </div>

        <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl text-balance">
          Water Leak Emergency?
          <br />
          <span className="text-red-400">We&rsquo;re On Our Way.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-silver">
          Burst pipes, slab leaks, or flooding — water damage escalates fast.
          Our emergency team arrives in under 30 minutes across Lake Norman.
        </p>

        <a
          href={SITE.phoneHref}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-10 py-5 text-xl font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-xl"
          aria-label={`Call emergency service at ${SITE.phone}`}
        >
          <Phone className="h-6 w-6 animate-pulse" aria-hidden="true" />
          {SITE.phone}
        </a>

        <p className="mt-4 text-sm text-brand-silver-dark">Available 24/7 — including weekends and holidays</p>
      </div>
    </section>
  );
}
