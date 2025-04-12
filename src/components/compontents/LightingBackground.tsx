"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Simplified lightning paths
const lightningPaths = [
  "M0,50 C100,30 200,70 300,40 C400,10 500,60 600,30",
  "M0,70 C120,100 240,40 360,80 C480,120 600,60 720,80",
  "M0,30 C140,0 280,60 420,20 C560,50 700,10 840,40",
]

// Simplified branch paths
const branchPaths = ["M0,0 C10,30 30,40 50,30", "M0,0 C20,10 40,0 60,-20", "M0,0 C-10,20 -30,30 -50,40"]

// Type definitions
interface Position {
  x: number
  y: number
}

interface Speed {
  x: number
  y: number
}

interface Branch {
  pathIndex: number
  position: Position
  scale: number
  rotation: number
  delay: number
}

interface ParticleProps {
  delay?: number
}

interface LightningBoltProps {
  delay?: number
}

// Simplified Particle component
const Particle = ({ delay = 0 }: ParticleProps) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [size, setSize] = useState<number>(2)
  const [speed, setSpeed] = useState<Speed>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState<number>(0.5) // Higher initial opacity

  useEffect(() => {
    // Initialize particle
    const initParticle = () => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 30,
      })
      setSize(1 + Math.random() * 2) // Smaller particles
      setSpeed({
        x: (Math.random() - 0.5) * 5, // Slower horizontal movement
        y: 3 + Math.random() * 7, // Slower vertical movement
      })
      setOpacity(0.4 + Math.random() * 0.4) // Higher opacity
    }

    // Initialize
    initParticle()

    // Move particle with less frequent updates
    const interval = setInterval(() => {
      setPosition((prev) => ({
        x: prev.x + speed.x * 0.01,
        y: prev.y + speed.y * 0.01,
      }))

      // Reset if out of bounds
      if (position.y > 100 || position.x < -10 || position.x > 110) {
        initParticle()
      }
    }, 33) // ~30fps instead of 60fps

    return () => clearInterval(interval)
  }, [delay, position.x, position.y, speed.x, speed.y])

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, rgba(220,38,38,${opacity}) 0%, rgba(185,28,28,${opacity * 0.7}) 70%, rgba(153,27,27,0) 100%)`,
        boxShadow: `0 0 ${size}px rgba(220,38,38,${opacity * 0.7})`, // Less intense glow
      }}
    />
  )
}

// Optimized Lightning bolt component
const LightningBolt = ({ delay = 0 }: LightningBoltProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [mainPathIndex, setMainPathIndex] = useState<number>(0)
  const [branches, setBranches] = useState<Branch[]>([])
  const [position, setPosition] = useState<{ y: number }>({ y: 20 + Math.random() * 60 })

  // Generate fewer random branches
  const generateBranches = () => {
    const numBranches = 2 + Math.floor(Math.random() * 3) // 2-4 branches instead of 5-12
    const newBranches: Branch[] = []

    for (let i = 0; i < numBranches; i++) {
      newBranches.push({
        pathIndex: Math.floor(Math.random() * branchPaths.length),
        position: {
          x: 100 + Math.random() * 500, // Less spread
          y: Math.random() * 30 - 15,
        },
        scale: 0.5 + Math.random(),
        rotation: Math.random() * 360,
        delay: Math.random() * 0.05, // Shorter delays
      })
    }

    setBranches(newBranches)
  }

  useEffect(() => {
    // Set random main path
    setMainPathIndex(Math.floor(Math.random() * lightningPaths.length))

    // Shorter initial delay
    const initialTimeout = setTimeout(
      () => {
        // Show lightning more frequently
        const interval = setInterval(
          () => {
            // Higher chance to show lightning (30% instead of 15%)
            if (Math.random() < 0.3) {
              setIsVisible(true)
              generateBranches()
              setPosition({ y: 20 + Math.random() * 60 })
              setMainPathIndex(Math.floor(Math.random() * lightningPaths.length))

              // Hide after a short duration
              setTimeout(
                () => {
                  setIsVisible(false)
                },
                200 + Math.random() * 200, // Slightly longer visibility
              )
            }
          },
          2000 + Math.random() * 3000, // 2-5 seconds between flashes (more frequent)
        )

        return () => clearInterval(interval)
      },
      delay < 1000 ? delay : 1000,
    ) // Cap the initial delay at 1 second

    return () => clearTimeout(initialTimeout)
  }, [delay])

  if (!isVisible) return null

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: 0,
        top: `${position.y}%`,
        width: "100%",
        height: "10px",
        zIndex: 0,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.8, 0.6, 0.8, 0], // Higher opacity values
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <svg
        width="100%"
        height="100"
        viewBox="0 0 1000 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Main lightning bolt */}
        <motion.path
          d={lightningPaths[mainPathIndex]}
          stroke="url(#lightning-gradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, strokeWidth: 2 }}
          animate={{
            pathLength: 1,
            strokeWidth: [2, 3, 2],
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Glow effect for main bolt - simplified */}
        <motion.path
          d={lightningPaths[mainPathIndex]}
          stroke="url(#lightning-gradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ filter: "blur(5px)" }} // Less blur
        />

        {/* Branch lightning bolts */}
        {branches.map((branch, index) => (
          <g
            key={index}
            transform={`translate(${branch.position.x}, ${branch.position.y}) scale(${branch.scale}) rotate(${branch.rotation})`}
          >
            <motion.path
              d={branchPaths[branch.pathIndex]}
              stroke="url(#lightning-gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.2, delay: branch.delay, ease: "easeOut" }}
            />

            {/* Simplified glow effect for branch */}
            <motion.path
              d={branchPaths[branch.pathIndex]}
              stroke="url(#lightning-gradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 0.2, delay: branch.delay, ease: "easeOut" }}
              style={{ filter: "blur(3px)" }} // Less blur
            />
          </g>
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" /> {/* emerald-500 */}
            <stop offset="50%" stopColor="#34D399" /> {/* emerald-400 */}
            <stop offset="100%" stopColor="#6EE7B7" /> {/* emerald-300 */}
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

// Optimized lightning background
export const LightningBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background gradient for storm effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-zinc-900/20"></div>

      {/* Reduced number of particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={`particle-${i}`} delay={i * 50} />
      ))}

      {/* Reduced number of lightning bolts with staggered delays */}
      {[...Array(3)].map((_, i) => (
        <LightningBolt key={`lightning-${i}`} delay={i * 1000} />
      ))}
    </div>
  )
}
