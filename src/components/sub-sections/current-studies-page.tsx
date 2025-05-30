"use client"

import type React from "react"

import {
  ArrowLeft,
  BookOpen,
  Code,
  Database,
  Palette,
  Brain,
  Zap,
  Clock,
  Target,
  Award,
  TrendingUp,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Study {
  id: number
  title: string
  category: string
  provider: string
  progress: number
  duration: string
  startDate: string
  status: "active" | "completed" | "upcoming"
  icon: React.ReactNode
  description: string
  skills: string[]
  priority: "high" | "medium" | "low"
}

const currentStudies: Study[] = [
  {
    id: 1,
    title: "Advanced React & Next.js",
    category: "Frontend Development",
    provider: "Vercel Academy",
    progress: 75,
    duration: "8 weeks",
    startDate: "Jan 2024",
    status: "active",
    icon: <Code className="h-8 w-8" />,
    description: "Deep dive into React 18 features, Next.js 14, and modern frontend architecture patterns.",
    skills: ["React 18", "Next.js 14", "TypeScript", "Server Components"],
    priority: "high",
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    category: "Artificial Intelligence",
    provider: "Stanford Online",
    progress: 45,
    duration: "12 weeks",
    startDate: "Dec 2023",
    status: "active",
    icon: <Brain className="h-8 w-8" />,
    description: "Understanding ML algorithms, neural networks, and practical applications in web development.",
    skills: ["Python", "TensorFlow", "Neural Networks", "Data Analysis"],
    priority: "high",
  },
  {
    id: 3,
    title: "Database Design & Optimization",
    category: "Backend Development",
    provider: "MongoDB University",
    progress: 60,
    duration: "6 weeks",
    startDate: "Feb 2024",
    status: "active",
    icon: <Database className="h-8 w-8" />,
    description: "Advanced database design patterns, query optimization, and scalable architecture.",
    skills: ["MongoDB", "PostgreSQL", "Query Optimization", "Database Design"],
    priority: "medium",
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    category: "Design",
    provider: "Figma Academy",
    progress: 30,
    duration: "10 weeks",
    startDate: "Mar 2024",
    status: "active",
    icon: <Palette className="h-8 w-8" />,
    description: "Modern design principles, user research, and creating intuitive user experiences.",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    priority: "medium",
  },
  {
    id: 5,
    title: "Cloud Architecture with AWS",
    category: "DevOps",
    provider: "AWS Training",
    progress: 20,
    duration: "14 weeks",
    startDate: "Mar 2024",
    status: "active",
    icon: <Zap className="h-8 w-8" />,
    description: "Building scalable cloud infrastructure and implementing DevOps best practices.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    priority: "low",
  },
  {
    id: 6,
    title: "Advanced TypeScript",
    category: "Programming Languages",
    provider: "TypeScript Deep Dive",
    progress: 85,
    duration: "4 weeks",
    startDate: "Jan 2024",
    status: "active",
    icon: <BookOpen className="h-8 w-8" />,
    description: "Mastering advanced TypeScript patterns, generics, and type-level programming.",
    skills: ["TypeScript", "Generics", "Type Guards", "Advanced Patterns"],
    priority: "high",
  },
]

const StudyIcon = ({ study, index }: { study: Study; index: number }) => {
  const iconRef = useRef<HTMLDivElement>(null)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "from-blue-500 to-cyan-400"
      case "medium":
        return "from-blue-400 to-sky-300"
      case "low":
        return "from-sky-300 to-blue-200"
      default:
        return "from-blue-500 to-cyan-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <TrendingUp className="h-4 w-4" />
      case "completed":
        return <Award className="h-4 w-4" />
      case "upcoming":
        return <Clock className="h-4 w-4" />
      default:
        return <Target className="h-4 w-4" />
    }
  }

  return (
    <div
      ref={iconRef}
      className="study-icon group relative flex flex-col items-center p-6 bg-zinc-800/30 backdrop-blur-sm rounded-3xl border border-zinc-700/50 hover:border-blue-400/50 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 hover:z-50"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

      {/* Priority indicator */}
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPriorityColor(study.priority)}`}></div>
      </div>

      {/* Status badge */}
      <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-zinc-800 border-2 border-blue-400 flex items-center justify-center">
        {getStatusIcon(study.status)}
      </div>

      {/* Main icon */}
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
          {study.icon}
        </div>

        {/* Progress ring */}
        <svg className="absolute inset-0 w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="2" fill="none" className="text-zinc-700" />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 36}`}
            strokeDashoffset={`${2 * Math.PI * 36 * (1 - study.progress / 100)}`}
            className="text-blue-400 progress-ring transition-all duration-1000"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{study.title}</h3>
        <p className="text-sm text-blue-400 font-medium">{study.category}</p>
        <p className="text-xs text-zinc-400">{study.provider}</p>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
          <span>{study.progress}%</span>
          <span>•</span>
          <span>{study.duration}</span>
        </div>
      </div>

      {/* Hover details - Z-INDEX ALTO */}
      <div className="absolute inset-x-0 top-full mt-4 p-4 bg-zinc-800/95 backdrop-blur-sm rounded-xl border border-zinc-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[9999] shadow-2xl shadow-black/50">
        <p className="text-sm text-zinc-300 mb-3">{study.description}</p>

        <div className="space-y-2">
          <div className="text-xs text-zinc-500">Skills:</div>
          <div className="flex flex-wrap gap-1">
            {study.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {study.startDate}
          </span>
          <span className="capitalize">{study.status}</span>
        </div>
      </div>
    </div>
  )
}

export default function CurrentStudiesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Floating animation for study icons
      gsap.utils.toArray(".study-icon").forEach((icon, index) => {
        // Initial animation - icons appear with scale (removed rotation)
        gsap.from(icon as Element, {
          scale: 0,
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon as Element,
            start: "top 85%",
          },
          delay: index * 0.1,
        })

        // Continuous floating animation (removed rotation)
        gsap.to(icon as Element, {
          y: "random(-8, 8)",
          duration: "random(5, 8)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
        })

        // Subtle hover scale effect (reduced scale and removed z)
        const iconElement = icon as HTMLElement
        iconElement.addEventListener("mouseenter", () => {
          gsap.to(icon as Element, {
            scale: 1.02, // Reduced from 1.05 to 1.02
            y: -3, // Slight lift instead of z-axis
            duration: 0.4, // Increased duration for smoother transition
            ease: "power2.out",
          })
        })

        iconElement.addEventListener("mouseleave", () => {
          gsap.to(icon as Element, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          })
        })
      })

      // Animate progress rings
      gsap.utils.toArray(".progress-ring").forEach((ring) => {
        gsap.from(ring as Element, {
          strokeDashoffset: 2 * Math.PI * 36,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ring as Element,
            start: "top 80%",
          },
        })
      })

      // Title animation
      gsap.from(".page-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })

      // Stats animation
      gsap.from(".study-stat", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      })

      // Background particles animation (removed rotation)
      gsap.utils.toArray(".particle").forEach((particle) => {
        gsap.to(particle as Element, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          opacity: "random(0.3, 0.8)",
          duration: "random(15, 25)",
          ease: "none",
          repeat: -1,
          yoyo: true,
        })
      })
    },
    { scope: containerRef },
  )

  const totalStudies = currentStudies.length
  const averageProgress = Math.round(currentStudies.reduce((acc, study) => acc + study.progress, 0) / totalStudies)
  const activeStudies = currentStudies.filter((study) => study.status === "active").length

  return (
    <main ref={containerRef} className="bg-zinc-900 min-h-screen relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Botón de regresar */}
        <Link
          href="/#about"
          className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="page-title text-4xl md:text-6xl font-bold mb-6">
            Current{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Studies</span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
            Continuously learning and expanding my skills through focused study programs and courses. Here's what I'm
            currently working on.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="study-stat text-center">
              <div className="text-3xl font-bold text-blue-400">{totalStudies}</div>
              <div className="text-sm text-zinc-400">Active Courses</div>
            </div>
            <div className="study-stat text-center">
              <div className="text-3xl font-bold text-blue-400">{averageProgress}%</div>
              <div className="text-sm text-zinc-400">Avg Progress</div>
            </div>
            <div className="study-stat text-center">
              <div className="text-3xl font-bold text-blue-400">{activeStudies}</div>
              <div className="text-sm text-zinc-400">In Progress</div>
            </div>
          </div>
        </div>

        {/* Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {currentStudies.map((study, index) => (
            <StudyIcon key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Learning Never Stops</h3>
          <p className="text-zinc-300 max-w-md mx-auto">
            Knowledge is power, and I'm committed to staying at the forefront of technology through continuous learning.
          </p>
        </div>
      </div>
    </main>
  )
}
