"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

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
  tag = "Stats & facts",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4 py-16 md:py-24"
    >
      {/* Decorative geometric background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M200 50L350 150L350 250L200 350L50 250L50 150L200 50Z" stroke="currentColor" strokeWidth="1" />
          <path d="M200 100L300 160L300 240L200 300L100 240L100 160L200 100Z" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          className="absolute right-0 bottom-1/4 h-96 w-96 translate-x-1/2"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M200 50L350 150L350 250L200 350L50 250L50 150L200 50Z" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative w-full max-w-7xl">
        {/* Header with badge and tag */}
        <div
          className={`mb-8 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
            {badge}
          </div>
          <div className="rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background">{tag}</div>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Title and description */}
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">{description}</p>
          </div>

          {/* Right column - Stats */}
          <div className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`space-y-2 transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{stat.value}</div>
                  <p className="text-pretty text-sm text-muted-foreground md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="group rounded-full bg-lime-400 px-6 py-6 text-base font-medium text-black hover:bg-lime-500"
                onClick={onCtaClick}
                asChild={!!ctaHref}
              >
                {ctaHref ? (
                  <a href={ctaHref}>
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <>
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
