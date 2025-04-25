import { Coffee, Plus, ClipboardList, Edit, AlertTriangle, CheckCircle, Calendar, Trash2, Clock } from "lucide-react"

export default function OtherAmenities() {
  // In a real app, this would come from an API
  const amenities = [
    { id: 1, name: "Spa & Wellness Center", status: "active", hours: "9:00 AM - 8:00 PM", location: "2nd Floor" },
    { id: 2, name: "Business Center", status: "active", hours: "24/7", location: "Lobby Level" },
    { id: 3, name: "Tennis Court", status: "active", hours: "7:00 AM - 9:00 PM", location: "Outdoor Area" },
    { id: 4, name: "Kids Play Area", status: "active", hours: "9:00 AM - 7:00 PM", location: "3rd Floor" },
    { id: 5, name: "Conference Room A", status: "maintenance", hours: "8:00 AM - 10:00 PM", location: "1st Floor" },
    { id: 6, name: "Rooftop Lounge", status: "active", hours: "4:00 PM - 12:00 AM", location: "Rooftop" },
  ]

  const bookings = [
    {
      id: 1,
      amenity: "Spa & Wellness Center",
      guest: "Emily Johnson",
      room: "305",
      time: "2:00 PM - 3:30 PM",
      date: "Today",
      status: "confirmed",
    },
    {
      id: 2,
      amenity: "Tennis Court",
      guest: "John Smith",
      room: "204",
      time: "10:00 AM - 11:00 AM",
      date: "Tomorrow",
      status: "confirmed",
    },
    {
      id: 3,
      amenity: "Conference Room A",
      guest: "Michael Brown",
      room: "118",
      time: "1:00 PM - 3:00 PM",
      date: "May 15, 2023",
      status: "pending",
    },
  ]

  return (
    <div className="other-amenities amenity-dashboard">
      <div>
        <div className="amenity-card">
          <div className="amenity-card-header">
            <h2>
              <Coffee size={20} /> Other Amenities Overview
            </h2>
            <button className="amenity-btn primary">
              <Plus size={16} /> Add Amenity
            </button>
          </div>

          <div className="amenity-stats">
            <div className="stat-box">
              <div className="stat-value">6</div>
              <div className="stat-label">Total Amenities</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">5</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">1</div>
              <div className="stat-label">Under Maintenance</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">3</div>
              <div className="stat-label">Bookings Today</div>
            </div>
          </div>

          <table className="schedule-table">
            <thead>
              <tr>
                <th>Amenity</th>
                <th>Status</th>
                <th>Operating Hours</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {amenities.map((amenity) => (
                <tr key={amenity.id}>
                  <td>{amenity.name}</td>
                  <td>
                    <span className={`status-pill ${amenity.status}`}>
                      {amenity.status === "active" ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
                      {amenity.status}
                    </span>
                  </td>
                  <td>{amenity.hours}</td>
                  <td>{amenity.location}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="icon-btn">
                        <ClipboardList size={16} />
                      </button>
                      <button className="icon-btn">
                        <Edit size={16} />
                      </button>
                      {amenity.status === "active" ? (
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
      </div>

      <div>
        <div className="amenity-card">
          <div className="amenity-card-header">
            <h2>
              <Calendar size={20} /> Current Bookings
            </h2>
            <button className="amenity-btn primary">
              <Plus size={16} /> New Booking
            </button>
          </div>

          <div className="reservations-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="reservation-card">
                <div className="reservation-header">
                  <div className="reservation-guest">
                    {booking.guest} (Room {booking.room})
                  </div>
                  <div className="reservation-time">{booking.date}</div>
                </div>
                <div className="reservation-details">
                  <div>Amenity: {booking.amenity}</div>
                  <div>Time: {booking.time}</div>
                  <div>
                    Status:{" "}
                    <span className={`status-pill ${booking.status}`}>
                      {booking.status === "confirmed" ? <CheckCircle size={12} /> : <Clock size={12} />}
                      {booking.status}
                    </span>
                  </div>
                </div>
                <div className="reservation-actions">
                  <button className="amenity-btn">
                    <Edit size={16} /> Edit
                  </button>
                  <button className="amenity-btn primary">
                    <CheckCircle size={16} /> Confirm
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
            <ClipboardList size={20} /> Add Special Request
          </h2>
          <div className="form-group">
            <label>Amenity</label>
            <select className="form-control">
              <option>Select Amenity</option>
              {amenities.map((amenity) => (
                <option key={amenity.id}>{amenity.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Room Number</label>
            <input type="text" className="form-control" placeholder="Enter room number" />
          </div>
          <div className="form-group">
            <label>Request Details</label>
            <textarea className="form-control" rows={3} placeholder="Enter special request details"></textarea>
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select className="form-control">
              <option>Normal</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
          </div>
          <button className="amenity-btn primary">
            <Plus size={16} /> Submit Request
          </button>
        </div>
      </div>
    </div>
  )
}
