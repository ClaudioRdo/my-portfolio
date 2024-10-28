import React, { PropsWithChildren } from 'react';
import Header from '../Header/Header.tsx';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id="app">
      <Header />
      <main>
        {React.Children.map(children, (child) => (
          <div className="page">
            {child}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Layout