"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./Sidebar.css"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    // Update the main content class
    document.querySelector(".main-content")?.classList.toggle("sidebar-collapsed", !collapsed)
  }

  // Add keyboard shortcut (Ctrl+B) to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault() // Prevent default browser behavior
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Set initial main content class
    document.querySelector(".main-content")?.classList.toggle("sidebar-collapsed", collapsed)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [collapsed])

  const menuItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/rooms", label: "Room Communication", icon: "🛎️" },
    { path: "/wifi", label: "Wi-Fi Management", icon: "📶" },
    { path: "/food", label: "Food & Room Service", icon: "🍽️" },
    { path: "/housekeeping", label: "Housekeeping", icon: "🧹" },
    { path: "/billing", label: "Billing & Add-ons", icon: "🧾" },
    { path: "/access", label: "Access Management", icon: "🔐" },
    { path: "/analytics", label: "Analytics", icon: "📈" },
    { path: "/guest-app", label: "Guest Web App", icon: "🌐" },
  ]

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">HotelDash</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {collapsed ? "→" : "←"}
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className={pathname === item.path ? "active" : ""}>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="avatar">👤</div>
          <div className="user-details">
            <p className="user-name">Admin User</p>
            <p className="user-role">Hotel Manager</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
