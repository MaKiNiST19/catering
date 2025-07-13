import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <>
      {/* HAKKIMIZDA SECTION - sticky, full width, stretch, z-20 */}
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
          position: 'sticky',
          top: '20px',
          background: 'white'
        }}
      >
        <div
          className="flex h-full w-full"
          style={{ height: '100%', minHeight: '600px', MinWidth: '1600px', margin: '0px' }}
        >
          {/* Sol: Metin Alanı */}
          <div
            className="flex flex-col justify-center items-center px-0"
            style={{ flex: 1, minWidth: 0, background: '#fff' }}
          >
            <div className="w-full max-w-xl mx-auto">
              <span style={{ fontFamily: 'Pacifico, cursive', color: '#eab308', fontSize: 36, marginBottom: 8, display: 'block' }}>
                Hakkımızda
              </span>
              <h2 className="text-5xl font-extrabold mb-6" style={{ lineHeight: 1.1 }}>
                Ateria Catering
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Yerleşkemizdeki fabrikamız, 1500m2 kapalı alana sahiptir ve günde 25.000 kişiye kadar üretim yapabilme kapasitesine sahiptir. En yenilikçi ve modern ekipmanlarla donatılmış tesisimizde, gıda üretiminde geçerli olan tüm standartları karşılamaktayız.<br /><br />
                ISO 9001 – HACCP 22001 – ISO 18001 – ISO 14001, ISO 10002 gibi tüm önemli kalite belgelerine sahibiz. Mutfağımızda, herkesin ve her sektörün ihtiyaçlarını karşılayacak şekilde üretim yapıyoruz.<br /><br />
                Catering hizmetlerimizle, müşterilerimize profesyonel bir yaklaşımla kaliteli ürünler sunmayı hedefliyoruz. Deneyimli ve uzman kadromuz ile siz değerli müşterilerimize seçkin, özgün ve sektörümüzdeki en geniş menü çeşitliliğini sunmaktayız.
              </p>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
                <img src="/imza.png" alt="imza" style={{ height: 82, objectFit: 'contain' }} />
              </div>
              <Link
                to="/hakkimizda"
                className="btn-accent font-semibold rounded-xl shadow-md w-fit"
                style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 32px', fontSize: '1rem' }}
              >
                Hakkımızda
              </Link>
            </div>
          </div>
          {/* Sağ: Kare Görsel Alanı */}
          <div
            className="flex items-center justify-center px-0"
            style={{ flex: 1, minWidth: 0, background: '#f9f9f9', height: '100%' }}
          >
            <div style={{ width: '100%', aspectRatio: '1/1', height: '100%' }}>
              <img
                src="/ateria-catering-hakkinda.png"
                alt="Ateria Catering Hakkında"
                className="w-full h-full object-cover rounded-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* HİZMETLER SECTION - relative, full width, stretch, z-30 */}
      <section id="hizmet" className="w-full flex items-stretch" style={{ height: '100vh', minHeight: '600px', position: 'relative', zIndex: 20 }}>
        <div
          className="flex h-full w-full flex-row-reverse"
          style={{ height: '100%', minHeight: '600px', minWidth: '1600px', margin: '0 0px' }}
        >
          {/* Sağ: Metin Alanı */}
          <div
            className="flex flex-col justify-center items-center px-0"
            style={{ flex: 1, minWidth: 0, background: '#fff' }}
          >
            <div className="w-full max-w-xl mx-auto">
              <span style={{ fontFamily: 'Pacifico, cursive', color: '#eab308', fontSize: 36, marginBottom: 8, display: 'block', textAlign: 'right' }}>
                Hizmetlerimiz
              </span>
              <h2 className="text-5xl font-extrabold mb-6 text-right" style={{ lineHeight: 1.1 }}>
                Catering de Fark Yaratan Hizmet
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-right">
                Davet ve Organizasyon Hizmetleri<br />
                En özel günlerinizi unutulmaz kılmak için profesyonel çözümler sunuyoruz. Ateria Catering olarak, “Memnun misafir, mutlu ev sahibi” anlayışıyla; davet planlaması, konsept oluşturma, özel tasarım dekorlar ve menü danışmanlığı gibi tüm süreçleri sizin için üstleniyoruz. Türk ve Dünya mutfağından zengin menülerimizle her daveti farklı ve özel kılıyoruz.<br /><br />
                Taşıma Yemek Hizmeti<br />
                Kurumsal yemek ihtiyaçlarınız için pratik ve hijyenik çözümler sunuyoruz. Merkez mutfağımızda hazırlanan lezzetli ve kaliteli yemekler, günlük olarak sağlık standartlarına uygun şekilde adresinize ulaştırılır. Ateria Catering’in deneyimli ekipleri sayesinde yemekleriniz tam zamanında, ilk günkü tazeliğiyle servis edilir.<br /><br />
                Yerinde Yemek Üretimi<br />
                Tesis içi yemek üretimiyle, kaliteli ve sağlıklı beslenme çözümleri sunuyoruz. Mevcut mutfaklarınızda ya da tarafımızdan kurulan alanlarda üretim yaparak, kurumunuza özel catering hizmeti sağlıyoruz. Ateria Catering’in denetlenebilir süreçleri, kaliteli malzeme kullanımı ve profesyonel mutfak yönetimi ile yerinde üretimin ayrıcalığını yaşatıyoruz.
              </p>
              <div id="dugme" style={{textAlign: 'right'}}>
                <Link
                  to="/hizmetlerimiz"
                  className="btn-accent font-semibold rounded-xl shadow-md w-fit"
                  style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 32px', fontSize: '1rem' }}
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </div>
          </div>
          {/* Sol: Kare Görsel Alanı */}
          <div
            className="flex items-center justify-center px-0"
            style={{ flex: 1, minWidth: 0, background: '#f9f9f9', height: '100%' }}
          >
            <div style={{ width: '100%', aspectRatio: '1/1', height: '100%' }}>
              <img
                src="/ateria-catering-ozel-gun-organizasyon.png"
                alt="Ateria Catering Hizmetler"
                className="w-full h-full object-cover rounded-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Responsive için */}
      <style>{`
        @media (max-width: 1024px) {
          section > div {
            flex-direction: column !important;
            height: auto !important;
            min-height: 0 !important;
          }
          section > div > div {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            padding: 32px 16px !important;
          }
          section > div > div:last-child {
            padding-top: 0 !important;
          }
          section > div > div:last-child img {
            height: 300px !important;
            object-fit: cover !important;
            border-radius: 16px !important;
          }
          section > div > div:last-child > div {
            aspect-ratio: unset !important;
            height: 300px !important;
          }
        }
      `}</style>
    </>
  );
};

export default AboutSection; 