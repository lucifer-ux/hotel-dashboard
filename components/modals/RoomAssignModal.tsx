"use client"

export default function RoomAssignModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Assign Room</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Guest</label>
            <select className="form-control">
              <option>John Smith (Booking #1234)</option>
              <option>Emily Johnson (Booking #1235)</option>
              <option>Michael Brown (Booking #1236)</option>
              <option>Sarah Davis (Booking #1237)</option>
            </select>
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
              <label>Room Number</label>
              <select className="form-control">
                <option>101 (Available)</option>
                <option>102 (Available)</option>
                <option>105 (Available)</option>
                <option>107 (Available)</option>
              </select>
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
          <div className="form-group">
            <label>Special Instructions</label>
            <textarea className="form-control" rows={3}></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary">Assign Room</button>
        </div>
      </div>
    </div>
  )
}
