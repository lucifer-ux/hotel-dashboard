import {
    Dumbbell,
    MessageSquare,
    Calendar,
    Clock,
    Edit,
    Trash2,
    Plus,
    Wrench,
    ClipboardList,
    CheckCircle,
    AlertTriangle,
    BarChart3,
  } from "lucide-react"
  
  export default function GymManagement() {
    // In a real app, this would come from an API
    const gymSchedule = [
      { id: 1, activity: "Open Gym", startTime: "06:00 AM", endTime: "10:00 PM", days: "Daily", status: "active" },
      {
        id: 2,
        activity: "Yoga Class",
        startTime: "07:00 AM",
        endTime: "08:00 AM",
        days: "Mon, Wed, Fri",
        status: "active",
      },
      {
        id: 3,
        activity: "Personal Training",
        startTime: "09:00 AM",
        endTime: "11:00 AM",
        days: "Tue, Thu",
        status: "active",
      },
      {
        id: 4,
        activity: "Equipment Maintenance",
        startTime: "10:00 PM",
        endTime: "11:00 PM",
        days: "Daily",
        status: "active",
      },
    ]
  
    const equipmentStatus = [
      { id: 1, name: "Treadmill #1", status: "operational", lastMaintenance: "May 1, 2023" },
      { id: 2, name: "Treadmill #2", status: "maintenance", lastMaintenance: "May 10, 2023" },
      { id: 3, name: "Elliptical #1", status: "operational", lastMaintenance: "Apr 28, 2023" },
      { id: 4, name: "Stationary Bike #1", status: "operational", lastMaintenance: "Apr 30, 2023" },
      { id: 5, name: "Weight Bench #1", status: "operational", lastMaintenance: "May 5, 2023" },
      { id: 6, name: "Multi-gym Machine", status: "operational", lastMaintenance: "May 3, 2023" },
    ]
  
    return (
      <div className="gym-management amenity-dashboard">
        <div>
          <div className="amenity-card">
            <div className="amenity-card-header">
              <h2>
                <Dumbbell size={20} /> Gym Status
              </h2>
              <div className="amenity-status">
                <div className="status-indicator active"></div>
                <span className="status-text active">Open</span>
              </div>
            </div>
  
            <div className="amenity-stats">
              <div className="stat-box">
                <div className="stat-value">72°F</div>
                <div className="stat-label">Temperature</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">8</div>
                <div className="stat-label">Current Users</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">20</div>
                <div className="stat-label">Max Capacity</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">5/6</div>
                <div className="stat-label">Equipment Available</div>
              </div>
            </div>
  
            <div className="amenity-actions">
              <button className="amenity-btn primary">
                <MessageSquare size={16} /> Make Announcement
              </button>
              <button className="amenity-btn">
                <Calendar size={16} /> Schedule Maintenance
              </button>
              <button className="amenity-btn warning">
                <Clock size={16} /> Temporary Closure
              </button>
            </div>
  
            <h3>Gym Schedule</h3>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Days</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {gymSchedule.map((schedule) => (
                  <tr key={schedule.id}>
                    <td>{schedule.activity}</td>
                    <td>{schedule.startTime}</td>
                    <td>{schedule.endTime}</td>
                    <td>{schedule.days}</td>
                    <td>
                      <span className={`status-pill ${schedule.status}`}>{schedule.status}</span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="icon-btn">
                          <Edit size={16} />
                        </button>
                        <button className="icon-btn danger">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="amenity-btn primary" style={{ marginTop: "15px" }}>
              <Plus size={16} /> Add Schedule
            </button>
          </div>
        </div>
  
        <div>
          <div className="amenity-card">
            <div className="amenity-card-header">
              <h2>
                <Wrench size={20} /> Equipment Status
              </h2>
              <button className="amenity-btn primary">
                <Plus size={16} /> Add Equipment
              </button>
            </div>
  
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Status</th>
                  <th>Last Maintenance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {equipmentStatus.map((equipment) => (
                  <tr key={equipment.id}>
                    <td>{equipment.name}</td>
                    <td>
                      <span className={`status-pill ${equipment.status}`}>
                        {equipment.status === "operational" ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
                        {equipment.status}
                      </span>
                    </td>
                    <td>{equipment.lastMaintenance}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="icon-btn">
                          <Wrench size={16} />
                        </button>
                        <button className="icon-btn">
                          <ClipboardList size={16} />
                        </button>
                        {equipment.status === "operational" ? (
                          <button className="icon-btn warning">
                            <AlertTriangle size={16} />
                          </button>
                        ) : (
                          <button className="icon-btn success">
                            <CheckCircle size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div className="amenity-card">
            <h2>
              <BarChart3 size={20} /> Gym Usage Analytics
            </h2>
            <div
              className="chart-placeholder"
              style={{
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2c3e50",
                // border: "1px dashed #ddd",
                borderRadius: "8px",
                color: "#6c757d",
                marginBottom: "15px",
              }}
            >
              Usage Chart by Hour
              <br />
              (Visualization would be implemented with a charting library)
            </div>
  
            <div className="amenity-stats">
              <div className="stat-box">
                <div className="stat-value">85</div>
                <div className="stat-label">Daily Users (Avg)</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">7:00 AM</div>
                <div className="stat-label">Peak Time</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">45 min</div>
                <div className="stat-label">Avg Session</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  