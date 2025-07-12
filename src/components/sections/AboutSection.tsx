"use client"

import { CheckCircle, Users, CreditCard, Settings } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Animated Counter Component
const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "" 
}: { 
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = Math.floor(easeOutQuart * end)
        
        setCount(current)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  )
}

const features = [
  {
    icon: CheckCircle,
    text: "Evaluamos tu caso sin costo",
    description: "Análisis gratuito de tu consumo energético y viabilidad del proyecto",
    color: "bg-nature-green"
  },
  {
    icon: Users,
    text: "Te conectamos con nuestros aliados técnicos certificados",
    description: "Instaladores expertos con certificaciones y experiencia comprobada",
    color: "bg-clean-blue"
  },
  {
    icon: CreditCard,
    text: "Te acompañamos en la financiación",
    description: "Opciones de crédito verde con tasas preferenciales y facilidades de pago",
    color: "bg-solar-yellow"
  },
  {
    icon: Settings,
    text: "Seguimos tu proyecto hasta la instalación",
    description: "Acompañamiento completo desde la cotización hasta la puesta en marcha",
    color: "bg-graphite-gray"
  }
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-graphite-gray mb-6" style={{ color: '#333333' }}>
              ¿Qué hacemos en VitaSolar?
            </h2>
            <p className="text-xl text-graphite-gray leading-relaxed max-w-3xl mx-auto" style={{ color: '#333333' }}>
              En VitaSolar te ayudamos a cambiarte a la energía solar de forma 
              <span className="text-nature-green font-bold" style={{ color: '#43A047' }}> fácil</span>, 
              <span className="text-clean-blue font-bold" style={{ color: '#0288D1' }}> segura</span> y 
              <span className="text-solar-yellow font-bold" style={{ color: '#FFD600' }}> rentable</span>.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-graphite-gray/20 hover:border-solar-yellow">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center shadow-lg`} style={{ backgroundColor: feature.color === 'bg-nature-green' ? '#43A047' : feature.color === 'bg-clean-blue' ? '#0288D1' : feature.color === 'bg-solar-yellow' ? '#FFD600' : '#333333' }}>
                          <feature.icon className="w-6 h-6 text-white" style={{ color: '#FFFFFF' }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-graphite-gray mb-2" style={{ color: '#333333' }}>
                          {feature.text}
                        </h3>
                        <p className="text-graphite-gray leading-relaxed" style={{ color: '#333333' }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Process Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-smoke-white rounded-2xl p-8 border-2 border-nature-green">
              <h3 className="text-2xl font-bold mb-4 text-nature-green" style={{ color: '#43A047' }}>
                Todo en un solo lugar
              </h3>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto text-graphite-gray" style={{ color: '#333333' }}>
                Desde la evaluación inicial hasta el encendido de tu sistema solar, 
                nos encargamos de cada paso para que tu experiencia sea completamente sin estrés.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2 bg-white p-6 rounded-xl border-4 border-nature-green shadow-lg">
                <div className="text-4xl font-bold" style={{ color: '#43A047' }}>
                  <AnimatedCounter end={500} suffix="+" duration={2.5} />
                </div>
                <div className="font-semibold" style={{ color: '#333333' }}>Familias con energía solar</div>
              </div>
              <div className="space-y-2 bg-white p-6 rounded-xl border-4 border-nature-green shadow-lg">
                <div className="text-4xl font-bold" style={{ color: '#FFD600' }}>
                  <AnimatedCounter end={15} suffix=" días" duration={2} />
                </div>
                <div className="font-semibold" style={{ color: '#333333' }}>Tiempo promedio de instalación</div>
              </div>
              <div className="space-y-2 bg-white p-6 rounded-xl border-4 border-nature-green shadow-lg">
                <div className="text-4xl font-bold" style={{ color: '#FFD600' }}>
                  <AnimatedCounter end={90} suffix="%" duration={2.2} />
                </div>
                <div className="font-semibold" style={{ color: '#333333' }}>Reducción promedio en factura</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection 