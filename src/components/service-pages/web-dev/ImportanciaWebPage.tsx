"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Globe, Shield, Clock, TrendingUp, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderMain from "@/components/page_components/Headermain"
import FooterMain from "@/components/footers/FooterMain"

export default function ImportanciaWebPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <HeaderMain />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
            alt="Importancia Web"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950"></div>
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/servicios/desarrollo-web" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-8 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver a Desarrollo Web
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              ¿Por qué es importante tener una página web en <span className="text-emerald-500">2025</span>?
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              En la era digital, tu sitio web es tu carta de presentación global. Descubre por qué es esencial para tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "Visibilidad y Confianza",
                description: "Tener un sitio web propio te da presencia global, posiciona tu marca y permite a tus clientes encontrarte más fácilmente a través de búsquedas en Google y otros motores.",
              },
              {
                icon: Shield,
                title: "Automatización y Credibilidad",
                description: "Un sitio bien diseñado automatiza procesos, transmite profesionalismo y aumenta la credibilidad frente a clientes potenciales.",
              },
              {
                icon: TrendingUp,
                title: "Control Total",
                description: "Tu web es un espacio digital que controlas al 100%, sin depender de algoritmos de redes sociales, cambios de plataforma o reglas externas.",
              },
              {
                icon: Clock,
                title: "Acceso en Todo Momento",
                description: "Puedes conectar con tu audiencia 24/7 y ofrecer información clara, formularios automatizados, ventas, soporte y mucho más.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 w-fit mb-4">
                  <benefit.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              El impacto de tener <span className="text-emerald-500">presencia web</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "24/7", label: "Disponibilidad para tus clientes" },
              { value: "100%", label: "Control de tu espacio digital" },
              { value: "Global", label: "Alcance sin fronteras" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zinc-800/50 border border-zinc-800 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <p className="text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-12 rounded-2xl bg-emerald-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Listo para tu presencia digital?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Creemos juntos el sitio web que tu negocio necesita
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-zinc-100 px-8 py-6 text-lg font-semibold">
                Comenzar ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterMain />
    </div>
  )
}
