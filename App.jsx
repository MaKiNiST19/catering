import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import DummySection from './DummySection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import SertifikalarSection from './SertifikalarSection';
import VizyonSection from './VizyonSection';
import Layout from './Layout';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showNextSection, setShowNextSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Hero section 300vh (3 * window.innerHeight) tamamlandığında alt section'a geçiş
      const heroSectionHeight = window.innerHeight * 3; // 300vh
      
      if (currentScrollY >= heroSectionHeight) {
        setShowNextSection(true);
      } else {
        setShowNextSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AboutSection başlangıcı için scroll limiti (HeroSection'daki ile aynı olmalı)
  const wordScrollStep = window.innerHeight * 0.2;
  const maxHeroScroll = (5 - 1) * wordScrollStep; // 5 kelime için
  const extraScroll = window.innerHeight * 0.2;
  const heroSectionScrollLimit = maxHeroScroll + extraScroll;
  const borderOpacity = scrollY >= heroSectionScrollLimit ? 1 : 0;

  return (
    <Layout>
      {/* Sayfa içeriği */}
    <div className="min-h-screen">
        {/* Header ve Footer Layout içinde, sadece içerik burada */}
      <div className="relative">
        <HeroSection />
          <AboutSection />
          <FeaturesSection />
      </div>
      {showNextSection && (
        <div className="transition-all duration-500">
          <DummySection />
            <SertifikalarSection />
            <VizyonSection />
        </div>
      )}
    </div>
    </Layout>
  );
}

export default App;

