import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            className="bg-dark border border-primary/30 rounded-xl p-4 shadow-royal max-w-xs"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-sm">chat</span>
              </div>
              <div>
                <p className="font-display font-bold text-slate-100 text-sm">Chat with Us</p>
                <p className="text-green-400 text-xs font-sans">Usually replies in minutes</p>
              </div>
            </div>
            <p className="font-sans text-slate-400 text-xs mb-3">
              Have questions or want to book? Chat with our team instantly on WhatsApp!
            </p>
            <a
              href="https://wa.me/919999900000?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Nainital%20Lake%20View%20Hotel."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center text-xs font-sans font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Open WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="whatsapp-btn w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          {open ? 'close' : 'chat'}
        </span>
      </motion.button>
    </div>
  )
}
