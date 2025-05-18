"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Calendar, Code, Award, Briefcase, Lightbulb, Rocket, GraduationCap, Heart } from "lucide-react"

interface TimelineEvent {
  id: number
  year: string
  title: string
  description: string
  icon: React.ReactNode
  imageUrl: string
  imageAlt: string
  category: "education" | "work" | "project" | "achievement"
}

// Sample timeline data - replace with your actual journey
const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2012",
    title: "First Steps in Programming",
    description:
      "Discovered my passion for coding through a web development course. Built my first HTML and CSS website, sparking a lifelong journey into the world of programming.",
    icon: <Code className="h-6 w-6 text-emerald-500" />,
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "First coding experience",
    category: "education",
  },
  {
    id: 2,
    year: "2014",
    title: "Computer Science Degree",
    description:
      "Enrolled in a Computer Science program where I built a strong foundation in algorithms, data structures, and software engineering principles. Participated in coding competitions and hackathons.",
    icon: <GraduationCap className="h-6 w-6 text-emerald-500" />,
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "University graduation",
    category: "education",
  },
  {
    id: 3,
    year: "2016",
    title: "First Professional Role",
    description:
      "Joined a startup as a junior developer where I worked on real-world projects. Learned to collaborate with a team and deliver under tight deadlines. Developed skills in React and Node.js.",
    icon: <Briefcase className="h-6 w-6 text-emerald-500" />,
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "First job experience",
    category: "work",
  },
  {
    id: 4,
    year: "2018",
    title: "Major Project Launch",
    description:
      "Led the development of a critical e-commerce platform that significantly increased company revenue. Implemented modern architecture patterns and optimized for performance and scalability.",
    icon: <Rocket className="h-6 w-6 text-emerald-500" />,
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "Project launch celebration",
    category: "project",
  },
  {
    id: 5,
    year: "2020",
    title: "Overcoming Challenges",
    description:
      "Navigated through the pandemic by adapting to remote work and leading digital transformation initiatives. Learned new technologies and methodologies to stay relevant in a changing landscape.",
    icon: <Lightbulb className="h-6 w-6 text-emerald-500" />,
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "Remote work setup",
    category: "achievement",
  },
  {
    id: 6,
    year: "2022",
    title: "Industry Recognition",
    description:
      "Received an industry award for innovative solutions in web development. Published technical articles and spoke at conferences, establishing myself as a thought leader in the development community.",
    icon: <Award className="h-6 w-6 text-emerald-500" />,
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "Award ceremony",
    category: "achievement",
  },
  {
    id: 7,
    year: "2024",
    title: "Current Journey",
    description:
      "Currently focused on exploring emerging technologies like AI and blockchain while mentoring the next generation of developers. Building a personal brand and contributing to open-source projects.",
    icon: <Heart className="h-6 w-6 text-emerald-500" />,
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "Current workspace",
    category: "work",
  },
]

const TimelineEvent = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const isEven = index % 2 === 0

  return (
    <div className="mb-24 last:mb-0 relative" ref={ref}>
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500/20 to-emerald-500/80"></div>

      {/* Year marker */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 -top-6 z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-emerald-500 flex items-center justify-center">
          <Calendar className="h-5 w-5 text-emerald-500" />
        </div>
        <span className="mt-1 text-emerald-500 font-bold">{event.year}</span>
      </motion.div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${isEven ? "md:flex-row-reverse" : ""}`}>
        {/* Description side */}
        <motion.div
          className={`bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 shadow-xl ${
            isEven ? "md:text-right" : ""
          }`}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              {event.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{event.title}</h3>
          </div>
          <p className="text-zinc-300">{event.description}</p>

          <div
            className={`mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium ${
              event.category === "education"
                ? "bg-blue-500/20 text-blue-300"
                : event.category === "work"
                  ? "bg-purple-500/20 text-purple-300"
                  : event.category === "project"
                    ? "bg-amber-500/20 text-amber-300"
                    : "bg-emerald-500/20 text-emerald-300"
            }`}
          >
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          className="relative h-64 md:h-80 overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent z-10 rounded-xl"></div>
          <Image src={event.imageUrl || "/placeholder.svg"} alt={event.imageAlt} fill className="object-cover" />
        </motion.div>
      </div>
    </div>
  )
}

const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-50" style={{ width, originX: 0 }} />
}

export default function DeveloperJourneyTimeline() {
  return (
    <div className="relative py-16">
      <ProgressIndicator />

      {/* Timeline intro */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Development Journey</h2>
        <p className="text-zinc-300 max-w-2xl mx-auto">
          Follow the path of my evolution as a developer, from my first lines of code to becoming a professional
          software engineer. Each milestone represents growth, challenges overcome, and skills acquired along the way.
        </p>
      </motion.div>

      {/* Timeline events */}
      <div className="max-w-5xl mx-auto px-4">
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={event.id} event={event} index={index} />
        ))}
      </div>

      {/* Timeline conclusion */}
      <motion.div
        className="text-center mt-24 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px 0px" }}
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <Rocket className="h-8 w-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4">The Journey Continues...</h3>
        <p className="text-zinc-300">
          This timeline represents my journey so far, but the story is still being written. I'm constantly learning,
          growing, and seeking new challenges to expand my skills and make a positive impact.
        </p>
      </motion.div>
    </div>
  )
}
