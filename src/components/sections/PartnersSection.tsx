"use client"

import { Star, Award, Wrench, Shield, CheckCircle } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { motion } from "framer-motion"

const partners = [
  {
    id: "solvitech",
    name: "Solvitech",
    logo: "🔧", // En producción sería una imagen real
    description: "Expertos en instalación de paneles solares con más de 10 años de experiencia",
    services: [
      "Instalación residencial",
      "Proyectos comerciales", 
      "Mantenimiento preventivo",
      "Soporte técnico 24/7"
    ],
    certifications: [
      "Certificación RETIE",
      "ISO 9001:2015",
      "Técnicos certificados",
      "Garantía extendida"
    ],
    experience: 10,
    rating: 4.9,
    completedProjects: 1200,
    highlights: [
      "Instalaciones en tiempo récord",
      "Garantía de 25 años en paneles",
      "Equipos de última tecnología",
      "100% de proyectos exitosos"
    ]
  }
]

const certifications = [
  {
    icon: Award,
    title: "Certificaciones Técnicas",
    description: "Todos nuestros aliados cuentan con certificaciones RETIE y estándares internacionales"
  },
  {
    icon: Shield,
    title: "Garantía Extendida",
    description: "25 años de garantía en paneles y 10 años en inversores con nuestros aliados"
  },
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description: "Técnicos especializados con experiencia en sistemas solares residenciales y comerciales"
  },
  {
    icon: CheckCircle,
    title: "Soporte Continuo",
    description: "Acompañamiento y mantenimiento durante toda la vida útil de tu sistema solar"
  }
]

const PartnersSection = () => {
  return (
    <section id="aliados" className="py-20 bg-white">
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
              Nuestros aliados técnicos
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Contamos con aliados certificados que garantizan instalaciones seguras, rápidas y con garantía.
            </p>
          </motion.div>

          {/* Main Partner - Solvitech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-solar-yellow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Partner Info */}
                <div className="lg:col-span-1">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{partners[0].logo}</div>
                    <h3 className="text-2xl font-bold text-graphite-gray mb-2">
                      {partners[0].name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {partners[0].description}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-solar-yellow">
                        {partners[0].experience}+
                      </div>
                      <div className="text-xs text-gray-600">Años</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-nature-green">
                        {partners[0].rating}
                      </div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-clean-blue">
                        {partners[0].completedProjects}+
                      </div>
                      <div className="text-xs text-gray-600">Proyectos</div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-bold text-graphite-gray mb-4">
                    Servicios especializados
                  </h4>
                  <div className="space-y-3">
                    {partners[0].services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-solar-yellow rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-bold text-graphite-gray mb-4 mt-6">
                    Certificaciones
                  </h4>
                  <div className="space-y-3">
                    {partners[0].certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Star className="w-4 h-4 text-solar-yellow flex-shrink-0" />
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-bold text-graphite-gray mb-4">
                    ¿Por qué elegir Solvitech?
                  </h4>
                  <div className="space-y-4">
                    {partners[0].highlights.map((highlight, index) => (
                      <div key={index} className="bg-solar-yellow/10 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-nature-green flex-shrink-0" />
                          <span className="text-graphite-gray font-medium">{highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-graphite-gray text-center mb-12">
              Estándares de calidad garantizados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-solar-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-6 h-6 text-graphite-gray" />
                    </div>
                    <h4 className="text-lg font-semibold text-graphite-gray mb-3">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Quality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-clean-blue to-nature-green rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Instalación con los más altos estándares
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">RETIE</div>
                  <div className="text-sm opacity-90">Certificación obligatoria</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">ISO 9001</div>
                  <div className="text-sm opacity-90">Gestión de calidad</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">25 años</div>
                  <div className="text-sm opacity-90">Garantía total</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expansion Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-nature-green">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-graphite-gray mb-2">
                    🚀 Ampliando nuestra red de aliados
                  </h4>
                  <p className="text-gray-600">
                    Constantemente evaluamos y agregamos nuevos aliados técnicos certificados 
                    para brindarte el mejor servicio en todo Colombia.
                  </p>
                </div>
                <div className="hidden md:block">
                  <Award className="w-16 h-16 text-nature-green" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default PartnersSection 