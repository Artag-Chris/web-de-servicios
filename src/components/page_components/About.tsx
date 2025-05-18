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

// Define tab interfaces
interface TabItem {
  id: string
  label: string
  icon: React.ElementType
  content: React.ReactNode
}

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

  // Define tabs content
  const tabs: TabItem[] = [
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      content: (
        <div className="space-y-4">
          <div className="relative pl-6 border-l-2 border-emerald-500/30">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
            <h4 className="text-white font-medium">Senior Developer</h4>
            <p className="text-emerald-400 text-sm">TechCorp Inc. • 2020 - Present</p>
            <p className="text-zinc-400 text-sm mt-2">
              Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and
              mentored junior developers.
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-emerald-500/30">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
            <h4 className="text-white font-medium">Web Developer</h4>
            <p className="text-emerald-400 text-sm">Digital Solutions • 2018 - 2020</p>
            <p className="text-zinc-400 text-sm mt-2">
              Developed responsive websites and e-commerce platforms. Worked with React, Vue.js, and PHP backends.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      content: (
        <div className="space-y-4">
          <div className="relative pl-6 border-l-2 border-emerald-500/30">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
            <h4 className="text-white font-medium">Master's in Computer Science</h4>
            <p className="text-emerald-400 text-sm">Tech University • 2016 - 2018</p>
            <p className="text-zinc-400 text-sm mt-2">
              Specialized in web technologies and distributed systems. Graduated with honors.
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-emerald-500/30">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
            <h4 className="text-white font-medium">Bachelor's in Software Engineering</h4>
            <p className="text-emerald-400 text-sm">State University • 2012 - 2016</p>
            <p className="text-zinc-400 text-sm mt-2">
              Focused on programming fundamentals, algorithms, and software development methodologies.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: Award,
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-emerald-500/10 rounded-full text-emerald-500">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Best Web Application Award</h4>
              <p className="text-zinc-400 text-xs">Regional Tech Conference 2022</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-emerald-500/10 rounded-full text-emerald-500">
              <Code className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Open Source Contributor</h4>
              <p className="text-zinc-400 text-xs">100+ contributions to major projects</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-emerald-500/10 rounded-full text-emerald-500">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Hackathon Winner</h4>
              <p className="text-zinc-400 text-xs">First place at CodeFest 2021</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  // Handle resume download
  const handleResumeDownload = () => {
    // Create a link to your resume PDF
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Path to your resume PDF in the public folder
    link.download = "Christian_Resume.pdf" // Name for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      {/* About Section */}
      <section id="about" className="bg-zinc-900 py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <motion.div
                className="relative w-64 h-64 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 blur-lg opacity-50"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.6, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                {/* Photo container with interactive effects */}
                <div
                  className="relative overflow-hidden rounded-full border-4 border-zinc-800 w-full h-full group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src="https://res.cloudinary.com/dfg2xrsqz/image/upload/v1747582652/aefuflson0wfblt5szrk.jpg"
                    alt="Christian's portrait"
                    fill
                    className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
                  />

                  {/* Animated overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p
                      className="text-white text-sm font-medium"
                      initial={{ y: 20 }}
                      animate={{ y: isHovered ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      Hello, I'm Christian
                    </motion.p>
                  </motion.div>
                </div>

                {/* Floating particles */}
                <motion.div
                  className="absolute w-2 h-2 rounded-full bg-emerald-400"
                  style={{ top: "10%", right: "5%" }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
                  style={{ bottom: "15%", left: "10%" }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0.2,
                  }}
                />
              </motion.div>
            </div>

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
                    variant="outline"
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
