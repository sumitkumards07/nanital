import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Disclaimer() {
  useEffect(() => { 
    document.title = 'Disclaimer – Alka The Lake View Hotel';
    window.scrollTo(0,0) 
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="page-hero py-20 bg-dark/50 relative overflow-hidden text-center">
        <h1 className="font-display text-4xl md:text-5xl text-slate-100 font-bold px-4">Important Disclaimer</h1>
        <p className="text-primary font-sans text-sm uppercase tracking-widest mt-4">Essential Information for Our Guests</p>
      </div>

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Disclaimer */}
          <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-xl">
            <h2 className="font-display text-2xl text-slate-100 font-bold mb-4 uppercase tracking-wide">Third-Party Agency Statement</h2>
            <p className="font-sans text-slate-300 text-lg leading-relaxed">
              This website is an <strong>independent travel and booking platform</strong> operated by a private travel agency. We are <strong>not</strong> the official website of Alka The Lake View Hotel, nor are we affiliated with any government tourism board or the TTD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="font-display text-xl text-slate-100 font-bold uppercase tracking-wide text-primary">Service Fee Disclosure</h3>
              <p className="font-sans text-slate-400 text-sm leading-relaxed">
                As a private concierge agency, we charge a <strong>nominal service fee</strong> or markup over the official property tariff. This fee covers our professional booking assistance, itinerary planning, and personalized 24/7 guest support during your stay in Nainital.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl text-slate-100 font-bold uppercase tracking-wide text-primary">Information Accuracy</h3>
              <p className="font-sans text-slate-400 text-sm leading-relaxed">
                While we make every effort to keep information accurate and up-to-date, room rates, availability, and amenities are subject to change without prior notice. We recommend confirming final details at the time of booking confirmation via WhatsApp.
              </p>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-10">
            <h3 className="font-display text-xl text-slate-100 font-bold mb-4 uppercase tracking-wide">Photographic Representation</h3>
            <p className="font-sans text-slate-400 text-sm leading-relaxed mb-6">
              The images shown on this website are intended for representative purposes. Actual room layouts, views, and furnishings may vary slightly based on the specific room allocated by the hotel management at check-in.
            </p>
            <p className="font-sans text-slate-500 text-xs italic">
              By using our services, you acknowledge that you have read and understood this disclaimer and agree to use our booking facilitation services voluntarily.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
