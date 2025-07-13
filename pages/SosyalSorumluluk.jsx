import React from 'react';
import SertifikalarSection from '../SertifikalarSection';

export default function SosyalSorumluluk() {
  return (
    <>
      {/* Giriş Section */}
      <section
        id="sosyalsorumlulukgiris"
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
            Sosyal Sorumluluk
          </h1>
          <div className="text-lg text-gray-700 text-center" style={{ lineHeight: 1.7 }}>
            <p style={{ marginBottom: 24 }}>
              <b>ATERİA KURUMSAL HİZMETLER A.Ş.</b>, toplu yemek üretiminde 20 yılı aşan tecrübesiyle birinci sınıf yemek ve destek hizmetleri vermektedir. Bu süreç içerisinde gerek vizyonu, gerekse misyonu ile sosyal toplum bilincine erişmiş uzman ve deneyimli kadrosu ile bir çok sosyal toplum etkinlikleri düzenlemiş veya düzenlenen etkinliklere ciddi katkılar sunmuştur ve sunmaya devam etmektedir. Edindiğimiz bilgi, tecrübe ve makina parkını halkımızın hizmetine sunarak toplumsal bilincin pekiştirilmesi konusunda daima çok istekli davranmaktayız. Bu doğrultuda halen devam etmekte olduğumuz bir çok projeye bizimle birlikte olarak katılmak isteyen katılımcılara da her zaman kapımız açık olacaktır.
            </p>
            <p style={{ marginBottom: 24 }}>
              Çevrenizde gelişen desteğe ihtiyaç durumlarını bildirmek için lütfen bizimle iletişime geçiniz.
            </p>
            <div style={{ marginTop: 32, fontWeight: 600, fontSize: '1.1rem', color: '#231f20' }}>
              <div>İletişim Bilgilerimiz</div>
              <div style={{ marginTop: 8 }}>Ateria Kurumsal Hizmetler</div>
              <div>İvedik OSB. 2273. Cadde No: 12 Ostim – ANKARA</div>
              <div>+90(312) 397 33 00</div>
              <div>info@ateria.com.tr</div>
            </div>
          </div>
        </div>
      </section>
      <SertifikalarSection />
    </>
  );
} 