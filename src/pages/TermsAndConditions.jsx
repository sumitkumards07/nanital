import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TermsAndConditions() {
  useEffect(() => { 
    document.title = 'Terms & Conditions – Alka The Lake View Hotel';
    window.scrollTo(0,0) 
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="page-hero py-20 bg-dark/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hotel_facade_wide.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Terms & Conditions</h1>
          <p className="text-primary font-sans text-sm uppercase tracking-widest mt-4">Last Updated: March 2024</p>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto prose prose-invert prose-slate">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-slate-300 text-sm leading-relaxed m-0">
              <strong className="text-primary font-bold">Important Notice:</strong> This website is operated by an independent travel and concierge agency. By using this website and our services, you acknowledge that we are a third-party facilitator and not the direct owners of Alka The Lake View Hotel.
            </p>
          </div>

          <div className="space-y-10 text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            <div>
              <h2 className="text-xl font-display font-bold text-slate-100 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-slate-100 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">2. Agency Disclosure</h2>
              <p>We act as an independent travel agent and concierge service provider. We facilitate bookings for Alka The Lake View Hotel. We are not an official representative or affiliate of the TTD or any government body. Our services include booking assistance, travel guidance, and concierge support.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-slate-100 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">3. Booking & Payments</h2>
              <p>All bookings made through our platform are subject to availability. We provide a WhatsApp-based enquiry system. Prices quoted on our website include our service and concierge fees. Users are informed of the total cost before confirmation.</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Confirmation is provided via WhatsApp or Email.</li>
                <li>Users must provide accurate information for booking.</li>
                <li>Check-in and Check-out timings as per hotel policy apply.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-slate-100 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">4. User Obligations</h2>
              <p>Users must be at least 18 years of age to book. You are responsible for maintaining the confidentiality of any information provided and for all activities that occur during your stay.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-slate-100 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">5. Limitation of Liability</h2>
              <p>While we strive to ensure a smooth booking experience, we are not liable for any issues arising directly from the hotel's management, including service quality, room condition, or safety concerns at the property.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-slate-100 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">6. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Uttarakhand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
