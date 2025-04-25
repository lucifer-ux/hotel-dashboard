import {
    PocketIcon as Pool,
    Calendar,
    MessageSquare,
    Clock,
    AlertTriangle,
    Edit,
    Trash2,
    Plus,
    ClipboardList,
  } from "lucide-react"
  
  export default function PoolManagement() {
    // In a real app, this would come from an API
    const poolSchedule = [
      { id: 1, activity: "Open Swim", startTime: "06:00 AM", endTime: "10:00 PM", days: "Daily", status: "active" },
      { id: 2, activity: "Pool Cleaning", startTime: "05:00 AM", endTime: "06:00 AM", days: "Daily", status: "active" },
      {
        id: 3,
        activity: "Aqua Fitness",
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        days: "Mon, Wed, Fri",
        status: "active",
      },
      { id: 4, activity: "Kids Swim", startTime: "02:00 PM", endTime: "04:00 PM", days: "Sat, Sun", status: "active" },
    ]
  
    const poolReservations = [
      { id: 1, guest: "John Smith", room: "204", time: "11:00 AM - 12:00 PM", date: "Today", people: 2 },
      { id: 2, guest: "Emily Johnson", room: "305", time: "01:00 PM - 02:00 PM", date: "Today", people: 3 },
      { id: 3, guest: "Michael Brown", room: "118", time: "10:00 AM - 11:00 AM", date: "Tomorrow", people: 1 },
    ]
  
    return (
      <div className="pool-management amenity-dashboard">
        <div>
          <div className="amenity-card">
            <div className="amenity-card-header">
              <h2>
                <Pool size={20} /> Swimming Pool Status
              </h2>
              <div className="amenity-status">
                <div className="status-indicator active"></div>
                <span className="status-text active">Open</span>
              </div>
            </div>
  
            <div className="amenity-stats">
              <div className="stat-box">
                <div className="stat-value">82°F</div>
                <div className="stat-label">Water Temperature</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">7.4 pH</div>
                <div className="stat-label">Water Quality</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">12</div>
                <div className="stat-label">Current Occupancy</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">30</div>
                <div className="stat-label">Max Capacity</div>
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
              <button className="amenity-btn danger">
                <AlertTriangle size={16} /> Emergency Shutdown
              </button>
            </div>
  
            <h3>Pool Schedule</h3>
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
                {poolSchedule.map((schedule) => (
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
                <Calendar size={20} /> Pool Reservations
              </h2>
              <button className="amenity-btn primary">
                <Plus size={16} /> New Reservation
              </button>
            </div>
  
            <div className="reservations-list">
              {poolReservations.map((reservation) => (
                <div key={reservation.id} className="reservation-card">
                  <div className="reservation-header">
                    <div className="reservation-guest">
                      {reservation.guest} (Room {reservation.room})
                    </div>
                    <div className="reservation-time">{reservation.date}</div>
                  </div>
                  <div className="reservation-details">
                    <div>Time: {reservation.time}</div>
                    <div>Number of People: {reservation.people}</div>
                  </div>
                  <div className="reservation-actions">
                    <button className="amenity-btn">
                      <Edit size={16} /> Edit
                    </button>
                    <button className="amenity-btn danger">
                      <Trash2 size={16} /> Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="amenity-card">
            <h2>
              <ClipboardList size={20} /> Pool Maintenance Log
            </h2>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Performed By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>May 10, 2023</td>
                  <td>Chemical Balance Check</td>
                  <td>John Technician</td>
                </tr>
                <tr>
                  <td>May 9, 2023</td>
                  <td>Filter Cleaning</td>
                  <td>Maria Maintenance</td>
                </tr>
                <tr>
                  <td>May 8, 2023</td>
                  <td>Deep Cleaning</td>
                  <td>Pool Service Co.</td>
                </tr>
              </tbody>
            </table>
            <button className="amenity-btn" style={{ marginTop: "15px" }}>
              <ClipboardList size={16} /> View Full Log
            </button>
          </div>
        </div>
      </div>
    )
  }
  