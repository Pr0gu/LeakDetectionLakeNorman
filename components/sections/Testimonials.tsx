'use client';

import { Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { TESTIMONIALS } from '@/lib/constants';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'fill-brand-accent text-brand-accent' : 'fill-gray-200 text-gray-200'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="section-padding bg-brand-pearl" aria-labelledby="reviews-heading">
      <div className="container-narrow">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">Testimonials</p>
          <h2 id="reviews-heading" className="text-balance text-3xl font-extrabold text-brand-deep sm:text-4xl md:text-5xl">
            What Lake Norman Homeowners Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Real results from real homeowners in your community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: (typeof TESTIMONIALS)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-5 flex-1 leading-relaxed text-gray-600">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-deep text-sm font-bold text-white">
          {testimonial.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="font-bold text-brand-deep">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
