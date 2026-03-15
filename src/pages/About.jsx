import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const values = [
  { icon: 'favorite',          title: 'Genuine Hospitality', desc: 'Every guest is treated like family. Our warm service is rooted in the legendary Kumaoni tradition of "Atithi Devo Bhava" — Guest is God.', color: 'text-red-400' },
  { icon: 'workspace_premium', title: 'Excellence in Everything', desc: 'From the thread count of our linens to the freshness of every dish — we hold ourselves to the highest standards in every detail.', color: 'text-primary' },
  { icon: 'verified_user',     title: 'Safety & Comfort',    desc: 'Your well-being is our top priority. Rigorous cleanliness standards, 24/7 security, and reliable power backup guarantee peace of mind.', color: 'text-blue-400' },
  { icon: 'groups',            title: 'Community First',     desc: 'We proudly employ local talent, source ingredients from nearby farmers, and partner with local guides — giving back to Nainital.', color: 'text-green-400' },
]

const team = [
  { name: 'Pushkar Sarraf', role: 'General Manager',     bio: 'With over a decade of hospitality experience, Pushkar leads our team with vision and passion for exceptional guest experiences.', initials: 'PS' },
  { name: 'Aarav Joshi',   role: 'Head of Hospitality', bio: 'A Nainital native, Aarav brings deep local knowledge and warmth to ensure every guest feels right at home in the mountains.', initials: 'AJ' },
  { name: 'Priya Negi',    role: 'Executive Chef',       bio: 'Priya combines traditional Kumaoni recipes with modern culinary techniques, creating unforgettable dining experiences.', initials: 'PN' },
]

function Banner({ label, title }) {
  return (
    <div className="page-hero">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=60" alt="bg" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative z-10 text-center px-4">
        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">{label}</motion.p>
        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">{title}</motion.h1>
      </div>
    </div>
  )
}

export default function About() {
  useEffect(() => { document.title = 'About Us – Nainital Lake View Hotel'; window.scrollTo(0,0) }, [])
  return (
    <div className="pt-20">
      <Banner label="Our Story" title="About Nainital Lake View Hotel" />

      {/* Story */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="lg:w-1/2">
            <span className="text-primary font-sans text-sm font-medium tracking-[0.2em] uppercase mb-4 block">Est. 2013</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-4">
              Over a Decade of<br/><span className="text-primary">Mountain Hospitality</span>
            </h2>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="font-sans text-slate-400 leading-relaxed mb-4">
              Nainital Lake View Hotel was founded with a singular vision — to create a haven where the natural grandeur of the Himalayas becomes an integral part of every guest's experience. Over the years, we have grown from a small guesthouse to a 48-room boutique hotel combining royal luxury with the raw, untouched beauty of the Kumaon hills.
            </p>
            <p className="font-sans text-slate-400 leading-relaxed mb-8">
              Every brick of this hotel carries the warmth of our region's culture, and every smile from our staff reflects the genuine care we have for each guest who walks through our doors.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[{ v:'48', l:'Luxury Rooms' },{ v:'2000+', l:'Guests Per Year' },{ v:'10+', l:'Years Experience' },{ v:'4.9★', l:'Average Rating' }].map(s => (
                <div key={s.l} className="border border-primary/10 rounded-xl p-5 hover:border-primary/30 transition-colors bg-dark/40">
                  <p className="font-display text-3xl text-primary font-bold">{s.v}</p>
                  <p className="font-sans text-slate-400 text-sm mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="lg:w-1/2 space-y-4">
            <div className="img-zoom rounded-xl overflow-hidden shadow-royal h-72">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" alt="Hotel Exterior" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-xl overflow-hidden shadow-soft h-44">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80" alt="Lake View" className="w-full h-full object-cover" />
              </div>
              <div className="img-zoom rounded-xl overflow-hidden shadow-soft h-44">
                <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" alt="Hotel Lobby" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-20 bg-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-12">
            <span className="text-primary font-sans text-sm font-medium tracking-[0.2em] uppercase mb-4 block">What Drives Us</span>
            <h2 className="font-display text-4xl font-bold text-slate-100 mb-4">Our Core Values</h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
                className="bg-dark/40 border border-primary/10 rounded-xl p-6 text-center hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <span className={`material-symbols-outlined text-3xl mb-4 block ${v.color}`}>{v.icon}</span>
                <h3 className="font-display text-lg text-slate-100 mb-2">{v.title}</h3>
                <p className="font-sans text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-12">
            <span className="text-primary font-sans text-sm font-medium tracking-[0.2em] uppercase mb-4 block">Our Team</span>
            <h2 className="font-display text-4xl font-bold text-slate-100 mb-4">The People Behind the Magic</h2>
            <div className="w-16 h-px bg-primary mx-auto mb-4" />
            <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm">Our dedicated team of hospitality professionals is the heart of Nainital Lake View Hotel.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.15 }}
                className="bg-dark/40 border border-primary/10 rounded-xl p-8 text-center hover:border-primary/30 transition-all"
              >
                <div className="w-20 h-20 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-display text-2xl font-bold">
                  {m.initials}
                </div>
                <h3 className="font-display text-xl text-slate-100 mb-1">{m.name}</h3>
                <p className="text-primary font-sans text-sm font-bold mb-3">{m.role}</p>
                <p className="font-sans text-slate-400 text-sm leading-relaxed">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-dark font-bold mb-4">Come, Experience Nainital with Us</h2>
          <p className="font-sans text-dark/70 mb-8">We'd love to be your home in the mountains. Book your stay and become part of our story.</p>
          <Link to="/booking" className="inline-block bg-dark text-primary px-8 py-4 rounded-lg font-sans font-bold uppercase tracking-wide hover:bg-dark/80 transition-all text-sm">
            Book Your Stay
          </Link>
        </div>
      </section>
    </div>
  )
}
