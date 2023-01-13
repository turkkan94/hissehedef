"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

function BarCharts({ dataSet }) {
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

  const colors = dataInput.map((value) =>
    value < 0 ? "rgba(241,113,113,1)" : "rgba(56,103,190,1)"
  );

  const data = {
    labels: time.reverse(),
    datasets: [
      {
        label: dataSet.title,
        data: dataInput.reverse(),
        backgroundColor: colors.reverse(),
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
        position: "top",
        align: "center",
        labels: {
          color: "#878a99",
          font: {
            family: "hkgrotesk",
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(122,131,140,0.2)",
        },
        ticks: {
          color: "#878a99",
          font: {
            family: "hkgrotesk",
          },
        },
      },
      y: {
        grid: {
          color: "rgba(122,131,140,0.2)",
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <>
      <div className="row">
        <Bar data={data} options={options} />
      </div>
    </>
  );
}

export default BarCharts;
