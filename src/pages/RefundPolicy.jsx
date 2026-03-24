import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function RefundPolicy() {
  useEffect(() => { 
    document.title = 'Refund & Cancellation Policy – Alka The Lake View Hotel';
    window.scrollTo(0,0) 
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="page-hero py-20 bg-dark/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hotel_exterior_terrace.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Refund & Cancellation</h1>
          <p className="text-primary font-sans text-sm uppercase tracking-widest mt-4">Last Updated: March 2024</p>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-slate-300 text-sm leading-relaxed m-0 text-center">
              Our policy is designed to be transparent and fair for both travelers and our agency partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-dark/40 border border-primary/10 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">cancel</span>
                <h2 className="font-display text-xl text-slate-100 font-bold uppercase tracking-wide">Cancellation Rules</h2>
              </div>
              <ul className="space-y-4 text-slate-400 font-sans text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Free Cancellation:</strong> Up to 48 hours before the scheduled check-in time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Standard Charge:</strong> Cancellations between 24-48 hours will incur a 50% charge of the first night's stay.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Late Cancellation:</strong> Cancellations within 24 hours of check-in are non-refundable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>No-Show:</strong> 100% of the booking amount will be charged.</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark/40 border border-primary/10 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                <h2 className="font-display text-xl text-slate-100 font-bold uppercase tracking-wide">Refund Process</h2>
              </div>
              <ul className="space-y-4 text-slate-400 font-sans text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Timeline:</strong> Eligible refunds are processed within 7-10 business days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Service Fees:</strong> Please note that our concierge service fees are non-refundable once the booking service has been initiated.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Method:</strong> Refunds will be issued via the original payment method or bank transfer.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-dark/30 border border-primary/5 rounded-xl p-8">
            <h3 className="font-display text-lg text-slate-100 font-bold mb-4 uppercase tracking-wide text-center">Important Notes</h3>
            <div className="space-y-4 text-slate-500 font-sans text-sm leading-relaxed max-w-2xl mx-auto">
              <p>1. All cancellation requests must be sent via WhatsApp or Email for a timestamped record.</p>
              <p>2. In case of natural disasters (landslides, heavy snow) affecting travel, we review refunds on a case-by-case basis in coordination with the hotel.</p>
              <p>3. Early check-outs are non-refundable for the remaining nights unless previously agreed upon.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
