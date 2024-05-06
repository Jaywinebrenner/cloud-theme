import React from 'react'

const Navigation = () => {
  return (
    <section class="navigation">
    <div class="navigation__top container">
        <div class="logo-wrapper">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                <img src="/navigation/cumulus-logo.png" alt="Logo" />
            </a>
        </div>
        <div className='links-wrapper'>
            <a src="/about">About</a>
            <a src="/team">Team</a>
            <a src="/contact">Contact</a>
        </div>
    </div>
</section>
  )
}

export default Navigation