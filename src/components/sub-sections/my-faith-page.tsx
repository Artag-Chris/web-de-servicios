"use client"

import { ArrowLeft, Heart, Cross, Star, Sun } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function MyFaithPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Animate main title
      gsap.from(".main-title", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      })

      // Animate subtitle
      gsap.from(".subtitle", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
      })

      // Animate faith sections as they come into view
      gsap.utils.toArray(".faith-section").forEach((section, index) => {
        gsap.from(section as Element, {
          y: 60,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section as Element,
            start: "top 80%",
            end: "bottom 20%",
          },
        })
      })

      // Animate individual paragraphs
      gsap.utils.toArray(".faith-text").forEach((text, index) => {
        gsap.from(text as Element, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text as Element,
            start: "top 85%",
          },
          delay: index * 0.1,
        })
      })

      // Animate quotes
      gsap.utils.toArray(".faith-quote").forEach((quote) => {
        gsap.from(quote as Element, {
          scale: 0.9,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quote as Element,
            start: "top 75%",
          },
        })
      })

      // Animate icons
      gsap.utils.toArray(".faith-icon").forEach((icon, index) => {
        gsap.from(icon as Element, {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon as Element,
            start: "top 80%",
          },
          delay: index * 0.2,
        })
      })
    },
    { scope: containerRef },
  )

  return (
    <main ref={containerRef} className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Botón de regresar */}
        <Link
          href="/#about"
          className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-12 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Regresar al Inicio
        </Link>

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="main-title text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Mi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
              Fe
            </span>
          </h1>
          <p className="subtitle text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Un espacio sagrado donde comparto mi relación con Dios y las verdades que guían mi camino.
          </p>
        </div>

        {/* Faith Content */}
        <div className="space-y-24">
          {/* Section 1: Foundation */}
          <section className="faith-section text-center">
            <div className="faith-icon w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 flex items-center justify-center">
              <Cross className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Mi Fundamento</h2>
            <div className="space-y-6">
              <p className="faith-text text-lg md:text-xl text-zinc-300 leading-relaxed">
                Mi fe en Jesucristo es el fundamento sobre el cual construyo cada día de mi vida. No es solo una
                creencia, sino una relación viva que transforma mi corazón y guía cada decisión que tomo.
              </p>
              <p className="faith-text text-lg md:text-xl text-zinc-300 leading-relaxed">
                En un mundo lleno de incertidumbre, encuentro paz y propósito en Su amor incondicional. Cada desafío se
                convierte en una oportunidad para crecer en fe y cada bendición es un recordatorio de Su gracia.
              </p>
            </div>
          </section>

          {/* Quote 1 */}
          <div className="faith-quote text-center py-12">
            <blockquote className="text-2xl md:text-3xl font-light text-blue-400 italic leading-relaxed">
              "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de
              mal, para daros el fin que esperáis."
            </blockquote>
            <cite className="block mt-4 text-zinc-400">— Jeremías 29:11</cite>
          </div>

          {/* Section 2: Daily Walk */}
          <section className="faith-section text-center">
            <div className="faith-icon w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 flex items-center justify-center">
              <Sun className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Mi Caminar Diario</h2>
            <div className="space-y-6">
              <p className="faith-text text-lg md:text-xl text-zinc-300 leading-relaxed">
                Cada mañana es una nueva oportunidad para caminar en Sus caminos. La oración no es solo un ritual, sino
                una conversación íntima con mi Creador, donde encuentro dirección, consuelo y fortaleza.
              </p>
              <p className="faith-text text-lg md:text-xl text-zinc-300 leading-relaxed">
                Su Palabra es lámpara a mis pies y lumbrera a mi sendero. En ella encuentro sabiduría para enfrentar
                cada situación y esperanza para cada nuevo día.
              </p>
            </div>
          </section>

          {/* Quote 2 */}
          <div className="faith-quote text-center py-12">
            <blockquote className="text-2xl md:text-3xl font-light text-blue-400 italic leading-relaxed">
              "Todo lo puedo en Cristo que me fortalece."
            </blockquote>
            <cite className="block mt-4 text-zinc-400">— Filipenses 4:13</cite>
          </div>

          {/* Section 3: Purpose */}
          <section className="faith-section text-center">
            <div className="faith-icon w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 flex items-center justify-center">
              <Heart className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Mi Propósito</h2>
            <div className="space-y-6">
              <p className="faith-text text-lg md:text-xl text-zinc-300 leading-relaxed">
                Creo firmemente que cada talento, cada habilidad y cada oportunidad que tengo son regalos de Dios para
                ser usados en Su servicio y para bendición de otros.
              </p>
              <p className="faith-text text-lg md:text-xl text-zinc-300 leading-relaxed">
                Mi trabajo como desarrollador no es solo una profesión, sino una vocación para crear herramientas que
                puedan impactar positivamente la vida de las personas y glorificar a mi Creador.
              </p>
            </div>
          </section>

          {/* Section 4: Gratitude */}
          <section className="faith-section text-center">
            <div className="faith-icon w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 flex items-center justify-center">
              <Star className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Mi Gratitud</h2>
            <div className="space-y-6">
              <p className="faith-text text-lg md:text-xl text-zinc-300 leading-relaxed">
                Cada día es una oportunidad para reconocer Sus bendiciones. Desde las pequeñas misericordias hasta los
                grandes milagros, mi corazón se llena de gratitud por Su fidelidad constante.
              </p>
              <p className="faith-text text-lg md:text-xl text-zinc-300 leading-relaxed">
                En los momentos de alegría, celebro Su bondad. En los tiempos difíciles, confío en Su plan perfecto,
                sabiendo que todas las cosas ayudan a bien a los que le aman.
              </p>
            </div>
          </section>

          {/* Final Quote */}
          <div className="faith-quote text-center py-12">
            <blockquote className="text-2xl md:text-3xl font-light text-blue-400 italic leading-relaxed">
              "Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus
              caminos, y él enderezará tus veredas."
            </blockquote>
            <cite className="block mt-4 text-zinc-400">— Proverbios 3:5-6</cite>
          </div>

          {/* Closing */}
          <section className="faith-section text-center py-16">
            <div className="max-w-2xl mx-auto">
              <p className="faith-text text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                Esta es mi fe: simple, profunda y transformadora. Una fe que no solo habita en mi corazón, sino que se
                refleja en cada aspecto de mi vida.
              </p>
              <div className="mt-12 w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
