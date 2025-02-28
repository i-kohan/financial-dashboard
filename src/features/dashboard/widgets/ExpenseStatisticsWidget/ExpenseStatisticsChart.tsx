import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";
import React from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface ExpenseStatisticsChartProps {
  data: { category: string; value: number; color: string }[];
}

export const ExpenseStatisticsChart: React.FC<ExpenseStatisticsChartProps> = ({
  data,
}) => {
  const chartData = {
    labels: data.map((d) => d.category),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: data.map((d) => d.color),
        borderColor: "#fff",
      },
    ],
  };

  return (
    <Pie
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: "#fff",
            font: {
              family: "Inter",
              weight: "bold",
              size: 13,
            },
            textAlign: "center",
            formatter: (value: number, ctx: Context) => {
              const label = ctx.chart.data.labels?.[ctx.dataIndex] as string;
              return `${value}%\n${label}`;
            },
          },
        },
      }}
    />
  );
};
