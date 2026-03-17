import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

const categories = ['All', 'Standard', 'Deluxe', 'Suite']

export default function Rooms() {
  const [active, setActive] = useState('All')
  useEffect(() => { document.title = 'Our Rooms – Alka The Lake View Hotel'; window.scrollTo(0,0) }, [])
  const filtered = active === 'All' ? rooms : rooms.filter(r => r.category === active)

  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-20"><img src="/images/hotel_exterior_terrace.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/60" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Accommodations</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Our Rooms &amp; Suites</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="font-sans text-slate-400 mt-4 text-sm max-w-2xl mx-auto leading-relaxed">
            From our cozy Economy retreats to the lavish Royal Mughal-style suites, Alka The Lake View Hotel offers the finest lake view accommodation in Nainital. Discover the perfect space for your stay, whether you're seeking a simple getaway or a luxurious family apartment on Mall Road.
          </motion.p>
        </div>
      </div>

      <div className="bg-primary py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 text-dark font-sans font-bold text-sm">
          <span>✓ Check-in: 12:00 PM</span><span>✓ Check-out: 10:00 AM</span>
          <span>✓ Free WiFi in all rooms</span><span>✓ Instant WhatsApp confirmation</span>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full font-sans text-sm font-bold uppercase tracking-wide transition-all ${active===cat ? 'bg-primary text-dark' : 'border border-primary/30 text-slate-400 hover:border-primary/60 hover:text-primary'}`}
              >{cat}</button>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((room, i) => <RoomCard key={room.id} room={room} index={i} />)}
          </div>

          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="mt-16 bg-dark/40 border border-primary/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-display text-2xl text-slate-100 mb-2">Need Help Choosing?</h3>
              <p className="font-sans text-slate-400 text-sm">Our team is available to help you select the perfect room.</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+917496036859" className="flex items-center gap-2 bg-primary text-dark px-5 py-2.5 rounded-lg font-sans font-bold text-sm uppercase">
                <span className="material-symbols-outlined text-sm">call</span> Call Us
              </a>
              <a href="https://wa.me/917496036859" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-lg font-sans font-bold text-sm uppercase hover:bg-primary hover:text-dark transition-all">
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
