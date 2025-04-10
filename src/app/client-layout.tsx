"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import LoadingScreen from "@/components/loading/loading-screen"
import { ThemeProvider } from "next-themes"


const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // This will hide the loading screen after the page is fully loaded
    if (document.readyState === "complete") {
      setIsLoading(false)
    } else {
      window.addEventListener("load", () => setIsLoading(false))

      // Fallback in case the load event doesn't fire
      const timeout = setTimeout(() => setIsLoading(false), 3500)
      return () => clearTimeout(timeout)
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
