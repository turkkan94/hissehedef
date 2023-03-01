import IncomeTable from "@/components/common/IncomeTable";
import { getSingleStock } from "@/components/data/MainStockApi";

export async function generateMetadata({ params: { symbol } }) {
  const stock = await getSingleStock(symbol);
  if (stock.detail) {
    redirect("/404");
  }
  const seo_siteName = "Hisse Hedef";
  const seo_title = `${stock?.symbol?.toUpperCase()} Gelir Tablosu - ${
    stock?.title
  } Gelir Tablosu Analizi`;
  const seo_description = `${stock?.symbol.toUpperCase()} hisse gelir tablosunu bulabilirsiniz. ${
    stock?.title
  } şirketine ait detaylı gelir kalemleri yer almaktadır.`;
  const seo_image = `https://www.hissehedef.com/images/stocks/img/${stock?.symbol}.png`;
  const seo_url = `https://www.hissehedef.com/hisseler/${stock?.symbol}/nakit`;
  return {
    title: seo_title,
    description: seo_description,
    creator: "Ahmet TÜRKKAN",
    publisher: "Ahmet TÜRKKAN",
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
      description: seo_description,
      url: seo_url,
      creator: "@hissehedefcom",
      images: [seo_image],
    },
    openGraph: {
      title: seo_title,
      description: seo_description,
      url: seo_url,
      image: seo_image,
      siteName: seo_siteName,
      images: [
        {
          url: seo_image,
          width: 600,
          height: 600,
          alt: stock?.symbol,
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

const getIncome = async (symbol) => {
  const res = await fetch(
    `https://www.hissehedef.com/api/stocks/${symbol}/income`,
    {
      next: { revalidate: 60 },
    }
  );
  const income = await res.json();
  return income;
};

export default async function CashPage({ params: { symbol } }) {
  const { income } = await getIncome(symbol);

  return (
    <div className="col-span-12 pb-8">
      <div className="grid grid-cols-12 px-[var(--margin-x)] gap-4 transition-all duration-[.25s] sm:gap-5 lg:gap-6">
        <div className="col-span-12">
          <IncomeTable income={income} symbol={symbol} />
        </div>
      </div>
    </div>
  );
}
