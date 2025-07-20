"use client"

import { DollarSign, Leaf, TrendingUp, Shield, Zap, Settings } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: DollarSign,
    title: "Ahorros desde el primer mes",
    description: "Reduce tu factura eléctrica inmediatamente después de la instalación. Ahorra hasta 90% en tu consumo energético.",
    color: "#4ade80"
  },
  {
    icon: Leaf,
    title: "Proteges el planeta",
    description: "Contribuyes al cuidado del medio ambiente reduciendo tu huella de carbono y usando energía limpia y renovable.",
    color: "#60a5fa"
  },
  {
    icon: TrendingUp,
    title: "Inviertes en tu propiedad",
    description: "Aumentas el valor de tu inmueble significativamente. Los paneles solares son una inversión que se revaloriza.",
    color: "#fde047"
  },
  {
    icon: Shield,
    title: "Subes el valor de tu negocio u hogar",
    description: "Mejoras la valorización de tu propiedad con tecnología moderna y sustentable que atrae compradores.",
    color: "#c4b5fd"
  },
  {
    icon: Zap,
    title: "¡No más aumentos en la factura eléctrica!",
    description: "Protégete de futuros aumentos en las tarifas eléctricas con tu propia generación de energía solar.",
    color: "#fdba74"
  },
  {
    icon: Settings,
    title: "Tecnología avanzada y confiable",
    description: "Paneles de última generación con inversores inteligentes y monitoreo en tiempo real de tu producción energética.",
    color: "#22d3ee"
  }
]

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative bg-[url('/images/landing page/5.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/80"></div>
      <Container>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="bg-white/10 rounded-lg p-4 sm:p-6 lg:p-8 backdrop-blur-sm max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Beneficios de pasarte a energía solar
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Descubre todas las ventajas que obtienes al instalar paneles solares en tu hogar o negocio
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-white/20 bg-white/10 backdrop-blur-sm">
                  <div className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="mb-4 lg:mb-6">
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        style={{ backgroundColor: benefit.color }}
                      >
                        <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
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
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="bg-yellow-500 rounded-2xl p-6 sm:p-8 lg:p-10 text-gray-900 shadow-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4">
                ¿Listo para comenzar a ahorrar?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-4 lg:mb-6 opacity-90">
                Únete a las familias que ya están disfrutando de energía solar limpia y económica
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center">
                <div className="flex items-center space-x-2 text-sm lg:text-base">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-gray-900 rounded-full shadow-sm"></div>
                  <span>Evaluación gratuita</span>
                </div>
                <div className="flex items-center space-x-2 text-sm lg:text-base">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-gray-900 rounded-full shadow-sm"></div>
                  <span>Sin costos ocultos</span>
                </div>
                <div className="flex items-center space-x-2 text-sm lg:text-base">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-gray-900 rounded-full shadow-sm"></div>
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
            className="mt-8 lg:mt-12"
          >
           {/*  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 border-l-4 border-l-solar-yellow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-solar-yellow rounded-full flex-shrink-0 shadow-lg"></div>
                <div>
                  <p className="text-white/90 italic mb-2">
                    &ldquo;Desde que instalé los paneles solares, mi factura de luz bajó de $400,000 a menos de $50,000 mensuales. ¡Increíble!&rdquo;
                  </p>
                  <p className="text-sm text-white/70">
                    <strong>María González</strong> - Bogotá
                  </p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default BenefitsSection 