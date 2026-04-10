'use client';

import { ShieldCheck, Clock, BadgeCheck, DollarSign } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Non-Invasive Detection',
    description:
      'Advanced technology locates leaks without tearing up floors, walls, or your lakefront landscaping. Pinpoint accuracy, zero destruction.',
  },
  {
    icon: Clock,
    title: '30-Minute Response',
    description:
      'Our team is based in the Lake Norman area. When you call, we dispatch immediately — average arrival under 30 minutes.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed NC & SC',
    description:
      'Fully licensed and insured across both Carolinas. Every technician is trained, certified, and background-checked.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description:
      'Transparent pricing before work begins. No hidden fees, no surprise charges. You approve the cost first — always.',
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-us" className="section-padding bg-transparent" aria-labelledby="why-heading">
      <div className="container-narrow">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">Why Choose Us</p>
          <h2 id="why-heading" className="text-balance text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            The Lake Norman Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Not a franchise. Not a call center. A local team that knows Lake Norman properties
            and delivers results you can trust.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <DiffCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiffCard({ item, index }: { item: (typeof differentiators)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-accent/10 ring-1 ring-brand-accent/20">
        <item.icon className="h-8 w-8 text-brand-accent" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-gray-300">{item.description}</p>
    </div>
  );
}
