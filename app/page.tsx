"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StatusCard from "@/components/StatusCard";
import ActivityFeed from "@/components/ActivityFeed";
import QuickActions from "@/components/QuickActions";
import SystemStatus from "@/components/SystemStatus";
import StatCard from "@/components/StatCard";
import DashboardCharts from "@/components/DashboardCharts";
import "./dashboard.css";
import ChartModal from "@/components/modals/ChartModal";
import GuestSection from "@/components/dashboard/GuestSection";
import EmployeeSection from "@/components/dashboard/EmployeeSection";
import NotificationSection from "@/components/dashboard/NotificationSection";
import PendingRequestsSection from "@/components/dashboard/PendingRequestSection";
import { Plus, Receipt } from "lucide-react";
import QuickActionPanel from "@/components/QuickActionPanel";
import SearchBar from "@/components/SearchBar";

type ChartType = "revenue" | "occupancy" | "upsells" | "orderRate";

export default function Dashboard() {
  const router = useRouter();
  const [activeChart, setActiveChart] = useState<ChartType>("revenue");
  const [guestListVisible, setGuestListVisible] = useState<Boolean>(false);
  const [employeeListVisible, setEmployeeListVisible] =
    useState<Boolean>(false);
  const [notificationListVisible, setNotificationListVisible] =
    useState<Boolean>(false);
  const [pendingRequestsListVisible, setPendingRequestsListVisible] =
    useState<Boolean>(false);

  const handleTotalGuestsClick = () => {
    setGuestListVisible(!guestListVisible);
    setEmployeeListVisible(false);
    setNotificationListVisible(false);
    setPendingRequestsListVisible(false);
  };

  const handleEmployeeListClick = () => {
    setGuestListVisible(false);
    setEmployeeListVisible(!employeeListVisible);
    setNotificationListVisible(false);
    setPendingRequestsListVisible(false);
  };
  const handleNotificationListClick = () => {
    setGuestListVisible(false);
    setEmployeeListVisible(false);
    setNotificationListVisible(!notificationListVisible);
    setPendingRequestsListVisible(false);
  };
  const handlePendingRequestsListClick = () => {
    setGuestListVisible(false);
    setEmployeeListVisible(false);
    setNotificationListVisible(false);
    setPendingRequestsListVisible(!pendingRequestsListVisible);
  };

  const handleGlobalSearch = (query: string, filters: Record<string, string>) => {
    console.log("Global search:", query, "with filters:", filters)
  }

  return (
    <div className="dashboard">
      <div className="dashboard-actions">
        <h1>Hotel Dashboard</h1>
        <SearchBar
            placeholder="Search guests, rooms, or bookings..."
            showFilters={true}
            onSearch={handleGlobalSearch}
            className="global-search"
          />
        <QuickActionPanel />
      </div>
      

      <div className="dashboard-summary">
        <StatusCard
          title="Total Guests"
          value="24/30"
          icon="🏨"
          color="#3498db"
          onClick={handleTotalGuestsClick}
          link="/rooms?filter=occupied"
        />
        <StatusCard
          title="Total Employees"
          value="3"
          icon="🧹"
          color="#f39c12"
          link="/housekeeping"
          onClick={handleEmployeeListClick}
        />
        <StatusCard
          title="Notifications"
          value="12"
          icon="🍽️"
          color="#2ecc71"
          link="/food"
          onClick={handleNotificationListClick}
        />
        <StatusCard
          title="Pending Requests"
          value="5"
          icon="⏳"
          color="#e74c3c"
          link="/requests"
          onClick={handlePendingRequestsListClick}
        />
      </div>

      <div className="dashboard-sections">
        {guestListVisible && (
          <div className="dashboard-section">
            <GuestSection />
          </div>
        )}
        {employeeListVisible && (
          <div className="dashboard-section">
            <EmployeeSection />
          </div>
        )}
        {notificationListVisible && (
          <div className="dashboard-section">
            <NotificationSection />
          </div>
        )}
        {pendingRequestsListVisible && (
          <div className="dashboard-section">
            <PendingRequestsSection />
          </div>
        )}
      </div>

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
            title="Successful upsells"
            value="$156"
            color="#e74c3c"
            onClick={() => setActiveChart("upsells")}
            isActive={activeChart === "upsells"}
          />
          <StatCard
            title="Order Rate"
            value="24"
            color="#f39c12"
            onClick={() => setActiveChart("orderRate")}
            isActive={activeChart === "orderRate"}
          />
        </div>
        <ChartModal chartType={activeChart} />
        {/* <DashboardCharts activeChart={activeChart} /> */}
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-col">
          <ActivityFeed />
        </div>
        <div className="dashboard-col">
          {/* <QuickActions /> */}
          <SystemStatus />
        </div>
      </div>
    </div>
  );
}
