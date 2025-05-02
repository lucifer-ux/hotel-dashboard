"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, RefreshCw, Check } from "lucide-react"
import "./ImageUploader.css"

interface ImageUploaderProps {
  label?: string
  description?: string
}

export default function ImageUploader({
  label = "Upload Image",
  description = "Upload an image file (JPG, PNG)",
}: ImageUploaderProps) {
  const [image, setImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    // Reset states
    setUploadSuccess(false)
    setIsUploading(true)

    // Simulate upload delay
    setTimeout(() => {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string)
          setIsUploading(false)
          setUploadSuccess(true)
        }
      }
      reader.readAsDataURL(file)
    }, 1500)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleReupload = () => {
    setImage(null)
    setUploadSuccess(false)
    setTimeout(() => {
      triggerFileInput()
    }, 300)
  }

  return (
    <div className="image-uploader-container">
      <label className="image-uploader-label">{label}</label>

      {!image ? (
        <div
          className={`image-upload-area ${isDragging ? "dragging" : ""} ${isUploading ? "uploading" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <input type="file" ref={fileInputRef} className="file-input" accept="image/*" onChange={handleFileChange} />

          {isUploading ? (
            <div className="upload-status uploading">
              <div className="upload-spinner"></div>
              <span>Uploading...</span>
            </div>
          ) : (
            <div className="upload-placeholder">
              <Upload size={24} />
              <span className="upload-text">Drag & drop or click to upload</span>
              <span className="upload-description">{description}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="image-preview-container">
          <div className="image-preview" style={{ backgroundImage: `url(${image})` }}>
            <div className="image-preview-overlay">
              <button className="reupload-button" onClick={handleReupload}>
                <RefreshCw size={16} />
                <span>Change</span>
              </button>
            </div>
          </div>
          <div className="upload-success-indicator">
            <Check size={16} />
            <span>Upload successful</span>
          </div>
        </div>
      )}
    </div>
  )
}