import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export type ChartType = "revenue" | "occupancy" | "averageRate" | "checkIns";

interface ChartProps {
  chartType: ChartType;
}

const ChartModal: React.FC<ChartProps> = ({ chartType }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);

    // X-axis days from 1 to 30
    const days = Array.from({ length: 30 }, (_, i) => (i + 1).toString());

    // Generate synthetic data
    const data = Array.from({ length: 30 }, () => {
      switch (chartType) {
        case "revenue":
          return Math.floor(Math.random() * 12000);
        case "occupancy":
          return Math.floor(Math.random() * 90 + 10); // 10% - 100%
        case "averageRate":
          return Math.floor(Math.random() * 1000);
        case "checkIns":
          return Math.floor(Math.random() * 80);
        default:
          return 0;
      }
    });

    const yAxisOptions = {
      revenue: {
        min: 0,
        max: 12000,
        axisLabel: { formatter: "${value}" }
      },
      occupancy: {
        min: 10,
        max: 100,
        axisLabel: { formatter: "{value}%" }
      },
      averageRate: {
        min: 0,
        max: 1000,
        axisLabel: { formatter: "${value}" }
      },
      checkIns: {
        min: 0,
        max: 80,
        axisLabel: { formatter: "{value}" }
      }
    };

    const getChartOption = (): echarts.EChartsOption => ({
      tooltip: {
        trigger: "axis",
        position: (pt: any) => [pt[0], "10%"]
      },
      title: {
        left: "center",
        text: `${chartType[0].toUpperCase() + chartType.slice(1)} Chart`
      },
      toolbox: {
        feature: {
          dataZoom: { yAxisIndex: "none" },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: days
      },
      yAxis: {
        type: "value",
        ...yAxisOptions[chartType]
      },
      dataZoom: [
        { type: "inside", start: 0, end: 100 },
        { start: 0, end: 100 }
      ],
      series: [
        {
          name: chartType,
          type: "line",
          symbol: "circle",
          sampling: "lttb",
          itemStyle: {
            color: "#66b3ff"
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(102,179,255,0.6)" },
              { offset: 1, color: "rgba(102,179,255,0.1)" }
            ])
          },
          data
        }
      ]
    });

    chart.setOption(getChartOption());

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [chartType]);

  return <div ref={chartRef} style={{ height: "400px", width: "100%" }} />;
};

export default ChartModal;
