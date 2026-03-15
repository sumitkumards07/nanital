import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactButtons() {
  const [open, setOpen] = useState(false)
  const phone = '7206073010'

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {/* Call Button */}
            <motion.a
              href={`tel:+91${phone}`}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.1 }}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors group relative"
              aria-label="Call Us"
            >
              <span className="material-symbols-outlined text-white text-xl">call</span>
              <span className="absolute right-full mr-3 bg-dark/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Call Us
              </span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/91${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Nainital%20Lake%20View%20Hotel.`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group relative"
              aria-label="WhatsApp"
            >
              <span className="material-symbols-outlined text-white text-xl">chat</span>
              <span className="absolute right-full mr-3 bg-dark/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                WhatsApp
              </span>
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button with pop effect */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!open ? { scale: [1, 1.1, 1] } : {}}
        transition={!open ? { duration: 2, repeat: Infinity } : {}}
        className={`w-14 h-14 ${open ? 'bg-dark border border-primary/30' : 'bg-primary'} rounded-full flex items-center justify-center shadow-xl transition-colors border border-primary/20`}
        aria-label="Contact Options"
      >
        <span className={`material-symbols-outlined ${open ? 'text-primary' : 'text-dark'} text-2xl font-bold`}>
          {open ? 'close' : 'contact_support'}
        </span>
      </motion.button>
    </div>
  )
}
