"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { navLinks, services, socialLinksFooter } from "@/data/footerData"


function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    // Simulate subscription
    setTimeout(() => {
      setIsSubscribed(true)
      setEmail("")
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }, 500)
  }

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      {/* Footer Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Logo y Acerca de */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <h3 className="text-xl font-bold text-white">Artag Dev</h3>
            </div>

            <p className="text-zinc-400 text-sm">
              Creando experiencias digitales excepcionales a través de soluciones innovadoras y código limpio y eficiente.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinksFooter.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Enlaces rápidos
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500 mr-2 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Servicios
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#contact"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500 mr-2 transition-colors"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Suscríbete para recibir actualizaciones sobre nuevos proyectos y artículos tecnológicos.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 pr-10 focus:border-emerald-500"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-1 top-1 h-8 bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-zinc-500 text-xs">
                  Respeto tu privacidad. Puedes darte de baja cuando desees.
                </p>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-md p-3 text-emerald-400 text-sm">
                ¡Gracias por suscribirte!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Inferior */}
      <div className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-500 text-sm mb-4 md:mb-0">© {currentYear} Artag Dev. Todos los derechos reservados.</div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                Política de privacidad
              </Link>
              <span className="text-zinc-700">•</span>
              <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                Términos de servicio
              </Link>
              <span className="text-zinc-700">•</span>
              <div className="text-zinc-500 text-sm flex items-center"> 
                hecho con <Heart className="h-3 w-3 text-emerald-500 mx-1" /> en Pereira
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
