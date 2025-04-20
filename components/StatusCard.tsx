"use client"

import { useRouter } from "next/navigation"
import "./StatusCard.css"

interface StatusCardProps {
  title: string
  value: string
  icon: string
  color: string
  link: string
}

export default function StatusCard({ title, value, icon, color, link }: StatusCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(link)
  }

  return (
    <div className="status-card clickable" onClick={handleClick}>
      <div className="status-icon" style={{ backgroundColor: color }}>
        <span>{icon}</span>
      </div>
      <div className="status-details">
        <h3>{title}</h3>
        <p className="status-value">{value}</p>
      </div>
    </div>
  )
}
