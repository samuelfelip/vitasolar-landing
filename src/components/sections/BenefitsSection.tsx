"use client"

import { DollarSign, Leaf, TrendingUp, Shield, Zap } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: DollarSign,
    title: "Ahorros desde el primer mes",
    description: "Reduce tu factura eléctrica inmediatamente después de la instalación. Ahorra hasta 90% en tu consumo energético.",
    color: "bg-green-500"
  },
  {
    icon: Leaf,
    title: "Proteges el planeta",
    description: "Contribuyes al cuidado del medio ambiente reduciendo tu huella de carbono y usando energía limpia y renovable.",
    color: "bg-nature-green"
  },
  {
    icon: TrendingUp,
    title: "Inviertes en tu propiedad",
    description: "Aumentas el valor de tu inmueble significativamente. Los paneles solares son una inversión que se revaloriza.",
    color: "bg-clean-blue"
  },
  {
    icon: Shield,
    title: "Subes el valor de tu negocio u hogar",
    description: "Mejoras la valorización de tu propiedad con tecnología moderna y sustentable que atrae compradores.",
    color: "bg-purple-500"
  },
  {
    icon: Zap,
    title: "¡No más aumentos en la factura eléctrica!",
    description: "Protégete de futuros aumentos en las tarifas eléctricas con tu propia generación de energía solar.",
    color: "bg-solar-yellow"
  }
]

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-smoke-white to-gray-50">
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
              Beneficios de pasarte a energía solar
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Descubre todas las ventajas que obtienes al instalar paneles solares en tu hogar o negocio
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-white">
                  <div className="p-8 text-center">
                    <div className="mb-6">
                      <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-graphite-gray mb-4 group-hover:text-solar-yellow transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-solar-yellow to-nature-green rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para comenzar a ahorrar?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Únete a las familias que ya están disfrutando de energía solar limpia y económica
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Evaluación gratuita</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Sin costos ocultos</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Instalación garantizada</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Quick */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-solar-yellow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 italic mb-2">
                    &ldquo;Desde que instalé los paneles solares, mi factura de luz bajó de $400,000 a menos de $50,000 mensuales. ¡Increíble!&rdquo;
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>María González</strong> - Bogotá
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default BenefitsSection 