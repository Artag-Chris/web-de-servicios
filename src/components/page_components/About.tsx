"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
  FileText,
  ExternalLink,
} from "lucide-react"
import { motion } from "framer-motion"

// Social media links data
const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/yourusername",
    color: "hover:text-[#6e5494]",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    url: "https://youtube.com/@yourusername",
    color: "hover:text-[#ff0000]",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    url: "https://twitter.com/yourusername",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://instagram.com/yourusername",
    color: "hover:text-[#E1306C]",
  },
  {
    name: "Email",
    icon: MailIcon,
    url: "mailto:your.email@example.com",
    color: "hover:text-[#D44638]",
  },
]

// Skills for the rotating text effect
const skills = ["React Developer", "UI/UX Enthusiast", "Next.js Expert", "Problem Solver", "Full Stack Developer"]

function About() {
  const [currentSkill, setCurrentSkill] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Rotate through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* About Section */}
      <section id="about" className="bg-zinc-900 py-20">
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
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 blur-lg opacity-50 animate-pulse"></div>
                <div
                  className="relative overflow-hidden rounded-full border-4 border-zinc-800 w-full h-full"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Developer portrait"
                    fill
                    className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
                  />
                  {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
                      <p className="text-white text-sm font-medium">Hello, I'm John Doe</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-2">
                  About <span className="text-emerald-500">Me</span>
                </h2>
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
                <p className="text-zinc-300 mb-4">
                  I'm a passionate fullstack developer with over 5 years of experience building web applications. I
                  specialize in creating robust, scalable solutions that solve real-world problems.
                </p>
                <p className="text-zinc-300 mb-6">
                  My journey in software development began with a curiosity about how things work on the web. That
                  curiosity evolved into a career where I've had the opportunity to work with startups and established
                  companies alike, helping them bring their digital products to life.
                </p>

                {/* Social Media Icons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 ${social.color} transition-colors duration-300 hover:border-zinc-500`}
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    )
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    <FileText className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                  <Button variant="outline" className="border-zinc-700 hover:border-emerald-500 hover:bg-zinc-800 text-black">
                    <ExternalLink className="mr-2 h-4 w-4 text-black" /> View Portfolio
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
