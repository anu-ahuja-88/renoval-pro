'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Send, CheckCircle2, Phone, Mail, User, MessageSquare, ChevronDown } from 'lucide-react'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Plastering',
  'Gibbing',
  'Timber Repair',
  'Kitchen Cabinets',
  'Property Maintenance',
  'Not sure yet',
]

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export default function QuoteForm() {
  const shouldReduce = useReducedMotion()
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitError, setSubmitError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) e.name = 'Your name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email address required'
    if (!form.service) e.service = 'Please select a service'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    // Honeypot check — bots fill this, humans never see it
    const honeypot = ((e.currentTarget as HTMLFormElement).elements.namedItem('website') as HTMLInputElement)?.value ?? ''
    if (honeypot) { setSubmitted(true); return }

    setLoading(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, honeypot }),
      })
      if (!res.ok) throw new Error('Send failed')
      setSubmitted(true)
    } catch {
      setSubmitError(`Something went wrong on our end. Please call us on ${business.phone} and we'll sort you out.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quote" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0F0F0E' }}>
      {/* Background glow — decorative */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none blur-[120px] opacity-10"
        style={{ backgroundColor: business.design.ctaColor }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Copy */}
          <div className="lg:sticky lg:top-32">
            <AnimateIn>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#60A5FA' }}
              >
                Free Quote
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Tell us about
                <br />
                your project.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Fill in the form and we&apos;ll get back to you with a straight, no-nonsense quote. No obligation.
              </p>
            </AnimateIn>

            {/* Contact details */}
            <AnimateIn delay={0.1}>
              <div className="space-y-5">
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  aria-label={`Call us on ${business.phone}`}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: `${business.design.ctaColor}18` }}
                    aria-hidden="true"
                  >
                    <Phone className="w-5 h-5" style={{ color: business.design.ctaColor }} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-white/55 font-medium mb-0.5">Phone</div>
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-200">
                      {business.phone}
                    </div>
                  </div>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: `${business.design.ctaColor}18` }}
                    aria-hidden="true"
                  >
                    <Mail className="w-5 h-5" style={{ color: business.design.ctaColor }} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-white/55 font-medium mb-0.5">Email</div>
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-200">
                      {business.email}
                    </div>
                  </div>
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Right: Form */}
          <AnimateIn delay={0.15} direction="right">
            <div
              className="rounded-2xl border p-8 sm:p-10"
              style={{
                backgroundColor: '#161614',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={shouldReduce ? {} : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: shouldReduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center py-8"
                    role="status"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={shouldReduce ? {} : { scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={shouldReduce ? { duration: 0 } : { delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${business.design.ctaColor}20` }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: business.design.ctaColor }} aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      Got it, thanks.
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                      We&apos;ll be in touch shortly with a quote. If it&apos;s urgent, call us on{' '}
                      <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                        {business.phone}
                      </a>.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={shouldReduce ? {} : { opacity: 0, scale: 0.98 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Honeypot — hidden from real users, bots fill this in */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
                    />
                    {/* Name + Phone row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Your name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        icon={<User className="w-4 h-4" aria-hidden="true" />}
                        error={errors.name}
                        required
                        autoComplete="name"
                      />
                      <Field
                        label="Phone number"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        icon={<Phone className="w-4 h-4" aria-hidden="true" />}
                        error={errors.phone}
                        required
                        autoComplete="tel"
                      />
                    </div>

                    {/* Email */}
                    <Field
                      label="Email address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      icon={<Mail className="w-4 h-4" aria-hidden="true" />}
                      error={errors.email}
                      required
                      autoComplete="email"
                    />

                    {/* Service select */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2"
                      >
                        What do you need?
                      </label>
                      {errors.service && (
                        <motion.p
                          id="service-error"
                          initial={shouldReduce ? {} : { opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mb-1.5"
                          role="alert"
                        >
                          {errors.service}
                        </motion.p>
                      )}
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          aria-describedby={errors.service ? 'service-error' : undefined}
                          aria-invalid={!!errors.service}
                          className="w-full appearance-none rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition-all duration-200 pr-10 cursor-pointer"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: `1px solid ${errors.service ? '#f87171' : 'rgba(255,255,255,0.08)'}`,
                            color: form.service ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = business.design.ctaColor
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${business.design.ctaColor}20`
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = errors.service ? '#f87171' : 'rgba(255,255,255,0.08)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          <option value="" disabled style={{ backgroundColor: '#1a1a18', color: 'rgba(255,255,255,0.4)' }}>
                            Select a service...
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s} style={{ backgroundColor: '#1a1a18', color: 'rgba(255,255,255,0.9)' }}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-white/30" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2"
                      >
                        Tell us more <span className="normal-case font-normal text-white/40">(optional)</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-white/25 pointer-events-none" aria-hidden="true" />
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="What rooms, rough size, timeline..."
                          className="w-full rounded-xl px-4 py-3.5 pl-10 text-sm outline-none resize-none transition-all duration-200"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.9)',
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = business.design.ctaColor
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${business.design.ctaColor}20`
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Submit error */}
                    {submitError && (
                      <div className="rounded-xl px-4 py-3 text-sm text-red-300 border border-red-500/30 bg-red-500/10" role="alert">
                        {submitError}
                      </div>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading && !shouldReduce ? { scale: 1.02, y: -1 } : {}}
                      whileTap={!loading && !shouldReduce ? { scale: 0.98 } : {}}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className="relative w-full overflow-hidden flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-base transition-opacity duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: business.design.ctaColor,
                        color: '#fff',
                        boxShadow: `0 8px 32px ${business.design.ctaColor}35`,
                      }}
                    >
                      {/* Shimmer sweep on hover — decorative */}
                      {!shouldReduce && (
                        <motion.div
                          className="absolute inset-0 bg-white/10 skew-x-12"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '200%' }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative flex items-center gap-3">
                        {loading ? (
                          <>
                            <motion.div
                              animate={shouldReduce ? {} : { rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              aria-hidden="true"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" aria-hidden="true" />
                            Send it through
                          </>
                        )}
                      </span>
                    </motion.button>

                    <p className="text-xs text-white/50 text-center">
                      We&apos;ll be in touch soon. No spam.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

// Reusable field component
function Field({
  label,
  name,
  type,
  value,
  onChange,
  icon,
  error,
  required,
  autoComplete,
}: {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
  error?: string
  required?: boolean
  autoComplete?: string
}) {
  const errorId = error ? `${name}-error` : undefined

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2"
      >
        {label}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" aria-hidden="true">
          {icon}
        </div>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={label}
          aria-describedby={errorId}
          aria-invalid={!!error}
          className="w-full rounded-xl px-4 py-3.5 pl-10 text-sm outline-none transition-all duration-200"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: `1px solid ${error ? '#f87171' : 'rgba(255,255,255,0.08)'}`,
            color: 'rgba(255,255,255,0.9)',
          }}
          onFocus={(e) => {
            const ctaColor = business.design.ctaColor
            e.currentTarget.style.borderColor = ctaColor
            e.currentTarget.style.boxShadow = `0 0 0 3px ${ctaColor}20`
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? '#f87171' : 'rgba(255,255,255,0.08)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        />
      </div>
      {error && (
        <p
          id={errorId}
          className="text-red-400 text-xs mt-1.5"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}
