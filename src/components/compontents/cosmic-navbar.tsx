"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface NavLink {
    href: string
    label: string
}

interface CosmicNavbarProps {
    links: NavLink[]
    currentPath?: string
}

const CosmicNavbar = ({ links, currentPath = "" }: CosmicNavbarProps) => {
    const [mounted, setMounted] = useState(false)

    // Only generate stars on client-side to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Generate random stars
    const generateStars = (count: number) => {
        if (!mounted) return []

        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() < 0.8 ? 1 : 2,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
        }))
    }

    const stars = generateStars(30)

    return (
        <nav className="relative overflow-hidden bg-purple-900/90 backdrop-blur-sm">
            {/* Stars background */}
            <div className="absolute inset-0 overflow-hidden">
                {mounted &&
                    stars.map((star) => (
                        <motion.div
                            key={star.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                top: star.top,
                                left: star.left,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: parseFloat(star.animationDuration),
                                delay: parseFloat(star.animationDelay),
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
            </div>

            {/* Occasional shooting star */}
            {mounted && (
                <motion.div
                    className="absolute h-px bg-white"
                    style={{ width: "40px", transform: "rotate(-45deg)" }}
                    initial={{ top: "-10%", left: "-10%", opacity: 0 }}
                    animate={{
                        top: ["0%", "100%"],
                        left: ["0%", "100%"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 7,
                    }}
                />
            )}

            {/* Nav content */}
            <div className="container mx-auto px-4 relative z-10">
                <ul className="flex space-x-6 justify-center py-4">
                    {links.map((link) => {
                        const isActive = currentPath === link.href

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`relative text-lg font-medium transition-colors ${
                                        isActive ? "text-white" : "text-zinc-200 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                                            layoutId="navbar-indicator"
                                            transition={{ type: "spring", duration: 0.5 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default CosmicNavbar
