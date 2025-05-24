"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, ChevronDown, Award, Briefcase, GraduationCap, Code } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import { socialLinks } from "@/data/socialLinks"
import { skills } from "@/data/skillsData"
import MoreAboutmeButton from "../compontents/MoreAboutmeButton"
import { AnimatePresence } from "framer-motion"
import { tabs } from "@/data/aboutInfo"
import { handleResumeDownload } from "@/functions/handleResumenDownload"
import ImageFrame from "../sub-sections/imageFrame"


function About() {
  const [currentSkill, setCurrentSkill] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [activeTab, setActiveTab] = useState("experience")
  const [showMoreBio, setShowMoreBio] = useState(false)

  const bioRef = useRef(null)
  const isInView = useInView(bioRef, { once: true })
  const controls = useAnimation()

  // Rotate through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Animate elements when they come into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])


  return (
    <div>
      {/* About Section */}
      <section id="about" className="bg-zinc-900 py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <ImageFrame setIsHovered={setIsHovered} isHovered={isHovered} />

            <div className="md:w-2/3" ref={bioRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-2">
                  About <span className="text-emerald-500">Me</span>
                </h2>

                {/* Animated skills display */}
                <div className="h-8 mb-4">
                  <motion.p
                    key={currentSkill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-emerald-400 font-medium"
                  >
                    {skills[currentSkill]}
                  </motion.p>
                </div>

                {/* Bio with expandable content */}
                <div className="relative">
                  <motion.div
                    className={`text-zinc-300 space-y-4 overflow-hidden transition-all duration-500 ${
                      showMoreBio ? "max-h-[500px]" : "max-h-[100px]"
                    }`}
                  >
                    <p>
                      I'm a passionate fullstack developer with over 5 years of experience building web applications. I
                      specialize in creating robust, scalable solutions that solve real-world problems.
                    </p>
                    <p>
                      My journey in software development began with a curiosity about how things work on the web. That
                      curiosity evolved into a career where I've had the opportunity to work with startups and
                      established companies alike, helping them bring their digital products to life.
                    </p>
                    <p className={showMoreBio ? "block" : "hidden"}>
                      I believe in writing clean, maintainable code and staying up-to-date with the latest technologies
                      and best practices. When I'm not coding, you can find me exploring new technologies, contributing
                      to open-source projects, or sharing my knowledge through blog posts and community events.
                    </p>
                  </motion.div>

                  {/* Read more/less toggle */}
                  {!showMoreBio && (
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                  )}
                  <button
                    onClick={() => setShowMoreBio(!showMoreBio)}
                    className="mt-2 text-emerald-400 text-sm flex items-center hover:text-emerald-300 transition-colors"
                  >
                    {showMoreBio ? "Read less" : "Read more"}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showMoreBio ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-wrap gap-3 my-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 ${social.color} transition-all duration-300 hover:border-zinc-500 hover:shadow-lg hover:shadow-emerald-500/10`}
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    )
                  })}
                </div>

                {/* Tabs for experience, education, achievements */}
                <div className="mb-6">
                  <div className="flex border-b border-zinc-800 mb-4">
                    {tabs.map((tab) => {
                      const Icon = tab.icon
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center px-4 py-2 text-sm font-medium transition-colors relative ${
                            activeTab === tab.id ? "text-emerald-500" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          {tab.label}
                          {activeTab === tab.id && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                              layoutId="activeTab"
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </button>
                      )
                    })}
                  </div>

                  <div className="min-h-[180px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {tabs.find((tab) => tab.id === activeTab)?.content}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white relative overflow-hidden group"
                    onClick={handleResumeDownload}
                  >
                    <span className="relative z-10 flex items-center">
                      <FileText className="mr-2 h-4 w-4" /> Download Resume
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                  <Button
                  //  variant="outline"
                    className="border-zinc-700 hover:border-emerald-500 hover:bg-zinc-800 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> View Portfolio
                  </Button>
                </div>

                <MoreAboutmeButton />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
