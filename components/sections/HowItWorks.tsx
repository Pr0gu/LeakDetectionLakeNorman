'use client';

import { Phone, Search, Wrench } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Tell Us What You\u2019re Seeing',
    description:
      'Wet spot on the floor? Water bill spike? Call and talk to a real technician \u2014 not a receptionist. We\u2019ll narrow it down before we arrive.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Precision Detection',
    description:
      'We scan with acoustic sensors, thermal cameras, and pressure tests. We find the exact point \u2014 no exploratory digging, no unnecessary demo.',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Surgical Repair',
    description:
      'We fix the leak \u2014 not your entire floor. You approve the cost first. Most repairs are done the same visit.',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-brand-deep" aria-labelledby="how-heading">
      <div className="container-narrow">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            How It Works
          </p>
          <h2 id="how-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
            Three steps. No runaround.
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div
            className="absolute top-14 left-[16.5%] right-[16.5%] hidden h-0.5 bg-gradient-to-r from-brand-accent/10 via-brand-accent/30 to-brand-accent/10 md:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-600 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative z-10 mb-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-brand-deep-light ring-2 ring-brand-accent/20">
        <span className="text-xs font-bold tracking-widest text-brand-accent">{step.num}</span>
        <step.icon className="mt-1 h-8 w-8 text-brand-silver-light" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-brand-silver">{step.description}</p>
    </div>
  );
}
