'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/lib/constants';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Areas', href: '#areas' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-deep/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        <a href="#" aria-label="Leak Detection Lake Norman - Back to top">
          <Logo size="sm" variant="light" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-silver-light tracking-wide transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-accent/90 hover:shadow-xl md:flex"
          aria-label={`Call us at ${SITE.phone}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>{SITE.phone}</span>
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-brand-silver-light transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen ? 'true' : 'false'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-deep transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <Logo size="sm" variant="light" />
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-white hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 px-6 pt-12" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-semibold text-white transition-colors hover:text-brand-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.phoneHref}
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center gap-3 rounded-full bg-brand-accent px-8 py-4 text-lg font-bold text-white"
          >
            <Phone className="h-5 w-5" />
            {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
