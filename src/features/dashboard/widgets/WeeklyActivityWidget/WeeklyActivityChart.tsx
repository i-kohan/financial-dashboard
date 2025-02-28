import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface WeeklyActivityChartProps {
  data: { day: string; deposit: number; withdraw: number }[];
}

export const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({
  data,
}) => {
  const chartData = {
    labels: data.map((d) => d.day),
    datasets: [
      {
        label: "Deposit",
        data: data.map((d) => d.deposit),
        backgroundColor: "rgb(59, 130, 246)",
        borderRadius: 6,
        barThickness: 10,
      },
      {
        label: "Withdraw",
        data: data.map((d) => d.withdraw),
        backgroundColor: "rgb(0, 0, 0)",
        borderRadius: 6,
        barThickness: 10,
      },
    ],
  };

  return (
    <Bar
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            position: "top" as const,
            align: "end",
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              padding: 20,
            },
          },
          tooltip: {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#000",
            bodyColor: "#000",
            titleFont: { weight: "bold" },
            bodyFont: { size: 14 },
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: 1,
            cornerRadius: 6,
            padding: 8,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              color: "rgba(200, 200, 200, 0.2)",
            },
            ticks: {
              stepSize: 100,
            },
          },
        },
      }}
    />
  );
};
