import React, { useEffect, useRef, useState } from 'react';

const DummySection = () => {
  const gridRef = useRef(null);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setGridVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => { if (gridRef.current) observer.unobserve(gridRef.current); };
  }, []);

  return (
    <section className="w-full" style={{paddingTop: '150px', paddingBottom: '150px'}}>
      <h2 style={{ fontFamily: 'Pacifico, cursive', textAlign: 'center', color: '#c2922e', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
        Özgün Menüler
      </h2>
      <h3 className="text-5xl font-extrabold" style={{ textAlign: 'center', color: '#231f20', marginBottom: '0' }}>
        İhtiyaçlarınıza Uygun<br/>Toplu Yemek Üretimi
      </h3>
      <p style={{textAlign: 'center', maxWidth: '860px', margin: '2rem auto 0', color: '#231f20', fontSize: '1.15rem', lineHeight: 1.7}}>
        Ateria Catering olarak çalışanlar için protein ve karbonhidrat dengesi gözetilerek, yeterli ve dengeli beslenmeyi destekleyen menüler sunuyoruz. Okul çağındaki çocuklara özel menülerimizle sağlıklı beslenme alışkanlıkları kazandırmayı hedefliyoruz. Hastaneler için normal öğünler, özel diyet yemekleri, sabah kahvaltıları ve kumanyalarla her ihtiyaca uygun çözümler sunuyoruz. Yoğun iş temposuna uygun, kalori hesabı yapılmış pratik ve sağlıklı menülerimizle günün her anında yanınızdayız.
      </p>
      <div
        ref={gridRef}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '0',
          marginTop: '64px',
          flexWrap: 'nowrap',
          width: '100vw',
          maxWidth: 'none',
          position: 'relative',
          left: '50%',
          transform: `translateX(-50%) translateY(${gridVisible ? '0' : '80px'})`,
          opacity: gridVisible ? 1 : 0,
          transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Fabrika ve Şantiye */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transform: 'rotate(-4deg) scale(2)', animation: 'slideInY1 1s cubic-bezier(0.4,0,0.2,1) forwards', opacity: 0, zIndex: 4, marginRight: '-120px' }} className="dummy-img-anim">
          <img src="/fabrika-santiye-yemek-catering.png" alt="Fabrika ve Şantiye Menüleri" style={{ width: '500px', borderRadius: '4px', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }} />
          <span style={{ marginTop: '18px', fontSize: '1.1rem', color: '#231f20', fontWeight: 600, letterSpacing: '0.01em', textAlign: 'center', width: '100%' }}>Fabrika ve Şantiye Menüleri</span>
        </div>
        {/* Okul */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(3deg) scale(2)', animation: 'slideInY2 1.2s cubic-bezier(0.4,0,0.2,1) forwards', opacity: 0, zIndex: 3, marginLeft: '-120px', marginRight: '-120px' }} className="dummy-img-anim">
          <img src="/okul-yemekhane-catering.png" alt="Okul Menüleri" style={{ width: '500px', borderRadius: '4px', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }} />
          <span style={{ marginTop: '18px', fontSize: '1.1rem', color: '#231f20', fontWeight: 600, letterSpacing: '0.01em' }}>Okul Menüleri</span>
        </div>
        {/* Hastane */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(-2.5deg) scale(2)', animation: 'slideInY3 1.4s cubic-bezier(0.4,0,0.2,1) forwards', opacity: 0, zIndex: 2, marginLeft: '-120px', marginRight: '-120px' }} className="dummy-img-anim">
          <img src="/hastane-yemek-catering.png" alt="Hastane Menüleri" style={{ width: '500px', borderRadius: '4px', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }} />
          <span style={{ marginTop: '18px', fontSize: '1.1rem', color: '#231f20', fontWeight: 600, letterSpacing: '0.01em' }}>Hastane Menüleri</span>
        </div>
        {/* Özel */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', transform: 'rotate(4deg) scale(2)', animation: 'slideInY4 1.6s cubic-bezier(0.4,0,0.2,1) forwards', opacity: 0, zIndex: 1, marginLeft: '-120px' }} className="dummy-img-anim">
          <img src="/ozel-yemek-catering.png" alt="Özel Menüler" style={{ width: '500px', borderRadius: '4px', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }} />
          <span style={{ marginTop: '18px', fontSize: '1.1rem', color: '#231f20', fontWeight: 600, letterSpacing: '0.01em', textAlign: 'center', width: '100%' }}>Özel Menüler</span>
        </div>
      </div>
      <style>{`
        @keyframes slideInY1 { 0% { opacity: 0; transform: translateY(80px) rotate(-4deg); } 100% { opacity: 1; transform: translateY(0) rotate(-4deg); } }
        @keyframes slideInY2 { 0% { opacity: 0; transform: translateY(80px) rotate(3deg); } 100% { opacity: 1; transform: translateY(0) rotate(3deg); } }
        @keyframes slideInY3 { 0% { opacity: 0; transform: translateY(80px) rotate(-2.5deg); } 100% { opacity: 1; transform: translateY(0) rotate(-2.5deg); } }
        @keyframes slideInY4 { 0% { opacity: 0; transform: translateY(80px) rotate(4deg); } 100% { opacity: 1; transform: translateY(0) rotate(4deg); } }
      `}</style>
    </section>
  );
};

export default DummySection;

