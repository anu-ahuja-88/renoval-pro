'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Phone, MapPin, CheckCircle } from 'lucide-react'
import { business } from '@/data/business'

export default function HeroVisual() {
  const shouldReduce = useReducedMotion()

  const t = (delay = 0, duration = 0.7) =>
    shouldReduce
      ? { duration: 0, delay: 0 }
      : { duration, delay, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <motion.div
      {...(shouldReduce ? {} : {
        initial: { opacity: 0, x: 32 },
        animate: { opacity: 1, x: 0 },
        transition: t(0.18, 0.85),
      })}
      className="relative w-full"
      style={{ height: '560px' }}
    >
      {/* Dot grid background — decorative */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[80px] opacity-20 pointer-events-none"
        style={{ backgroundColor: business.design.ctaColor }}
        aria-hidden="true"
      />

      {/* ── Main photo — tall centre ── */}
      <motion.div
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: t(0.22, 0.8),
        })}
        className="absolute rounded-2xl overflow-hidden shadow-2xl"
        style={{
          top: '5%',
          left: '18%',
          right: '0%',
          bottom: '5%',
          border: `1px solid ${business.design.ctaColor}25`,
        }}
      >
        <Image
          src="/exterior-painting-scaffolding-wellington-house-renoval-pro.jpg"
          alt={`Exterior house painting by ${business.name} Wellington`}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
          priority
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)' }}
          aria-hidden="true"
        />
      </motion.div>

      {/* ── Secondary photo — top left, overlapping ── */}
      <motion.div
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, y: 20, rotate: -3 },
          animate: { opacity: 1, y: 0, rotate: -3 },
          transition: t(0.38, 0.7),
        })}
        className="absolute rounded-xl overflow-hidden shadow-2xl"
        style={{
          width: '42%',
          height: '46%',
          top: '4%',
          left: '0%',
          rotate: '-3deg',
          border: '2px solid rgba(255,255,255,0.1)',
        }}
      >
        <Image
          src="/interior-painting-living-room-white-beams-teal-wall-renoval-pro.jpg"
          alt={`Interior painting with white beams and teal feature wall — ${business.name}`}
          fill
          sizes="20vw"
          className="object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* ── Third photo — bottom left ── */}
      <motion.div
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, y: -20, rotate: 2 },
          animate: { opacity: 1, y: 0, rotate: 2 },
          transition: t(0.48, 0.7),
        })}
        className="absolute rounded-xl overflow-hidden shadow-2xl"
        style={{
          width: '38%',
          height: '38%',
          bottom: '4%',
          left: '2%',
          rotate: '2deg',
          border: '2px solid rgba(255,255,255,0.08)',
        }}
      >
        <Image
          src="/kitchen-renovation-painting-black-cabinetry-wellington-renoval-pro.jpg"
          alt={`Kitchen cabinet renovation with painted black cabinetry — ${business.name}`}
          fill
          sizes="18vw"
          className="object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* ── Floating badge: Location ── */}
      <motion.div
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, x: -16 },
          animate: { opacity: 1, x: 0 },
          transition: t(0.6, 0.5),
        })}
        className="absolute flex items-center gap-2 px-3 py-2 rounded-full shadow-xl"
        style={{
          top: '50%',
          left: '-4px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
        aria-hidden="true"
      >
        <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: business.design.ctaColor }} />
        <span className="text-white text-xs font-semibold whitespace-nowrap">Wellington Region</span>
      </motion.div>

      {/* ── Floating badge: Free Quotes ── */}
      <motion.div
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, y: -12 },
          animate: { opacity: 1, y: 0 },
          transition: t(0.7, 0.5),
        })}
        className="absolute flex items-center gap-2 px-3 py-2 rounded-full shadow-xl"
        style={{
          top: '8%',
          right: '4%',
          backgroundColor: business.design.ctaColor,
          boxShadow: `0 4px 24px ${business.design.ctaColor}60`,
        }}
        aria-hidden="true"
      >
        <CheckCircle className="w-3.5 h-3.5 text-white flex-shrink-0" />
        <span className="text-white text-xs font-bold whitespace-nowrap">Free Quotes</span>
      </motion.div>

      {/* ── Floating badge: Phone ── */}
      <motion.a
        href={`tel:${business.phone.replace(/\s/g, '')}`}
        aria-label={`Call ${business.name} on ${business.phone}`}
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: t(0.8, 0.5),
        })}
        whileHover={shouldReduce ? {} : { scale: 1.04, y: -2 }}
        className="absolute flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl cursor-pointer"
        style={{
          bottom: '8%',
          right: '4%',
          backgroundColor: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: business.design.ctaColor }}
          aria-hidden="true"
        >
          <Phone className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-medium leading-none mb-0.5 uppercase tracking-wide">Call us free</div>
          <div className="text-sm font-bold text-slate-900">{business.phone}</div>
        </div>
      </motion.a>

      {/* ── Services count badge ── */}
      <motion.div
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: t(0.9, 0.4),
        })}
        className="absolute flex flex-col items-center justify-center rounded-2xl shadow-xl"
        style={{
          width: '72px',
          height: '72px',
          bottom: '30%',
          right: '2%',
          backgroundColor: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${business.design.ctaColor}30`,
        }}
        aria-hidden="true"
      >
        <span
          className="text-2xl font-extrabold leading-none"
          style={{ color: business.design.ctaColor }}
        >
          {business.services.length}
        </span>
        <span className="text-[9px] text-white/50 font-semibold uppercase tracking-wider mt-0.5">Services</span>
      </motion.div>
    </motion.div>
  )
}
