"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function BarCharts({ dataSet }) {
  const time = [];
  const dataInput = [];

  for (let i = 0; i < dataSet.data.length; i++) {
    time.push(
      dataSet.data[i].endDate.fmt.split("-")[0] +
        "-" +
        dataSet.data[i].endDate.fmt.split("-")[1]
    );
    dataInput.push(dataSet.data[i][dataSet.key].raw);
  }

  const series = [
    {
      name: dataSet.title,
      data: dataInput.reverse(),
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 250,
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: 0,
              to: 1000000000000000,
              color: "#0ea5e9",
            },
            {
              from: -1000000000000000,
              to: 0,
              color: "#ff5724",
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
      title: {
        text: dataSet.title,
      },
      labels: {
        show: false,
      },
    },
    xaxis: {
      type: "text",
      categories: time.reverse(),
      labels: {
        rotate: -90,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toLocaleString("tr-TR") + "₺";
        },
      },
    },
  };

  return (
    <div className="card flex flex-col rounded-xl p-4 sm:px-5">
      <div className="ml-2">
        <p className="text-slate-700 font-medium text-lg line-clamp-1 dark:text-navy-100">
          {dataSet.title}
        </p>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={275}
        width="100%"
        style={{ marginTop: 0 }}
        className="apex-charts"
      />
    </div>
  );
}
