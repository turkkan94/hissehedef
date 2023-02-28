"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

import StockPricesChart from "@/components/charts/StockPricesChart";

export default function StockDetail({ stockSingle, stock, stockPriceSeries }) {
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
    <div className="min-w-[220px]">
      <div className="flex flex-row justify-start items-center sm:hidden">
        <div className="mr-4">
          <Image
            src={`/images/stocks/logo/${stockSingle.symbol}.svg`}
            className="rounded-full"
            width={60}
            height={60}
            alt={stockSingle.symbol}
          />
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
              {stock.details.currentPrice.toLocaleString("tr-TR")}₺
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            {stock.details.priceChangePercent > 0 ? (
              <i className="fa-solid fa-arrow-up h-2 w-2 text-success"></i>
            ) : (
              <i className="fa-solid fa-arrow-down h-2 w-2 text-red-500"></i>
            )}
            <p className="text-xs text-slate-800 dark:text-navy-100">
              {stock.details.priceChangePercent}%
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col w-full items-center gap-3 sm:hidden">
        {isFavorite ? (
          <button
            onClick={updateFavorites}
            className="btn mt-4 w-full space-x-2 rounded-lg border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <i className="fa-regular fa-heart text-slate-400 dark:text-navy-300"></i>
            <span> Favorilerden Çıkar</span>
          </button>
        ) : (
          <button
            onClick={updateFavorites}
            className="btn mt-4 w-full space-x-2 rounded-lg border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <i className="fa-regular fa-heart text-slate-400 dark:text-navy-300"></i>
            <span> Favorilere Ekle</span>
          </button>
        )}
        <div
          className="ax-transparent-gridline grid w-full grid-cols-1 sm:hidden"
          style={{ margin: "0 !important" }}
        >
          <StockPricesChart stockPriceSeries={stockPriceSeries} />
        </div>
        <a
          href={`/hisseler/${stockSingle.symbol}/bilanco`}
          className="rounded-lg flex relative bg-slate-150 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:bg-navy-700 w-full flex-row justify-between p-2 sm:p-3"
        >
          <div>
            <p className="text-base font-medium text-slate-700 dark:text-navy-100">
              Bilanço
            </p>
          </div>
          <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
            <i className="fa-solid fa-scale-balanced text-primary translate-x-1/4 translate-y-1/4 text-5xl opacity-15"></i>
          </div>
        </a>
        <Link
          href="#"
          className="rounded-lg flex relative bg-slate-150 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:bg-navy-700 w-full flex-row justify-between p-2 sm:p-3"
        >
          <div>
            <p className="text-base font-medium text-slate-700 dark:text-navy-100">
              Nakit Akışı
            </p>
          </div>
          <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
            <i className="fa-solid fa-money-check-dollar text-warning translate-x-1/4 translate-y-1/4 text-5xl opacity-15"></i>
          </div>
        </Link>
        <Link
          href="#"
          className="rounded-lg flex relative bg-slate-150 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:bg-navy-700 w-full flex-row justify-between p-2 sm:p-3"
        >
          <div>
            <p className="text-base font-medium text-slate-700 dark:text-navy-100">
              Gelir Tablosu
            </p>
          </div>
          <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
            <i className="fa-solid fa-sack-dollar text-info translate-x-1/4 translate-y-1/4 text-5xl opacity-15"></i>
          </div>
        </Link>
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
                {stock.details.currentPrice.toLocaleString("tr-TR")}₺
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              {stock.details.priceChangePercent > 0 ? (
                <i className="fa-solid fa-arrow-up h-2 w-2 text-success"></i>
              ) : (
                <i className="fa-solid fa-arrow-down h-2 w-2 text-red-500"></i>
              )}
              <p className="text-xs text-slate-800 dark:text-navy-100">
                {stock.details.priceChangePercent}%
              </p>
            </div>
          </div>
        </div>
        {isFavorite ? (
          <button
            onClick={updateFavorites}
            className="btn mt-4 w-full space-x-2 rounded-lg border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <i className="fa-regular fa-heart text-slate-400 dark:text-navy-300"></i>
            <span> Favorilerden Çıkar</span>
          </button>
        ) : (
          <button
            onClick={updateFavorites}
            className="btn mt-4 w-full space-x-2 rounded-lg border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <i className="fa-regular fa-heart text-slate-400 dark:text-navy-300"></i>
            <span> Favorilere Ekle</span>
          </button>
        )}
        <div className="mt-2 flex flex-col w-full items-center gap-3">
          <a
            href={`/hisseler/${stockSingle.symbol}/bilanco`}
            className="rounded-lg flex relative bg-slate-150 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:bg-navy-700 w-full flex-row justify-between p-2 sm:p-3"
          >
            <div>
              <p className="text-base font-medium text-slate-700 dark:text-navy-100">
                Bilanço
              </p>
            </div>
            <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
              <i className="fa-solid fa-scale-balanced text-primary translate-x-1/4 translate-y-1/4 text-5xl opacity-15"></i>
            </div>
          </a>
          <Link
            href={`#`}
            className="rounded-lg flex relative bg-slate-150 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:bg-navy-700 w-full flex-row justify-between p-2 sm:p-3"
          >
            <div>
              <p className="text-base font-medium text-slate-700 dark:text-navy-100">
                Nakit Akışı
              </p>
            </div>
            <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
              <i className="fa-solid fa-money-check-dollar text-warning translate-x-1/4 translate-y-1/4 text-5xl opacity-15"></i>
            </div>
          </Link>
          <Link
            href={`#`}
            className="rounded-lg flex relative bg-slate-150 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:bg-navy-700 w-full flex-row justify-between p-2 sm:p-3"
          >
            <div>
              <p className="text-base font-medium text-slate-700 dark:text-navy-100">
                Gelir Tablosu
              </p>
            </div>
            <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
              <i className="fa-solid fa-sack-dollar text-info translate-x-1/4 translate-y-1/4 text-5xl opacity-15"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
