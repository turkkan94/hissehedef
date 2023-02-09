import React from "react";
import { getSingleStock } from "@/components/data/MainStockApi";

export default function Head({ params: { symbol } }) {
  const stock = React.use(getSingleStock(symbol));

  return (
    <>
      <title>{stock?.seo_title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={stock?.short_description} />
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
      <meta property="og:title" content={stock?.seo_title} />
      <meta property="og:description" content={stock?.short_description} />
      <meta
        property="og:image"
        content={`https://www.hissehedef.com/images/stocks/img/${stock?.symbol}.png`}
      />
      <link rel="icon" href="/images/web/favicon.ico" />
    </>
  );
}
