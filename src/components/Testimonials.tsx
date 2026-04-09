import { Star, Quote } from 'lucide-react'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function Testimonials() {
  if (!business.testimonials.length) return null

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: business.design.ctaColor }}
            >
              Reviews
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What Our Clients Say
            </h2>
            {business.stats.find((s) => s.label.toLowerCase().includes('rating')) && (
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">
                  {business.stats.find((s) => s.label.toLowerCase().includes('rating'))?.value}
                </span>
              </div>
            )}
          </div>
        </AnimateIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {business.testimonials.map((review, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="bg-slate-50 rounded-2xl p-7 h-full flex flex-col hover:shadow-md transition-shadow duration-200 relative">
                {/* Quote icon */}
                <Quote
                  className="absolute top-6 right-6 w-8 h-8 opacity-10"
                  style={{ color: business.design.primaryColor }}
                />

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-700 leading-relaxed flex-1 text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-200">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: business.design.primaryColor }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{review.name}</div>
                    <div className="text-slate-400 text-xs">{review.location}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-xs text-slate-400 font-medium bg-slate-200 px-2 py-1 rounded-full">
                      Google
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
