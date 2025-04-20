"use client"

import { useState } from "react"
import "./QuickActions.css"
import BookingModal from "./modals/BookingModal"
import RoomAssignModal from "./modals/RoomAssignModal"
import NotificationModal from "./modals/NotificationModal"
import OrderModal from "./modals/OrderModal"
import MaintenanceModal from "./modals/MaintenanceModal"
import CheckoutModal from "./modals/CheckoutModal"

export default function QuickActions() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const actions = [
    { id: 1, label: "Add Booking", icon: "📅", modal: "booking" },
    { id: 2, label: "Assign Room", icon: "🔑", modal: "assign" },
    { id: 3, label: "Send Notification", icon: "🔔", modal: "notification" },
    { id: 4, label: "New Order", icon: "🍽️", modal: "order" },
    { id: 5, label: "Maintenance", icon: "🔧", modal: "maintenance" },
    { id: 6, label: "Checkout", icon: "🚪", modal: "checkout" },
  ]

  const openModal = (modal: string) => {
    setActiveModal(modal)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      <div className="quick-actions card">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          {actions.map((action) => (
            <button key={action.id} className="action-button" onClick={() => openModal(action.modal)}>
              <span className="action-icon">{action.icon}</span>
              <span className="action-label">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeModal === "booking" && <BookingModal onClose={closeModal} />}
      {activeModal === "assign" && <RoomAssignModal onClose={closeModal} />}
      {activeModal === "notification" && <NotificationModal onClose={closeModal} />}
      {activeModal === "order" && <OrderModal onClose={closeModal} />}
      {activeModal === "maintenance" && <MaintenanceModal onClose={closeModal} />}
      {activeModal === "checkout" && <CheckoutModal onClose={closeModal} />}
    </>
  )
}
