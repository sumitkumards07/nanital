import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GalleryGrid({ images }) {
  const [lightbox, setLightbox] = useState(null)

  const open  = (img) => { setLightbox(img); document.body.style.overflow = 'hidden' }
  const close = ()    => { setLightbox(null); document.body.style.overflow = '' }
  const nav   = (dir) => {
    const i = images.findIndex(x => x.id === lightbox.id)
    setLightbox(images[(i + dir + images.length) % images.length])
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.07 }}
            className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all"
            onClick={() => open(img)}
          >
            <img
              src={img.thumb}
              alt={img.title}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/55 transition-all duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">zoom_in</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-sans text-sm font-medium">{img.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-4 right-4 w-10 h-10 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full flex items-center justify-center text-slate-300 hover:text-primary transition-colors z-10">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <button onClick={(e) => { e.stopPropagation(); nav(-1) }} className="absolute left-4 w-12 h-12 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full flex items-center justify-center text-slate-300 hover:text-primary transition-colors z-10">
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>
            <button onClick={(e) => { e.stopPropagation(); nav(1) }} className="absolute right-4 w-12 h-12 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full flex items-center justify-center text-slate-300 hover:text-primary transition-colors z-10">
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>

            <motion.div
              key={lightbox.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[75vh] object-contain rounded-xl" />
              <p className="text-center text-slate-100 font-display text-lg mt-4">{lightbox.title}</p>
              <p className="text-center text-slate-400 font-sans text-sm mt-1">{lightbox.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
