import React from 'react';
import DummySection from '../DummySection';
import FeaturesSection from '../FeaturesSection';
import SertifikalarSection from '../SertifikalarSection';

export default function YerindeYemek() {
  return (
    <>
      {/* Giriş Section (vizyongiris gibi) */}
      <section
        id="yerindeyemekgiris"
        className="relative w-full flex items-center justify-center"
        style={{ height: '40vh', minHeight: 200, background: `url('/hero-front-image.png') center/cover no-repeat`, position: 'relative' }}
      >
      </section>

      {/* Metin + 3'lü Galeri Section (Hakkımızda'daki gibi) */}
      <section
        className="relative w-full"
        style={{
          minWidth: '1600px',
          width: '100%',
          margin: '0 auto',
          paddingLeft: '0px',
          paddingRight: '0px',
          left: 0,
          right: 0,
          zIndex: 20,
          position: 'relative',
          background: 'white',
          height: '100vh',
          minHeight: '600px',
        }}
      >
        <div
          className="flex h-full w-full"
          style={{ height: '100%', minHeight: '600px', minWidth: '1600px', margin: '0px' }}
        >
          {/* Sol: Metin Alanı */}
          <div
            className="flex flex-col justify-center items-center px-0"
            style={{ flex: 1, minWidth: 0, background: '#fff' }}
          >
            <div className="w-full max-w-xl mx-auto">
              <h2 className="text-5xl font-extrabold mb-6" style={{ lineHeight: 1.1 }}>
                Yerinde Yemek Üretimi
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Kurumsal catering’de, “sağlıklı ve doğal beslenme” için var gücümüzle çalışıyoruz.<br /><br />
                Tesislerinde yemek üretimini tercih eden çözüm ortaklarımız için, standartlarına uygun kurulmuş veya tarafımızca kurulacak mutfaklarda her türlü yemek üretim ve sunum hizmetini Ateria Catering uzmanlığı ile veriyoruz. Yerinde yemek üretim modeli ile bütün tesislerimizde uyguladığımız kaliteli hammadde kullanımı ve standartlara uygun üretim süreçlerimize, sizleri de ortak ederek anlık denetim ve kontrol ayrıcalığını sunmuş oluyoruz.
              </p>
            </div>
          </div>
          {/* Sağ: 3'lü Galeri Alanı */}
          <div
            className="flex flex-col justify-center items-center px-0"
            style={{ flex: 1, minWidth: 0, background: '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-0"
              style={{ maxWidth: 820, height: 570, width: '100%', placeItems: 'center', margin: '0 auto', rowGap: 0, columnGap: 24 }}>
              {/* Sol büyük görsel */}
              <img
                src="/yerinde-yemek-catering.png"
                alt="Yerinde Yemek Catering"
                className="row-span-2 w-full h-full object-cover cubic-reveal"
                style={{ gridRow: '1 / span 2', gridColumn: '1 / 2', aspectRatio: '1/1', objectFit: 'contain', width: 500, height: 570, borderRadius: 6 }}
              />
              {/* Sağ üst küçük görsel */}
              <img
                src="/catering-mutfak-hizmeti.png"
                alt="Catering Mutfak Hizmeti"
                className="w-full h-full object-cover cubic-reveal"
                style={{ gridRow: '1 / 2', gridColumn: '2 / 3', aspectRatio: '1/1', objectFit: 'contain', width: 445, height: 285, borderRadius: 6 }}
              />
              {/* Sağ alt küçük görsel */}
              <img
                src="/yerinde-catering-yemek.png"
                alt="Yerinde Catering Yemek"
                className="w-full h-full object-cover cubic-reveal"
                style={{ gridRow: '2 / 3', gridColumn: '2 / 3', aspectRatio: '1/1', objectFit: 'contain', width: 445, height: 285, borderRadius: 6 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DummySection (Anasayfadakiyle aynı) */}
      <DummySection />
      {/* FeaturesSection (Anasayfadakiyle aynı) */}
      <FeaturesSection />
      {/* SertifikalarSection (Anasayfadakiyle aynı) */}
      <SertifikalarSection />
    </>
  );
} 