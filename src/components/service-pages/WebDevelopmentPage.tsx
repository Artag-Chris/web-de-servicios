"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Code, Smartphone, Zap, Globe, Rocket, Shield, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderMain from "@/components/page_components/Headermain"
import FooterMain from "@/components/footers/FooterMain"
import LottieAnimation from "@/components/ui/LottieAnimation"

export default function ServiceWebDevelopment() {

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <HeaderMain />

      {/* Hero Section - MEJORADO */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950"></div>
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-12 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver a servicios
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <Code className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">Desarrollo Web Profesional</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Desarrollo <span className="text-emerald-400 inline-block">Web</span>
              </h1>

              <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-lg">
                Desarrollamos experiencias web que no solo se ven increíbles, sino que funcionan perfectamente. Desde
                landing pages hasta aplicaciones web complejas.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105">
                  Solicitar cotización
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-600 hover:border-emerald-400 px-8 py-6 text-lg rounded-lg transition-all hover:bg-emerald-500/10 bg-transparent"
                >
                  Ver proyectos
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-800">
                <div>
                  <div className="text-2xl font-bold text-emerald-400">50+</div>
                  <p className="text-zinc-400 text-sm">Proyectos completados</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">98%</div>
                  <p className="text-zinc-400 text-sm">Satisfacción de clientes</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">24/7</div>
                  <p className="text-zinc-400 text-sm">Soporte técnico</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 p-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-600/20 via-transparent to-transparent"></div>
                <div className="relative w-full h-full bg-zinc-900/50 rounded-xl flex items-center justify-center overflow-hidden p-8">
                  <LottieAnimation
                    animationPath="business-analysis.json"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              {/* Elementos decorativos flotantes */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Importancia de Servicios - NUEVA */}
      <section className="py-32 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Star className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Importancia clave</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              ¿Por qué tu negocio <span className="text-emerald-400">necesita una web?</span>
            </h2>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
              En 2025, tu presencia digital es tu mayor activo. Descubre por qué invertir en desarrollo web es invertir
              en el futuro de tu negocio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Presencia Digital Global",
                description: "Llega a millones de potenciales clientes 24/7. Tu sitio web no cierra nunca.",
                icon: Globe,
                stats: "3.5B+ usuarios en internet",
              },
              {
                number: "02",
                title: "Credibilidad y Profesionalismo",
                description: "Una web moderna comunica profesionalismo y genera confianza en tus clientes.",
                icon: Shield,
                stats: "80% de compras comienzan con búsqueda",
              },
              {
                number: "03",
                title: "Automatización y Escalabilidad",
                description: "Automatiza procesos, vende sin límites y crece sin aumentar costos operacionales.",
                icon: Rocket,
                stats: "70% más conversiones con web",
              },
              {
                number: "04",
                title: "Control Total de tu Marca",
                description: "No dependas de redes sociales. Tu sitio es tuyo, con total control de diseño y datos.",
                icon: Code,
                stats: "100% propietario del contenido",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl font-bold text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                      {item.number}
                    </span>
                    <item.icon className="h-8 w-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed">{item.description}</p>
                  <div className="pt-6 border-t border-zinc-700/50">
                    <p className="text-emerald-400 font-semibold text-sm">{item.stats}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services Navigation - ESPACIADO MEJORADO */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Explora nuestros <span className="text-emerald-400">servicios especializados</span>
            </h2>
            <p className="text-zinc-300 text-lg">Soluciones completas en desarrollo web</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "¿Por qué tener una web?",
                description: "Descubre la importancia de tu presencia digital en 2025",
                href: "/servicios/desarrollo-web/importancia",
                icon: Globe,
              },
              {
                title: "Next.js vs WordPress",
                description: "Tecnología moderna para aplicaciones de alto rendimiento",
                href: "/servicios/desarrollo-web/tecnologia",
                icon: Code,
              },
              {
                title: "Diseño & UX 2025",
                description: "Experiencias emocionales que conectan con usuarios",
                href: "/servicios/desarrollo-web/diseno-ux",
                icon: Smartphone,
              },
              {
                title: "Automatización",
                description: "Cómo nuestras apps impulsan tu negocio",
                href: "/servicios/desarrollo-web/automatizacion",
                icon: Zap,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all group h-full hover:bg-zinc-800/50"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 w-fit mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <service.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                    Explorar
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies - ESPACIADO MEJORADO */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Tecnologías <span className="text-emerald-400">modernas</span>
            </h2>
            <p className="text-zinc-300 text-lg">Trabajamos con las mejores herramientas del mercado</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all text-center group"
              >
                <span className="text-zinc-300 font-medium group-hover:text-emerald-400 transition-colors">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - ESPACIADO MEJORADO */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Características <span className="text-emerald-400">principales</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Diseño Responsive",
                description: "Tu sitio se verá perfecto en cualquier dispositivo, desde móviles hasta pantallas 4K",
              },
              {
                icon: Zap,
                title: "Rendimiento Óptimo",
                description: "Carga rápida y optimización SEO para que tus usuarios y Google te amen",
              },
              {
                icon: Shield,
                title: "Seguridad Robusta",
                description: "Implementamos las mejores prácticas de seguridad para proteger tu sitio",
              },
              {
                icon: Globe,
                title: "SEO Optimizado",
                description: "Código limpio y estructura optimizada para motores de búsqueda",
              },
              {
                icon: Rocket,
                title: "Escalable",
                description: "Arquitectura preparada para crecer con tu negocio sin limitaciones",
              },
              {
                icon: Code,
                title: "Código Limpio",
                description: "Desarrollo con las mejores prácticas y estándares de la industria",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - ESPACIADO MEJORADO */}
      <section className="py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Nuestro <span className="text-emerald-400">proceso</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Análisis de requisitos",
              "Diseño UX/UI",
              "Desarrollo frontend y backend",
              "Testing y optimización",
              "Despliegue y mantenimiento",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-zinc-300 font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - MEJORADA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">¿Listo para tu nuevo sitio web?</h2>
              <p className="text-white/95 text-lg mb-10 max-w-2xl mx-auto">
                Conversemos sobre cómo podemos crear la solución perfecta para tu negocio
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-zinc-100 px-10 py-7 text-lg font-semibold rounded-lg transition-all hover:scale-105">
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
