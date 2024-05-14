"use client"


import React, { useState } from 'react'

const Footer = ({mode}) => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
      <div className={`footer ${mode === "dark" ? "dark-mode" : ""}`}>
        <div className='container'>
          <div className='footer-wrapper'>
            <div className='left'>
                <div>
                  {/* <a>Privacy Policy</a> */}
                  <a href="/contact">Contact</a>
               
                </div>
            </div>
            <div className='middle'>
              {mode === "dark" ? <img  loading="lazy"  src="/navigation/logo-correct-white-final.png" alt="Logo" /> :<img  loading="lazy"  src="/navigation/cumulus-logo.png" alt="Logo" /> }
        
            </div>
            <div className='right'>
                <p>Cumulus Web Design</p>
                <p>503.347-9890</p>
                <p>jaywinebrenner@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={`copyright-wrapper ${mode === "dark" ? "dark-mode" : ""}`}>
          <p className='minor'>© Cumulus Web Design {year}</p>
        </div>
    </div>
  )
}

export default Footer