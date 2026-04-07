import Footer from './components/Footer';
import DetailsSection from './components/DetailsSection';
import HeroSection from './components/HeroSection';
import OfficialCardSection from './components/OfficialCardSection';
import RSVPSection from './components/RSVPSection';
import VenueSection from './components/VenueSection';
import inviteData from './data/inviteData';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(255,245,237,0.95),_rgba(255,250,244,0.72)_42%,_rgba(255,250,244,0)_78%)]" />
      <div className="pointer-events-none absolute left-[-5rem] top-36 h-48 w-48 rounded-full bg-[#ead7ca]/45 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-[30rem] h-64 w-64 rounded-full bg-[#e8dcc0]/40 blur-3xl" />

      <main className="relative z-10">
        <HeroSection
          data={inviteData}
          displayDate={inviteData.weddingDate}
          onNavigate={scrollToSection}
        />

        <OfficialCardSection data={inviteData} />

        <DetailsSection data={inviteData} displayDate={inviteData.weddingDate} />

        <VenueSection data={inviteData} />

        <RSVPSection data={inviteData} />
      </main>

      <Footer data={inviteData} />
    </div>
  );
}

export default App;
