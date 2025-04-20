"use client"

export default function OrderModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>New Food Order</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label>Room Number</label>
              <select className="form-control">
                <option>204 - John Smith</option>
                <option>305 - Emily Johnson</option>
                <option>118 - Michael Brown</option>
                <option>412 - Sarah Davis</option>
              </select>
            </div>
            <div className="form-group">
              <label>Order Type</label>
              <select className="form-control">
                <option>Room Service</option>
                <option>Restaurant Reservation</option>
                <option>Special Request</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Menu Items</label>
            <div className="menu-items">
              <div className="form-row" style={{ alignItems: "center" }}>
                <div className="form-group">
                  <select className="form-control">
                    <option>Club Sandwich - $15</option>
                    <option>Caesar Salad - $12</option>
                    <option>Grilled Chicken - $18</option>
                    <option>Pasta Bolognese - $16</option>
                    <option>Cheeseburger - $14</option>
                  </select>
                </div>
                <div className="form-group" style={{ maxWidth: "80px" }}>
                  <input type="number" className="form-control" min="1" defaultValue="1" />
                </div>
                <button className="action-btn">+</button>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Special Instructions</label>
            <textarea className="form-control" rows={3}></textarea>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Delivery Time</label>
              <select className="form-control">
                <option>As Soon As Possible</option>
                <option>Schedule for Later</option>
              </select>
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select className="form-control">
                <option>Charge to Room</option>
                <option>Credit Card</option>
                <option>Cash on Delivery</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary">Place Order</button>
        </div>
      </div>
    </div>
  )
}
