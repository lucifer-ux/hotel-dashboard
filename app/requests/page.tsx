import { Bell, ListTodo, Sparkle, Utensils, Wrench, Hotel } from "lucide-react"
import "./requests.css"

export default function PendingRequests() {
  // In a real app, this would come from an API
  const requests = [
    {
      id: 1,
      room: 204,
      guest: "John Smith",
      type: "housekeeping",
      request: "Extra towels needed",
      status: "pending",
      time: "10:25 AM",
    },
    {
      id: 2,
      room: 106,
      guest: "Jennifer Lee",
      type: "maintenance",
      request: "AC not cooling properly",
      status: "assigned",
      time: "09:45 AM",
    },
    {
      id: 3,
      room: 106,
      guest: "Jennifer Lee",
      type: "amenity",
      request: "Extra pillows",
      status: "pending",
      time: "09:30 AM",
    },
    {
      id: 4,
      room: 106,
      guest: "Jennifer Lee",
      type: "food",
      request: "Late night menu options",
      status: "pending",
      time: "08:15 AM",
    },
    {
      id: 5,
      room: 204,
      guest: "John Smith",
      type: "service",
      request: "Wake-up call for 6:00 AM",
      status: "pending",
      time: "Yesterday",
    },
  ]

  const getRequestIcon = (type: string) => {
    switch (type) {
      case "housekeeping":
        return <Sparkle/>
      case "maintenance":
        return <Wrench/>
      case "amenity":
        return <Hotel/>
      case "food":
        return <Utensils/>
      case "service":
        return <Bell/>
      default:
        return <ListTodo/>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="badge badge-warning">Pending</span>
      case "assigned":
        return <span className="badge badge-primary">Assigned</span>
      case "completed":
        return <span className="badge badge-success">Completed</span>
      default:
        return <span className="badge">{status}</span>
    }
  }

  return (
    <div className="pending-requests">
      <h1>Pending Requests</h1>

      <div className="request-filters">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search requests..." />
        </div>
        <div className="filter-buttons">
          <button className="filter-btn active">All Requests</button>
          <button className="filter-btn">Housekeeping</button>
          <button className="filter-btn">Maintenance</button>
          <button className="filter-btn">Food & Beverage</button>
          <button className="filter-btn">Other</button>
        </div>
      </div>

      <div className="requests-list">
        {requests.map((request) => (
          <div key={request.id} className="request-card">
            <div className="request-icon">{getRequestIcon(request.type)}</div>
            <div className="request-details">
              <div className="request-header">
                <h3>
                  Room {request.room} - {request.guest}
                </h3>
                {getStatusBadge(request.status)}
              </div>
              <p className="request-message">{request.request}</p>
              <div className="request-meta">
                <span className="request-type">{request.type}</span>
                <span className="request-time">{request.time}</span>
              </div>
              <div className="request-actions">
                <button className="action-btn success">Mark as Done</button>
                <button className="action-btn primary">Assign Staff</button>
                <button className="action-btn warning">Call Room</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
