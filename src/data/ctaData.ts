import { Mail, MessageSquare, Rocket, Shield, Zap, Users } from "lucide-react"

export interface CTAFeature {
  icon: any
  title: string
  description: string
}

export const ctaFeatures: CTAFeature[] = [
  {
    icon: Zap,
    title: "Respuesta rápida",
    description: "Te respondemos en menos de 24 horas",
  },
  {
    icon: Shield,
    title: "100% Confidencial",
    description: "Tu información está segura con nosotros",
  },
  {
    icon: Users,
    title: "Consultoría gratuita",
    description: "Primera sesión sin compromiso",
  },
]

export const newsletterBenefits = [
  "Acceso anticipado a nuevos proyectos",
  "Tips exclusivos de desarrollo web",
  "Descuentos especiales para suscriptores",
  "Casos de estudio y recursos gratuitos",
]

export const socialProof = {
  subscribers: "2,500+",
  rating: "4.9/5",
  projects: "150+",
}
