'use client';

import { useInView } from 'react-intersection-observer';
import { SITE } from '@/lib/constants';

export default function DIYTest() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="diy-test" className="section-padding" aria-labelledby="diy-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-brand-accent">
            Free DIY Test
          </p>
          <h2 id="diy-heading" className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Check for leaks yourself in 5 minutes
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-accent/15 bg-white/[0.03] p-8">
              <h3 className="text-lg font-bold text-brand-accent">Water Meter Test</h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-brand-silver">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">1</span>
                  Turn off every faucet, appliance, and fixture in your home.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">2</span>
                  Locate your water meter (usually near the street) and note the reading.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">3</span>
                  Wait 2 hours without using any water.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">4</span>
                  Check the meter again. If the reading changed, you likely have a leak.
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-brand-accent/15 bg-white/[0.03] p-8">
              <h3 className="text-lg font-bold text-brand-accent">Pool Bucket Test</h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-brand-silver">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">1</span>
                  Place a bucket on a pool step and fill it to match the pool water level.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">2</span>
                  Mark the water level inside the bucket and the pool level outside.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">3</span>
                  Wait 24 hours with the pump running normally.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">4</span>
                  If the pool dropped more than the bucket, you have a leak — not evaporation.
                </li>
              </ol>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-brand-silver-dark">
            Meter moved? Pool losing water? Call{' '}
            <a href={SITE.phoneHref} className="font-bold text-brand-accent hover:underline">
              {SITE.phone}
            </a>{' '}
            for a free professional assessment. We&rsquo;ll find the exact source.
          </p>
        </div>
      </div>
    </section>
  );
}
