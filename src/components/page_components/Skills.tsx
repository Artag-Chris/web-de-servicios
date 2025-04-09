"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code2, Database, Server, GitGraphIcon as Git, Cloud, Terminal } from "lucide-react"

// Define skill data with descriptions and icons
const skillsData = [
  {
    name: "JavaScript",
    level: "Advanced",
    description:
      "A programming language that enables interactive web pages and is an essential part of web applications.",
    icon: Code2,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    description: "A strongly typed programming language that builds on JavaScript, giving better tooling at any scale.",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    name: "React",
    level: "Advanced",
    description: "A JavaScript library for building user interfaces, particularly single-page applications.",
    icon: Code2,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    level: "Advanced",
    description: "A React framework that enables server-side rendering and generating static websites.",
    icon: Code2,
    color: "text-white",
  },
  {
    name: "Node.js",
    level: "Advanced",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    icon: Server,
    color: "text-green-400",
  },
  {
    name: "Express",
    level: "Intermediate",
    description: "A minimal and flexible Node.js web application framework for building web and mobile applications.",
    icon: Server,
    color: "text-gray-400",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    description: "A NoSQL database that uses JSON-like documents with optional schemas for storing data.",
    icon: Database,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    description: "A powerful, open source object-relational database system with a strong reputation for reliability.",
    icon: Database,
    color: "text-blue-500",
  },
  {
    name: "GraphQL",
    level: "Intermediate",
    description: "A query language for APIs and a runtime for executing those queries with your existing data.",
    icon: Code2,
    color: "text-pink-500",
  },
  {
    name: "Docker",
    level: "Intermediate",
    description: "A platform for developing, shipping, and running applications in containers.",
    icon: Terminal,
    color: "text-blue-400",
  },
  {
    name: "AWS",
    level: "Intermediate",
    description: "A comprehensive cloud platform offering over 200 fully featured services from data centers globally.",
    icon: Cloud,
    color: "text-orange-400",
  },
  {
    name: "Git",
    level: "Advanced",
    description:
      "A distributed version control system for tracking changes in source code during software development.",
    icon: Git,
    color: "text-orange-500",
  },
]

interface Skill {
  name: string;
  level: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <Card
        className="bg-zinc-800 border-zinc-700 hover:border-emerald-500 transition-all overflow-hidden h-[140px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6 relative h-full">
          <div className="flex items-center gap-2 mb-1">
            <Icon className={`h-5 w-5 ${skill.color}`} />
            <h3 className="font-medium text-lg">{skill.name}</h3>
          </div>
          <p className="text-zinc-400 text-sm">{skill.level}</p>

          <div
            className={`absolute inset-x-0 bottom-0 bg-zinc-800 p-4 transform transition-all duration-300 ease-in-out ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <p className="text-zinc-300 text-sm">{skill.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function Skills() {
  return (
    <div>
      {/* Skills Section */}
      <section id="skills" className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical <span className="text-emerald-500">Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
