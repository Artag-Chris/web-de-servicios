import { gsap } from "gsap"

// Si usas ScrollTrigger u otros plugins GSAP en este archivo los puedes registrar aquí
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Registrar el plugin si es necesario
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export const animateSection = (index: number) => {
    const sections = document.querySelectorAll<HTMLElement>(".hs-content-section")

    // Ocultar todas las secciones primero
    sections.forEach((section) => {
        gsap.to(section, { opacity: 0, y: 50, duration: 0.3 })
    })

    // Mostrar la sección activa
    if (sections[index]) {
        gsap.to(sections[index], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.1,
            ease: "power2.out",
        })
    }

    // Actualizar el indicador del paso activo
    const steps = document.querySelectorAll<HTMLElement>(".hs-step-dot")
    steps.forEach((step, i) => {
        if (i === index) {
            step.classList.add("hs-active")
        } else {
            step.classList.remove("hs-active")
        }
    })
}