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
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Only generate stars on client-side to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [currentPath])

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
                {/* Mobile menu button */}
                <div className="md:hidden flex justify-end py-4">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-6 justify-center py-4">
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
                                            layoutId="navbar-indicator-desktop"
                                            transition={{ type: "spring", duration: 0.5 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                {/* Mobile menu */}
                <motion.div
                    className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
                    transition={{ duration: 0.2 }}
                >
                    <ul className="py-2 space-y-3">
                        {links.map((link) => {
                            const isActive = currentPath === link.href
                            return (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`block px-4 py-2 text-base font-medium transition-colors ${
                                            isActive
                                                ? "text-white bg-purple-800/50"
                                                : "text-zinc-200 hover:text-white hover:bg-purple-800/30"
                                        } rounded-lg`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            )
                        })}
                    </ul>
                </motion.div>
            </div>
        </nav>
    )
}

export default CosmicNavbar
