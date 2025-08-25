"use client"

import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { sendWhatsAppMessage } from "@/lib/utils"

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
)

interface WhatsAppButtonProps {
  className?: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleWhatsAppClick = () => {
    const message = "¡Hola! Vengo desde la página web de VitaSolar. Me interesa saber más sobre los paneles solares y cómo puedo ahorrar en mi factura de luz. ¿Podrían ayudarme?"
    sendWhatsAppMessage(message)
  }



  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 min-w-[300px] max-w-[350px]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 text-graphite-gray/60 hover:text-graphite-gray transition-colors cursor-pointer"
              aria-label="Cerrar chat de WhatsApp"
              style={{ color: '#333333' }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-graphite-gray" style={{ color: '#333333' }}>VitaSolar</h3>
                <p className="text-sm text-graphite-gray/80" style={{ color: '#333333' }}>Conectamos ahora</p>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <p className="text-graphite-gray text-sm leading-relaxed" style={{ color: '#333333' }}>
                ¡Hola! 👋 ¿Quieres saber cuánto puedes ahorrar con energía solar?
              </p>
              <p className="text-graphite-gray text-sm leading-relaxed mt-2" style={{ color: '#333333' }}>
                Te ayudamos a calcular tu ahorro personalizado en menos de 5 minutos.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#1ea952] text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Escribir por WhatsApp</span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-graphite-gray/10">
              <p className="text-xs text-graphite-gray/80 text-center" style={{ color: '#333333' }}>
                Respuesta en menos de 5 minutos
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#1ea952] rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.2 }}
            >
              <WhatsAppIcon className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="w-16 h-16 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Tooltip */}
      
    </div>
  )
}

export default WhatsAppButton 