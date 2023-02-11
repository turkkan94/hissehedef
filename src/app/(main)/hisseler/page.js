"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import StockList from "@/components/common/StockList";
import { getStockList, getSectorList } from "@/components/data/MainStockApi";
import Pagination from "react-js-pagination";

export default function StocksPage() {
  const searchParams = useSearchParams();
  let page = searchParams.get("page");
  page = Number(page);
  const { stocks, count, resPerPage } = React.use(getStockList(page));

  const sectors = React.use(getSectorList());

  const handlePageClick = (pageNumber) => {
    if (pageNumber == 1) {
      window.location.replace(`/hisseler/`);
    } else {
      window.location.replace(`/hisseler?page=${pageNumber}`);
    }
  };

  return (
    <div className="col-span-12 px-[var(--margin-x)] pb-8">
      <StockList stocks={stocks} sectors={sectors} />
      {resPerPage < count && (
        <div className="flex w-full mt-8">
          <div className="mx-auto">
            <Pagination
              activePage={page}
              itemsCountPerPage={resPerPage}
              totalItemsCount={count}
              onChange={handlePageClick}
              nextPageText={"Sonraki"}
              prevPageText={"Önceki"}
              innerClass="pagination space-x-1.5"
              activeLinkClass="bg-primary"
              linkClass="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            />
          </div>
        </div>
      )}
    </div>
  );
}
