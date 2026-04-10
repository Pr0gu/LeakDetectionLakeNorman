'use client';

import { Star, ShieldCheck, Clock, Award, DollarSign } from 'lucide-react';

const badges = [
  { Icon: Star, label: '4.9 / 5 Google', sub: '100+ reviews' },
  { Icon: Award, label: 'Licensed NC & SC', sub: 'Fully insured' },
  { Icon: Clock, label: '24/7 Lake Norman', sub: '30-min response' },
  { Icon: DollarSign, label: 'No Trip Fee', sub: 'Free estimates' },
  { Icon: ShieldCheck, label: 'Waterfront Specialists', sub: 'Since 2020' },
];

export default function TrustBar() {
  return (
    <section
      className="border-y border-white/5 bg-brand-deep/50 py-6"
      aria-label="Trust signals"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                <b.Icon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">{b.label}</p>
                <p className="text-xs text-brand-silver-dark leading-tight">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
