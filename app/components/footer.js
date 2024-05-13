import React from 'react'

const Footer = ({mode}) => {
  return (
<div className={`footer ${mode === "dark" ? "dark-mode" : ""}`}>
        <div className='container'>
          <div className='footer-wrapper'>
            <div className='left'>
                <div>
                  <a>Privacy Policy</a>
                  <a href="/contact">Contact</a>
                </div>
            </div>
            <div className='middle'>
              {mode === "dark" ? <img src="/navigation/cumulus-logo-white.png" alt="Logo" /> :<img src="/navigation/cumulus-logo.png" alt="Logo" /> }
        
            </div>
            <div className='right'>
                <p>Cumulus Web Design</p>
                <p>503.347-9890</p>
                <p>jaywinebrenner@gmail.com</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer