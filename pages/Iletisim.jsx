import React, { useState } from 'react';
import SertifikalarSection from '../SertifikalarSection.jsx';

const iletisimGrid = [
  {
    img: '/adres.png',
    title: 'Adresimiz',
    desc: 'İvedik OSB. 2273. Cadde No: 12 Ostim – ANKARA',
    link: 'https://maps.app.goo.gl/uDvBsgtc6H75QScS9',
    target: '_blank',
  },
  {
    img: '/telefon.png',
    title: 'Telefon Numaramız',
    desc: '+90(312) 397 33 00',
    link: 'tel:+903123973300',
    target: '_self',
  },
  {
    img: '/mail.png',
    title: 'Eposta Adresimiz',
    desc: 'info@ateria.com.tr',
    link: 'mailto:info@ateria.com.tr',
    target: '_self',
  },
  {
    img: '/form.png',
    title: 'İletişim Formu',
    desc: 'Bize ulaşmak için tıklayın',
    link: '#',
    target: '_self',
    isForm: true,
  },
];

export default function Iletisim() {
  const [showForm, setShowForm] = useState(false);

  // ESC ile popup kapama
  React.useEffect(() => {
    if (!showForm) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowForm(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showForm]);

  return (
    <>
      {/* Vizyon Giriş Section */}
      <section
        id="vizyongiris"
        className="relative w-full flex items-center justify-center"
        style={{ height: '40vh', minHeight: 200, background: `url('/hero-front-image.png') center/cover no-repeat`, position: 'relative' }}
      />

      {/* İletişim Section */}
      <section id="iletisimsection" className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          {/* Sol görsel */}
          <div className="flex-1 flex items-center justify-center aspect-square max-w-xl w-full h-full">
            <img src="/ateria-catering-iletisim.png" alt="Ateria Catering İletişim" className="w-full h-full object-cover rounded-xl shadow-lg aspect-square" style={{ aspectRatio: '1/1', width: '100%', height: '100%', minHeight: 0, minWidth: 0 }} />
          </div>
          {/* Sağ grid */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">İletişim Bilgilerimiz</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full">
              {iletisimGrid.map((item, i) => (
                <a
                  key={i}
                  href={item.isForm ? undefined : item.link}
                  target={item.target}
                  rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                  onClick={e => {
                    if (item.isForm) {
                      e.preventDefault();
                      setShowForm(true);
                    }
                  }}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center gap-3 transition hover:shadow-2xl cursor-pointer border border-gray-100 text-center min-h-[150px] select-none"
                  style={{ minWidth: 0 }}
                >
                  <img src={item.img} alt={item.title} className="w-12 h-12 object-contain mb-2" />
                  <div className="font-bold text-lg mb-1">{item.title}</div>
                  <div className="text-gray-700 text-sm break-words">
                    {item.isForm ? item.desc : (
                      item.title === 'Adresimiz' ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline text-blue-700">{item.desc}</a>
                        : item.title === 'Telefon Numaramız' ? <a href={item.link} className="underline text-blue-700">{item.desc}</a>
                        : item.title === 'Eposta Adresimiz' ? <a href={item.link} className="underline text-blue-700">{item.desc}</a>
                        : item.desc
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popup iletişim formu */}
      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(1px)' }}
          onClick={() => setShowForm(false)}
        >
          <div onClick={e => e.stopPropagation()} className="relative bg-white rounded-xl shadow-2xl p-8 w-full" style={{ maxWidth: '45vw', maxHeight: '60vh', width: '35vw', height: '80vh', overflow: 'visible', paddingTop: 48 }}>
            <button
              className="absolute lightbox-close-btn text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-80 transition"
              onClick={() => setShowForm(false)}
              aria-label="Kapat"
              style={{ top: 10, right: 25, zIndex: 1001 }}
            >
              &#10005;
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">İletişim Formu</h3>
            <form className="flex flex-col gap-4 w-full max-w-xl mx-auto">
              <input type="text" required placeholder="İsim*" className="border border-red-400 bg-red-100 p-3 rounded" />
              <input type="email" required placeholder="E-posta" className="border border-red-400 bg-red-100 p-3 rounded" />
              <input type="text" placeholder="Konu" className="border border-red-400 bg-red-100 p-3 rounded" />
              <textarea required placeholder="Mesajınız*" className="border border-red-400 bg-red-100 p-3 rounded min-h-[120px]" />
              <button type="submit" className="mt-4 bg-red-700 text-white px-8 py-3 rounded shadow hover:bg-red-800 transition text-lg font-semibold" style={{ width: 150 }}>Gönder</button>
            </form>
          </div>
        </div>
      )}
      <SertifikalarSection />
    </>
  );
} 