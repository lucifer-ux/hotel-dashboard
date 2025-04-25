"use client"

import { useState } from "react"
import "./DashboardSections.css"

export default function GuestSection() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for guests
  const guestsByRoom = [
    { room: "101", guests: ["John Smith", "Sarah Smith"], checkIn: "May 10", checkOut: "May 15" },
    { room: "102", guests: ["Michael Brown"], checkIn: "May 11", checkOut: "May 14" },
    { room: "104", guests: ["Emily Johnson", "David Johnson", "Amy Johnson"], checkIn: "May 9", checkOut: "May 16" },
    { room: "106", guests: ["Robert Wilson", "Jennifer Wilson"], checkIn: "May 8", checkOut: "May 18" },
    { room: "108", guests: ["Lisa Anderson"], checkIn: "May 12", checkOut: "May 15" },
  ]

  const totalGuests = guestsByRoom.reduce((total, room) => total + room.guests.length, 0)

  return (
    <div className="dashboard-module">
      <div className="module-header">
        <h2>
          Total Guests <span className="count-badge">{totalGuests}</span>
        </h2>
        <div className="module-tabs">
          <button
            className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`tab-btn ${activeTab === "byRoom" ? "active" : ""}`}
            onClick={() => setActiveTab("byRoom")}
          >
            By Room
          </button>
        </div>
      </div>

      <div className="module-content">
        {activeTab === "overview" && (
          <div className="guest-overview">
            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-label">Total Rooms Occupied</div>
                <div className="stat-value">{guestsByRoom.length}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Average Guests/Room</div>
                <div className="stat-value">{(totalGuests / guestsByRoom.length).toFixed(1)}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Order Rate</div>
                <div className="stat-value">3</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Check-outs Today</div>
                <div className="stat-value">2</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "byRoom" && (
          <div className="guests-by-room">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Room</th>
                  <th>Guests</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {guestsByRoom.map((room) => (
                  <tr key={room.room}>
                    <td>{room.room}</td>
                    <td>
                      {room.guests.map((guest, index) => (
                        <div key={index}>{guest}</div>
                      ))}
                    </td>
                    <td>{room.checkIn}</td>
                    <td>{room.checkOut}</td>
                    <td>
                      <button className="action-btn small">Details</button>
                      <button className="action-btn small primary">Message</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
