"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Users, Linkedin, Twitter, Github, Mail, X, Sparkles } from "lucide-react"
import { teamMembers, teamValues } from "@/data/teamData"
import type { TeamMember } from "@/data/teamData"

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return Linkedin
      case "twitter":
        return Twitter
      case "github":
        return Github
      case "email":
        return Mail
      default:
        return Mail
    }
  }

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative py-16 sm:py-24 overflow-hidden bg-zinc-900"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Users className="h-6 w-6 text-emerald-500" />
            </div>
            <span className="text-emerald-400 font-medium">Nuestro Equipo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-emerald-500">Team</span>
          </h2>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
            Un equipo diverso de profesionales apasionados, unidos por la creatividad, la colaboración
            y el compromiso con la excelencia. Conoce a las personas que hacen realidad tus proyectos.
          </p>

          {/* Values */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{value.title}</h4>
                <p className="text-zinc-500 text-xs">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-800/50 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300"></div>

                  {/* Social Icons - Show on Hover */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = getSocialIcon(platform)
                      return (
                        <a
                          key={platform}
                          href={url}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500/20 transition-all duration-300"
                        >
                          <Icon className="h-4 w-4 text-zinc-300 hover:text-emerald-400" />
                        </a>
                      )
                    })}
                  </div>

                  {/* Info at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-emerald-400 text-sm font-medium mb-2">{member.role}</p>
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {member.skills.slice(0, 2).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-zinc-800/80 backdrop-blur-sm text-zinc-300 rounded-full border border-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Click to view more indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="p-4 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/50">
                      <Sparkles className="h-6 w-6 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal/Popup for Member Details */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500/20 transition-all duration-300"
              >
                <X className="h-5 w-5 text-zinc-300" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left - Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                </div>

                {/* Right - Details */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-emerald-400 font-medium mb-4">{selectedMember.role}</p>

                  {/* Bio */}
                  <p className="text-zinc-300 mb-6 leading-relaxed">{selectedMember.bio}</p>

                  {/* Quote */}
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                    <p className="text-zinc-300 italic text-sm">"{selectedMember.quote}"</p>
                  </div>

                  {/* Fun Fact */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Fun Fact</h4>
                    <p className="text-zinc-400 text-sm">{selectedMember.funFact}</p>
                  </div>

                  {/* Expertise Bars */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Expertise</h4>
                    <div className="space-y-3">
                      {selectedMember.expertise.map((exp, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-xs text-zinc-400 mb-1">
                            <span>{exp.name}</span>
                            <span>{exp.level}%</span>
                          </div>
                          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${exp.level}%` }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {Object.entries(selectedMember.social).map(([platform, url]) => {
                      const Icon = getSocialIcon(platform)
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-zinc-800 border border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500/20 transition-all duration-300 group"
                        >
                          <Icon className="h-5 w-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
