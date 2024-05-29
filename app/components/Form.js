
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false); 
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await sendEmail(data);
      setPopupMessage('Email sent successfully! We will be in touch.');
      setShowPopup(true);
    } catch (error) {
      setPopupMessage('Error sending email: ' + error.message);
      setShowPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>Full Name</label>
        <input
          type='text'
          placeholder='Full Name'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          placeholder='example@domain.com'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='message'>Message</label>
        <textarea
          rows={4}
          placeholder='Type your message'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='btn' disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
    {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>{popupMessage}</p>
            <div className='pop-up-button-wrapper'>
              <button onClick={closePopup} className="button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
