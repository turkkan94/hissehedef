import React from "react";
import SectorCard from "@/components/common/SectorCard";

export default function SectorList({ sectors }) {
  return (
    <>
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
          Sektörler
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-6 lg:gap-6">
        {(sectors || []).map((item, key) => (
          <SectorCard key={key} sector={item} />
        ))}
      </div>
    </>
  );
}
