import "./analytics.css"

export default function Analytics() {
  // In a real app, this would come from an API
  const revenueData = [
    { date: "May 1", amount: 4250 },
    { date: "May 2", amount: 3800 },
    { date: "May 3", amount: 4100 },
    { date: "May 4", amount: 5200 },
    { date: "May 5", amount: 6100 },
    { date: "May 6", amount: 7300 },
    { date: "May 7", amount: 7500 },
  ]

  const occupancyData = [
    { date: "May 1", rate: 75 },
    { date: "May 2", rate: 70 },
    { date: "May 3", rate: 72 },
    { date: "May 4", rate: 80 },
    { date: "May 5", rate: 85 },
    { date: "May 6", rate: 90 },
    { date: "May 7", rate: 88 },
  ]

  const popularRooms = [
    { type: "Deluxe Suite", bookings: 45, revenue: 12600 },
    { type: "Standard Room", bookings: 78, revenue: 9750 },
    { type: "Executive Suite", bookings: 32, revenue: 14400 },
    { type: "Family Room", bookings: 28, revenue: 8400 },
  ]

  const staffPerformance = [
    { name: "Maria Rodriguez", role: "Housekeeping", efficiency: 95, rating: 4.8 },
    { name: "James Wilson", role: "Housekeeping", efficiency: 88, rating: 4.5 },
    { name: "Sarah Johnson", role: "Housekeeping", efficiency: 92, rating: 4.7 },
    { name: "John Technician", role: "Maintenance", efficiency: 90, rating: 4.6 },
  ]

  return (
    <div className="analytics">
      <h1>Advanced Analytics</h1>

      <div className="analytics-filters">
        <div className="form-row">
          <div className="form-group">
            <label>Date Range</label>
            <select className="form-control">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
              <option>Last Month</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div className="form-group">
            <label>Metrics</label>
            <select className="form-control">
              <option>All Metrics</option>
              <option>Revenue Only</option>
              <option>Occupancy Only</option>
              <option>Staff Performance</option>
            </select>
          </div>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="analytics-col">
          <div className="chart-container">
            <h2>Revenue Trend</h2>
            <div className="chart-placeholder">
              Revenue Chart - Last 7 Days
              <br />
              (Visualization would be implemented with a charting library)
            </div>
          </div>

          <div className="chart-container">
            <h2>Occupancy Rate</h2>
            <div className="chart-placeholder">
              Occupancy Chart - Last 7 Days
              <br />
              (Visualization would be implemented with a charting library)
            </div>
          </div>
        </div>

        <div className="analytics-col">
          <div className="card">
            <h2>Key Metrics</h2>
            <div className="metrics-list">
              <div className="metric-item">
                <div className="metric-label">Average Daily Rate</div>
                <div className="metric-value">$156</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">RevPAR</div>
                <div className="metric-value">$124.80</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Average Stay Length</div>
                <div className="metric-value">3.2 days</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Repeat Guests</div>
                <div className="metric-value">24%</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>Popular Room Types</h2>
            <table className="analytics-table">
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Bookings</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {popularRooms.map((room, index) => (
                  <tr key={index}>
                    <td>{room.type}</td>
                    <td>{room.bookings}</td>
                    <td>${room.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Staff Performance</h2>
        <table className="analytics-table">
          <thead>
            <tr>
              <th>Staff Member</th>
              <th>Role</th>
              <th>Efficiency</th>
              <th>Guest Rating</th>
            </tr>
          </thead>
          <tbody>
            {staffPerformance.map((staff, index) => (
              <tr key={index}>
                <td>{staff.name}</td>
                <td>{staff.role}</td>
                <td>{staff.efficiency}%</td>
                <td>{staff.rating}/5.0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
