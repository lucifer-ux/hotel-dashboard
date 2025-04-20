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
    { day: "May 8", value: 13800 },
    { day: "May 9", value: 12900 },
    { day: "May 10", value: 11500 },
    { day: "May 11", value: 12200 },
    { day: "May 12", value: 13100 },
    { day: "May 13", value: 14500 },
    { day: "May 14", value: 15200 },
    { day: "May 15", value: 14800 },
    { day: "May 16", value: 13700 },
    { day: "May 17", value: 12600 },
    { day: "May 18", value: 11900 },
    { day: "May 19", value: 12300 },
    { day: "May 20", value: 13400 },
    { day: "May 21", value: 14100 },
    { day: "May 22", value: 15300 },
    { day: "May 23", value: 14700 },
    { day: "May 24", value: 13600 },
    { day: "May 25", value: 12700 },
    { day: "May 26", value: 11800 },
    { day: "May 27", value: 12400 },
    { day: "May 28", value: 13500 },
    { day: "May 29", value: 14300 },
    { day: "May 30", value: 15400 },
  ],
  occupancy: [
    { day: "May 1", value: 75 },
    { day: "May 2", value: 78 },
    { day: "May 3", value: 72 },
    { day: "May 4", value: 70 },
    { day: "May 5", value: 82 },
    { day: "May 6", value: 88 },
    { day: "May 7", value: 92 },
    { day: "May 8", value: 90 },
    { day: "May 9", value: 85 },
    { day: "May 10", value: 80 },
    { day: "May 11", value: 82 },
    { day: "May 12", value: 85 },
    { day: "May 13", value: 88 },
    { day: "May 14", value: 92 },
    { day: "May 15", value: 95 },
    { day: "May 16", value: 90 },
    { day: "May 17", value: 85 },
    { day: "May 18", value: 80 },
    { day: "May 19", value: 82 },
    { day: "May 20", value: 85 },
    { day: "May 21", value: 88 },
    { day: "May 22", value: 92 },
    { day: "May 23", value: 90 },
    { day: "May 24", value: 85 },
    { day: "May 25", value: 80 },
    { day: "May 26", value: 78 },
    { day: "May 27", value: 82 },
    { day: "May 28", value: 85 },
    { day: "May 29", value: 88 },
    { day: "May 30", value: 90 },
  ],
  averageRate: [
    { day: "May 1", value: 145 },
    { day: "May 2", value: 148 },
    { day: "May 3", value: 142 },
    { day: "May 4", value: 140 },
    { day: "May 5", value: 152 },
    { day: "May 6", value: 158 },
    { day: "May 7", value: 162 },
    { day: "May 8", value: 160 },
    { day: "May 9", value: 155 },
    { day: "May 10", value: 150 },
    { day: "May 11", value: 152 },
    { day: "May 12", value: 155 },
    { day: "May 13", value: 158 },
    { day: "May 14", value: 162 },
    { day: "May 15", value: 165 },
    { day: "May 16", value: 160 },
    { day: "May 17", value: 155 },
    { day: "May 18", value: 150 },
    { day: "May 19", value: 152 },
    { day: "May 20", value: 155 },
    { day: "May 21", value: 158 },
    { day: "May 22", value: 162 },
    { day: "May 23", value: 160 },
    { day: "May 24", value: 155 },
    { day: "May 25", value: 150 },
    { day: "May 26", value: 148 },
    { day: "May 27", value: 152 },
    { day: "May 28", value: 155 },
    { day: "May 29", value: 158 },
    { day: "May 30", value: 160 },
  ],
  checkIns: [
    { day: "May 1", value: 18 },
    { day: "May 2", value: 15 },
    { day: "May 3", value: 12 },
    { day: "May 4", value: 10 },
    { day: "May 5", value: 22 },
    { day: "May 6", value: 28 },
    { day: "May 7", value: 32 },
    { day: "May 8", value: 30 },
    { day: "May 9", value: 25 },
    { day: "May 10", value: 20 },
    { day: "May 11", value: 22 },
    { day: "May 12", value: 25 },
    { day: "May 13", value: 28 },
    { day: "May 14", value: 32 },
    { day: "May 15", value: 35 },
    { day: "May 16", value: 30 },
    { day: "May 17", value: 25 },
    { day: "May 18", value: 20 },
    { day: "May 19", value: 22 },
    { day: "May 20", value: 25 },
    { day: "May 21", value: 28 },
    { day: "May 22", value: 32 },
    { day: "May 23", value: 30 },
    { day: "May 24", value: 25 },
    { day: "May 25", value: 20 },
    { day: "May 26", value: 18 },
    { day: "May 27", value: 22 },
    { day: "May 28", value: 25 },
    { day: "May 29", value: 28 },
    { day: "May 30", value: 30 },
  ],
}

type ChartType = "revenue" | "occupancy" | "averageRate" | "checkIns"

interface DashboardChartsProps {
  activeChart: ChartType
}

export default function DashboardCharts({ activeChart }: DashboardChartsProps) {
  const [timeRange, setTimeRange] = useState("week")

  // Get the appropriate data based on the active chart
  const chartData = mockData[activeChart]

  // For week view, show 7 days, for month view show all data
  const displayData = timeRange === "week" ? chartData.slice(0, 7) : chartData

  // Find the maximum value for scaling
  const maxValue = Math.max(...displayData.map((item) => item.value))
  // Round up to a nice number for the y-axis
  const yAxisMax = Math.ceil(maxValue / 5) * 5

  // Get chart title and y-axis label based on active chart
  const getChartInfo = () => {
    switch (activeChart) {
      case "revenue":
        return { title: "Daily Revenue", yLabel: "Revenue ($)", color: "#3498db" }
      case "occupancy":
        return { title: "Occupancy Rate", yLabel: "Occupancy (%)", color: "#2ecc71" }
      case "averageRate":
        return { title: "Average Daily Rate", yLabel: "Rate ($)", color: "#e74c3c" }
      case "checkIns":
        return { title: "Daily Check-ins", yLabel: "Check-ins", color: "#f39c12" }
      default:
        return { title: "Chart Data", yLabel: "Value", color: "#3498db" }
    }
  }

  const { title, yLabel, color } = getChartInfo()

  // Generate y-axis labels
  const yAxisLabels = []
  const yAxisStep = yAxisMax / 5
  for (let i = 5; i >= 0; i--) {
    yAxisLabels.push(Math.round(i * yAxisStep))
  }

  // Format the value based on chart type
  const formatValue = (value: number) => {
    if (activeChart === "revenue" || activeChart === "averageRate") {
      return `$${value.toLocaleString()}`
    }
    return value.toString()
  }

  // Get day labels (short form)
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
          {/* Y-axis labels */}
          <div className="y-axis-labels">
            {yAxisLabels.map((label, index) => (
              <div key={index} className="y-axis-label">
                {label}
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="chart-area">
            {/* Horizontal grid lines */}
            {yAxisLabels.map((_, index) => (
              <div key={index} className="h-grid-line"></div>
            ))}

            {/* Line graph */}
            <svg className="line-graph" viewBox={`0 0 ${displayData.length * 50} 200`} preserveAspectRatio="none">
              <polyline
                points={displayData
                  .map((item, index) => `${index * 50 + 25},${200 - (item.value / yAxisMax) * 200}`)
                  .join(" ")}
                fill="none"
                stroke={color}
                strokeWidth="3"
              />

              {/* Data points */}
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

            {/* X-axis labels */}
            <div className="x-axis-labels">
              {displayData.map((item, index) => (
                <div key={index} className="x-axis-label">
                  {timeRange === "week" ? getDayLabel(item.day) : item.day.split(" ")[1]}
                </div>
              ))}
            </div>

            {/* Days label */}
            <div className="days-label">DAYS</div>
          </div>
        </div>
      </div>
    </div>
  )
}
