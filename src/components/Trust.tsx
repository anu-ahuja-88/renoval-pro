import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function Trust() {
  if (!business.stats.length) return null

  return (
    <section className="py-14" style={{ backgroundColor: business.design.primaryColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {business.stats.map((stat, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className="text-center text-white">
                <div
                  className="text-3xl sm:text-4xl font-extrabold mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium opacity-70 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
