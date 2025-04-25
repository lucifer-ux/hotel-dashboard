"use client"

import { useState } from "react"
import "./DashboardCharts.css"

// Mock data for the charts
const mockData = {
  revenue: [
    { day: "May 1", value: 10450 },
    { day: "May 2", value: 11200 },
    { day: "May 3", value: 9800 },
    { day: "May 4", value: 10300 },
    { day: "May 5", value: 12500 },
    { day: "May 6", value: 14200 },
    { day: "May 7", value: 15100 },
  ],
  occupancy: [
    { day: "May 1", value: 75 },
    { day: "May 2", value: 78 },
    { day: "May 3", value: 72 },
    { day: "May 4", value: 70 },
    { day: "May 5", value: 82 },
    { day: "May 6", value: 88 },
    { day: "May 7", value: 92 },
  ],
  upsells: [
    { day: "May 1", value: 850 },
    { day: "May 2", value: 920 },
    { day: "May 3", value: 780 },
    { day: "May 4", value: 1050 },
    { day: "May 5", value: 1250 },
    { day: "May 6", value: 1420 },
    { day: "May 7", value: 2050 },
  ],
  orderRate: [
    { day: "May 1", value: 2.5 },
    { day: "May 2", value: 2.8 },
    { day: "May 3", value: 3.2 },
    { day: "May 4", value: 2.7 },
    { day: "May 5", value: 3.5 },
    { day: "May 6", value: 4.1 },
    { day: "May 7", value: 3.8 },
  ],
}

type ChartType = "revenue" | "occupancy" | "upsells" | "orderRate"

interface DashboardChartsProps {
  activeChart: ChartType
}

export default function DashboardCharts({ activeChart }: DashboardChartsProps) {
  const [timeRange, setTimeRange] = useState("week")

  const chartData = mockData[activeChart]

  const displayData = timeRange === "week" ? chartData.slice(0, 7) : chartData

  const maxValue = Math.max(...displayData.map((item) => item.value))
  const yAxisMax = Math.ceil(maxValue / 5) * 5

  const getChartInfo = () => {
    switch (activeChart) {
      case "revenue":
        return { title: "Daily Revenue", yLabel: "Revenue ($)", color: "#3498db" }
      case "occupancy":
        return { title: "Occupancy Rate", yLabel: "Occupancy (%)", color: "#2ecc71" }
      case "upsells":
        return { title: "Successful Upsells", yLabel: "Revenue ($)", color: "#e74c3c" }
      case "orderRate":
        return { title: "Order Rate per Room", yLabel: "Orders", color: "#f39c12" }
      default:
        return { title: "Chart Data", yLabel: "Value", color: "#3498db" }
    }
  }

  const { title, yLabel, color } = getChartInfo()

  const yAxisLabels = []
  const yAxisStep = yAxisMax / 5
  for (let i = 5; i >= 0; i--) {
    yAxisLabels.push(Math.round(i * yAxisStep))
  }

  const formatValue = (value: number) => {
    if (activeChart === "revenue" || activeChart === "upsells") {
      return `$${value.toLocaleString()}`
    }
    return value.toString()
  }

  const getDayLabel = (day: string) => {
    const date = new Date(day)
    return date.toLocaleDateString("en-US", { weekday: "short" })
  }

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2>
          {title} - {timeRange === "week" ? "Last 7 Days" : "Last 30 Days"}
        </h2>
        <div className="chart-controls">
          <button
            className={`chart-range-btn ${timeRange === "week" ? "active" : ""}`}
            onClick={() => setTimeRange("week")}
          >
            Week
          </button>
          <button
            className={`chart-range-btn ${timeRange === "month" ? "active" : ""}`}
            onClick={() => setTimeRange("month")}
          >
            Month
          </button>
        </div>
      </div>

      <div className="line-chart">
        <div className="chart-title-bar">
          <span>{title}</span>
        </div>

        <div className="chart-grid">
          <div className="y-axis-labels">
            {yAxisLabels.map((label, index) => (
              <div key={index} className="y-axis-label">
                {label}
              </div>
            ))}
          </div>

          <div className="chart-area">
            {yAxisLabels.map((_, index) => (
              <div key={index} className="h-grid-line"></div>
            ))}

            <svg className="line-graph" viewBox={`0 0 ${displayData.length * 50} 200`} preserveAspectRatio="none">
              <polyline
                points={displayData
                  .map((item, index) => `${index * 50 + 25},${200 - (item.value / yAxisMax) * 200}`)
                  .join(" ")}
                fill="none"
                stroke={color}
                strokeWidth="3"
              />

              {displayData.map((item, index) => (
                <g key={index}>
                  <circle
                    cx={index * 50 + 25}
                    cy={200 - (item.value / yAxisMax) * 200}
                    r="5"
                    fill="white"
                    stroke={color}
                    strokeWidth="2"
                  />
                  <text
                    x={index * 50 + 25}
                    y={200 - (item.value / yAxisMax) * 200 - 10}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#666"
                  >
                    {formatValue(item.value)}
                  </text>
                </g>
              ))}
            </svg>

            <div className="x-axis-labels">
              {displayData.map((item, index) => (
                <div key={index} className="x-axis-label">
                  {timeRange === "week" ? getDayLabel(item.day) : item.day.split(" ")[1]}
                </div>
              ))}
            </div>

            <div className="days-label">DAYS</div>
          </div>
        </div>
      </div>
    </div>
  )
}
