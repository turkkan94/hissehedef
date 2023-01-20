"use client";
import React, { useState, useEffect } from "react";

function AllStockList({ stocksData }) {
  const [value, setValue] = useState("");
  const [stocks, setStocks] = useState(stocksData);

  useEffect(() => {
    if (value !== "") {
      fetch(`${process.env.MAIN_API}/stocks/?symbol=${value}`)
        .then((res) => res.json())
        .then((data) => {
          setStocks(data);
        });
    }
  }, [value]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="justify-content-between d-flex align-items-center mb-4">
            <h1 className="mb-0 pb-1">Tüm Hisseler</h1>
          </div>
          <div className="mb-4 col-sm-12 col-md-2">
            <input
              className="form-control"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Hisse Ara"
            />
          </div>
          <div className="row row-cols-xxl-5 row-cols-lg-3 row-cols-1">
            {stocks.map((stock) => (
              <div className="col">
                <div className="card card-body">
                  <div className="d-flex mb-4 align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img
                        src={`/assets/stocks/logo/${stock.symbol}.svg`}
                        alt=""
                        className="avatar-md rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <a href={`/hisseler/${stock.symbol}`}>
                      <h6 className="mb-1">{stock.title}</h6>
                      <p className="card-text text-muted text-uppercase">
                        {stock.symbol}
                      </p>
                    </a>
                  </div>
                  <a
                    href={`/hisseler/${stock.symbol}`}
                    className="btn btn-primary btn-sm"
                  >
                    Detaylar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllStockList;
