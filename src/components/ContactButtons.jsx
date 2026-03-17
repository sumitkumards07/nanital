import { motion } from 'framer-motion'

export default function ContactButtons() {
  const phone = '7496036859'

  return (
    <>
      {/* Call Button - Left Side */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.a
          href={`tel:+91${phone}`}
          initial={{ opacity: 0, scale: 0.5, x: -20 }}
          animate={{ opacity: 1, x: 0, scale: [1, 1.1, 1] }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            opacity: { duration: 0.5 },
            x: { duration: 0.5 },
            scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-royal border border-white/20 group relative"
          aria-label="Call Us"
        >
          <span className="material-symbols-outlined text-white text-2xl font-bold">call</span>
          <span className="absolute left-full ml-3 bg-dark/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call +91 {phone}
          </span>
        </motion.a>
      </div>

      {/* WhatsApp Button - Right Side */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href={`https://wa.me/91${phone}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Alka%20The%20Lake%20Side%20Hotel.`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, x: 0, scale: [1, 1.1, 1] }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            opacity: { duration: 0.5 },
            x: { duration: 0.5 },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-royal border border-white/20 group relative"
          aria-label="WhatsApp"
        >
          <span className="material-symbols-outlined text-white text-2xl font-bold">chat</span>
          <span className="absolute right-full mr-3 bg-dark/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with Us
          </span>
        </motion.a>
      </div>
    </>
  )
}
