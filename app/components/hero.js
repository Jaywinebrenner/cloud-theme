"use client"
import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sun = document.querySelector('.sun');
      const scrollPosition = window.pageYOffset;
      sun.style.transform = `translateY(-${scrollPosition * 0.5}px)`; // Adjusted for upward movement
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hero' style={{ backgroundImage: `url(/hero/hero.webp)` }}>
      <div className='content-wrapper'>
        <h1>Cumulus Web Design</h1>
        <h3>Affordable Custom Websites for Small Businesses & Beyond</h3>
      </div>
      <div className='sun'></div>
    </div>
  );
};

export default Hero;
