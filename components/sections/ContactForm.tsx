'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SITE } from '@/lib/constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const serviceOptions = [
  'Slab Leak Detection',
  'Water Line Leak Detection',
  'Pool & Spa Leak Detection',
  'Sewer Camera Inspection',
  'Emergency Leak Repair',
  'Water Heater Service',
  'Drain Cleaning',
  'Other Plumbing Service',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputBase =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-brand-deep placeholder:text-gray-400 transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 focus:outline-none';
  const errorClass = 'border-red-300 focus:border-red-400 focus:ring-red-200/30';

  return (
    <section id="contact" className="section-padding bg-brand-pearl relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand-deep/5 blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <div className="mx-auto max-w-3xl">
          <div
            ref={sectionRef}
            className={`mb-12 text-center transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">Get In Touch</p>
            <h2 id="contact-heading" className="text-balance text-3xl font-extrabold text-brand-deep sm:text-4xl md:text-5xl">
              Request a Free Estimate
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Fill out the form below and we&rsquo;ll respond within 30 minutes during business hours.
              For emergencies, call us directly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className={`space-y-5 rounded-2xl border border-gray-200/80 bg-white p-8 shadow-lg sm:p-10 transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-deep">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  className={`${inputBase} ${errors.name ? errorClass : ''}`}
                  {...register('name', { required: 'Name is required' })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500" role="alert">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-deep">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(704) 555-0123"
                  className={`${inputBase} ${errors.phone ? errorClass : ''}`}
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: { value: /^[\d\s()+-]{7,20}$/, message: 'Enter a valid phone number' },
                  })}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500" role="alert">{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-deep">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className={`${inputBase} ${errors.email ? errorClass : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500" role="alert">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-deep">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                className={`${inputBase} ${errors.service ? errorClass : ''}`}
                defaultValue=""
                {...register('service', { required: 'Please select a service' })}
                aria-invalid={errors.service ? 'true' : 'false'}
              >
                <option value="" disabled>Select a service...</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-500" role="alert">{errors.service.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-deep">Describe Your Issue</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your leak or plumbing issue..."
                className={`${inputBase} resize-none`}
                {...register('message')}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-brand-accent px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-accent/20 transition-all hover:bg-brand-accent/90 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? (
                <><Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending...</>
              ) : (
                <><Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /> Send Request</>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700" role="alert">
                <CheckCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="text-sm font-medium">Thank you! We&rsquo;ve received your request and will respond shortly.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700" role="alert">
                <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="text-sm font-medium">
                  Something went wrong. Please call us at{' '}
                  <a href={SITE.phoneHref} className="font-bold underline">{SITE.phone}</a> instead.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
