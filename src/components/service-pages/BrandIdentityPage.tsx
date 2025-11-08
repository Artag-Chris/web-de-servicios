"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Palette, Sparkles, Target, Users, TrendingUp, Award, Zap, Globe, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderMain from "@/components/page_components/Headermain"
import FooterMain from "@/components/footers/FooterMain"

export default function ServiceBrandIdentity() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <HeaderMain />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80"
            alt="Identidad de Marca"
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
                <Palette className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">Diseño & Branding</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Identidad de <span className="text-emerald-500">Marca</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-6 leading-relaxed">
                En un mundo hiperconectado y digital, la marca personal ya no es solo una opción—es el activo más valioso para profesionales y negocios.
              </p>

              <p className="text-lg text-zinc-500 mb-8">
                Tu marca es más que un logo. Es la promesa que haces a tus clientes, la personalidad que proyectas
                y la experiencia que ofreces.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg">
                  Solicitar cotización
                </Button>
                <Button variant="outline" className=" text-black border-zinc-700 hover:border-emerald-500 px-8 py-6 text-lg hover:text-emerald-500">
                  Ver portafolio
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
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                  alt="Identidad de Marca"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Why it matters */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Por qué la marca personal es más importante que nunca en <span className="text-emerald-500">2025</span>?
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Hoy, el 90% de los compradores online sigue al menos una marca en redes sociales y el 60% de las empresas reconoce que tener una identidad de marca coherente les ha aportado entre un 10 y 20% de crecimiento anual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "90%", label: "Compradores siguen marcas en redes", icon: Users },
              { value: "60%", label: "Empresas reportan 10-20% crecimiento", icon: TrendingUp },
              { value: "38%", label: "Más impacto digital con marca personal", icon: Zap },
              { value: "50%+", label: "Usuarios influenciados por imagen online", icon: Eye },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-emerald-500/30 transition-all text-center group"
              >
                <div className="inline-flex p-3 rounded-full bg-emerald-500/10 mb-4">
                  <stat.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              El impacto de una presencia online <span className="text-emerald-500">profesional</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Check className="h-6 w-6 text-emerald-400" />
                Con Marca Personal
              </h3>
              <ul className="space-y-3">
                {[
                  "38% más impacto digital",
                  "Mayor fidelidad y confianza",
                  "Alcance 24/7 sin límites",
                  "Diferenciación clara en el mercado",
                  "Proyección de profesionalismo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800"
            >
              <h3 className="text-2xl font-bold text-zinc-400 mb-4 flex items-center gap-3">
                <span className="text-zinc-600">✕</span>
                Sin Identidad Digital
              </h3>
              <ul className="space-y-3">
                {[
                  "Compiten solo por precio",
                  "Pierden reconocimiento",
                  "Dependen del boca a boca",
                  "Mercados restringidos",
                  "Crecimiento limitado",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-500">
                    <span className="text-zinc-700 flex-shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Qué <span className="text-emerald-500">entregamos</span>?
            </h2>
            <p className="text-zinc-400 text-lg">
              Un paquete completo de identidad de marca que te diferencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Palette,
                title: "Logo & Variaciones",
                description: "Logo principal, versiones alternativas, favicon y aplicaciones en diferentes fondos",
              },
              {
                icon: Target,
                title: "Paleta de Colores",
                description: "Colores primarios, secundarios y complementarios con códigos HEX, RGB y CMYK",
              },
              {
                icon: Sparkles,
                title: "Tipografía",
                description: "Familias tipográficas para títulos, cuerpo y aplicaciones especiales",
              },
              {
                icon: Users,
                title: "Guía de Marca",
                description: "Manual completo de uso, aplicaciones correctas e incorrectas",
              },
              {
                icon: Globe,
                title: "Elementos Gráficos",
                description: "Patrones, iconografía y elementos visuales complementarios",
              },
              {
                icon: Eye,
                title: "Mockups",
                description: "Visualizaciones de tu marca en diferentes aplicaciones y contextos",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 w-fit mb-4">
                  <item.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
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
              "Investigación y análisis de mercado",
              "Definición de personalidad y valores",
              "Diseño de identidad visual",
              "Creación de guía de marca",
              "Implementación y lanzamiento",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white font-bold mb-4 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <p className="text-zinc-300">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends 2025 */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Lo nuevo en <span className="text-emerald-500">2025</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Tendencias y valor añadido en branding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "IA y Branding Dinámico",
                description: "La IA permite crear identidades personalizadas y adaptarlas en tiempo real según la audiencia y el canal.",
                stat: "72%",
                statLabel: "Prioriza experiencia de usuario",
              },
              {
                icon: Heart,
                title: "Simplicidad con Propósito",
                description: "Las marcas más valoradas transmiten sus valores en mensajes claros, visuales minimalistas y personalidades auténticas.",
                stat: "2x",
                statLabel: "Más fidelidad con valores claros",
              },
              {
                icon: Award,
                title: "Experiencia de Usuario",
                description: "Los especialistas en branding priorizan la experiencia de usuario y la estrategia en el desarrollo de marcas.",
                stat: "90%",
                statLabel: "Siguen marcas en redes",
              },
            ].map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-4 rounded-xl bg-emerald-500/10 w-fit mb-6">
                  <trend.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{trend.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{trend.description}</p>
                <div className="pt-6 border-t border-zinc-700">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{trend.stat}</div>
                  <p className="text-sm text-zinc-500">{trend.statLabel}</p>
                </div>
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
                ¿Listo para crear tu identidad de marca?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Conversemos sobre cómo podemos ayudarte a destacar en 2025
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
