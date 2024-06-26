"use client"
import React from 'react';
import { usePathname, useRouter } from 'next/navigation'

const Navigation = ({ logoColor }) => {
    
    const pathname = usePathname()

  return (
    <header className="navigation">
      <div className="navigation__top container">
        {logoColor === 'white' ? (
          <a href="/" className="logo-wrapper-white">
            <img  loading="lazy"  src="/navigation/logo-correct-white-final.png" alt="Logo" />
          </a>
        ) : (
          <a href="/" className="logo-wrapper-blue">
            <img  loading="lazy"  src="/navigation/cumulus-logo.png" alt="Logo" />
          </a>
        )}

        <div className="links-wrapper">
          <a href="/about" className={pathname === '/about' ? 'active' : ''}>About</a>
          <a href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
