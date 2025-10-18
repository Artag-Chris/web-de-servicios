"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import TypingAnimation from "../animations/typingAnimation"
import CityLoader from "../loading/city-loader"
import CTAButton from "../compontents/CTABottom"
import { Sparkles } from "lucide-react"

function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [showCityLoader, setShowCityLoader] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle mobile detection after component mounts to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)

    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle video load and play
  useEffect(() => {
    if (isMounted && videoRef.current) {
      const video = videoRef.current

      const handleCanPlay = () => {
        setVideoLoaded(true)
        video.play().catch(console.error)
      }

      const handleLoadedData = () => {
        setVideoLoaded(true)
      }

      const handleError = () => {
        console.warn("Video failed to load, using fallback image")
        setVideoLoaded(false)
        // Hide loader even if video fails
        setTimeout(() => setShowCityLoader(false), 1000)
      }

      video.addEventListener("canplay", handleCanPlay)
      video.addEventListener("loadeddata", handleLoadedData)
      video.addEventListener("error", handleError)

      // Force load if video is ready
      if (video.readyState >= 3) {
        handleCanPlay()
      }

      return () => {
        video.removeEventListener("canplay", handleCanPlay)
        video.removeEventListener("loadeddata", handleLoadedData)
        video.removeEventListener("error", handleError)
      }
    }
  }, [isMounted])

  // Handle city loader visibility
  useEffect(() => {
    if (!isMounted) return

    let timer: NodeJS.Timeout

    if (videoLoaded) {
      timer = setTimeout(() => {
        setShowCityLoader(false)
      }, 500)
    } else {
      // Fallback: hide loader after maximum time even if video hasn't loaded
      timer = setTimeout(() => {
        setShowCityLoader(false)
      }, 4000) // Maximum 4 seconds
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isMounted, videoLoaded])

  // Parallax effect - reduced on mobile
  const parallaxOffset = scrollY * (isMobile ? 0.2 : 0.4)

  return (
    <div className="relative overflow-hidden h-screen w-full">
      {/* City Loader Overlay */}
      {showCityLoader && (
        <CityLoader
          onLoadingComplete={() => {
            // This callback is called when the loader animation completes
            // But we control the actual hiding via the useEffect above
          }}
          minDisplayTime={1500}
        />
      )}

      {/* Background Container with Parallax Effect */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          height: "calc(100% + 200px)",
        }}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/tech4k.mp4" type="video/mp4" />
        </video>

        {/* Fallback image for desktop if video fails to load */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${!videoLoaded ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src="/technology.png"
            alt="Technology background"
            fill
            priority
            className="object-cover"
            onLoad={() => {
              // Ensure loader hides when fallback image loads
              if (!videoLoaded) {
                setTimeout(() => setShowCityLoader(false), 500)
              }
            }}
          />
        </div>

        {/* Overlay - darker on mobile for better text contrast */}
        <div
          className={`absolute inset-0 z-10 transition-all duration-500 ${isMobile ? "bg-black/70" : "bg-black/50"}`}
        />
      </div>

      {/* Hero Section Content */}
      <section className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors">
            <TypingAnimation
              phrases={[
                "Desarrollador Fullstack",
                "Consultor en Automatización",
                "Impulsor de Crecimiento Digital"
              ]}
              typeSpeed={80}
              eraseSpeed={40}
              delayBetweenPhrases={1500}
              loop={true}
            />
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
            Donde la Innovación se Activa: <span className="text-emerald-500">Soluciones</span> que Transforman tu Negocio
          </h1>
          <p className="text-zinc-200 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl">
            Potencio tu empresa con soluciones que automatizan y hacen crecer tu presencia digital.
            Integro <b className="text-emerald-500">WhatsApp</b>, <b className="text-emerald-500">Instagram</b> y otras plataformas para <b className="text-emerald-500">conectar con tus clientes</b>,
            agilizar procesos y maximizar resultados.
            Mi consultoría te ayuda a construir experiencias web, aplicaciones inteligentes y APIs que impulsan
            la evolución de tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton text={"Contáctame"} icon={<Sparkles />} />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero
