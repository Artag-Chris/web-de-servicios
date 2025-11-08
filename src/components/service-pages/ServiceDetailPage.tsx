"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Rocket, Code, Zap } from "lucide-react"
import type { Service } from "@/data/servicesData"
import { Button } from "@/components/ui/button"
import HeaderMain from "@/components/page_components/Headermain"
import FooterMain from "@/components/footers/FooterMain"

interface ServiceDetailPageProps {
  service: Service
}

const getServiceIcon = (id: string) => {
  switch (id) {
    case "brand-identity":
      return Rocket
    case "web-development":
      return Code
    case "business-scaling":
      return Zap
    case "debugging":
      return Code
    case "social-integration":
      return Rocket
    case "smart-bots":
      return Zap
    default:
      return Rocket
  }
}

const getAccentColor = (id: string) => {
  const colors = {
    "brand-identity": "from-purple-500 to-pink-500",
    "web-development": "from-blue-500 to-cyan-500",
    "business-scaling": "from-emerald-500 to-teal-500",
    "debugging": "from-orange-500 to-red-500",
    "social-integration": "from-pink-500 to-rose-500",
    "smart-bots": "from-indigo-500 to-purple-500",
  }
  return colors[id as keyof typeof colors] || "from-emerald-500 to-emerald-400"
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const Icon = getServiceIcon(service.id)
  const accentGradient = getAccentColor(service.id)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <HeaderMain />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950"></div>
        </div>

        {/* Decorative elements */}
        <div className={`absolute top-20 right-20 w-72 h-72 bg-gradient-to-br ${accentGradient} rounded-full blur-3xl opacity-20`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr ${accentGradient} rounded-full blur-3xl opacity-10`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver a servicios
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${accentGradient} bg-opacity-10 border border-white/10 mb-6`}>
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">Servicio Premium</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className={`bg-gradient-to-r ${accentGradient} hover:opacity-90 text-white px-8 py-6 text-lg`}>
                  Solicitar cotización
                </Button>
                <Button variant="outline" className="border-zinc-700 hover:border-emerald-500 px-8 py-6 text-lg">
                  Ver casos de éxito
                </Button>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-20`}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Beneficios <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>clave</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Lo que obtienes al trabajar con nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${accentGradient} bg-opacity-20`}>
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-zinc-300 flex-1">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nuestro <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>proceso</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Cómo trabajamos para entregar resultados excepcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group"
              >
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${accentGradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${accentGradient} text-white font-bold mb-4`}>
                  {index + 1}
                </div>
                <p className="text-zinc-300">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-20 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Tecnologías que <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>usamos</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-3 rounded-full bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 transition-colors"
                >
                  <span className="text-zinc-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-12 rounded-2xl bg-gradient-to-br ${accentGradient} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Listo para comenzar?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Conversemos sobre cómo podemos ayudarte con {service.title.toLowerCase()}
              </p>
              <Button className="bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-6 text-lg font-semibold">
                Contactar ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterMain />
    </div>
  )
}
