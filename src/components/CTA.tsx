'use client'

import { Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function CTA() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: business.design.primaryColor }}>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top rule */}
        <div className="flex items-center gap-6 mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 flex-shrink-0">
            Ready to Start?
          </p>
          <div className="flex-1 h-px bg-white/8" aria-hidden="true" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">

          {/* Left: Big headline */}
          <AnimateIn>
            <h2
              className="text-5xl sm:text-6xl xl:text-[72px] font-extrabold text-white leading-[0.95]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get a quote.
              <br />
              <span className="text-white/40">No obligation.</span>
            </h2>
          </AnimateIn>

          {/* Right: Phone + CTA */}
          <AnimateIn delay={0.12}>
            <div>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
                Call us directly or fill in the form. We come out, take a look, and give you a straight, upfront quote. No hidden costs.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <motion.a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  aria-label={`Call us on ${business.phone}`}
                  whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
                  whileTap={shouldReduce ? {} : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="inline-flex items-center gap-3 text-white px-7 py-4 rounded-xl font-semibold text-base cursor-pointer"
                  style={{
                    backgroundColor: business.design.ctaColor,
                    boxShadow: `0 8px 32px ${business.design.ctaColor}35`,
                  }}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call {business.phone}
                </motion.a>
                <motion.a
                  href="#quote"
                  whileHover={shouldReduce ? {} : { scale: 1.02, y: -1 }}
                  whileTap={shouldReduce ? {} : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="inline-flex items-center gap-2 text-white/75 font-semibold text-base px-7 py-4 rounded-xl cursor-pointer transition-colors duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  Fill in the form
                </motion.a>
              </div>

              {/* Service areas */}
              {business.serviceAreas && business.serviceAreas.length > 0 && (
                <div className="mt-8 pt-8 border-t border-white/8">
                  <p className="text-white/55 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                    Serving
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {business.serviceAreas.map((area, i) => (
                      <span
                        key={i}
                        className="text-white/60 text-sm font-medium"
                      >
                        {area}{i < business.serviceAreas.length - 1 && ' /'}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
