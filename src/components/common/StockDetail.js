"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function StockDetail({ stockSingle, stockPrice }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [user, setUser] = React.useState();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [favoriteList, setFavoriteList] = React.useState([]);
  const [access, setAccess] = React.useState(null);

  React.useEffect(() => {
    const getUser = async () => {
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
        setAccess(session.user.access);
        if (data.favorites == "") {
          setFavoriteList([]);
        } else {
          const favoriteListData = data.favorites.split(",");
          setFavoriteList(favoriteListData);
          for (let i = 0; i < favoriteListData.length; i++) {
            if (favoriteListData[i] * 1 == stockSingle.id) setIsFavorite(true);
          }
        }
      }
    };
    getUser();
  }, [session]);
  const updateFavorites = async (e) => {
    e.preventDefault();
    let favorites;
    if (isFavorite) {
      const index = favoriteList.indexOf(stockSingle?.id.toString());
      if (index > -1) {
        favoriteList.splice(index, 1);
      }
      favorites = favoriteList.toString();
    } else {
      if (favoriteList.length == 0) {
        favorites = stockSingle.id.toString();
      } else {
        favoriteList.push(stockSingle.id);
        favorites = favoriteList.toString();
      }
    }
    try {
      const res = await axios.put(
        `${process.env.MAIN_API}/me/favorites/update/`,
        {
          favorites,
        },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      if (res.data) {
        window.location.replace(`/hisseler/${stockSingle.symbol}`);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="min-width-[220px]">
      <div className="flex flex-row justify-start items-center sm:hidden">
        <div className="mr-4">
          <Image
            src={`/images/stocks/logo/${stockSingle.symbol}.svg`}
            className="rounded-full"
            width={56}
            height={56}
            alt={stockSingle.symbol}
          />
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
              {stockPrice.regularMarketPrice.toLocaleString("tr-TR")}₺
            </p>
            <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
          <p className="text-xs text-slate-400 dark:text-navy-300">
            Gecikmeli veri!
          </p>
        </div>
      </div>
      <div className="hidden sm:flex shrink-0 flex-col items-center sm:items-start">
        <div className="flex flex-row justify-start items-center">
          <div className="mr-4 w-[56px]">
            <Image
              src={`/images/stocks/logo/${stockSingle.symbol}.svg`}
              className="rounded-full"
              width={56}
              height={56}
              alt={stockSingle.symbol}
            />
          </div>

          <div>
            <div className="flex items-center space-x-1">
              <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                {stockPrice.regularMarketPrice.toLocaleString("tr-TR")}₺
              </p>
              <div className="flex items-center space-x-0.5">
                {stockPrice.regularMarketChangePercent > 0 ? (
                  <i className="fa-solid fa-arrow-up h-2 w-2 text-success"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down h-2 w-2 text-red-500"></i>
                )}
                <p className="text-xs text-slate-800 dark:text-navy-100">
                  {(stockPrice.regularMarketChangePercent * 100).toFixed(2)}
                </p>
                <span className="text-xs">%</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 dark:text-navy-300">
              Gecikmeli veri!
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center space-x-2">
          <div className="ax-transparent-gridline w-28">
            <img src="/images/web/line-chart.png" />
          </div>
        </div>
        {isFavorite ? (
          <button
            onClick={updateFavorites}
            className="btn mt-4 w-full space-x-2 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <i className="fa-regular fa-heart text-slate-400 dark:text-navy-300"></i>
            <span> Favorilerden Çıkar</span>
          </button>
        ) : (
          <button
            onClick={updateFavorites}
            className="btn mt-4 w-full space-x-2 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <i className="fa-regular fa-heart text-slate-400 dark:text-navy-300"></i>
            <span> Favorilere Ekle</span>
          </button>
        )}
      </div>
    </div>
  );
}
