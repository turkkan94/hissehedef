"use client";
import Image from "next/image";
import React from "react";

export default function MobileSearchBar({ useSharedMobileSearch }) {
  const { isMobileSearch, setIsMobileSearch } = useSharedMobileSearch();
  const [value, setValue] = React.useState("");
  const onChangeData = (value) => {
    setValue(value);
  };
  const [filteredStocks, setFilteredStocks] = React.useState(null);
  React.useEffect(() => {
    if (value !== "") {
      fetch(`${process.env.MAIN_API}/stocks/?symbol=${value}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredStocks(data.stocks);
          setLoading(false);
        });
    }
  }, [value]);
  return (
    <div
      className={
        isMobileSearch
          ? "mobile-searchbar fixed inset-0 z-[100] flex-col bg-white dark:bg-navy-700"
          : "mobile-searchbar fixed inset-0 z-[100] hidden flex-col bg-white dark:bg-navy-700"
      }
    >
      <div className="flex items-center space-x-2 bg-slate-100 px-3 pt-2 dark:bg-navy-800">
        <button
          onClick={() => setIsMobileSearch(false)}
          className="mobile-searchbar-hide btn -ml-1.5 h-7 w-7 shrink-0 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <input
          className="mobile-searchbar-input form-input h-8 w-full bg-transparent placeholder-slate-400 dark:placeholder-navy-300"
          type="text"
          placeholder="Hisse ara..."
          value={value}
          onChange={(e) => {
            onChangeData(e.target.value);
          }}
        />
      </div>

      <div className="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2">
        <div className="flex items-center justify-between bg-slate-100 py-1.5 px-3 dark:bg-navy-800">
          <p className="text-xs uppercase">Hissseler</p>
          <a
            href="/hisseler"
            className="text-tiny+ font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
          >
            Tümü
          </a>
        </div>
        <div className="mt-1 font-inter font-medium">
          {filteredStocks !== null &&
            filteredStocks.map((stock) => (
              <a
                className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                key={stock.id}
                href={`/hisseler/${stock.symbol}`}
              >
                <Image
                  className="rounded-full"
                  width={30}
                  height={30}
                  src={`/images/stocks/logo/${stock.symbol}.svg`}
                  alt={stock.symbol}
                />
                <span>{stock.title}</span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
