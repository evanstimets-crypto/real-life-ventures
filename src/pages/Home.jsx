import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

export default function Home() {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0066ff]/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0066ff]/30 bg-[#0066ff]/8 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
            <span className="text-xs text-[#0066ff] font-semibold tracking-widest uppercase">Website Creation Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-bold leading-[1.0] tracking-tight mb-6"
          >
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-white">Websites That</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl" style={{ color: '#0066ff' }}>Actually Convert.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            We build modern, clean websites that make your business look like it means business.
            No overcomplicating. No overcharging. Just results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
              className="group px-8 py-3.5 bg-[#0066ff] text-white font-bold rounded-md cursor-pointer flex items-center gap-2 transition-colors hover:bg-[#0052cc]"
              style={{ boxShadow: '0 0 25px rgba(0,102,255,0.35)' }}
            >
              Get Your Website Built
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/work')}
              className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-md cursor-pointer hover:border-white/40 hover:bg-white/4 transition-all duration-200"
            >
              See Our Work
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-16"
          >
            {[
              { value: '100%', label: 'Custom Built' },
              { value: 'Fair', label: 'Pricing' },
              { value: 'Fast', label: 'Delivery' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/35 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-[#0066ff]/60 to-transparent mx-auto"
          />
        </motion.div>
      </section>

      {/* Mini preview strip — services teaser */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-white/40 text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              One thing. Done right.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Custom Design', desc: 'No templates. Built from scratch for your brand.' },
              { title: 'Clean Code', desc: 'Fast, modern, and built to last. No bloat.' },
              { title: 'Fair Pricing', desc: "Agency quality without the agency markup." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#0066ff]/30 transition-colors duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff] mb-4" />
                <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => navigate('/services')}
              className="text-[#0066ff] text-sm font-semibold hover:underline cursor-pointer"
            >
              View all services →
            </button>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
