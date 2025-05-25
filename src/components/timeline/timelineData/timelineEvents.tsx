import { Calendar, Code, Award, Briefcase, Lightbulb, Rocket, GraduationCap, Heart } from "lucide-react"

export const timelineEvents: TimelineEvent[] = [
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

export interface TimelineEvent {
  id: number
  year: string
  title: string
  description: string
  icon: React.ReactNode
  imageUrl: string
  imageAlt: string
  category: "education" | "work" | "project" | "achievement"
}