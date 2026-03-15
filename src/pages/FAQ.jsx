import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { cat:'Check-in & Check-out', items:[
    { q:'What are the check-in and check-out times?', a:'Check-in: 12:00 PM (noon) · Check-out: 10:00 AM. Early check-in from 8 AM and late check-out until 2 PM available on request for ₹500 extra, subject to availability.' },
    { q:'What documents are needed at check-in?', a:'A valid government-issued photo ID — Aadhaar, Passport, Voter ID, PAN Card, or Driving License. Foreign nationals must present a valid passport and visa.' },
  ]},
  { cat:'Booking & Payments', items:[
    { q:'How does the WhatsApp booking work?', a:'Fill the booking form and click "Send Enquiry via WhatsApp". Your details are pre-filled in a message to our team. We confirm availability within 30 minutes. No advance payment required — pay on arrival.' },
    { q:'What is the cancellation policy?', a:'Free cancellation up to 24 hours before check-in. Cancellations within 24 hours incur a one-night charge. No-shows are charged the full amount. Contact us via WhatsApp or phone to cancel.' },
    { q:'Are there special discounts for extended stays?', a:'Yes! We offer discounts for stays of 3+ nights, repeat guests, and group bookings. During off-season (Jul–Aug) we run special rates. Contact us directly for the best available prices.' },
  ]},
  { cat:'Facilities & Amenities', items:[
    { q:'Is parking available? Is it free?', a:'Yes — complimentary, secured parking for all hotel guests. Accommodates cars, SUVs, and motorcycles. The lot is monitored and well-lit 24/7.' },
    { q:'Is WiFi available in all rooms?', a:'Yes. High-speed complimentary WiFi is available throughout the hotel — all rooms, lobby, restaurant, and common areas. Available 24/7 with no time or data limits.' },
    { q:'Does the hotel have a restaurant?', a:'Our multi-cuisine restaurant is open 7 AM–10 PM daily. We serve Indian, Chinese, and continental cuisine, with authentic Kumaoni specialities. Breakfast is included with your stay.' },
  ]},
  { cat:'Location & Transport', items:[
    { q:'How far is the hotel from Naini Lake?', a:'Just 0.5 km (5-minute walk) from Naini Lake. Mall Road is 0.8 km away, Naina Devi Temple is 1 km, and Snow View Point is 2.5 km.' },
    { q:'Can the hotel arrange sightseeing tours?', a:'Absolutely! Our travel desk offers sightseeing packages covering Naini Lake boating, Snow View Point ropeway, Naina Devi Temple, Tiffin Top trek, and more. We arrange private taxis, shared cabs, and guided tours.' },
  ]},
  { cat:'Policies', items:[
    { q:'Is the hotel smoke-free?', a:'Yes. Smoking is strictly prohibited in all rooms and indoor areas. Designated outdoor smoking areas are available. Guests found smoking indoors will be charged a ₹1,500 deep-cleaning fee.' },
    { q:'Are children and pets welcome?', a:'Children are warmly welcome — kids below 5 stay free! Our Family Suite is ideal for families. Unfortunately we are a pet-free property to ensure comfort for all guests.' },
  ]},
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors ${open ? 'border-primary/40 bg-dark/40' : 'border-primary/10 bg-dark/40 hover:border-primary/20'}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-sans font-medium text-slate-100 text-sm pr-4">{q}</span>
        <span className={`material-symbols-outlined text-primary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.3}} className="overflow-hidden">
            <div className="px-5 pb-5 border-t border-primary/10 pt-4">
              <p className="font-sans text-slate-400 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  useEffect(() => { document.title = 'FAQ – Nainital Lake View Hotel'; window.scrollTo(0,0) }, [])
  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-20"><img src="/images/hotel_lobby_staircase.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Help Centre</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Frequently Asked Questions</motion.h1>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-10">
            <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm">Find answers to our most common questions below. Can't find what you're looking for? Contact us directly.</p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((section, si) => (
              <motion.div key={section.cat} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:si*0.08}}>
                <h2 className="font-display text-xl text-slate-100 font-bold mb-4 pb-2 border-b border-primary/20">
                  {section.cat}
                </h2>
                <div className="space-y-2">
                  {section.items.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="mt-16 bg-primary rounded-xl p-8 text-center">
            <h3 className="font-display text-2xl text-dark font-bold mb-3">Still Have Questions?</h3>
            <p className="font-sans text-dark/70 text-sm mb-6">Our team is available 24/7 to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917206073010" className="inline-flex items-center gap-2 bg-dark text-primary px-6 py-3 rounded-lg font-sans font-bold text-sm uppercase hover:bg-dark/80 transition-all">
                <span className="material-symbols-outlined text-sm">call</span> Call: +91 7206073010
              </a>
              <a href="https://wa.me/917206073010" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-dark/30 text-dark px-6 py-3 rounded-lg font-sans font-bold text-sm uppercase hover:border-dark/60 transition-all">
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
