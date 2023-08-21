import React, { useEffect, useRef } from "react";
import { Chart, ArcElement, Tooltip, ChartDataset, PieController } from "chart.js";

type Props = {
  labels: string[];
  dataSets: ChartDataset<"pie", number[]>[];
};

Chart.register(ArcElement, Tooltip, PieController);

export const PieChart = ({ labels, dataSets }: Props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    let chartInstance: Chart | null = null;

    if (chartRef.current) {
      const context = chartRef.current.getContext("2d");
      if (context) {
        chartInstance = new Chart(context, {
          type: "pie",
          data: {
            labels,
            datasets: dataSets,
          },
          options: {
            responsive: true,
          },
        });
      }
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy()
      }
    }
  }, [labels, dataSets]);

  return <canvas ref={chartRef} />;
};
