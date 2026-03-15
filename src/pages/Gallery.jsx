import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GalleryGrid from '../components/GalleryGrid'
import { galleryImages, galleryCategories } from '../data/gallery'

export default function Gallery() {
  const [active, setActive] = useState('all')
  useEffect(() => { document.title = 'Gallery – Alka The Lake Side Hotel'; window.scrollTo(0,0) }, [])
  const filtered = active === 'all' ? galleryImages : galleryImages.filter(i => i.category === active)

  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-30"><img src="/images/hotel_exterior_terrace.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/60" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Photo Gallery</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Moments Captured</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="font-sans text-slate-400 mt-3 text-sm">A visual journey through Alka The Lake Side Hotel</motion.p>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="flex flex-wrap justify-center gap-3 mb-8">
            {galleryCategories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-sans text-sm font-bold capitalize uppercase tracking-wide transition-all ${active===cat ? 'bg-primary text-dark' : 'border border-primary/30 text-slate-400 hover:border-primary/60 hover:text-primary'}`}>
                {cat}
              </button>
            ))}
          </motion.div>
          <p className="font-sans text-slate-500 text-sm text-center mb-8">Showing {filtered.length} of {galleryImages.length} photos</p>
          <GalleryGrid images={filtered} />
        </div>
      </section>
    </div>
  )
}
