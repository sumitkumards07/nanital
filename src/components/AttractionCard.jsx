import { motion } from 'framer-motion'

const catIconMap = {
  Nature: 'forest', Viewpoint: 'landscape', Spiritual: 'temple_hindu',
  Shopping: 'shopping_bag', Adventure: 'hiking', Trekking: 'hiking',
}

export default function AttractionCard({ attraction, index = 0 }) {
  const icon = catIconMap[attraction.category] || 'explore'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group bg-dark/40 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-300"
    >
      <div className="h-52 img-zoom overflow-hidden relative">
        <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
        <div className="absolute bottom-3 right-3 bg-dark/80 backdrop-blur-sm rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-primary/70 text-xs">location_on</span>
          <span className="text-white text-xs font-sans">{attraction.distance}</span>
        </div>
        <div className="absolute top-3 left-3 bg-primary/15 border border-primary/20 rounded-full px-3 py-1">
          <span className="text-primary text-xs font-sans font-semibold">{attraction.category}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-display text-lg text-slate-100 group-hover:text-primary transition-colors">
            {attraction.name}
          </h3>
          <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
        </div>

        <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {attraction.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {attraction.highlights.slice(0, 3).map((h) => (
            <span key={h} className="text-xs bg-primary/10 text-primary/80 border border-primary/10 px-2.5 py-1 rounded">
              {h}
            </span>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/15 rounded-xl p-3">
          <p className="text-slate-400 text-xs font-sans leading-relaxed">
            <strong className="text-primary">Tip:</strong> {attraction.tip}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
