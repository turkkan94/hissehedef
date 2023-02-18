"use client";
import "../../../styles/app.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head />
      <body className="is-header-blur is-sidebar-open">
        <SessionProvider>
          <div
            id="root"
            className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
          >
            {children}
          </div>
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
          gtag('config', 'G-D02W567Q87', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </body>
    </html>
  );
}
