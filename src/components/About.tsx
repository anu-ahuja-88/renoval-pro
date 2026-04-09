import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top rule */}
        <div className="flex items-center gap-6 mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] flex-shrink-0"
            style={{ color: '#60A5FA' }}
          >
            About Us
          </p>
          <div className="flex-1 h-px bg-white/8" aria-hidden="true" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Headline */}
          <AnimateIn direction="left">
            <h2
              className="text-4xl sm:text-5xl xl:text-[58px] font-extrabold text-white leading-[1.0]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {business.about.headline.split(',').map((part, i, arr) => (
                <span key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && ','}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Decorative watermark — hidden from assistive technology */}
            <div
              className="text-[120px] font-extrabold leading-none mt-4 select-none"
              style={{ color: 'rgba(255,255,255,0.07)', fontFamily: 'var(--font-heading)' }}
              aria-hidden="true"
            >
              RPNz
            </div>
          </AnimateIn>

          {/* Right: Body + credentials */}
          <div>
            <AnimateIn>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                {business.about.body}
              </p>
            </AnimateIn>

            {/* Credentials */}
            {business.about.credentials.length > 0 && (
              <div className="border-t border-white/8 pt-8 space-y-0">
                {business.about.credentials.map((cred, i) => (
                  <AnimateIn key={i} delay={i * 0.07}>
                    <div className="flex items-center gap-5 py-4 border-b border-white/6">
                      <span className="text-xs font-mono text-white/30 w-5 flex-shrink-0" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: business.design.ctaColor }}
                        aria-hidden="true"
                      />
                      <span className="text-white/75 text-sm font-medium">{cred}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
