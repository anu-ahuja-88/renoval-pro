'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimateIn({ children, delay = 0, className, direction = 'up' }: Props) {
  const shouldReduce = useReducedMotion()

  const initial = shouldReduce
    ? { opacity: 1 }
    : direction === 'up' ? { opacity: 0, y: 24 }
    : direction === 'left' ? { opacity: 0, x: -24 }
    : direction === 'right' ? { opacity: 0, x: 24 }
    : { opacity: 0 }

  const animate = { opacity: 1, y: 0, x: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
