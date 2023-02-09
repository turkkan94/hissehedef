import React from "react";
import StockList from "@/components/common/StockList";
import { getStockList, getSectorList } from "@/components/data/MainStockApi";

export default function StocksPage() {
  const stocks = React.use(getStockList());
  const sectors = React.use(getSectorList());
  return (
    <div className="col-span-12 px-[var(--margin-x)] pb-8">
      <StockList stocks={stocks} sectors={sectors} />
    </div>
  );
}
