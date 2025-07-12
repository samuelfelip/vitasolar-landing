"use client"

import { Star, Quote } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "María González",
    location: "Bogotá, Colombia",
    rating: 5,
    testimonial: "Increíble cómo VitaSolar transformó mi casa. Ahora pago 80% menos en luz y mi casa se ve moderna con los paneles. El equipo de Solvitech fue súper profesional.",
    savings: "80%",
    monthlyBill: 450000,
    newBill: 90000,
    installationTime: "2 días",
    systemSize: "5.5 kW",
    image: "👩‍💼" // En producción sería imagen real
  },
  {
    id: 2,
    name: "Carlos Hernández",
    location: "Medellín, Colombia",
    rating: 5,
    testimonial: "Dos años con VitaSolar y cero problemas. Los paneles funcionan perfecto y el ahorro es real. Recomiendo 100% la inversión.",
    savings: "85%",
    monthlyBill: 320000,
    newBill: 48000,
    installationTime: "1 día",
    systemSize: "4.2 kW",
    image: "👨‍🔧"
  },
  {
    id: 3,
    name: "Ana Sofía Martínez",
    location: "Cali, Colombia",
    rating: 5,
    testimonial: "Lo mejor que hice fue llamar a VitaSolar. El financiamiento fue súper fácil y ahora con lo que ahorro pago las cuotas. ¡Genial!",
    savings: "75%",
    monthlyBill: 280000,
    newBill: 70000,
    installationTime: "1 día",
    systemSize: "3.8 kW",
    image: "👩‍🏫"
  },
  {
    id: 4,
    name: "Roberto Jiménez",
    location: "Barranquilla, Colombia",
    rating: 5,
    testimonial: "Mi empresa redujo costos operativos enormemente. VitaSolar me ayudó con todo el proceso y ahora tengo energía limpia y barata.",
    savings: "90%",
    monthlyBill: 1500000,
    newBill: 150000,
    installationTime: "3 días",
    systemSize: "15 kW",
    image: "👨‍💼"
  },
  {
    id: 5,
    name: "Patricia Rojas",
    location: "Bucaramanga, Colombia",
    rating: 5,
    testimonial: "Pensé que era muy caro, pero VitaSolar me mostró que con el financiamiento se paga solo. Ahora tengo una casa ecológica y moderna.",
    savings: "70%",
    monthlyBill: 380000,
    newBill: 114000,
    installationTime: "2 días",
    systemSize: "4.8 kW",
    image: "👩‍🔬"
  },
  {
    id: 6,
    name: "Jaime Castillo",
    location: "Pereira, Colombia",
    rating: 5,
    testimonial: "Excelente servicio de VitaSolar. Desde la cotización hasta la instalación, todo fue perfecto. Mi factura bajó un 88% el primer mes.",
    savings: "88%",
    monthlyBill: 520000,
    newBill: 62000,
    installationTime: "2 días",
    systemSize: "6.2 kW",
    image: "👨‍🏭"
  }
]

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-smoke-white">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-graphite-gray mb-6">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-graphite-gray/80 leading-relaxed max-w-3xl mx-auto">
              Más de 500 familias ya disfrutan de los beneficios de la energía solar. 
              Conoce sus experiencias reales con VitaSolar.
            </p>
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-solar-yellow to-nature-green rounded-2xl p-8 text-center mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Familias satisfechas</div>
              </div>
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">4.9⭐</div>
                <div className="text-sm opacity-90">Calificación promedio</div>
              </div>
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">80%</div>
                <div className="text-sm opacity-90">Ahorro promedio</div>
              </div>
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Satisfacción garantizada</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 bg-white border-2 hover:border-solar-yellow">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{testimonial.image}</div>
                      <div>
                        <h3 className="font-bold text-graphite-gray text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-graphite-gray/80">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating 
                              ? 'text-solar-yellow fill-current' 
                              : 'text-graphite-gray/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-solar-yellow opacity-50" />
                    <p className="text-graphite-gray leading-relaxed pl-6 italic">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </div>

                  {/* Savings Info */}
                  <div className="bg-nature-green/10 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-graphite-gray/80">Ahorro mensual:</span>
                      <span className="font-bold text-nature-green text-lg">
                        {testimonial.savings}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Antes:</span>
                      <span className="line-through text-gray-600">
                        ${testimonial.monthlyBill.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Ahora:</span>
                      <span className="font-bold text-nature-green">
                        ${testimonial.newBill.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* System Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center bg-clean-blue/10 rounded-lg p-3">
                      <div className="font-bold text-clean-blue">
                        {testimonial.systemSize}
                      </div>
                      <div className="text-gray-600">Sistema</div>
                    </div>
                    <div className="text-center bg-solar-yellow/10 rounded-lg p-3">
                      <div className="font-bold text-graphite-gray">
                        {testimonial.installationTime}
                      </div>
                      <div className="text-gray-600">Instalación</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-graphite-gray mb-4">
                ¿Listo para ser nuestro próximo cliente satisfecho?
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Únete a las 500+ familias que ya disfrutan de energía solar con VitaSolar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://wa.me/573001234567?text=¡Hola! Quiero mi cotización gratuita de paneles solares después de ver los testimonios. ¿Cuánto puedo ahorrar?', '_blank')}
                  className="px-8 py-4 bg-solar-gradient text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Obtener cotización gratuita
                </button>
                <button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-graphite-gray font-semibold rounded-xl border-2 border-graphite-gray hover:bg-graphite-gray hover:text-white transition-all duration-300"
                >
                  Solicitar información
                </button>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-nature-green rounded-full"></div>
                <span>Garantía 25 años</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-clean-blue rounded-full"></div>
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-solar-yellow rounded-full"></div>
                <span>Financiamiento flexible</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-graphite-gray rounded-full"></div>
                <span>Instalación certificada</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection 