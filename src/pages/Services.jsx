import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const services = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    title: 'Custom Website Design',
    desc: 'Hand-crafted websites built from scratch. No templates. Every pixel has a purpose.',
    badge: 'Most Popular',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Landing Pages',
    desc: 'High-converting single pages built to capture leads, drive signups, or launch your product.',
    badge: null,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    title: 'E-Commerce Stores',
    desc: 'Online stores built to sell. Clean product pages, smooth checkout, mobile-first.',
    badge: null,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Business Websites',
    desc: 'For local shops, service companies, and growing businesses. Professional without the premium markup.',
    badge: null,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Website Redesigns',
    desc: 'Your current site not cutting it? We modernize it — faster, cleaner, built to perform.',
    badge: null,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    title: 'Startup Launch Sites',
    desc: 'Building something new? Get online fast with a site that looks funded from day one.',
    badge: 'Fast Turnaround',
  },
]

export default function Services() {
  const navigate = useNavigate()

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
            <p className="text-[#0066ff] text-xs font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              We Build Websites.<br /><span style={{ color: '#0066ff' }}>Period.</span>
            </h1>
            <p className="text-white/50 text-base max-w-lg leading-relaxed">
              From local businesses to startups — if you need a web presence that works, we&apos;ve got you.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4, borderColor: 'rgba(0,102,255,0.4)' }}
                className="relative group p-6 rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04] cursor-default"
              >
                {s.badge && (
                  <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 text-xs font-bold bg-[#0066ff] text-white rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="text-[#0066ff] mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-white mb-2 group-hover:text-[#0066ff] transition-colors duration-200">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-14 p-8 rounded-2xl border border-[#0066ff]/20 bg-[#0066ff]/5 text-center"
          >
            <h2 className="font-display text-2xl font-bold text-white mb-2">Ready to get started?</h2>
            <p className="text-white/50 text-sm mb-6">Tell us about your project — no pressure, no pitch decks.</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-7 py-3 bg-[#0066ff] text-white font-bold rounded-md cursor-pointer hover:bg-[#0052cc] transition-colors"
              style={{ boxShadow: '0 0 20px rgba(0,102,255,0.3)' }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
