

import React, { useState } from 'react';

const SecondaryHero = ({title, subtitle}) => {

    const [isContentVisible, setContentVisible] = useState(false);
  return (

        <div className='secondary-hero' style={{ backgroundImage: `url(/contact/hero-contact.webp)` }}>
          <div className={`content-wrapper ${isContentVisible ? 'fade-in' : ''}`}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>

  )
}

export default SecondaryHero