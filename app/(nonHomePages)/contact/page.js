"use client"
import React, { useState } from 'react';
import Navigation from '../../components/navigation';
import SecondaryHero from '../../components/SecondaryHero';
import Footer from '../../components/footer';
import Form from '../../components/Form';

export default function Contact() {
  const [isContentVisible, setContentVisible] = useState(false);

  return (
    <main className='contact'>
      {/* <Navigation logoColor="white" /> */}
      <SecondaryHero title="Cumulus Web Design" subtitle="Let us connect" isContentVisible={isContentVisible} />
      <div className='container'>
        <div className='contact-wrapper'>
          <div className='address-wrapper'>
            <a href="tel:+15033479890">+1 503 347 9890</a>
            <p>cumuluswebdesign@gmail.com</p>
          </div>
          <div className='form-wrapper'>
            <Form />
          </div>
        </div>
      </div>
      <Footer mode="dark" />
    </main>
  );
}

