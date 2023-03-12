"use client";
import { useEffect, useState } from "react";

export default function IncomeTable({ income, symbol }) {
  const [isLoading, setIsLoading] = useState(true);

  let ignore = false;
  const translator = {
    totalRevenue: "Toplam Satış Gelirleri",
    costOfRevenue: "Satışların Maliyeti",
    grossProfit: "Brüt Kazanç",
    researchDevelopment: "Araştırma&Geliştirme Giderleri",
    sellingGeneralAdministrative: "Pazarlama&Yönetim Giderleri",
    otherOperatingExpenses: "Diğer Faaliyet Giderleri",
    totalOperatingExpenses: "Toplam Faaliyet Giderleri",
    operatingIncome: "Faaliyet Geliri",
    totalOtherIncomeExpenseNet: "Diğer Gelir Giderler",
    ebit: "Faiz ve Vergiden Önceki Kazanç",
    interestExpense: "Faiz Giderleri",
    incomeBeforeTax: "Vergi Öncesi Kazanç",
    incomeTaxExpense: "Vergi Giderleri",
    minorityInterest: "Azınlık Menfaati",
    netIncomeFromContinuingOps: "Devam Eden Faaliyet Gelirleri",
    netIncome: "Net Gelir",
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
              {income.map((item, i) => (
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
              {income.map((item, i) => (
                <tr key={i}>
                  <td
                    id="totalRevenue"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalRevenue?.fmt}
                  </td>
                  <td
                    id="costOfRevenue"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.costOfRevenue?.fmt}
                  </td>
                  <td
                    id="grossProfit"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.grossProfit?.fmt}
                  </td>
                  <td
                    id="researchDevelopment"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.researchDevelopment?.fmt}
                  </td>
                  <td
                    id="sellingGeneralAdministrative"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.sellingGeneralAdministrative?.fmt}
                  </td>
                  <td
                    id="otherOperatingExpenses"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.otherOperatingExpenses?.fmt}
                  </td>
                  <td
                    id="totalOperatingExpenses"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalOperatingExpenses?.fmt}
                  </td>
                  <td
                    id="operatingIncome"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.operatingIncome?.fmt}
                  </td>
                  <td
                    id="totalOtherIncomeExpenseNet"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalOtherIncomeExpenseNet?.fmt}
                  </td>
                  <td id="ebit" className="whitespace-nowrap px-4 py-3 sm:px-5">
                    {item.ebit?.fmt}
                  </td>
                  <td
                    id="interestExpense"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.interestExpense?.fmt}
                  </td>
                  <td
                    id="incomeBeforeTax"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.incomeBeforeTax?.fmt}
                  </td>
                  <td
                    id="incomeTaxExpense"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.incomeTaxExpense?.fmt}
                  </td>
                  <td
                    id="minorityInterest"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.minorityInterest?.fmt}
                  </td>
                  <td
                    id="netIncomeFromContinuingOps"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.netIncomeFromContinuingOps?.fmt}
                  </td>
                  <td
                    id="netIncome"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.netIncome?.fmt}
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
