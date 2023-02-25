"use client";
import React from "react";
import StockCard from "./StockCard";
import PaginationComp from "./PaginationComp";

import { useSearchParams } from "next/navigation";
import {
  getStockListBySector,
  getSingleSector,
} from "@/components/data/MainStockApi";

export default function StockListSector({ slug }) {
  const searchParams = useSearchParams();
  let page = searchParams.get("page");
  page = Number(page);
  const sector = React.use(getSingleSector(slug));
  const { stocks, count, resPerPage } = React.use(
    getStockListBySector(sector.id, page)
  );
  return (
    <>
      <div className="col-span-12">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-slate-800 dark:text-navy-50">
            {sector?.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-4 sm:gap-5 lg:mt-6 lg:gap-6">
          {(stocks || []).map((item, key) => (
            <StockCard key={key} stock={item} />
          ))}
        </div>
      </div>
      <div className="flex w-full mt-8">
        <div className="mx-auto">
          <PaginationComp page={page} count={count} resPerPage={resPerPage} />
        </div>
      </div>
    </>
  );
}
