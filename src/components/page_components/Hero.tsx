"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import TypingAnimation from "../animations/typingAnimation"
import MoreAboutmeButton from "../compontents/MoreAboutmeButton"

function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Parallax effect
  const parallaxOffset = scrollY * 0.4

  return (
    <div className="relative overflow-hidden h-screen w-full">
      {/* Background Video Container with Parallax Effect */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/tech4k.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <source src="/tech4k.webm" type="video/webm" />
        <source src="/tech4k.mp4" type="video/mp4" />
      
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Hero Section Content */}
      <section className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors">
            <TypingAnimation
              phrases={["Fullstack Developer", "UI/UX Designer", "Problem Solver"]}
              typeSpeed={80}
              eraseSpeed={40}
              delayBetweenPhrases={1500}
              loop={true}
            />
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Creating exceptional digital <span className="text-emerald-500"> experiences </span> through code
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl mb-8 max-w-2xl">
            I design and develop scalable, responsive, and user-focused web applications by leveraging cutting-edge technologies and adhering to industry-leading best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <MoreAboutmeButton />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero