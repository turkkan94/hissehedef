"use client";
import { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

import "../styles/scss/themes.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  const headerClass = "topbar-shadow";
  const layoutModeType = "dark";

  return (
    <html
      lang="tr"
      data-layout="horizontal"
      data-sidebar="dark"
      data-sidebar-size="lg"
      data-sidebar-image="none"
      data-preloader="enable"
      data-topbar="dark"
      data-layout-style="default"
      data-layout-mode="dark"
      data-layout-width="fluid"
      data-layout-position="scrollable"
    >
      <head />
      <body id="layout-wrapper">
        <Header headerClass={headerClass} layoutModeType={layoutModeType} />
        {/* <Sidebar /> */}
        <div className="main-content">{children}</div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
