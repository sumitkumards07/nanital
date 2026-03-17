import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Rooms', to: '/rooms',
    children: [
      { label: 'All Rooms', to: '/rooms' },
      { label: 'Standard Room', to: '/rooms/standard-room' },
      { label: 'Deluxe Mountain View', to: '/rooms/deluxe-mountain-view' },
      { label: 'Family Suite', to: '/rooms/family-suite' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Facilities', to: '/facilities' },
  {
    label: 'Explore', to: '#',
    children: [
      { label: 'Things To Do', to: '/things-to-do' },
      { label: 'Nearby Attractions', to: '/attractions' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setActiveDropdown(null) }, [location])

  const isActive = (to) => location.pathname === to

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b border-primary/20
        ${scrolled ? 'bg-dark/90 backdrop-blur-md py-2' : 'bg-dark/70 backdrop-blur-md py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">landscape</span>
          <div className="hidden sm:block">
            <p className="font-display font-bold text-slate-100 text-lg leading-none uppercase tracking-tight">
              Alka The Lake View Hotel
            </p>
            <p className="text-primary/60 text-xs font-sans tracking-widest mt-0.5">
              Your comfort, our priority
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.to === '#' ? '/' : link.to}
                className={`flex items-center gap-1 text-sm font-sans font-medium transition-colors
                  ${isActive(link.to) ? 'text-primary' : 'text-slate-300 hover:text-primary'}`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {link.children && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-52 bg-dark/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden shadow-royal"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block px-4 py-3 text-sm font-sans text-slate-300 hover:text-primary hover:bg-primary/5 transition-colors border-b border-primary/10 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+917082676889"
            className="hidden md:flex items-center gap-2 text-slate-400 hover:text-primary text-sm font-sans transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-sm">call</span>
            <span className="hidden lg:block">+91 7082676889</span>
          </a>

          <Link
            to="/booking"
            className="hidden md:inline-block bg-primary text-dark px-6 py-2.5 rounded-lg font-sans font-bold text-sm tracking-wide hover:brightness-110 transition-all uppercase"
          >
            Book Now
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-slate-100 p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark/98 backdrop-blur-md border-t border-primary/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.to === '#' ? '/' : link.to}
                    className={`block px-3 py-3 rounded-lg text-sm font-sans font-medium transition-colors
                      ${isActive(link.to) ? 'text-primary bg-primary/5' : 'text-slate-300 hover:text-primary hover:bg-primary/5'}`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-0.5 mb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block px-3 py-2 text-xs font-sans text-slate-500 hover:text-primary transition-colors"
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-primary/10 space-y-3">
                <a
                  href="tel:+917082676889"
                  className="flex items-center gap-2 text-slate-400 px-3 py-2 text-sm font-sans"
                >
                  <span className="material-symbols-outlined text-primary text-sm">call</span>
                  +91 7082676889
                </a>
                <Link
                  to="/booking"
                  className="block w-full bg-primary text-dark text-center py-3 rounded-lg font-sans font-bold text-sm uppercase tracking-wide"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
