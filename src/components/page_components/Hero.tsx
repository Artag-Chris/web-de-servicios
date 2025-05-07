"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import TypingAnimation from "../animations/typingAnimation"
import MoreAboutmeButton from "../compontents/MoreAboutmeButton"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}  

function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {  
    // Create YouTube Player API script
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("youtube-player", {
        videoId: "sQ22pm-xvrE",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: "sQ22pm-xvrE",
          controls: 0,
          showinfo: 0,
          rel: 0,
          mute: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: YT.PlayerEvent) => {
            event.target.playVideo()
          },
        },
      })
    }

    // Add scroll event listener for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate parallax effect - video moves slower than scroll
  const parallaxOffset = scrollY * 0.4 // Adjust this multiplier to control the effect intensity

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
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div
              id="youtube-player"
              className="absolute inset-0 w-full h-full -z-0 pointer-events-none"
              style={{
                top: 0,
              }}
          ></div>
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
              Creando experiencias <span className="text-emerald-500">digitales excepcionales </span> a través del código
            </h1>
            <p className="text-zinc-200 text-lg md:text-xl mb-8 max-w-2xl">
              Desarrollo aplicaciones web escalables, responsivas y centradas en el usuario, utilizando tecnologías
              modernas y las mejores prácticas del sector.
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