import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm'

const perks = [
  { icon:'chat',           title:'Instant Confirmation', desc:'WhatsApp confirmation within 30 minutes.' },
  { icon:'lock',           title:'No Upfront Payment',   desc:'Pay on arrival. No credit card required.' },
  { icon:'schedule',       title:'Flexible Check-in',    desc:'Standard 12 PM. Early check-in on request.' },
  { icon:'cancel',         title:'Free Cancellation*',   desc:'Cancel up to 24 hours before check-in.' },
]

export default function Booking() {
  const [searchParams] = useSearchParams()
  const defaultRoom = searchParams.get('room') || ''
  useEffect(() => { document.title = 'Book Your Stay – Alka The Lake View Hotel'; window.scrollTo(0,0) }, [])

  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-20"><img src="/images/hotel_exterior_terrace.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Reservations</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Book Your Stay</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="font-sans text-slate-400 mt-3 text-sm">Simple, fast booking via WhatsApp — no hidden fees</motion.p>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="lg:col-span-2">
            <div className="bg-dark/40 border border-primary/10 rounded-xl p-8 shadow-royal">
              <span className="text-primary font-sans text-sm font-medium tracking-[0.2em] uppercase mb-4 block">Reservations</span>
              <h2 className="font-display text-3xl text-slate-100 font-bold mb-2">Booking Details</h2>
              <p className="font-sans text-slate-400 text-sm mb-6">Fill in the form — clicking Send Enquiry opens WhatsApp with your booking pre-filled.</p>
              <BookingForm defaultRoom={defaultRoom} />
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.1}} className="space-y-6">
            {/* Perks */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 space-y-5">
              <h3 className="font-display text-xl text-slate-100 font-bold">Why Book Direct</h3>
              {perks.map(p => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/15 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-sm">{p.icon}</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-slate-100">{p.title}</p>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Concierge */}
            <div className="bg-dark border border-primary/20 rounded-xl p-6">
              <h3 className="font-display text-lg text-slate-100 font-bold mb-3">Concierge Desk</h3>
              <p className="font-sans text-slate-400 text-sm mb-4">Available 24/7 for your personalized requirements.</p>
              <div className="space-y-3">
                {[{icon:'call',label:'Call Us',val:'+91 7496036859',href:'tel:+917496036859'},{icon:'mail',label:'Email Us',val:'sharmakamal2192@gmail.com',href:'mailto:sharmakamal2192@gmail.com'}].map(c => (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 transition-colors group">
                    <span className="material-symbols-outlined text-primary text-lg">{c.icon}</span>
                    <div>
                      <p className="text-xs font-sans font-bold uppercase text-primary">{c.label}</p>
                      <p className="text-sm font-sans text-slate-300 break-all">{c.val}</p>
                    </div>
                  </a>
                ))}
              </div>
              <a href="https://wa.me/917496036859" target="_blank" rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 border border-primary text-primary rounded-lg py-2.5 font-sans font-bold text-sm uppercase hover:bg-primary hover:text-dark transition-all">
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp Chat
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
