import React from "react";
import SectorList from "@/components/common/SectorList";
import { getSectorList } from "@/components/data/MainStockApi";

export const metadata = {
  title: "Sektörler - Borsadaki Şirketlerin Sektörleri",
  description:
    "Türkiye borsasında yer alan tüm hisselerin faaliyet gösterdiği sektörler ve sektörlere göre hisse dağılımları.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://www.hissehedef.com/sektorler",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary",
    title: "Sektörler - Borsadaki Şirketlerin Sektörleri",
    description:
      "Türkiye borsasında yer alan tüm hisselerin faaliyet gösterdiği sektörler ve sektörlere göre hisse dağılımları.",
    url: "https://www.hissehedef.com/sektorler",
    creator: "@hissehedefcom",
    images: ["https://www.hissehedef.com/images/web/bist100.jpg"],
  },
  openGraph: {
    title: "Sektörler - Borsadaki Şirketlerin Sektörleri",
    description:
      "Türkiye borsasında yer alan tüm hisselerin faaliyet gösterdiği sektörler ve sektörlere göre hisse dağılımları.",
    url: "https://www.hissehedef.com/sektorler",
    siteName: "Hisse Hedef",
    images: [
      {
        url: "https://www.hissehedef.com/images/web/bist100.jpg",
        width: 600,
        height: 600,
        alt: "Hisse Hedef",
      },
    ],
    locale: "tr-TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function SectorsPage() {
  const sectors = React.use(getSectorList());

  return (
    <div className="col-span-12 px-[var(--margin-x)] pb-8">
      <SectorList sectors={sectors} />
    </div>
  );
}
