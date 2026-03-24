import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { rooms } from '../data/rooms'
import BookingForm from '../components/BookingForm'

const iconMap = {
  Wifi:'wifi', Wind:'air', Tv:'tv', Droplets:'water_drop', Bed:'bed',
  Mountain:'landscape', Sun:'wb_sunny', Coffee:'coffee', ShowerHead:'shower',
  Zap:'bolt', UtensilsCrossed:'restaurant', Baby:'child_care', Sofa:'chair', Eye:'visibility',
}

export default function RoomDetails() {
  const { slug } = useParams()
  const room = rooms.find(r => r.slug === slug)
  const [activeImg, setActiveImg] = useState(0)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (room) document.title = `${room.name} | Authorized Partner - Alka The Lake View Hotel`
    window.scrollTo(0,0); setActiveImg(0)
  }, [slug, room])

  if (!room) return <Navigate to="/rooms" replace />

  const others = rooms.filter(r => r.id !== room.id)

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-dark/80 border-b border-primary/20 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-sans">
          <Link to="/" className="text-slate-500 hover:text-primary transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <Link to="/rooms" className="text-slate-500 hover:text-primary transition-colors">Rooms</Link>
          <span className="text-slate-700">/</span>
          <span className="text-primary">{room.name}</span>
        </div>
      </div>

      <section className="py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Link to="/rooms" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary font-sans text-sm mb-8 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to All Rooms
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-royal mb-3 border border-primary/10">
                <AnimatePresence mode="wait">
                  <motion.img key={activeImg} src={room.images[activeImg]} alt={room.name}
                    initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.35}}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <button onClick={() => setActiveImg(p => (p-1+room.images.length)%room.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark/60 hover:bg-dark/80 rounded-full flex items-center justify-center text-slate-300 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                <button onClick={() => setActiveImg(p => (p+1)%room.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark/60 hover:bg-dark/80 rounded-full flex items-center justify-center text-slate-300 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
                <div className="absolute bottom-3 right-3 bg-dark/70 backdrop-blur-sm rounded px-2 py-1">
                  <span className="text-white text-xs font-sans">{activeImg+1} / {room.images.length}</span>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {room.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImg===i ? 'border-primary' : 'border-primary/10 opacity-50 hover:opacity-80'}`}>
                    <img src={img} alt={`Room ${i+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:0.5}}>
              {room.badge && (
                <span className="inline-block bg-primary text-dark text-xs font-sans font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">{room.badge}</span>
              )}
              <p className="text-primary text-xs font-sans font-bold uppercase tracking-widest mb-1">{room.category} Room</p>
              <h1 className="font-display text-4xl text-slate-100 font-bold mb-1">{room.name}</h1>
              <p className="font-sans text-slate-500 italic mb-4 text-sm">{room.tagline}</p>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_,i) => <span key={i} className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings:"'FILL' 1"}}>star</span>)}
                <span className="font-sans text-slate-500 text-sm ml-2">5.0 – Highly Rated</span>
              </div>

              {/* Quick meta */}
              <div className="flex flex-wrap gap-4 mb-5 pb-5 border-b border-primary/10 text-sm font-sans text-slate-400">
                {[{icon:'person',v:`Up to ${room.capacity} guests`},{icon:'bed',v:room.beds},{icon:'square_foot',v:room.size},{icon:'visibility',v:room.view}].map(m => (
                  <span key={m.v} className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-sm">{m.icon}</span>{m.v}
                  </span>
                ))}
              </div>
              
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-3 mb-6">
                <p className="font-sans text-slate-500 text-[10px] uppercase tracking-wider mb-1 font-bold">Pricing Transparency</p>
                <p className="font-sans text-slate-400 text-xs leading-relaxed italic">
                  * Quoted price includes a dedicated concierge service fee for booking assistance and 24/7 support.
                </p>
              </div>


              <p className="font-sans text-slate-400 text-sm leading-relaxed mb-6">{room.longDescription}</p>

              {/* CTAs */}
              <div className="flex gap-3 mb-8">
                <button onClick={() => setShowForm(!showForm)}
                  className="flex-1 bg-primary text-dark font-sans font-bold py-3.5 rounded-lg uppercase tracking-wide text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">chat</span>
                  Book This Room
                </button>
                <a href="tel:+917082676889"
                  className="flex-1 border border-primary text-primary font-sans font-bold py-3.5 rounded-lg uppercase tracking-wide text-sm hover:bg-primary hover:text-dark transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">call</span>
                  Call to Book
                </a>
              </div>

              {/* Amenities */}
              <h3 className="font-display text-xl text-slate-100 mb-4">Room Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.map(a => (
                  <div key={a.label} className="flex items-center gap-2 bg-dark/40 border border-primary/10 rounded-lg px-3 py-2.5 hover:border-primary/30 transition-colors">
                    <span className="material-symbols-outlined text-primary text-sm">{iconMap[a.icon] || 'check_circle'}</span>
                    <span className="font-sans text-slate-300 text-sm">{a.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Inline booking form */}
          <AnimatePresence>
            {showForm && (
              <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="mt-12 overflow-hidden">
                <div className="bg-dark/40 border border-primary/20 rounded-xl p-8">
                  <h3 className="font-display text-2xl text-slate-100 mb-6">Complete Your Booking</h3>
                  <BookingForm defaultRoom={room.category} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Other rooms */}
          <div className="mt-20">
            <h2 className="font-display text-3xl text-slate-100 mb-8">Other Room Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {others.map(r => (
                <Link key={r.id} to={`/rooms/${r.slug}`}
                  className="flex items-center gap-4 bg-dark/40 border border-primary/10 rounded-xl p-4 hover:border-primary/40 transition-all hover:-translate-y-0.5 group">
                  <div className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 img-zoom">
                    <img src={r.images[0]} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-primary text-xs font-sans font-bold uppercase tracking-wider">{r.category}</p>
                    <h4 className="font-display text-lg text-slate-100 group-hover:text-primary transition-colors">{r.name}</h4>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-primary flex-shrink-0 transition-colors">chevron_right</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
