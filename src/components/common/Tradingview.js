"use client";
import React, { useEffect, useRef } from "react";

export default function Tradingview({ symbol }) {
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
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: true,
          hide_legend: true,
          save_image: false,
          container_id: "tradingview_bbd8a",
        });
      }
    }
  }, []);
  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_bbd8a" style={{ height: 260 }} />
    </div>
  );
}
