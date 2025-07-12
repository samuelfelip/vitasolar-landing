"use client"

import { motion } from "framer-motion"

const MapSection = () => {
  return (
    <section id="ubicacion" className="pt-16 bg-white">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4">
            ¿BUSCAS ENERGÍA SOLAR EN TU CIUDAD?
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            Descubre las mejores opciones de energía solar en los alrededores de Cartagena
          </p>
        </motion.div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
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
            
            {/* Overlay con información */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h3 className="font-bold text-green-600 mb-1">VitaSolar</h3>
              <p className="text-sm text-black">Energía Solar - Cartagena, Colombia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection 