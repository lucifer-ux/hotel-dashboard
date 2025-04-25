import { Settings, LayoutDashboard, Pause, Play } from "lucide-react"
import "./wifi.css"
import { Clipboard, RefreshCcw, Smartphone } from "lucide-react";

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
    <div className="wifi-management">
      <h1>Wi-Fi Management</h1>

      <div className="wifi-dashboard">
        <div className="wifi-networks card">
          <div className="card-header">
            <h2>Networks</h2>
            <button className="small-btn">+ Add Network</button>
          </div>
          <table>
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
                    <span className={`status-pill ${network.status}`}>{network.status}</span>
                  </td>
                  <td>{network.users}</td>
                  <td>{network.bandwidth}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="h-2 w-2"><LayoutDashboard/></button>
                      <button className="h-6 w-6 text-gray-700"
                      ><Settings className="text-red-500"/></button>
                      {network.status === "active" ? (
                        <button className="h-6 w-6"><Pause/></button>
                      ) : (
                        <button className="h-6 w-6"><Play/></button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="guest-access card">
          <div className="card-header">
            <h2>Guest Access</h2>
            <button className="small-btn">+ New Access</button>
          </div>
          <table>
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
                      <button className="h-4 w-4"><RefreshCcw/></button>
                      <button className="h-4 w-4"><Smartphone/></button>
                      <button className="h-4 w-4"><Clipboard/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="wifi-qr card">
          <h2>Generate Wi-Fi QR Code</h2>
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
            <button className="generate-btn">Generate QR Code</button>
          </div>
          <div className="qr-placeholder">
            <div className="qr-code">QR Code will appear here</div>
            <button className="print-btn">Print QR Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}
