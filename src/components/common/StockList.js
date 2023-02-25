"use client";
import React from "react";
import StockCard from "./StockCard";
import PaginationComp from "@/components/common/PaginationComp";
import { useSearchParams } from "next/navigation";

import { getStockList, getSectorList } from "@/components/data/MainStockApi";

export default function StockList() {
  const searchParams = useSearchParams();
  let page = searchParams.get("page");
  page = Number(page);
  const { stocks, count, resPerPage } = React.use(getStockList(page));
  const sectors = React.use(getSectorList());

  return (
    <>
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
          Hisseler
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-6 lg:gap-6">
        {(stocks || []).map((item, key) => (
          <StockCard key={key} stock={item} sectors={sectors} />
        ))}
      </div>
      {resPerPage < count && (
        <div className="flex w-full mt-8">
          <div className="mx-auto">
            <PaginationComp page={page} resPerPage={resPerPage} count={count} />
          </div>
        </div>
      )}
    </>
  );
}
