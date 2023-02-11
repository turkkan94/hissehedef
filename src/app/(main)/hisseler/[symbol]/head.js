import React from "react";
import { getSingleStock } from "@/components/data/MainStockApi";

export default function Head({ params: { symbol } }) {
  const stock = React.use(getSingleStock(symbol));
  const seoTitle =
    stock?.symbol?.toUpperCase() +
    " Hisse Analiz ve Yorumlar - " +
    stock?.title;
  return (
    <>
      <title>{seoTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={seoTitle} />
      <link
        rel="canonical"
        precedence="default"
        href={`https://www.hissehedef.com/hisseler/${stock?.symbol}`}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hissehedefcom" />
      <meta
        property="og:url"
        content={`https://www.hissehedef.com/hisseler/${stock?.symbol}`}
      />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoTitle} />
      <meta
        property="og:image"
        content={`https://www.hissehedef.com/images/stocks/img/${stock?.symbol}.png`}
      />
      <link rel="icon" href="/images/web/favicon.ico" />
    </>
  );
}
