import type React from "react"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata = {
  title: "Artag Site",
  description: "Welcome to Artag Site",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}
