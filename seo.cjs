const fs = require('fs');
const path = require('path');

const pageData = {
  'Home.jsx': {
    title: 'Alka The Lake View Hotel Booking | Nainital Mall Road',
    desc: 'Book your stay at Alka The Lake View Hotel on Mall Road, Nainital. Enjoy panoramic Naini Lake views. Independent booking concierge service.'
  },
  'Rooms.jsx': {
    title: 'Rooms & Suites | Alka Hotel Nainital Booking',
    desc: 'Explore premium rooms with lake views at Alka Hotel Nainital. View tariffs, amenities, and book your stay securely through our agency.'
  },
  'Attractions.jsx': {
    title: 'Attractions Near Naini Lake & Mall Road | Travel Guide',
    desc: 'Discover top attractions near Alka Hotel, including Naini Lake, Snow View Point, and Naina Devi Temple. Plan your Nainital itinerary.'
  },
  'ThingsToDo.jsx': {
    title: 'Things To Do In Nainital | Alka Hotel Area Guide',
    desc: 'Explore the best activities, boating, and sightseeing spots near Alka The Lake View Hotel on Nainital Mall Road.'
  },
  'Booking.jsx': {
    title: 'Book Alka The Lake View Hotel | Nainital Accommodation',
    desc: 'Securely book your stay at Alka The Lake View Hotel. We offer assisted concierge booking for rooms on Mall Road, Nainital.'
  },
  'Contact.jsx': {
    title: 'Contact Us | Alka Hotel Nainital Booking Support',
    desc: 'Get in touch with our independent booking agency for Alka The Lake View Hotel reservations, inquiries, and customer support.'
  },
  'About.jsx': {
    title: 'About Us | Independent Booking Agency for Alka Hotel',
    desc: 'Learn about our travel agency services. We provide independent, personalized booking assistance for Alka The Lake View Hotel in Nainital.'
  },
  'Policies.jsx': {
    title: 'Hotel Policies | Alka The Lake View Hotel',
    desc: 'Read the check-in, check-out, and general hotel policies for Alka The Lake View Hotel before you book your stay.'
  },
  'FAQ.jsx': {
    title: 'FAQ | Alka The Lake View Hotel Booking',
    desc: 'Frequently asked questions about room bookings, location, and amenities at Alka The Lake View Hotel in Nainital.'
  },
  'PrivacyPolicy.jsx': {
    title: 'Privacy Policy | Alka Hotel Booking Agency',
    desc: 'Privacy policy for our independent booking agency regarding your personal information when booking Alka The Lake View Hotel.'
  },
  'TermsAndConditions.jsx': {
    title: 'Terms & Conditions | Alka Hotel Booking Agency',
    desc: 'Terms and conditions for using our independent concierge booking services for Alka The Lake View Hotel.'
  }
};

const dir = '/Users/sumitkumar/Desktop/client project/nanital/src/pages';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (pageData[file]) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Add Helmet import if missing
    if (!content.includes("import { Helmet }")) {
      content = content.replace(/(import .*?\n)/, "$1import { Helmet } from 'react-helmet-async'\n");
    }

    // Remove document.title setting
    content = content.replace(/document\.title\s*=\s*['"`].*?['"`];?\s*/g, '');
    
    // Add Helmet block right after return (
    // We look for return (\n    <div
    const { title, desc } = pageData[file];
    const helmetBlock = `\n    <Helmet>\n      <title>${title}</title>\n      <meta name="description" content="${desc}" />\n    </Helmet>`;
    
    if (!content.includes('<Helmet>')) {
      content = content.replace(/(return\s*\(\s*<div[^>]*>)/, `$1${helmetBlock}`);
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${file}`);
  }
}
