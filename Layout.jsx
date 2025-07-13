import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  // Scroll ile header'ın yukarı çıkıp genişlemesi için state
  const [borderOpaque, setBorderOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBorderOpaque(window.scrollY > window.innerHeight * 0.15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          border: '20px solid #eae9e7',
          boxSizing: 'border-box',
          pointerEvents: 'none',
          zIndex: 1000,
          opacity: borderOpaque ? 1 : 0,
          transition: 'opacity 0.4s',
        }}
      />
      <Header borderOpaque={borderOpaque} />
      <main>{children}</main>
      <Footer />
      {/* WhatsApp Sabit Butonu */}
      <a
        href="https://web.whatsapp.com/send?phone=905385949200&text=Merhaba%20size%20yard%C4%B1mc%C4%B1%20olmak%20i%C3%A7in%20buraday%C4%B1z!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geçin"
        style={{
          position: 'fixed',
          right: 50,
          bottom: 50,
          zIndex: 9999,
        }}
      >
        <img src="/whatsapp.png" alt="WhatsApp" style={{ width: 50, height: 50, objectFit: 'contain' }} />
      </a>
    </>
  );
};

export default Layout; 