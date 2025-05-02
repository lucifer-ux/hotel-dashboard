"use client"

import type React from "react"

import { useState } from "react"
import { Search, X, Filter } from "lucide-react"
import "./SearchBar.css"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string, filters: Record<string, string>) => void
  showFilters?: boolean
  className?: string
}

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
  showFilters = false,
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query, { filter: activeFilter })
    }
  }

  const clearSearch = () => {
    setQuery("")
    if (onSearch) {
      onSearch("", { filter: activeFilter })
    }
  }

  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown)
  }

  const setFilter = (filter: string) => {
    setActiveFilter(filter)
    setShowFilterDropdown(false)
    if (onSearch) {
      onSearch(query, { filter })
    }
  }

  return (
    <div className={`search-bar-container ${className}`}>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button type="button" className="clear-search" onClick={clearSearch}>
              <X size={16} />
            </button>
          )}
        </div>

        {showFilters && (
          <div className="search-filter">
            <button type="button" className="filter-button" onClick={toggleFilterDropdown} aria-label="Filter search">
              <Filter size={18} />
              <span className="filter-text">{activeFilter === "all" ? "All" : activeFilter}</span>
            </button>

            {showFilterDropdown && (
              <div className="filter-dropdown">
                <button
                  type="button"
                  className={`filter-option ${activeFilter === "all" ? "active" : ""}`}
                  onClick={() => setFilter("all")}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`filter-option ${activeFilter === "name" ? "active" : ""}`}
                  onClick={() => setFilter("name")}
                >
                  Name
                </button>
                <button
                  type="button"
                  className={`filter-option ${activeFilter === "room" ? "active" : ""}`}
                  onClick={() => setFilter("room")}
                >
                  Room Number
                </button>
                <button
                  type="button"
                  className={`filter-option ${activeFilter === "phone" ? "active" : ""}`}
                  onClick={() => setFilter("phone")}
                >
                  Phone
                </button>
                <button
                  type="button"
                  className={`filter-option ${activeFilter === "email" ? "active" : ""}`}
                  onClick={() => setFilter("email")}
                >
                  Email
                </button>
              </div>
            )}
          </div>
        )}

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  )
}
