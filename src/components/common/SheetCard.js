import React from "react";

export default function SheetCard({ url, title, icon, iconColor }) {
  return (
    <a
      href={url}
      className="rounded-lg flex relative bg-slate-150 border border-slate-150 dark:border-navy-700 hover:border hover:border-slate-300 hover:bg-slate-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:bg-navy-700 w-full flex-row justify-between p-2 sm:p-3"
    >
      <div>
        <p className="text-base font-medium text-slate-700 dark:text-navy-100">
          {title}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
        <i
          className={` ${icon} ${iconColor} translate-x-1/4 translate-y-1/4 text-5xl opacity-15`}
        ></i>
      </div>
    </a>
  );
}
