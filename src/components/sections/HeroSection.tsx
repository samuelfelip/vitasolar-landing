"use client"

import { useState } from "react"
import { Card } from "@/components/ui/Card"
import Container from "@/components/layout/Container"
import { Sun, Zap, ArrowRight, Phone } from "lucide-react"
import { generateWhatsAppLink } from "@/lib/utils"

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
    const whatsappLink = generateWhatsAppLink("+57 300 123 4567", message)
    window.open(whatsappLink, "_blank")
  }

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900 py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-nature-green">
                <Sun className="w-6 h-6 text-solar-yellow" style={{ color: '#FFD600' }} />
                <span className="text-sm font-bold uppercase tracking-wide">
                  Energía Solar en Colombia
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-graphite-gray leading-tight">
                Ahorra en tu factura de luz con{" "}
                <span className="text-solar-yellow">energía solar</span>
              </h1>
              
              <p className="text-lg text-graphite-gray leading-relaxed">
                Instala paneles solares sin complicaciones y con respaldo técnico. 
                VitaSolar te conecta con instaladores certificados y te ayuda a financiar tu proyecto.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-nature-green rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-graphite-gray font-semibold">
                  Ahorra hasta 90% en tu factura
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-clean-blue rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-graphite-gray font-semibold">
                  Instalación en 15 días
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">          
              <button
                onClick={() => {
                  const whatsappLink = generateWhatsAppLink(
                    "+57 300 123 4567",
                    "Hola, quiero más información sobre los paneles solares de VitaSolar"
                  )
                  window.open(whatsappLink, "_blank")
                }}
                className="px-8 py-4 bg-nature-green text-white font-bold text-lg rounded-xl hover:bg-solar-yellow hover:text-graphite-gray transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#43A047', color: '#FFFFFF' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD600'
                  e.currentTarget.style.color = '#43A047'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#43A047'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
              >
                <Phone className="w-5 h-5" />
                <span>¡Quiero más información!</span>
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:justify-self-end">
            <Card className="p-8 shadow-2xl border-2 border-nature-green" style={{ backgroundColor: '#43A047' }}>
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-white" style={{ color: '#FFFFFF' }}>
                    Cotización Gratuita
                  </h2>
                  <p className="text-white" style={{ color: '#FFFFFF' }}>
                    Descubre cuánto puedes ahorrar con energía solar
                  </p>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-white mb-2" style={{ color: '#FFFFFF' }}>
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow text-white placeholder-white bg-transparent"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-bold text-white mb-2" style={{ color: '#FFFFFF' }}>
                      Ciudad
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow text-white bg-transparent"
                      required
                    >
                      <option value="" style={{ color: '#FFFFFF' }}>Selecciona tu ciudad</option>
                      <option value="Bogotá" style={{ color: '#FFFFFF' }}>Bogotá</option>
                      <option value="Medellín" style={{ color: '#FFFFFF' }}>Medellín</option>
                      <option value="Cali" style={{ color: '#FFFFFF' }}>Cali</option>
                      <option value="Barranquilla" style={{ color: '#FFFFFF' }}>Barranquilla</option>
                      <option value="Cartagena" style={{ color: '#FFFFFF' }}>Cartagena</option>
                      <option value="Bucaramanga" style={{ color: '#FFFFFF' }}>Bucaramanga</option>
                      <option value="Otra" style={{ color: '#FFFFFF' }}>Otra ciudad</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-bold text-white mb-2" style={{ color: '#FFFFFF' }}>
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow text-white placeholder-white bg-transparent"
                      placeholder="300 123 4567"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="monthlyBill" className="block text-sm font-bold text-white mb-2" style={{ color: '#FFFFFF' }}>
                      ¿Cuánto pagas de energía al mes?
                    </label>
                    <select
                      id="monthlyBill"
                      name="monthlyBill"
                      value={formData.monthlyBill}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow text-white bg-transparent"
                      required
                    >
                      <option value="" style={{ color: '#FFFFFF' }}>Selecciona un rango</option>
                      <option value="$50,000 - $100,000" style={{ color: '#FFFFFF' }}>$50,000 - $100,000</option>
                      <option value="$100,000 - $200,000" style={{ color: '#FFFFFF' }}>$100,000 - $200,000</option>
                      <option value="$200,000 - $300,000" style={{ color: '#FFFFFF' }}>$200,000 - $300,000</option>
                      <option value="$300,000 - $500,000" style={{ color: '#FFFFFF' }}>$300,000 - $500,000</option>
                      <option value="$500,000 - $1,000,000" style={{ color: '#FFFFFF' }}>$500,000 - $1,000,000</option>
                      <option value="Más de $1,000,000" style={{ color: '#FFFFFF' }}>Más de $1,000,000</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-white text-nature-green font-bold text-lg rounded-xl hover:bg-solar-yellow hover:text-nature-green transition-all duration-300 hover:scale-105 shadow-lg border-2 border-white hover:border-solar-yellow"
                    style={{ backgroundColor: '#FFFFFF', color: '#43A047' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFD600'
                      e.currentTarget.style.color = '#43A047'
                      e.currentTarget.style.borderColor = '#FFD600'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF'
                      e.currentTarget.style.color = '#43A047'
                      e.currentTarget.style.borderColor = '#FFFFFF'
                    }}
                  >
                    Solicitar cotización gratuita
                  </button>
                </form>

                <p className="text-xs text-white/80 text-center" style={{ color: '#FFFFFF' }}>
                  Al enviar este formulario, aceptas que te contactemos por WhatsApp
                  para brindarte más información sobre nuestros servicios.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection 