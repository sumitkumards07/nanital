import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',phone:'',subject:'',message:''})
  const [sent, setSent] = useState(false)
  useEffect(() => { document.title = 'Contact Us | Authorized Partner - Alka The Lake View Hotel'; window.scrollTo(0,0) }, [])

  const handle = e => setForm(p => ({...p,[e.target.name]:e.target.value}))
  const submit = e => {
    e.preventDefault()
    const msg = `Hello, I'm ${form.name}.\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\nMessage: ${form.message}`
    window.open(`https://wa.me/917082676889?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  const inputCls = 'w-full rounded-lg px-4 py-3 text-sm font-sans bg-dark/50 text-slate-100 placeholder:text-slate-600 border border-primary/20 hover:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all'

  const contactCards = [
    {icon:'call',        title:'Phone',    val:'+91 7082676889',               href:'tel:+917082676889',   sub:'Tap to call'},
    {icon:'mail',        title:'Email',    val:'support@alkahotel-partner.online',   href:'mailto:support@alkahotel-partner.online', sub:'Send email'},
    {icon:'location_on', title:'Agency Address',  val:'First Floor, Sharma Complex\nThe Mall, Nainital, UK 263001', href:null, sub:null},
    {icon:'chat',        title:'WhatsApp', val:'Chat instantly with our team', href:'https://wa.me/917082676889', sub:'Open WhatsApp'},
  ]

  return (
    <div className="pt-20">
      <div className="page-hero">
        <div className="absolute inset-0 opacity-20"><img src="/images/hotel_facade_day.jpg" alt="bg" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-primary font-sans text-sm uppercase tracking-[0.2em] mb-3">Get in Touch</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-4xl md:text-5xl text-slate-100 font-bold">Contact Us</motion.h1>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactCards.map((c,i) => (
              <motion.div key={c.title} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:i*0.08}}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                    className="group block bg-dark/40 border border-primary/10 rounded-xl p-6 text-center hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{c.icon}</span>
                    <h3 className="font-display font-bold text-slate-100 mb-2">{c.title}</h3>
                    <p className="font-sans text-slate-400 text-sm whitespace-pre-line">{c.val}</p>
                    {c.sub && <p className="text-primary text-xs font-sans mt-2 group-hover:underline">{c.sub} →</p>}
                  </a>
                ) : (
                  <div className="bg-dark/40 border border-primary/10 rounded-xl p-6 text-center hover:border-primary/30 transition-all">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{c.icon}</span>
                    <h3 className="font-display font-bold text-slate-100 mb-2">{c.title}</h3>
                    <p className="font-sans text-slate-400 text-sm whitespace-pre-line">{c.val}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <div className="bg-dark/40 border border-primary/10 rounded-xl p-8 shadow-royal">
                <h3 className="font-display text-2xl text-slate-100 font-bold mb-2">Send Us a Message</h3>
                <p className="font-sans text-slate-400 text-sm mb-6">Fill in the form — we'll reply via WhatsApp.</p>
                {sent ? (
                  <div className="text-center py-10">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 block" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span>
                    <h4 className="font-display text-xl text-slate-100 mb-2">Message Sent!</h4>
                    <p className="font-sans text-slate-400 text-sm">Redirected to WhatsApp. We'll respond shortly.</p>
                    <button onClick={() => setSent(false)} className="mt-4 text-primary font-sans text-sm underline hover:text-primary/80 transition-colors">Send another</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">Name *</label>
                        <input required name="name" value={form.name} onChange={handle} placeholder="Your name" className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">Phone</label>
                        <input name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">Subject</label>
                      <input name="subject" value={form.subject} onChange={handle} placeholder="How can we help?" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-bold text-primary uppercase tracking-wider mb-1.5">Message *</label>
                      <textarea required name="message" value={form.message} onChange={handle} rows={4} placeholder="Your message..." className={`${inputCls} resize-none`} />
                    </div>
                    <button type="submit" className="w-full bg-primary text-dark font-sans font-bold py-4 rounded-lg uppercase tracking-wide hover:brightness-110 transition-all flex items-center justify-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-sm">send</span> Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map + social */}
            <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="space-y-6">
              <div className="bg-dark/40 border border-primary/10 rounded-xl overflow-hidden shadow-royal">
                <div className="p-5 border-b border-primary/10">
                  <h3 className="font-display text-xl text-slate-100 font-bold">Find Us</h3>
                  <p className="font-sans text-slate-500 text-sm">Alka The Lake View Hotel, The Mall, Nainital</p>
                </div>
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.3!2d79.461!3d29.3803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09a97b47eae3b%3A0x5b0d4d6a73b74de!2sNainital%2C+Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%" height="100%"
                    style={{border:0, filter:'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.85)'}}
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location" />
                </div>
              </div>

              <div className="bg-dark/40 border border-primary/10 rounded-xl p-6">
                <h3 className="font-display text-xl text-slate-100 font-bold mb-4">Connect with Us</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[{icon:'call',label:'Call',href:'tel:+917082676889',bg:'bg-blue-600'},{icon:'chat',label:'WhatsApp',href:'https://wa.me/917082676889',bg:'bg-green-600'},{icon:'camera_alt',label:'Instagram',href:'https://instagram.com',bg:'bg-pink-600'},{icon:'share',label:'Facebook',href:'https://facebook.com',bg:'bg-blue-800'},{icon:'mail',label:'Email',href:'mailto:support@alkahotel-partner.online',bg:'bg-red-600'}].map(s => (
                    <a key={s.label} href={s.href} target={s.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                      className={`${s.bg} text-white rounded-xl p-3 flex flex-col items-center gap-1 hover:opacity-90 transition-opacity`}>
                      <span className="material-symbols-outlined text-xl">{s.icon}</span>
                      <span className="font-sans text-xs">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
