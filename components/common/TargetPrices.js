"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { toast } from "react-toastify";
//Import Icons
import FeatherIcon from "feather-icons-react";

function TargetPrices({ EPS, PE, stockQuote }) {
  const [lastBalancePrice, setLastBalancePrice] = useState(0);
  const [sectorPE, setSectorPE] = useState(0);
  const [bist100PE, setBist100PE] = useState(0);
  const [targetPriceSector, setTargetPriceSector] = useState(0);
  const [targetPriceBist, setTargetPriceBist] = useState(0);
  const calculateTargetPrices = (e) => {
    e.preventDefault();
    if (sectorPE == "")
      toast("Hata ! Sektör Ortalama F/K değeri girmelisiniz.", {
        position: "top-right",
        hideProgressBar: true,
        className: "bg-danger text-white",
      });
    if (lastBalancePrice == 0) {
      setTargetPriceSector(
        (sectorPE.replace(",", ".") / PE) * stockQuote.regularMarketPrice
      );
    } else {
      setTargetPriceSector(
        (sectorPE.replace(",", ".") / PE) * lastBalancePrice.replace(",", ".")
      );
    }
    if (bist100PE == "")
      toast("Hata ! Bist 100 Ortalama F/K değeri girmelisiniz.", {
        position: "top-right",
        hideProgressBar: true,
        className: "bg-danger text-white",
      });
    if (lastBalancePrice == 0) {
      setTargetPriceBist(
        (bist100PE.replace(",", ".") / PE) * stockQuote.regularMarketPrice
      );
    } else {
      setTargetPriceBist(
        (bist100PE.replace(",", ".") / PE) * lastBalancePrice.replace(",", ".")
      );
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <form
                  className="d-flex flex-column"
                  onSubmit={calculateTargetPrices}
                >
                  <div className="d-flex flex-row justify-content-between">
                    <div className="me-4">
                      <label htmlFor="basiInput" className="form-label">
                        Bist 100 F/K
                      </label>
                      <input
                        type="float"
                        className="form-control"
                        onChange={(e) => setSectorPE(e.target.value)}
                        placeholder="Rakam giriniz."
                      />
                    </div>
                    <div>
                      <label htmlFor="basiInput" className="form-label">
                        Sektör F/K
                      </label>
                      <input
                        type="float"
                        className="form-control"
                        placeholder="Rakam giriniz."
                        onChange={(e) => setBist100PE(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="exampleInputdate" className="form-label">
                      Son Bilanço Tarihi Fiyatı
                    </label>
                    <div className="input-group">
                      <input
                        type="float"
                        className="form-control"
                        onChange={(e) => setLastBalancePrice(e.target.value)}
                        placeholder="Fiyat girilmezse güncel fiyat baz alınır."
                      />
                      <span className="input-group-text">₺</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light mt-3"
                  >
                    Hesapla
                  </button>
                </form>
                {/* <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-soft-info rounded-circle fs-2">
                      <FeatherIcon icon="settings" className="text-info" />
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card card-animate">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-semibold text-muted mb-0">
                    Sektör F/K Ortalamasına Göre
                  </p>
                  <h2 className="mt-4 ff-secondary fw-semibold">
                    <span className="counter-value">
                      <CountUp
                        start={0}
                        end={targetPriceSector}
                        decimals={1}
                        duration={4}
                      />
                      0
                    </span>
                    ₺
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="badge bg-light text-success mb-0">
                      <i className="ri-arrow-up-line align-middle"></i>{" "}
                      {(
                        (targetPriceSector / stockQuote.regularMarketPrice -
                          1) *
                        100
                      ).toFixed(2)}
                      %
                    </span>{" "}
                    getiri potansiyeli.
                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-soft-info rounded-circle fs-2">
                      <FeatherIcon icon="users" className="text-info" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card card-animate">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-semibold text-muted mb-0">
                    Bist 100 F/K Ortalamasına Göre
                  </p>
                  <h2 className="mt-4 ff-secondary fw-semibold">
                    <span className="counter-value">
                      <CountUp
                        start={0}
                        end={targetPriceBist}
                        decimals={1}
                        duration={4}
                      />
                      0
                    </span>
                    ₺
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="badge bg-light text-success mb-0">
                      <i className="ri-arrow-up-line align-middle"></i>{" "}
                      {(
                        (targetPriceBist / stockQuote.regularMarketPrice - 1) *
                        100
                      ).toFixed(2)}
                      %
                    </span>{" "}
                    getiri potansiyeli.
                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-soft-info rounded-circle fs-2">
                      <FeatherIcon icon="users" className="text-info" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card card-animate">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-semibold text-muted mb-0">
                    Özkaynak Artışına Göre
                  </p>
                  <h2 className="mt-4 ff-secondary fw-semibold">
                    <span className="counter-value" data-target="33.48">
                      <CountUp
                        start={0}
                        end={33.48}
                        decimals={2}
                        duration={4}
                      />
                    </span>
                    %
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="badge bg-light text-success mb-0">
                      <i className="ri-arrow-up-line align-middle"></i> 7.05 %
                    </span>{" "}
                    vs. previous month
                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-soft-info rounded-circle fs-2">
                      <FeatherIcon icon="external-link" className="text-info" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card card-animate">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-semibold text-muted mb-0">
                    3 Hesaplamanın Ortalaması
                  </p>
                  <h2 className="mt-4 ff-secondary fw-semibold">
                    <span className="counter-value" data-target="33.48">
                      <CountUp
                        start={0}
                        end={33.48}
                        decimals={2}
                        duration={4}
                      />
                    </span>
                    %
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="badge bg-light text-success mb-0">
                      <i className="ri-arrow-up-line align-middle"></i> 7.05 %
                    </span>{" "}
                    vs. previous month
                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-soft-info rounded-circle fs-2">
                      <FeatherIcon icon="external-link" className="text-info" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TargetPrices;
