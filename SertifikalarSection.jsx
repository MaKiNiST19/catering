import React from 'react';

const sertifikalar = [
  { img: 'iso-18001.png', alt: 'ISO 18001' },
  { img: 'iso-14001.png', alt: 'ISO 14001' },
  { img: 'iso-10002.png', alt: 'ISO 10002' },
  { img: 'iso-9001.png', alt: 'ISO 9001' },
  { img: '/haacp-iso-22001.png', alt: 'HAACP ISO 22001' },
];

const SertifikalarSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Sertifikalarımız</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {sertifikalar.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <img src={s.img} alt={s.alt} className="w-52 h-52 object-contain mb-2" />
              <span className="text-center" style={{ fontSize: '1.1rem', color: 'rgb(35, 31, 32)', fontWeight: 600, letterSpacing: '0.01em' }}>{s.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SertifikalarSection; 