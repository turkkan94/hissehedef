import React from "react";
import StockListSector from "@/components/common/StockListSector";
import {
  getStockList,
  getSectorList,
  getSingleSector,
} from "@/components/data/MainStockApi";
import { notFound } from "next/navigation";

export default function SectorPage({ params: { slug } }) {
  const stocks = React.use(getStockList());
  const sectors = React.use(getSectorList());
  const sector = React.use(getSingleSector(slug));
  if (!sector) return notFound();
  return (
    <div className="col-span-12 px-[var(--margin-x)] pb-8">
      <StockListSector
        stocks={stocks}
        sectors={sectors}
        sector={sector}
        slug={slug}
      />
    </div>
  );
}
