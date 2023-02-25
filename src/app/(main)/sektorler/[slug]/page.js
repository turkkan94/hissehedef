import { getSingleSector } from "@/components/data/MainStockApi";
import StockListSector from "@/components/common/StockListSector";
import { redirect } from "next/navigation";

export async function generateMetadata({ params: { slug } }) {
  const sector = await getSingleSector(slug);
  if (sector.detail) {
    redirect("/404");
  }
  const seo_siteName = "Hisse Hedef";
  const seo_title = `${sector?.seo_title} Sektöründeki Hisseler ve Şirketler`;
  const seo_description = `${sector?.seo_title} sektöründeki şirketlerin listesini bulabilirsiniz. Hisseler hakkında temel analiz bilgileri tamamı ile ücretsiz sunulmaktadır.`;
  const seo_image = `https://www.hissehedef.com/images/web/twitter-card.jpg`;
  const seo_url = `https://www.hissehedef.com/sektorler/${sector?.slug}`;
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
      siteName: seo_siteName,
      images: [
        {
          url: seo_image,
          width: 600,
          height: 600,
          alt: sector?.seo_title,
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

export default function SectorPage({ params: { slug } }) {
  return (
    <div className="col-span-12 px-[var(--margin-x)] pb-8">
      <StockListSector slug={slug} />
    </div>
  );
}
