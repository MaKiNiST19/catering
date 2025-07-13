import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import logo from '/logo.png';

const Header = ({ borderOpaque }) => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isBizKimizHovered, setIsBizKimizHovered] = useState(false);
  const bizKimizTimeoutRef = useRef();
  const bizKimizBtnRef = useRef();
  const [submenuPos, setSubmenuPos] = useState({ left: 0, top: 0, width: 0 });
  const headerRef = useRef();
  const [mainHeaderWidth, setMainHeaderWidth] = useState(0);
  // Hizmetlerimiz alt menüsü için state ve ref
  const [isHizmetlerHovered, setIsHizmetlerHovered] = useState(false);
  const hizmetlerTimeoutRef = useRef();
  const hizmetlerBtnRef = useRef();
  const [hizmetlerSubmenuPos, setHizmetlerSubmenuPos] = useState({ left: 0, top: 0, width: 0 });

  // Header'ın top konumu: borderOpaque true ise 0px, değilse 20px
  const headerTop = borderOpaque ? 0 : 20;

  // Header'ın genişliği: borderOpaque true ise calc(100vw + 40px), değilse mevcut genişlik (varsayılan)
  const headerWidth = borderOpaque ? 'calc(100vw + 40px)' : undefined;
  const headerMargin = borderOpaque ? '0' : undefined;
  const headerLeft = borderOpaque ? -20 : undefined;
  const headerRight = borderOpaque ? -20 : undefined;

  // Alt menü pozisyonunu hesapla
  useEffect(() => {
    if (isBizKimizHovered && bizKimizBtnRef.current) {
      const rect = bizKimizBtnRef.current.getBoundingClientRect();
      setSubmenuPos({
        left: rect.left,
        top: rect.bottom,
        width: rect.width
      });
    }
  }, [isBizKimizHovered]);

  // Hizmetlerimiz alt menü pozisyonunu hesapla
  useEffect(() => {
    if (isHizmetlerHovered && hizmetlerBtnRef.current) {
      const rect = hizmetlerBtnRef.current.getBoundingClientRect();
      setHizmetlerSubmenuPos({
        left: rect.left,
        top: rect.bottom,
        width: rect.width
      });
    }
  }, [isHizmetlerHovered]);

  // Header genişliğini ölç
  useEffect(() => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setMainHeaderWidth(rect.width);
    }
    const handleResize = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMainHeaderWidth(rect.width);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [borderOpaque]);

  return (
    <header ref={headerRef} className="fixed left-0 right-0 z-50 p-4"
      style={{ top: headerTop, transition: 'top 0.4s, width 0.4s, margin 0.4s, left 0.4s, right 0.4s', width: headerWidth, margin: headerMargin, left: headerLeft, right: headerRight }}
    >
      <nav className="bg-white rounded-2xl shadow-lg mx-4 px-6 py-0 relative overflow-visible">
        <div className="flex items-center justify-between">
          {/* Sol menü öğeleri */}
          <div className="flex items-center space-x-8" style={{ minHeight: 110 }}>
            <Link to="/" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium flex items-center justify-center min-h-full px-6 py-4 rounded-lg relative group"
              style={{ minHeight: 110 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Anasayfa
            </Link>
            <Link
              to="/hakkimizda"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium relative flex items-center justify-center min-h-full px-6 py-4 rounded-lg group"
              ref={bizKimizBtnRef}
              onMouseEnter={() => {
                if (bizKimizTimeoutRef.current) clearTimeout(bizKimizTimeoutRef.current);
                setIsBizKimizHovered(true);
              }}
              onMouseLeave={() => {
                bizKimizTimeoutRef.current = setTimeout(() => setIsBizKimizHovered(false), 300);
              }}
              style={{ minHeight: 110 }}
            >
              <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300">Biz Kimiz?</span>
              {/* Arka plan hover efekti kaldırıldı */}
            </Link>
            {/* Hizmetlerimiz Menü */}
            <Link
              to="/hizmetlerimiz"
              ref={hizmetlerBtnRef}
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium relative flex items-center justify-center min-h-full px-6 py-4 rounded-lg group"
              onMouseEnter={() => {
                if (hizmetlerTimeoutRef.current) clearTimeout(hizmetlerTimeoutRef.current);
                setIsHizmetlerHovered(true);
              }}
              onMouseLeave={() => {
                hizmetlerTimeoutRef.current = setTimeout(() => setIsHizmetlerHovered(false), 300);
              }}
              style={{ minHeight: 110 }}
            >
              <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300">Hizmetlerimiz</span>
            </Link>
          </div>

          {/* Logo - NavBar'ın tam ortasında ve içinde, flex ile ortalanmış */}
          <div className="relative flex items-center justify-center h-full w-52 cursor-pointer group select-none"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}>
            <Link to="/" className="block w-full h-full absolute inset-0 z-50" tabIndex={-1} aria-label="Anasayfa"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            ></Link>
            <img 
              src={logo} 
              alt="Ateria Catering" 
              className={`h-full max-h-full w-auto object-contain drop-shadow-xl transition-all duration-200 [transition-timing-function:cubic-bezier(0.68,-0.55,0.27,1.55)] ${isLogoHovered ? 'opacity-0 scale-90 -translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}
              style={{zIndex: 60}}
            />
            <Link to="/" tabIndex={-1} aria-label="Anasayfa"
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center ${isLogoHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-200 [transition-timing-function:cubic-bezier(0.68,-0.55,0.27,1.55)]`}
              style={{zIndex: 61, pointerEvents: isLogoHovered ? 'auto' : 'none'}}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-black font-bold text-lg whitespace-nowrap">Lezzet Aşkına...</span>
            </Link>
          </div>

          {/* Sağ menü öğeleri - Sosyal medya ikonlarına yakın */}
          <div className="flex items-center space-x-10">
            <Link to="/referanslar" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium relative flex items-center justify-center h-full min-h-full px-6 py-4 rounded-lg group">
              Referanslarımız
            </Link>
            <Link to="/iletisim" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium relative flex items-center justify-center h-full min-h-full px-6 py-4 rounded-lg group">
              İletişim
            </Link>
            {/* Sosyal medya ikonları - Sağ linklerle eşit aralıklı */}
            <div className="flex items-center space-x-3 ml-12">
              <a 
                href="https://www.instagram.com/ateriacatering" 
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                aria-label="Instagram"
                target="_blank" rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/ateria-catering/" 
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Alt menü portal ile body'ye taşındı */}
      {typeof window !== 'undefined' && ReactDOM.createPortal(
      <div
          className={`transition-all duration-200 ease-out ${isBizKimizHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-[20px] pointer-events-none'}`}
          onMouseEnter={() => {
            if (bizKimizTimeoutRef.current) clearTimeout(bizKimizTimeoutRef.current);
            setIsBizKimizHovered(true);
          }}
          onMouseLeave={() => {
            bizKimizTimeoutRef.current = setTimeout(() => setIsBizKimizHovered(false), 300);
          }}
          style={{
            position: 'fixed',
            left: '50%',
            top: submenuPos.top - 8,
            transform: 'translateX(-50%)',
            width: mainHeaderWidth ? mainHeaderWidth * 0.9 : 900,
            minHeight: 60,
            zIndex: 21,
            display: isBizKimizHovered ? 'block' : 'none',
          }}
      >
          <nav className="bg-white rounded-2xl shadow-lg px-8 py-6 flex items-center justify-center gap-0 border border-gray-200 relative">
            <Link to="/hakkimizda" className="font-medium transition-colors duration-200 relative z-10 bg-white px-3 accent-hover">Hakkımızda</Link>
            <div className="flex-1 h-px bg-gray-300 mx-2" style={{height: 1}} />
            <Link to="/vizyonumuz" className="font-medium transition-colors duration-200 relative z-10 bg-white px-3 accent-hover">Vizyonumuz</Link>
            <div className="flex-1 h-px bg-gray-300 mx-2" style={{height: 1}} />
            <Link to="/kalite-belgelerimiz" className="font-medium transition-colors duration-200 relative z-10 bg-white px-3 accent-hover">Kalite Belgelerimiz</Link>
            <div className="flex-1 h-px bg-gray-300 mx-2" style={{height: 1}} />
            <Link to="/sosyal-sorumluluk" className="font-medium transition-colors duration-200 relative z-10 bg-white px-3 accent-hover">Sosyal Sorumluluk</Link>
            <div className="flex-1 h-px bg-gray-300 mx-2" style={{height: 1}} />
            <Link to="/hijyen-politikamiz" className="font-medium transition-colors duration-200 relative z-10 bg-white px-3 accent-hover">Hijyen Politikamız</Link>
          </nav>
        </div>,
        document.body
      )}
      {/* Hizmetlerimiz ALT MENÜ - PORTAL */}
      {typeof window !== 'undefined' && isHizmetlerHovered && ReactDOM.createPortal(
        <div
          className={`transition-all duration-200 ease-out ${isHizmetlerHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-[20px] pointer-events-none'}`}
          onMouseEnter={() => {
            if (hizmetlerTimeoutRef.current) clearTimeout(hizmetlerTimeoutRef.current);
            setIsHizmetlerHovered(true);
          }}
          onMouseLeave={() => {
            hizmetlerTimeoutRef.current = setTimeout(() => setIsHizmetlerHovered(false), 300);
          }}
          style={{
            position: 'fixed',
            left: '50%',
            top: hizmetlerSubmenuPos.top - 8,
            transform: 'translateX(-50%)',
            width: mainHeaderWidth ? mainHeaderWidth * 0.9 : 900,
            minHeight: 60,
            zIndex: 21,
            display: isHizmetlerHovered ? 'block' : 'none',
          }}
        >
          <nav className="bg-white rounded-2xl shadow-lg px-8 py-6 flex items-center justify-between gap-0 border border-gray-200 relative">
            <Link to="/tasima-yemek" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative z-10 bg-white px-3 accent-hover">Taşıma Yemek Hizmeti</Link>
            <div className="flex-1 h-px bg-gray-300 mx-2" style={{height: 1}} />
            <Link to="/yerinde-yemek" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative z-10 bg-white px-3 accent-hover">Yerinde Yemek Üretimi</Link>
            <div className="flex-1 h-px bg-gray-300 mx-2" style={{height: 1}} />
            <Link to="/davet-organizasyon" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative z-10 bg-white px-3 accent-hover">Davet ve Organizasyon</Link>
        </nav>
      </div>
      , document.body)}
    </header>
  );
};

export default Header;

