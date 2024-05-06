import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
          <div className='footer-wrapper'>
            <div className='left'>
                <div className='logo-wrapper'>
                  <img src="/navigation/cumulus-logo.png" alt="Logo" />

                </div>

              <div className='info-wrapper'>
              <h3>Cumulus Web Design</h3>
                <a>Privacy Policy</a>
                <a>Contact</a>
              </div>
            </div>
            <div className='right'>
                <p>Jay Winebrenner</p>
                <p>503.347-9890</p>
                <p>jaywinebrenner@gmail.com</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer