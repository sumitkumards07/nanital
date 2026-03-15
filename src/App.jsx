import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import RoomDetails from './pages/RoomDetails'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'
import Facilities from './pages/Facilities'
import ThingsToDo from './pages/ThingsToDo'
import Attractions from './pages/Attractions'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Policies from './pages/Policies'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<RoomDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policies" element={<Policies />} />
          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function NotFound() {
  useEffect(() => {
    document.title = '404 – Page Not Found | Nainital Lake View Hotel'
  }, [])

  return (
    <div className="min-h-screen bg-dark/30 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-9xl font-bold text-primary/20 mb-4">404</p>
        <h1 className="font-display text-3xl text-slate-100 mb-3">Page Not Found</h1>
        <p className="font-sans text-slate-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="btn-primary inline-flex"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}
