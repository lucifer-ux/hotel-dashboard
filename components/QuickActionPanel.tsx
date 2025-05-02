"use client"

import { useState } from "react"
import { UserPlus, UtensilsCrossed, Palmtree, Home, LogOut, X } from "lucide-react"
import ImageUploader from "./ImageUploader"
import SearchBar from "./SearchBar"
import "./QuickActionPanel.css"

type ActionType = "check-in" | "menu-item" | "amenity" | "assign-room" | "checkout" | null

export default function QuickActionPanel() {
  const [activeAction, setActiveAction] = useState<ActionType>(null)

  const toggleAction = (action: ActionType) => {
    if (activeAction === action) {
      setActiveAction(null)
    } else {
      setActiveAction(action)
    }
  }

  const closePopup = () => {
    setActiveAction(null)
  }

  const handleSearch = (query: string, filters: Record<string, string>) => {
    console.log("Searching for:", query, "with filters:", filters)
    // Here you would implement the actual search functionality
  }

  return (
    <>
      <div className="quick-action-buttons">
        <button
          className={`quick-action-icon ${activeAction === "check-in" ? "active" : ""}`}
          onClick={() => toggleAction("check-in")}
          title="Check-in Guest"
        >
          <UserPlus size={20} />
        </button>
        <button
          className={`quick-action-icon ${activeAction === "menu-item" ? "active" : ""}`}
          onClick={() => toggleAction("menu-item")}
          title="Add Menu Item"
        >
          <UtensilsCrossed size={20} />
        </button>
        <button
          className={`quick-action-icon ${activeAction === "amenity" ? "active" : ""}`}
          onClick={() => toggleAction("amenity")}
          title="Add Amenity"
        >
          <Palmtree size={20} />
        </button>
        <button
          className={`quick-action-icon ${activeAction === "assign-room" ? "active" : ""}`}
          onClick={() => toggleAction("assign-room")}
          title="Assign Room"
        >
          <Home size={20} />
        </button>
        <button
          className={`quick-action-icon ${activeAction === "checkout" ? "active" : ""}`}
          onClick={() => toggleAction("checkout")}
          title="Checkout Guest"
        >
          <LogOut size={20} />
        </button>
      </div>

      {activeAction && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="quick-action-popup" onClick={(e) => e.stopPropagation()}>
            {activeAction === "check-in" && (
              <>
                <div className="popup-header">
                  <h4>Check-in Guest</h4>
                  <button className="close-popup" onClick={closePopup}>
                    <X size={16} />
                  </button>
                </div>
                <div className="popup-content">
                  <div className="form-group">
                    <label>Guest Name</label>
                    <input type="text" className="form-control" placeholder="Enter guest name" />
                  </div>
                  <div className="form-group">
                    <label>Reservation ID</label>
                    <input type="text" className="form-control" placeholder="Enter reservation ID" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Room Type</label>
                      <select className="form-control">
                        <option>Standard</option>
                        <option>Deluxe</option>
                        <option>Suite</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Room Number</label>
                      <select className="form-control">
                        <option>101</option>
                        <option>102</option>
                        <option>103</option>
                      </select>
                    </div>
                  </div>

                  <ImageUploader label="Guest ID/Passport" description="Upload a photo of guest's ID or passport" />

                  <button className="action-submit-btn">Complete Check-in</button>
                </div>
              </>
            )}

            {activeAction === "menu-item" && (
              <>
                <div className="popup-header">
                  <h4>Add Menu Item</h4>
                  <button className="close-popup" onClick={closePopup}>
                    <X size={16} />
                  </button>
                </div>
                <div className="popup-content">
                  <div className="form-group">
                    <label>Item Name</label>
                    <input type="text" className="form-control" placeholder="Enter item name" />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select className="form-control">
                      <option>Breakfast</option>
                      <option>Lunch</option>
                      <option>Dinner</option>
                      <option>Dessert</option>
                      <option>Beverages</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Price ($)</label>
                      <input type="number" className="form-control" placeholder="0.00" />
                    </div>
                    <div className="form-group">
                      <label>Preparation Time (min)</label>
                      <input type="number" className="form-control" placeholder="15" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows={2} placeholder="Enter item description"></textarea>
                  </div>

                  <ImageUploader label="Food Image" description="Upload a photo of the menu item" />

                  <button className="action-submit-btn">Add Menu Item</button>
                </div>
              </>
            )}

            {activeAction === "amenity" && (
              <>
                <div className="popup-header">
                  <h4>Add Amenity</h4>
                  <button className="close-popup" onClick={closePopup}>
                    <X size={16} />
                  </button>
                </div>
                <div className="popup-content">
                  <div className="form-group">
                    <label>Amenity Name</label>
                    <input type="text" className="form-control" placeholder="Enter amenity name" />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" className="form-control" placeholder="Enter location" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Opening Time</label>
                      <input type="time" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Closing Time</label>
                      <input type="time" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows={2} placeholder="Enter amenity description"></textarea>
                  </div>

                  <ImageUploader label="Amenity Image" description="Upload a photo of the amenity" />

                  <button className="action-submit-btn">Add Amenity</button>
                </div>
              </>
            )}

            {activeAction === "assign-room" && (
              <>
                <div className="popup-header">
                  <h4>Assign Room</h4>
                  <button className="close-popup" onClick={closePopup}>
                    <X size={16} />
                  </button>
                </div>
                <div className="popup-content">
                  <div className="form-group">
                    <label>Guest Name</label>
                    <select className="form-control">
                      <option>John Smith</option>
                      <option>Emily Johnson</option>
                      <option>Michael Brown</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Room Type</label>
                      <select className="form-control">
                        <option>Standard</option>
                        <option>Deluxe</option>
                        <option>Suite</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Room Number</label>
                      <select className="form-control">
                        <option>101</option>
                        <option>102</option>
                        <option>103</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Check-in Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Check-out Date</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>

                  <ImageUploader label="Room Photo" description="Upload a photo of the assigned room" />

                  <button className="action-submit-btn">Assign Room</button>
                </div>
              </>
            )}

            {activeAction === "checkout" && (
              <>
                <div className="popup-header">
                  <h4>Checkout Guest</h4>
                  <button className="close-popup" onClick={closePopup}>
                    <X size={16} />
                  </button>
                </div>
                <div className="popup-content">
                  <SearchBar
                    placeholder="Search for guest by name, room, or phone..."
                    showFilters={true}
                    onSearch={handleSearch}
                  />

                  <div className="form-group">
                    <label>Room Number</label>
                    <select className="form-control">
                      <option>101 - John Smith</option>
                      <option>204 - Emily Johnson</option>
                      <option>305 - Michael Brown</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Outstanding Balance</label>
                    <div className="balance-display">$245.50</div>
                  </div>
                  <div className="form-group">
                    <label>Payment Method</label>
                    <select className="form-control">
                      <option>Credit Card on File</option>
                      <option>Cash</option>
                      <option>New Credit Card</option>
                    </select>
                  </div>
                  <div className="form-group checkbox-group">
                    <input type="checkbox" id="late-checkout" />
                    <label htmlFor="late-checkout">Late checkout (additional fee)</label>
                  </div>

                  <ImageUploader label="Receipt/Invoice" description="Upload a photo of the signed receipt" />

                  <button className="action-submit-btn">Complete Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
