# 🏔️ Nainital Lake View Hotel

> **Your comfort, our priority** — A luxury hotel website for Nainital, Uttarakhand.

![Nature + Royal Theme](/images/hotel_facade_wide.jpg)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
nainital-lake-view-hotel/
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navbar with dropdown menus
│   │   ├── Footer.jsx           # Full footer with links & contact
│   │   ├── Hero.jsx             # Parallax hero section
│   │   ├── RoomCard.jsx         # Room card with hover animation
│   │   ├── BookingForm.jsx      # WhatsApp booking form
│   │   ├── GalleryGrid.jsx      # Masonry gallery with lightbox
│   │   ├── TestimonialSlider.jsx # Auto-sliding testimonials
│   │   ├── FacilityCard.jsx     # Facility display card
│   │   ├── AttractionCard.jsx   # Attraction display card
│   │   └── WhatsAppButton.jsx   # Floating WhatsApp CTA
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Rooms.jsx
│   │   ├── RoomDetails.jsx
│   │   ├── Gallery.jsx
│   │   ├── Booking.jsx
│   │   ├── Facilities.jsx
│   │   ├── ThingsToDo.jsx
│   │   ├── Attractions.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   └── Policies.jsx
│   ├── data/
│   │   ├── rooms.js
│   │   ├── gallery.js
│   │   ├── testimonials.js
│   │   ├── attractions.js
│   │   ├── thingsToDo.js
│   │   └── facilities.js
│   ├── styles/
│   │   └── animations.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── vercel.json
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary** | Deep Blue `#1e3a8a` |
| **Gold** | Rich Gold `#d97706` |
| **Background** | White `#ffffff` |
| **Accent** | Mountain Grey `#94a3b8` |
| **Heading Font** | Playfair Display |
| **Body Font** | Inter |

---

## 📱 Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Rooms | `/rooms` |
| Room Details | `/rooms/:slug` |
| Gallery | `/gallery` |
| Booking | `/booking` |
| Facilities | `/facilities` |
| Things To Do | `/things-to-do` |
| Attractions | `/attractions` |
| Testimonials | `/testimonials` |
| Contact | `/contact` |
| FAQ | `/faq` |
| Policies | `/policies` |

---

## 📦 Tech Stack

- **React 18** + **Vite 5**
- **TailwindCSS 3** — utility-first styling
- **Framer Motion 11** — animations & page transitions
- **Lucide React** — icon library
- **React Router v6** — client-side routing

---

## 💬 Booking Flow

1. User fills the booking form (check-in, check-out, room type, name, phone, email)
2. Clicks **"Book Now via WhatsApp"**
3. App generates a pre-filled WhatsApp message
4. Opens `https://wa.me/8252561063?text=...`
5. Guest sends the message; hotel confirms within 30 minutes

---

## 🚢 Deployment

### Netlify
```bash
npm run build
# Upload dist/ to Netlify, or connect GitHub repo
# netlify.toml handles redirects automatically
```

### Vercel
```bash
npm run build
# Connect GitHub repo to Vercel
# vercel.json handles SPA redirects automatically
```

---

## 📞 Hotel Contact

- **Phone:** +91 8252561063
- **Email:** pushkar.sarraf44@gmail.com
- **Address:** VIT Nainital, 522237, Uttarakhand, India
- **WhatsApp:** [wa.me/8252561063](https://wa.me/8252561063)

---

*Built with ❤️ for mountain lovers*
