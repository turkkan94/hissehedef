import React from "react";
import Link from "next/link";

export default function BreadCrumb({ stock }) {
  return (
    <div className="flex items-center space-x-4 pb-4 lg:pb-6 px-16">
      <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl capitalize">
        {stock.symbol.toUpperCase() + " - " + stock.title}
      </h2>
      <div className="hidden h-full py-1 sm:flex">
        <div className="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
      </div>
      <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
        <li className="flex items-center space-x-2">
          <Link
            className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="/hisseler"
          >
            Hisseler
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </li>
        <li className="uppercase">{stock.symbol}</li>
      </ul>
    </div>
  );
}
