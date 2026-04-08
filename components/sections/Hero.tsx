'use client';

import { Phone, ArrowDown, ShieldCheck, Clock, Award } from 'lucide-react';
import { SITE } from '@/lib/constants';

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Licensed NC & SC' },
  { icon: Clock, label: '30-Min Response' },
  { icon: Award, label: '5-Star Rated' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Deep blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep via-brand-deep-light to-brand-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,134,171,0.1)_0%,transparent_60%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168,184,200,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(168,184,200,.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Water ripple animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="relative">
          {/* Central water icon */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="relative z-10">
            <path
              d="M20 4C20 4 6 18 6 26C6 33.732 12.268 40 20 40C27.732 40 34 33.732 34 26C34 18 20 4 20 4Z"
              fill="url(#lknDroplet)"
              fillOpacity="0.4"
            />
            <defs>
              <linearGradient id="lknDroplet" x1="20" y1="4" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C5D1DC" />
                <stop offset="100%" stopColor="#2E86AB" />
              </linearGradient>
            </defs>
          </svg>
          {/* Ripple rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-brand-silver/20 animate-ripple-1" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-brand-silver/15 animate-ripple-2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-brand-silver/10 animate-ripple-3" />
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 480 48" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,32 C80,16 160,48 240,32 C320,16 400,48 480,32 L480,48 L0,48 Z"
            fill="#F5F7FA"
            fillOpacity="0.5"
          />
          <path
            d="M0,38 C80,22 160,54 240,38 C320,22 400,54 480,38 L480,48 L0,48 Z"
            fill="#F5F7FA"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-24">
        <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-brand-silver/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-silver-light mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
          Serving Lake Norman &amp; Surrounding Communities
        </div>

        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight text-balance">
          Professional Leak Detection{' '}
          <span className="text-gradient-accent">for Lake Norman</span>
        </h1>

        <p className="animate-fade-in-up delay-200 mt-6 text-lg sm:text-xl text-brand-silver-light max-w-2xl mx-auto leading-relaxed">
          Non-invasive technology that pinpoints hidden leaks in your Lake Norman home —
          protecting your property, your foundation, and your peace of mind.
        </p>

        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.phoneHref}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-accent/20 hover:shadow-xl transition-all w-full sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call {SITE.phone}
          </a>
          <a
            href="#contact"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-silver/20 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:border-brand-accent/40 hover:bg-brand-accent/5 transition-all w-full sm:w-auto"
          >
            Request Free Estimate
          </a>
        </div>

        <div className="animate-fade-in-up delay-500 mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-brand-silver">
              <badge.icon className="h-4 w-4 text-brand-accent" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#services"
          aria-label="Scroll to services"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/30 hover:text-brand-accent hover:border-brand-accent/30 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
