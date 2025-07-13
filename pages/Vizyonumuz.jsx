import React from 'react';
import SertifikalarSection from '../SertifikalarSection';

export default function Vizyonumuz() {
  return (
    <>
      {/* Vizyon Giriş Section */}
      <section
        id="vizyongiris"
        className="relative w-full flex items-center justify-center"
        style={{ height: '40vh', minHeight: 200, background: `url('/hero-front-image.png') center/cover no-repeat`, position: 'relative' }}
      >
        {/* İsteğe bağlı: üzerine bir overlay veya başlık eklenebilir */}
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
            Vizyonumuz
          </h1>
          <div className="text-lg text-gray-700 text-center" style={{ lineHeight: 1.7 }}>
            <p style={{ marginBottom: 24 }}>
              <b>ATERİA KURUMSAL HİZMETLER A.Ş.</b>, toplu yemek üretiminde 20 yılı aşan tecrübesiyle birinci sınıf yemek ve destek hizmetleri vermektedir.
            </p>
            <p style={{ marginBottom: 24 }}>
              Tatlandırıcı, lezzetlendirici (bulyon, çeşni, Msg gibi) ve diğer tüm ürünlerde kullanılan katkı maddelerinden uzak durarak, geleneksel yöntemlerle üretilen yemeklerimizi butik hizmet anlayışıyla sunmaktayız. Müşterilerimiz bizim için her zaman önceliklidir ve müşteri memnuniyeti odaklı sistemimiz kusursuz işlemeye devam etmektedir.
            </p>
            <p style={{ marginBottom: 24 }}>
              <b>ATERİA KURUMSAL HİZMETLER A.Ş.</b>, müşterilerine sunduğu tüm yemekleri 1500 m2 kapalı alanı bulunan kendi tesislerinde üretmektedir. Gıda güvenliği ve üretim aşamaları göz önünde bulundurularak inşa edilmiş tesisimizde, et işleme, sebze işleme, unlu mamüller, paketleme, ve lojistik birimleri birbirinden ayrı ve bağımsız bölümlerde üretilip nakledilmektedir.
            </p>
            <p>
              Planlı üretim aşama ve süreçleri ile, lezzet ve besin değeri kaybı oluşturabilecek olumsuzluklar engellenmektedir. Dondurulmuş ürün kullanımını en aza indirgeyen uzman şeflerimiz, sadece mevsimi olmayan ürünleri, ihtiyaç duyulduğunda dondurulmuş olarak temin etmektedir.
            </p>
          </div>
        </div>
      </section>
      <SertifikalarSection />
    </>
  );
} 