"use client"

// app/components/about/page.js
import React, { useState, useEffect } from 'react';
import Navigation from '../components/navigation';
import SecondaryHero from '../components/SecondaryHero';
import Footer from '../components/footer';


const About = () => {
  const [isContentVisible, setContentVisible] = useState(false);



  return (
    <div className='about'>
      <Navigation logoColor="white"/>
        <SecondaryHero title="Cumulus Web Design" subtitle="About Us"/>

        <div className='container'>
          <div className='about-wrapper'>
            <p>Hello, I'm Jay, the founder of Cumulus Web Design, a creative studio nestled in the heart of Portland, Oregon.</p>

            <p>At Cumulus Web Design, we specialize in crafting stunning and high-performing websites that breathe life into your digital presence.</p>

            <p>From the soulful melodies of musicians to the meticulous craftsmanship of construction companies, we love bringing a diverse range of visions to life online. Whether you're an artist, a small business, or a restaurateur, we're passionate about translating your unique identity into an immersive online experience.</p>

            <p>Let's collaborate to elevate your brand and captivate your audience with a website that truly shines.</p>
            <div className='btn-wrapper'>
               <a className="btn" href="/contact">Contact</a>
            </div>
          </div>

      </div>
      <Footer mode="dark"/>
    </div>
  );
};

export default About;
