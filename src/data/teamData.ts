import { Linkedin, Twitter, Github, Mail } from "lucide-react"

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  skills: string[]
  funFact: string
  quote: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
    email?: string
  }
  expertise: {
    name: string
    level: number // 0-100
  }[]
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alejandro Torres",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "Visionario tecnológico con más de 10 años transformando ideas en soluciones digitales exitosas.",
    skills: ["Estrategia Digital", "Liderazgo", "Innovación"],
    funFact: "Ha escalado 3 startups y es adicto al café ☕",
    quote: "La innovación no es solo tecnología, es resolver problemas reales.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "alejandro@artag.com.co",
    },
    expertise: [
      { name: "Estrategia", level: 95 },
      { name: "Liderazgo", level: 90 },
      { name: "Innovación", level: 92 },
    ],
  },
  {
    id: "2",
    name: "María Rodríguez",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    bio: "Diseñadora apasionada que crea experiencias visuales memorables y centradas en el usuario.",
    skills: ["UI/UX Design", "Branding", "Design Systems"],
    funFact: "Colecciona fuentes tipográficas como otros coleccionan arte 🎨",
    quote: "El buen diseño es invisible, pero su impacto es inolvidable.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "maria@artag.com.co",
    },
    expertise: [
      { name: "UI/UX", level: 98 },
      { name: "Branding", level: 88 },
      { name: "Prototyping", level: 85 },
    ],
  },
  {
    id: "3",
    name: "Carlos Mendoza",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    bio: "Arquitecto de software que convierte código en experiencias digitales fluidas y escalables.",
    skills: ["React", "Node.js", "Cloud Architecture"],
    funFact: "Resuelve bugs mientras hace yoga 🧘‍♂️",
    quote: "El código limpio es poesía que las máquinas entienden.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "carlos@artag.com.co",
    },
    expertise: [
      { name: "Frontend", level: 94 },
      { name: "Backend", level: 90 },
      { name: "DevOps", level: 82 },
    ],
  },
  {
    id: "4",
    name: "Laura Sánchez",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80",
    bio: "Estratega digital que conecta marcas con audiencias a través de historias auténticas y datos.",
    skills: ["Digital Marketing", "Content Strategy", "Analytics"],
    funFact: "Puede predecir tendencias antes de que sean tendencias 📊",
    quote: "El marketing efectivo es una conversación, no un monólogo.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "laura@artag.com.co",
    },
    expertise: [
      { name: "Strategy", level: 91 },
      { name: "Content", level: 89 },
      { name: "Analytics", level: 87 },
    ],
  },
]

export const teamValues = [
  {
    title: "Colaboración",
    description: "Trabajamos juntos para lograr resultados extraordinarios",
  },
  {
    title: "Creatividad",
    description: "Pensamos fuera de la caja en cada proyecto",
  },
  {
    title: "Excelencia",
    description: "Nos comprometemos con la calidad en todo lo que hacemos",
  },
  {
    title: "Compromiso",
    description: "Tu éxito es nuestro éxito",
  },
]
