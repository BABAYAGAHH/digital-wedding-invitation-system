# Digital Wedding Invitation System

A clean, premium, mobile-first wedding invitation landing page built with React, Vite, and Tailwind CSS.

This version is intentionally simple to maintain. All editable wedding content lives in one place:

- `src/data/inviteData.js`

## Current Structure

```text
src/
  components/
    HeroSection.jsx
    DetailsSection.jsx
    VenueSection.jsx
    RSVPSection.jsx
    Footer.jsx
  data/
    inviteData.js
  App.jsx
  main.jsx
  index.css
public/
  card-preview.jpg
```

## Current Sections

1. Hero / Wedding Card Preview
2. Wedding Details
3. Venue & Directions
4. Hotel / Reception Info
5. RSVP CTA
6. Contact / Footer

## Editing Wedding Content

To update the invite for a future wedding, edit only:

- `src/data/inviteData.js`

This file controls:

- couple names
- invitation lines
- wedding date
- church and reception times
- venue names and addresses
- Google Maps links
- hotel / reception text
- RSVP URL
- contact details
- preview card image path

## Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## Notes

- The preview image is served from `public/card-preview.jpg`
- The app uses simple smooth-scroll section navigation
- Google Maps links are stored directly in the central data file
- RSVP currently uses a simple placeholder CTA link
