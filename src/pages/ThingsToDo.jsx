import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { thingsToDo } from '../data/thingsToDo'

export default function ThingsToDo() {
  useEffect(() => { document.title = 'Things To Do in Nainital – Alka The Lake Side Hotel'; window.scrollTo(0,0) }, [])
  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-30"><img src="/images/hotel_facade_wide.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Explore Nainital</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Things To Do in Nainital</motion.h1>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
            <span className="text-primary font-sans text-sm font-medium tracking-[0.2em] uppercase mb-4 block">Activities &amp; Experiences</span>
            <h2 className="font-display text-4xl font-bold text-slate-100 mb-4">Your Nainital Adventure Guide</h2>
            <div className="w-16 h-px bg-primary mx-auto mb-4" />
            <p className="font-sans text-slate-400 max-w-2xl mx-auto text-sm">From serene lake boating to thrilling mountain treks — Nainital offers something for every kind of traveller.</p>
          </motion.div>

          <div className="space-y-10">
            {thingsToDo.map((a, i) => (
              <motion.div key={a.id} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
                className="bg-dark/40 border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                <div className={`grid grid-cols-1 md:grid-cols-2 ${i%2!==0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="h-64 md:h-auto img-zoom overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{a.icon}</span>
                      <span className="font-sans text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary/15 border border-primary/20 text-primary rounded-full">{a.category}</span>
                    </div>
                    <h3 className="font-display text-2xl text-slate-100 font-bold mb-3">{a.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-xs font-sans text-slate-400">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-sm">schedule</span>{a.duration}</span>
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-sm">payments</span>{a.price}</span>
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-sm">group</span>{a.bestFor}</span>
                    </div>
                    <p className="font-sans text-slate-400 text-sm leading-relaxed mb-5">{a.description}</p>
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                      <p className="text-xs font-sans font-bold text-primary uppercase tracking-wider mb-2">💡 Insider Tips</p>
                      <ul className="space-y-1.5">
                        {a.tips.map(tip => (
                          <li key={tip} className="flex items-start gap-2 text-xs font-sans text-slate-400">
                            <span className="text-primary mt-0.5 flex-shrink-0">✓</span>{tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Travel desk CTA */}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="mt-16 bg-primary rounded-xl p-8 text-center">
            <span className="text-5xl mb-4 block">🗺️</span>
            <h3 className="font-display text-2xl text-dark font-bold mb-3">Need Help Planning Your Itinerary?</h3>
            <p className="font-sans text-dark/70 text-sm mb-6 max-w-xl mx-auto">Our travel desk can arrange sightseeing tours, trekking guides, cab bookings, and customised day trips.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-primary px-8 py-3 rounded-lg font-sans font-bold text-sm uppercase tracking-wide hover:bg-dark/80 transition-all">
              <span className="material-symbols-outlined text-sm">travel_explore</span> Talk to Our Travel Desk
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
