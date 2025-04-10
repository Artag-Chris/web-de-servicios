
import { Code2, Database, Server, GitGraphIcon as Git, Cloud, Terminal } from "lucide-react"

export const skillsData = [
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

  export interface Skill {
    name: string;
    level: string;
    description: string;
    icon: React.ElementType;
    color: string;
  }

