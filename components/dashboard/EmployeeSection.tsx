"use client"

import { useState } from "react"
import "./DashboardSections.css"

export default function EmployeeSection() {
  const [activeTab, setActiveTab] = useState("active")
  const [showAssignModal, setShowAssignModal] = useState(false)

  // Mock data for employees
  const employees = [
    { id: 1, name: "Maria Rodriguez", role: "Housekeeping", status: "on-duty", shift: "Morning" },
    { id: 2, name: "James Wilson", role: "Housekeeping", status: "on-duty", shift: "Morning" },
    { id: 3, name: "Sarah Johnson", role: "Housekeeping", status: "off-duty", shift: "Evening" },
    { id: 4, name: "John Technician", role: "Maintenance", status: "on-duty", shift: "Morning" },
    { id: 5, name: "Emily Clark", role: "Front Desk", status: "on-duty", shift: "Morning" },
    { id: 6, name: "Michael Brown", role: "Front Desk", status: "off-duty", shift: "Evening" },
    { id: 7, name: "Lisa Anderson", role: "Kitchen", status: "on-duty", shift: "Morning" },
    { id: 8, name: "Robert Davis", role: "Kitchen", status: "off-duty", shift: "Evening" },
  ]

  const activeEmployees = employees.filter((emp) => emp.status === "on-duty")

  return (
    <div className="dashboard-module">
      <div className="module-header">
        <h2>
          Total Employees <span className="count-badge">{employees.length}</span>
        </h2>
        <div className="module-tabs">
          <button
            className={`tab-btn ${activeTab === "active" ? "active" : ""}`}
            onClick={() => setActiveTab("active")}
          >
            Active On Duty
          </button>
          <button
            className={`tab-btn ${activeTab === "assign" ? "active" : ""}`}
            onClick={() => setActiveTab("assign")}
          >
            Quick Assign
          </button>
        </div>
      </div>

      <div className="module-content">
        {activeTab === "active" && (
          <div className="active-employees">
            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-label">On Duty</div>
                <div className="stat-value">{activeEmployees.length}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Off Duty</div>
                <div className="stat-value">{employees.length - activeEmployees.length}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Morning Shift</div>
                <div className="stat-value">{employees.filter((e) => e.shift === "Morning").length}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Evening Shift</div>
                <div className="stat-value">{employees.filter((e) => e.shift === "Evening").length}</div>
              </div>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Shift</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {activeEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>
                      <span className="status-pill on-duty">On Duty</span>
                    </td>
                    <td>{employee.shift}</td>
                    <td>
                      <button className="action-btn small">Contact</button>
                      <button className="action-btn small primary">Assign Task</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "assign" && (
          <div className="quick-assign">
            <div className="assign-form">
              <div className="form-group">
                <label>Task Type</label>
                <select className="form-control">
                  <option>Housekeeping</option>
                  <option>Maintenance</option>
                  <option>Room Service</option>
                  <option>Guest Assistance</option>
                </select>
              </div>

              <div className="form-group">
                <label>Priority</label>
                <select className="form-control">
                  <option>Normal</option>
                  <option>Urgent</option>
                  <option>Low</option>
                </select>
              </div>

              <div className="form-group">
                <label>Location</label>
                <select className="form-control">
                  <option>Room 101</option>
                  <option>Room 102</option>
                  <option>Room 103</option>
                  <option>Lobby</option>
                  <option>Restaurant</option>
                  <option>Pool Area</option>
                </select>
              </div>

              <div className="form-group">
                <label>Assign To</label>
                <select className="form-control">
                  <option>Auto Assign</option>
                  {activeEmployees.map((emp) => (
                    <option key={emp.id}>
                      {emp.name} ({emp.role})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" rows={3} placeholder="Describe the task..."></textarea>
              </div>

              <button className="btn primary full-width">Assign Task</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}