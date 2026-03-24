import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home',               to: '/' },
  { label: 'About Us',           to: '/about' },
  { label: 'Our Rooms',          to: '/rooms' },
  { label: 'Gallery',            to: '/gallery' },
  { label: 'Facilities',         to: '/facilities' },
  { label: 'Things To Do',       to: '/things-to-do' },
  { label: 'Nearby Attractions', to: '/attractions' },
  { label: 'Book Now',           to: '/booking' },
]

const infoLinks = [
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact Us',   to: '/contact' },
  { label: 'FAQ',          to: '/faq' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Refund Policy',     to: '/refund-policy' },
  { label: 'Privacy Policy',    to: '/privacy-policy' },
  { label: 'Disclaimer',        to: '/disclaimer' },
  { label: 'Hotel Policies',     to: '/policies' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/20">
      {/* CTA strip */}
      <div className="bg-primary py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-dark font-bold">Ready to experience Nainital?</h3>
            <p className="text-dark/70 font-sans text-sm mt-1">Book your stay and enjoy the beauty of the Himalayas.</p>
          </div>
          <a
            href="https://wa.me/917082676889"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-dark text-primary px-6 py-3 rounded-lg font-sans font-bold text-sm hover:bg-dark/80 transition-colors whitespace-nowrap uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            Book on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-2xl">landscape</span>
            <div>
              <p className="font-display font-bold text-slate-100 text-lg leading-none uppercase">Alka The Lake View</p>
              <p className="text-primary/50 text-[10px] font-sans font-bold uppercase tracking-wider mt-1">Authorized Booking Partner</p>
            </div>

          </div>
          <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4">
            Experience the perfect blend of nature and luxury at Nainital's premier hotel.
            Your comfort is our priority, always.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
            <p className="font-sans text-slate-500 text-[10px] leading-relaxed uppercase tracking-wider mb-1 font-bold">Independent Agency Disclaimer</p>
            <p className="font-sans text-slate-400 text-xs leading-relaxed italic">
              "Disclaimer: We are an independent travel agency/authorized booking partner and are not the official website of Alka The Lake View Hotel."
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { icon: 'camera_alt',   href: 'https://instagram.com',   label: 'Instagram' },
              { icon: 'call',         href: 'tel:+917082676889',             label: 'Call' },
              { icon: 'chat',         href: 'https://wa.me/917082676889',    label: 'WhatsApp' },
              { icon: 'mail',         href: 'mailto:sharmakamal2192@gmail.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 border border-primary/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all"
              >
                <span className="material-symbols-outlined text-sm">{s.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display font-bold text-slate-100 mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="font-sans text-sm text-slate-400 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-display font-bold text-slate-100 mb-6">Information</h4>
          <ul className="space-y-3 mb-6">
            {infoLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="font-sans text-sm text-slate-400 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-primary/10 pt-5 space-y-1.5">
            <p className="font-sans text-slate-500 text-xs uppercase tracking-wider mb-2">Hotel Hours</p>
            <p className="font-sans text-slate-400 text-sm">Check-in: 12:00 PM</p>
            <p className="font-sans text-slate-400 text-sm">Check-out: 10:00 AM</p>
            <p className="font-sans text-slate-400 text-sm">Reception: 24/7</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-slate-100 mb-6">Contact Us</h4>
          <div className="space-y-4">
            {[
              { icon: 'call',        label: 'Phone',   value: '+91 7082676889',             href: 'tel:+917082676889' },
              { icon: 'mail',        label: 'Email',   value: 'support@nainitallakeviewhotel.com', href: 'mailto:support@nainitallakeviewhotel.com' },
              { icon: 'location_on', label: 'Agency Address', value: 'First Floor, Sharma Complex,\nThe Mall, Nainital, UK 263001', href: null },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-sm">{c.icon}</span>
                </div>
                <div>
                  <p className="text-primary text-xs font-sans font-bold uppercase tracking-wider">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-sans text-sm text-slate-300 hover:text-primary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-sans text-sm text-slate-300 whitespace-pre-line">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-slate-500 text-xs">
            © {new Date().getFullYear()} Alka The Lake View Hotel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/disclaimer" className="font-sans text-slate-500 text-xs hover:text-slate-300 transition-colors">Disclaimer</Link>
            <Link to="/privacy-policy" className="font-sans text-slate-500 text-xs hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/terms-and-conditions" className="font-sans text-slate-500 text-xs hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
