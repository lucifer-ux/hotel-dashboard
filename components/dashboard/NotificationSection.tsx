"use client"

import { useState } from "react"
import "./DashboardSections.css"

export default function NotificationSection() {
  const [notificationType, setNotificationType] = useState("email")

  return (
    <div className="dashboard-module">
      <div className="module-header">
        <h2>Notifications</h2>
      </div>

      <div className="module-content">
        <div className="notification-form">
          <div className="form-group">
            <label>Notification Type</label>
            <div className="toggle-buttons">
              <button
                className={`toggle-btn ${notificationType === "email" ? "active" : ""}`}
                onClick={() => setNotificationType("email")}
              >
                Email
              </button>
              <button
                className={`toggle-btn ${notificationType === "sms" ? "active" : ""}`}
                onClick={() => setNotificationType("sms")}
              >
                SMS
              </button>
              <button
                className={`toggle-btn ${notificationType === "both" ? "active" : ""}`}
                onClick={() => setNotificationType("both")}
              >
                Both
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Recipients</label>
            <select className="form-control">
              <option>All Guests</option>
              <option>Specific Rooms</option>
              <option>Checking Out Today</option>
              <option>Checking In Today</option>
            </select>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" className="form-control" placeholder="Notification subject..." />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows={4} placeholder="Enter your message..."></textarea>
          </div>

          <div className="form-group">
            <label>Schedule</label>
            <select className="form-control">
              <option>Send Immediately</option>
              <option>Schedule for Later</option>
            </select>
          </div>

          <button className="btn primary full-width">Send Notification</button>
        </div>

        <div className="recent-notifications">
          <h3>Recent Notifications</h3>
          <div className="notification-list">
            <div className="notification-item">
              <div className="notification-time">10:30 AM</div>
              <div className="notification-content">
                <div className="notification-title">Welcome Message</div>
                <div className="notification-desc">Sent to all guests checking in today</div>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-time">Yesterday</div>
              <div className="notification-content">
                <div className="notification-title">Pool Maintenance</div>
                <div className="notification-desc">Notified all guests about pool closure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
