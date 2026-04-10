'use client';

import { useInView } from 'react-intersection-observer';

const challenges = [
  {
    name: 'Waterfront Homes',
    challenge: 'Dock & shoreline plumbing',
    details:
      'Buried shoreline supply lines, dock water service, and boathouse fixtures fail differently than inland plumbing. We specialize in lakefront-specific diagnostics.',
  },
  {
    name: 'Private Well Systems',
    challenge: 'Well pumps + water quality',
    details:
      'Much of Lake Norman runs on well water. Hard minerals wear out water heaters 30% faster and scale buildup reduces pressure. We diagnose pumps, filters, and entire well systems.',
  },
  {
    name: 'Pools & Spas',
    challenge: 'Return lines + shell cracks',
    details:
      'Pool leaks are a Lake Norman specialty. We use dye testing, pressure testing, and acoustic detection to find leaks in returns, drains, and shell without draining the pool.',
  },
  {
    name: 'Second Homes & Rentals',
    challenge: 'Remote monitoring',
    details:
      'Many Lake Norman homes are second homes or vacation rentals. We install Moen Flo and Phyn smart sensors that detect leaks in real-time and shut off water while you\u2019re away.',
  },
];

export default function LocalExpertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding" aria-labelledby="local-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-14 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Lake Norman Specialty
          </p>
          <h2
            id="local-heading"
            className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl"
          >
            Built for waterfront homes.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-silver">
            Lake Norman homes have unique plumbing challenges \u2014 waterfront lines,
            private wells, pool systems, and second-home needs. We specialize in all of them.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {challenges.map((c, i) => (
            <ChallengeCard key={c.name} challenge={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeCard({
  challenge,
  index,
}: {
  challenge: (typeof challenges)[number];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-brand-accent/30 hover:bg-white/[0.05] ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-accent">
        {challenge.challenge}
      </p>
      <h3 className="mb-3 text-xl font-bold text-white">{challenge.name}</h3>
      <p className="text-sm leading-relaxed text-brand-silver">{challenge.details}</p>
    </div>
  );
}
