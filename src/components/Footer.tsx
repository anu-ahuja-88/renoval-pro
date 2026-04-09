import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { business } from '@/data/business'

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
  ]

  return (
    <footer style={{ backgroundColor: '#0A0A0A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image
                src="/renoval-pro-logo-removebg-preview.png"
                alt="Renoval Pro NZ"
                width={180}
                height={64}
                className="h-[72px] w-auto object-contain"
                style={{ filter: 'invert(1)' }}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {business.description}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55 mb-5">
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social */}
            {(business.social?.facebook || business.social?.instagram) && (
              <div className="mt-6 flex items-center gap-4">
                {business.social.facebook && (
                  <a
                    href={business.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors duration-150"
                    aria-label="Renoval Pro NZ on Facebook"
                  >
                    <Facebook className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
                {business.social.instagram && (
                  <a
                    href={business.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors duration-150"
                    aria-label="Renoval Pro NZ on Instagram"
                  >
                    <Instagram className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55 mb-5">
              Contact
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  aria-label={`Call us on ${business.phone}`}
                  className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors duration-150"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: business.design.ctaColor }} aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors duration-150"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: business.design.ctaColor }} aria-hidden="true" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/55 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: business.design.ctaColor }} aria-hidden="true" />
                {business.address}
              </li>
            </ul>
          </div>
        </div>

        {/* SEO address block */}
        <div className="pb-8 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <address className="not-italic text-white/50 text-xs leading-relaxed">
            <strong className="text-white/60 not-italic">{business.name}</strong> — Wellington, New Zealand
            <br />
            <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-white/70 transition-colors">{business.phone}</a>
            {' · '}
            <a href={`mailto:${business.email}`} className="hover:text-white/70 transition-colors">{business.email}</a>
            <br />
            Serving {business.serviceAreas.join(' · ')}
          </address>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Website by{' '}
            <span className="text-white/50 font-medium">Verra Web Studio</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
