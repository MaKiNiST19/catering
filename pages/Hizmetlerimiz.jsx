import React from 'react';
import DummySection from '../DummySection.jsx';
import FeaturesSection from '../FeaturesSection.jsx';
import { Check } from 'lucide-react';

const hizmetler = [
  {
    id: 'tasimayemeksection',
    title: 'Taşıma Yemek Hizmeti',
    img: '/catering-firmasi-ankara.png',
    desc: 'Taşıma yemek hizmetini tercih eden müşterilerimiz için Ateria Catering uzmanlığı ile merkez mutfağımızda ürettiğimiz yemekler, sağlık ve hijyen kurallarına uygun olarak sofralarınıza getirilir. Her gün aynı lezzet ve kalitedeki yemeklerimiz, uygun ekipman ve uzman ekiplerimizle tam zamanında beğenilerinize sunulur.',
    btn: { text: 'Taşıma Yemek Hizmeti', link: '/tasima-yemek' },
    reverse: false,
  },
  {
    id: 'yerindeyemeksection',
    title: 'Yerinde Yemek Üretimi',
    img: '/catering-mutfak-hizmeti.png',
    desc: 'Tesislerinde yemek üretimini tercih eden çözüm ortaklarımız için, standartlarına uygun kurulmuş veya tarafımızca kurulacak mutfaklarda her türlü yemek üretim ve sunum hizmetini Ateria Catering uzmanlığı ile veriyoruz. Yerinde yemek üretim modeli ile bütün tesislerimizde uyguladığımız kaliteli hammadde kullanımı ve standartlara uygun üretim süreçlerimize, sizleri de ortak ederek anlık denetim ve kontrol ayrıcalığını sunmuş oluyoruz.',
    btn: { text: 'Yerinde Yemek Hizmeti', link: '/yerinde-yemek' },
    reverse: true,
  },
  {
    id: 'davetsection',
    title: 'Davet ve Organizasyon',
    img: '/toplu-yemek-organizasyon-catering.png',
    desc: '“Memnun misafir, mutlu ev sahibi” sloganı ile yola çıkarak, gerçekleştirdiğimiz organizasyonlarımızda geleneksel Türk ve Dünya mutfağından oluşan zengin menü çeşitlerimiz ile davetlerinizi farklı kılıyoruz. Davetlerinizin planlanması, davetinize uygun konseptin belirlenmesi, konsepte uygun ekipmanlar ve size özel tasarımlarla dizayn edilmesi, menü tespiti danışmanlığı ve diğer özel talepleriniz Ateria Catering’in uzman kadrosu tarafından kurgulanır. Misafirlerinizin karşılamasından, uğurlanmasına kadar geçen sürede tüm organizasyonun kurgulandığı şekliyle gerçekleşmesi Ateria Catering profesyonelliği ile sağlanır.',
    btn: { text: 'Davet ve Organizasyon', link: '/davet-organizasyon' },
    reverse: false,
  },
];

const hizmetList = [
  'İşyerleri, Fabrikalar, Şirket merkezleri taşıma personel yemeği',
  'İşyerleri, Fabrikalar, Şirket merkezleri yerinde üretim personel yemeği',
  'Kamu kurum ve kuruluşları yerinde yemek üretim hizmeti',
  'Askeriye ve bağlı kuruluşların yerinde yemek üretim hizmetleri',
  'Hastaneler, Eğitim kurumları, Rehabilitasyon merkezleri yerinde yemek üretim hizmetleri',
  'Serbest alım yapan kamu kurum ve kuruluşlarının taşıma veya yerinde yemek üretim hizmetleri',
  'Ambalajlı ürünler; Kahvaltı, Kumanya ve tabldot yemek üretimi',
  'Event, Catering, Kurumsal ve bireysel davet, etkinlik ve organizasyon hizmetleri',
  'Düğün, Dua ve özel gün yemekleri üretimi',
  'Entegre tesis yönetimi hizmetleri',
  'AVM yönetimi hizmetleri',
  'Kurumsal Temizlik Hizmetleri',
  'Peyzaj bakım onarım ve uygulama hizmetleri',
  'Güvenlik hizmetleri',
];

const SectionAboutStyle = ({ id, title, img, desc, btn, reverse }) => (
  <section id={id} className="w-full flex items-stretch" style={{ minHeight: '600px', position: 'relative', zIndex: 20, flexDirection: reverse ? 'row-reverse' : 'row', background: '#fff' }}>
    <div className="flex h-full w-full" style={{ minHeight: '600px', minWidth: '1600px', margin: 0, flexDirection: reverse ? 'row-reverse' : 'row' }}>
      {/* Metin Alanı */}
      <div className="flex flex-col justify-center items-center px-0" style={{ flex: 1, minWidth: 0, background: '#fff' }}>
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6" style={{ lineHeight: 1.1 }}>{title}</h2>
          <p className="text-lg text-gray-700 mb-8">{desc}</p>
          <a href={btn.link} className="btn-accent font-semibold rounded-xl shadow-md w-fit inline-block" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 32px', fontSize: '1rem' }}>{btn.text}</a>
        </div>
      </div>
      {/* Görsel Alanı */}
      <div className="flex items-stretch justify-center px-0" style={{ flex: 1, minWidth: 0, background: '#f9f9f9', height: '100%', margin: 0, padding: 0 }}>
        <div style={{ width: '100%', aspectRatio: '1/1', height: '100%', minHeight: '100%', margin: 0, padding: 0 }}>
          <img src={img} alt={title} className="w-full h-full object-cover rounded-none" style={{ width: '100%', height: '100%', minHeight: '100%', objectFit: 'cover', borderRadius: 0, margin: 0, padding: 0 }} />
        </div>
      </div>
    </div>
  </section>
);

export default function Hizmetlerimiz() {
  return (
    <>
      {/* Vizyon Giriş Section */}
      <section
        id="vizyongiris"
        className="relative w-full flex items-center justify-center"
        style={{ height: '40vh', minHeight: 200, background: `url('/hero-front-image.png') center/cover no-repeat`, position: 'relative' }}
      />

      {/* Başlıca Hizmetlerimiz Section */}
      <section
        id="baslicahizmetler"
        className="relative w-full flex flex-col items-center justify-start"
        style={{ background: '#fff', padding: '80px 0 40px 0', minWidth: '1600px', width: '100%', margin: '0 auto', left: 0, right: 0 }}
      >
        <div
          className="flex flex-col items-center justify-start w-full"
          style={{ width: '100%', margin: '0 auto' }}
        >
          <h1 className="text-4xl font-extrabold mb-8 text-center" style={{ letterSpacing: 1 }}>
            Başlıca Hizmetlerimiz
          </h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-left">
            {hizmetList.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-800 font-medium text-base bg-white rounded-xl shadow p-4 min-h-[90px] border border-gray-100">
                <Check size={20} className="text-green-600 min-w-[20px]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anasayfa About Section */}
      {/* Hakkımızda ve Hizmetler sectionlarını AboutSection'dan kopyalayarak ekleyebilirsiniz. */}
      {/* ... AboutSection kodu buraya ... */}
      {/* ... AboutSection kodu buraya ... */}

      {/* Hizmetler özel about-style sectionlar */}
      {hizmetler.map((s, i) => <SectionAboutStyle key={s.id} {...s} />)}

      <DummySection />
      <FeaturesSection />
    </>
  );
} 