import React, { use } from "react";
import { getSingleStock } from "../../../../components/data/MainStockAPI";

export default function Head({ params: { symbol } }) {
  const stockSingle = use(getSingleStock(symbol));

  return (
    <>
      <title>{stockSingle ? stockSingle.seo_title : stockQuote.longName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
