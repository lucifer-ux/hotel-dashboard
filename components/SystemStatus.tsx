import "./SystemStatus.css"

export default function SystemStatus() {
  const systems = [
    { id: 1, name: "Wi-Fi Network", status: "operational", uptime: "99.9%" },
    { id: 2, name: "Room Automation", status: "operational", uptime: "98.5%" },
    { id: 3, name: "POS System", status: "operational", uptime: "100%" },
    { id: 4, name: "Security System", status: "issue", uptime: "95.2%" },
  ]

  return (
    <div className="system-status card">
      <h2>System Health</h2>
      <ul className="status-list">
        {systems.map((system) => (
          <li key={system.id} className="status-item">
            <div className="status-info">
              <span className="status-name">{system.name}</span>
              <span className="status-uptime">{system.uptime}</span>
            </div>
            <div className={`status-indicator ${system.status}`}>
              {system.status === "operational" ? "Operational" : "Issue Detected"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
