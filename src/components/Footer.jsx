import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Real Life Ventures" className="h-7 w-auto" />
          <span className="font-display font-bold text-sm text-white">
            Real Life <span style={{ color: '#0066ff' }}>Ventures</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: 'Services', to: '/services' },
            { label: 'Work', to: '/work' },
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
          ].map(link => (
            <Link key={link.label} to={link.to} className="text-white/35 hover:text-white text-sm transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Real Life Ventures
        </p>
      </div>
    </footer>
  )
}
