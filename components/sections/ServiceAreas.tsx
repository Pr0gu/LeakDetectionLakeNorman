'use client';

import { MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SERVICE_AREAS } from '@/lib/constants';

export default function ServiceAreas() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="areas" className="section-padding bg-transparent" aria-labelledby="areas-heading">
      <div className="container-narrow">
        <div
          ref={ref}
          className={`mb-14 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">Service Areas</p>
          <h2 id="areas-heading" className="text-balance text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Serving Lake Norman&rsquo;s Finest Communities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            From the waterfront estates of The Peninsula to the charming streets of Davidson,
            we deliver premium leak detection to every corner of Lake Norman.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SERVICE_AREAS.map((area, i) => (
            <AreaBadge key={area.name} area={area} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don&rsquo;t see your community?{' '}
          <a href="tel:+19804054186" className="font-semibold text-brand-accent hover:underline">
            Call us
          </a>{' '}
          — we likely serve your area too.
        </p>
      </div>
    </section>
  );
}

function AreaBadge({ area, index }: { area: (typeof SERVICE_AREAS)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group flex items-center gap-2.5 rounded-xl border bg-white px-4 py-3.5 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md ${
        area.primary
          ? 'border-brand-accent/20 hover:border-brand-accent/40'
          : 'border-white/10 hover:border-brand-accent/20'
      } ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <MapPin
        className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${
          area.primary ? 'text-brand-accent' : 'text-brand-silver-dark'
        }`}
        aria-hidden="true"
      />
      <span className={`text-sm font-semibold ${area.primary ? 'text-white' : 'text-gray-700'}`}>
        {area.name}
      </span>
    </div>
  );
}
