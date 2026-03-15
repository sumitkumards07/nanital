import { useEffect } from 'react'
import { motion } from 'framer-motion'

const policies = [
  { icon:'schedule',      title:'Check-in & Check-out', items:['Check-in: 12:00 PM (noon)','Check-out: 10:00 AM','Early check-in (from 8 AM) – ₹500 extra, subject to availability','Late check-out (up to 2 PM) – ₹500 extra, on request','Valid government-issued photo ID mandatory at check-in','Foreign nationals: valid passport and visa required'] },
  { icon:'cancel',        title:'Cancellation & Refund', items:['Free cancellation up to 24 hours before check-in','Cancellations within 24 hours: one-night charge applies','No-shows charged the full booking amount','Refunds processed within 5–7 working days','All cancellations must be communicated via WhatsApp or call','Force majeure situations reviewed on a case-by-case basis'] },
  { icon:'groups',        title:'Guest Guidelines',     items:['Maximum room occupancy must not be exceeded','Children below 5 years: complimentary stay (without extra bed)','Children 5–12 years: 50% of adult tariff for an extra bed','Non-staying visitors not allowed in rooms after 10 PM','Guests responsible for safety of their own valuables','Management not liable for loss or damage to personal belongings','Noise levels must be kept minimal after 10 PM'] },
  { icon:'smoke_free',    title:'Smoking Policy',       items:['Nainital Lake View Hotel is a 100% smoke-free property','Smoking prohibited in all rooms and indoor areas','Designated outdoor smoking areas are available','Violation incurs a ₹1,500 deep-cleaning fee','Policy applies to cigarettes, e-cigarettes, cigars, and hookahs'] },
  { icon:'pets',          title:'Pet Policy',            items:['Pets are not permitted on the property','This ensures comfort and hygiene for all guests','Certified service animals may be accommodated — advance notice required','Service animals must carry valid certification documents'] },
  { icon:'warning',       title:'Damage & Liability',   items:['Guests liable for any damage to hotel property','Damage assessed and charged accordingly','Theft or vandalism reported to appropriate authorities','Hotel not responsible for accidents due to guest negligence','Personal electrical appliances from outside are not permitted'] },
]

export default function Policies() {
  useEffect(() => { document.title = 'Hotel Policies – Nainital Lake View Hotel'; window.scrollTo(0,0) }, [])
  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-20"><img src="/images/hotel_lobby_staircase.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Hotel Rules</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Hotel Policies</motion.h1>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20 min-h-screen">
        <div className="max-w-3xl mx-auto">
          {/* Notice */}
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
            className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-xl p-5 mb-10">
            <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">info</span>
            <div>
              <p className="font-sans font-bold text-primary text-sm">Important Notice</p>
              <p className="font-sans text-slate-400 text-sm mt-1 leading-relaxed">By making a reservation at Nainital Lake View Hotel, you agree to abide by all hotel policies listed below. For clarifications, contact us before arrival.</p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {policies.map((p, i) => (
              <motion.div key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
                className="bg-dark/40 border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 bg-primary/10 border-b border-primary/10 px-6 py-4">
                  <span className="material-symbols-outlined text-primary text-xl">{p.icon}</span>
                  <h3 className="font-display text-lg text-slate-100 font-bold">{p.title}</h3>
                </div>
                <ul className="p-6 space-y-2.5">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span>
                      <span className="font-sans text-slate-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mt-10 text-center">
            <p className="font-sans text-slate-500 text-xs">Last updated: January 2025. Policies subject to change — please verify before your visit.</p>
            <p className="font-sans text-slate-500 text-xs mt-1">
              Queries: <a href="mailto:info@nainitallakeview.com" className="text-primary hover:underline">info@nainitallakeview.com</a> ·{' '}
              <a href="tel:+917206073010" className="text-primary hover:underline">+91 7206073010</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
