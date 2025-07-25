import React from 'react';
import DummySection from '../DummySection';
import FeaturesSection from '../FeaturesSection';
import SertifikalarSection from '../SertifikalarSection';

export default function TasimaYemek() {
  return (
    <>
      {/* Giriş Section (vizyongiris gibi) */}
      <section
        id="tasimayemekgiris"
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
                Taşıma Yemek Hizmeti
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                kurumsal yemek ihtiyaçlarınız için, mutfak yatırımından kurtulun, zaman tasarrufu sağlayın!<br /><br />
                Taşıma yemek hizmetini tercih eden müşterilerimiz için Ateria Catering uzmanlığı ile merkez mutfağımızda ürettiğimiz yemekler, sağlık ve hijyen kurallarına uygun olarak sofralarınıza getirilir. Her gün aynı lezzet ve kalitedeki yemeklerimiz, uygun ekipman ve uzman ekiplerimizle tam zamanında beğenilerinize sunulur.
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
                src="/tasima-yemek-catering.png"
                alt="Taşıma Yemek Catering"
                className="row-span-2 w-full h-full object-cover cubic-reveal"
                style={{ gridRow: '1 / span 2', gridColumn: '1 / 2', aspectRatio: '1/1', objectFit: 'contain', width: 500, height: 570, borderRadius: 6 }}
              />
              {/* Sağ üst küçük görsel */}
              <img
                src="/catering-firmasi-ankara.png"
                alt="Catering Firması Ankara"
                className="w-full h-full object-cover cubic-reveal"
                style={{ gridRow: '1 / 2', gridColumn: '2 / 3', aspectRatio: '1/1', objectFit: 'contain', width: 445, height: 285, borderRadius: 6 }}
              />
              {/* Sağ alt küçük görsel */}
              <img
                src="/ateria-catering-ankara.png"
                alt="Ateria Catering Ankara"
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