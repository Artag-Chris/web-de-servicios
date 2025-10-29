import { Check, X, Zap, Rocket, Crown, Code, Palette, Globe } from "lucide-react"

export interface PricingFeature {
  text: string
  included: boolean
  icon?: any
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  popular?: boolean
  icon: any
  features: PricingFeature[]
  buttonText: string
  buttonVariant?: "default" | "primary" | "premium"
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfecto para emprendedores y pequeños negocios que inician su presencia digital.",
    monthlyPrice: 299,
    annualPrice: 2990,
    icon: Zap,
    features: [
      { text: "Sitio web de hasta 5 páginas", included: true },
      { text: "Diseño responsive", included: true },
      { text: "SEO básico", included: true },
      { text: "Formulario de contacto", included: true },
      { text: "Integración redes sociales", included: true },
      { text: "1 mes de soporte", included: true },
      { text: "Hosting incluido (1 año)", included: false },
      { text: "E-commerce", included: false },
      { text: "Animaciones avanzadas", included: false },
    ],
    buttonText: "Comenzar",
    buttonVariant: "default",
  },
  {
    id: "business",
    name: "Business",
    description: "Ideal para empresas en crecimiento que buscan destacar con funcionalidades avanzadas.",
    monthlyPrice: 599,
    annualPrice: 5990,
    popular: true,
    icon: Rocket,
    features: [
      { text: "Sitio web de hasta 15 páginas", included: true },
      { text: "Diseño responsive premium", included: true },
      { text: "SEO avanzado", included: true },
      { text: "Blog integrado", included: true },
      { text: "Integración con CRM", included: true },
      { text: "3 meses de soporte", included: true },
      { text: "Hosting incluido (1 año)", included: true },
      { text: "E-commerce básico", included: true },
      { text: "Animaciones avanzadas", included: true },
      { text: "Panel de administración", included: true },
    ],
    buttonText: "Más Popular",
    buttonVariant: "primary",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Solución completa para empresas que requieren máxima personalización y escalabilidad.",
    monthlyPrice: 999,
    annualPrice: 9990,
    icon: Crown,
    features: [
      { text: "Sitio web ilimitado", included: true },
      { text: "Diseño 100% personalizado", included: true },
      { text: "SEO enterprise", included: true },
      { text: "E-commerce completo", included: true },
      { text: "Integraciones API ilimitadas", included: true },
      { text: "6 meses de soporte prioritario", included: true },
      { text: "Hosting premium incluido", included: true },
      { text: "Aplicación móvil (opcional)", included: true },
      { text: "Automatizaciones con n8n", included: true },
      { text: "Dashboard analytics avanzado", included: true },
      { text: "Consultoría estratégica", included: true },
    ],
    buttonText: "Contactar",
    buttonVariant: "premium",
  },
]

export interface FAQ {
  question: string
  answer: string
}

export const pricingFAQs: FAQ[] = [
  {
    question: "¿Qué incluye el soporte?",
    answer: "El soporte incluye actualizaciones de contenido, corrección de errores, y asistencia técnica vía email y chat. Los planes superiores incluyen soporte prioritario con tiempos de respuesta más rápidos.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Te ayudaremos con la transición y ajustaremos el costo proporcionalmente.",
  },
  {
    question: "¿Ofrecen garantía de devolución?",
    answer: "Ofrecemos una garantía de satisfacción de 30 días. Si no estás completamente satisfecho con nuestro trabajo, te devolvemos tu dinero sin preguntas.",
  },
  {
    question: "¿Los precios incluyen el dominio?",
    answer: "Los precios no incluyen el registro del dominio, pero te ayudamos a elegir y registrar el mejor dominio para tu negocio. El hosting está incluido en los planes Business y Premium.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito/débito, transferencias bancarias y PayPal. Para proyectos grandes, ofrecemos planes de pago flexibles.",
  },
]

export const pricingBenefits = [
  {
    icon: Code,
    title: "Código limpio",
    description: "Desarrollo con las mejores prácticas",
  },
  {
    icon: Palette,
    title: "Diseño único",
    description: "Personalizado para tu marca",
  },
  {
    icon: Globe,
    title: "Alcance global",
    description: "Optimizado para audiencias internacionales",
  },
]
