import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import AuthProvider from "@/components/AuthProvider";

export const revalidate = 0;

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Composr",
  description: "A simple markdown writer app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout session={session}>
            <AuthProvider accessToken={session?.access_token}>
              {children}
            </AuthProvider>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
