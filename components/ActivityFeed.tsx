import "./ActivityFeed.css"

type Activity = {
  id: number
  type: string
  room: string
  message: string
  time: string
}

export default function ActivityFeed() {
  // In a real app, this would come from an API
  const activities: Activity[] = [
    { id: 1, type: "request", room: "204", message: "Requested extra towels", time: "10 mins ago" },
    { id: 2, type: "checkin", room: "305", message: "New guest checked in", time: "25 mins ago" },
    { id: 3, type: "food", room: "118", message: "Ordered room service", time: "45 mins ago" },
    { id: 4, type: "housekeeping", room: "210", message: "Room cleaning completed", time: "1 hour ago" },
    { id: 5, type: "maintenance", room: "412", message: "AC repair requested", time: "2 hours ago" },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "request":
        return "📝"
      case "checkin":
        return "🔑"
      case "food":
        return "🍽️"
      case "housekeeping":
        return "🧹"
      case "maintenance":
        return "🔧"
      default:
        return "📌"
    }
  }

  return (
    <div className="activity-feed card">
      <h2>Recent Activity</h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <div className="activity-icon">{getActivityIcon(activity.type)}</div>
            <div className="activity-content">
              <div className="activity-header">
                <span className="room-number">Room {activity.room}</span>
                <span className="activity-time">{activity.time}</span>
              </div>
              <p className="activity-message">{activity.message}</p>
              <div className="activity-actions">
                <button className="action-btn success">Mark as Done</button>
                <button className="action-btn primary">Call Room</button>
                <button className="action-btn warning">Get Help</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="view-all-btn">View All Activity</button>
    </div>
  )
}
