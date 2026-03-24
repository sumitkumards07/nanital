import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactButtons from './components/ContactButtons'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Rooms = lazy(() => import('./pages/Rooms'))
const RoomDetails = lazy(() => import('./pages/RoomDetails'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Booking = lazy(() => import('./pages/Booking'))
const Facilities = lazy(() => import('./pages/Facilities'))
const ThingsToDo = lazy(() => import('./pages/ThingsToDo'))
const Attractions = lazy(() => import('./pages/Attractions'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Policies = lazy(() => import('./pages/Policies'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))

// Simple loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  )
}

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
      <Suspense fallback={<PageLoader />}>
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
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </Suspense>
    </AnimatePresence>
  )
}

function NotFound() {
  useEffect(() => {
    document.title = '404 – Page Not Found | Alka The Lake View Hotel'
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
        <ContactButtons />
        <Analytics />
      </div>
    </Router>
  )
}
