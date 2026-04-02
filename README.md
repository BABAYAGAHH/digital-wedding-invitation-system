# Digital Wedding Invitation System

A premium, mobile-first digital wedding invitation built with React, Vite, Tailwind CSS, and Framer Motion. It is designed for elegant guest sharing through direct links, WhatsApp, email, Instagram DM, SMS, or a printed QR code.

## Overview

This project delivers a polished wedding invitation landing page with:

- A premium hero section with date, venue, and clear calls to action
- Personalized guest greetings from URL query parameters like `/?guest=Adeola+Family`
- Event details, dress code, and Google Maps directions
- Hotel and accommodation information with booking code support
- An RSVP form in frontend demo mode with success feedback
- QR code generation for sharing the invitation link
- Google Calendar link generation
- Contact, WhatsApp, phone, and email action buttons
- Smooth Framer Motion animations and a refined mobile-first layout
- Optional background music toggle

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react
- qrcode
- clsx

## Project Structure

```text
.
├── public/
│   └── music/
│       └── wedding-theme.mp3
├── src/
│   ├── assets/
│   │   ├── placeholder-cover.jpg
│   │   └── placeholder-couple.jpg
│   ├── components/
│   │   ├── ContactSection.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Footer.jsx
│   │   ├── GallerySection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HotelSection.jsx
│   │   ├── MusicToggle.jsx
│   │   ├── Navbar.jsx
│   │   ├── QRCodeCard.jsx
│   │   ├── RSVPSection.jsx
│   │   └── SectionTitle.jsx
│   ├── data/
│   │   └── inviteData.js
│   ├── utils/
│   │   ├── calendar.js
│   │   ├── guest.js
│   │   └── maps.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production-ready output in `dist`
- `npm run preview` serves the production build locally

## Customizing Wedding Content

Most editable wedding content lives in:

- `src/data/inviteData.js`

Update this file to change:

- Couple names
- Wedding title text
- Event date and times
- Venue and directions link
- Dress code and theme colors
- Welcome message
- Hotel details and booking code
- RSVP dropdown options
- Contact information
- Hashtag and music file path

You can also replace the placeholder images in:

- `src/assets/placeholder-cover.jpg`
- `src/assets/placeholder-couple.jpg`

And replace the demo audio file in:

- `public/music/wedding-theme.mp3`

Note: the included MP3 file is only a placeholder stub. Add a real audio file there if you want the music toggle to play successfully.

## Personalized Guest Links

The app reads the `guest` query parameter from the URL.

Examples:

```text
http://localhost:5173/?guest=John
http://localhost:5173/?guest=Adeola+Family
```

If a guest name is present, the hero greeting updates automatically.

## RSVP Mode

The RSVP section currently works in frontend demo mode:

- Uses local React state
- Validates basic required fields
- Shows a polished success state after submission
- Keeps the code ready for a future backend integration

It is structured so you can later connect it to:

- Formspree
- EmailJS
- Supabase
- Firebase
- A custom backend API

## QR Code Sharing

The page generates a QR code from the current invite URL. This makes it easy to:

- Print the code on a physical invitation card
- Share the invite in WhatsApp chats
- Send the invite by email or SMS
- Reuse guest-specific links for premium personalized invites

## Deploying to Vercel

This repository is a standard Vite app, so it can be deployed directly on Vercel.

### Option 1. Deploy from the Vercel dashboard

1. Push this repository to GitHub
2. Log in to Vercel
3. Click **Add New Project**
4. Import `BABAYAGAHH/digital-wedding-invitation-system`
5. Let Vercel detect the framework
6. If Vercel does not auto-fill the settings, use:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

7. Click **Deploy**

After deployment, your invite can be opened with links like:

```text
https://your-domain.vercel.app/?guest=Mr+and+Mrs+Adebayo
```

### Option 2. Deploy with the Vercel CLI

Install the CLI globally:

```bash
npm install -g vercel
```

Then deploy from the project root:

```bash
vercel
```

For a production deployment:

```bash
vercel --prod
```

### Notes for Vercel

- The current app already works well as a root-level single-page invitation
- Query parameters like `?guest=...` work without extra routing configuration
- If you later add client-side routes beyond the root page, add a `vercel.json` rewrite for SPA deep-link support

Example SPA rewrite if you ever add route-based navigation:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Suggested Production Checklist

- Replace placeholder images with real wedding photos
- Add a real MP3 file for background music
- Confirm all venue, hotel, and contact details
- Test RSVP interactions on mobile
- Open and test guest-specific invite URLs
- Generate a final QR code using the live production URL
- Share the Vercel URL across print and digital channels

## Build Verification

The project has already been verified locally with:

```bash
npm run build
```

## License

This project is currently provided as a private-use starter for a wedding invitation experience. Update licensing terms as needed before wider distribution.
