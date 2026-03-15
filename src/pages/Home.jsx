import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import RoomCard from '../components/RoomCard'
import TestimonialSlider from '../components/TestimonialSlider'
import { rooms } from '../data/rooms'
import { testimonials } from '../data/testimonials'

function SectionLabel({ children }) {
  return (
    <span className="text-primary font-sans font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
      {children}
    </span>
  )
}
function Divider() { return <div className="w-16 h-px bg-primary my-4" /> }

const stats = [
  { value: '48',   label: 'Luxury Rooms',    icon: 'hotel' },
  { value: '4.9',  label: 'Guest Rating',    icon: 'star' },
  { value: '10+',  label: 'Years of Service',icon: 'workspace_premium' },
  { value: '2K+',  label: 'Happy Guests',    icon: 'favorite' },
]

export default function Home() {
  useEffect(() => { document.title = 'Nainital Lake View Hotel – Your comfort, our priority' }, [])

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Quick booking bar */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-30">
        <div className="bg-dark border border-primary/30 p-4 md:p-8 rounded-xl shadow-royal grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Arrival',    icon: 'calendar_today',  placeholder: 'Check In',  type: 'date' },
            { label: 'Departure',  icon: 'calendar_month',  placeholder: 'Check Out', type: 'date' },
          ].map(({ label, icon, placeholder, type }) => (
            <div key={label} className="flex flex-col gap-2">
              <label className="text-xs font-sans font-bold text-primary uppercase tracking-wider">{label}</label>
              <div className="flex items-center gap-2 text-slate-100 border-b border-slate-700 pb-2">
                <span className="material-symbols-outlined text-primary text-sm">{icon}</span>
                <input className="bg-transparent border-none p-0 focus:ring-0 text-sm placeholder:text-slate-500 w-full font-sans" placeholder={placeholder} type={type} />
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-sans font-bold text-primary uppercase tracking-wider">Guests</label>
            <div className="flex items-center gap-2 text-slate-100 border-b border-slate-700 pb-2">
              <span className="material-symbols-outlined text-primary text-sm">person</span>
              <select className="bg-transparent border-none p-0 focus:ring-0 text-sm w-full appearance-none font-sans">
                <option className="bg-dark">2 Adults, 0 Children</option>
                <option className="bg-dark">1 Adult</option>
                <option className="bg-dark">2 Adults, 1 Child</option>
                <option className="bg-dark">Family (6 guests)</option>
              </select>
            </div>
          </div>
          <Link to="/booking" className="bg-primary text-dark font-sans font-bold rounded-lg py-4 text-center uppercase tracking-wide hover:brightness-110 transition-all text-sm flex items-center justify-center">
            Check Availability
          </Link>
        </div>
      </div>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center border border-primary/10 rounded-xl p-8 hover:border-primary/40 transition-colors bg-dark/40"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{s.icon}</span>
              <p className="font-display text-4xl text-primary font-bold mb-1">{s.value}</p>
              <p className="font-sans text-slate-400 text-xs uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <div className="img-zoom rounded-xl shadow-royal overflow-hidden aspect-[4/5]">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" alt="Hotel Lobby" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-lg hidden md:block">
              <p className="text-dark font-display text-4xl font-bold">10+</p>
              <p className="text-dark text-xs font-sans uppercase tracking-widest font-bold mt-1">Years of<br/>Excellence</p>
            </div>
            <div className="absolute -top-5 -left-5 w-36 h-36 rounded-xl overflow-hidden shadow-royal border-2 border-primary/30 hidden md:block img-zoom">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&q=80" alt="Lake View" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-4">
              A Royal Retreat in<br/>the Heart of Nature
            </h2>
            <Divider />
            <p className="font-sans text-slate-400 leading-relaxed mb-4">
              Nestled amidst the pristine beauty of the Kumaon Himalayas, Nainital Lake View Hotel was founded with a singular vision — to create a haven where nature's grandeur becomes part of every guest's story.
            </p>
            <p className="font-sans text-slate-400 leading-relaxed mb-8">
              Every room is thoughtfully designed to frame unobstructed views of the shimmering Naini Lake and the rolling hills — a view that stays with you long after you leave.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Lake & Mountain Views','Free WiFi & Parking','Multi-Cuisine Restaurant','24/7 Room Service','Travel Desk','Power Backup'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span className="font-sans text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-sans font-bold uppercase tracking-wide hover:brightness-110 transition-all text-sm">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-24 px-6 lg:px-20 bg-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel>Accommodations</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100 mb-4">Our Rooms &amp; Suites</h2>
            <Divider />
            <p className="font-sans text-slate-400 max-w-xl mx-auto mt-4">48 carefully curated rooms — from cozy retreats to lavish suites, every space is a sanctuary.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => <RoomCard key={room.id} room={room} index={i} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/rooms" className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-lg font-sans font-bold uppercase tracking-wide hover:bg-primary hover:text-dark transition-all text-sm">
              View All Rooms
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Nature CTA */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark/75 z-10" />
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="Snow View Point Nainital" className="w-full h-full object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-20 text-center max-w-3xl px-6"
        >
          <SectionLabel>The Himalayan Experience</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100 mb-6">A Sanctuary for the Senses</h2>
          <p className="font-sans text-slate-200 text-lg mb-10 leading-relaxed">
            Wake to mist-draped peaks, breathe crisp mountain air, and fall asleep to the stillness of the hills.
            Nainital Lake View Hotel is not just a stay — it's a transformation.
          </p>
          <Link to="/booking" className="inline-block bg-primary text-dark px-10 py-4 rounded-lg font-sans font-bold uppercase tracking-wide hover:scale-105 transition-transform text-sm">
            Reserve Your Escape
          </Link>
        </motion.div>
      </section>

      {/* Gallery preview */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <SectionLabel>Photo Gallery</SectionLabel>
              <h2 className="font-display text-4xl font-bold text-slate-100">A Glimpse of Paradise</h2>
              <Divider />
            </div>
            <Link to="/gallery" className="flex items-center gap-2 border border-primary text-primary px-6 py-2.5 rounded-lg font-sans font-bold text-sm uppercase hover:bg-primary hover:text-dark transition-all whitespace-nowrap">
              Full Gallery
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', span: 'col-span-2 row-span-2', h: 'h-64 md:h-80' },
              { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&q=80', span: '', h: 'h-40' },
              { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80', span: '', h: 'h-40' },
              { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', span: '', h: 'h-40' },
              { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80', span: '', h: 'h-40' },
              { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=80', span: '', h: 'h-40' },
            ].map(({ src, span, h }, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`img-zoom rounded-xl overflow-hidden border border-primary/10 ${span}`}
              >
                <img src={src} alt={`Gallery ${i+1}`} className={`w-full ${h} object-cover`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-20 bg-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <SectionLabel>Guest Reviews</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100 mb-4">What Our Guests Say</h2>
            <Divider />
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_,i) => <span key={i} className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings:"'FILL' 1" }}>star</span>)}
              <span className="font-sans text-slate-400 text-sm ml-2">4.9 / 5 · 200+ reviews</span>
            </div>
          </motion.div>
          <TestimonialSlider testimonials={testimonials} />
          <div className="text-center mt-10">
            <Link to="/testimonials" className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-lg font-sans font-bold uppercase tracking-wide hover:bg-primary hover:text-dark transition-all text-sm">
              All Reviews
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl font-bold text-slate-100 mb-4">Ready for Your Mountain Escape?</h2>
            <p className="font-sans text-slate-400 text-base mb-8">Book your stay at Nainital Lake View Hotel. Starting from just ₹1,500 per night.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="bg-primary text-dark px-8 py-4 rounded-lg font-sans font-bold uppercase tracking-wide hover:brightness-110 transition-all text-sm">
                Book Now — From ₹1,500
              </Link>
              <a href="tel:8252561063" className="border border-primary text-primary px-8 py-4 rounded-lg font-sans font-bold uppercase tracking-wide hover:bg-primary hover:text-dark transition-all text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                Call Us Now
              </a>
            </div>
            <p className="font-sans text-slate-500 text-xs mt-4">Instant WhatsApp confirmation · Check-in 12 PM · Free cancellation*</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
