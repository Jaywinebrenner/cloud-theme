"use client"

// app/components/about/page.js
import React, { useState, useEffect } from 'react';
import Navigation from '../components/navigation';
import SecondaryHero from '../components/SecondaryHero';


const About = () => {
  const [isContentVisible, setContentVisible] = useState(false);



  return (
    <div className='about'>
      <Navigation logoColor="white"/>
        <SecondaryHero title="Cumulus Web Design" subtitle="About Us"/>


        {/* <div className='about-hero' style={{ backgroundImage: `url(/contact/hero-contact.webp)` }}>
          <div className={`content-wrapper ${isContentVisible ? 'fade-in' : ''}`}>
            <h1>Cumulus Web Design</h1>
            <h2>About us</h2>
          </div>
        </div> */}
        <div className='container'>

      </div>
    </div>
  );
};

export default About;
