import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SertifikalarSection from '../SertifikalarSection.jsx';

// Belgeler klasöründeki görseller
const belgeImages = [
  'iso9001-sertifikası ateria catering.jpg',
  'iso22000-sertifikası ateria catering.jpg',
];

export default function KaliteBelgelerimiz() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const columns = 4;
  // Grid artık 4 sütun olacak
  const gridColumns = 4;

  // ESC ile lightbox kapama
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            const row = Math.floor(idx / columns);
            const start = row * columns;
            const end = Math.min(start + columns, belgeImages.length);
            for (let i = start; i < end; i++) {
              setTimeout(() => {
                setVisibleItems((prev) => (prev.includes(i) ? prev : [...prev, i]));
              }, (i - start) * 100);
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    galleryRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Giriş Section */}
      <section
        id="kalitebelgegiris"
        className="relative w-full flex items-center justify-center"
        style={{ height: '40vh', minHeight: 200, background: `url('/hero-front-image.png') center/cover no-repeat`, position: 'relative' }}
      />

      {/* Sertifikalar Section */}
      <SertifikalarSection />

      {/* Başlık */}
      <h1 className="text-center text-5xl font-extrabold my-12">Kalite Belgelerimiz</h1>

      {/* 3'lü Grid Galeri */}
      <section className="w-full px-0 py-8">
        <div className="w-full max-w-none grid grid-cols-4 gap-4 bg-transparent">
          {belgeImages.map((img, i) => (
            <div
              key={img}
              ref={el => galleryRefs.current[i] = el}
              data-index={i}
              className={`overflow-hidden rounded-lg shadow-md cursor-pointer gallery-item${visibleItems.includes(i) ? ' visible' : ''}`}
              style={{ aspectRatio: '0.71', background: 'transparent', transition: 'transform 0.4s cubic-bezier(.77,0,.18,1)', willChange: 'transform', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={`/belgeler/${img}`}
                alt="Kalite Belgesi"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Swiper */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(1px)' }}
          onClick={() => setLightboxIndex(null)}
        >
          <div onClick={e => e.stopPropagation()} className="relative max-w-3xl w-full flex items-center justify-center">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.referans-swiper .swiper-button-next',
                prevEl: '.referans-swiper .swiper-button-prev',
              }}
              initialSlide={lightboxIndex}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full h-full referans-swiper"
            >
              {belgeImages.map((img, i) => (
                <SwiperSlide key={img}>
                  <div className="relative flex items-center justify-center w-full h-full">
                    <img
                      src={`/belgeler/${img}`}
                      alt="Kalite Belgesi Büyük"
                      className="max-h-[80vh] max-w-full object-contain mx-auto shadow-2xl"
                      draggable={false}
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* Custom navigation buttons */}
              <div className="swiper-button-prev">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </div>
              <div className="swiper-button-next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
              </div>
            </Swiper>
            <button
              className="absolute top-2 lightbox-close-btn text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
              onClick={() => setLightboxIndex(null)}
              aria-label="Kapat"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}

      {/* Animasyon için CSS */}
      <style>{`
        .gallery-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1);
        }
        .gallery-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
} 