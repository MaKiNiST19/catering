import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hakkimizda() {
  const imageRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Görselin yukarı kayma miktarı (0-100vh arası)
  const stickyLimit = window.innerHeight * 1; // 100vh
  const sectionHeight = window.innerHeight * 1.6; // 160vh
  const translateY = scrollY < stickyLimit
    ? Math.min(scrollY, stickyLimit)
    : stickyLimit;

  return (
    <>
      {/* Hakkımızda Giriş Section */}
      <section className="relative w-full" style={{height: sectionHeight}} id="hakkimizdagiris">
        {/* Video arka plan */}
        <video
          className="sticky top-0 w-full object-cover"
          style={{ height: '100vh', zIndex: 1 }}
          src="/about-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Ön görsel */}
        <div
          ref={imageRef}
          className="absolute top-0 left-0 w-full"
          style={{
            height: '100vh',
            backgroundImage: 'url(/vid-front.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 1,
            zIndex: 2,
            transform: `translateY(-${translateY}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {/* Kaydır animasyonlu yazı ve ok */}
          <button
            type="button"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.5, behavior: 'smooth' });
            }}
            className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center text-gray-800 select-none z-30 focus:outline-none"
            style={{ opacity: scrollY < 100 ? 1 : 0, transition: 'opacity 0.5s' }}
            aria-label="Kaydır"
          >
            <span className="text-sm font-medium mb-2 tracking-wider uppercase animate-bounce">Kaydır</span>
            <ChevronDown size={28} className="animate-bounce" />
          </button>
        </div>
      </section>
      {/* Diğer içerik */}
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
                Hakkımızda
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Yerleşkemizdeki fabrikamız, 1500 m2 kapalı alana sahiptir ve günde 25.000 kişiye kadar üretim yapabilme kapasitesine sahiptir. Tesisimiz, yemek üretimi için uygun bir şekilde tasarlanmış olup, gıda üretiminde geçerli olan tüm standartları karşılamaktadır.<br /><br />
                ISO 9001 – HACCP 22001 – ISO 18001 – ISO 14001, HELAL Food gibi tüm önemli kalite belgelerine sahibiz. Mutfağımızda, herkesin ve her sektörün ihtiyaçlarını karşılayacak şekilde üretim yapıyoruz.<br /><br />
                Catering hizmetlerimizle, müşterilerimize profesyonel bir yaklaşımla kaliteli ürünler sunmayı hedefliyoruz.<br /><br />
                <b>ATERİA KURUMSAL HİZMETLER A.Ş.</b>, toplu yemek üretiminde 20 yılı aşan tecrübesiyle birinci sınıf yemek ve destek hizmetleri vermektedir. Tatlandırıcı, lezzetlendirici (bulyon, çeşni, Msg gibi) ve diğer tüm ürünlerde kullanılan katkı maddelerinden uzak durarak, geleneksel yöntemlerle üretilen yemeklerimizi butik hizmet anlayışıyla sunmaktayız. Müşterilerimiz bizim için her zaman önceliklidir ve onların memnuniyeti odaklı bir sistem kurduk. <b>ATERİA</b> olarak, sağladığımız kaliteli hizmetle catering sektöründe fark yaratıyoruz. Siz de değerli müşterilerimizin kendilerini önemli ve özel hissetmelerini sağlamak isteyen profesyonel bir ekip arıyorsanız, <b>ATERİA</b> doğru adres!
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
                src="/ateria-catering-bina.png"
                alt="Ateria Catering Bina"
                className="row-span-2 w-full h-full object-cover cubic-reveal"
                style={{ gridRow: '1 / span 2', gridColumn: '1 / 2', aspectRatio: '1/1', objectFit: 'contain', width: 500, height: 570, borderRadius: 6 }}
              />
              {/* Sağ üst küçük görsel */}
              <img
                src="/ateria-catering-merkez.png"
                alt="Ateria Catering Merkez"
                className="w-full h-full object-cover cubic-reveal"
                style={{ gridRow: '1 / 2', gridColumn: '2 / 3', aspectRatio: '1/1', objectFit: 'contain', width: 445, height: 285, borderRadius: 6 }}
              />
              {/* Sağ alt küçük görsel */}
              <img
                src="/ateria-catering-yemek.png"
                alt="Ateria Catering Yemek"
                className="w-full h-full object-cover cubic-reveal"
                style={{ gridRow: '2 / 3', gridColumn: '2 / 3', aspectRatio: '1/1', objectFit: 'contain', width: 445, height: 285, borderRadius: 6 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Anasayfadakiyle aynı */}
      <section
        className="relative w-full flex items-stretch"
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
          minHeight: '500px',
        }}
      >
        {/* Arka plan görseli */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/ateria-bg.jpg)' }}></div>
        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-10"></div>
        {/* Grid içerik */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Feature kartları */}
          <div
            className="bg-white border border-gray-100 shadow-md flex flex-col items-center justify-start mb-8"
            style={{ borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 16px', minHeight: '220px', height: '70%' }}
          >
            <img
              src="/ozel-menuler.png"
              alt="Özel Menüler"
              style={{ width: '90px', height: '160px', objectFit: 'contain', transform: 'scale(1.5)' }}
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Özel Menüler</h3>
            <p className="text-gray-700 text-base" style={{textAlign: 'center'}}>
              İhtiyaçlarınız ve talepleriniz doğrultusunda size özel menüler yapıyoruz. Uzman kadromuz ile her gün 25 binden fazla kişiye lezzetli yemekler çıkartıyoruz.
            </p>
          </div>
          <div
            className="bg-white border border-gray-100 shadow-md flex flex-col items-center justify-start mb-8"
            style={{ borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 16px', minHeight: '220px', height: '70%' }}
          >
            <img
              src="/yerinde-hizmet.png"
              alt="Yerinde Hizmet"
              style={{ width: '90px', height: '160px', objectFit: 'contain', transform: 'scale(1.5)' }}
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Yerinde Hizmet</h3>
            <p className="text-gray-700 text-base" style={{textAlign: 'center'}}>
              İşyerleri, fabrikalar, şirket merkezleri, kamu kurumları, hastaneler, eğitim kurumları ve daha birçok yere taşıma personel yemeği hizmeti veriyoruz.
            </p>
          </div>
          <div
            className="bg-white border border-gray-100 shadow-md flex flex-col items-center justify-start mb-8"
            style={{ borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 16px', minHeight: '220px', height: '70%' }}
          >
            <img
              src="/20-yillik-tecrube.png"
              alt="Lezzet Aşkına"
              style={{ width: '90px', height: '160px', objectFit: 'contain', transform: 'scale(1.5)' }}
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Lezzet Aşkına</h3>
            <p className="text-gray-700 text-base" style={{textAlign: 'center'}}>
              20 yılı aşan tecrübe ve uzman kadromuzla, %100 memnuniyet odaklı üretim ve destek hizmetleri sunuyoruz. Modern ve butik lezzetlerle hizmetinizdeyiz.
            </p>
          </div>
          <div
            className="bg-white border border-gray-100 shadow-md flex flex-col items-center justify-start mb-8"
            style={{ borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 16px', minHeight: '220px', height: '70%' }}
          >
            <img
              src="/kaliteli-yemek.png"
              alt="Kaliteli Yemek"
              style={{ width: '90px', height: '160px', objectFit: 'contain', transform: 'scale(1.5)' }}
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Kaliteli Yemek</h3>
            <p className="text-gray-700 text-base" style={{textAlign: 'center'}}>
              ISO 9001, HACCP 22001, ISO 18001, ISO 14001 ve HELAL Food gibi tüm kalite belgelerine sahip mutfağımızda nitelikli yemek üretimi yapıyoruz.
            </p>
          </div>
        </div>
      </section>
      <style>{`
.cubic-reveal {
  opacity: 0;
  transform: scale(0.8) rotateY(40deg);
  animation: cubic-reveal 1s cubic-bezier(.77,0,.18,1) forwards;
}
.cubic-reveal:nth-child(1) { animation-delay: 0.1s; }
.cubic-reveal:nth-child(2) { animation-delay: 0.3s; }
.cubic-reveal:nth-child(3) { animation-delay: 0.5s; }
@keyframes cubic-reveal {
  to {
    opacity: 1;
    transform: scale(1) rotateY(0deg);
  }
}
`}</style>
    </>
  );
} 