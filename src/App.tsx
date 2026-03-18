import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import HistoriaSection from './sections/HistoriaSection';
import LocalesSection from './sections/LocalesSection';
import GaleriaSection from './sections/GaleriaSection';
import UbicacionSection from './sections/UbicacionSection';
import ContactoSection from './sections/ContactoSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navigation />
      <main>
        <HeroSection />
        <HistoriaSection />
        <LocalesSection />
        <GaleriaSection />
        <UbicacionSection />
        <ContactoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
