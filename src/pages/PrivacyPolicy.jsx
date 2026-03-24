import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  useEffect(() => { 
    document.title = 'Privacy Policy | Authorized Partner - Alka The Lake View Hotel';
    window.scrollTo(0,0) 
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="page-hero py-20 bg-dark/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hotel_lobby_staircase.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Privacy Policy</h1>
          <p className="text-primary font-sans text-sm uppercase tracking-widest mt-4">Last Updated: March 2024</p>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto prose prose-invert prose-slate text-sm md:text-base text-slate-400 font-sans leading-relaxed">
          <p className="text-slate-300">Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our booking services.</p>

          <h2 className="text-xl font-display font-bold text-slate-100 mt-10 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">1. Information We Collect</h2>
          <p>When you use our enquiry form or WhatsApp booking service, we collect limited personal data including:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Full Name</li>
            <li>Mobile/WhatsApp Number</li>
            <li>Email Address</li>
            <li>Travel details (check-in/out dates, number of guests)</li>
          </ul>

          <h2 className="text-xl font-display font-bold text-slate-100 mt-10 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">2. How We Use Your Information</h2>
          <p>We use the collected information for specific purposes:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>To process your booking enquiries with the hotel.</li>
            <li>To communicate booking confirmations and updates via WhatsApp/Email.</li>
            <li>To provide personalized travel assistance during your trip.</li>
            <li>To maintain internal records for customer support.</li>
          </ul>

          <h2 className="text-xl font-display font-bold text-slate-100 mt-10 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">3. Data Sharing</h2>
          <p>We share your booking details <strong>only</strong> with Alka The Lake View Hotel or its authorized personnel to confirm your stay. We <strong>do not sell, rent, or trade</strong> your personal information to third-party marketing agencies.</p>

          <h2 className="text-xl font-display font-bold text-slate-100 mt-10 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">4. WhatsApp Communication</h2>
          <p>By providing your phone number, you consent to receive booking-related messages on WhatsApp. You can opt-out at any time by replying "STOP" or notifying us directly.</p>

          <h2 className="text-xl font-display font-bold text-slate-100 mt-10 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet or mobile network is 100% secure.</p>

          <h2 className="text-xl font-display font-bold text-slate-100 mt-10 mb-4 uppercase tracking-wide border-b border-primary/20 pb-2">6. Contact Us</h2>
          <p>If you have any questions about our Privacy Policy or want to request the deletion of your data, please contact us at <a href="mailto:support@alkahotel-partner.online" className="text-primary">support@alkahotel-partner.online</a>.</p>
        </div>
      </section>
    </div>
  )
}
