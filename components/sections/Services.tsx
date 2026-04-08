'use client';

import { Layers, Pipette, Waves, Camera, Siren, Wrench } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '@/lib/constants';

const iconMap = [Layers, Pipette, Waves, Camera, Siren, Wrench];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = iconMap[index];

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-brand-deep/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-accent to-brand-accent/60 transition-transform duration-300 group-hover:scale-x-100" />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-deep/5 transition-colors group-hover:bg-brand-accent/10">
        <Icon className="h-7 w-7 text-brand-deep transition-colors group-hover:text-brand-accent" aria-hidden="true" />
      </div>

      <h3 className="mb-3 text-xl font-bold text-brand-deep">{service.title}</h3>
      <p className="leading-relaxed text-gray-600">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-brand-pearl" aria-labelledby="services-heading">
      <div className="container-narrow">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">Our Services</p>
          <h2 id="services-heading" className="text-balance text-3xl font-extrabold text-brand-deep sm:text-4xl md:text-5xl">
            Leak Detection &amp; Plumbing Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From pinpointing hidden slab leaks to complete plumbing repairs — our licensed technicians
            protect Lake Norman homes with precision and care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
