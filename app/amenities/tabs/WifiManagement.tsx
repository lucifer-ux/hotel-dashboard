import {
    Wifi,
    WifiOff,
    Plus,
    BarChart3,
    Settings,
    Pause,
    Play,
    RefreshCw,
    Smartphone,
    ClipboardList,
    QrCode,
    Printer,
  } from "lucide-react"
  
  export default function WifiManagement() {
    // In a real app, this would come from an API
    const wifiNetworks = [
      { id: 1, name: "Hotel-Guest", status: "active", users: 24, bandwidth: "100 Mbps" },
      { id: 2, name: "Hotel-Premium", status: "active", users: 8, bandwidth: "250 Mbps" },
      { id: 3, name: "Hotel-Staff", status: "active", users: 12, bandwidth: "150 Mbps" },
      { id: 4, name: "Conference-Room", status: "inactive", users: 0, bandwidth: "200 Mbps" },
    ]
  
    const guestAccess = [
      { id: 1, room: 204, name: "John Smith", devices: 2, plan: "Basic", expires: "05/15/2023 12:00 PM" },
      { id: 2, room: 305, name: "Emily Johnson", devices: 3, plan: "Premium", expires: "05/16/2023 10:00 AM" },
      { id: 3, room: 118, name: "Michael Brown", devices: 1, plan: "Basic", expires: "05/14/2023 11:00 AM" },
      { id: 4, room: 412, name: "Sarah Davis", devices: 4, plan: "Premium", expires: "05/17/2023 09:00 AM" },
    ]
  
    return (
      <div className="wifi-management amenity-dashboard">
        <div>
          <div className="amenity-card">
            <div className="amenity-card-header">
              <h2>
                <Wifi size={20} /> WiFi Networks
              </h2>
              <div className="amenity-status">
                <div className="status-indicator active"></div>
                <span className="status-text active">System Online</span>
              </div>
            </div>
  
            <div className="amenity-stats">
              <div className="stat-box">
                <div className="stat-value">4</div>
                <div className="stat-label">Total Networks</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">44</div>
                <div className="stat-label">Connected Users</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">700 Mbps</div>
                <div className="stat-label">Total Bandwidth</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">98.5%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
  
            <div className="amenity-actions">
              <button className="amenity-btn primary">
                <Plus size={16} /> Add Network
              </button>
              <button className="amenity-btn">
                <BarChart3 size={16} /> Run Diagnostics
              </button>
              <button className="amenity-btn">
                <BarChart3 size={16} /> View Usage Reports
              </button>
            </div>
  
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Network Name</th>
                  <th>Status</th>
                  <th>Active Users</th>
                  <th>Bandwidth</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {wifiNetworks.map((network) => (
                  <tr key={network.id}>
                    <td>{network.name}</td>
                    <td>
                      <span className={`status-pill ${network.status}`}>
                        {network.status === "active" ? <Wifi size={12} /> : <WifiOff size={12} />}
                        {network.status}
                      </span>
                    </td>
                    <td>{network.users}</td>
                    <td>{network.bandwidth}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="icon-btn">
                          <BarChart3 size={16} />
                        </button>
                        <button className="icon-btn">
                          <Settings size={16} />
                        </button>
                        {network.status === "active" ? (
                          <button className="icon-btn danger">
                            <Pause size={16} />
                          </button>
                        ) : (
                          <button className="icon-btn success">
                            <Play size={16} />
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
            <div className="amenity-card-header">
              <h2>
                <Smartphone size={20} /> Guest Access
              </h2>
              <button className="amenity-btn primary">
                <Plus size={16} /> New Access
              </button>
            </div>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Room</th>
                  <th>Guest</th>
                  <th>Devices</th>
                  <th>Plan</th>
                  <th>Expires</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {guestAccess.map((guest) => (
                  <tr key={guest.id}>
                    <td>{guest.room}</td>
                    <td>{guest.name}</td>
                    <td>{guest.devices}</td>
                    <td>
                      <span className={`plan-badge ${guest.plan.toLowerCase()}`}>{guest.plan}</span>
                    </td>
                    <td>{guest.expires}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="icon-btn">
                          <RefreshCw size={16} />
                        </button>
                        <button className="icon-btn">
                          <Smartphone size={16} />
                        </button>
                        <button className="icon-btn">
                          <ClipboardList size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  
        <div className="amenity-card">
          <h2>
            <QrCode size={20} /> Generate WiFi QR Code
          </h2>
          <div className="qr-form">
            <div className="form-group">
              <label>Network</label>
              <select className="form-control">
                <option>Hotel-Guest</option>
                <option>Hotel-Premium</option>
                <option>Hotel-Staff</option>
                <option>Conference-Room</option>
              </select>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" value="********" readOnly />
            </div>
            <div className="form-group">
              <label>Expiration</label>
              <select className="form-control">
                <option>24 hours</option>
                <option>48 hours</option>
                <option>Until checkout</option>
                <option>Custom</option>
              </select>
            </div>
            <button className="amenity-btn primary">
              <QrCode size={16} /> Generate QR Code
            </button>
          </div>
          <div className="qr-placeholder">
            <div className="qr-code">QR Code will appear here</div>
            <button className="amenity-btn">
              <Printer size={16} /> Print QR Code
            </button>
          </div>
        </div>
      </div>
    )
  }
  