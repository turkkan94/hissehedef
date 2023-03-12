"use client";
import { useEffect, useState } from "react";

export default function BalanceTable({ balance, symbol }) {
  const [isLoading, setIsLoading] = useState(true);
  const [haveData, setHaveData] = useState(false);

  let ignore = false;
  const translator = {
    cash: "Nakit",
    shortTermInvestments: "Kısa Vadeli Yatırımlar",
    netReceivables: "Net Alacaklar",
    inventory: "Stoklar",
    otherCurrentAssets: "Diğer Dönen Varlıklar",
    totalCurrentAssets: "💵 Toplam Dönen Varlıklar",
    longTermInvestments: "Uzun Vadeli Yatırımlar",
    propertyPlantEquipment: "Maddi Duran Varlıklar",
    intangibleAssets: "Maddi Olmayan Duran Varlıklar",
    goodWill: "Şerefiye Değeri",
    otherAssets: "Diğer Varlıklar",
    deferredLongTermAssetCharges: "Ertelenmiş Vergi Varlığı",
    totalAssets: "💰 Toplam Varlıklar",
    accountsPayable: "Ticari Borçlar",
    shortLongTermDebt: "Kısa&Uzun Vadeli Yükümlülükler",
    otherCurrentLiab: "Diğer Maddi Yükümlülükler",
    longTermDebt: "Uzun Vadeli Yükümlülükler",
    otherLiab: "Diğer Yükümlülükler",
    minorityInterest: "Azınlık Payları",
    totalCurrentLiabilities: "Maddi Yükümlülükler",
    totalLiab: "📑 Toplam Yükümlülükler",
    commonStock: "Ödenmiş Sermaye",
    retainedEarnings: "Dağıtılmamış Kârlar",
    treasuryStock: "Hazine Hisseleri",
    capitalSurplus: "Sermaye Fazlası",
    totalStockholderEquity: "🗄 Özkaynaklar",
    otherStockholderEquity: "Diğer Özkaynaklar",
    netTangibleAssets: "Net Maddi Varlıklar",
  };

  useEffect(() => {
    const formatTable = () => {
      if (!ignore) {
        var t = document.getElementsByTagName("tbody")[0],
          r = t.getElementsByTagName("tr"),
          cols = r.length,
          rows = r[0].getElementsByTagName("td").length,
          cell,
          next,
          tem,
          i = 0,
          tbod = document.createElement("tbody");
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
            if (
              newElement.innerText.includes("Toplam") ||
              newElement.innerText == "🗄 Özkaynaklar"
            ) {
              newElement.classList =
                "whitespace-nowrap px-4 py-3 sm:px-5 font-bold";
            }
          }
        }
      }
    };

    if (!ignore && r) formatTable();
    var t = document.getElementsByTagName("tbody")[0],
      r = t.getElementsByTagName("tr");
    if (r.length > 4) {
      setIsLoading(false);
      setHaveData(true);
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
          {`${symbol.toUpperCase()} Bilanço Tablosu`}
        </h1>
      </div>
      <div className="card is-scrollbar-hidden min-w-full overflow-x-auto">
        {isLoading && haveData && (
          <div className="bg-[#f8fafc] absolute w-full h-full flex items-center justify-center">
            <div className="spinner h-16 m-auto w-16 animate-spin rounded-full border-4 border-primary border-r-transparent dark:border-accent dark:border-r-transparent"></div>
          </div>
        )}
        <table className="w-full is-hoverable text-left">
          <thead>
            <tr>
              <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                {haveData ? "Kalemler" : "Veri Bulunamadı"}
              </th>
              {balance.map((item, i) => (
                <th
                  key={i}
                  className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  {item.endDate.fmt}
                </th>
              ))}
            </tr>
          </thead>
          {haveData ? (
            <tbody>
              {balance.map((item, i) => (
                <tr key={i}>
                  <td id="cash" className="whitespace-nowrap px-4 py-3 sm:px-5">
                    {item.cash?.fmt}
                  </td>
                  <td
                    id="shortTermInvestments"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.shortTermInvestments?.fmt}
                  </td>
                  <td
                    id="netReceivables"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.netReceivables?.fmt}
                  </td>
                  <td
                    id="inventory"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.inventory?.fmt}
                  </td>
                  <td
                    id="otherCurrentAssets"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.otherCurrentAssets?.fmt}
                  </td>
                  <td
                    id="totalCurrentAssets"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalCurrentAssets?.fmt}
                  </td>
                  <td
                    id="longTermInvestments"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.longTermInvestments?.fmt}
                  </td>
                  <td
                    id="propertyPlantEquipment"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.propertyPlantEquipment?.fmt}
                  </td>
                  <td
                    id="goodWill"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.goodWill?.fmt}
                  </td>
                  <td
                    id="intangibleAssets"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.intangibleAssets?.fmt}
                  </td>
                  <td
                    id="otherAssets"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.otherAssets?.fmt}
                  </td>
                  <td
                    id="deferredLongTermAssetCharges"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.deferredLongTermAssetCharges?.fmt}
                  </td>
                  <td
                    id="totalAssets"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalAssets?.fmt}
                  </td>
                  <td
                    id="accountsPayable"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.accountsPayable?.fmt}
                  </td>
                  <td
                    id="shortLongTermDebt"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.shortLongTermDebt?.fmt}
                  </td>
                  <td
                    id="otherCurrentLiab"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.otherCurrentLiab?.fmt}
                  </td>
                  <td
                    id="longTermDebt"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.longTermDebt?.fmt}
                  </td>
                  <td
                    id="otherLiab"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.otherLiab?.fmt}
                  </td>
                  <td
                    id="minorityInterest"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.minorityInterest?.fmt}
                  </td>
                  <td
                    id="totalCurrentLiabilities"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalCurrentLiabilities?.fmt}
                  </td>
                  <td
                    id="totalLiab"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalLiab?.fmt}
                  </td>
                  <td
                    id="commonStock"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.commonStock?.fmt}
                  </td>
                  <td
                    id="retainedEarnings"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.retainedEarnings?.fmt}
                  </td>
                  <td
                    id="treasuryStock"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.treasuryStock?.fmt}
                  </td>
                  <td
                    id="capitalSurplus"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.capitalSurplus?.fmt}
                  </td>
                  <td
                    id="otherStockholderEquity"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.otherStockholderEquity?.fmt}
                  </td>
                  <td
                    id="netTangibleAssets"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.netTangibleAssets?.fmt}
                  </td>
                  <td
                    id="totalStockholderEquity"
                    className="whitespace-nowrap px-4 py-3 sm:px-5"
                  >
                    {item.totalStockholderEquity?.fmt}
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
