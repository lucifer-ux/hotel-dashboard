"use client"

import { useState } from "react"
import "./DashboardSections.css"

export default function PendingRequestsSection() {
  const [activeTab, setActiveTab] = useState("all")

  // Mock data for requests
  const requests = [
    { id: 1, type: "food", room: "101", request: "Room service - Club Sandwich", time: "10:15 AM" },
    { id: 2, type: "housekeeping", room: "204", request: "Extra towels needed", time: "10:25 AM" },
    { id: 3, type: "maintenance", room: "106", request: "AC not cooling properly", time: "09:45 AM" },
    { id: 4, type: "food", room: "108", request: "Breakfast order", time: "08:30 AM" },
    { id: 5, type: "other", room: "305", request: "Extra pillows", time: "09:30 AM" },
    { id: 6, type: "maintenance", room: "412", request: "TV remote not working", time: "11:05 AM" },
    { id: 7, type: "housekeeping", room: "203", request: "Room cleaning", time: "11:15 AM" },
  ]

  const filteredRequests = activeTab === "all" ? requests : requests.filter((req) => req.type === activeTab)

  const getTypeCount = (type: string) => {
    return requests.filter((req) => req.type === type).length
  }

  return (
    <div className="dashboard-module">
      <div className="module-header">
        <h2>
          Pending Requests <span className="count-badge">{requests.length}</span>
        </h2>
        <div className="module-tabs">
          <button className={`tab-btn ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
            All
          </button>
          <button className={`tab-btn ${activeTab === "food" ? "active" : ""}`} onClick={() => setActiveTab("food")}>
            Food ({getTypeCount("food")})
          </button>
          <button
            className={`tab-btn ${activeTab === "housekeeping" ? "active" : ""}`}
            onClick={() => setActiveTab("housekeeping")}
          >
            Housekeeping ({getTypeCount("housekeeping")})
          </button>
          <button
            className={`tab-btn ${activeTab === "maintenance" ? "active" : ""}`}
            onClick={() => setActiveTab("maintenance")}
          >
            Maintenance ({getTypeCount("maintenance")})
          </button>
          <button className={`tab-btn ${activeTab === "other" ? "active" : ""}`} onClick={() => setActiveTab("other")}>
            Other ({getTypeCount("other")})
          </button>
        </div>
      </div>

      <div className="module-content">
        <div className="requests-list">
          {filteredRequests.length === 0 ? (
            <div className="empty-state">No pending requests in this category</div>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Room</th>
                  <th>Request</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.room}</td>
                    <td>
                      <div className="request-type">
                        <span className={`request-badge ${request.type}`}>{request.type}</span>
                      </div>
                      <div>{request.request}</div>
                    </td>
                    <td>{request.time}</td>
                    <td>
                      <button className="action-btn small">Assign</button>
                      <button className="action-btn small primary">Complete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
