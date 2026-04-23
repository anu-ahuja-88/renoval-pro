'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Phone, FileText } from 'lucide-react'
import { business } from '@/data/business'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const spring = { type: 'spring', stiffness: 400, damping: 20 } as const

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduce ? {} : { opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: shouldReduce ? 0 : 0.35, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Free Quote button */}
          <motion.a
            href="#quote"
            aria-label="Get a free quote"
            whileHover={shouldReduce ? {} : { scale: 1.05, y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.96 }}
            transition={spring}
            className="hidden sm:flex items-center gap-2 text-white px-5 py-3.5 rounded-full font-semibold text-sm cursor-pointer"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
              border: `1px solid ${business.design.ctaColor}50`,
              color: 'rgba(255,255,255,0.9)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            Free Quote
          </motion.a>

          {/* Call button */}
          <motion.a
            href={`tel:${business.phone.replace(/\s/g, '')}`}
            aria-label={`Call ${business.name} on ${business.phone}`}
            whileHover={shouldReduce ? {} : { scale: 1.05, y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.96 }}
            transition={spring}
            className="flex items-center gap-3 text-white px-6 py-4 rounded-full font-semibold cursor-pointer"
            style={{
              backgroundColor: business.design.ctaColor,
              boxShadow: `0 8px 32px ${business.design.ctaColor}50, 0 2px 8px rgba(0,0,0,0.3)`,
            }}
          >
            <motion.div
              animate={shouldReduce ? {} : { scale: [1, 1.25, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </motion.div>
            <span className="text-sm font-semibold">{business.phone}</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
