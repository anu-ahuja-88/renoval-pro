'use client'

import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

type IconName = keyof typeof Icons

function DynamicIcon({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) {
  const IconComponent = Icons[name as IconName] as React.ComponentType<{ className?: string; style?: React.CSSProperties; 'aria-hidden'?: boolean }>
  if (!IconComponent) return <Icons.Wrench className={className} style={style} aria-hidden />
  return <IconComponent className={className} style={style} aria-hidden />
}

export default function Services() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="services" className="py-24" style={{ backgroundColor: '#0F0F0E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="mb-0 pb-12 border-b border-white/8">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: '#60A5FA' }}
            >
              What We Do
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.0]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Painting, renovation,
                <br />
                <span className="text-white/40">maintenance.</span>
              </h2>
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                aria-label={`Call for a free quote — ${business.phone}`}
                className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer pb-1"
                style={{ color: '#60A5FA' }}
              >
                Call for a free quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Services list */}
        <div>
          {business.services.map((service, i) => (
            <motion.div
              key={i}
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                shouldReduce
                  ? { duration: 0 }
                  : { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
              }
              className="group relative border-b last:border-b-0"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {/* Left accent bar on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: business.design.ctaColor }}
                aria-hidden="true"
              />

              <div className="flex items-center gap-6 sm:gap-10 py-7 pl-5 sm:pl-8 pr-4 group-hover:pl-8 sm:group-hover:pl-12 transition-all duration-300">
                {/* Index number */}
                <span className="text-xs font-mono text-white/30 w-5 flex-shrink-0 hidden sm:block" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <DynamicIcon
                    name={service.icon}
                    className="w-5 h-5 transition-colors duration-300 group-hover:opacity-80"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  />
                </div>

                {/* Title + Description */}
                <div className="flex-1 grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-16 items-center">
                  <h3
                    className="text-base font-bold text-white leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
                </div>

                {/* Arrow — decorative, desktop only */}
                <ArrowRight
                  className="w-4 h-4 flex-shrink-0 transition-all duration-300 hidden sm:block group-hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
