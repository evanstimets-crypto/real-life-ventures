import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const projects = [
  {
    title: 'NorthEdge Fitness',
    category: 'Local Business',
    desc: 'Gym landing page with class schedules, trainer profiles, and membership CTAs. 3x increase in signups.',
    tags: ['React', 'Tailwind', 'Booking'],
    accent: '#0066ff',
    year: '2024',
  },
  {
    title: 'Apex Roofing Co.',
    category: 'Service Business',
    desc: 'Multi-page site with lead capture, gallery, and Google Maps. Doubled inbound leads.',
    tags: ['WordPress', 'Custom CSS', 'SEO'],
    accent: '#0099ff',
    year: '2024',
  },
  {
    title: 'Launchpad SaaS',
    category: 'Startup',
    desc: 'Product launch site with waitlist integration, feature showcases, and animated demos.',
    tags: ['Next.js', 'Framer Motion', 'Stripe'],
    accent: '#0066ff',
    year: '2025',
  },
  {
    title: 'Bloom Botanicals',
    category: 'E-Commerce',
    desc: 'Shopify store redesign for a plant shop. Mobile-first, 40% bounce rate drop.',
    tags: ['Shopify', 'Liquid', 'Custom UI'],
    accent: '#00cc77',
    year: '2025',
  },
  {
    title: 'Iron & Oak Builds',
    category: 'Portfolio',
    desc: 'Carpentry portfolio with full-screen gallery and quote request system.',
    tags: ['React', 'Custom Forms', 'GSAP'],
    accent: '#ff6600',
    year: '2025',
  },
  {
    title: 'Meridian Law Group',
    category: 'Professional Services',
    desc: 'Law firm website with practice pages, attorney bios, and consultation booking.',
    tags: ['Next.js', 'Tailwind', 'Cal.com'],
    accent: '#0066ff',
    year: '2025',
  },
]

export default function Work() {
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
            <p className="text-[#0066ff] text-xs font-semibold tracking-widest uppercase mb-3">Our Work</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Results, Not <span style={{ color: '#0066ff' }}>Excuses.</span>
            </h1>
            <p className="text-white/50 text-base max-w-lg leading-relaxed">
              Real projects, real outcomes. Here&apos;s what we&apos;ve shipped.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                {/* Mock preview */}
                <div className="h-40 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${p.accent}18, #000)` }}>
                  <div className="absolute top-3 left-3 right-3 h-5 rounded-sm bg-black/40 flex items-center gap-1 px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                    <div className="flex-1 ml-1 h-2 rounded-sm bg-white/5" />
                  </div>
                  <div className="absolute inset-0 top-11 p-4 flex flex-col gap-2">
                    <div className="h-2 w-28 rounded-sm" style={{ background: p.accent, opacity: 0.7 }} />
                    <div className="h-1.5 w-full rounded-sm bg-white/10" />
                    <div className="h-1.5 w-3/4 rounded-sm bg-white/8" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: p.accent }}>{p.category}</span>
                    <span className="text-xs text-white/30 font-mono">{p.year}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-[#0066ff] transition-colors duration-200">{p.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded bg-white/5 text-white/40 border border-white/8">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-white/35 text-sm mb-4">Want to be next?</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-7 py-3 border border-[#0066ff]/40 text-[#0066ff] font-bold rounded-md cursor-pointer hover:bg-[#0066ff]/10 transition-colors"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
