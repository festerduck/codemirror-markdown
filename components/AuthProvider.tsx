"use client";

import { createContext, ReactNode, useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  accessToken?: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  accessToken?: string;
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ accessToken: initialAccessToken, children }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [accessToken, setAccessToken] = useState(initialAccessToken);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setAccessToken(session?.access_token || null);
      if (session?.access_token !== initialAccessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [initialAccessToken, supabase, router]);

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
