import React from "react";
import Link from "next/link";
export default function StockCard({ stock, sectors }) {
  return (
    <div className="card p-2 pb-3">
      <div className="relative w-full">
        <Link href={`/hisseler/${stock.symbol}`}>
          <img
            className="h-56 w-full rounded-xl object-cover object-center"
            src={`/images/stocks/logo/${stock.symbol}.svg`}
            alt={stock.symbol}
          />
        </Link>
        <div className="absolute inset-0 flex h-full w-full flex-col justify-between p-3">
          <div className="flex justify-end">
            <button className="btn h-7 w-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30">
              <i className="fa-regular fa-heart text-white"></i>
            </button>
          </div>
          <div>
            <div className="badge rounded-full bg-white text-slate-800 dark:bg-navy-600 dark:text-navy-50">
              {/* {sectors.map((item, id) => (
                <Link key={id} href={`/sektorler/${item.slug}`}>
                  {stock.sector.includes(item.id) && item.title}
                </Link>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 mt-3">
        <div className="flex justify-between text-xs">
          <Link
            href={`/hisseler/${stock.symbol}`}
            className="text-slate-400 hover:underline dark:text-navy-300 uppercase"
          >
            {stock.symbol}
          </Link>
          {/* <p>
          <i className="fa-regular fa-heart"></i>
          <span>164</span>
        </p> */}
        </div>
        <a
          href={`/hisseler/${stock.symbol}`}
          className="mt-1.5 text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >
          {stock.title}
        </a>
      </div>
    </div>
  );
}
