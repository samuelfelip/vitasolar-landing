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
    color: "bg-solar-yellow"
  },
  {
    number: 2,
    title: "Estudio técnico",
    description: "Nuestros aliados revisan tu consumo y viabilidad. Evaluamos tu techo, orientación y potencial solar.",
    icon: Search,
    color: "bg-clean-blue"
  },
  {
    number: 3,
    title: "Cotización + financiación",
    description: "Recibes una propuesta clara y transparente. Te ayudamos a financiar con entidades aliadas si lo necesitas.",
    icon: Calculator,
    color: "bg-nature-green"
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
    <section id="proceso" className="py-20 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-graphite-gray mb-6">
              ¿Cómo funciona el proceso?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Te acompañamos paso a paso desde tu primera consulta hasta que empieces a ahorrar con energía solar
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                  {/* Content */}
                  <div className="flex-1">
                    <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center`}>
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-4">
                            <span className="text-2xl font-bold text-solar-yellow">
                              {step.number}
                            </span>
                            <h3 className="text-2xl font-bold text-graphite-gray">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Step Number Visual */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 bg-solar-gradient rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-graphite-gray">
                          {step.number}
                        </span>
                      </div>
                      {/* Arrow to next step */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4">
                          <div className="w-1 h-16 bg-gradient-to-b from-solar-yellow to-nature-green rounded-full"></div>
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
            <div className="bg-gradient-to-r from-clean-blue to-nature-green rounded-2xl p-8 text-white text-center">
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
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-solar-yellow">
                <div className="text-2xl font-bold text-solar-yellow mb-2">100%</div>
                <div className="text-gray-700">Instalaciones exitosas</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-nature-green">
                <div className="text-2xl font-bold text-nature-green mb-2">25 años</div>
                <div className="text-gray-700">Garantía en paneles</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-clean-blue">
                <div className="text-2xl font-bold text-clean-blue mb-2">24/7</div>
                <div className="text-gray-700">Soporte técnico</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection 