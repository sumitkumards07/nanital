import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)
  const timer = useRef(null)

  const startTimer = () => {
    timer.current = setInterval(() => {
      setDirection(1)
      setCurrent(p => (p + 1) % testimonials.length)
    }, 5500)
  }

  useEffect(() => { startTimer(); return () => clearInterval(timer.current) }, [])

  const go = (dir) => {
    clearInterval(timer.current)
    setDirection(dir)
    setCurrent(p => (p + dir + testimonials.length) % testimonials.length)
    startTimer()
  }

  const t = testimonials[current]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="bg-dark/40 border border-primary/10 rounded-xl p-8 md:p-12 relative"
          >
            <span className="material-symbols-outlined text-primary/15 text-7xl absolute top-6 right-8 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>

            <div className="flex gap-1 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>

            <blockquote className="font-sans text-slate-300 text-lg md:text-xl italic leading-relaxed mb-8 relative z-10">
              "{t.review}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary font-display font-bold text-xl flex-shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="font-display font-bold text-slate-100">{t.name}</p>
                <p className="font-sans text-slate-500 text-sm">{t.location}</p>
                <p className="text-primary text-xs font-sans mt-0.5">{t.stay}</p>
              </div>
              <span className="ml-auto font-sans text-slate-500 text-xs hidden sm:block">{t.date}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => go(-1)}
          className="w-12 h-12 border border-primary/30 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { clearInterval(timer.current); setCurrent(i); startTimer() }}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-dark/60 border border-primary/20 hover:bg-primary/30'}`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          className="w-12 h-12 border border-primary/30 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  )
}
