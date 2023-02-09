"use client";
import "../../../styles/app.css";
import React from "react";
import { SessionProvider } from "next-auth/react";

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
      </body>
    </html>
  );
}
