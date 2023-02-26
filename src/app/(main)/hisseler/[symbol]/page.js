import React, { use } from "react";

import { getSingleStock } from "@/components/data/MainStockApi";
import { getStockQuoteSummary } from "@/components/data/GetStockData";
import getStockPrices from "@/components/data/GetStockPrices";
import estimatedFinancials from "@/components/data/EstimatedFinancials";

import StockPricesChart from "@/components/charts/StockPricesChart";
import TargetPricesWidget from "@/components/common/TargetPricesWidget";
import BarCharts from "@/components/charts/BarCharts";
import BreadCrumb from "@/components/common/BreadCrumb";
import StockDetail from "@/components/common/StockDetail";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({ params: { symbol } }) {
  const stock = await getSingleStock(symbol);
  if (stock.detail) {
    redirect("/404");
  }
  const seo_siteName = "Hisse Hedef";
  const seo_title =
    stock?.symbol?.toUpperCase() +
    " Hisse Analiz ve Yorumlar - " +
    stock?.title;
  const seo_description = `${stock?.symbol.toUpperCase()} hisse yorum ve analizlerinin yanı sıra ${
    stock?.title
  } hedef fiyat hesaplamalarına ve temel analiz verilerine ulaşabilirisniz.`;
  const seo_image = `https://www.hissehedef.com/images/stocks/img/${stock?.symbol}.png`;
  const seo_url = `https://www.hissehedef.com/hisseler/${stock?.symbol}`;
  return {
    title: seo_title,
    description: seo_description,
    creator: "Ahmet TÜRKKAN",
    publisher: "Ahmet TÜRKKAN",
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    alternates: {
      canonical: seo_url,
    },
    icons: {
      icon: "/favicon.ico",
    },
    twitter: {
      card: "summary",
      title: seo_title,
      description: seo_description,
      url: seo_url,
      creator: "@hissehedefcom",
      images: [seo_image],
    },
    openGraph: {
      title: seo_title,
      description: seo_description,
      url: seo_url,
      image: seo_image,
      siteName: seo_siteName,
      images: [
        {
          url: seo_image,
          width: 600,
          height: 600,
          alt: stock?.symbol,
        },
      ],
      locale: "tr-TR",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}

export default function StockPage({ params: { symbol } }) {
  const stockSingle = use(getSingleStock(symbol));
  if (stockSingle.detail) {
    redirect("/404");
  }
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
            <StockDetail stockSingle={stockSingle} stockPrice={stockPrice} />
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
