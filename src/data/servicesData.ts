export interface Service {
  id: string
  title: string
  description: string
  image: string
  slug: string
  longDescription: string
  benefits: string[]
  process: string[]
  technologies?: string[]
  caseStudy?: {
    client: string
    challenge: string
    solution: string
    results: string[]
  }
}

export const servicesData: Service[] = [
  {
    id: "brand-identity",
    slug: "identidad-de-marca",
    title: "Identidad de marca",
    description: "Creamos identidades visuales únicas que capturan la esencia de tu marca y resuenan con tu audiencia.",
    longDescription: "Tu marca es más que un logo. Es la promesa que haces a tus clientes, la personalidad que proyectas y la experiencia que ofreces. Creamos identidades de marca completas que cuentan tu historia de manera auténtica y memorable.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    benefits: [
      "Diferenciación clara en el mercado",
      "Conexión emocional con tu audiencia",
      "Consistencia en todos los puntos de contacto",
      "Mayor reconocimiento y recordación de marca",
    ],
    process: [
      "Investigación y análisis de mercado",
      "Definición de personalidad y valores",
      "Diseño de identidad visual",
      "Creación de guía de marca",
      "Implementación y lanzamiento",
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Sketch"],
  },
  {
    id: "web-development",
    slug: "desarrollo-web",
    title: "Desarrollo web",
    description: "Construimos sitios web modernos y responsivos con tecnologías de vanguardia para impulsar tu negocio.",
    longDescription: "Desarrollamos experiencias web que no solo se ven increíbles, sino que funcionan perfectamente. Desde landing pages hasta aplicaciones web complejas, creamos soluciones escalables y optimizadas.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    benefits: [
      "Sitios web rápidos y optimizados para SEO",
      "Diseño responsive para todos los dispositivos",
      "Código limpio y mantenible",
      "Integración con herramientas de analytics",
    ],
    process: [
      "Análisis de requisitos",
      "Diseño UX/UI",
      "Desarrollo frontend y backend",
      "Testing y optimización",
      "Despliegue y mantenimiento",
    ],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
  },
  {
    id: "business-scaling",
    slug: "escalar-negocios",
    title: "Escalar negocios",
    description: "Estrategias y soluciones tecnológicas para llevar tu negocio al siguiente nivel con crecimiento sostenible.",
    longDescription: "Ayudamos a empresas a crecer de manera inteligente y sostenible. Implementamos sistemas, procesos y tecnologías que permiten escalar sin perder calidad ni control.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    benefits: [
      "Infraestructura escalable y robusta",
      "Automatización de procesos clave",
      "Análisis de datos para decisiones informadas",
      "Reducción de costos operativos",
    ],
    process: [
      "Auditoría de sistemas actuales",
      "Identificación de cuellos de botella",
      "Diseño de arquitectura escalable",
      "Implementación gradual",
      "Monitoreo y optimización continua",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
  },
  {
    id: "debugging",
    slug: "debugging-optimizacion",
    title: "Debugging & Optimización",
    description: "Identificamos y solucionamos problemas en tu código, optimizando el rendimiento de tus aplicaciones.",
    longDescription: "¿Tu aplicación es lenta o tiene errores? Analizamos tu código a fondo, identificamos problemas y optimizamos el rendimiento para ofrecer la mejor experiencia a tus usuarios.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    benefits: [
      "Mejora significativa en velocidad de carga",
      "Reducción de errores y bugs",
      "Código más limpio y mantenible",
      "Mejor experiencia de usuario",
    ],
    process: [
      "Análisis de rendimiento actual",
      "Identificación de problemas críticos",
      "Refactorización de código",
      "Optimización de queries y assets",
      "Testing exhaustivo",
    ],
    technologies: ["Chrome DevTools", "Lighthouse", "New Relic", "Sentry"],
  },
  {
    id: "social-integration",
    slug: "integracion-redes-sociales",
    title: "Integración con redes sociales",
    description: "Conectamos tu plataforma con redes sociales para amplificar tu alcance y engagement con clientes.",
    longDescription: "Integramos tu plataforma con las principales redes sociales para que puedas llegar a más clientes, automatizar publicaciones y analizar el impacto de tu presencia digital.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    benefits: [
      "Mayor alcance y visibilidad",
      "Automatización de publicaciones",
      "Análisis de engagement en tiempo real",
      "Gestión centralizada de redes sociales",
    ],
    process: [
      "Análisis de necesidades y objetivos",
      "Configuración de APIs y permisos",
      "Desarrollo de integraciones",
      "Implementación de analytics",
      "Capacitación y soporte",
    ],
    technologies: ["Facebook API", "Instagram API", "Twitter API", "LinkedIn API"],
  },
  {
    id: "smart-bots",
    slug: "bots-automatizaciones",
    title: "Bots inteligentes & Automatizaciones",
    description: "Automatizamos procesos con bots inteligentes que mejoran la eficiencia y experiencia del usuario.",
    longDescription: "Creamos bots inteligentes y flujos de automatización que trabajan 24/7 para tu negocio. Desde chatbots de atención al cliente hasta automatizaciones complejas con n8n.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    benefits: [
      "Atención al cliente 24/7",
      "Reducción de tareas repetitivas",
      "Respuestas instantáneas y precisas",
      "Integración con múltiples plataformas",
    ],
    process: [
      "Mapeo de procesos a automatizar",
      "Diseño de flujos conversacionales",
      "Desarrollo e integración de bots",
      "Entrenamiento con IA",
      "Monitoreo y mejora continua",
    ],
    technologies: ["n8n", "OpenAI", "WhatsApp Business API", "Telegram Bot API"],
  },
]
