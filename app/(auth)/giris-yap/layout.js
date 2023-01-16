"use client";
import "../../../styles/scss/themes.scss";
// import { AuthProvider } from "../../Context/AuthContext";

export default function RootLayout({ children }) {
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
      <body>{children}</body>
    </html>
  );
}
