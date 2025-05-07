"use client"

import type React from "react"

import { useState } from "react"
import { X, Upload, Plus, Minus, HelpCircle } from "lucide-react"
import ImageUploader from "./ImageUploader"
import "./BulkUploadPopUp.css"

interface BulkUploadPopupProps {
  onClose: () => void
}

type UploadCategory = "rooms" | "employees" | "amenities" | "menu-items"
type RoomType =
  | "standard-single"
  | "standard-double"
  | "standard-triple"
  | "luxury-single"
  | "luxury-double"
  | "luxury-triple"
  | "suite"
  | "business"
type EmployeeType = "housekeeping" | "cleaning" | "maintenance" | "waiting" | "reception" | "kitchen" | "management"

export default function BulkUploadPopup({ onClose }: BulkUploadPopupProps) {
  const [category, setCategory] = useState<UploadCategory>("rooms")
  const [roomType, setRoomType] = useState<RoomType>("standard-double")
  const [employeeType, setEmployeeType] = useState<EmployeeType>("housekeeping")
  const [itemCount, setItemCount] = useState(5)
  const [showHelp, setShowHelp] = useState(false)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as UploadCategory)
  }

  const handleRoomTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoomType(e.target.value as RoomType)
  }

  const handleEmployeeTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmployeeType(e.target.value as EmployeeType)
  }

  const increaseCount = () => {
    setItemCount((prev) => Math.min(prev + 1, 50))
  }

  const decreaseCount = () => {
    setItemCount((prev) => Math.max(prev - 1, 1))
  }

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value)) {
      setItemCount(Math.max(1, Math.min(value, 50)))
    }
  }

  const toggleHelp = () => {
    setShowHelp(!showHelp)
  }

  const renderCategorySpecificFields = () => {
    switch (category) {
      case "rooms":
        return (
          <>
            <div className="form-group">
              <label>Room Type</label>
              <select className="form-control" value={roomType} onChange={handleRoomTypeChange}>
                <option value="standard-single">Standard Room - Single Occupancy</option>
                <option value="standard-double">Standard Room - Double Occupancy</option>
                <option value="standard-triple">Standard Room - Triple Occupancy</option>
                <option value="luxury-single">Luxury Room - Single Occupancy</option>
                <option value="luxury-double">Luxury Room - Double Occupancy</option>
                <option value="luxury-triple">Luxury Room - Triple Occupancy</option>
                <option value="suite">Suite</option>
                <option value="business">Business Meeting Room</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Starting Room Number</label>
                <input type="number" className="form-control" placeholder="e.g. 101" />
              </div>
              <div className="form-group">
                <label>Floor</label>
                <input type="number" className="form-control" placeholder="e.g. 1" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Base Price ($)</label>
                <input type="number" className="form-control" placeholder="e.g. 150" />
              </div>
              <div className="form-group">
                <label>Size (sq ft)</label>
                <input type="number" className="form-control" placeholder="e.g. 300" />
              </div>
            </div>
            <div className="form-group">
              <label>Amenities (comma separated)</label>
              <input type="text" className="form-control" placeholder="e.g. TV, WiFi, Mini Bar" />
            </div>
          </>
        )
      case "employees":
        return (
          <>
            <div className="form-group">
              <label>Employee Type</label>
              <select className="form-control" value={employeeType} onChange={handleEmployeeTypeChange}>
                <option value="housekeeping">Housekeeping</option>
                <option value="cleaning">Cleaning</option>
                <option value="maintenance">Maintenance</option>
                <option value="waiting">Waiting Tables</option>
                <option value="reception">Reception</option>
                <option value="kitchen">Kitchen Staff</option>
                <option value="management">Management</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Shift</label>
                <select className="form-control">
                  <option>Morning (6AM - 2PM)</option>
                  <option>Afternoon (2PM - 10PM)</option>
                  <option>Night (10PM - 6AM)</option>
                  <option>Custom</option>
                </select>
              </div>
              <div className="form-group">
                <label>Department</label>
                <select className="form-control">
                  <option>Front Office</option>
                  <option>Housekeeping</option>
                  <option>Food & Beverage</option>
                  <option>Maintenance</option>
                  <option>Administration</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Base Salary ($)</label>
                <input type="number" className="form-control" placeholder="e.g. 3000" />
              </div>
              <div className="form-group">
                <label>Working Days</label>
                <select className="form-control">
                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>All Days</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
          </>
        )
      case "amenities":
        return (
          <>
            <div className="form-group">
              <label>Amenity Type</label>
              <select className="form-control">
                <option>Recreational</option>
                <option>Wellness</option>
                <option>Business</option>
                <option>Food & Beverage</option>
                <option>Room Amenities</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input type="text" className="form-control" placeholder="e.g. 2nd Floor" />
              </div>
              <div className="form-group">
                <label>Capacity</label>
                <input type="number" className="form-control" placeholder="e.g. 20" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Opening Hours</label>
                <input type="text" className="form-control" placeholder="e.g. 9AM - 9PM" />
              </div>
              <div className="form-group">
                <label>Price ($)</label>
                <input type="number" className="form-control" placeholder="e.g. 25" />
              </div>
            </div>
          </>
        )
      case "menu-items":
        return (
          <>
            <div className="form-group">
              <label>Menu Category</label>
              <select className="form-control">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Desserts</option>
                <option>Beverages</option>
                <option>Room Service</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Cuisine Type</label>
                <select className="form-control">
                  <option>International</option>
                  <option>Continental</option>
                  <option>Asian</option>
                  <option>Mediterranean</option>
                  <option>Local</option>
                </select>
              </div>
              <div className="form-group">
                <label>Average Price ($)</label>
                <input type="number" className="form-control" placeholder="e.g. 15" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Preparation Time (min)</label>
                <input type="number" className="form-control" placeholder="e.g. 20" />
              </div>
              <div className="form-group">
                <label>Dietary Options</label>
                <select className="form-control">
                  <option>Regular</option>
                  <option>Vegetarian</option>
                  <option>Vegan</option>
                  <option>Gluten-Free</option>
                  <option>Mixed</option>
                </select>
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="bulk-upload-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h4>Bulk Upload</h4>
          <button className="close-popup" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="popup-content">
          <div className="form-group">
            <div className="label-with-help">
              <label>Category</label>
              <button className="help-button" onClick={toggleHelp}>
                <HelpCircle size={16} />
              </button>
            </div>
            {showHelp && (
              <div className="help-text">
                Select the category of items you want to bulk upload. The form will adjust based on your selection.
              </div>
            )}
            <select className="form-control" value={category} onChange={handleCategoryChange}>
              <option value="rooms">Rooms</option>
              <option value="employees">Employees</option>
              <option value="amenities">Amenities</option>
              <option value="menu-items">Menu Items</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Items to Create</label>
            <div className="counter-input">
              <button className="counter-btn" onClick={decreaseCount} disabled={itemCount <= 1}>
                <Minus size={16} />
              </button>
              <input
                type="number"
                className="form-control"
                value={itemCount}
                onChange={handleCountChange}
                min="1"
                max="50"
              />
              <button className="counter-btn" onClick={increaseCount} disabled={itemCount >= 50}>
                <Plus size={16} />
              </button>
            </div>
          </div>

          {renderCategorySpecificFields()}

          <div className="form-group">
            <label>Upload Template (Optional)</label>
            <div className="template-links">
              <a href="#" className="template-link">
                Download {category} template
              </a>
            </div>
          </div>

          <ImageUploader
            label="Bulk Data Spreadsheet (Optional)"
            description="Upload Excel or CSV file with detailed information"
          />

          <div className="bulk-upload-actions">
            <button className="secondary-btn" onClick={onClose}>
              Cancel
            </button>
            <button className="action-submit-btn">
              <Upload size={16} />
              <span>Process Bulk Upload</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
