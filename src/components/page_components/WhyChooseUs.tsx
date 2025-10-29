"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, animate } from "framer-motion"
import Image from "next/image"
import { Award, Globe, Sparkles, Star, Quote } from "lucide-react"
import { whyChooseStats, testimonials, clientLogos, whyChooseReasons } from "@/data/whyChooseUsData"

// Animated Counter Component
function AnimatedStat({ value, isVisible }: { value: string; isVisible: boolean }) {
    const [displayValue, setDisplayValue] = useState("0")

    useEffect(() => {
        if (!isVisible) return

        const match = value.match(/^(\d+)(.*)$/)
        if (!match) {
            setDisplayValue(value)
            return
        }

        const targetNumber = parseInt(match[1])
        const suffix = match[2]

        const controls = animate(0, targetNumber, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplayValue(Math.floor(latest) + suffix)
            },
        })

        return () => controls.stop()
    }, [value, isVisible])

    return <>{displayValue}</>
}

function WhyChooseUs() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)
    const isStatsInView = useInView(statsRef, { once: true })

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

    return (
        <section
            ref={sectionRef}
            id="why-choose-us"
            className="relative py-16 sm:py-24 overflow-hidden bg-zinc-950"
        >
            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl"></div>

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
                            <Award className="h-6 w-6 text-emerald-500" />
                        </div>
                        <span className="text-emerald-400 font-medium">Por qué elegirnos</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Choose <span className="text-emerald-500">Us</span>
                    </h2>

                    <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        Combinamos creatividad con estrategia para crear experiencias digitales que generan impacto real.
                        Nuestra pasión por la innovación y atención al detalle nos distingue en cada proyecto.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    ref={statsRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
                >
                    {whyChooseStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-emerald-500/5 transition-all duration-500"></div>

                                <div className="relative z-10 text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
                                        <AnimatedStat value={stat.value} isVisible={isStatsInView} />
                                    </div>
                                    <p className="text-sm text-zinc-400">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Reasons Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 sm:mb-20"
                >
                    {whyChooseReasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
                                {/* Background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/5 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-4xl mb-4">{reason.icon}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                                        {reason.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>

                                {/* Animated line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent origin-left"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-16 sm:mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Lo que dicen nuestros <span className="text-emerald-500">clientes</span>
                        </h3>
                        <p className="text-zinc-400">Testimonios reales de quienes confían en nosotros</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
                                    {/* Quote icon */}
                                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                        <Quote className="h-16 w-16 text-emerald-500" />
                                    </div>

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/5 transition-all duration-500"></div>

                                    <div className="relative z-10">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 italic">
                                            "{testimonial.quote}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/30">
                                                <Image
                                                    src={testimonial.image || ""}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">{testimonial.name}</p>
                                                <p className="text-sm text-zinc-400">
                                                    {testimonial.position} • {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Client Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <Globe className="h-5 w-5 text-emerald-500" />
                        <p className="text-zinc-400 text-sm sm:text-base">
                            Confiado por marcas líderes en todo el mundo
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        {clientLogos.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs
