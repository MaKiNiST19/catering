import React from 'react';

const features = [
  {
    title: 'Özel Menüler',
    img: '/ozel-menuler.png',
    desc: 'İhtiyaçlarınız ve talepleriniz doğrultusunda size özel menüler yapıyoruz. Uzman kadromuz ile her gün 25 binden fazla kişiye lezzetli yemekler çıkartıyoruz.'
  },
  {
    title: 'Yerinde Hizmet',
    img: '/yerinde-hizmet.png',
    desc: 'İşyerleri, fabrikalar, şirket merkezleri, kamu kurumları, hastaneler, eğitim kurumları ve daha birçok yere taşıma personel yemeği hizmeti veriyoruz.'
  },
  {
    title: 'Lezzet Aşkına',
    img: '/20-yillik-tecrube.png',
    desc: '20 yılı aşan tecrübe ve uzman kadromuzla, %100 memnuniyet odaklı üretim ve destek hizmetleri sunuyoruz. Modern ve butik lezzetlerle hizmetinizdeyiz.'
  },
  {
    title: 'Kaliteli Yemek',
    img: '/kaliteli-yemek.png',
    desc: 'ISO 9001, HACCP 22001, ISO 18001, ISO 14001 ve HELAL Food gibi tüm kalite belgelerine sahip mutfağımızda nitelikli yemek üretimi yapıyoruz.'
  },
];

const FeaturesSection = () => {
  return (
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
        minHeight: '500px',
      }}
    >
      {/* Arka plan görseli */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/ateria-bg.jpg)' }}></div>
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-10"></div>
      {/* Grid içerik */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="bg-white border border-gray-100 shadow-md flex flex-col items-center justify-start mb-8"
            style={{ borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 16px', minHeight: '220px', height: '70%' }}
          >
            <img
              src={feature.img}
              alt={feature.title}
              style={{ width: '90px', height: '160px', objectFit: 'contain', transform: 'scale(1.5)' }}
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-700 text-base" style={{textAlign: 'center'}}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection; 