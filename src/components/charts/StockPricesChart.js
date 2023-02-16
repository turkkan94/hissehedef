"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function StockPricesChart({ stockPriceSeries }) {
  var options = {
    chart: {
      defaultLocale: "tr",
      locales: [
        {
          name: "tr",
          options: {
            months: [
              "Ocak",
              "Şuba",
              "Mart",
              "Nisan",
              "Mayıs",
              "Haziran",
              "Temmuz",
              "Ağustos",
              "Eylül",
              "Ekim",
              "Kasım",
              "Aralık",
            ],
            shortMonths: [
              "Ock",
              "Şub",
              "Mar",
              "Nis",
              "May",
              "Haz",
              "Tem",
              "Ağu",
              "Eyl",
              "Eki",
              "Kas",
              "Ara",
            ],
            days: [
              "Pazar",
              "Pazartesi",
              "Salı",
              "Çarşamba",
              "Perşembe",
              "Cuma",
              "Cumartesi",
            ],
            shortDays: ["Pzr", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmr"],
            toolbar: {
              download: "SVG İndir",
              selection: "Seçim",
              selectionZoom: "Selection Zoom",
              zoomIn: "Yakınlaş",
              zoomOut: "Uzaklaş",
              pan: "Panning",
              reset: "Sıfırla",
            },
          },
        },
      ],
      type: "candlestick",
      height: 294,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#67b173",
          downward: "#f17171",
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: false,
      },
      labels: {
        formatter: function (value) {
          return "₺" + value.toFixed(2);
        },
      },
    },
  };
  const series = [
    {
      data: stockPriceSeries,
    },
  ];
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="candlestick"
      height={294}
      width="100%"
      className="apex-charts"
    />
  );
}
