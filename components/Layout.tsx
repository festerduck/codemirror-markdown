// components/Layout.js
import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Main from './main';
import { BgLightGradient6 } from './ui/background-grid';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='w-full h-full relative'>

      <BgLightGradient6 />
      <Navbar />
      <Main>{children}</Main>
    </main>
  );
};

export default Layout;

