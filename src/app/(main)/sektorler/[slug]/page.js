"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import StockListSector from "@/components/common/StockListSector";
import {
  getStockListBySector,
  getSingleSector,
  getSectorList,
} from "@/components/data/MainStockApi";
import { notFound } from "next/navigation";
import Pagination from "react-js-pagination";

export default function SectorPage({ params: { slug } }) {
  const searchParams = useSearchParams();
  let page = searchParams.get("page");
  page = Number(page);

  const sector = React.use(getSingleSector(slug));

  const { stocks, count, resPerPage } = React.use(
    getStockListBySector(sector.id, page)
  );

  const handlePageClick = (pageNumber) => {
    if (pageNumber == 1) {
      window.location.replace(`/sektorler/${slug}`);
    } else {
      window.location.replace(`/sektorler/${slug}?page=${pageNumber}`);
    }
  };

  if (!sector) return notFound();
  return (
    <div className="col-span-12 px-16 pb-8">
      <StockListSector stocks={stocks} sector={sector} />
      {resPerPage < count && (
        <div className="flex w-full mt-8">
          <div className="mx-auto">
            <Pagination
              activePage={page}
              itemsCountPerPage={resPerPage}
              totalItemsCount={count}
              onChange={handlePageClick}
              nextPageText={<i className="fa-solid fa-angles-right"></i>}
              prevPageText={<i className="fa-solid fa-angles-left"></i>}
              innerClass="pagination space-x-1.5"
              activeLinkClass="bg-[#4f46e5] text-white hover:text-inherit"
              linkClass="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              hideFirstLastPages={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
