import React from "react";
import CountUp from "react-countup";

function Widgets({ indices }) {
  const indicesData = indices.quoteResponse.result;
  return (
    <>
      {(indicesData || []).map((item, key) => (
        <div className="col-lg-3 col-md-4" key={key}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar-sm flex-shrink-0">
                  <span className="avatar-title bg-light text-primary rounded-circle fs-3">
                    <i className={"align-middle " + item.icon}></i>
                    {item.shortName === "BIST 100" ? (
                      <div className="flex-shrink-0 avatar-sm">
                        <span className="avatar-title bg-light p-1 rounded-circle">
                          <img
                            src="/assets/images/stocks/bist100.jpg"
                            className="img-fluid rounded-circle"
                            alt=""
                          />
                        </span>
                      </div>
                    ) : item.shortName === "BIST 30" ? (
                      <div className="flex-shrink-0 avatar-sm">
                        <span className="avatar-title bg-light p-1 rounded-circle">
                          <img
                            src="/assets/images/stocks/bist30.jpg"
                            className="img-fluid rounded-circle"
                            alt=""
                          />
                        </span>
                      </div>
                    ) : item.shortName === "BIST BANKA" ? (
                      <div className="flex-shrink-0 avatar-sm">
                        <span className="avatar-title bg-light p-1 rounded-circle">
                          <img
                            src="/assets/images/stocks/xbank.png"
                            className="img-fluid rounded-circle"
                            alt=""
                          />
                        </span>
                      </div>
                    ) : (
                      <div className="flex-shrink-0 avatar-sm">
                        <span className="avatar-title bg-light p-1 rounded-circle">
                          <img
                            src="/assets/images/stocks/dolar.jpg"
                            className="img-fluid rounded-circle"
                            alt=""
                          />
                        </span>
                      </div>
                    )}
                  </span>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-uppercase fw-bold fs-13 text-muted mb-1">
                    {item.shortName}
                  </p>
                  <h4 className=" mb-0">
                    <span className="counter-value">
                      {item.regularMarketPrice.toLocaleString("tr-TR")}
                    </span>
                  </h4>
                </div>
                <div className="flex-shrink-0 align-self-end">
                  <span
                    className={
                      item.regularMarketChangePercent > 0
                        ? "badge badge-soft-success"
                        : "badge badge-soft-danger"
                    }
                  >
                    <i
                      className={
                        item.regularMarketChangePercent > 0
                          ? "ri-arrow-up-s-fill align-middle me-1"
                          : "ri-arrow-down-s-fill align-middle me-1"
                      }
                    ></i>
                    {item.regularMarketChangePercent.toFixed(2)} %<span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Widgets;
