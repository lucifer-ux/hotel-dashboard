"use client"

export default function MaintenanceModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Schedule Maintenance</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label>Room Number</label>
              <select className="form-control">
                <option>All Rooms</option>
                <option>101</option>
                <option>102</option>
                <option>103</option>
                <option>104</option>
                <option>105</option>
              </select>
            </div>
            <div className="form-group">
              <label>Maintenance Type</label>
              <select className="form-control">
                <option>Cleaning</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>HVAC</option>
                <option>Furniture</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Priority</label>
              <select className="form-control">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>
            <div className="form-group">
              <label>Assign To</label>
              <select className="form-control">
                <option>Maintenance Team</option>
                <option>Housekeeping</option>
                <option>John (Maintenance)</option>
                <option>Maria (Housekeeping)</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Schedule Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label>Schedule Time</label>
              <input type="time" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows={3}></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary">Schedule Maintenance</button>
        </div>
      </div>
    </div>
  )
}
