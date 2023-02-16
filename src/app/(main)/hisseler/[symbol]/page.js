import React, { use } from "react";
import Image from "next/image";

import { getSingleStock } from "@/components/data/MainStockApi";
import { getStockQuoteSummary } from "@/components/data/GetStockData";
import getStockPrices from "@/components/data/GetStockPrices";
import estimatedFinancials from "@/components/data/EstimatedFinancials";

import StockPricesChart from "@/components/charts/StockPricesChart";
import TargetPricesWidget from "@/components/common/TargetPricesWidget";
import BarCharts from "@/components/charts/BarCharts";
import BreadCrumb from "@/components/common/BreadCrumb";
import { notFound } from "next/navigation";

export default function StockPage({ params: { symbol } }) {
  const stockSingle = use(getSingleStock(symbol));
  if (!stockSingle.id) return notFound();
  const {
    stockPrice,
    stockSummary,
    stockBalanceQuarterly,
    stockIncomeQuarterly,
    period,
    totalStockHolderPercent,
  } = use(getStockQuoteSummary(symbol));
  const stockPriceSeries = use(getStockPrices(symbol, "30d"));

  const EPS = estimatedFinancials(
    period,
    stockIncomeQuarterly,
    stockBalanceQuarterly
  );

  const stockIncomeQuarterlyChart = {
    title: "Net Kâr",
    data: stockIncomeQuarterly,
    key: "netIncome",
  };

  const stockRevenueChartQuarterly = {
    title: "Satışlar",
    data: stockIncomeQuarterly,
    key: "totalRevenue",
  };

  const stockEquityChartQuarterly = {
    title: "Özkaynaklar",
    data: stockBalanceQuarterly,
    key: "totalStockholderEquity",
  };

  return (
    <div className="col-span-12">
      <BreadCrumb stock={stockSingle} />
      <div className="grid grid-cols-12 px-[var(--margin-x)] gap-4 transition-all duration-[.25s] sm:gap-5 lg:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-col sm:flex-row sm:space-x-7">
            <div className="flex flex-row justify-start items-center sm:hidden">
              <div className="mr-4">
                <Image
                  src={`/images/stocks/logo/${stockSingle.symbol}.svg`}
                  className="rounded-full"
                  width={56}
                  height={56}
                  alt={stockSingle.symbol}
                />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                    {stockPrice.regularMarketPrice.toLocaleString("tr-TR")}₺
                  </p>
                  <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-slate-400 dark:text-navy-300">
                  Gecikmeli veri!
                </p>
              </div>
            </div>
            <div className="hidden sm:flex shrink-0 flex-col items-center sm:items-start">
              <img
                src={`/images/stocks/logo/${stockSingle.symbol}.svg`}
                className="rounded-full"
              />
              <div className="mt-4">
                <div className="flex items-center space-x-1">
                  <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                    {stockPrice.regularMarketPrice.toLocaleString("tr-TR")}₺
                  </p>
                  <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-slate-400 dark:text-navy-300">
                  Gecikmeli veri!
                </p>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <div className="ax-transparent-gridline w-28">
                  <img src="/images/web/line-chart.png" />
                </div>
                <div className="flex items-center space-x-0.5">
                  {stockPrice.regularMarketChangePercent > 0 ? (
                    <i className="fa-solid fa-arrow-up h-4 w-4 text-success"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-down h-4 w-4 text-red-500"></i>
                  )}
                  <p className="text-sm+ text-slate-800 dark:text-navy-100">
                    {(stockPrice.regularMarketChangePercent * 100).toFixed(2)} %
                  </p>
                </div>
              </div>
              <button className="btn mt-4 w-full space-x-2 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                <i className="fa-regular fa-heart text-slate-400 dark:text-navy-300"></i>
                <span> Favorilere Ekle</span>
              </button>
            </div>
            <div className="ax-transparent-gridline grid w-full grid-cols-1">
              <StockPricesChart stockPriceSeries={stockPriceSeries} />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-2">
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between space-x-1">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  {Number((stockPrice.marketCap / 1000000000).toFixed(3)) + "B"}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary dark:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Piyasa Değeri</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  {stockBalanceQuarterly[0].totalStockholderEquity.fmt}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Defter Değeri</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  {stockBalanceQuarterly[0].commonStock.fmt}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Ödenmiş Sermaye</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  {stockSummary.trailingPE &&
                    stockSummary.trailingPE.toFixed(2)}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-info"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">F/K Oranı</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between space-x-1">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  {(
                    (stockIncomeQuarterly[0].netIncome.raw +
                      stockIncomeQuarterly[1].netIncome.raw +
                      stockIncomeQuarterly[2].netIncome.raw +
                      stockIncomeQuarterly[3].netIncome.raw) /
                    stockBalanceQuarterly[0].commonStock.raw
                  ).toFixed(2)}
                  ₺
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-warning"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Hisse Başı Kâr</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  {(
                    stockPrice.marketCap /
                    stockBalanceQuarterly[0].totalStockholderEquity.raw
                  ).toFixed(2)}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">PD/DD Oranı</p>
            </div>
          </div>
        </div>
        <TargetPricesWidget
          stockPrice={stockPrice}
          EPS={EPS}
          totalStockHolderPercent={totalStockHolderPercent}
        />
      </div>
      <div className="mt-4 py-5 bg-slate-150 dark:bg-navy-800 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
        <div className="grid grid-cols-1 gap-4 pb-3 sm:grid-cols-3 px-[var(--margin-x)]">
          <BarCharts dataSet={stockIncomeQuarterlyChart} />
          <BarCharts dataSet={stockRevenueChartQuarterly} />
          <BarCharts dataSet={stockEquityChartQuarterly} />
        </div>
      </div>
    </div>
  );
}
