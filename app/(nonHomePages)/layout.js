import React from 'react';
import Navigation from '../components/navigation';

const MemoizedNavigation = React.memo(Navigation);

console.log("NAV---------------------------------------------", MemoizedNavigation)

export default function Layout({ children }) {
  return (
    <div>
      <MemoizedNavigation logoColor="white" />
      <div>{children}</div>
    </div>
  );
}
