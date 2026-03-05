'use client';
import { useState, useEffect } from 'react';

// Custom hook to detect mobile or desktop view
const useMobile = (mobileWidth = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileWidth); // Mobile if width <= 768px
    };

    // Check the initial screen size
    handleResize();

    // Add event listener to detect window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileWidth]);

  return isMobile;
};

export default useMobile;
