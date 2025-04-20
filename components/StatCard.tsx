"use client"
import "./StatCard.css"

interface StatCardProps {
  title: string
  value: string
  icon?: string
  color?: string
  onClick: () => void
  isActive: boolean
}

export default function StatCard({ title, value, icon, color = "#3498db", onClick, isActive }: StatCardProps) {
  return (
    <div
      className={`stat-card clickable ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ borderColor: isActive ? color : "transparent" }}
    >
      {icon && (
        <div className="stat-icon" style={{ backgroundColor: color }}>
          <span>{icon}</span>
        </div>
      )}
      <div className="stat-details">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{title}</div>
      </div>
    </div>
  )
}
