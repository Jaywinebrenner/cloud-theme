"use client"
import React, { useEffect, useState } from 'react';


const Hero = () => {
  const [isContentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sun = document.querySelector('.sun');
      const scrollPosition = window.pageYOffset;
      sun.style.transform = `translateY(-${scrollPosition * 0.5}px)`; // Adjusted for upward movement
      
      // Check if content wrapper is in view
      const contentWrapper = document.querySelector('.content-wrapper');
      const contentWrapperPosition = contentWrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If content wrapper enters the viewport
      if (contentWrapperPosition.top < windowHeight && contentWrapperPosition.bottom >= 0) {
        setContentVisible(true);
      } else {
        setContentVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hero' style={{ backgroundImage: `url(/hero/hero2.webp)` }}>
      <div className='hero-wrapper'>


        <div className='single-cloud-wrapper'>
          <img  loading="lazy"  src="/hero/single-cloud.webp"/>

        </div>
        <div className={`content-wrapper ${isContentVisible ? 'fade-in' : ''}`}>
          <h1>Cumulus Web Design</h1>
          <h3>Affordable Custom Websites for Small Businesses & Beyond</h3>
        </div>
        <div className='mockup-wrapper'>
          <img  loading="lazy"  src="/hero/mockup2.png"/>

        </div>
        <div className='sun'></div>
      </div>
    </div>
  );
};

export default Hero;
