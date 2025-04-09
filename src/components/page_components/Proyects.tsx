"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

// Project data with GitHub and live URLs
const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment processing, user authentication, and admin dashboard. Includes responsive design and SEO optimization.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-example.com",
    features: ["User authentication", "Payment processing", "Admin dashboard", "Order tracking"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates and team collaboration features. Includes drag-and-drop task organization and notification system.",
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager-example.com",
    features: ["Real-time updates", "Team collaboration", "Task assignment", "Progress tracking"],
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media managers with data visualization and reporting tools. Includes customizable widgets and exportable reports.",
    tech: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
    image: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social-dashboard-example.com",
    features: ["Data visualization", "Custom reports", "Multi-platform analytics", "Trend analysis"],
  },
  {
    title: "Weather Forecast App",
    description:
      "A weather application that provides real-time forecasts, radar maps and severe weather alerts for locations worldwide.",
    tech: ["React Native", "Redux", "Weather API", "Geolocation"],
    image: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-example.com",
    features: ["Real-time forecasts", "Location tracking", "Weather alerts", "Interactive maps"],
  },
  {
    title: "Recipe Finder",
    description:
      "A web application that helps users find recipes based on ingredients they have, dietary restrictions, and cuisine preferences.",
    tech: ["Vue.js", "Express", "MongoDB", "Recipe API"],
    image: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/yourusername/recipe-finder",
    liveUrl: "https://recipe-finder-example.com",
    features: ["Ingredient search", "Dietary filters", "Saved recipes", "Meal planning"],
  },
]

interface ProjectCardProps {
  project: Project;
  onHover: (isHovered: boolean) => void;
  isHovered: boolean;
}

function ProjectCard({ project, onHover, isHovered }: ProjectCardProps) {
  return (
    <Card
      className={`bg-zinc-900 border-zinc-800 overflow-hidden transition-all duration-300 h-full ${
        isHovered ? "border-emerald-500 shadow-lg shadow-emerald-500/10" : "hover:border-emerald-500/50"
      }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="relative h-48 w-full overflow-hidden group">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "group-hover:scale-105"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 transition-opacity duration-300 ${
            isHovered ? "opacity-80" : ""
          }`}
        />
      </div>
      <CardContent className="p-6 relative">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-zinc-400 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, i: number) => (
            <Badge key={i} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1 text-sm"
          >
            View Project <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1 text-sm"
          >
            Source Code <Github className="h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

interface Position {
  x: number;
  y: number;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

function ProjectPopup({ project, isVisible, position }: { project: Project; isVisible: boolean; position: Position }) {
  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed z-50 bg-zinc-800 border border-emerald-500 rounded-lg shadow-xl shadow-emerald-500/20 w-[350px] md:w-[400px]"
          style={{
            top: `${position.y + 20}px`,
            left: `${position.x}px`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="p-6">
            <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </div>

            <p className="text-zinc-300 mb-4">{project.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-emerald-500 mb-2">Key Features:</h4>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="text-zinc-400 text-sm flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <Badge key={i} variant="secondary" className="bg-zinc-700">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                Live Demo <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                GitHub <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = !useMediaQuery("(min-width: 768px)")
  const carouselRef = useRef(null)

  // Determine how many projects to show per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3 // lg
      if (window.innerWidth >= 768) return 2 // md
      return 1 // mobile
    }
    return 3 // Default for SSR
  }

  const itemsPerSlide = getItemsPerSlide()
  const totalSlides = Math.ceil(projectsData.length / itemsPerSlide)

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const handleHover = (index: number, isHovered: boolean, event: React.MouseEvent<HTMLDivElement> | null) => {
    if (isHovered) {
      setHoveredIndex(index)
      if (event) {
        const rect = event.currentTarget.getBoundingClientRect()
        setPopupPosition({
          x: rect.left + rect.width / 2,
          y: window.scrollY + rect.top,
        })
      }
    } else {
      setHoveredIndex(null)
    }
  }

  // Calculate which projects to show in the current slide
  const startIndex = currentIndex * itemsPerSlide
  const visibleProjects = projectsData.slice(startIndex, startIndex + itemsPerSlide)

  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>

          <div ref={carouselRef} className="relative">
            {/* Carousel Navigation */}
            <div className="flex justify-between absolute -top-16 right-0 space-x-2">
              <button
                onClick={handlePrevSlide}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-zinc-400" />
              </button>
              <button
                onClick={handleNextSlide}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-zinc-400" />
              </button>
              <div className="flex items-center space-x-1 ml-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      currentIndex === index ? "bg-emerald-500" : "bg-zinc-700"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Carousel Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={startIndex + index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onMouseEnter={(e) => handleHover(startIndex + index, true, e)}
                    onMouseLeave={() => handleHover(startIndex + index, false, null)}
                  >
                    <ProjectCard
                      project={project}
                      onHover={(isHovered: boolean) => handleHover(startIndex + index, isHovered, null)}
                      isHovered={hoveredIndex === startIndex + index}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Popup that appears on hover (not on mobile) */}
            {!isMobile && hoveredIndex !== null && (
              <ProjectPopup
                project={projectsData[hoveredIndex]}
                isVisible={hoveredIndex !== null}
                position={popupPosition}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
