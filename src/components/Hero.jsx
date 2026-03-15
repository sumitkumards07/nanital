import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax image */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110 z-0">
        <img
          src="/images/hotel_facade_wide.jpg"
          alt="Alka The Lake Side Hotel"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/60 via-transparent to-dark" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{ left: `${15 + i * 16}%`, top: `${25 + (i % 3) * 18}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-sans font-medium tracking-[0.3em] uppercase mb-5 block text-sm"
        >
          Nainital, Uttarakhand · Est. 2013
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight"
        >
          Where the Mountains<br />
          <span className="shimmer-text">Meet Royalty</span>
        </motion.h1>


        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-10 mb-10"
        >
          {[{ value: '48', label: 'Rooms' }, { value: '4.9★', label: 'Rated' }, { value: '10+', label: 'Years' }].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-primary font-bold">{s.value}</p>
              <p className="font-sans text-slate-400 text-xs uppercase tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/booking"
            className="bg-primary text-dark px-8 py-4 rounded-lg font-sans font-bold uppercase tracking-wide hover:scale-105 transition-transform"
          >
            Book Your Stay
          </Link>
          <Link
            to="/rooms"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-sans font-bold hover:bg-white/20 transition-all"
          >
            Explore Rooms
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-400"
      >
        <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={22} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
