"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, DollarSign, HelpCircle, ChevronDown } from "lucide-react"
import { pricingPlans, pricingFAQs, pricingBenefits } from "@/data/pricingData"
import { Button } from "@/components/ui/button"

function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-16 sm:py-24 overflow-hidden bg-zinc-900"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl"></div>

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
              <DollarSign className="h-6 w-6 text-emerald-500" />
            </div>
            <span className="text-emerald-400 font-medium">Precios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Simple & Flexible <span className="text-emerald-500">Pricing</span>
          </h2>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen diseño profesional,
            código de calidad y soporte dedicado.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 p-1.5 bg-zinc-800/50 rounded-full border border-zinc-700"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                billingCycle === "annual"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-500 text-white text-xs rounded-full">
                -17%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`relative group ${plan.popular ? "lg:-mt-4" : ""}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white text-sm font-semibold rounded-full shadow-lg">
                      Más Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full p-8 rounded-2xl border transition-all duration-300 overflow-hidden ${
                    plan.popular
                      ? "bg-gradient-to-br from-zinc-900 to-zinc-800 border-emerald-500/50 shadow-xl shadow-emerald-500/10 lg:scale-105"
                      : "bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/30"
                  }`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                      plan.popular
                        ? "from-emerald-500/10 via-emerald-500/5 to-transparent opacity-100"
                        : "from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/5 opacity-0 group-hover:opacity-100"
                    }`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`p-3 rounded-xl ${
                          plan.popular ? "bg-emerald-500/20" : "bg-zinc-800"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            plan.popular ? "text-emerald-400" : "text-zinc-400"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-zinc-400 text-sm mb-6 min-h-[3rem]">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-bold text-white">
                          ${price.toLocaleString()}
                        </span>
                        <span className="text-zinc-400">
                          /{billingCycle === "monthly" ? "mes" : "año"}
                        </span>
                      </div>
                      {billingCycle === "annual" && (
                        <p className="text-sm text-emerald-400 mt-2">
                          Ahorra ${((plan.monthlyPrice * 12) - plan.annualPrice).toLocaleString()} al año
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full mb-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                        plan.popular
                          ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                          : plan.buttonVariant === "premium"
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-600 hover:to-emerald-500 text-white"
                            : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-emerald-500/50"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>

                    {/* Features */}
                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-zinc-300 mb-4">
                        Incluye:
                      </p>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                              <Check className="h-3 w-3 text-emerald-400" />
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center mt-0.5">
                              <X className="h-3 w-3 text-zinc-600" />
                            </div>
                          )}
                          <span
                            className={`text-sm ${
                              feature.included ? "text-zinc-300" : "text-zinc-600"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 sm:mb-20"
        >
          {pricingBenefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-emerald-500/10 mb-4">
                  <Icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-zinc-400">{benefit.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="h-6 w-6 text-emerald-500" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Preguntas <span className="text-emerald-500">Frecuentes</span>
              </h3>
            </div>
            <p className="text-zinc-400">Todo lo que necesitas saber sobre nuestros planes</p>
          </div>

          <div className="space-y-4">
            {pricingFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.05 }}
                className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30 hover:border-emerald-500/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
