"use client"

export default function NotificationModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Send Notification</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Recipient</label>
            <select className="form-control">
              <option>All Guests</option>
              <option>Room 204 - John Smith</option>
              <option>Room 305 - Emily Johnson</option>
              <option>Room 118 - Michael Brown</option>
              <option>Room 412 - Sarah Davis</option>
              <option>All Staff</option>
            </select>
          </div>
          <div className="form-group">
            <label>Notification Type</label>
            <select className="form-control">
              <option>General Information</option>
              <option>Urgent Notice</option>
              <option>Maintenance Alert</option>
              <option>Special Offer</option>
              <option>Event Reminder</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows={5}></textarea>
          </div>
          <div className="form-group">
            <label>Schedule</label>
            <select className="form-control">
              <option>Send Immediately</option>
              <option>Schedule for Later</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary">Send Notification</button>
        </div>
      </div>
    </div>
  )
}
