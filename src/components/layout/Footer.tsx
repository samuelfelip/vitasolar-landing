"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Container from "./Container"
import { resetPrivacyPolicy } from "@/lib/utils"

// Instagram Icon Component
const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const Footer = () => {
  const whatsappNumber = "+57 300 344 0025"

  return (
    <footer className="bg-nature-green text-white" style={{ backgroundColor: '#43A047' }}>
      <Container> 
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo y descripción */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/logo/vitasolar_logo.png" 
                    alt="VitaSolar Logo" 
                    width={48}
                    height={48}
                    className="h-12 w-auto"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white hover:text-solar-yellow transition-colors duration-300 cursor-pointer">
                    VitaSolar
                  </span>
                  <p className="text-xs font-medium text-white/90">
                    Energía Solar Colombia
                  </p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed hover:text-white transition-colors duration-300">
                Te ayudamos a cambiarte a la energía solar de forma fácil, segura y rentable. 
                Conectamos con instaladores certificados y te acompañamos en todo el proceso.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-solar-yellow hover:text-white transition-colors duration-300" style={{ color: '#FFD600' }}>
                Contacto
              </h3>
              <div className="space-y-3">
                <a
                  href= "tel:+573003440025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/90 hover:text-solar-yellow transition-all duration-300 hover:scale-105 hover:translate-x-2"
                  style={{ color: '#FFFFFF' }}
                >
                  <Phone size={18} />
                  <span>{whatsappNumber}</span>
                </a>
                <a
                  href="mailto:contacto@vitasolar.com.co"
                  className="flex items-center space-x-3 text-white/90 hover:text-solar-yellow transition-all duration-300 hover:scale-105 hover:translate-x-2"
                  style={{ color: '#FFFFFF' }}
                >
                  <Mail size={18} />
                  <span>ventas@vitasolar.com.co</span>
                </a>
                <div className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-300" style={{ color: '#FFFFFF' }}>
                  <MapPin size={18} />
                  <span>Colombia</span>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-solar-yellow hover:text-white transition-colors duration-300" style={{ color: '#FFD600' }}>
                Síguenos
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/vitasolar369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-solar-yellow hover:text-graphite-gray transition-all duration-300 hover:scale-110"
                  style={{ color: '#FFFFFF' }}
                >
                  <InstagramIcon size={20} />
                </a>
                
                
              </div>
              <div className="pt-4">
                <p className="text-sm text-white/90 hover:text-white transition-colors duration-300" style={{ color: '#FFFFFF' }}>
                  ¡Únete a nuestra comunidad solar!
                </p>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-white/90 hover:text-white transition-colors duration-300" style={{ color: '#FFFFFF' }}>
                © 2024 VitaSolar - Todos los derechos reservados
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <button
                  onClick={() => {
                    resetPrivacyPolicy()
                    window.location.reload()
                  }}
                  className="text-white/80 hover:text-solar-yellow transition-colors duration-300"
                  style={{ color: '#FFFFFF' }}
                >
                  Política de Privacidad
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer 