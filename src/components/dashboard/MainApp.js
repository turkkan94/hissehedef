"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useBetween } from "use-between";
import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "react-bootstrap";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import MobileMenu from "@/components/mobilemenu/MobileMenu";
import RightSideBar from "@/components/rightsidebar/RightSideBar";
import MobileSearchBar from "@/components/mobilesearchbar/MobileSearchBar";

export default function MainApp({ children, session }) {
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);
  const useIsMobileSearch = () => {
    const [isMobileSearch, setIsMobileSearch] = React.useState(false);
    return { isMobileSearch, setIsMobileSearch };
  };
  const useSharedMobileSearch = () => useBetween(useIsMobileSearch);

  const useIsSidebar = () => {
    const [isSidebar, setIsSidebar] = React.useState(false);
    return { isSidebar, setIsSidebar };
  };
  const useSharedSidebar = () => useBetween(useIsSidebar);
  return (
    <SSRProvider>
      <SessionProvider>
        <div
          id="root"
          className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
        >
          <Sidebar session={session} />
          <Header
            isMobileMenu={isMobileMenu}
            setIsMobileMenu={setIsMobileMenu}
            useSharedMobileSearch={useSharedMobileSearch}
            useSharedSidebar={useSharedSidebar}
            session={session}
          />
          <MobileSearchBar useSharedMobileSearch={useSharedMobileSearch} />
          <RightSideBar useSharedSidebar={useSharedSidebar} session={session} />
          <main className="main-content w-full">
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
              <MobileMenu isMobileMenu={isMobileMenu} />
              {children}
            </div>
          </main>
        </div>
        <ToastContainer />
      </SessionProvider>
    </SSRProvider>
  );
}
