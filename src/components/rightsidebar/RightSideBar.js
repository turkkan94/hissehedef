"use client";
import React, { useState } from "react";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

import { getStocksById } from "../data/MainStockApi";
import FavoritesTable from "@/components/common/FavoritesTable";

export default function RightSideBar({ useSharedSidebar, session }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = React.useState();
  const [favorites, setFavorites] = React.useState([]);
  const { isSidebar, setIsSidebar } = useSharedSidebar();
  const aylar = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const now = new Date();
  const yil = now.getFullYear();
  const ay = now.getMonth();
  const gun = now.getDate();

  React.useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      if (session) {
        const res = await fetch(`${process.env.MAIN_API}/me/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.access}`,
          },
        });
        const data = await res.json();
        setUser(data);
        if (data.favorites == "") {
          setFavorites([]);
        } else {
          const favoritesData = await getStocksById(data.favorites.split(","));
          setFavorites(favoritesData);
        }

        setLoading(false);
      }
    };
    getUser();
  }, [session]);

  return (
    <div id="right-sidebar" className="drawer-right">
      <div
        className={`drawer-overlay fixed inset-0 z-[150] bg-slate-900/60 ${
          isSidebar ? "" : "hidden"
        }`}
        onClick={() => setIsSidebar(false)}
      ></div>
      <div
        className={`drawer-content fixed right-0 top-0 z-[151] h-full w-full sm:w-80 ${
          isSidebar ? "" : "hidden"
        }`}
      >
        <div className="right-sidebar-tab-wrapper w-ful relative flex h-full flex-col bg-white dark:bg-navy-750">
          <div className="flex items-center justify-between py-2 px-4">
            <p
              data-header="#right-sidebar-tab-home"
              className="right-sidebar-header flex shrink-0 items-center space-x-1.5"
            >
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
                  strokeWidth="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs">
                {gun + " " + aylar[ay] + " " + yil}
              </span>
            </p>
            <button
              data-close-drawer
              className="btn -mr-1 h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              onClick={() => setIsSidebar(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            id="right-sidebar-tab-home"
            className={`tab-content tab-shift-up is-scrollbar-hidden overflow-y-auto overscroll-contain pt-1 
            ${isSidebar ? "is-active" : ""}`}
          >
            <FavoritesTable
              favorites={favorites}
              useSharedSidebar={useSharedSidebar}
              user={user}
            />

            {/* <div className="h-18"></div> */}
          </div>

          {/* <div
            id="right-sidebar-tab-project"
            className="tab-content tab-shift-up is-scrollbar-hidden overflow-y-auto overscroll-contain px-3 pt-1"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                <div className="flex justify-between space-x-1">
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    14
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    className="h-5 w-5 text-primary dark:text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="mt-1 text-xs+">Pending</p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    36
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <p className="mt-1 text-xs+">Completed</p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    143
                  </p>

                  <i className="fa fa-spinner text-base text-warning"></i>
                </div>
                <p className="mt-1 text-xs+">In Progress</p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    279
                  </p>

                  <i className="fa-solid fa-list-check text-base text-info"></i>
                </div>
                <p className="mt-1 text-xs+">Total</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-slate-150 p-3 dark:border-navy-600">
              <div className="flex items-center space-x-3">
                <img
                  className="h-10 w-10 rounded-lg object-cover object-center"
                  src="images/illustrations/lms-ui.svg"
                  alt="image"
                />
                <div>
                  <p className="font-medium leading-snug text-slate-700 dark:text-navy-100">
                    LMS App Design
                  </p>
                  <p className="text-xs text-slate-400 dark:text-navy-300">
                    Updated at 7 Sep
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                  <div className="w-4/12 rounded-full bg-primary dark:bg-accent"></div>
                </div>
                <p className="mt-2 text-right text-xs+ font-medium text-primary dark:text-accent-light">
                  25%
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between space-x-2">
                <div className="flex -space-x-3">
                  <div className="avatar h-7 w-7 hover:z-10">
                    <img
                      className="rounded-full ring ring-white dark:ring-navy-700"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="avatar h-7 w-7 hover:z-10">
                    <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                      jd
                    </div>
                  </div>
                  <div className="avatar h-7 w-7 hover:z-10">
                    <img
                      className="rounded-full ring ring-white dark:ring-navy-700"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-slate-150 p-3 dark:border-navy-600">
              <div className="flex items-center space-x-3">
                <img
                  className="h-10 w-10 rounded-lg object-cover object-center"
                  src="images/illustrations/store-ui.svg"
                  alt="image"
                />
                <div>
                  <p className="font-medium leading-snug text-slate-700 dark:text-navy-100">
                    Store Dashboard
                  </p>
                  <p className="text-xs text-slate-400 dark:text-navy-300">
                    Updated at 11 Sep
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                  <div className="w-6/12 rounded-full bg-primary dark:bg-accent"></div>
                </div>
                <p className="mt-2 text-right text-xs+ font-medium text-primary dark:text-accent-light">
                  49%
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between space-x-2">
                <div className="flex -space-x-3">
                  <div className="avatar h-7 w-7 hover:z-10">
                    <img
                      className="rounded-full ring ring-white dark:ring-navy-700"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="avatar h-7 w-7 hover:z-10">
                    <div className="is-initial rounded-full bg-warning text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                      dv
                    </div>
                  </div>
                  <div className="avatar h-7 w-7 hover:z-10">
                    <img
                      className="rounded-full ring ring-white dark:ring-navy-700"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-slate-150 p-3 dark:border-navy-600">
              <div className="flex items-center space-x-3">
                <img
                  className="h-10 w-10 rounded-lg object-cover object-center"
                  src="images/illustrations/chat-ui.svg"
                  alt="image"
                />
                <div>
                  <p className="font-medium leading-snug text-slate-700 dark:text-navy-100">
                    Chat Mobile App
                  </p>
                  <p className="text-xs text-slate-400 dark:text-navy-300">
                    Updated at 19 Sep
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                  <div className="w-2/12 rounded-full bg-primary dark:bg-accent"></div>
                </div>
                <p className="mt-2 text-right text-xs+ font-medium text-primary dark:text-accent-light">
                  13%
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between space-x-2">
                <div className="flex -space-x-3">
                  <div className="avatar h-7 w-7 hover:z-10">
                    <img
                      className="rounded-full ring ring-white dark:ring-navy-700"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="avatar h-7 w-7 hover:z-10">
                    <div className="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                      gt
                    </div>
                  </div>
                  <div className="avatar h-7 w-7 hover:z-10">
                    <img
                      className="rounded-full ring ring-white dark:ring-navy-700"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-slate-150 p-3 dark:border-navy-600">
              <div className="flex items-center space-x-3">
                <img
                  className="h-10 w-10 rounded-lg object-cover object-center"
                  src="images/illustrations/nft.svg"
                  alt="image"
                />
                <div>
                  <p className="font-medium leading-snug text-slate-700 dark:text-navy-100">
                    NFT Marketplace App
                  </p>
                  <p className="text-xs text-slate-400 dark:text-navy-300">
                    Updated at 5 Sep
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                  <div className="w-9/12 rounded-full bg-primary dark:bg-accent"></div>
                </div>
                <p className="mt-2 text-right text-xs+ font-medium text-primary dark:text-accent-light">
                  78%
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between space-x-2">
                <div className="flex -space-x-3">
                  <div className="avatar h-7 w-7 hover:z-10">
                    <img
                      className="rounded-full ring ring-white dark:ring-navy-700"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="avatar h-7 w-7 hover:z-10">
                    <div className="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                      jd
                    </div>
                  </div>
                  <div className="avatar h-7 w-7 hover:z-10">
                    <img
                      className="rounded-full ring ring-white dark:ring-navy-700"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="h-18"></div>
          </div>

          <div
            id="right-sidebar-tab-activity"
            className="tab-content tab-shift-up is-scrollbar-hidden overflow-y-auto overscroll-contain pt-1"
          >
            <div className="mx-3 flex flex-col items-center rounded-lg bg-slate-100 py-3 px-8 dark:bg-navy-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-secondary dark:text-secondary-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="mt-2 text-xs">Today</p>

              <p className="text-lg font-medium text-slate-700 dark:text-navy-100">
                6hr 22m
              </p>

              <div className="progress mt-3 h-2 bg-secondary/15 dark:bg-secondary-light/25">
                <div className="is-active relative w-8/12 overflow-hidden rounded-full bg-secondary dark:bg-secondary-light"></div>
              </div>

              <button className="btn mt-5 space-x-2 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5 text-slate-400 dark:text-navy-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                  />
                </svg>
                <span> Download Report</span>
              </button>
            </div>

            <ol className="timeline line-space mt-5 px-4 [--size:1.5rem]">
              <li className="timeline-item">
                <div className="timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light">
                  <i className="fa fa-user-edit text-tiny"></i>
                </div>
                <div className="timeline-item-content flex-1 pl-4">
                  <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                    <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                      User Photo Changed
                    </p>
                    <span className="text-xs text-slate-400 dark:text-navy-300">
                      12 minute ago
                    </span>
                  </div>
                  <p className="py-1">John Doe changed his avatar photo</p>
                  <div className="avatar mt-2 h-20 w-20">
                    <img
                      className="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700 dark:text-accent">
                  <i className="fa-solid fa-image text-tiny"></i>
                </div>
                <div className="timeline-item-content flex-1 pl-4">
                  <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                    <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                      Images Added
                    </p>
                    <span className="text-xs text-slate-400 dark:text-navy-300">
                      1 hour ago
                    </span>
                  </div>
                  <p className="py-1">Mores Clarke added new image gallery</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <img
                      className="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                    />
                    <img
                      className="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                    />
                    <img
                      className="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                    />
                    <img
                      className="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                    />
                    <img
                      className="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                    />
                    <img
                      className="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="font-medium text-slate-600 dark:text-navy-100">
                      Category:
                    </span>

                    <a
                      href="#"
                      className="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                    >
                      #Tag
                    </a>

                    <a
                      href="#"
                      className="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                    >
                      #Category
                    </a>
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700">
                  <i className="fa fa-leaf text-tiny"></i>
                </div>
                <div className="timeline-item-content flex-1 pl-4">
                  <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                    <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                      Design Completed
                    </p>
                    <span className="text-xs text-slate-400 dark:text-navy-300">
                      3 hours ago
                    </span>
                  </div>
                  <p className="py-1">
                    Robert Nolan completed the design of the CRM application
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>File_final.fig</span>
                  </a>
                  <div className="pt-2">
                    <a
                      href="#"
                      className="tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                    >
                      UI/UX
                    </a>

                    <a
                      href="#"
                      className="tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                    >
                      CRM
                    </a>

                    <a
                      href="#"
                      className="tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                    >
                      Dashboard
                    </a>
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-item-point rounded-full border border-current bg-white text-warning dark:bg-navy-700">
                  <i className="fa fa-project-diagram text-tiny"></i>
                </div>
                <div className="timeline-item-content flex-1 pl-4">
                  <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                    <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                      ER Diagram
                    </p>
                    <span className="text-xs text-slate-400 dark:text-navy-300">
                      a day ago
                    </span>
                  </div>
                  <p className="py-1">Team completed the ER diagram app</p>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Members:
                    </p>
                    <div className="mt-2 flex justify-between">
                      <div className="flex flex-wrap -space-x-2">
                        <div className="avatar h-7 w-7 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                          />
                        </div>

                        <div className="avatar h-7 w-7 hover:z-10">
                          <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                            jd
                          </div>
                        </div>

                        <div className="avatar h-7 w-7 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                          />
                        </div>

                        <div className="avatar h-7 w-7 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                          />
                        </div>

                        <div className="avatar h-7 w-7 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 rotate-45"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 11l5-5m0 0l5 5m-5-5v12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700">
                  <i className="fa fa-history text-tiny"></i>
                </div>
                <div className="timeline-item-content flex-1 pl-4">
                  <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                    <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                      Weekly Report
                    </p>
                    <span className="text-xs text-slate-400 dark:text-navy-300">
                      a day ago
                    </span>
                  </div>
                  <p className="py-1">The weekly report was uploaded</p>
                </div>
              </li>
            </ol>
            <div className="h-18"></div>
          </div>

          <div className="pointer-events-none absolute bottom-4 flex w-full justify-center">
            <div className="pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900">
              <button
                data-target="#right-sidebar-tab-home"
                data-active-class="text-primary dark:text-accent [&_svg:last-child]:hidden"
                data-default-class="[&_svg:first-child]:hidden"
                className="tab btn h-9 rounded-full py-0 px-4 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </button>
              <button
                data-target="#right-sidebar-tab-project"
                data-active-class="text-primary dark:text-accent [&_svg:last-child]:hidden"
                data-default-class="[&_svg:first-child]:hidden"
                className="tab btn h-9 rounded-full py-0 px-4 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </button>
              <button
                data-target="#right-sidebar-tab-activity"
                data-active-class="text-primary dark:text-accent [&_svg:last-child]:hidden"
                data-default-class="[&_svg:first-child]:hidden"
                className="tab btn h-9 rounded-full py-0 px-4 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
