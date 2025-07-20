"use client"

import { Phone, Search, Calculator, Wrench, Smile } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { motion } from "framer-motion"

const steps = [
  {
    number: 1,
    title: "Contáctanos",
    description: "Llenas el formulario o hablas con un asesor. Te damos toda la información que necesitas sin compromiso.",
    icon: Phone,
    color: "bg-yellow-500"
  },
  {
    number: 2,
    title: "Estudio técnico",
    description: "Nuestros aliados revisan tu consumo y viabilidad. Evaluamos tu techo, orientación y potencial solar.",
    icon: Search,
    color: "bg-blue-500"
  },
  {
    number: 3,
    title: "Cotización + financiación",
    description: "Recibes una propuesta clara y transparente. Te ayudamos a financiar con entidades aliadas si lo necesitas.",
    icon: Calculator,
    color: "bg-green-500"
  },
  {
    number: 4,
    title: "Instalación rápida y garantizada",
    description: "Todo lo ejecutan expertos como Solvitech, con materiales certificados y garantía de por vida.",
    icon: Wrench,
    color: "bg-purple-500"
  },
  {
    number: 5,
    title: "¡Ahorra desde el primer mes!",
    description: "Empiezas a reducir tu factura eléctrica de inmediato y disfrutas de energía limpia para siempre.",
    icon: Smile,
    color: "bg-orange-500"
  }
]

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative bg-[url('/images/landing page/4.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/85"></div>
      <Container>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Cómo funciona el proceso?
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Te acompañamos paso a paso desde tu primera consulta hasta que empieces a ahorrar con energía solar
              </p>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6 lg:space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 lg:gap-8`}>
                  {/* Content */}
                  <div className="flex-1 w-full">
                    <Card className="p-4 sm:p-6 lg:p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                            <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 mb-3 lg:mb-4">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Step Number Visual */}
                  <div className="flex-shrink-0 order-first lg:order-none">
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                      {/* Arrow - hidden on mobile */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4">
                          <div className="w-1 h-12 lg:h-16 bg-gradient-to-b from-yellow-500 via-green-500 to-blue-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-clean-blue to-nature-green rounded-2xl p-8 text-white text-center shadow-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Todo el proceso toma entre 15-30 días
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Desde tu primer contacto hasta que empiezas a generar tu propia energía solar
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-2xl font-bold">1-3 días</div>
                  <div className="text-sm opacity-90">Evaluación y cotización</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">10-15 días</div>
                  <div className="text-sm opacity-90">Trámites y permisos</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">1-2 días</div>
                  <div className="text-sm opacity-90">Instalación completa</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-yellow-500 mb-2">100%</div>
                <div className="text-white/80">Instalaciones exitosas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-green-500 mb-2">25 años</div>
                <div className="text-white/80">Garantía en paneles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-500 mb-2">24/7</div>
                <div className="text-white/80">Soporte técnico</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection 