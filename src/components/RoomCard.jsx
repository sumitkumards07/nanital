import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function RoomCard({ room, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="room-card-hover group bg-dark/40 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-300 relative"
    >
      {/* Most Popular banner */}
      {room.highlighted && (
        <div className="absolute top-0 left-0 right-0 bg-primary text-dark text-xs font-sans font-bold text-center py-1.5 uppercase tracking-widest z-10">
          Most Popular
        </div>
      )}

      {/* Image */}
      <div className={`relative h-56 img-zoom overflow-hidden ${room.highlighted ? 'mt-8' : ''}`}>
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
        {/* Best Value badge */}
        {room.badge && room.badge !== 'Most Popular' && (
          <div className="absolute top-4 left-4 bg-primary text-dark px-3 py-1 rounded text-xs font-sans font-bold uppercase">
            {room.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-primary text-xs font-sans font-bold uppercase tracking-widest mb-1">{room.category}</p>
            <h3 className="font-display text-xl text-slate-100 group-hover:text-primary transition-colors">{room.name}</h3>
          </div>
          <div className="flex gap-0.5 mt-1 flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
        </div>

        <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{room.description}</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-slate-500 text-xs font-sans mb-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary/60 text-sm">bed</span>
            {room.beds}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary/60 text-sm">person</span>
            Up to {room.capacity} guests
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary/60 text-sm">square_foot</span>
            {room.size}
          </span>
        </div>

        {/* Amenity tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {room.amenities.slice(0, 4).map((a) => (
            <span key={a.label} className="text-xs bg-primary/10 text-primary/80 border border-primary/10 px-2.5 py-1 rounded">
              {a.label}
            </span>
          ))}
          {room.amenities.length > 4 && (
            <span className="text-xs bg-dark/60 text-slate-500 border border-primary/10 px-2.5 py-1 rounded">
              +{room.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3">
          <Link
            to={`/rooms/${room.slug}`}
            className="flex-1 border border-primary/30 text-primary text-sm font-sans font-bold py-2.5 rounded-lg text-center hover:bg-primary/10 transition-colors"
          >
            Details
          </Link>
          <Link
            to={`/booking?room=${room.category}`}
            className="flex-1 bg-primary text-dark text-sm font-sans font-bold py-2.5 rounded-lg text-center hover:brightness-110 transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
