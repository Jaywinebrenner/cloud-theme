
import React from 'react';
import Navigation from '../components/navigation';

export default function Layout({ children }) {
  return (
    <div>
        <Navigation logoColor="white"/>
        <div>{children}</div>
    </div>

  );
}