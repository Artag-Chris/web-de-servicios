"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { AdvancedHorizontalScrollProps } from "@/lib/interfaces/scrollInterfaces"
import { animateSection } from "@/components/animations/animateSection"
import { Loader2 } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export default function AdvancedHorizontalScroll({
                                                     contentSections,
                                                     videoSrc,
                                                     afterScrollContent,
                                                     className = "",
                                                 }: AdvancedHorizontalScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Estado para rastrear cuáles imágenes están cargadas
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})

    // Manejo de la carga de imágenes
    const handleImageLoad = (index: number) => {
        setLoadedImages((prev) => ({
            ...prev,
            [index]: true, // Imagen cargada
        }))
    }

    // Inicializar GSAP cuando todas las imágenes necesarias estén visibles
    useEffect(() => {
        if (typeof window === "undefined") return
        if (!containerRef.current || !sectionRef.current) return

        const sections = gsap.utils.toArray<HTMLElement>(".hs-panel")

        // Configurar el contenedor para el scroll horizontal
        gsap.set(containerRef.current, {
            width: `${sections.length * 100}vw`,
        })

        // Crear la animación de desplazamiento horizontal
        const scrollTween = gsap.to(containerRef.current, {
            x: () => -(containerRef.current!.offsetWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: "top top",
                end: () => `+=${containerRef.current!.offsetWidth - window.innerWidth}`,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    if (videoRef.current) {
                        const progress = self.progress
                        const videoDuration = videoRef.current.duration || 60
                        videoRef.current.currentTime = progress * videoDuration
                    }
                },
            },
        })

        // Proxy para activar animaciones adicionales
        const proxies = gsap.utils.toArray<HTMLElement>(".hs-proxy-div")
        proxies.forEach((proxy, i) => {
            ScrollTrigger.create({
                trigger: proxy,
                start: "center bottom",
                end: "center top",
                containerAnimation: scrollTween,
                onEnter: () => animateSection(i),
                onEnterBack: () => animateSection(i),
                markers: false,
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [contentSections])

    return (
        <main className={`bg-black text-white hs-no-scrollbar hs-smooth-scroll ${className}`}>
            {/* Video de fondo */}
            {videoSrc && (
                <div className="fixed inset-0 z-0 opacity-20">
                    <video ref={videoRef} className="w-full h-full object-cover" muted playsInline preload="auto">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            )}

            {/* Indicadores */}
            <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
                {contentSections.map((_, i) => (
                    <div key={i} className={`hs-step-dot ${i === 0 ? "hs-active" : ""}`}></div>
                ))}
            </div>

            {/* Contenedor de scroll horizontal */}
            <div ref={sectionRef} className="hs-container relative z-10">
                <div ref={containerRef} className="h-full flex">
                    {contentSections.map((section, i) => (
                        <div key={i} className="hs-panel relative">
                            {/* Div para animaciones */}
                            <div className="hs-proxy-div"></div>

                            {/* Imagen de fondo con indicador de carga */}
                            <div className="absolute inset-0 opacity-30">
                                {!loadedImages[i] && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                                        <Loader2 className="h-12 w-12 text-white animate-spin" />
                                    </div>
                                )}
                                <Image
                                    src={section.imageUrl || "/placeholder.svg"}
                                    alt={section.title || "Sin título"}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                    onLoad={() => handleImageLoad(i)} // Cambia a onLoad
                                />
                            </div>

                            {/* Contenido de la sección */}
                            {loadedImages[i] && (
                                <div
                                    className={`hs-content-section max-w-2xl w-full ${i === 0 ? "opacity-100" : "opacity-0"}`}
                                >
                                    <h2 className="text-5xl font-bold mb-6">{section.title}</h2>
                                    <div className="w-24 h-1 bg-white mb-8"></div>
                                    <p className="text-xl mb-8">{section.description}</p>
                                    {section.buttonText && (
                                        <a
                                            href={section.buttonUrl || "#"}
                                            className="inline-block px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
                                        >
                                            {section.buttonText}
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contenido adicional después del scroll */}
            {afterScrollContent && (
                <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-black to-gray-900">
                    {afterScrollContent}
                </div>
            )}
        </main>
    )
}