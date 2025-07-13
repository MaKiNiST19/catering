import React, { useEffect, useState } from 'react';

const ScrollController = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isHeroComplete, setIsHeroComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroCompleteThreshold = 1000; // Tüm animasyonlar tamamlandığında
      
      if (currentScrollY >= heroCompleteThreshold) {
        setIsHeroComplete(true);
        setScrollY(currentScrollY);
      } else {
        setIsHeroComplete(false);
        setScrollY(currentScrollY);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {children}
      {/* Hero section tamamlandıktan sonra normal scroll */}
      <div 
        className="transition-all duration-500"
        style={{
          transform: isHeroComplete ? 'translateY(0)' : 'translateY(100vh)',
          opacity: isHeroComplete ? 1 : 0
        }}
      >
        {/* Alt section'lar buraya gelecek */}
      </div>
    </div>
  );
};

export default ScrollController;

