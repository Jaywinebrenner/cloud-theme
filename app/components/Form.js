
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false); 


  console.log("isLoading", isLoading)
  const onSubmit = async (data) => {
    setIsLoading(true); 
    try {
      await sendEmail(data);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
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
  );
};

export default Form;
