import React from "react";
import Link from "next/link";

export default function Bist100({ stocksData }) {
  const stocks = stocksData.quoteResponse.result;

  return (
    <div className="col-span-12 mt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
          Bist 100 Hisseleri
        </h2>
      </div>
      <div className="card mt-3">
        <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
          <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Hisse
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Fiyat
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Değişim
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Yüksek
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Düşük
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  24s Hacim
                </th>
              </tr>
            </thead>
            <tbody>
              {(stocks || []).map((item, key) => (
                <tr
                  key={key}
                  className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                >
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <Link
                      href={`/hisseler/${item.symbol
                        .split(".")[0]
                        .toLowerCase()}`}
                    >
                      <div className="flex items-center space-x-4">
                        {/* <div className="avatar h-9 w-9">
                          <img
                            className="mask is-squircle"
                            src="images/200x200.png"
                            alt="avatar"
                          />
                        </div> */}

                        <span className="font-medium text-slate-700 dark:text-navy-100">
                          {item.symbol.split(".")[0]}
                        </span>
                      </div>
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <p className="font-medium">{item.regularMarketPrice}₺</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <p
                      className={
                        item.regularMarketChangePercent > 0
                          ? "text-xs badge bg-green-100 text-success dark:bg-green-100"
                          : "text-xs badge bg-red-50 text-red-500 dark:bg-red-50"
                      }
                    >
                      {item.regularMarketChangePercent > 0 ? "+" : ""}
                      {item.regularMarketChangePercent.toFixed(2)}%
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <p className="font-medium">{item.regularMarketDayHigh}₺</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <p className="font-medium">{item.regularMarketDayLow}₺</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <p className="font-medium">
                      {item.regularMarketVolume.toLocaleString("tr-TR")}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
