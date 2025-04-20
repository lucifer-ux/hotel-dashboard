"use client"

export default function CheckoutModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Guest Checkout</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Room Number</label>
            <select className="form-control">
              <option>204 - John Smith</option>
              <option>305 - Emily Johnson</option>
              <option>118 - Michael Brown</option>
              <option>412 - Sarah Davis</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Check-in Date</label>
              <input type="date" className="form-control" value="2023-05-10" readOnly />
            </div>
            <div className="form-group">
              <label>Check-out Date</label>
              <input type="date" className="form-control" value="2023-05-15" />
            </div>
          </div>
          <div className="form-group">
            <label>Outstanding Balance</label>
            <div className="form-control">$245.50</div>
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <select className="form-control">
              <option>Credit Card on File</option>
              <option>New Credit Card</option>
              <option>Cash</option>
            </select>
          </div>
          <div className="form-group">
            <label>Late Checkout</label>
            <div className="form-row" style={{ alignItems: "center" }}>
              <input type="checkbox" id="late-checkout" />
              <label htmlFor="late-checkout" style={{ marginLeft: "10px" }}>
                Request late checkout (additional fee may apply)
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary">Complete Checkout</button>
        </div>
      </div>
    </div>
  )
}
