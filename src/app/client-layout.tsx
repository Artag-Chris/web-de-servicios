"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import CityLoader from "@/components/loading/city-loader"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false)
    } else {
      const handlePageFullyLoaded = () => setIsLoading(false)

      window.addEventListener("load", handlePageFullyLoaded)
      return () => window.removeEventListener("load", handlePageFullyLoaded)
    }
  }, [])

  return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <CityLoader onLoadingComplete={handleLoadingComplete} minDisplayTime={5000} />
        <div className={isLoading ? "hidden" : "block"}>{children}</div>
      </ThemeProvider>
  )
}