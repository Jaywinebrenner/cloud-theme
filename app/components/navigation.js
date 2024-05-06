
import React from 'react'

const Navigation = ({logoColor}) => {
  return (
    <section class="navigation">
    <div class="navigation__top container">
        {logoColor === 'white' ? (
            <a href="/" class="logo-wrapper">
                <img src="/navigation/cumulus-logo-white.png" alt="Logo" />
            </a>
            ) : (
            <a href="/" class="logo-wrapper">
                <img src="/navigation/cumulus-logo.png" alt="Logo" />
            </a>
            )}

    
        <div className='links-wrapper'>
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
</section>
  )
}

export default Navigation