import Link from "next/link";
import React from "react";

function StockList({ stocksData }) {
  const stocks = stocksData.quoteResponse.result;
  return (
    <>
      <div className="col-xl-12">
        <div className="card card-height-100">
          <div className="card-header align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1 secondFont">
              Bist 100 Hisseleri
            </h4>
          </div>
          <div className="card-body">
            <div className="table-responsive table-card">
              <table className="table table-hover table-borderless table-centered align-middle table-nowrap mb-0">
                <thead className="text-muted bg-soft-light">
                  <tr>
                    <th>Hisse</th>
                    <th className="text-center">Fiyat</th>
                    <th className="text-center">24s Değişim</th>
                    <th className="text-center">Düşük</th>
                    <th className="text-center">Yüksek</th>
                    <th className="text-center">24s Hacim</th>
                  </tr>
                </thead>
                <tbody className="secondFont">
                  {(stocks || []).map((item, key) => (
                    <tr key={key}>
                      <td>
                        <div className="d-flex align-items-center">
                          {/* <div className="me-2">
                            <img src={item.img} alt="" className="avatar-xxs" />
                          </div> */}
                          <div>
                            <h6 className="mb-0">
                              <Link
                                href={`/hisseler/${item.symbol
                                  .split(".")[0]
                                  .toLowerCase()}`}
                              >
                                {item.symbol.split(".")[0]}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        {item.regularMarketPrice}₺
                      </td>
                      <td className="text-center">
                        <h6
                          className={
                            item.regularMarketChangePercent > 0
                              ? "text-success mb-0"
                              : "text-danger mb-0"
                          }
                        >
                          <i
                            className={
                              item.regularMarketChangePercent > 0
                                ? "mdi mdi-trending-up align-middle me-1"
                                : "mdi mdi-trending-down align-middle me-1"
                            }
                          ></i>
                          {item.regularMarketChangePercent.toFixed(2)}
                        </h6>
                      </td>
                      <td className="text-center">
                        {item.regularMarketDayHigh}₺
                      </td>
                      <td className="text-center">
                        {item.regularMarketDayLow}₺
                      </td>
                      <td className="text-center">
                        {item.regularMarketVolume.toLocaleString("tr-TR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockList;
