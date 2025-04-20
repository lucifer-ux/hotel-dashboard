import "./housekeeping.css"

export default function HousekeepingAlerts() {
  // In a real app, this would come from an API
  const alerts = [
    {
      id: 1,
      room: 103,
      type: "cleaning",
      status: "in-progress",
      assignedTo: "Maria Rodriguez",
      startTime: "10:15 AM",
      estimatedCompletion: "10:45 AM",
    },
    {
      id: 2,
      room: 107,
      type: "maintenance",
      status: "pending",
      assignedTo: "John Technician",
      startTime: "Scheduled 11:00 AM",
      estimatedCompletion: "11:30 AM",
    },
    {
      id: 3,
      room: 204,
      type: "special-request",
      status: "pending",
      assignedTo: "Unassigned",
      startTime: "Requested 9:30 AM",
      estimatedCompletion: "N/A",
    },
  ]

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "cleaning":
        return "🧹"
      case "maintenance":
        return "🔧"
      case "special-request":
        return "📝"
      default:
        return "⚠️"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="badge badge-warning">Pending</span>
      case "in-progress":
        return <span className="badge badge-primary">In Progress</span>
      case "completed":
        return <span className="badge badge-success">Completed</span>
      default:
        return <span className="badge">{status}</span>
    }
  }

  // In a real app, this would come from an API
  const cleaningSchedule = [
    { id: 1, room: 101, status: "completed", time: "8:00 AM", staff: "Maria Rodriguez" },
    { id: 2, room: 102, status: "completed", time: "8:30 AM", staff: "Maria Rodriguez" },
    { id: 3, room: 103, status: "in-progress", time: "10:15 AM", staff: "Maria Rodriguez" },
    { id: 4, room: 104, status: "scheduled", time: "11:00 AM", staff: "James Wilson" },
    { id: 5, room: 105, status: "scheduled", time: "11:30 AM", staff: "James Wilson" },
    { id: 6, room: 106, status: "scheduled", time: "1:00 PM", staff: "Sarah Johnson" },
    { id: 7, room: 107, status: "scheduled", time: "1:30 PM", staff: "Sarah Johnson" },
    { id: 8, room: 108, status: "scheduled", time: "2:00 PM", staff: "Sarah Johnson" },
  ]

  return (
    <div className="housekeeping-alerts">
      <h1>Housekeeping & Maintenance</h1>

      <div className="tab-container">
        <div className="tab-header">
          <button className="tab-btn active">Alerts</button>
          <button className="tab-btn">Cleaning Schedule</button>
          <button className="tab-btn">Maintenance Log</button>
          <button className="tab-btn">Staff Assignments</button>
        </div>

        <div className="tab-content active">
          <h2>Active Alerts</h2>
          <div className="alerts-list">
            {alerts.map((alert) => (
              <div key={alert.id} className="alert-card">
                <div className="alert-icon">{getAlertIcon(alert.type)}</div>
                <div className="alert-details">
                  <div className="alert-header">
                    <h3>Room {alert.room}</h3>
                    {getStatusBadge(alert.status)}
                  </div>
                  <div className="alert-info">
                    <p>
                      <strong>Type:</strong> {alert.type}
                    </p>
                    <p>
                      <strong>Assigned to:</strong> {alert.assignedTo}
                    </p>
                    <p>
                      <strong>Start time:</strong> {alert.startTime}
                    </p>
                    <p>
                      <strong>Est. completion:</strong> {alert.estimatedCompletion}
                    </p>
                  </div>
                  <div className="alert-actions">
                    <button className="action-btn success">Mark Complete</button>
                    <button className="action-btn primary">Reassign</button>
                    <button className="action-btn warning">Escalate</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="new-alert-btn">+ New Alert</button>
        </div>

        <div className="tab-content">
          <h2>Today's Cleaning Schedule</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Room</th>
                <th>Time</th>
                <th>Staff</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cleaningSchedule.map((item) => (
                <tr key={item.id}>
                  <td>Room {item.room}</td>
                  <td>{item.time}</td>
                  <td>{item.staff}</td>
                  <td>
                    <span className={`status-pill ${item.status}`}>{item.status}</span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="action-btn small">Edit</button>
                      <button className="action-btn small success">Complete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
