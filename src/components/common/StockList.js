"use client";
import React from "react";
import StockCard from "./StockCard";
export default function StockList({ stocks, sectors }) {
  const [filteredStocks, setFilteredStocks] = React.useState(stocks);
  const [sectorId, setSectorId] = React.useState(0);

  React.useEffect(() => {
    if (sectorId == 0) {
      setFilteredStocks(stocks);
    } else {
      setFilteredStocks(
        stocks.filter((item) => item.sector.includes(sectorId * 1))
      );
    }
  }, [sectorId]);
  return (
    <>
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
          Hisseler
        </h1>
      </div>
      <div className="is-scrollbar-hidden overflow-x-auto">
        <div className="flex w-max space-x-3">
          <a
            href="#"
            className={
              sectorId == 0
                ? "tag h-7 rounded-full bg-primary text-xs+ text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                : "tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            }
            onClick={() => setSectorId(0)}
          >
            Tümü
          </a>
          {sectors.map((sector, id) => (
            <a
              key={id}
              href="#"
              className={
                sector?.id == sectorId
                  ? "tag h-7 rounded-full bg-primary text-xs+ text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  : "tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              }
              onClick={() => setSectorId(sector?.id)}
            >
              {sector.title}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-6 lg:gap-6">
        {(filteredStocks || []).map((item, key) => (
          <StockCard key={key} stock={item} sectors={sectors} />
        ))}
      </div>
    </>
  );
}
