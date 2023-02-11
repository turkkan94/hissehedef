import React from "react";

export default function SectorCard({ sector }) {
  return (
    <a href={`/sektorler/${sector.slug}`}>
      <div className="card items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left">
          <div className="avatar h-18 w-18 lg:h-12 lg:w-12">
            <img
              className="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
            />
          </div>
          <div className="mt-2 lg:mt-0">
            <div className="flex items-center justify-start space-x-1">
              <h4 className="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                {sector.title}
              </h4>
            </div>
            <p className="text-xs+">{sector?.stocks.length} Hisse</p>
          </div>
        </div>
      </div>
    </a>
  );
}
