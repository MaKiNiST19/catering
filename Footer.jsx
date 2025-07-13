import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 pt-12 pb-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo ve kısa açıklama */}
        <div className="flex flex-col items-start gap-2">
          <img src="/footer-logo.png" alt="Ateria Catering" className="h-36 mb-2" />
          <span className="text-lg font-bold" style={{ color: '#c2922e' }}>Ateria Catering</span>
          <span className="text-sm text-white">Birinci sınıf yemek ve destek hizmetleri</span>
        </div>
        {/* Menü */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Link to="/" className="text-white hover:text-orange-500 font-medium transition-colors duration-200"
            onClick={e => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >Anasayfa</Link>
          
          <Link to="/hakkimizda" className="text-white hover:text-orange-500 font-medium transition-colors duration-200">Hakkımızda</Link>
          <Link to="/hizmetlerimiz" className="text-white hover:text-orange-500 font-medium transition-colors duration-200">Hizmetler</Link>
          <Link to="/referanslar" className="text-white hover:text-orange-500 font-medium transition-colors duration-200">Referanslarımız</Link>
          <Link to="/iletisim" className="text-white hover:text-orange-500 font-medium transition-colors duration-200">İletişim</Link>
        </div>
        {/* Sosyal medya ve iletişim */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3 mb-2">
            <a href="https://www.instagram.com/ateriacatering" className="text-white hover:text-orange-500 transition-colors duration-200" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram text-2xl"></i></a>
            <a href="https://www.linkedin.com/company/ateria-catering/" className="text-white hover:text-orange-500 transition-colors duration-200" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-2xl"></i></a>
          </div>
          <span className="text-sm text-white">info@ateria.com.tr</span>
          <span className="text-sm text-white">+90 212 123 45 67</span>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-white">
        © {new Date().getFullYear()} Ateria Catering. Tüm hakları saklıdır | <a href="https://fosil.io/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-orange-400">fosil.io</a>
      </div>
    </footer>
  );
};

export default Footer; 