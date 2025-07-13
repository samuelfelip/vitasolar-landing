"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { contactFormSchema, type ContactFormData, CITIES, MONTHLY_BILL_RANGES } from "@/lib/validations"
import { generateWhatsAppLink } from "@/lib/utils"

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Send to WhatsApp
      const message = `🌟 Nueva solicitud de cotización VitaSolar:

👤 Nombre: ${data.fullName}
📱 WhatsApp: ${data.whatsapp}
🏙️ Ciudad: ${data.city}
💰 Factura mensual: ${data.monthlyBill}
🏠 Tipo: ${data.propertyType === 'residential' ? 'Residencial' : 'Comercial'}
${data.email ? `📧 Email: ${data.email}` : ''}
${data.message ? `💬 Mensaje: ${data.message}` : ''}

¡Contactar lo antes posible! 🚀`

      const whatsappLink = generateWhatsAppLink("+57 300 123 4567", message)
      window.open(whatsappLink, "_blank")
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Prevent hydration issues by not rendering motion components on server
  const MotionDiv = isMounted ? motion.div : 'div'

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-gradient-to-br from-nature-green to-clean-blue relative" style={{ backgroundImage: "url('/images/landing page/3.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-nature-green/90 to-clean-blue/90"></div>
        <Container>
          <MotionDiv
            {...(isMounted && {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.6 }
            })}
            className="max-w-2xl mx-auto text-center relative z-10"
          >
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¡Solicitud enviada exitosamente!
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Gracias por tu interés en VitaSolar. Nuestro equipo se pondrá en contacto contigo 
                por WhatsApp en las próximas horas para programar tu evaluación gratuita.
              </p>
            </div>
            <Card className="p-8 bg-white border-0 shadow-2xl">
                              <div className="text-center">
                  <div className="w-20 h-20 bg-nature-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                <div className="space-y-3 text-sm text-graphite-gray/80">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Respuesta en menos de 2 horas</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Evaluación 100% gratuita</span>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6">
                  Enviar otra solicitud
                </Button>
              </div>
            </Card>
          </MotionDiv>
        </Container>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-nature-green to-clean-blue relative" style={{ backgroundImage: "url('/images/landing page/3.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-nature-green/90 to-clean-blue/90"></div>
      <Container>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <MotionDiv
            {...(isMounted && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            })}
            className="text-center mb-16"
          >
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para pasarte a la energía solar?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Completa el formulario y recibe tu cotización personalizada totalmente gratis
              </p>
            </div>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <MotionDiv
              {...(isMounted && {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 }
              })}
              className="space-y-6"
            >
              <div className="text-white bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Contáctanos</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-nature-green rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-white/80">+57 300 123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-clean-blue rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-white/80">contacto@vitasolar.com.co</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-solar-yellow rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Cobertura</div>
                      <div className="text-white/80">Todo Colombia</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Horario</div>
                      <div className="text-white/80">Lun - Sáb: 8AM - 6PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Reminder */}
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="text-white font-bold mb-4">¿Por qué elegir VitaSolar?</h4>
                <div className="space-y-2 text-sm text-white/90">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Evaluación 100% gratuita</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Instaladores certificados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Financiamiento disponible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Garantía de 25 años</span>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Contact Form */}
            <MotionDiv
              {...(isMounted && {
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 }
              })}
              className="lg:col-span-2"
            >
              <Card className="p-8 bg-white border-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" suppressHydrationWarning>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-graphite-gray mb-2" style={{ color: '#333333' }}>
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        {...register("fullName")}
                        className="w-full px-4 py-3 border-2 border-nature-green/50 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow placeholder:text-gray-500"
                        placeholder="Tu nombre completo"
                        suppressHydrationWarning
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-graphite-gray mb-2" style={{ color: '#333333' }}>
                        Ciudad *
                      </label>
                      <select
                        id="city"
                        {...register("city")}
                        className="w-full px-4 py-3 border-2 border-nature-green/50 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow text-gray-700"
                        style={{ color: '#6B7280' }}
                        suppressHydrationWarning
                      >
                        <option value="" style={{ color: '#6B7280' }}>Selecciona tu ciudad</option>
                        {CITIES.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* WhatsApp */}
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium text-graphite-gray mb-2" style={{ color: '#333333' }}>
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        {...register("whatsapp")}
                        className="w-full px-4 py-3 border-2 border-nature-green/50 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow placeholder:text-gray-500"
                        placeholder="300 123 4567"
                        suppressHydrationWarning
                      />
                      {errors.whatsapp && (
                        <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                      )}
                    </div>

                    {/* Monthly Bill */}
                    <div>
                      <label htmlFor="monthlyBill" className="block text-sm font-medium text-graphite-gray mb-2" style={{ color: '#333333' }}>
                        Factura mensual de energía *
                      </label>
                      <select
                        id="monthlyBill"
                        {...register("monthlyBill")}
                        className="w-full px-4 py-3 border-2 border-nature-green/50 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow text-gray-700"
                        style={{ color: '#6B7280' }}
                        suppressHydrationWarning
                      >
                        <option value="" style={{ color: '#6B7280' }}>Selecciona un rango</option>
                        {MONTHLY_BILL_RANGES.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                      {errors.monthlyBill && (
                        <p className="mt-1 text-sm text-red-600">{errors.monthlyBill.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-sm font-medium text-graphite-gray mb-3" style={{ color: '#333333' }}>
                      Tipo de propiedad *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-center p-4 border-2 border-nature-green/50 rounded-md cursor-pointer hover:bg-smoke-white transition-colors">
                        <input
                          type="radio"
                          {...register("propertyType")}
                          value="residential"
                          className="mr-3 text-solar-yellow focus:ring-solar-yellow"
                          suppressHydrationWarning
                        />
                        <div>
                          <div className="font-medium text-graphite-gray" style={{ color: '#333333' }}>🏠 Residencial</div>
                          <div className="text-sm text-graphite-gray/80" style={{ color: '#333333' }}>Casa, apartamento, finca</div>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border-2 border-nature-green/50 rounded-md cursor-pointer hover:bg-smoke-white transition-colors">
                        <input
                          type="radio"
                          {...register("propertyType")}
                          value="commercial"
                          className="mr-3 text-solar-yellow focus:ring-solar-yellow"
                          suppressHydrationWarning
                        />
                        <div>
                          <div className="font-medium text-graphite-gray" style={{ color: '#333333' }}>🏢 Comercial</div>
                          <div className="text-sm text-graphite-gray/80" style={{ color: '#333333' }}>Empresa, local, industria</div>
                        </div>
                      </label>
                    </div>
                    {errors.propertyType && (
                      <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
                    )}
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-graphite-gray mb-2" style={{ color: '#333333' }}>
                      Email (opcional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border-2 border-nature-green/50 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow placeholder:text-gray-500"
                      placeholder="tu@email.com"
                      suppressHydrationWarning
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-graphite-gray mb-2" style={{ color: '#333333' }}>
                      Mensaje adicional (opcional)
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-nature-green/50 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow resize-none placeholder:text-gray-500"
                      placeholder="Cuéntanos más sobre tu proyecto..."
                      suppressHydrationWarning
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-nature-green text-white font-bold rounded-xl hover:bg-solar-yellow transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: '#43A047' }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#FFD600'
                        e.currentTarget.style.color = '#43A047'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#43A047'
                      e.currentTarget.style.color = 'white'
                    }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      "Solicitar cotización gratuita"
                    )}
                  </button>

                  <p className="text-xs text-graphite-gray/70 text-center" style={{ color: '#333333' }}>
                    Al enviar este formulario, aceptas que te contactemos por WhatsApp para brindarte 
                    más información sobre nuestros servicios de energía solar.
                  </p>
                </form>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection 