import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import heroFront from '/giris-on.png';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = ['YENİLİKÇİ', 'LEZZETLİ', 'BİRİNCİ', 'SINIF', 'YEMEK'];
  const lineHeight = 40; // px
  const fontSize = 80; // px
  const maxWidth = 500; // px
  // 300vh boyunca 5 satır için her satır 60vh scroll mesafesi
  const scrollPerLine = window.innerHeight * 0.4; // 60vh
  const totalScrollForAllLines = scrollPerLine * (words.length - 1); // 240vh
  
  // Hangi satırın ortada olduğunu hesapla
  const getCurrentCenterLine = () => {
    const lineIndex = Math.floor(scrollY / scrollPerLine);
    return Math.min(lineIndex, words.length - 1);
  };

  // Her kelime için scroll aralığı 20vh
  const wordScrollStep = window.innerHeight * 0.2; // 20vh
  // Aktif kelimeyi bul
  const getActiveIndex = () => Math.min(words.length - 1, Math.floor(scrollY / wordScrollStep));
  // Hero section scroll sınırı: Son kelime netleşene kadar sabit, sonra scroll
  const maxHeroScroll = (words.length - 1) * wordScrollStep; // 80vh
  const extraScroll = window.innerHeight * 0.2; // 20vh
  const heroSectionScrollLimit = maxHeroScroll + extraScroll; // 100vh
  // Blur, opacity ve translateY hesapla
  const getBlurValue = (index) => {
    const active = getActiveIndex();
    if (index === active) return 0;
    if (index === active - 1 && scrollY % wordScrollStep !== 0) return 8; // fade out up
    return 12;
  };
  const getOpacity = (index) => {
    const active = getActiveIndex();
    if (index === active) return 1;
    if (index === active - 1 && scrollY % wordScrollStep !== 0) return 0;
    return 0.2;
  };
  const getTranslateY = (index) => {
    const active = getActiveIndex();
    const progress = (scrollY % wordScrollStep) / wordScrollStep; // 0-1 arası
    if (index === active) {
      // Aktif kelime fade out up
      return -progress * 60;
    }
    if (index === active + 1) {
      // Alttaki kelime yukarıya yükseliyor
      return (1 - progress) * 60;
    }
    return (index - active) * 60;
  };

  // Alt başlık ve butonlar için animasyon - tüm satırlar tamamlandıktan sonra
  const getContentOpacity = () => {
    if (scrollY >= totalScrollForAllLines) {
      return Math.min(1, (scrollY - totalScrollForAllLines) / (window.innerHeight * 0.6));
    }
    return 0;
  };

  // Hero section ilk 100vh boyunca sabit dursun
  const startScroll = window.innerHeight * 1;
  // Hero section yüksekliği: 100vh sabit + kelime animasyonu
  const heroSectionHeight = startScroll + (words.length - 1) * lineHeight + window.innerHeight;
  // Scroll sınırı: son kelime top:0 olana kadar
  const maxScroll = startScroll + (words.length - 1) * lineHeight;
  const scrollOffset = Math.max(0, Math.min(scrollY - startScroll, (words.length - 1) * lineHeight));

  // Her harf için animasyon değerleri hesapla
  const getCharStyle = (wordIndex, charIndex) => {
    const active = getActiveIndex();
    const isActiveWord = wordIndex === active;
    const delay = charIndex * 0.04;
    return {
      display: 'inline-block',
      transition: `all 0.5s ${delay}s`,
      opacity: isActiveWord ? 1 : 0.3,
      filter: isActiveWord ? 'blur(0px)' : 'blur(4px)',
      color: isActiveWord ? 'black' : '#888',
      fontWeight: isActiveWord ? 900 : 500,
      transform: 'none',
    };
  };

  // AboutSection'un başladığı scroll noktasını belirle
  const aboutSectionStart = heroSectionScrollLimit; // AboutSection hemen HeroSection'dan sonra başlıyor varsayımıyla

  return (
    <section className="relative w-full" style={{ height: heroSectionHeight, position: 'sticky', top: 0, zIndex: 10 }}>
      {/* Ana içerik - Sticky, 200vh boyunca sabit */}
      <div className="sticky top-0 h-screen w-full">
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-end w-auto gap-0 z-30"
          style={{
            top: '10%',
            height: '200px',
            willChange: 'transform',
            position: 'relative',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: `${lineHeight}px`, maxWidth: maxWidth, margin: '0 auto', top: 0 }}>
            {words.map((word, wordIndex) => {
              const active = getActiveIndex();
              const progress = (scrollY % wordScrollStep) / wordScrollStep;
              // Blur ve opacity sadece aktif kelimeye uygulanacak
              let isActive = wordIndex === active;
              let blurValue = isActive ? 0 : 8;
              let opacityValue = isActive ? 1 : 0;
              // Geçiş animasyonu için transition ekle
              return (
                <span 
                  key={wordIndex}
                  className="text-center drop-shadow-2xl transition-all duration-500 ease-out"
                  style={{ 
                    fontSize: fontSize,
                    lineHeight: '40px',
                    display: 'block',
                    height: '40px',
                    width: '100%',
                    maxWidth: maxWidth,
                    margin: '0 auto',
                    textAlign: 'center',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    opacity: opacityValue,
                    filter: `blur(${blurValue}px)`,
                    transition: 'opacity 0.5s, filter 0.5s',
                    color: '#231f20',
                  }}
                >
                  <span style={{ display: 'flex', justifyContent: 'center', gap: 0, whiteSpace: 'nowrap', width: '100%' }}>
                    {word.split('').map((char, charIndex) => (
                      <span key={charIndex} style={getCharStyle(wordIndex, charIndex)}>{char}</span>
                    ))}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero front görseli sticky scroll limiti boyunca, AboutSection gelince sticky kalkmaz, yukarı itilir */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          zIndex: 10, // AboutSection'dan düşük
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          pointerEvents: 'none'
        }}
      >
        <img 
          src={heroFront} 
          alt="Ateria Catering" 
          className="w-full h-auto max-h-[105vh] object-cover"
          style={{objectFit: 'cover', transform: 'scale(1.5)'}}
        />
      </div>

      {/* Scroll indicator - sadece başlangıçta görünür */}
      <div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30 transition-opacity duration-500 flex flex-col items-center text-gray-800 select-none focus:outline-none"
        style={{ opacity: scrollY < 100 ? 1 : 0 }}
        aria-label="Kaydır"
      >
        <span className="text-sm font-medium mb-2 tracking-wider uppercase">Kaydır</span>
        <ChevronDown size={24} />
      </div>

      {/* Progress indicator - hangi satırda olduğunu gösterir */}
    </section>
  );
};

export default HeroSection;

