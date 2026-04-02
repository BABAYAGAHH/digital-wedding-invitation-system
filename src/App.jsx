import { useEffect, useState } from 'react';
import { BedDouble, Map, Send } from 'lucide-react';
import ContactSection from './components/ContactSection';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import HotelSection from './components/HotelSection';
import MusicToggle from './components/MusicToggle';
import Navbar from './components/Navbar';
import QRCodeCard from './components/QRCodeCard';
import RSVPSection from './components/RSVPSection';
import SectionTitle from './components/SectionTitle';
import inviteData from './data/inviteData';
import { buildGoogleCalendarUrl } from './utils/calendar';
import { buildGreeting, buildGuestUrl, getGuestNameFromSearch } from './utils/guest';
import { getMapsLink } from './utils/maps';

function App() {
  const [guestName, setGuestName] = useState('');
  const [currentUrl, setCurrentUrl] = useState('https://yourdomain.com/');

  useEffect(() => {
    const syncLocation = () => {
      setGuestName(getGuestNameFromSearch(window.location.search));
      setCurrentUrl(window.location.href);
    };

    syncLocation();
    window.addEventListener('popstate', syncLocation);

    return () => {
      window.removeEventListener('popstate', syncLocation);
    };
  }, []);

  const greeting = buildGreeting(guestName);
  const directionsUrl = getMapsLink(
    inviteData.googleMapsLink,
    inviteData.venueAddress,
  );
  const calendarUrl = buildGoogleCalendarUrl({
    title: `${inviteData.coupleNames} Wedding Celebration`,
    start: inviteData.eventStart,
    end: inviteData.eventEnd,
    location: `${inviteData.venueName}, ${inviteData.venueAddress}`,
    description: inviteData.calendarDescription,
  });
  const sampleGuestUrl = buildGuestUrl(currentUrl, inviteData.sampleGuestName);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-glow" />
      <div className="pointer-events-none absolute left-[-6rem] top-[30rem] h-64 w-64 rounded-full bg-champagne/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-[55rem] h-72 w-72 rounded-full bg-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[15%] top-[95rem] h-72 w-72 rounded-full bg-sage/10 blur-3xl" />

      <Navbar
        coupleNames={inviteData.coupleNames}
        guestName={guestName}
        onNavigate={handleNavigate}
      />

      <main className="relative z-10 pb-24 sm:pb-8">
        <HeroSection
          data={inviteData}
          greeting={greeting}
          guestName={guestName}
          calendarUrl={calendarUrl}
          onNavigate={handleNavigate}
        />

        <section id="gallery" className="scroll-mt-28">
          <GallerySection data={inviteData} />
        </section>

        <section id="details" className="scroll-mt-28">
          <EventDetails
            data={inviteData}
            directionsUrl={directionsUrl}
            calendarUrl={calendarUrl}
          />
        </section>

        <section id="hotel" className="scroll-mt-28">
          <HotelSection hotel={inviteData.hotel} />
        </section>

        <section id="rsvp" className="scroll-mt-28">
          <RSVPSection data={inviteData} guestName={guestName} />
        </section>

        <section id="share" className="scroll-mt-28">
          <div className="section-shell py-20 sm:py-24">
            <SectionTitle
              eyebrow="Shareable QR"
              title="Open the invitation instantly from a scan or a link."
              description="Perfect for printing on cards, sending over WhatsApp, or sharing by email, SMS, and social media."
              align="center"
            />
            <div className="mt-12">
              <QRCodeCard url={currentUrl} sampleGuestUrl={sampleGuestUrl} />
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28">
          <ContactSection data={inviteData} directionsUrl={directionsUrl} />
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:hidden">
        <div className="grid grid-cols-3 gap-2 rounded-[1.75rem] border border-white/70 bg-white/92 p-2 shadow-luxe backdrop-blur-xl">
          <button
            type="button"
            onClick={() => handleNavigate('rsvp')}
            className="flex flex-col items-center justify-center gap-1 rounded-[1.25rem] px-3 py-3 text-xs font-semibold text-ink"
          >
            <Send className="h-4 w-4 text-gold" />
            RSVP
          </button>
          <button
            type="button"
            onClick={() => handleNavigate('hotel')}
            className="flex flex-col items-center justify-center gap-1 rounded-[1.25rem] px-3 py-3 text-xs font-semibold text-ink"
          >
            <BedDouble className="h-4 w-4 text-gold" />
            Hotel
          </button>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-[1.25rem] px-3 py-3 text-xs font-semibold text-ink"
          >
            <Map className="h-4 w-4 text-gold" />
            Directions
          </a>
        </div>
      </div>

      <MusicToggle musicSrc={inviteData.musicFile} />
      <Footer
        coupleNames={inviteData.coupleNames}
        hashtag={inviteData.hashtag}
        note={inviteData.footerNote}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
