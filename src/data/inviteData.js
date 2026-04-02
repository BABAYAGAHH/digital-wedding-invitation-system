import coverImage from '../assets/placeholder-cover.jpg';
import coupleImage from '../assets/placeholder-couple.jpg';

const inviteData = {
  coupleNames: 'Daniel & Anita',
  weddingTitle:
    'Together with their families, invite you to celebrate their wedding',
  eventDate: 'Saturday, 18 July 2026',
  eventStart: '2026-07-18T11:00:00+01:00',
  eventEnd: '2026-07-18T20:00:00+01:00',
  ceremonyTime: '11:00 AM',
  receptionTime: '2:00 PM',
  venueName: 'The Grand Orchid Hall',
  venueAddress: '12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
  googleMapsLink:
    'https://www.google.com/maps/search/?api=1&query=12%20Admiralty%20Way%2C%20Lekki%20Phase%201%2C%20Lagos%2C%20Nigeria',
  dressCode: 'Formal / Champagne & Emerald',
  themeColors: ['Champagne', 'Ivory', 'Soft Gold'],
  welcomeMessage:
    'Your presence means the world to us. We would be honored to celebrate this special day with you.',
  guestNote:
    'Please arrive 30 minutes before the ceremony begins so we can start the celebration right on time.',
  receptionNote:
    'Cocktails, dinner, and dancing follow immediately after the vows.',
  storyBlurb:
    'From a quiet hello to forever, this day is our love letter to family, friendship, and a future we cannot wait to share.',
  calendarDescription:
    'Join us for our wedding ceremony and reception. Ceremony begins at 11:00 AM, followed by cocktails, dinner, and dancing at The Grand Orchid Hall, Lekki.',
  heroImage: coverImage,
  coupleImage,
  galleryImages: [
    {
      src: coverImage,
      alt: 'A romantic floral invitation cover set in warm champagne tones.',
      caption: 'A celebration wrapped in warmth, grace, and golden light.',
    },
    {
      src: coupleImage,
      alt: 'Portrait placeholder for Daniel and Anita surrounded by soft florals.',
      caption: 'Two hearts, one promise, and a room full of loved ones.',
    },
  ],
  hotel: {
    name: 'The Pearl Signature Hotel',
    address: '5 Bisola Durosinmi Etti Drive, Lekki, Lagos, Nigeria',
    distanceFromVenue: '8 minutes from venue',
    checkIn: 'From 2:00 PM',
    checkOut: 'By 12:00 PM',
    reservationCode: 'DANITA2026',
    roomOptions: [
      { name: 'Standard Room', price: 'N95,000 / night' },
      { name: 'Deluxe Room', price: 'N140,000 / night' },
      { name: 'Executive Suite', price: 'N220,000 / night' },
    ],
    bookingDeadline: 'Book before 10 July 2026',
    phone: '+234 800 000 0000',
    email: 'reservations@pearlsignature.com',
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=5%20Bisola%20Durosinmi%20Etti%20Drive%2C%20Lekki%2C%20Lagos%2C%20Nigeria',
    note: 'Mention this wedding code when booking to access the reserved room block.',
  },
  contacts: {
    plannerName: 'Grace Events',
    plannerPhone: '+234 801 234 5678',
    plannerEmail: 'hello@graceevents.com',
    whatsapp: '2348012345678',
    brideRepName: 'Amaka Okoro',
    brideRepPhone: '+234 803 555 0112',
    groomRepName: 'Tunde Balogun',
    groomRepPhone: '+234 803 555 0113',
  },
  rsvpOptions: {
    attendance: ['Accept', 'Decline', 'Maybe'],
    guestCount: ['0', '1', '2', '3', '4'],
    mealPreferences: [
      'Chicken Supreme',
      'Grilled Salmon',
      'Vegetarian Delight',
      'Vegan Plate',
    ],
  },
  musicFile: '/music/wedding-theme.mp3',
  hashtag: '#DanitaForever2026',
  footerNote: "We can't wait to celebrate with you.",
  sampleGuestName: 'Mr and Mrs Adebayo',
};

export default inviteData;
