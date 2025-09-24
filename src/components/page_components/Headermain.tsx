"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Download, Menu, X, Sparkles, Zap } from "lucide-react"
import { handleResumeDownload } from "@/functions/handleResumenDownload"

function HeaderMain() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowDimensions, setWindowDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const navLinks = [
    { href: "#about", label: "About", icon: "👨‍💻" },
    { href: "#skills", label: "Skills", icon: "⚡" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#contact", label: "Contact", icon: "📧" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100"
        }`}
      >
        {/* Aurora background effect */}
        <div className="absolute inset-0 aurora-bg opacity-30"></div>

        <div className="glass-effect dark:glass-effect-dark border-b border-white/20 dark:border-white/10 relative overflow-hidden">
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-2 h-2 bg-primary/30 rounded-full floating"
              style={{
                left: `${(mousePosition.x / windowDimensions.width) * 100}%`,
                top: `${(mousePosition.y / windowDimensions.height) * 100}%`,
                transform: `translate(-50%, -50%)`,
                transition: "all 0.3s ease-out",
              }}
            ></div>
            <Sparkles
              className="absolute top-4 right-20 w-4 h-4 text-accent/40 floating"
              style={{ animationDelay: "1s" }}
            />
            <Zap
              className="absolute top-6 left-1/3 w-3 h-3 text-primary/40 floating"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="container mx-auto py-6 px-6 relative">
            <nav className="flex items-center justify-between">
              <div className="text-2xl font-bold group cursor-pointer">
                <span className="holographic-text text-glow transition-all duration-300 group-hover:scale-110">
                  Artag
                </span>
                <span className="text-foreground/90 ml-1 transition-all duration-300 group-hover:text-primary">
                  Dev
                </span>
                <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white group relative flex items-center gap-2 text-white hover:text-primary transition-all duration-500 hover:scale-110 py-2 px-4 rounded-full hover:bg-white/10 dark:hover:bg-black/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full group-hover:left-0 rounded-full"></span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                  </Link>
                ))}
              </div>

              <Button
                variant="outline"
                className="hidden md:flex items-center gap-3 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-500 hover:scale-105 glow-emerald backdrop-blur-sm bg-white/5 dark:bg-black/20 hover:text-primary-foreground hover:bg-primary group relative overflow-hidden px-6 py-3 rounded-full font-semibold"
                onClick={handleResumeDownload}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                <Download className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Resume</span>
                <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 rounded-full text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-80 glass-effect-dark border-l border-white/10 transform transition-all duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-24">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-white hover:text-primary transition-all duration-300 text-lg py-3 px-4 rounded-xl hover:bg-white/10 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-base group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
              <Button
                variant="outline"
                className="flex items-center gap-3 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 mt-6 bg-transparent rounded-xl py-3 group"
                onClick={() => {
                  handleResumeDownload()
                  setIsMobileMenuOpen(false)
                }}
              >
                <Download className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0"
        }`}
      >
        <div className="glass-effect dark:glass-effect-dark border-t border-white/20 dark:border-white/10 relative overflow-hidden">
          {/* Subtle aurora effect */}
          <div className="absolute inset-0 aurora-bg opacity-20"></div>

          <div className="container mx-auto px-6 py-4 relative">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-bold group cursor-pointer">
                <span className="holographic-text text-glow">A</span>
                <span className="text-foreground/90 ml-1 group-hover:text-primary transition-colors duration-300">
                  D
                </span>
              </div>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-primary transition-all duration-300 text-sm hover:scale-105 py-2 px-3 rounded-full hover:bg-white/10 dark:hover:bg-black/20 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex md:hidden items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-primary transition-all duration-300 text-xs hover:scale-110 flex flex-col items-center gap-1"
                  >
                    <span className="text-sm">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>

              <Button
                size="sm"
                className="text-white bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground border-0 transition-all duration-500 hover:scale-105 glow-emerald flex items-center gap-2 px-4 py-2 rounded-full font-semibold group relative overflow-hidden"
                onClick={handleResumeDownload}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <Download className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline relative z-10">Resume</span>
                <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10" />
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-24"></div>
    </>
  )
}

export default HeaderMain
