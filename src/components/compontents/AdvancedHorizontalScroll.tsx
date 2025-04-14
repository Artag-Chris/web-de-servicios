"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {AdvancedHorizontalScrollProps} from "@/lib/interfaces/scrollInterfaces";
import {animateSection} from "@/components/animations/animateSection";

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

    useEffect(() => {
        // Make sure we're in the browser environment
        if (typeof window === "undefined" || !containerRef.current || !sectionRef.current) return

        // Create the horizontal scroll effect
        const sections = gsap.utils.toArray<HTMLElement>(".hs-panel")

        // Set the width of the horizontal container
        gsap.set(containerRef.current, {
            width: `${sections.length * 100}vw`,
        })

        // Create the horizontal scroll animation
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
                    // Control video playback based on scroll position
                    if (videoRef.current) {
                        const progress = self.progress
                        const videoDuration = videoRef.current.duration || 60
                        videoRef.current.currentTime = progress * videoDuration
                    }
                },
            },
        })

        // Proxy divs for triggering animations
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

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [contentSections])

    // Function to animate sections


    return (
        <main className={`bg-black text-white hs-no-scrollbar hs-smooth-scroll ${className}`}>
            {/* Background video that plays based on scroll position */}
            {videoSrc && (
                <div className="fixed inset-0 z-0 opacity-20">
                    <video ref={videoRef} className="w-full h-full object-cover" muted playsInline preload="auto">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            )}

            {/* Step indicators */}
            <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
                {contentSections.map((_, i) => (
                    <div key={i} className={`hs-step-dot ${i === 0 ? "hs-active" : ""}`}></div>
                ))}
            </div>

            {/* Horizontal scroll section */}
            <div ref={sectionRef} className="hs-container relative z-10">
                <div ref={containerRef} className="h-full flex">
                    {contentSections.map((section, i) => (
                        <div key={i} className="hs-panel relative">
                            {/* Proxy div for triggering animations */}
                            <div className="hs-proxy-div"></div>

                            {/* Background image */}
                            <div className="absolute inset-0 opacity-30">
                                <Image
                                    src={section.imageUrl || "/placeholder.svg"}
                                    alt={section.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>

                            {/* Content that appears based on scroll position */}
                            <div className={`hs-content-section max-w-2xl w-full ${i === 0 ? "opacity-100" : "opacity-0"}`}>
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional content after horizontal scroll */}
            {afterScrollContent && (
                <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-black to-gray-900">
                    {afterScrollContent}
                </div>
            )}
        </main>
    )
}
