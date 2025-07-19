"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Download, Menu, X } from "lucide-react"
import { handleResumeDownload } from "@/functions/handleResumenDownload"

function HeaderMain() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out backdrop-blur-md ${
          isScrolled ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100"
        }`}
      >
        <div className="backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-bold">
                <span className="text-emerald-400">Artag</span>
                <span className="text-white">Dev</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/80 hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              {/* Resume Button */}
              <Button
                variant="outline"
                className="hidden md:flex items-center gap-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/20 backdrop-blur-sm bg-black/20 hover:text-white"
                onClick={handleResumeDownload}
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-emerald-400 hover:bg-emerald-400/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-emerald-400 transition-colors text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="outline"
                className="flex items-center gap-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300 mt-4 bg-transparent"
                onClick={() => {
                  handleResumeDownload()
                  setIsMobileMenuOpen(false)
                }}
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar (appears on scroll) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0"
        }`}
      >
        <div className="backdrop-blur-md bg-black/30 border-t border-white/10">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center justify-between">
              {/* Logo */}
              <div className="text-lg font-bold">
                <span className="text-emerald-400">A</span>
                <span className="text-white">D</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-emerald-400 transition-all duration-300 text-sm hover:scale-105"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-emerald-400 transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Enhanced Resume Button */}
              <Button
                size="sm"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2"
                onClick={handleResumeDownload}
              >
                <Download className="w-3 h-3" />
                <span className="hidden sm:inline">Resume</span>
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  )
}

export default HeaderMain
