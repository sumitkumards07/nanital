import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  useEffect(() => { document.title = 'Guest Reviews | Authorized Partner - Alka The Lake View Hotel'; window.scrollTo(0,0) }, [])
  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-20"><img src="/images/hotel_terrace_fountain.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Guest Reviews</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">What Our Guests Say</motion.h1>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Rating summary */}
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
            className="bg-dark/40 border border-primary/10 rounded-xl p-8 mb-12 text-center">
            <p className="font-sans text-slate-500 text-xs uppercase tracking-widest mb-3">Overall Rating</p>
            <p className="font-display text-7xl font-bold text-primary mb-2">4.9</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_,i) => <span key={i} className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings:"'FILL' 1"}}>star</span>)}
            </div>
            <p className="font-sans text-slate-400 text-sm">Based on 200+ verified guest reviews</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-primary/10">
              {[{l:'Cleanliness',s:'4.9'},{l:'Service',s:'5.0'},{l:'Location',s:'4.8'},{l:'Value',s:'4.9'}].map(item => (
                <div key={item.l} className="text-center">
                  <p className="font-display text-3xl text-primary font-bold">{item.s}</p>
                  <p className="font-sans text-slate-400 text-sm mt-1">{item.l}</p>
                  <div className="mt-2 h-1 bg-dark/60 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{width:`${parseFloat(item.s)/5*100}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
                className="bg-dark/40 border border-primary/10 rounded-xl p-6 relative hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-primary/15 text-6xl absolute top-4 right-4 select-none" style={{fontVariationSettings:"'FILL' 1"}}>format_quote</span>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_,j) => <span key={j} className="material-symbols-outlined text-primary text-xs" style={{fontVariationSettings:"'FILL' 1"}}>star</span>)}
                </div>
                <p className="font-sans text-slate-300 text-sm italic leading-relaxed mb-5">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                  <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary font-display font-bold text-sm flex-shrink-0">{t.avatar}</div>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-slate-100 text-sm">{t.name}</p>
                    <p className="font-sans text-slate-500 text-xs">{t.location}</p>
                    <p className="text-primary text-xs font-sans">{t.stay}</p>
                  </div>
                  <span className="ml-auto font-sans text-slate-500 text-xs flex-shrink-0">{t.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leave review CTA */}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="bg-primary rounded-xl p-10 text-center">
            <h3 className="font-display text-3xl text-dark font-bold mb-3">Stayed With Us Recently?</h3>
            <p className="font-sans text-dark/70 text-sm mb-6 max-w-xl mx-auto">Share your feedback and help future guests make the right choice.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/917082676889?text=I%20would%20like%20to%20share%20my%20feedback%20about%20Alka%20The%20Lake%20View%20Hotel."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark text-primary px-6 py-3 rounded-lg font-sans font-bold text-sm uppercase hover:bg-dark/80 transition-all">
                <span className="material-symbols-outlined text-sm">chat</span> Share on WhatsApp
              </a>
              <Link to="/booking" className="inline-flex items-center gap-2 border-2 border-dark/30 text-dark px-6 py-3 rounded-lg font-sans font-bold text-sm uppercase hover:border-dark/60 transition-all">
                Book Your Next Stay
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
