
import { useEffect } from 'react'

export default function Booking() {
  useEffect(() => {
    window.location.href = 'https://wa.me/919625081694?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20room.';
  }, [])

  return (
    <div className="pt-32 pb-20 px-6 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-display text-slate-100 mb-4">Redirecting to WhatsApp...</h1>
        <p className="text-slate-400">If you are not redirected automatically, <a href="https://wa.me/919625081694?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20room." className="text-primary hover:underline">click here</a>.</p>
      </div>
    </div>
  )
}
