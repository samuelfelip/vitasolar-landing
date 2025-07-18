"use client"

import { Award, CheckCircle } from "lucide-react"
import Container from "@/components/layout/Container"
import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    id: "solvitech",
    name: "Solvitech",
    logo: "/images/partners/solvitech.png",
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
    icon: Award,
    title: "Garantía Extendida",
    description: "25 años de garantía en paneles y 10 años en inversores con nuestros aliados"
  },
  {
    icon: CheckCircle,
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestros aliados técnicos
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
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
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              {/* Header Section */}
              <div className="bg-gray-900 rounded-t-2xl p-8 text-center border-b border-gray-100">
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/partners/solvitech.png" 
                    alt="Solvitech Logo" 
                    className="h-16 w-auto mb-4"
                    width={128}
                    height={128}
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {partners[0].name}
                  </h3>
                  <p className="text-gray-300 max-w-md">
                    {partners[0].description}
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="p-8 bg-white">
                <div className="grid grid-cols-3 gap-8 text-center mb-8">
                  <div className="p-4 bg-solar-yellow/10 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {partners[0].experience}+
                    </div>
                    <div className="text-sm font-medium text-gray-600">Años de experiencia</div>
                  </div>
                  <div className="p-4 bg-nature-green/10 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {partners[0].rating}
                    </div>
                    <div className="text-sm font-medium text-gray-600">Rating promedio</div>
                  </div>
                  <div className="p-4 bg-clean-blue/10 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {partners[0].completedProjects}+
                    </div>
                    <div className="text-sm font-medium text-gray-600">Proyectos exitosos</div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-2 h-6 bg-solar-yellow rounded-full mr-3"></div>
                        Servicios especializados
                      </h4>
                      <div className="space-y-3 pl-5">
                        {partners[0].services.map((service, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-2 h-6 bg-nature-green rounded-full mr-3"></div>
                        Certificaciones
                      </h4>
                      <div className="space-y-3 pl-5">
                        {partners[0].certifications.map((cert, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-6 bg-clean-blue rounded-full mr-3"></div>
                      ¿Por qué elegir Solvitech?
                    </h4>
                    <div className="space-y-4 pl-5">
                      {partners[0].highlights.map((highlight, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg border-l-4 border-nature-green">
                          <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
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
                  <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-all duration-300 hover:border-gray-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-solar-yellow/20 to-nature-green/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <cert.icon className={`w-7 h-7 ${
                        index === 0 ? 'text-yellow-600' :
                        index === 1 ? 'text-green-600' : 
                        index === 2 ? 'text-blue-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
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
            <div className="bg-nature-green rounded-lg p-6">
              <h3 className="text-xl font-medium text-white mb-6 text-center">
                Instalación con los más altos estándares
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-lg font-medium text-white">RETIE</div>
                  <div className="text-sm text-white/80">Certificación obligatoria</div>
                </div>
                <div>
                  <div className="text-lg font-medium text-white">ISO 9001</div>
                  <div className="text-sm text-white/80">Gestión de calidad</div>
                </div>
                <div>
                  <div className="text-lg font-medium text-white">25 años</div>
                  <div className="text-sm text-white/80">Garantía total</div>
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
            <div className="bg-gradient-to-r from-nature-green/5 to-clean-blue/5 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nature-green rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      Ampliando nuestra red de aliados
                    </h4>
                    <p className="text-gray-600">
                      Constantemente evaluamos y agregamos nuevos aliados técnicos certificados 
                      para brindarte el mejor servicio en todo Colombia.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
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