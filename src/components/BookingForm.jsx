import { useState } from 'react'
import { motion } from 'framer-motion'

const roomTypes = [
  'Standard Room',
  'Deluxe Mountain View',
  'Family Suite',
]

function buildWhatsAppMsg(d) {
  return encodeURIComponent(
`Hello, I would like to book a room at Alka The Lake View Hotel.

Name: ${d.name}
Room Type: ${d.roomType}
Check-in: ${d.checkIn}
Check-out: ${d.checkOut}
Guests: ${d.guests}
Phone: ${d.phone}
Email: ${d.email}
Message: ${d.message || 'No additional requests'}

Please confirm availability. Thank you!`
  )
}

export default function BookingForm({ defaultRoom = '' }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    checkIn: '', checkOut: '',
    guests: '2', roomType: defaultRoom,
    message: '',
    agreed: false
  })
  const [errors,    setErrors]    = useState({})
  const [submitted, setSubmitted] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name     = 'Name is required'
    if (!form.phone.trim()) e.phone    = 'Phone is required'
    if (!form.email.trim()) e.email    = 'Email is required'
    if (!form.checkIn)      e.checkIn  = 'Check-in date required'
    if (!form.checkOut)     e.checkOut = 'Check-out date required'
    if (!form.roomType)     e.roomType = 'Please select a room type'
    if (!form.agreed)       e.agreed   = 'You must agree to the terms to proceed'
    if (form.checkIn && form.checkOut && form.checkIn >= form.checkOut)
      e.checkOut = 'Check-out must be after check-in'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
    setTimeout(() => {
      window.open(`https://wa.me/917082676889?text=${buildWhatsAppMsg(form)}`, '_blank')
    }, 700)
  }

  const inputCls = (field) =>
    `w-full rounded-lg px-4 py-3 text-sm font-sans bg-dark/50 text-slate-100 placeholder:text-slate-600
     border transition-all focus:outline-none focus:ring-1 focus:ring-primary
     ${errors[field] ? 'border-red-500 bg-red-900/10' : 'border-primary/20 hover:border-primary/40'}`

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-14 px-8"
      >
        <div className="w-20 h-20 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <span className="text-primary text-xs font-sans font-bold uppercase tracking-widest block mb-3">Success</span>
        <h3 className="font-display text-2xl text-slate-100 mb-3">Redirecting to WhatsApp!</h3>
        <p className="font-sans text-slate-400 text-sm max-w-sm mx-auto mb-6">
          Your booking details have been prepared. We'll confirm availability within 30 minutes.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-primary hover:text-primary/80 font-sans text-sm underline transition-colors"
        >
          Fill another booking
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Check-in Date', name: 'checkIn',  icon: 'calendar_today' },
          { label: 'Check-out Date', name: 'checkOut', icon: 'calendar_month' },
        ].map(({ label, name, icon }) => (
          <div key={name}>
            <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">
              <span className="material-symbols-outlined text-sm align-middle mr-1">{icon}</span>
              {label} *
            </label>
            <input
              type="date" name={name} value={form[name]}
              min={name === 'checkOut' ? form.checkIn || today : today}
              onChange={handleChange}
              className={inputCls(name)}
            />
            {errors[name] && <p className="text-red-400 text-xs mt-1 font-sans">{errors[name]}</p>}
          </div>
        ))}
      </div>

      {/* Guests + Room */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">
            <span className="material-symbols-outlined text-sm align-middle mr-1">person</span>
            Guests *
          </label>
          <div className="flex items-center justify-between border border-primary/20 rounded-lg px-4 py-2.5 bg-dark/50">
            <span className="text-sm font-sans text-slate-100">
              {form.guests}
            </span>
            <div className="flex items-center gap-3">
              <button 
                type="button"
                onClick={() => {
                  const current = parseInt(form.guests) || 1
                  const next = Math.max(1, current - 1)
                  setForm(prev => ({ ...prev, guests: `${next} Guest${next > 1 ? 's' : ''}` }))
                }}
                className="w-7 h-7 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all"
              >
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
              <button 
                type="button"
                onClick={() => {
                  const current = parseInt(form.guests) || 1
                  const next = Math.min(10, current + 1)
                  setForm(prev => ({ ...prev, guests: `${next} Guest${next > 1 ? 's' : ''}` }))
                }}
                className="w-7 h-7 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all"
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
          </div>
          {errors.guests && <p className="text-red-400 text-xs mt-1 font-sans">{errors.guests}</p>}
        </div>
        <div>
          <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">
            <span className="material-symbols-outlined text-sm align-middle mr-1">bed</span>
            Room Type *
          </label>
          <select name="roomType" value={form.roomType} onChange={handleChange} className={inputCls('roomType')}>
            <option value="" className="bg-dark">Select Room Type</option>
            {roomTypes.map(r => <option key={r} value={r} className="bg-dark">{r}</option>)}
          </select>
          {errors.roomType && <p className="text-red-400 text-xs mt-1 font-sans">{errors.roomType}</p>}
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">
          <span className="material-symbols-outlined text-sm align-middle mr-1">person</span>
          Full Name *
        </label>
        <input type="text" name="name" value={form.name} onChange={handleChange}
          placeholder="Your full name" className={inputCls('name')} />
        {errors.name && <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>}
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Phone Number', name: 'phone', type: 'tel',   icon: 'call',  placeholder: '+91 XXXXX XXXXX' },
          { label: 'Email Address', name: 'email', type: 'email', icon: 'mail',  placeholder: 'your@email.com' },
        ].map(({ label, name, type, icon, placeholder }) => (
          <div key={name}>
            <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">
              <span className="material-symbols-outlined text-sm align-middle mr-1">{icon}</span>
              {label} *
            </label>
            <input type={type} name={name} value={form[name]} onChange={handleChange}
              placeholder={placeholder} className={inputCls(name)} />
            {errors[name] && <p className="text-red-400 text-xs mt-1 font-sans">{errors[name]}</p>}
          </div>
        ))}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">
          <span className="material-symbols-outlined text-sm align-middle mr-1">chat</span>
          Special Requests (Optional)
        </label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3}
          placeholder="Dietary requirements, early check-in, anniversary arrangements..."
          className={`${inputCls('message')} resize-none`} />
      </div>

      {/* Compliance Disclaimers */}
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            name="agreed" 
            checked={form.agreed} 
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-primary/30 bg-dark/50 text-primary focus:ring-primary focus:ring-offset-dark"
          />
          <span className="font-sans text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
            I agree to the <Link to="/terms-and-conditions" target="_blank" className="text-primary hover:underline">Terms & Conditions</Link>, <Link to="/privacy-policy" target="_blank" className="text-primary hover:underline">Privacy Policy</Link>, and <Link to="/refund-policy" target="_blank" className="text-primary hover:underline">Refund & Cancellation Policy</Link>. *
          </span>
        </label>
        {errors.agreed && <p className="text-red-400 text-[10px] mt-1 font-sans font-bold uppercase tracking-wider">{errors.agreed}</p>}

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <p className="font-sans text-slate-400 text-xs leading-relaxed">
            <span className="text-primary font-bold">📱 Independent Agency Notice:</span> Clicking <em>Send Enquiry</em> will open WhatsApp. 
            We are a private concierge agency; a service fee is included in the totals over the official tariff. 
            <Link to="/disclaimer" target="_blank" className="ml-1 text-primary hover:underline font-bold">View Full Disclaimer</Link>
          </p>
        </div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-primary text-dark font-sans font-bold py-4 rounded-lg uppercase tracking-wide hover:brightness-110 transition-all flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-sm">chat</span>
        Send Enquiry via WhatsApp
      </motion.button>
    </form>
  )
}
