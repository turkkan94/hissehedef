import StockList from "@/components/common/StockList";

export const metadata = {
  title: "Tüm Hisseler | Türkiye Borsası | Bist 100 | Bist 30",
  description:
    "Türkiye borsasında yer alan tüm hisseleri bulabilir ve hisseler hakkında temel analiz verilerine ulaşabilirsiniz.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://www.hissehedef.com/hisseler",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary",
    title: "Tüm Hisseler | Türkiye Borsası | Bist 100 | Bist 30",
    description:
      "Türkiye borsasında yer alan tüm hisseleri bulabilir ve hisseler hakkında temel analiz verilerine ulaşabilirsiniz.",
    url: "https://www.hissehedef.com",
    creator: "@hissehedefcom",
    images: ["https://www.hissehedef.com/images/web/twitter-card.jpg"],
  },
  openGraph: {
    title: "Tüm Hisseler | Türkiye Borsası | Bist 100 | Bist 30",
    description:
      "Türkiye borsasında yer alan tüm hisseleri bulabilir ve hisseler hakkında temel analiz verilerine ulaşabilirsiniz.",
    url: "https://www.hissehedef.com/hisseler",
    image: "https://www.hissehedef.com/images/web/twitter-card.jpg",
    siteName: "Hisse Hedef",
    images: [
      {
        url: "https://www.hissehedef.com/images/web/twitter-card.jpg",
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

export default function StocksPage() {
  return (
    <div className="col-span-12 px-[var(--margin-x)] pb-8">
      <StockList />
    </div>
  );
}
