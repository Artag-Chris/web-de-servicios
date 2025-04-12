"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface CityLoaderProps {
  onLoadingComplete?: () => void
  minDisplayTime?: number
}

export default function CityLoader({ onLoadingComplete, minDisplayTime = 5000 }: CityLoaderProps) {
  const [colorPhase, setColorPhase] = useState(0)
  const [showBlimp, setShowBlimp] = useState(false)
  const [showMotorcycle, setShowMotorcycle] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Store random values in a ref to maintain consistency between renders
  const starsRef = useRef<Array<{ width: number; height: number; left: number; top: number; delay: number }>>([])

  // Color palette based on the cyberpunk city image
  const skyColors = [
    "linear-gradient(to top, #2b0a3d, #4b0f6b, #6a1a9a)",
    "linear-gradient(to top, #1a2e4a, #2b0a3d, #4b0f6b)",
    "linear-gradient(to top, #0a4a2e, #1a2e4a, #2b0a3d)",
    "linear-gradient(to top, #004d40, #0a4a2e, #1a2e4a)",
    "linear-gradient(to top, #00695c, #004d40, #0a4a2e)",
  ]

  const neonColors = [
    ["#ff00ff", "#00ffff", "#ff3d81"], // Pink, Cyan, Magenta
    ["#c158dc", "#00ffff", "#ff3d81"], // Purple, Cyan, Magenta
    ["#7b68ee", "#00ffff", "#c158dc"], // Blue-Purple, Cyan, Purple
    ["#4ade80", "#7b68ee", "#00ffff"], // Light Green, Blue-Purple, Cyan
    ["#10b981", "#4ade80", "#7b68ee"], // Emerald, Light Green, Blue-Purple
  ]

  // Initialize stars only once on client-side
  useEffect(() => {
    // Mark that we're on the client
    setIsClient(true)

    // Generate star positions only once
    if (starsRef.current.length === 0) {
      const stars = Array.from({ length: 100 }).map(() => ({
        width: Math.random() * 2 + 1,
        height: Math.random() * 2 + 1,
        left: Math.random() * 100,
        top: Math.random() * 60,
        delay: Math.random() * 3,
      }))
      starsRef.current = stars
    }
  }, [])

  useEffect(() => {
    // Ensure the loader is displayed for at least minDisplayTime milliseconds
  //  const startTime = Date.now()

    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onLoadingComplete) {
        onLoadingComplete()
      }
    }, minDisplayTime)

    return () => clearTimeout(timer)
  }, [minDisplayTime, onLoadingComplete])

  useEffect(() => {
    // Transition through color phases
    const colorInterval = setInterval(() => {
      setColorPhase((prev) => {
        if (prev < skyColors.length - 1) return prev + 1
        clearInterval(colorInterval)
        return prev
      })
    }, 1000) // Slightly faster color transitions to fit within 5 seconds

    // Show blimp after delay
    setTimeout(() => setShowBlimp(true), 1500)

    // Show motorcycle after delay
    setTimeout(() => setShowMotorcycle(true), 2500)

    return () => clearInterval(colorInterval)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 overflow-hidden z-50"
      style={{
        background: skyColors[colorPhase],
        transition: "background 1s ease-in-out",
      }}
    >
      {/* Stars - only render on client side to avoid hydration mismatch */}
      {isClient && (
        <div className="absolute inset-0">
          {starsRef.current.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${star.width}px`,
                height: `${star.height}px`,
                left: `${star.left}%`,
                top: `${star.top}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.4, 0.8] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: star.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Blimp */}
      {isClient && showBlimp && (
        <motion.div
          className="absolute"
          initial={{ right: "-20%", top: "15%" }}
          animate={{ right: "120%" }}
          transition={{ duration: 20, ease: "linear" }}
        >
          <svg width="120" height="40" viewBox="0 0 120 40">
            <motion.ellipse
              cx="60"
              cy="20"
              rx="50"
              ry="15"
              fill="#2d1b46"
              stroke={neonColors[colorPhase][0]}
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.rect
              x="10"
              y="18"
              width="20"
              height="10"
              fill="#2d1b46"
              stroke={neonColors[colorPhase][1]}
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.path
              d="M110 20 L115 15 L115 25 L110 20"
              fill="#2d1b46"
              stroke={neonColors[colorPhase][0]}
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </svg>
        </motion.div>
      )}

      {/* City skyline */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg width="100%" height="60vh" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax meet">
          {/* Background buildings */}
          {[
            { width: 80, height: 350, x: 50, delay: 0.1, windows: 8 },
            { width: 120, height: 420, x: 140, delay: 0.3, windows: 12 },
            { width: 70, height: 280, x: 270, delay: 0.5, windows: 6 },
            { width: 100, height: 380, x: 350, delay: 0.7, windows: 10 },
            { width: 150, height: 450, x: 460, delay: 0.2, windows: 15 },
            { width: 90, height: 320, x: 620, delay: 0.4, windows: 9 },
            { width: 130, height: 400, x: 720, delay: 0.6, windows: 12 },
            { width: 110, height: 370, x: 860, delay: 0.8, windows: 10 },
            { width: 140, height: 430, x: 980, delay: 0.3, windows: 14 },
            { width: 80, height: 300, x: 1130, delay: 0.5, windows: 8 },
          ].map((building, i) => (
            <g key={i}>
              <motion.rect
                x={building.x}
                width={building.width}
                height={building.height}
                y={600 - building.height}
                fill="#1a1a2e"
                stroke={neonColors[colorPhase][i % 3]}
                strokeWidth="2"
                initial={{ y: 600, opacity: 0 }}
                animate={{ y: 600 - building.height, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: building.delay,
                  ease: "easeOut",
                }}
              />

              {/* Windows - use deterministic positioning */}
              {isClient &&
                Array.from({ length: building.windows }).map((_, j) => {
                  const windowWidth = (building.width * 0.6) / 3
                  const windowHeight = 15
                  const windowX = building.x + (building.width - windowWidth * 3) / 2
                  const rows = Math.floor(building.height / 40)
                  const row = j % rows
                  const col = Math.floor(j / rows) % 3
                  const windowDelay = building.delay + 1 + ((j * 0.1) % 2)

                  return (
                    <motion.rect
                      key={`window-${i}-${j}`}
                      x={windowX + col * windowWidth * 1.5}
                      y={600 - building.height + 40 + row * 40}
                      width={windowWidth}
                      height={windowHeight}
                      fill={neonColors[colorPhase][j % 3]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.8, 0.4, 0.8] }}
                      transition={{
                        duration: 2,
                        delay: windowDelay,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  )
                })}
            </g>
          ))}

          {/* Foreground special buildings */}
          {/* Tall skyscraper */}
          <motion.path
            d="M500 600 L500 200 L520 150 L540 200 L540 600 Z"
            fill="#1a1a2e"
            stroke={neonColors[colorPhase][0]}
            strokeWidth="2"
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />

          {/* Cylindrical tower */}
          <g>
            <motion.ellipse
              cx="650"
              cy="250"
              rx="40"
              ry="20"
              fill="#1a1a2e"
              stroke={neonColors[colorPhase][1]}
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.rect
              x="610"
              y="250"
              width="80"
              height="350"
              fill="#1a1a2e"
              stroke={neonColors[colorPhase][1]}
              strokeWidth="2"
              initial={{ y: 600, opacity: 0 }}
              animate={{ y: 250, opacity: 1 }}
              transition={{ duration: 1.8, delay: 1.3 }}
            />
            <motion.ellipse
              cx="650"
              cy="600"
              rx="40"
              ry="20"
              fill="#1a1a2e"
              stroke={neonColors[colorPhase][1]}
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
          </g>

          {/* Angled building */}
          <motion.path
            d="M800 600 L800 300 L830 250 L860 300 L860 600 Z"
            fill="#1a1a2e"
            stroke={neonColors[colorPhase][2]}
            strokeWidth="2"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.4 }}
          />

          {/* Bridge */}
          <motion.path
            d="M0 500 L1200 500"
            stroke={neonColors[colorPhase][1]}
            strokeWidth="3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          />

          {/* Bridge arches */}
          {[100, 300, 500, 700, 900, 1100].map((x, i) => (
            <motion.path
              key={`arch-${i}`}
              d={`M${x - 80} 500 Q ${x} 450, ${x + 80} 500`}
              fill="transparent"
              stroke={neonColors[colorPhase][2]}
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.7 + i * 0.1 }}
            />
          ))}

          {/* Motorcycle */}
          {isClient && showMotorcycle && (
            <motion.g initial={{ x: -100 }} animate={{ x: 1300 }} transition={{ duration: 6, ease: "linear" }}>
              {/* Motorcycle body */}
              <motion.path
                d="M40 485 L70 485 L80 475 L60 465 L40 475 Z"
                fill="#1a1a2e"
                stroke={neonColors[colorPhase][0]}
                strokeWidth="2"
              />
              {/* Front wheel */}
              <circle cx="30" cy="485" r="10" fill="transparent" stroke={neonColors[colorPhase][1]} strokeWidth="2" />
              <circle cx="30" cy="485" r="3" fill={neonColors[colorPhase][1]} />
              {/* Back wheel */}
              <circle cx="80" cy="485" r="10" fill="transparent" stroke={neonColors[colorPhase][2]} strokeWidth="2" />
              <circle cx="80" cy="485" r="3" fill={neonColors[colorPhase][2]} />
              {/* Handlebars */}
              <path d="M40 475 L35 465" stroke={neonColors[colorPhase][0]} strokeWidth="2" />
              {/* Rider silhouette */}
              <path
                d="M50 465 L55 455 L65 455 L70 465"
                fill="#1a1a2e"
                stroke={neonColors[colorPhase][1]}
                strokeWidth="1.5"
              />
              {/* Light beam */}
              <motion.path
                d="M25 480 L5 475 L5 495 L25 490"
                fill={neonColors[colorPhase][0]}
                opacity="0.6"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.g>
          )}
        </svg>
      </div>

      {/* Artag site text */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          className="text-2xl font-bold tracking-wider"
          style={{ color: neonColors[colorPhase][0] }}
          animate={{
            color: [neonColors[colorPhase][0], neonColors[colorPhase][1], neonColors[colorPhase][2]],
            textShadow: [
              `0 0 5px ${neonColors[colorPhase][0]}`,
              `0 0 10px ${neonColors[colorPhase][1]}`,
              `0 0 15px ${neonColors[colorPhase][2]}`,
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          ARTAG SITE
        </motion.div>
      </div>
    </div>
  )
}
