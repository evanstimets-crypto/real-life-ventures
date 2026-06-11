import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import PageWrapper from '../components/PageWrapper'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    try {
      await emailjs.send(
        'service_740pmvq',
        'template_xqa6x7i',
        { from_name: form.name, from_email: form.email, message: form.message },
        'aL47Cy0LxjL8E8dUB'
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="text-[#0066ff] text-xs font-semibold tracking-widest uppercase mb-3">Let&apos;s Build</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Ready to Get<br /><span style={{ color: '#0066ff' }}>Your Site Built?</span>
            </h1>
            <p className="text-white/50 text-base max-w-lg leading-relaxed">
              Drop us a message. No sales calls, no pitch decks — just a straightforward conversation about what you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {[
                {
                  label: 'Email',
                  value: 'rlmediaclips@gmail.com',
                  href: 'mailto:rlmediaclips@gmail.com',
                  icon: <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
                {
                  label: 'Phone',
                  value: '507-735-0761',
                  href: 'tel:5077350761',
                  icon: <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M22 16.92V19.92C22 20.48 21.52 21 20.96 20.97C16.74 20.63 12.79 19.57 10.19 17.88C7.77 16.34 5.73 14.29 4.18 11.87C2.48 9.27 1.42 5.31 1.08 1.08C1.05 0.52 1.56 0 2.12 0H5.12C5.67 0 6.12 0.39 6.17 0.94C6.37 2.44 6.78 3.91 7.36 5.31C7.52 5.69 7.41 6.13 7.1 6.38L5.84 7.64C7.3 10.13 9.43 12.26 11.92 13.72L13.18 12.46C13.43 12.15 13.87 12.04 14.25 12.2C15.65 12.78 17.12 13.19 18.62 13.39C19.17 13.44 19.56 13.89 19.56 14.44L22 16.92Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
                },
                {
                  label: 'Location',
                  value: 'Minnesota, USA',
                  href: null,
                  icon: <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" strokeWidth="1.8"/></svg>,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0066ff]/10 border border-[#0066ff]/20 flex items-center justify-center text-[#0066ff] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm hover:text-[#0066ff] transition-colors">{item.value}</a>
                    ) : (
                      <span className="text-white text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-2 p-4 rounded-xl border border-[#0066ff]/20 bg-[#0066ff]/5">
                <p className="text-white/55 text-sm leading-relaxed">
                  <span className="text-white font-semibold">Our promise:</span> Clear pricing, honest timelines, and a site you&apos;ll actually be proud of.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-14 text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#0066ff]/15 border border-[#0066ff]/30 flex items-center justify-center mb-4">
                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#0066ff]">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-white/45 text-sm mb-5">We&apos;ll be in touch soon — usually within a few hours.</p>
                      <button onClick={() => setStatus('idle')} className="text-sm text-[#0066ff] border border-[#0066ff]/30 px-4 py-1.5 rounded-md hover:bg-[#0066ff]/10 transition-colors cursor-pointer">
                        Send Another
                      </button>
                    </motion.div>
                  ) : status === 'error' ? (
                    <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-14 text-center">
                      <div className="w-14 h-14 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-4">
                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-red-400"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">Something went wrong</h3>
                      <p className="text-white/45 text-sm mb-5">Please try again or email us directly at rlmediaclips@gmail.com</p>
                      <button onClick={() => setStatus('idle')} className="text-sm text-[#0066ff] border border-[#0066ff]/30 px-4 py-1.5 rounded-md hover:bg-[#0066ff]/10 transition-colors cursor-pointer">Try Again</button>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {[
                        { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                        { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
                      ].map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block text-sm font-medium text-white/60 mb-1.5">{field.label}</label>
                          <input
                            id={field.id}
                            type={field.type}
                            value={form[field.id]}
                            onChange={e => handleChange(field.id, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-[#0066ff] transition-colors duration-200"
                          />
                          {errors[field.id] && <p className="mt-1 text-xs text-red-400">{errors[field.id]}</p>}
                        </div>
                      ))}

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1.5">Message</label>
                        <textarea
                          id="message"
                          rows={5}
                          value={form.message}
                          onChange={e => handleChange('message', e.target.value)}
                          placeholder="Tell us about your project..."
                          className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-[#0066ff] transition-colors duration-200 resize-none"
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={status !== 'loading' ? { scale: 1.01 } : {}}
                        whileTap={status !== 'loading' ? { scale: 0.99 } : {}}
                        className="w-full py-3 bg-[#0066ff] text-white font-bold rounded-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#0052cc] transition-colors flex items-center justify-center gap-2"
                      >
                        {status === 'loading' ? (
                          <>
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
