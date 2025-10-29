export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  companyLogo?: string
  quote: string
  image?: string
}

export interface WhyChooseStat {
  value: string
  label: string
  icon?: string
}

export const whyChooseStats: WhyChooseStat[] = [
  {
    value: "98%",
    label: "Satisfacción del cliente",
  },
  {
    value: "150+",
    label: "Proyectos exitosos",
  },
  {
    value: "25+",
    label: "Marcas globales",
  },
  {
    value: "5+",
    label: "Años de experiencia",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María González",
    position: "CEO",
    company: "TechVision",
    quote: "Artag transformó nuestra presencia digital completamente. Su atención al detalle y enfoque estratégico superaron nuestras expectativas. Los resultados hablan por sí mismos.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: "2",
    name: "Carlos Ramírez",
    position: "Director de Marketing",
    company: "Innovatech",
    quote: "Trabajar con Artag fue una experiencia excepcional. Su equipo no solo entregó un producto de alta calidad, sino que también nos guió en cada paso del proceso con profesionalismo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
]

export const clientLogos = [
  {
    name: "TechVision",
    logo: "https://via.placeholder.com/120x40/10b981/ffffff?text=TechVision",
  },
  {
    name: "Innovatech",
    logo: "https://via.placeholder.com/120x40/10b981/ffffff?text=Innovatech",
  },
  {
    name: "Digital Pro",
    logo: "https://via.placeholder.com/120x40/10b981/ffffff?text=DigitalPro",
  },
  {
    name: "Creative Labs",
    logo: "https://via.placeholder.com/120x40/10b981/ffffff?text=CreativeLabs",
  },
]

export const whyChooseReasons = [
  {
    title: "Innovación Constante",
    description: "Utilizamos las últimas tecnologías y tendencias para mantener tu negocio a la vanguardia.",
    icon: "✨",
  },
  {
    title: "Enfoque Personalizado",
    description: "Cada proyecto es único. Adaptamos nuestras soluciones a tus necesidades específicas.",
    icon: "🎯",
  },
  {
    title: "Resultados Medibles",
    description: "No solo creamos, medimos el impacto y optimizamos continuamente para maximizar tu ROI.",
    icon: "📈",
  },
  {
    title: "Soporte Dedicado",
    description: "Estamos contigo en cada paso, desde la concepción hasta el lanzamiento y más allá.",
    icon: "🤝",
  },
]
