"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface LottieAnimationProps {
  animationPath: string
  loop?: boolean
  autoplay?: boolean
  className?: string
  style?: React.CSSProperties
  fallback?: React.ReactNode
}

export default function LottieAnimation({
  animationPath,
  loop = true,
  autoplay = true,
  className = "",
  style,
  fallback,
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(false)

    // Construir la ruta completa
    const fullPath = animationPath.startsWith("/") ? animationPath : `/lottie/${animationPath}`

    fetch(fullPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load animation")
        }
        return response.json()
      })
      .then((data) => {
        setAnimationData(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Error loading Lottie animation:", err)
        setError(true)
        setIsLoading(false)
      })
  }, [animationPath])

  if (error) {
    return (
      fallback || (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-zinc-500 text-sm">Error al cargar la animación</p>
        </div>
      )
    )
  }

  if (isLoading || !animationData) {
    return (
      fallback || (
        <div className="flex items-center justify-center w-full h-full">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full"></div>
          </div>
        </div>
      )
    )
  }

  return (
    <div className={className} style={style}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
