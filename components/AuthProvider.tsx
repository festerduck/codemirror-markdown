"use client"
// Assuming the context will provide an object with an accessToken (string) and potentially more fields in the future.
// If the context structure is different, adjust the type accordingly.
interface AuthContextType {
  accessToken?: string;
}

import { createContext, ReactNode, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  accessToken?: string;
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ accessToken, children }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return <>{children}</>;
};

export default AuthProvider;

