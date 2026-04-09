'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function Process() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateIn>
          <div className="mb-16 pb-10 border-b border-slate-100">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
              style={{ color: business.design.ctaColor }}
            >
              How It Works
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.0]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Simple from
                <br />
                <span className="text-slate-300">start to finish.</span>
              </h2>
              <motion.a
                href="#quote"
                whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-xl cursor-pointer whitespace-nowrap self-start sm:self-auto"
                style={{
                  backgroundColor: business.design.ctaColor,
                  boxShadow: `0 6px 24px ${business.design.ctaColor}35`,
                }}
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </div>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {business.process.map((step, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="relative py-8 pr-8 lg:border-r last:border-r-0 border-slate-100 group">
                {/* Large faint step number — decorative */}
                <div
                  className="text-[88px] font-extrabold leading-none mb-4 select-none"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: i === 0 ? `${business.design.ctaColor}18` : 'rgba(0,0,0,0.05)',
                  }}
                  aria-hidden="true"
                >
                  {step.step}
                </div>

                {/* Accent line */}
                <div
                  className="w-8 h-0.5 mb-5 transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: business.design.ctaColor }}
                  aria-hidden="true"
                />

                <h3
                  className="text-base font-bold text-slate-900 mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <span className="sr-only">Step {step.step}: </span>
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>

                {/* Connector arrow (desktop, not last) — decorative */}
                {i < business.process.length - 1 && (
                  <div className="hidden lg:block absolute top-[60px] -right-3 z-10" aria-hidden="true">
                    <ArrowRight className="w-5 h-5 text-slate-200" />
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
