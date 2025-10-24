"use client"

import { TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Stat {
  value: string
  label: string
}

interface StatsHeroSectionProps {
  badge?: string
  tag?: string
  title: string
  description: string
  stats: Stat[]
  ctaText?: string
  ctaHref?: string
  onCtaClick?: () => void
}

export function StatsSection({
  badge = "01",
  tag = "Estadisticas & Hechos",
  title,
  description,
  stats,
  ctaText = "Who we are",
  ctaHref,
  onCtaClick,
}: StatsHeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-20 overflow-hidden bg-zinc-950"
    >
      {/* Background elements - matching the About section style */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-500/5 rounded-full blur-3xl"></div>

      {/* Decorative geometric background - more subtle */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg
          className="absolute left-0 top-1/4 h-64 w-64 -translate-x-1/2 text-emerald-500"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M200 50L350 150L350 250L200 350L50 250L50 150L200 50Z" stroke="currentColor" strokeWidth="1" />
          <path d="M200 100L300 160L300 240L200 300L100 240L100 160L200 100Z" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-4">
        {/* Header with badge - matching emerald theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
            </div>
            <span className="text-emerald-400 font-medium text-sm">{tag}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {title.split(' ').map((word, i) => 
              i === title.split(' ').length - 1 ? (
                <span key={i} className="text-emerald-500"> {word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">{description}</p>
        </motion.div>

        {/* Stats Grid - compact and integrated */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-emerald-500/10 group-hover:to-emerald-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-sm sm:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
