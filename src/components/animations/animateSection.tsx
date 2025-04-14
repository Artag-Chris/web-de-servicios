export const animateSection = (index: number) => {
    const sections = document.querySelectorAll<HTMLElement>(".hs-content-section")

    // Hide all sections first
    sections.forEach((section) => {
        gsap.to(section, { opacity: 0, y: 50, duration: 0.3 })
    })

    // Show the active section
    if (sections[index]) {
        gsap.to(sections[index], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.1,
            ease: "power2.out",
        })
    }

    // Update active step indicator
    const steps = document.querySelectorAll<HTMLElement>(".hs-step-dot")
    steps.forEach((step, i) => {
        if (i === index) {
            step.classList.add("hs-active")
        } else {
            step.classList.remove("hs-active")
        }
    })
}