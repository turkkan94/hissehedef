import StockList from "@/components/common/StockList";

export async function generateMetadata({ searchParams }) {
  let seo_title;
  let seo_url;
  if (!searchParams.page) {
    seo_title = "Tüm Hisseler | Türkiye Borsası | Bist 100 | Bist 30";
    seo_url = "https://www.hissehedef.com/hisseler";
  } else {
    seo_title = `Tüm Hisseler | Türkiye Borsası | Bist 100 | Bist 30 - Sayfa:${searchParams.page}`;
    seo_url = `https://www.hissehedef.com/hisseler?page=${searchParams.page}`;
  }
  return {
    title: seo_title,
    description:
      "Türkiye borsasında yer alan tüm hisseleri bulabilir ve hisseler hakkında temel analiz verilerine ulaşabilirsiniz.",
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    alternates: {
      canonical: seo_url,
    },
    icons: {
      icon: "/favicon.ico",
    },
    twitter: {
      card: "summary",
      title: seo_title,
      description:
        "Türkiye borsasında yer alan tüm hisseleri bulabilir ve hisseler hakkında temel analiz verilerine ulaşabilirsiniz.",
      url: seo_url,
      creator: "@hissehedefcom",
      images: ["https://www.hissehedef.com/images/web/twitter-card.jpg"],
    },
    openGraph: {
      title: seo_title,
      description:
        "Türkiye borsasında yer alan tüm hisseleri bulabilir ve hisseler hakkında temel analiz verilerine ulaşabilirsiniz.",
      url: seo_url,
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
}

export default function StocksPage() {
  return (
    <div className="col-span-12 px-[var(--margin-x)] pb-8">
      <StockList />
    </div>
  );
}
