"use client"

import { Leaf, Calendar, Gift, Building2 } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { generateWhatsAppLink } from "@/lib/utils"

const financingOptions = [
  {
    title: "Créditos verdes con tasas especiales",
    icon: Leaf,
    description: "Tasas preferenciales para proyectos sostenibles. Aprovecha los beneficios gubernamentales para energía renovable.",
    features: [
      "Tasas desde 8% E.A.",
      "Hasta 10 años de plazo",
      "Beneficios tributarios",
      "Aprobación rápida"
    ],
    color: "bg-nature-green"
  },
  {
    title: "Cuotas mensuales que se pagan con el mismo ahorro",
    icon: Calendar,
    description: "Paga tu sistema con el dinero que ahorras en tu factura eléctrica. Tu cuota mensual será menor a lo que pagas actualmente.",
    features: [
      "Cuota ≤ ahorro mensual",
      "Cash flow positivo",
      "Sin afectar tu presupuesto",
      "ROI inmediato"
    ],
    color: "bg-clean-blue"
  },
  {
    title: "Opciones sin cuota inicial",
    icon: Gift,
    description: "Comienza sin inversión inicial. Financiamos el 100% de tu proyecto solar con excelentes condiciones.",
    features: [
      "0% cuota inicial",
      "Financiación 100%",
      "Proceso simplificado",
      "Instalación inmediata"
    ],
    color: "bg-solar-yellow"
  }
]

const partners = [
  { name: "Bancolombia", logo: "🏦" },
  { name: "Finandina", logo: "💳" },
  { name: "Sufi", logo: "🏛️" },
  { name: "Cooperativas locales", logo: "🤝" }
]

const FinancingSection = () => {
  const handleFinancingContact = () => {
    const message = "Hola, quiero información sobre las opciones de financiamiento para paneles solares de VitaSolar"
    const whatsappLink = generateWhatsAppLink("+57 300 123 4567", message)
    window.open(whatsappLink, "_blank")
  }

  return (
    <section id="financiamiento" className="py-20 bg-gradient-to-br from-smoke-white to-blue-50">
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
              Opciones de financiamiento
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Sabemos que el costo inicial puede ser una barrera. Por eso trabajamos con aliados financieros que ofrecen:
            </p>
          </motion.div>

          {/* Financing Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {financingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-white">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-graphite-gray mb-3 group-hover:text-solar-yellow transition-colors duration-300">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-solar-yellow rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-graphite-gray mb-4">
                Nuestros aliados financieros
              </h3>
              <p className="text-gray-600">
                Trabajamos con las mejores entidades financieras del país
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <div className="text-sm font-medium text-graphite-gray">
                      {partner.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-nature-green to-clean-blue rounded-2xl p-8 text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Necesitas ayuda con el financiamiento?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Nuestros asesores financieros te ayudan a encontrar la mejor opción según tu perfil y necesidades
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Asesoría gratuita</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Pre-aprobación en 24 horas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Múltiples opciones</span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleFinancingContact}
                  className="bg-white text-nature-green hover:bg-gray-100"
                >
                  Consultar opciones de financiamiento
                </Button>
              </div>
            </div>
          </motion.div>

          {/* ROI Calculator Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-solar-yellow">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-graphite-gray mb-2">
                    💡 ¿Sabías que...?
                  </h4>
                  <p className="text-gray-600">
                    Con nuestros planes de financiamiento, puedes tener ROI positivo desde el primer mes. 
                    Tu cuota mensual será menor que tu ahorro en energía.
                  </p>
                </div>
                <div className="hidden md:block">
                  <Building2 className="w-16 h-16 text-solar-yellow" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default FinancingSection 