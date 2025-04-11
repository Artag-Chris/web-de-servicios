"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import CityLoader from "@/components/loading/city-loader"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    // This will handle any additional loading logic if needed
    // The CityLoader component will handle the minimum display time
    const handlePageFullyLoaded = () => {
      // We don't set isLoading to false here because the CityLoader
      // will handle that after its minimum display time
    }

    if (document.readyState === "complete") {
      handlePageFullyLoaded()
    } else {
      window.addEventListener("load", handlePageFullyLoaded)
      return () => window.removeEventListener("load", handlePageFullyLoaded)
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CityLoader onLoadingComplete={handleLoadingComplete} minDisplayTime={5000} />
          <div className={isLoading ? "hidden" : "block"}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
