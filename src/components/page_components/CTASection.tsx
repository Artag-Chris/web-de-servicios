"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Mail, User, MessageSquare, CheckCircle2, Sparkles, ArrowRight } from "lucide-react"
import { ctaFeatures, newsletterBenefits, socialProof } from "@/data/ctaData"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"contact" | "newsletter">("contact")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState("")

  // Floating label states
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setFormSubmitted(true)
      setContactForm({ name: "", email: "", message: "" })
      setTimeout(() => setFormSubmitted(false), 5000)
    }, 1000)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setNewsletterSubmitted(true)
      setNewsletterEmail("")
      setTimeout(() => setNewsletterSubmitted(false), 5000)
    }, 1000)
  }

  const isFieldFilled = (field: string) => {
    return contactForm[field as keyof typeof contactForm].length > 0
  }

  return (
    <section
      ref={sectionRef}
      id="cta-section"
      className="relative py-16 sm:py-24 overflow-hidden bg-zinc-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(16 185 129) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(16 185 129) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Sparkles className="h-6 w-6 text-emerald-500" />
            </div>
            <span className="text-emerald-400 font-medium">Conectemos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something <span className="text-emerald-500">Amazing</span>
          </h2>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad.
            Conversemos sobre cómo podemos impulsar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 p-1.5 bg-zinc-900/50 rounded-full border border-zinc-800">
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "contact"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              Enviar Mensaje
            </button>
            <button
              onClick={() => setActiveTab("newsletter")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "newsletter"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Mail className="h-4 w-4" />
              Newsletter
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {activeTab === "contact" ? (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5"></div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>

                      {formSubmitted ? (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="flex flex-col items-center justify-center py-12"
                        >
                          <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">¡Mensaje enviado!</h4>
                          <p className="text-zinc-400 text-center">
                            Gracias por contactarnos. Te responderemos pronto.
                          </p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              value={contactForm.name}
                              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-emerald-500 transition-all duration-300 peer"
                              placeholder="Tu nombre"
                            />
                            <label
                              htmlFor="name"
                              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                                focusedField === "name" || isFieldFilled("name")
                                  ? "-top-2.5 text-xs bg-zinc-900 px-2 text-emerald-400"
                                  : "top-4 text-base text-zinc-400"
                              }`}
                            >
                              Tu nombre
                            </label>
                            <User className="absolute right-4 top-4 h-5 w-5 text-zinc-500" />
                          </div>

                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              value={contactForm.email}
                              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-emerald-500 transition-all duration-300 peer"
                              placeholder="tu@email.com"
                            />
                            <label
                              htmlFor="email"
                              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                                focusedField === "email" || isFieldFilled("email")
                                  ? "-top-2.5 text-xs bg-zinc-900 px-2 text-emerald-400"
                                  : "top-4 text-base text-zinc-400"
                              }`}
                            >
                              Email
                            </label>
                            <Mail className="absolute right-4 top-4 h-5 w-5 text-zinc-500" />
                          </div>

                          <div className="relative">
                            <textarea
                              id="message"
                              value={contactForm.message}
                              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                              onFocus={() => setFocusedField("message")}
                              onBlur={() => setFocusedField(null)}
                              required
                              rows={5}
                              className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-emerald-500 transition-all duration-300 resize-none peer"
                              placeholder="Tu mensaje"
                            />
                            <label
                              htmlFor="message"
                              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                                focusedField === "message" || isFieldFilled("message")
                                  ? "-top-2.5 text-xs bg-zinc-900 px-2 text-emerald-400"
                                  : "top-4 text-base text-zinc-400"
                              }`}
                            >
                              Cuéntanos sobre tu proyecto
                            </label>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 group"
                          >
                            Enviar Mensaje
                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </form>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="newsletter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5"></div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4">Suscríbete a nuestro newsletter</h3>
                      <p className="text-zinc-400 mb-6">
                        Recibe contenido exclusivo, tips de desarrollo y ofertas especiales directamente en tu inbox.
                      </p>

                      {newsletterSubmitted ? (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="flex flex-col items-center justify-center py-12"
                        >
                          <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">¡Bienvenido a bordo!</h4>
                          <p className="text-zinc-400 text-center">
                            Revisa tu email para confirmar tu suscripción.
                          </p>
                        </motion.div>
                      ) : (
                        <>
                          <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                            <div className="relative">
                              <input
                                type="email"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required
                                className="w-full px-4 py-4 pr-32 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-all duration-300"
                                placeholder="tu@email.com"
                              />
                              <Button
                                type="submit"
                                className="absolute right-2 top-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                              >
                                Suscribir
                              </Button>
                            </div>
                          </form>

                          <div className="mt-8 space-y-3">
                            {newsletterBenefits.map((benefit, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="text-zinc-300 text-sm">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>

                          <p className="text-xs text-zinc-500 mt-6">
                            🔒 Tu privacidad es importante. No compartimos tu información con terceros.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Features & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Features */}
            <div className="space-y-6">
              {ctaFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-zinc-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20"
            >
              <h4 className="text-xl font-bold text-white mb-6 text-center">Únete a nuestra comunidad</h4>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{socialProof.subscribers}</div>
                  <p className="text-xs text-zinc-400">Suscriptores</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{socialProof.rating}</div>
                  <p className="text-xs text-zinc-400">Calificación</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{socialProof.projects}</div>
                  <p className="text-xs text-zinc-400">Proyectos</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-3">¿Listo para empezar?</h4>
                <p className="text-emerald-50 mb-6">
                  Agenda una consultoría gratuita y descubre cómo podemos ayudarte.
                </p>
                <Button className="bg-white text-emerald-600 hover:bg-zinc-100 font-semibold group/btn">
                  Agendar llamada
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
