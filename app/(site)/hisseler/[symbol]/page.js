import React, { use } from "react";
import Head from "./head";
import Image from "next/image";
import { notFound } from "next/navigation";

import BarCharts from "../../../../components/charts/BarCharts";
import TradingView from "../../../../components/charts/TradingView";
import BreadCrumb from "../../../../components/common/BreadCrumb";
import TargetPrices from "../../../../components/common/TargetPrices";
import getStockData from "../../../../components/data/GetStockFunction";
import estimatedFinancials from "../../../../components/data/EstimatedFinancials";
import NoticeInformation from "../../../../components/common/NoticeInformation";
import { getSingleStock } from "../../../../components/data/MainStockAPI";

function StockPage({ params: { symbol } }) {
  const stockSingle = use(getSingleStock(symbol));
  if (!stockSingle) return notFound();

  const {
    stockPrice,
    stockSummary,
    stockQuote,
    stockBalanceQuarterly,
    stockIncomeQuarterly,
    period,
  } = use(getStockData(symbol));

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

  const EPS = estimatedFinancials(
    period,
    stockIncomeQuarterly,
    stockBalanceQuarterly
  );

  const PE = stockQuote.regularMarketPrice / EPS;

  return (
    <>
      <Head title={stockSingle ? stockSingle.seo_title : stockQuote.longName} />
      <div className="page-content">
        <div className="container-fluid">
          <BreadCrumb title={symbol} pageTitle="Hisseler" />
          <div className="row">
            <div className="col-xxl-3">
              <div className="card p-1 card-animate">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-light text-primary rounded-circle fs-3">
                        <i className="align-middle undefined"></i>
                        <div className="flex-shrink-0 avatar-md">
                          <span className="avatar-title bg-light p-1 rounded-circle">
                            <Image
                              src={`/assets/stocks/logo/${symbol.toLowerCase()}.svg`}
                              className="img-fluid rounded-circle"
                              width={100}
                              height={100}
                              alt={symbol}
                            />
                          </span>
                        </div>
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <p className="text-uppercase fw-bold fs-13 text-muted mb-1">
                        {symbol}
                      </p>
                      <h4 className=" mb-0">
                        <span className="counter-value">
                          {stockQuote.regularMarketPrice.toLocaleString(
                            "tr-TR"
                          )}
                          ₺
                        </span>
                      </h4>
                    </div>
                    <div className="flex-shrink-0 align-self-end">
                      <span
                        className={
                          stockQuote.regularMarketChangePercent > 0
                            ? "badge badge-soft-success"
                            : "badge badge-soft-danger"
                        }
                      >
                        <i
                          className={
                            stockQuote.regularMarketChangePercent > 0
                              ? "ri-arrow-up-s-fill align-middle me-1"
                              : "ri-arrow-down-s-fill align-middle me-1"
                          }
                        ></i>
                        {stockQuote.regularMarketChangePercent.toFixed(2)} %
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-animate">
                <div className="card-header d-flex align-items-center">
                  <h6 className="card-title mb-0 flex-grow-1">📝 Çarpanlar</h6>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 mb-0">F/K</p>
                          </div>
                          <div>
                            <p className="mb-0">
                              {stockSummary.trailingPE &&
                                stockSummary.trailingPE.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 font-weight-bold mb-0">HBK</p>
                          </div>
                          <div>
                            <p className="mb-0">
                              {(
                                (stockIncomeQuarterly[0].netIncome.raw +
                                  stockIncomeQuarterly[1].netIncome.raw +
                                  stockIncomeQuarterly[2].netIncome.raw +
                                  stockIncomeQuarterly[3].netIncome.raw) /
                                stockBalanceQuarterly[0].commonStock.raw
                              ).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 mb-0">PD/DD</p>
                          </div>
                          <div>
                            <p className="mb-0">
                              {(
                                stockPrice.marketCap /
                                stockBalanceQuarterly[0].totalStockholderEquity
                                  .raw
                              ).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card card-animate">
                <div className="card-header d-flex align-items-center">
                  <h6 className="card-title mb-0 flex-grow-1">
                    📉 Finansallar
                  </h6>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 mb-0">Piyasa Değeri</p>
                          </div>
                          <div>
                            <p className="mb-0">
                              {Number(
                                (stockPrice.marketCap / 1000000000).toFixed(3)
                              ) + "B"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 mb-0">Defter Değeri</p>
                          </div>
                          <div>
                            <p className="mb-0">
                              {
                                stockBalanceQuarterly[0].totalStockholderEquity
                                  .fmt
                              }
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 mb-0">Ödenmiş Sermaye</p>
                          </div>
                          <div>
                            <p className="mb-0">
                              {stockBalanceQuarterly[0].commonStock.fmt}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card card-animate">
                <div className="card-header d-flex align-items-center">
                  <h6 className="card-title mb-0 flex-grow-1">
                    📝 Tahmini Çarpanlar
                  </h6>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 mb-0">F/K</p>
                          </div>
                          <div>
                            <p className="mb-0">
                              {(stockQuote.regularMarketPrice / EPS).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 font-weight-bold mb-0">HBK</p>
                          </div>
                          <div>
                            <p className="mb-0">{EPS.toFixed(2)}</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="fs-14 mb-0">PD/DD</p>
                          </div>
                          <div>
                            <p className="mb-0">
                              {(
                                stockPrice.marketCap /
                                stockBalanceQuarterly[0].totalStockholderEquity
                                  .raw
                              ).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9">
              <div className="row">
                <div className="col-xxl-8">
                  <NoticeInformation />
                  <TradingView symbol={symbol} />
                </div>
                <div className="col-xxl-4">
                  <TargetPrices EPS={EPS} PE={PE} stockQuote={stockQuote} />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card card-animate">
                    <h4 className="card-title pt-3 text-center">
                      📦 Çeyreklik Satışlar
                    </h4>
                    <div className="card-body">
                      <BarCharts dataSet={stockRevenueChartQuarterly} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="card card-animate">
                    <h4 className="card-title pt-3 text-center">
                      💵 Çeyreklik Net Kâr
                    </h4>
                    <div className="card-body">
                      <BarCharts dataSet={stockIncomeQuarterlyChart} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="card card-animate">
                    <h4 className="card-title pt-3 text-center">
                      💰 Çeyreklik Özkaynaklar
                    </h4>
                    <div className="card-body">
                      <BarCharts dataSet={stockEquityChartQuarterly} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockPage;
