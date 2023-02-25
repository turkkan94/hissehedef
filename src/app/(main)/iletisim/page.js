import ContactForm from "@/components/common/ContactForm";

export const metadata = {
  title: "İletişim | Hisse Hedef",
  description:
    "Öneri, şikayet, telif haklarını ihlal eden durumları bizlere mesaj yoluyla iletebilirsiniz.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://www.hissehedef.com/iletisim",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary",
    title: "İletişim | Hisse Hedef",
    description:
      "Öneri, şikayet, telif haklarını ihlal eden durumları bizlere mesaj yoluyla iletebilirsiniz.",
    url: "https://www.hissehedef.com/iletisim",
    creator: "@hissehedefcom",
    images: ["https://www.hissehedef.com/images/web/twitter-card.jpg"],
  },
  openGraph: {
    title: "İletişim | Hisse Hedef",
    description:
      "Öneri, şikayet, telif haklarını ihlal eden durumları bizlere mesaj yoluyla iletebilirsiniz.",
    url: "https://www.hissehedef.com/hisseler",
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

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center px-[var(--margin-x)]">
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          İletişim
        </h2>
      </div>
      <div className="col-span-12 sm:col-span-8 max-w-xl">
        <ContactForm />
      </div>
    </div>
  );
}
