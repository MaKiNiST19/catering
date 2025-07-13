import React from 'react';
import SertifikalarSection from '../SertifikalarSection';

export default function HijyenPolitikamiz() {
  return (
    <>
      {/* Giriş Section */}
      <section
        id="hijyengiris"
        className="relative w-full flex items-center justify-center"
        style={{ height: '40vh', minHeight: 200, background: `url('/hero-front-image.png') center/cover no-repeat`, position: 'relative' }}
      >
      </section>

      {/* Text Section */}
      <section
        id="textsection"
        className="relative w-full flex flex-col items-center justify-start"
        style={{ height: '60vh', minHeight: 600, background: '#fff' }}
      >
        <div
          className="flex flex-col items-center justify-start w-full"
          style={{ paddingTop: '10vh', maxWidth: 900, margin: '0 auto' }}
        >
          <h1 className="text-5xl font-extrabold mb-8 text-center" style={{ letterSpacing: 1 }}>
            Hijyen Politikamız
          </h1>
          <div className="text-lg text-gray-700 text-center" style={{ lineHeight: 1.7 }}>
            <p style={{ marginBottom: 24 }}>
              Hijyen, toplu yemek üretimi hizmetinin olduğu gibi firmamızın da ana ve vazgeçilmez kuralıdır. Ateria Kurumsal Hizmetler A.Ş., hijyenik koşullara eksiksiz olarak uyan tesisi ve ekipmanları, eğitimli ve bilinçli personeli ile yemeğin üretimine başlangıcından tüketildiği ana kadar olan tüm aşamalarında eksiksiz ve kontrollü bir hijyen sağlar.
            </p>
            <p style={{ marginBottom: 24 }}>
              <b>Temizlik</b><br/>
              Tesisin temizliği, sürekli hijyen sağlamak ve korumak için periyodik olarak her gün sonunda profesyonel temizlik ürünleri kullanılarak yapılmaktadır. Ayrıca her üretim aşamasından sonra gün içinde defalarca tekrarlanan temizlik işlemlerinde de, tesisin en küçük noktası bile atlanmaz.
            </p>
            <p style={{ marginBottom: 24 }}>
              <b>Tedarikçi Kontrolü</b><br/>
              Yemek üretiminde kullanılan tüm malzemeler, TSE standartlarına uygun ve kaliteli üretim yapan firmalardan seçilir. Ürünlerin ambalaj, depolama ve sevkiyat prosedürlerine mutlak uymaları sağlanır.
            </p>
          </div>
        </div>
      </section>
      <SertifikalarSection />
    </>
  );
} 