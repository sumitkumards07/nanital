export const rooms = [
  {
    id: 1,
    slug: 'standard-room',
    name: 'Standard Room',
    tagline: 'Comfort and value in the heart of Nainital',
    price: 1500,
    priceLabel: '₹1,500 / night',
    category: 'Standard',
    capacity: 2,
    size: '280 sq ft',
    beds: '1 Double Bed',
    view: 'Internal View',
    description: 'Our Standard Room offers essential comfort and modern amenities, making it the perfect choice for budget-conscious travelers.',
    longDescription: 'The Standard Room is designed to provide a cozy and functional stay. Featuring a comfortable double bed, clean linens, and necessary modern conveniences, it ensures a restful night after a day of exploring Nainital. Perfect for solo travelers or couples looking for great value.',
    images: ['/images/room_interior_1.png', '/images/hotel_courtyard.jpg', '/images/room_interior_2.png'],
    amenities: [
      { icon: 'Zap', label: 'AC' },
      { icon: 'Wifi', label: 'Free WiFi' },
      { icon: 'Droplets', label: 'Hot Water' },
      { icon: 'Tv', label: '32" Smart TV' },
      { icon: 'Coffee', label: 'Tea Maker' }
    ],
    highlighted: true,
    badge: 'Best Value'
  },
  {
    id: 2,
    slug: 'deluxe-mountain-view',
    name: 'Deluxe Mountain View',
    tagline: 'Wake up to breathtaking vistas',
    price: 2000,
    priceLabel: '₹2,000 / night',
    category: 'Deluxe',
    capacity: 2,
    size: '350 sq ft',
    beds: '1 King Size Bed',
    view: 'Lake & Mountain View',
    description: 'Enjoy stunning panoramas from our Deluxe Mountain View room, featuring a private balcony and premium features.',
    longDescription: 'Elevate your stay in our Deluxe Mountain View room. This room features a private balcony where you can soak in the fresh mountain air and enjoy unobstructed views of the hills and the lake. With a king-size bed and upgraded interiors, it offers a truly refreshing experience.',
    images: ['/images/room_interior_2.png', '/images/hotel_exterior_terrace.jpg', '/images/hotel_facade_day.jpg'],
    amenities: [
      { icon: 'Zap', label: 'AC' },
      { icon: 'Sun', label: 'Private Balcony' },
      { icon: 'Mountain', label: 'Lake View' },
      { icon: 'Wifi', label: 'Free WiFi' },
      { icon: 'Tv', label: '42" Smart TV' },
      { icon: 'Droplets', label: 'Hot Water' }
    ],
    highlighted: true,
    badge: 'Popular'
  },
  {
    id: 3,
    slug: 'family-suite',
    name: 'Family Suite',
    tagline: 'Expansive luxury for the whole family',
    price: 2500,
    priceLabel: '₹2,500 / night',
    category: 'Suite',
    capacity: 4,
    size: '550 sq ft',
    beds: '2 Queen Size Beds',
    view: 'Panoramic Lake View',
    description: 'Our Family Suite provides ample space and premium comfort for families or groups traveling together.',
    longDescription: 'The Family Suite is our most spacious offering, featuring two large queen beds and a dedicated seating area. With large windows offering a panoramic view of Naini Lake and the surrounding town, it provides the perfect backdrop for family memories. Includes premium amenities and priority room service.',
    images: ['/images/hotel_terrace_fountain.jpg', '/images/room_interior_1.png', '/images/hotel_facade_wide.jpg'],
    amenities: [
      { icon: 'Zap', label: 'AC' },
      { icon: 'Sofa', label: 'Seating Area' },
      { icon: 'Mountain', label: 'Panoramic View' },
      { icon: 'Wifi', label: 'Free High-Speed WiFi' },
      { icon: 'Tv', label: '50" Smart TV' },
      { icon: 'Droplets', label: 'Premium Bath' }
    ],
    highlighted: true,
    badge: 'Family Choice'
  }
]
