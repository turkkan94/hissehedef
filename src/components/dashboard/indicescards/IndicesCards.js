import React from "react";
import Image from "next/image";
import Bist100 from "../../../../public/images/web/bist100.jpg";
import Bist30 from "../../../../public/images/web/bist30.jpg";
import Xbank from "../../../../public/images/web/xbank.png";
import Dolar from "../../../../public/images/web/dolar.jpg";

export default function IndicesCards({ indices }) {
  const indicesData = indices.quoteResponse.result;
  return (
    <div className="col-span-12">
      <div className="mb-2">
        <h1 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
          Hisse Hedef
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {(indicesData || []).map((item, key) => (
          <div key={key} className="card flex-row justify-between p-4">
            <div>
              <p className="text-xs+ uppercase">{item.shortName}</p>
              <div className="mt-8 flex items-baseline space-x-1">
                <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                  {item.regularMarketPrice.toLocaleString("tr-TR")}
                </p>
                <p
                  className={
                    item.regularMarketChangePercent > 0
                      ? "text-xs text-success"
                      : "text-xs text-red-500"
                  }
                >
                  {item.regularMarketChangePercent > 0 ? "+" : ""}
                  {item.regularMarketChangePercent.toFixed(2)}%
                </p>
              </div>
            </div>
            <div className="mask is-squircle flex h-10 w-10 items-center justify-center bg-warning/10">
              {item.shortName === "BIST 100" ? (
                <Image src={Bist100} alt="Bist 100" />
              ) : item.shortName === "BIST 30" ? (
                <Image src={Bist30} alt="Bist 30" />
              ) : item.shortName === "BIST BANKA" ? (
                <Image src={Xbank} alt="Bist Banka" />
              ) : (
                <Image src={Dolar} alt="Dolar Kuru" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
