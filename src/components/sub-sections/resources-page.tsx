"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Server, Globe, Code, Palette, FileText, Monitor, Cpu, HardDrive, Network } from "lucide-react"
import { getStatusColor, serverCards, websiteCards } from "@/data/serverAndResources/serverAndResourcesData"

gsap.registerPlugin(ScrollTrigger)



export default function ResourcesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Animate website cards
      gsap.utils.toArray(".website-card").forEach((card, index) => {
        gsap.from(card as Element, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card as Element,
            start: "top 85%",
          },
        })
      })

      // Animate server cards
      gsap.utils.toArray(".server-card").forEach((card, index) => {
        gsap.from(card as Element, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card as Element,
            start: "top 85%",
          },
        })
      })

      // Animate section headers
      gsap.utils.toArray(".section-header").forEach((header) => {
        gsap.from(header as Element, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header as Element,
            start: "top 90%",
          },
        })
      })

      // Progress bar animation
      gsap.to(".progress-bar", {
        scaleX: 1,
        transformOrigin: "left left",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
    },
    { scope: containerRef },
  )


  return (
    <div ref={containerRef} className="relative py-16 bg-zinc-900 min-h-screen">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-800 z-50">
        <div className="progress-bar h-full bg-purple-500 scale-x-0"></div>
      </div>

      {/* Page intro */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Resources & Infrastructure</h1>
        <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
          A curated collection of useful websites and tools, plus my personal server infrastructure projects. Everything
          I use to build, deploy, and maintain modern applications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {/* Useful Websites Section */}
        <section>
          <div className="section-header text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="h-8 w-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Useful Websites</h2>
            </div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Essential tools and platforms that power my development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {websiteCards.map((website) => (
              <div
                key={website.id}
                className="website-card group bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent z-10"></div>
                  <Image
                    src={website.imageUrl || "/placeholder.svg"}
                    alt={website.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                      {website.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">
                        {website.title}
                      </h3>
                      <span className="text-xs text-purple-400">{website.category}</span>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm mb-4 line-clamp-3">{website.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {website.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    Visit Site <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Private Servers Section */}
        <section>
          <div className="section-header text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Server className="h-8 w-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Private Servers</h2>
            </div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              My personal infrastructure projects and self-hosted services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serverCards.map((server) => (
              <div
                key={server.id}
                className="server-card group bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent z-10"></div>
                  <Image
                    src={server.imageUrl || "/placeholder.svg"}
                    alt={server.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(server.status)}`}
                    >
                      {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                      {server.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">
                        {server.title}
                      </h3>
                      <span className="text-xs text-purple-400">{server.category}</span>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm mb-4">{server.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-medium text-purple-400 mb-2">Specifications</h4>
                      <div className="flex flex-wrap gap-1">
                        {server.specs.map((spec) => (
                          <span key={spec} className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-purple-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {server.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom section */}
      <div className="text-center mt-24 max-w-2xl mx-auto px-4">
        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
          <Network className="h-8 w-8 text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">Building the Future</h3>
        <p className="text-zinc-300">
          These resources and infrastructure projects represent my commitment to continuous learning and building
          robust, scalable solutions. Always exploring new technologies and methodologies.
        </p>
      </div>
    </div>
  )
}