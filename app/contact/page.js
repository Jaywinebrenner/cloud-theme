"use client"

// app/components/contact/page.js
import React, { useState, useEffect } from 'react';
import Navigation from '../components/navigation';
import SecondaryHero from '../components/SecondaryHero';


const Contact = () => {
  const [isContentVisible, setContentVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/email/route', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  useEffect(() => {
    // Check if content wrapper is in view
    const contentWrapper = document.querySelector('.content-wrapper');
    const contentWrapperPosition = contentWrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (contentWrapperPosition.top < windowHeight && contentWrapperPosition.bottom >= 0) {
      setContentVisible(true);
    } else {
      setContentVisible(false);
    }
  }, []);

  return (
    <div className='contact'>
      <Navigation logoColor="white"/>
       <SecondaryHero title="Cumulus Web Design" subtitle="Let us connect"/>

        <div className='container'>
        <div className='contact-wrapper'>
          <div className='address-wrapper'>
            <p>+1 503 347 9890</p>
            <p>jaywinebrenner@gmail.com</p>
          </div>
          <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
              <div className='input-wrapper'>
                <label htmlFor='name'>Name:</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor='email'>Email:</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor='message'>Message:</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
