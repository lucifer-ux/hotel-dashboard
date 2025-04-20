"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import StatusCard from "@/components/StatusCard"
import ActivityFeed from "@/components/ActivityFeed"
import QuickActions from "@/components/QuickActions"
import SystemStatus from "@/components/SystemStatus"
import StatCard from "@/components/StatCard"
import DashboardCharts from "@/components/DashboardCharts"
import "./dashboard.css"
import ChartModal from "@/components/modals/ChartModal"

type ChartType = "revenue" | "occupancy" | "averageRate" | "checkIns"

export default function Dashboard() {
  const router = useRouter()
  const [activeChart, setActiveChart] = useState<ChartType>("revenue")

  return (
    <div className="dashboard">
      <h1>Hotel Dashboard</h1>

      <div className="analytics-summary">
        <div className="stats-grid">
          <StatCard
            title="Today's Revenue"
            value="$12,450"
            color="#3498db"
            onClick={() => setActiveChart("revenue")}
            isActive={activeChart === "revenue"}
          />
          <StatCard
            title="Occupancy Rate"
            value="80%"
            color="#2ecc71"
            onClick={() => setActiveChart("occupancy")}
            isActive={activeChart === "occupancy"}
          />
          <StatCard
            title="Average Daily Rate"
            value="$156"
            color="#e74c3c"
            onClick={() => setActiveChart("averageRate")}
            isActive={activeChart === "averageRate"}
          />
          <StatCard
            title="Check-ins Today"
            value="24"
            color="#f39c12"
            onClick={() => setActiveChart("checkIns")}
            isActive={activeChart === "checkIns"}
          />
        </div>
         <ChartModal chartType={activeChart}/>
        {/* <DashboardCharts activeChart={activeChart} /> */}
      </div>

      <div className="dashboard-summary">
        <StatusCard title="Occupied Rooms" value="24/30" icon="🏨" color="#3498db" link="/rooms?filter=occupied" />
        <StatusCard title="Pending Requests" value="5" icon="⏳" color="#e74c3c" link="/requests" />
        <StatusCard title="Food Orders" value="12" icon="🍽️" color="#2ecc71" link="/food" />
        <StatusCard title="Housekeeping Alerts" value="3" icon="🧹" color="#f39c12" link="/housekeeping" />
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-col">
          <ActivityFeed />
        </div>
        <div className="dashboard-col">
          <QuickActions />
          <SystemStatus />
        </div>
      </div>
    </div>
  )
}
