"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { servicesData } from "@/data/servicesData"
import { Sparkles, ArrowRight } from "lucide-react"

function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(servicesData[0].id)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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

  const activeService = isMobile ? selectedService : hoveredService

  const handleServiceInteraction = (serviceId: string) => {
    if (isMobile) {
      setSelectedService(serviceId)
    } else {
      setHoveredService(serviceId)
    }
  }

  const handleServiceLeave = () => {
    if (!isMobile) {
      setHoveredService(null)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-12 sm:py-20 overflow-hidden bg-zinc-900"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Sparkles className="h-5 w-5 text-emerald-500" />
            </div>
            <span className="text-emerald-400 font-medium text-sm">Servicios</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            A qué nos <span className="text-emerald-500">dedicamos</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            Un vistazo a nuestra creatividad: explorando diseños innovadores, colaboraciones exitosas y experiencias digitales transformadoras.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left side - Image display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-zinc-800/50 border border-zinc-800"
          >
            <AnimatePresence mode="wait">
              {activeService ? (
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={servicesData.find((s) => s.id === activeService)?.image || ""}
                    alt={servicesData.find((s) => s.id === activeService)?.title || ""}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent"></div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {/* Background image */}
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Servicios"
                    fill
                    className="object-cover opacity-30"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/60"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                      <Sparkles className="h-16 w-16 text-emerald-500/40 mx-auto mb-4" />
                      <p className="text-zinc-300 text-base font-medium mb-2">
                        {isMobile ? "Toca un servicio para ver más" : "Pasa el cursor sobre un servicio"}
                      </p>
                      <p className="text-zinc-500 text-sm">
                        Descubre cómo podemos ayudarte
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right side - Service list */}
          <div className="space-y-4">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onMouseEnter={() => handleServiceInteraction(service.id)}
                onMouseLeave={handleServiceLeave}
                className="group relative"
              >
                <Link href={`/servicios/${service.slug}`} prefetch={true}>
                  <div
                    className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${activeService === service.id
                      ? "bg-zinc-800/80 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                      : "bg-zinc-800/30 border-zinc-800 hover:border-zinc-700"
                      }`}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeService === service.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent"
                    ></motion.div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${activeService === service.id ? "text-emerald-400" : "text-white"
                            }`}
                        >
                          {service.title}
                        </h3>
                        <ArrowRight
                          className={`h-5 w-5 transition-all duration-300 ${activeService === service.id
                            ? "text-emerald-400 translate-x-1"
                            : "text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1"
                            }`}
                        />
                      </div>

                      {/* Description - show on hover/click */}
                      <AnimatePresence>
                        {activeService === service.id && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-zinc-400 text-sm sm:text-base overflow-hidden"
                          >
                            {service.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: activeService === service.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-bl-full"
                    ></motion.div>

                    {/* Bottom line indicator */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeService === service.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400 origin-left"
                    ></motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
