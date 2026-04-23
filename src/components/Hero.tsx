'use client'

import { ArrowRight, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { business } from '@/data/business'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const t = (delay = 0, duration = 0.7) =>
    shouldReduce ? { duration: 0, delay: 0 } : { duration, delay, ease: [0.22, 1, 0.36, 1] as const }

  const fadeUp = (y = 24, delay = 0) =>
    shouldReduce ? {} : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: t(delay) }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A] pt-16">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Brand name */}
            <motion.div
              {...(shouldReduce ? {} : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: t(0, 0.6),
              })}
              className="mb-8 flex items-center gap-3"
            >
              <span
                className="w-5 h-px flex-shrink-0"
                style={{ backgroundColor: business.design.ctaColor }}
                aria-hidden="true"
              />
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: business.design.ctaColor }}
              >
                Renoval Pro NZ
              </span>
            </motion.div>

            {/* Location line */}
            <motion.div
              {...(shouldReduce ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: t(0.08, 0.6),
              })}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="w-6 h-px flex-shrink-0"
                style={{ backgroundColor: business.design.ctaColor }}
                aria-hidden="true"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Wellington, New Zealand
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-7 overflow-hidden">
              <motion.div
                {...(shouldReduce ? {} : {
                  initial: { opacity: 0, y: 48 },
                  animate: { opacity: 1, y: 0 },
                  transition: t(0.1, 0.7),
                })}
              >
                <h1
                  className="text-5xl sm:text-6xl xl:text-[78px] font-extrabold leading-[0.97] text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Wellington&apos;s
                  <br />
                  Home{' '}
                  <span style={{ color: business.design.ctaColor }}>Renovation</span>
                  <br />
                  <span className="text-white/40">Specialists</span>
                </h1>
              </motion.div>
            </div>

            {/* Subheadline */}
            <motion.p
              {...(shouldReduce ? {} : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: t(0.28, 0.6),
              })}
              className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-md"
            >
              {business.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...(shouldReduce ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: t(0.38, 0.6),
              })}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#quote"
                whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg cursor-pointer"
                style={{
                  backgroundColor: business.design.ctaColor,
                  color: '#fff',
                  boxShadow: `0 8px 28px ${business.design.ctaColor}35`,
                }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {business.hero.ctaPrimary}
              </motion.a>
              <motion.a
                href="#gallery"
                whileHover={shouldReduce ? {} : { scale: 1.02, y: -1 }}
                whileTap={shouldReduce ? {} : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm cursor-pointer transition-colors duration-200"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {business.hero.ctaSecondary}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </motion.div>

            {/* Trust strip — always visible, no stats required */}
            <motion.div
              {...(shouldReduce ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: t(0.52, 0.6),
              })}
              className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-8 border-t border-white/8"
              aria-label="Why choose Renoval Pro"
            >
              {[
                'Free quotes',
                'Fully insured',
                'Wellington-based',
                'We come to you',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: business.design.ctaColor }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-white/65 uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual composition */}
          <HeroVisual />

        </div>
      </div>

      {/* Scroll indicator — decorative */}
      <motion.div
        aria-hidden="true"
        {...(shouldReduce ? { style: { opacity: 0 } } : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.4, duration: 0.6 },
        })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-7 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  )
}
