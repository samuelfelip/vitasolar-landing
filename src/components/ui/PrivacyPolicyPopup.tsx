"use client"

import { useState, useEffect } from "react"
import { X, Shield, Cookie, Eye, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const PrivacyPolicyPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showFullPolicy, setShowFullPolicy] = useState(false)

  useEffect(() => {
    // Check if user has already accepted privacy policy
    const hasAccepted = localStorage.getItem("vitasolar-privacy-accepted")
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("vitasolar-privacy-accepted", "true")
    localStorage.setItem("vitasolar-privacy-date", new Date().toISOString())
    setIsVisible(false)
  }

  const handleDecline = () => {
    // You might want to disable certain features or redirect
    console.log("Privacy policy declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-end md:items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-nature-green to-nature-green/80 p-6 text-white" style={{ background: 'linear-gradient(135deg, #43A047 0%, #2E7D32 100%)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Política de Privacidad</h2>
                  <p className="text-white/90 text-sm">Tu privacidad es importante para VitaSolar</p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Cerrar popup de política de privacidad"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {!showFullPolicy ? (
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-800 leading-relaxed text-base font-medium">
                    En VitaSolar valoramos tu privacidad y queremos que sepas cómo utilizamos tu información personal.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <Cookie className="w-8 h-8 text-nature-green mx-auto mb-3" style={{ color: '#43A047' }} />
                    <h3 className="font-semibold text-base mb-2 text-gray-900">Cookies</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Utilizamos cookies para mejorar tu experiencia</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <Eye className="w-8 h-8 text-nature-green mx-auto mb-3" style={{ color: '#43A047' }} />
                    <h3 className="font-semibold text-base mb-2 text-gray-900">Datos</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Solo recopilamos información necesaria</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <Shield className="w-8 h-8 text-nature-green mx-auto mb-3" style={{ color: '#43A047' }} />
                    <h3 className="font-semibold text-base mb-2 text-gray-900">Seguridad</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Protegemos tu información personal</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-3 text-base">¿Qué información recopilamos?</h3>
                  <ul className="text-sm text-blue-800 space-y-2 leading-relaxed">
                    <li className="flex items-start"><span className="mr-2 text-blue-600">•</span>Información de contacto (nombre, teléfono, email)</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-600">•</span>Datos de consumo energético para cotizaciones</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-600">•</span>Cookies técnicas para el funcionamiento del sitio</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-300 rounded-xl p-5">
                  <h3 className="font-bold text-green-900 mb-3 text-base">¿Cómo utilizamos tu información?</h3>
                  <ul className="text-sm text-green-800 space-y-2 leading-relaxed">
                    <li className="flex items-start"><span className="mr-2 text-green-600">•</span>Realizar cotizaciones personalizadas</li>
                    <li className="flex items-start"><span className="mr-2 text-green-600">•</span>Contactarte sobre nuestros servicios</li>
                    <li className="flex items-start"><span className="mr-2 text-green-600">•</span>Mejorar la experiencia en nuestro sitio web</li>
                  </ul>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowFullPolicy(true)}
                    className="text-nature-green hover:text-nature-green/80 font-semibold text-base flex items-center justify-center space-x-2 mx-auto px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300"
                    style={{ color: '#43A047' }}
                  >
                    <FileText className="w-5 h-5" />
                    <span>Ver política completa</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => setShowFullPolicy(false)}
                  className="text-nature-green hover:text-nature-green/80 font-semibold text-base mb-6 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300 flex items-center space-x-2"
                  style={{ color: '#43A047' }}
                >
                  <span>←</span>
                  <span>Volver al resumen</span>
                </button>
                
                <div className="prose prose-sm max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Política de Privacidad Completa</h3>
                  
                  <h4 className="font-bold text-gray-900 mt-6 mb-3 text-base">1. Información que Recopilamos</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Recopilamos información personal cuando nos contactas a través de nuestro sitio web, incluyendo:
                    nombre, número de teléfono, correo electrónico, ciudad, y datos sobre tu consumo energético actual.
                  </p>

                  <h4 className="font-bold text-gray-900 mt-6 mb-3 text-base">2. Uso de la Información</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Utilizamos tu información para: proporcionar cotizaciones personalizadas, contactarte sobre nuestros 
                    servicios de energía solar, enviar información relevante sobre productos y servicios, y mejorar 
                    nuestro sitio web y servicios.
                  </p>

                  <h4 className="font-bold text-gray-900 mt-6 mb-3 text-base">3. Cookies</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Utilizamos cookies técnicas necesarias para el funcionamiento del sitio. No utilizamos cookies 
                    de seguimiento publicitario sin tu consentimiento expreso.
                  </p>

                  <h4 className="font-bold text-gray-900 mt-6 mb-3 text-base">4. Protección de Datos</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Implementamos medidas de seguridad apropiadas para proteger tu información personal contra 
                    acceso no autorizado, alteración, divulgación o destrucción.
                  </p>

                  <h4 className="font-bold text-gray-900 mt-6 mb-3 text-base">5. Tus Derechos</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. 
                    Para ejercer estos derechos, contáctanos en <span className="font-semibold text-nature-green">ventas@vitasolar.com.co</span>
                  </p>

                  <h4 className="font-bold text-gray-900 mt-6 mb-3 text-base">6. Contacto</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en 
                    <span className="font-semibold text-nature-green"> ventas@vitasolar.com.co</span> o al 
                    <span className="font-semibold text-nature-green"> +57 300 344 0025</span>.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={handleDecline}
                className="px-6 py-3 text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="px-8 py-3 bg-nature-green hover:bg-nature-green/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#43A047' }}
              >
                Aceptar y Continuar
              </button>
            </div>
            <p className="text-sm text-gray-700 mt-4 text-center leading-relaxed">
              Al aceptar, consientes el uso de tu información según nuestra política de privacidad.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PrivacyPolicyPopup 