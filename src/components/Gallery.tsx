'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

const photos = [
  {
    src: '/wellington-home-renovation-aerial-scaffolding-renoval-pro.jpg',
    alt: 'Wellington home renovation with aerial scaffolding — Renoval Pro NZ',
    label: 'Exterior Painting',
  },
  {
    src: '/interior-painting-living-room-white-beams-teal-wall-renoval-pro.jpg',
    alt: 'Interior painting with white painted beams and teal feature wall — Renoval Pro NZ Wellington',
    label: 'Interior Painting',
  },
  {
    src: '/wellington-home-aerial-blue-roof-exterior-paint-renoval-pro.jpg',
    alt: 'Wellington home aerial view with blue roof and fresh exterior paint — Renoval Pro NZ',
    label: 'Exterior Painting',
  },
  {
    src: '/kitchen-renovation-painting-black-cabinetry-wellington-renoval-pro.jpg',
    alt: 'Kitchen renovation with painted black cabinetry and stone benchtop — Renoval Pro NZ Wellington',
    label: 'Kitchen Cabinets',
  },
  {
    src: '/exterior-painting-white-villa-verandah-wellington-renoval-pro.jpg',
    alt: 'White villa exterior painting with freshly painted verandah — Renoval Pro NZ Wellington',
    label: 'Exterior Painting',
  },
  {
    src: '/interior-painting-sunroom-white-ceiling-wellington-renoval-pro.jpg',
    alt: 'Interior painting sunroom with white tongue and groove ceiling — Renoval Pro NZ Wellington',
    label: 'Interior Painting',
  },
  {
    src: '/exterior-painting-two-storey-weatherboard-wellington-renoval-pro.jpg',
    alt: 'Two-storey white weatherboard house exterior repaint — Renoval Pro NZ Wellington',
    label: 'Exterior Painting',
  },
  {
    src: '/kitchen-cabinet-painting-timber-look-wellington-renoval-pro.jpg',
    alt: 'Kitchen cabinet painting with timber look finish — Renoval Pro NZ Wellington',
    label: 'Kitchen Cabinets',
  },
  {
    src: '/interior-painting-apartment-white-walls-wellington-renoval-pro.jpg',
    alt: 'Interior painting fresh white walls in open plan apartment — Renoval Pro NZ Wellington',
    label: 'Interior Painting',
  },
]

export default function Gallery() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: '#0F0F0E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="pb-12 border-b mb-0" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
              style={{ color: '#60A5FA' }}
            >
              Our Work
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.0]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Real jobs.
                <br />
                <span className="text-white/40">Wellington homes.</span>
              </h2>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer"
                style={{ color: '#60A5FA' }}
              >
                Get a free quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={shouldReduce ? {} : { opacity: 0 }}
              whileInView={shouldReduce ? {} : { opacity: 1 }}
              viewport={{ once: true }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: i * 0.05 }}
              className={`relative group overflow-hidden ${i === 0 ? 'col-span-2 lg:col-span-1 row-span-2' : ''}`}
              style={{ aspectRatio: i === 0 ? 'auto' : '4/3', minHeight: i === 0 ? '400px' : undefined }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading={i === 0 ? 'eager' : 'lazy'}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
                aria-hidden="true"
              >
                <span
                  className="text-xs font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md"
                  style={{ backgroundColor: `${business.design.ctaColor}cc`, color: '#fff' }}
                >
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
