import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FacilityCard from '../components/FacilityCard'
import { facilities } from '../data/facilities'

export default function Facilities() {
  useEffect(() => { document.title = 'Facilities – Nainital Lake View Hotel'; window.scrollTo(0,0) }, [])
  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-20"><img src="/images/hotel_courtyard.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Hotel Services</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Our Facilities</motion.h1>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
            <span className="text-primary font-sans text-sm font-medium tracking-[0.2em] uppercase mb-4 block">World-Class Services</span>
            <h2 className="font-display text-4xl font-bold text-slate-100 mb-4">Everything at Your Fingertips</h2>
            <div className="w-16 h-px bg-primary mx-auto mb-4" />
            <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm">From high-speed WiFi to our multi-cuisine restaurant — all the amenities you need for a perfect stay.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {facilities.map((f, i) => <FacilityCard key={f.id} facility={f} index={i} />)}
          </div>

          {/* Restaurant feature */}
          <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="bg-dark/40 border border-primary/10 rounded-xl overflow-hidden shadow-royal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto img-zoom overflow-hidden">
                <img src="/images/restaurant_interior.png" alt="Restaurant" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-sans text-sm font-medium tracking-[0.2em] uppercase mb-4 block">Dining Experience</span>
                <h3 className="font-display text-3xl text-slate-100 font-bold mb-4">Our Multi-Cuisine Restaurant</h3>
                <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4">Indulge in the finest flavors — from authentic Kumaoni delicacies like Bhatt ki Churkani to continental favourites. Our culinary team ensures every meal is a memorable experience.</p>
                <p className="font-sans text-slate-500 text-xs mb-6">Open 7 AM – 10 PM daily · Breakfast included with stay</p>
                <Link to="/booking" className="self-start flex items-center gap-2 bg-primary text-dark px-6 py-3 rounded-lg font-sans font-bold text-sm uppercase tracking-wide hover:brightness-110 transition-all">
                  <span className="material-symbols-outlined text-sm">restaurant</span> Reserve a Table
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-16">
            <h3 className="font-display text-2xl text-slate-100 mb-3">Experience These Facilities First-Hand</h3>
            <p className="font-sans text-slate-400 text-sm mb-6">Book your stay and enjoy everything we offer.</p>
            <Link to="/booking" className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-3 rounded-lg font-sans font-bold text-sm uppercase tracking-wide hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">arrow_forward</span> Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
