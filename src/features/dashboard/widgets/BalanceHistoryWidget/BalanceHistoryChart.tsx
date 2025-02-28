import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

interface BalanceHistoryChartProps {
  data: { month: string; balance: number }[];
}

export const BalanceHistoryChart: React.FC<BalanceHistoryChartProps> = ({
  data,
}) => {
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: "Balance",
        data: data.map((d) => d.balance),
        borderColor: "rgba(0, 61, 255, 1)",
        tension: 0.5,
        borderWidth: 3,
        pointRadius: 0,
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          x: {
            border: {
              dash: [5, 5],
            },
            grid: {
              display: true,
              color: "rgba(200, 200, 200, 0.3)",
            },
            ticks: {
              color: "#7D7D7D",
            },
          },
          y: {
            border: {
              dash: [5, 5],
            },
            grid: {
              display: true,
              color: "rgba(200, 200, 200, 0.3)",
            },
            ticks: {
              stepSize: 200,
              color: "#7D7D7D",
            },
          },
        },
      }}
    />
  );
};
