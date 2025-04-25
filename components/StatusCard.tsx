"use client"

import { useRouter } from "next/navigation"
import "./StatusCard.css"
import { Bed, Clock, Sparkles, Utensils } from 'lucide-react';

interface StatusCardProps {
  title: string
  value: string
  icon: string
  color: string
  link: string
  onClick: () => void
}

export default function StatusCard({ title, value, icon, color, link, onClick }: StatusCardProps) {
  const router = useRouter()

  const icons = (title: String) => {
    switch (title) {
      case "Occupied Rooms":
        return (
          <Bed className="text-blue-500"/>
        )
      case "Pending Requests":
        return (
          <Clock className="text-yellow-500"/>
        )
      case "Food Orders":
        return (
          <Utensils className="text-red-500"/>
        )
      default:
        return (
          <Sparkles className="text-green-500" />
        )

    }
  }
  return (
    <div className="status-card clickable" onClick={onClick}>
      <div className="status-icon" style={{ backgroundColor: color }}>
        {icons(title)}
      </div>
      <div className="status-details">
        <h3>{title}</h3>
        <p className="status-value">{value}</p>
      </div>
    </div>
  )
}
