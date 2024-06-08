// components/Layout.js
import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Main from './main';
import { BgLightGradient6 } from './ui/background-grid';
import { Session } from '@supabase/auth-helpers-nextjs';

const Layout = ({ children, session }: { children: ReactNode, session: Session }) => {
  return (
    <main className='w-full h-full relative'>

      <BgLightGradient6 />
      <Navbar session={session} />
      <Main>{children}</Main>
    </main>
  );
};

export default Layout;

