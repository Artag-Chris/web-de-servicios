"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Code, Smartphone, Zap, Globe, Rocket, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderMain from "@/components/page_components/Headermain"
import FooterMain from "@/components/footers/FooterMain"

export default function ServiceWebDevelopment() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <HeaderMain />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80"
            alt="Desarrollo Web"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950"></div>
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Code className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">Desarrollo Web Profesional</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Desarrollo <span className="text-emerald-500">Web</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Desarrollamos experiencias web que no solo se ven increíbles, sino que funcionan perfectamente.
                Desde landing pages hasta aplicaciones web complejas, creamos soluciones escalables y optimizadas
                que impulsan tu negocio.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg">
                  Solicitar cotización
                </Button>
                <Button variant="outline" className="border-zinc-700 hover:border-emerald-500 px-8 py-6 text-lg">
                  Ver proyectos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                  alt="Desarrollo Web"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub-Services Navigation */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nuestros <span className="text-emerald-500">servicios web</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Explora nuestras soluciones especializadas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="block p-6 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-emerald-500/50 transition-all group h-full"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <service.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-medium">
                    Explorar
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tecnologías <span className="text-emerald-500">modernas</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Trabajamos con las mejores herramientas del mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-emerald-500/30 transition-all text-center"
              >
                <span className="text-zinc-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Características <span className="text-emerald-500">principales</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nuestro <span className="text-emerald-500">proceso</span>
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
                className="relative p-6 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-zinc-300">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl bg-emerald-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Listo para tu nuevo sitio web?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Conversemos sobre cómo podemos crear la solución perfecta para ti
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-zinc-100 px-8 py-6 text-lg font-semibold">
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
