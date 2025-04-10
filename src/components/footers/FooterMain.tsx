"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  ArrowRight,
  Heart,
  Codepen,
  Dribbble,
  Figma,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Social media links data with additional icons
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
    color: "hover:text-[#6e5494] hover:border-[#6e5494]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-[#0077b5] hover:border-[#0077b5]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yourusername",
    color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourusername",
    color: "hover:text-[#E1306C] hover:border-[#E1306C]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@yourusername",
    color: "hover:text-[#ff0000] hover:border-[#ff0000]",
  },
  {
    name: "Dribbble",
    icon: Dribbble,
    url: "https://dribbble.com/yourusername",
    color: "hover:text-[#ea4c89] hover:border-[#ea4c89]",
  },
  {
    name: "CodePen",
    icon: Codepen,
    url: "https://codepen.io/yourusername",
    color: "hover:text-[#47cf73] hover:border-[#47cf73]",
  },
  {
    name: "Figma",
    icon: Figma,
    url: "https://figma.com/@yourusername",
    color: "hover:text-[#f24e1e] hover:border-[#f24e1e]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@example.com",
    color: "hover:text-[#D44638] hover:border-[#D44638]",
  },
]

// Navigation links
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

// Services offered
const services = [
  "Web Development",
  "UI/UX Design",
  "Mobile Applications",
  "API Development",
  "E-commerce Solutions",
  "Technical Consulting",
]

function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    // Simulate subscription
    setTimeout(() => {
      setIsSubscribed(true)
      setEmail("")
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }, 500)
  }

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <h3 className="text-xl font-bold text-white">John Doe</h3>
            </div>

            <p className="text-zinc-400 text-sm">
              Creating exceptional digital experiences through innovative solutions and clean, efficient code.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500 mr-2 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#contact"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500 mr-2 transition-colors"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Subscribe to receive updates on new projects and tech articles.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 pr-10 focus:border-emerald-500"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-1 top-1 h-8 bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-zinc-500 text-xs">I respect your privacy. Unsubscribe at any time.</p>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-md p-3 text-emerald-400 text-sm">
                Thanks for subscribing!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-500 text-sm mb-4 md:mb-0">© {currentYear} John Doe. All rights reserved.</div>

            <div className="flex items-center gap-4">
              <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <span className="text-zinc-700">•</span>
              <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                Terms of Service
              </Link>
              <span className="text-zinc-700">•</span>
              <div className="text-zinc-500 text-sm flex items-center">
                Made with <Heart className="h-3 w-3 text-emerald-500 mx-1" /> in San Francisco
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
