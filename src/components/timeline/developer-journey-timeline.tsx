"use client"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, Rocket } from "lucide-react"
import { timelineEvents } from "./timelineData/timelineEvents"

gsap.registerPlugin(ScrollTrigger)

export default function DeveloperJourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useGSAP(
    () => {
      gsap.utils.toArray(".timeline-event").forEach((event, index) => {
        const isEven = index % 2 === 0

        gsap.fromTo(
          event as Element,
          {
            xPercent: isMobile ? 0 : isEven ? -100 : 100,
            yPercent: isMobile ? 50 : 0,
            opacity: 0,
            scale: 0.8,
          },
          {
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: event as Element,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      gsap.utils.toArray(".year-marker").forEach((marker, index) => {
        gsap.fromTo(
          marker as Element,
          {
            scale: 0,
            opacity: 0,
            rotation: 180,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: marker as Element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1, // Stagger effect
          },
        )
      })

      const timelineLine = gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            // Smooth line growth with proper easing
            gsap.set(".timeline-line", {
              scaleY: self.progress,
              transformOrigin: "top center",
            })
          },
        },
      })

      gsap.utils.toArray(".timeline-image").forEach((image, index) => {
        // Entrance animation
        gsap.fromTo(
          image as Element,
          {
            scale: 0.8,
            opacity: 0,
            rotationY: isMobile ? 0 : 15,
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image as Element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.2,
          },
        )

        // Subtle parallax effect (reduced for smoother performance)
        if (!isMobile) {
          gsap.to(image as Element, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: image as Element,
              start: "top bottom",
              end: "bottom top",
              scrub: 2, // Slower scrub for smoother effect
            },
          })
        }
      })

      gsap.utils.toArray(".timeline-content").forEach((content, index) => {
        gsap.fromTo(
          content as Element,
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: content as Element,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.15,
          },
        )
      })

      gsap.utils.toArray(".category-badge").forEach((badge, index) => {
        gsap.fromTo(
          badge as Element,
          {
            scale: 0,
            rotation: 180,
            opacity: 0,
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: badge as Element,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          },
        )
      })

      gsap.to(".progress-bar", {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      gsap.fromTo(
        ".timeline-conclusion",
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-conclusion",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    },
    { scope: containerRef, dependencies: [isMobile] },
  )

  return (
    <div ref={containerRef} className="relative py-16 bg-zinc-900 min-h-screen overflow-hidden">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-800 z-50">
        <div className="progress-bar h-full bg-gradient-to-r from-emerald-500 to-emerald-400 scale-x-0"></div>
      </div>

      {/* Timeline intro */}
      <div className="text-center mb-16 lg:mb-24 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">My Development Journey</h2>
        <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Follow the path of my transformation, from uncertain beginnings through life-changing challenges to becoming a
          resilient full-stack developer. Each milestone represents not just technical growth, but the personal
          resilience, family inspiration, and unwavering determination that shaped my journey against all odds.
        </p>
      </div>

      {/* Timeline container */}
      <div className="timeline-container max-w-6xl mx-auto px-4 relative">
        {/* Main timeline line */}
        <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 lg:w-1 bg-zinc-700/30">
          <div className="timeline-line absolute inset-0 bg-gradient-to-b from-emerald-500 to-emerald-400 scale-y-0"></div>
        </div>

        {/* Timeline events */}
        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0

          return (
            <div key={event.id} className="timeline-event mb-16 lg:mb-24 last:mb-0 relative">
              {/* Year marker */}
              <div className="year-marker absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 -translate-y-6 z-20 flex flex-col items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-zinc-800 border-2 border-emerald-500 flex items-center justify-center shadow-lg">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-emerald-500" />
                </div>
                <span className="mt-1 lg:mt-2 text-emerald-500 font-bold bg-zinc-900 px-2 py-0.5 lg:py-1 rounded text-xs lg:text-sm whitespace-nowrap">
                  {event.year}
                </span>
              </div>

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center pl-12 lg:pl-0 ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Content side */}
                <div className={`timeline-content ${isEven ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"}`}>
                  <div className="bg-zinc-800/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-zinc-700 shadow-xl hover:bg-zinc-800/70 transition-all duration-300 max-w-[calc(100vw-3rem)] sm:max-w-none">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        {event.icon}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-white">{event.title}</h3>
                    </div>
                    <p className="text-zinc-300 mb-4 text-sm lg:text-base leading-relaxed">{event.description}</p>
                    <div
                      className={`category-badge inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        event.category === "education"
                          ? "bg-blue-500/20 text-blue-300"
                          : event.category === "work"
                            ? "bg-purple-500/20 text-purple-300"
                            : event.category === "project"
                              ? "bg-amber-500/20 text-amber-300"
                              : "bg-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </div>
                  </div>
                </div>

                {/* Image side */}
                <div className={`${isEven ? "lg:pl-16" : "lg:pr-16 lg:col-start-1"}`}>
                  <div className="timeline-image relative h-40 sm:h-48 lg:h-64 xl:h-80 overflow-hidden rounded-xl shadow-2xl group max-w-[calc(100vw-3rem)] sm:max-w-none mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent z-10 rounded-xl group-hover:from-emerald-500/30 transition-all duration-500"></div>
                    <Image
                      src={event.imageUrl || "/placeholder.svg"}
                      alt={event.imageAlt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Timeline conclusion */}
      <div className="timeline-conclusion text-center mt-16 lg:mt-24 max-w-2xl mx-auto px-4">
        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <Rocket className="h-6 w-6 lg:h-8 lg:w-8 text-emerald-500" />
        </div>
        <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">The Journey Continues...</h3>
        <p className="text-zinc-300 text-sm lg:text-base leading-relaxed">
          This timeline represents my journey so far, but the story is still being written. I'm constantly learning,
          growing, and seeking new challenges to expand my skills and make a positive impact.
        </p>
      </div>
    </div>
  )
}
