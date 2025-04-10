"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import TypingAnimation from "../animations/typingAnimation"


function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null)

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
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Background Video Container */}
      <div ref={videoContainerRef} className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" /> 
        <div id="youtube-player" className="absolute inset-0 w-[100vw] h-[100vh] -z-0 pointer-events-none">
        </div>
      </div>

      {/* Hero Section Content */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative z-20">
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
          Creando experiencias digitales<span className="text-emerald-500">excepcionales </span> a través del código
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl mb-8 max-w-2xl">
          Desarrollo aplicaciones web escalables, responsivas y centradas en el usuario, utilizando tecnologías modernas y las mejores prácticas del sector.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              View Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-emerald-500">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
