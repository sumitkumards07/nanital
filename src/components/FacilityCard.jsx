import { motion } from 'framer-motion'

const iconMap = {
  Wifi: 'wifi', Car: 'local_parking', UtensilsCrossed: 'restaurant',
  BellRing: 'room_service', MapPin: 'travel_explore', Shirt: 'dry_cleaning',
  Clock: 'schedule', Zap: 'bolt', Coffee: 'coffee', Sun: 'wb_sunny',
  Wind: 'air', Shield: 'shield',
}

export default function FacilityCard({ facility, index = 0 }) {
  const icon = iconMap[facility.icon] || 'check_circle'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="bg-dark/40 border border-primary/10 rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
    >
      <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{icon}</span>
      <h3 className="font-display text-lg text-slate-100 mb-2">{facility.name}</h3>
      <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4">{facility.description}</p>
      <ul className="space-y-1.5">
        {facility.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs font-sans text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
