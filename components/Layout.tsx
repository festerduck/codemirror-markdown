// components/Layout.js
import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Main from './main';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

