import type React from "react"
import "./globals.css"
import Sidebar from "@/components/Sidebar"

export const metadata = {
  title: "Hotel Management Dashboard",
  description: "A comprehensive dashboard for hotel management",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  )
}
