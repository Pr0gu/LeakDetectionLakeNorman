'use client';

import { ShieldCheck, DollarSign, Clock, Search } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SITE } from '@/lib/constants';

const promises = [
  {
    Icon: Search,
    title: 'We Find It or You Don\u2019t Pay',
    description:
      'If our detection technology doesn\u2019t locate your leak, the inspection is on us. Zero risk, zero pressure.',
  },
  {
    Icon: DollarSign,
    title: 'Free Estimates, Always',
    description:
      'Every assessment is 100% free. No trip fee. No hidden charges. You only pay once you accept a written quote.',
  },
  {
    Icon: ShieldCheck,
    title: '1-Year Warranty on Repairs',
    description:
      'Every repair is backed by a full 1-year workmanship warranty. If the leak returns, we come back \u2014 no charge.',
  },
  {
    Icon: Clock,
    title: 'On Time or It\u2019s Free',
    description:
      'We commit to a 30-minute arrival across Lake Norman. If we\u2019re late, your emergency service call is free.',
  },
];

export default function Guarantee() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding" aria-labelledby="guarantee-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-14 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Our Guarantee
          </p>
          <h2
            id="guarantee-heading"
            className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl"
          >
            Zero risk. Zero surprises.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-silver">
            We stand behind every job with promises most plumbers won&rsquo;t put in writing.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <PromiseCard key={p.title} promise={p} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-brand-silver-dark">
            Ready to book your free estimate?{' '}
            <a href={SITE.phoneHref} className="font-bold text-brand-accent hover:underline">
              Call {SITE.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function PromiseCard({ promise, index }: { promise: (typeof promises)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-brand-accent/15 bg-white/[0.03] p-6 transition-all duration-500 hover:border-brand-accent/30 hover:bg-white/[0.05] ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 ring-1 ring-brand-accent/20">
        <promise.Icon className="h-6 w-6 text-brand-accent" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{promise.title}</h3>
      <p className="text-sm leading-relaxed text-brand-silver">{promise.description}</p>
    </div>
  );
}
