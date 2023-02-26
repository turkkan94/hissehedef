"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { toast } from "react-toastify";

export default function TargetPricesWidget({
  stockPrice,
  EPS,
  totalStockHolderPercent,
}) {
  const [lastBalancePrice, setLastBalancePrice] = useState(null);
  const [bist100PE, setBist100PE] = useState(null);
  const [sectorPE, setSectorPE] = useState(null);
  const [targetPriceSector, setTargetPriceSector] = useState(null);
  const [targetPriceBist, setTargetPriceBist] = useState(null);
  const [targetPriceHolder, setTargetPriceHolder] = useState(null);

  const PE = stockPrice.regularMarketPrice / EPS;

  const calculateTargetPrices = (e) => {
    e.preventDefault();
    if (sectorPE == null) {
      toast("Hata ! Sektör Ortalama F/K değeri girmelisiniz.", {
        position: "top-right",
        hideProgressBar: true,
        className: "text-slate-800",
      });
      return;
    }
    if (bist100PE == null) {
      toast("Hata ! Bist 100 Ortalama F/K değeri girmelisiniz.", {
        position: "top-right",
        hideProgressBar: true,
        className: "text-slate-800",
      });
      return;
    }
    if (lastBalancePrice == null) {
      setTargetPriceBist(
        (bist100PE.replace(",", ".") / PE) * stockPrice.regularMarketPrice
      );
      setTargetPriceSector(
        (sectorPE.replace(",", ".") / PE) * stockPrice.regularMarketPrice
      );
      setTargetPriceHolder(
        totalStockHolderPercent * stockPrice.regularMarketPrice
      );
    } else {
      setTargetPriceBist(
        (bist100PE.replace(",", ".") / PE) * lastBalancePrice.replace(",", ".")
      );
      setTargetPriceSector(
        (sectorPE.replace(",", ".") / PE) * lastBalancePrice.replace(",", ".")
      );
      setTargetPriceHolder(
        totalStockHolderPercent * lastBalancePrice.replace(",", ".")
      );
    }
  };

  return (
    <>
      <form
        onSubmit={calculateTargetPrices}
        className="card col-span-12 lg:col-span-8"
      >
        <div className="flex items-center justify-between py-3 px-4">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            {`${stockPrice.symbol
              .split(".")[0]
              .toUpperCase()} Hedef Fiyat Hesaplama`}
          </h2>
          <div
            id="sales-tab"
            className="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200"
          >
            <div className="tabs-list flex p-1">
              <button
                type="submit"
                className="btn shrink-0 px-3 py-1 text-xs+ font-medium"
                data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
              >
                Hesapla
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3">
          <div className="flex flex-col justify-between border-4 border-transparent border-l-info px-4">
            <div>
              <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                Bist 100 F/K
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Bist 100 ortalamasına göre
              </p>
              <label className="block">
                <input
                  className="form-input placeholder:text-sm text-[16px] mt-5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Rakam giriniz."
                  type="float"
                  onChange={(e) => setBist100PE(e.target.value)}
                />
              </label>
            </div>
            <div>
              <div className="mt-5">
                <p className="font-inter">
                  <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">
                    ₺
                    <CountUp
                      start={0}
                      end={targetPriceBist}
                      decimals={1}
                      duration={2}
                    />
                  </span>
                  <span
                    className={
                      targetPriceBist < stockPrice.regularMarketPrice
                        ? "text-xs text-red-500"
                        : "text-xs text-success"
                    }
                  >
                    {targetPriceBist
                      ? (
                          (targetPriceBist / stockPrice.regularMarketPrice -
                            1) *
                          100
                        ).toFixed(2)
                      : "0"}
                    %
                  </span>
                </p>
                <p className="mt-1 text-xs">Getiri potansiyeli</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between border-4 border-transparent border-l-secondary px-4">
            <div>
              <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                Sektör F/K
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Sektör ortalamasına göre
              </p>
              <label className="block">
                <input
                  className="form-input placeholder:text-sm text-[16px] mt-5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Rakam giriniz."
                  type="float"
                  onChange={(e) => setSectorPE(e.target.value)}
                />
              </label>
            </div>
            <div>
              <div className="mt-5">
                <p className="font-inter">
                  <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">
                    ₺
                    <CountUp
                      start={0}
                      end={targetPriceSector}
                      decimals={1}
                      duration={2}
                    />
                  </span>
                  <span
                    className={
                      targetPriceSector < stockPrice.regularMarketPrice
                        ? "text-xs text-red-500"
                        : "text-xs text-success"
                    }
                  >
                    {targetPriceSector
                      ? (
                          (targetPriceSector / stockPrice.regularMarketPrice -
                            1) *
                          100
                        ).toFixed(2)
                      : "0"}
                    %
                  </span>
                </p>
                <p className="mt-1 text-xs">Getiri potansiyeli</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between border-4 border-transparent border-l-warning px-4">
            <div>
              <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                Özkaynak
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Dönemsel Özkaynak Artışına Göre
              </p>
              <label className="mt-5 flex -space-x-px">
                <input
                  className="form-input placeholder:text-sm text-[16px] w-full rounded-l-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Son bilanço tarihindeki fiyat."
                  type="float"
                  onChange={(e) => setLastBalancePrice(e.target.value)}
                />
                <div className="flex items-center justify-center rounded-r-lg border border-slate-300 px-3.5 font-inter dark:border-navy-450">
                  <span>₺</span>
                </div>
              </label>
            </div>
            <div>
              <div className="mt-5">
                <p className="font-inter">
                  <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">
                    ₺
                    <CountUp
                      start={0}
                      end={targetPriceHolder}
                      decimals={1}
                      duration={2}
                    />
                  </span>
                  <span
                    className={
                      targetPriceHolder < stockPrice.regularMarketPrice
                        ? "text-xs text-red-500"
                        : "text-xs text-success"
                    }
                  >
                    {targetPriceHolder
                      ? (
                          (targetPriceHolder / stockPrice.regularMarketPrice -
                            1) *
                          100
                        ).toFixed(2)
                      : "0"}
                    %
                  </span>
                </p>
                <p className="mt-1 text-xs">Getiri potansiyeli</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 px-4 mb-4 flex flex-col justify-between space-x-2">
          <div className="">
            <i className="fa-solid fa-triangle-exclamation mr-2 text-lg text-warning"></i>
            Bist 100 ve hissenin sektör F/K ortalamasını öğrenmek için
            <a
              className="text-red-500 hover:text-slate-900 duration-300 mx-1"
              href="https://www.ziraatyatirim.com.tr/tr/gunluk-sirket-getiri-ve-carpanlari"
              target="_blank"
              rel="noreferrer"
            >
              Ziraat Yatırım{" "}
              <i className="fa-solid fa-up-right-from-square mr-1 text-xs ml-1"></i>
            </a>
            web adresini kullabilirsiniz.
          </div>
          <div className="sm:pl-4 m-0">
            Özkaynak bölümündeki alana son bilanço tarihindeki fiyat girilmezse
            güncel fiyat baz alınır...
          </div>
        </div>
      </form>
      <div className="col-span-12 lg:col-span-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Hedef Fiyat Ortalamaları
          </h2>
        </div>
        <div className="mt-3">
          <p>
            <span className="text-3xl text-slate-700 dark:text-navy-100">
              {(
                (targetPriceBist + targetPriceSector + targetPriceHolder) /
                3
              ).toFixed(2)}
              ₺
            </span>
            <span className="text-xs text-success">
              {targetPriceBist
                ? (
                    ((targetPriceBist + targetPriceSector + targetPriceHolder) /
                      3 /
                      stockPrice.regularMarketPrice -
                      1) *
                    100
                  ).toFixed(2)
                : "0"}
              %
            </span>
          </p>
          <p className="text-xs+">Getiri Potansiyeli</p>
        </div>
        <div className="mt-4 flex h-2 space-x-1">
          <div
            className="w-5/12 rounded-full bg-primary dark:bg-accent"
            data-tooltip="Exellent"
            data-theme="primary"
          ></div>
          <div
            className="w-2/12 rounded-full bg-success"
            data-tooltip="Very Good"
            data-theme="success"
          ></div>
          <div
            className="w-2/12 rounded-full bg-info"
            data-tooltip="Good"
            data-theme="info"
          ></div>

          <div
            className="w-2/12 rounded-full bg-warning"
            data-tooltip="Poor"
            data-theme="warning"
          ></div>
          <div
            className="w-1/12 rounded-full bg-error"
            data-tooltip="Very Poor"
            data-theme="error"
          ></div>
        </div>

        <div className="is-scrollbar-hidden mt-4 min-w-full overflow-x-auto">
          <table className="w-full font-inter">
            <tbody>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-primary dark:border-accent"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Tahmini F/K
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    {(stockPrice.regularMarketPrice / EPS).toFixed(2)}
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">42%</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-success"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Tahmini Hisse Başı Kâr
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    {EPS?.toFixed(2)}
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">18%</td>
              </tr>
              {/* <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-info"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Good
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    326
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">14%</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-warning"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Poor
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    395
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">17%</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-error"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Very Poor
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    129
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">9%</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
