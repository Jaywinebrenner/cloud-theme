import React from 'react';

const Hero = ({ h1, h3, background, button}) => {

  console.log("button", button)
  return (
    <div className='hero' style={{ backgroundImage: `url(${background})` }}>
      <div className='content-wrapper'>
        <h1>{h1}</h1>
        <h3>{h3}</h3>
        {button && <a className='btn' href="">Learn More</a>}
      </div>
    </div>
  );
};

export default Hero;
