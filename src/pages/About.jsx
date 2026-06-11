import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const founders = [
  {
    name: 'Evan',
    role: 'Co-Founder & Lead Developer',
    bio: 'The builder. Evan turns concepts into code, obsessing over performance and clean architecture. If it can be faster and sharper, he makes it so.',
    initials: 'E',
    color: '#0066ff',
  },
  {
    name: 'Anders',
    role: 'Co-Founder & Creative Director',
    bio: "The eye. Anders makes sure every site looks exactly right — not just functional, but memorable. He believes great design is invisible.",
    initials: 'A',
    color: '#0099ff',
  },
  {
    name: 'Eric',
    role: 'Co-Founder & Strategy Lead',
    bio: "The closer. Eric keeps projects scoped right, delivered on time, and actually moving the needle for clients. No fluff, just results.",
    initials: 'Er',
    color: '#60a5fa',
  },
]

export default function About() {
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
            <p className="text-[#0066ff] text-xs font-semibold tracking-widest uppercase mb-3">Who We Are</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Three Builders.<br /><span style={{ color: '#0066ff' }}>One Mission.</span>
            </h1>
            <p className="text-white/50 text-base max-w-xl leading-relaxed">
              We started Real Life Ventures because we were tired of seeing businesses get ripped off by agencies
              that overcharge and underdeliver. We cut through the noise and just get it done.
            </p>
          </motion.div>

          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-14 rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src="/team.webp"
              alt="Evan, Anders, and Eric — the Real Life Ventures team"
              className="w-full object-cover object-top"
              style={{ maxHeight: '480px' }}
            />
          </motion.div>

          {/* Founder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: `${f.color}40` }}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-lg mb-4"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}30`, color: f.color }}
                >
                  {f.initials}
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: f.color }}>{f.role}</p>
                <h3 className="font-display text-xl font-bold text-white mb-3">{f.name}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/8 mb-16" />

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-white mb-8">What We Stand For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: 'No Bloat', desc: 'We build exactly what you need. Nothing extra, nothing missing.' },
                { label: 'Fair Pricing', desc: "Agency quality without the agency markup. You shouldn't overpay to look good." },
                { label: 'Fast Delivery', desc: 'Most projects launch in weeks, not months. Your time matters.' },
                { label: 'Real Talk', desc: 'No buzzwords. We tell you what we\'re building and why.' },
              ].map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 p-5 rounded-xl border border-white/8 bg-white/[0.02]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff] mt-1.5 shrink-0" />
                  <div>
                    <p className="font-display font-bold text-white mb-1">{v.label}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-14"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-7 py-3 bg-[#0066ff] text-white font-bold rounded-md cursor-pointer hover:bg-[#0052cc] transition-colors"
              style={{ boxShadow: '0 0 20px rgba(0,102,255,0.3)' }}
            >
              Work With Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
