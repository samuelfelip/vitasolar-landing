"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/Container"

const MapSection = () => {
  return (
    <section id="ubicacion" className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-600 mb-3 sm:mb-4 lg:mb-6">
              ¿BUSCAS ENERGÍA SOLAR EN TU CIUDAD?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              Descubre las mejores opciones de energía solar en los alrededores de Cartagena
            </p>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.832656891841!2d-75.54724285!3d10.39972125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625c4c2c8e5dd%3A0x5f2d4d6e2b1b5b5b!2sCartagena%2C%20Bolivar%2C%20Colombia!5e0!3m2!1sen!2sus!4v1735660234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Overlay con información - Responsive */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg max-w-xs sm:max-w-sm lg:max-w-md">
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-green-600 mb-1 sm:mb-2">
                  VitaSolar
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-2 sm:mb-3">
                  Energía Solar - Cartagena, Colombia
                </p>
                <a 
                  href="https://www.google.com/maps/place/Cartagena+de+Indias,+Provincia+de+Cartagena,+Bol%C3%ADvar/@10.4002805,-75.5497251,13z/data=!3m1!4b1!4m6!3m5!1s0x8ef625e7ae9d1351:0xb161392e033f26ca!8m2!3d10.3932277!4d-75.4832311!16zL20vMGg0NW4?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 mt-1 sm:mt-2 inline-block transition-colors duration-200"
                >
                  Ver mapa más grande
                </a>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Section - Only visible on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block mt-12 xl:mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <h4 className="text-lg font-semibold text-green-600 mb-2">Cobertura Total</h4>
                <p className="text-gray-600">Servicio en Cartagena y municipios aledaños</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Instalación Rápida</h4>
                <p className="text-gray-600">Proceso completo en 15-30 días</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <h4 className="text-lg font-semibold text-yellow-600 mb-2">Soporte Local</h4>
                <p className="text-gray-600">Técnicos certificados en tu zona</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default MapSection 