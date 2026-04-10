'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SITE } from '@/lib/constants';

const faqs = [
  {
    q: 'How do I know if I have a slab leak?',
    a: 'Common signs include an unexplained water bill spike, warm spots on your floor, the sound of running water when nothing is on, or cracks forming in your foundation. If you notice any of these, call us for a free assessment.',
  },
  {
    q: 'Will you need to dig up my floor or yard?',
    a: 'No. We use non-invasive detection — acoustic sensors, thermal cameras, and pressure testing — to pinpoint the exact leak location. We only dig or cut where the leak actually is, which is typically a small repair area.',
  },
  {
    q: 'How much does leak detection cost on Lake Norman?',
    a: 'We provide free estimates. You only pay once you accept the quote. Detection costs vary based on the type and complexity of the leak, but we always give you the price upfront before starting any work.',
  },
  {
    q: 'Is water leak damage covered by homeowner insurance?',
    a: 'In many cases, yes — sudden and accidental water damage is typically covered by standard homeowner policies. We work with insurance adjusters and can provide the documentation they need for your claim.',
  },
  {
    q: 'Can you detect pool and spa leaks on waterfront properties?',
    a: 'Absolutely. This is a specialty for Lake Norman homes. We use dye testing, pressure testing, and acoustic detection to find pool and spa leaks in plumbing lines, returns, drains, and shell cracks — without draining the pool.',
  },
  {
    q: 'Do you offer emergency leak detection?',
    a: 'Yes — 24/7, including weekends and holidays. For active leaks, we typically arrive within 30 minutes across the Lake Norman area. Call ' + SITE.phone + ' anytime.',
  },
  {
    q: 'How long does leak detection take?',
    a: 'Most residential leak detections take 1-3 hours. Simple leaks can be located in under an hour. Complex multi-point leaks in older homes or large properties may take longer.',
  },
  {
    q: 'Do you install leak detection sensors?',
    a: 'Yes. We install and configure smart water monitoring systems like Moen Flo and Phyn that detect leaks in real-time and can automatically shut off your water supply — great for second homes or when you\u2019re away from your lake house.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const mid = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, mid);
  const right = faqs.slice(mid);

  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">FAQ</p>
          <h2 id="faq-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            {left.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} isOpen={openIndex === i} onToggle={() => toggle(i)} />
            ))}
          </div>
          <div className="space-y-3">
            {right.map((faq, i) => {
              const realIndex = mid + i;
              return (
                <FAQItem key={faq.q} faq={faq} isOpen={openIndex === realIndex} onToggle={() => toggle(realIndex)} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border bg-white/[0.03] transition-colors duration-200 ${
        isOpen ? 'border-brand-accent/30' : 'border-white/5'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="text-sm font-semibold text-white pr-4">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-accent transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed text-brand-silver">{faq.a}</p>
        </div>
      )}
    </div>
  );
}
