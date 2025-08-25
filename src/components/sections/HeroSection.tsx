"use client"

import { useState } from "react"
import { Card } from "@/components/ui/Card"
import Container from "@/components/layout/Container"
import { generateWhatsAppLink } from "@/lib/utils"
import { motion } from "framer-motion"

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    whatsapp: "",
    monthlyBill: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, soy ${formData.name} de ${formData.city}. Mi WhatsApp es ${formData.whatsapp} y pago aproximadamente ${formData.monthlyBill} de energía al mes. Quiero una cotización para paneles solares.`
    const whatsappLink = generateWhatsAppLink("+57 300 344 0025", message)
    window.open(whatsappLink, "_blank")
  }

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 min-h-screen items-center py-8 lg:py-12 xl:py-0">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white z-10 order-2 lg:order-1 text-center lg:text-left px-4 sm:px-6 lg:px-0"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Energía Solar para tu hogar en
              <span className="text-yellow-500 block mt-1 sm:mt-2">Cartagena</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Reduce tu factura de energía hasta un 95% con paneles solares. 
              Financiación disponible y garantía de 25 años.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-nature-green text-white font-bold rounded-xl hover:bg-solar-yellow transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: '#43A047' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD600'
                  e.currentTarget.style.color = '#43A047'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#43A047'
                  e.currentTarget.style.color = 'white'
                }}
              >
                Cotiza gratis ahora
              </button>
              <button
                onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white text-nature-green font-bold rounded-xl border-2 border-nature-green hover:bg-nature-green hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                style={{ borderColor: '#43A047', color: '#43A047' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#43A047'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white'
                  e.currentTarget.style.color = '#43A047'
                }}
              >
                ¿Cómo funciona?
              </button>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-0"
          >
            <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 lg:p-8 shadow-2xl bg-white/95 backdrop-blur-sm">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Cotización Gratuita
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Descubre cuánto puedes ahorrar con energía solar
                </p>
              </div>

              <form onSubmit={handleQuoteSubmit} className="space-y-3 sm:space-y-4" suppressHydrationWarning={true}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-1 sm:mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 placeholder:text-gray-500"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-bold text-gray-900 mb-1 sm:mb-2">
                    Ciudad
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  >
                    <option value="" className="text-gray-500">Selecciona tu ciudad</option>
                    <option value="Cartagena" className="text-gray-900">Cartagena</option>
                    <option value="Turbaco" className="text-gray-900">Turbaco</option>
                    <option value="Arjona" className="text-gray-900">Arjona</option>
                    <option value="Clemencia" className="text-gray-900">Clemencia</option>
                    <option value="Santa Rosa de Lima" className="text-gray-900">Santa Rosa de Lima</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-900 mb-1 sm:mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 placeholder:text-gray-500"
                    placeholder="300 123 4567"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="monthlyBill" className="block text-sm font-bold text-gray-900 mb-1 sm:mb-2">
                    Factura mensual promedio
                  </label>
                  <select
                    id="monthlyBill"
                    name="monthlyBill"
                    value={formData.monthlyBill}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  >
                    <option value="" className="text-gray-500">Selecciona un rango</option>
                    <option value="$100,000 - $200,000" className="text-gray-900">$100,000 - $200,000</option>
                    <option value="$200,000 - $300,000" className="text-gray-900">$200,000 - $300,000</option>
                    <option value="$300,000 - $500,000" className="text-gray-900">$300,000 - $500,000</option>
                    <option value="$500,000 - $800,000" className="text-gray-900">$500,000 - $800,000</option>
                    <option value="Más de $800,000" className="text-gray-900">Más de $800,000</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-nature-green text-white font-bold rounded-xl hover:bg-solar-yellow transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                  style={{ backgroundColor: '#43A047' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFD600'
                    e.currentTarget.style.color = '#43A047'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#43A047'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  Recibir cotización gratis
                </button>
              </form>

              <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
                💚 100% gratis • Sin compromiso • Respuesta inmediata
              </p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection 