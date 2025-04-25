"use client"

import { useState } from "react"
import { Wifi, PocketIcon as Pool, Dumbbell, Coffee } from "lucide-react"
import "./amenities.css"
import WifiManagement from "./tabs/WifiManagement"
import PoolManagement from "./tabs/PoolManagement"
import GymManagement from "./tabs/GymManagement"
import OtherAmenities from "./tabs/OtherAminities"

export default function AmenitiesManagement() {
  const [activeTab, setActiveTab] = useState("wifi")

  return (
    <div className="amenities-management">
      <h1>Amenities Management</h1>

      <div className="amenities-tabs">
        <button
          className={`amenity-tab-btn ${activeTab === "wifi" ? "active" : ""}`}
          onClick={() => setActiveTab("wifi")}
        >
          <Wifi className="tab-icon" size={18} />
          <span>WiFi Management</span>
        </button>
        <button
          className={`amenity-tab-btn ${activeTab === "pool" ? "active" : ""}`}
          onClick={() => setActiveTab("pool")}
        >
          <Pool className="tab-icon" size={18} />
          <span>Swimming Pool</span>
        </button>
        <button
          className={`amenity-tab-btn ${activeTab === "gym" ? "active" : ""}`}
          onClick={() => setActiveTab("gym")}
        >
          <Dumbbell className="tab-icon" size={18} />
          <span>Gym & Fitness</span>
        </button>
        <button
          className={`amenity-tab-btn ${activeTab === "other" ? "active" : ""}`}
          onClick={() => setActiveTab("other")}
        >
          <Coffee className="tab-icon" size={18} />
          <span>Other Amenities</span>
        </button>
      </div>

      <div className="amenity-content">
        {activeTab === "wifi" && <WifiManagement />}
        {activeTab === "pool" && <PoolManagement />}
        {activeTab === "gym" && <GymManagement />}
        {activeTab === "other" && <OtherAmenities />}
      </div>
    </div>
  )
}
