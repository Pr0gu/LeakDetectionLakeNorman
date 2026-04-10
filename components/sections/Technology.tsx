'use client';

import { Ear, Thermometer, Video, Gauge } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { TECHNOLOGIES } from '@/lib/constants';

const iconMap = [Ear, Thermometer, Video, Gauge];

export default function Technology() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="technology" className="section-padding bg-transparent" aria-labelledby="tech-heading">
      <div className="container-narrow">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">Our Technology</p>
          <h2 id="tech-heading" className="text-balance text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            No Digging. No Damage. No Guesswork.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-silver">
            We use the most advanced non-invasive detection technology available — pinpointing
            leaks with precision, while keeping your property intact.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = iconMap[i];
            return (
              <TechCard key={tech.title} tech={tech} Icon={Icon} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechCard({
  tech,
  Icon,
  index,
}: {
  tech: (typeof TECHNOLOGIES)[number];
  Icon: React.ElementType;
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group rounded-2xl border border-brand-silver/10 bg-brand-deep-light/50 p-8 transition-all duration-500 hover:border-brand-accent/20 hover:bg-brand-deep-light ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/10 ring-1 ring-brand-accent/20">
        <Icon className="h-7 w-7 text-brand-accent" aria-hidden="true" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-white">{tech.title}</h3>
      <p className="leading-relaxed text-brand-silver">{tech.description}</p>
    </div>
  );
}
