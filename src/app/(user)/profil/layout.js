"use client";
import "../../../styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

import { ToastContainer } from "react-toastify";
import { SSRProvider } from "react-bootstrap";
import { SessionProvider } from "next-auth/react";
import { useBetween } from "use-between";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import MobileSearchBar from "@/components/mobilesearchbar/MobileSearchBar";
import MobileMenu from "@/components/mobilemenu/MobileMenu";
import Script from "next/script";

export default function RootLayout({ children }) {
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);
  const useIsMobileSearch = () => {
    const [isMobileSearch, setIsMobileSearch] = React.useState(false);
    return { isMobileSearch, setIsMobileSearch };
  };

  const useSharedMobileSearch = () => useBetween(useIsMobileSearch);
  return (
    <SSRProvider>
      <html lang="tr">
        <head />
        <body className="is-header-blur">
          <SessionProvider>
            <div
              id="root"
              className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
            >
              <Sidebar />
              <Header
                isMobileMenu={isMobileMenu}
                setIsMobileMenu={setIsMobileMenu}
                useSharedMobileSearch={useSharedMobileSearch}
              />
              <MobileSearchBar useSharedMobileSearch={useSharedMobileSearch} />
              <main className="main-content w-full">
                <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
                  <MobileMenu isMobileMenu={isMobileMenu} />
                  {children}
                </div>
              </main>
            </div>
            <ToastContainer />
          </SessionProvider>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-D02W567Q87"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D02W567Q87');`,
            }}
          />
        </body>
      </html>
    </SSRProvider>
  );
}
