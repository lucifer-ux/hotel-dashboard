"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import "./rooms.css"

export default function RoomCommunication() {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get("filter")

  const [activeFilter, setActiveFilter] = useState(filterParam || "all")

  // In a real app, this would come from an API
  const rooms = [
    { id: 101, guest: "John Smith", status: "occupied", requests: 2, checkIn: "May 10", checkOut: "May 15" },
    { id: 102, guest: "Emily Johnson", status: "occupied", requests: 0, checkIn: "May 11", checkOut: "May 14" },
    { id: 103, guest: null, status: "cleaning", requests: 0, checkIn: null, checkOut: null },
    { id: 104, guest: "Sarah Davis", status: "occupied", requests: 1, checkIn: "May 9", checkOut: "May 16" },
    { id: 105, guest: null, status: "vacant", requests: 0, checkIn: null, checkOut: null },
    { id: 106, guest: "Jennifer Lee", status: "occupied", requests: 3, checkIn: "May 8", checkOut: "May 18" },
    { id: 107, guest: null, status: "maintenance", requests: 0, checkIn: null, checkOut: null },
    { id: 108, guest: "Lisa Anderson", status: "occupied", requests: 0, checkIn: "May 12", checkOut: "May 15" },
  ]

  const getStatusClass = (status: string) => {
    switch (status) {
      case "occupied":
        return "status-occupied"
      case "vacant":
        return "status-vacant"
      case "cleaning":
        return "status-cleaning"
      case "maintenance":
        return "status-maintenance"
      default:
        return ""
    }
  }

  const filteredRooms = rooms.filter((room) => {
    if (activeFilter === "all") return true
    if (activeFilter === "occupied") return room.status === "occupied"
    if (activeFilter === "vacant") return room.status === "vacant"
    if (activeFilter === "maintenance") return room.status === "maintenance"
    if (activeFilter === "cleaning") return room.status === "cleaning"
    if (activeFilter === "requests") return room.requests > 0
    return true
  })

  return (
    <div className="room-communication">
      <h1>Room Communication & Notifications</h1>

      <div className="room-filters">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search rooms or guests..." />
        </div>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Rooms
          </button>
          <button
            className={`filter-btn ${activeFilter === "occupied" ? "active" : ""}`}
            onClick={() => setActiveFilter("occupied")}
          >
            Occupied
          </button>
          <button
            className={`filter-btn ${activeFilter === "requests" ? "active" : ""}`}
            onClick={() => setActiveFilter("requests")}
          >
            With Requests
          </button>
          <button
            className={`filter-btn ${activeFilter === "maintenance" ? "active" : ""}`}
            onClick={() => setActiveFilter("maintenance")}
          >
            Maintenance
          </button>
          <button
            className={`filter-btn ${activeFilter === "vacant" ? "active" : ""}`}
            onClick={() => setActiveFilter("vacant")}
          >
            Vacant
          </button>
        </div>
      </div>

      <div className="rooms-grid">
        {filteredRooms.map((room) => (
          <div key={room.id} className={`room-card ${getStatusClass(room.status)}`}>
            <div className="room-header">
              <h3>Room {room.id}</h3>
              <span className={`room-status ${room.status}`}>{room.status}</span>
            </div>
            <div className="room-content">
              {room.status === "occupied" && (
                <>
                  <p className="guest-name">{room.guest}</p>
                  <p className="stay-dates">
                    <small>
                      Check-in: {room.checkIn} | Check-out: {room.checkOut}
                    </small>
                  </p>
                  {room.requests > 0 && (
                    <div className="request-badge">
                      {room.requests} {room.requests === 1 ? "request" : "requests"}
                    </div>
                  )}
                </>
              )}
              {room.status === "vacant" && <p className="room-message">Ready for check-in</p>}
              {room.status === "cleaning" && <p className="room-message">Housekeeping in progress</p>}
              {room.status === "maintenance" && <p className="room-message">Under maintenance</p>}
            </div>
            <div className="room-actions">
              <button className="room-btn">Details</button>
              {room.status === "occupied" && <button className="room-btn primary">Send Message</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
