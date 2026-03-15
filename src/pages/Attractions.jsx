import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AttractionCard from '../components/AttractionCard'
import { attractions } from '../data/attractions'

export default function Attractions() {
  useEffect(() => { document.title = 'Nearby Attractions – Nainital Lake View Hotel'; window.scrollTo(0,0) }, [])
  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1580289136687-713c3b64cb2a?w=1920&q=60" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Discover Nainital</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Nearby Attractions</motion.h1>
        </div>
      </div>

      <div className="bg-primary py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-5 text-dark font-sans font-bold text-xs uppercase tracking-wide">
          {['Naini Lake – 0.5 km','Mall Road – 0.8 km','Naina Devi Temple – 1 km','Snow View Point – 2.5 km'].map(d => (
            <span key={d} className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">location_on</span>{d}</span>
          ))}
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
            <span className="text-primary font-sans text-sm font-medium tracking-[0.2em] uppercase mb-4 block">Attractions Near the Hotel</span>
            <h2 className="font-display text-4xl font-bold text-slate-100 mb-4">Within Easy Reach</h2>
            <div className="w-16 h-px bg-primary mx-auto mb-4" />
            <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm">Our prime location puts you minutes away from Nainital's most iconic attractions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((a, i) => <AttractionCard key={a.id} attraction={a} index={i} />)}
          </div>

          {/* Map */}
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="mt-16 bg-dark/40 border border-primary/10 rounded-xl overflow-hidden shadow-royal">
            <div className="p-5 border-b border-primary/10">
              <h3 className="font-display text-xl text-slate-100 font-bold">Our Location in Nainital</h3>
              <p className="font-sans text-slate-500 text-sm">VIT Nainital, Uttarakhand – 522237</p>
            </div>
            <div className="h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.3!2d79.461!3d29.3803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09a97b47eae3b%3A0x5b0d4d6a73b74de!2sNainital%2C+Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%"
                style={{border:0, filter:'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.85)'}}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              />
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <p className="font-sans text-slate-500 text-sm mb-4">Want help arranging transport or tours to these attractions?</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-3 rounded-lg font-sans font-bold text-sm uppercase tracking-wide hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">travel_explore</span> Contact Our Travel Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
