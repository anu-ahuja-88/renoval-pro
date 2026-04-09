'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { business } from '@/data/business'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
  ]

  const textColor = scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/70 hover:text-white'
  const phoneColor = scrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" aria-label={`${business.name} — back to top`} className="flex items-center">
            <Image
              src="/renoval-pro-logo-removebg-preview.png"
              alt="Renoval Pro NZ"
              width={200}
              height={72}
              className="h-[72px] w-auto object-contain transition-all duration-300"
              style={{ filter: scrolled ? 'invert(0)' : 'invert(1) brightness(1)' }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-colors duration-200 ${textColor}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              aria-label={`Call us on ${business.phone}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${phoneColor}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href="#quote"
              className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-all duration-200 hover:-translate-y-px shadow-sm"
              style={{ backgroundColor: business.design.ctaColor }}
            >
              Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                aria-label={`Call us on ${business.phone}`}
                className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-slate-700"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {business.phone}
              </a>
              <a
                href="#quote"
                className="block text-center text-white font-semibold px-4 py-3 rounded-lg"
                style={{ backgroundColor: business.design.ctaColor }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
