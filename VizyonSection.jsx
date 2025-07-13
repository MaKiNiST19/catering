import React from 'react';
import { Link } from 'react-router-dom';

const VizyonSection = () => {
  return (
    <section
      className="relative w-full min-h-[600px] h-[100vh] flex items-end justify-start bg-cover bg-center"
      style={{ backgroundImage: 'url(vizyon.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute left-0 bottom-0 m-8 p-8 bg-white rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col items-start z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 text-left">Vizyonumuz</h2>
        <p className="text-gray-700 mb-8 text-left whitespace-pre-line">
ATERİA KURUMSAL HİZMETLER A.Ş., toplu yemek üretiminde 20 yılı aşan tecrübesiyle birinci sınıf yemek ve destek hizmetleri vermektedir.

Tatlandırıcı, lezzetlendirici (bulyon, çeşni, Msg gibi) ve diğer tüm ürünlerde kullanılan katkı maddelerinden uzak durarak, geleneksel yöntemlerle üretilen yemeklerimizi butik hizmet anlayışıyla sunmaktayız. Müşterilerimiz bizim için her zaman önceliklidir ve müşteri memnuniyeti odaklı sistemimiz kusursuz işlemeye devam etmektedir.

ATERİA KURUMSAL HİZMETLER A.Ş., müşterilerine sunduğu tüm yemekleri 1500 m2 kapalı alanı bulunan kendi tesislerinde üretmektedir. Gıda güvenliği ve üretim aşamaları göz önünde bulundurularak inşa edilmiş tesisimizde, et işleme, sebze işleme, unlu mamüller, paketleme, ve lojistik birimleri birbirinden ayrı ve bağımsız bölümlerde üretilip nakledilmektedir.

Planlı üretim aşama ve süreçleri ile, lezzet ve besin değeri kaybı oluşturabilecek olumsuzluklar engellenmektedir. Dondurulmuş ürün kullanımını en aza indirgeyen uzman şeflerimiz, sadece mevsimi olmayan ürünleri, ihtiyaç duyulduğunda dondurulmuş olarak temin etmektedir.
        </p>
        <Link
          to="/vizyonumuz"
          className="btn-accent font-semibold rounded-xl shadow-md w-fit"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', padding: '12px 32px', fontSize: '1rem' }}
        >
          Vizyonumuz
        </Link>
      </div>
    </section>
  );
};

export default VizyonSection; 