import "../../styles/app.css";
import Script from "next/script";
import MainApp from "@/components/dashboard/MainApp";

import { getServerSession } from "next-auth";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="tr">
      <head />
      <body className="is-header-blur">
        <MainApp children={children} session={session} />
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
  );
}
