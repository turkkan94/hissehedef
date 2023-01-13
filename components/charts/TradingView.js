"use client";
import Script from "next/script";
import React, { useEffect, useRef } from "react";

function TradingView({ symbol }) {
  let tvScriptLoadingPromise;
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_bbd8a") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BIST:" + symbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "tr",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_bbd8a",
        });
      }
    }
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center">
            <h5 className="card-title mb-0">📊 Fiyat Grafiği</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="w-100 mb-2">
            <div className="tradingview-widget-container">
              <div id="tradingview_bbd8a" style={{ height: 537 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TradingView;
