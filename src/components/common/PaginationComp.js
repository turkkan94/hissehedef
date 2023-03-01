"use client";
import Pagination from "react-js-pagination";
import { usePathname } from "next/navigation";

export default function PaginationComp({ page, resPerPage, count }) {
  const pathname = usePathname();
  const handlePageClick = (pageNumber) => {
    if (pageNumber == 1) {
      window.location.replace(pathname);
    } else {
      window.location.replace(`${pathname}?page=${pageNumber}`);
    }
  };

  return (
    resPerPage < count && (
      <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={count}
        onChange={handlePageClick}
        nextPageText={<i className="fa-solid fa-angles-right"></i>}
        prevPageText={<i className="fa-solid fa-angles-left"></i>}
        innerClass="pagination space-x-1.5"
        activeLinkClass="bg-[#4f46e5] text-white hover:text-inherit dark:bg-[#4f46e5]"
        linkClass="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        hideFirstLastPages={true}
      />
    )
  );
}
