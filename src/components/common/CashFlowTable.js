"use client";
import { useEffect, useState } from "react";

export default function CashFlowTable({ cashFlow, symbol }) {
  const [isLoading, setIsLoading] = useState(true);

  let ignore = false;
  const translator = {
    netIncome: "Net Gelir",
    depreciation: "Amortisman",
    changeToNetincome: "Gelirdeki Değişimler",
    changeToAccountReceivables: "Ticari Alacaklarla İlgili Değişimler",
    changeToLiabilities: "Yükümlülüklerdeki Değişimler",
    changeToInventory: "Stoklardaki Değişimler",
    changeToOperatingActivities: "Faaliyet Gelirlerindeki Değişimler",
    totalCashFromOperatingActivities: "Toplam Faaliyet Gelirleri",
    capitalExpenditures: "Sermaye Harcamaları",
    investments: "Yatırımlar",
    otherCashflowsFromInvestingActivities: "Yatırımlardan Gelen Diğer Gelirler",
    totalCashflowsFromInvestingActivities:
      "Yatırımlardan Gelen Toplam Gelirler",
    dividendsPaid: "Temettü Ödemeleri",
    netBorrowings: "Net Borçlanmalar",
    otherCashflowsFromFinancingActivities:
      "Diğer Finansal Faaliyetlerden Gelirler",
    totalCashFromFinancingActivities: "Toplam Finansal Faaliyetlerden Gelirler",
    effectOfExchangeRate: "Dövizdeki Değişimin Etkisi",
    changeInCash: "Nakitteki Değişim",
  };

  useEffect(() => {
    const formatTable = () => {
      if (!ignore) {
        var t = document.getElementsByTagName("tbody")[0],
          r = t.getElementsByTagName("tr"),
          cols = r.length,
          rows,
          cell,
          next,
          tem,
          i = 0,
          tbod = document.createElement("tbody");
        if (cols > 0) {
          rows = r[0].getElementsByTagName("td").length;
          while (i < rows) {
            cell = 0;
            tem = document.createElement("tr");
            while (cell < cols) {
              next = r[cell++].getElementsByTagName("td")[0];
              tem.appendChild(next);
            }
            tbod.appendChild(tem);
            ++i;
          }
          t.parentNode.replaceChild(tbod, t);

          for (const [key, value] of Object.entries(translator)) {
            var element = document.getElementById(key);
            if (element) {
              var elementParent = element.parentNode;
              var newElement = document.createElement("td");
              elementParent.insertBefore(newElement, element);
              newElement.classList = "whitespace-nowrap px-4 py-3 sm:px-5";
              newElement.innerText = value;
              // if (
              //   newElement.innerText.includes("Toplam") ||
              //   newElement.innerText == "🗄 Özkaynaklar"
              // ) {
              //   newElement.classList =
              //     "whitespace-nowrap px-4 py-3 sm:px-5 font-bold";
              // }
              if (r.length > 3) {
                setIsLoading(false);
              }
            }
          }
        }
      }
    };

    if (!ignore) formatTable();

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
          {`${symbol.toUpperCase()} Nakit Akışı Tablosu`}
        </h1>
      </div>
      <div className="card is-scrollbar-hidden min-w-full overflow-x-auto">
        {isLoading && (
          <div className="h-[200px]">
            <div className="flex bg-[#f8fafc] justify-center py-4">
              Veriler yükleniyor... Uzun süre veriler yüklenmiyorsa hisse için
              veriler henüz eklenmemiş demektir.
            </div>
            <div className="bg-[#f8fafc] absolute w-full h-full flex items-center justify-center">
              <div className="spinner h-16 m-auto w-16 animate-spin rounded-full border-4 border-primary border-r-transparent dark:border-accent dark:border-r-transparent"></div>
            </div>
          </div>
        )}
        <table className="w-full is-hoverable text-left">
          <thead>
            <tr>
              <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                {!isLoading ? "Kalemler" : "Veri Bulunamadı"}
              </th>
              {cashFlow.map((item, i) => (
                <th
                  key={i}
                  className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  {item.endDate.fmt}
                </th>
              ))}
            </tr>
          </thead>
          {isLoading ? (
            <tbody>
              {cashFlow.map((item, i) => (
                <tr key={i}>
                  <td
                    id="netIncome"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.netIncome?.fmt}
                  </td>
                  <td
                    id="depreciation"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.depreciation?.fmt}
                  </td>
                  <td
                    id="changeToNetincome"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.changeToNetincome?.fmt}
                  </td>
                  <td
                    id="changeToAccountReceivables"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.changeToAccountReceivables?.fmt}
                  </td>
                  <td
                    id="changeToLiabilities"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.changeToLiabilities?.fmt}
                  </td>
                  <td
                    id="changeToInventory"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.changeToInventory?.fmt}
                  </td>
                  <td
                    id="changeToOperatingActivities"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.changeToOperatingActivities?.fmt}
                  </td>
                  <td
                    id="totalCashFromOperatingActivities"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalCashFromOperatingActivities?.fmt}
                  </td>
                  <td
                    id="capitalExpenditures"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.capitalExpenditures?.fmt}
                  </td>
                  <td
                    id="investments"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.investments?.fmt}
                  </td>
                  <td
                    id="otherCashflowsFromInvestingActivities"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.otherCashflowsFromInvestingActivities?.fmt}
                  </td>
                  <td
                    id="totalCashflowsFromInvestingActivities"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalCashflowsFromInvestingActivities?.fmt}
                  </td>
                  <td
                    id="dividendsPaid"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.dividendsPaid?.fmt}
                  </td>
                  <td
                    id="netBorrowings"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.netBorrowings?.fmt}
                  </td>
                  <td
                    id="otherCashflowsFromFinancingActivities"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.otherCashflowsFromFinancingActivities?.fmt}
                  </td>
                  <td
                    id="totalCashFromFinancingActivities"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalCashFromFinancingActivities?.fmt}
                  </td>
                  <td
                    id="effectOfExchangeRate"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.effectOfExchangeRate?.fmt}
                  </td>
                  <td
                    id="changeInCash"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.changeInCash?.fmt}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr></tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
