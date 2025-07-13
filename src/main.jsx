import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '../Layout';
import App from '../App.jsx';
import '../App.css';
import 'swiper/css';

// Örnek sayfalar (ileride eklenecek)
import Hakkimizda from '../pages/Hakkimizda.jsx';
import Vizyonumuz from '../pages/Vizyonumuz';
import KaliteBelgelerimiz from '../pages/KaliteBelgelerimiz';
import SosyalSorumluluk from '../pages/SosyalSorumluluk';
import HijyenPolitikamiz from '../pages/HijyenPolitikamiz';
import Hizmetlerimiz from '../pages/Hizmetlerimiz';
import TasimaYemek from '../pages/TasimaYemek';
import YerindeYemek from '../pages/YerindeYemek';
import DavetOrganizasyon from '../pages/DavetOrganizasyon';
import Referanslar from '../pages/Referanslar';
import Iletisim from '../pages/Iletisim';

// ScrollToTop bileşeni
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    const scrollToTop = () => {
      const start = window.scrollY;
      const duration = 300;
      const startTime = performance.now();
      function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start * (1 - progress));
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }
      requestAnimationFrame(animateScroll);
    };
    scrollToTop();
  }, [pathname]);
  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/vizyonumuz" element={<Vizyonumuz />} />
          <Route path="/kalite-belgelerimiz" element={<KaliteBelgelerimiz />} />
          <Route path="/sosyal-sorumluluk" element={<SosyalSorumluluk />} />
          <Route path="/hijyen-politikamiz" element={<HijyenPolitikamiz />} />
          <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="/tasima-yemek" element={<TasimaYemek />} />
          <Route path="/yerinde-yemek" element={<YerindeYemek />} />
          <Route path="/davet-organizasyon" element={<DavetOrganizasyon />} />
          <Route path="/referanslar" element={<Referanslar />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);