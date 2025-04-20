"use client"

export default function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Booking</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Check-in Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label>Check-out Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Room Type</label>
              <select className="form-control">
                <option>Standard</option>
                <option>Deluxe</option>
                <option>Suite</option>
                <option>Executive</option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of Guests</label>
              <input type="number" className="form-control" min="1" max="6" defaultValue="1" />
            </div>
          </div>
          <div className="form-group">
            <label>Special Requests</label>
            <textarea className="form-control" rows={3}></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary">Create Booking</button>
        </div>
      </div>
    </div>
  )
}
