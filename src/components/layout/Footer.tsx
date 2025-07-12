import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react"
import Image from "next/image"
import Container from "./Container"
import { generateWhatsAppLink } from "@/lib/utils"

const Footer = () => {
  const whatsappNumber = "+57 300 123 4567"
  const whatsappMessage = "Hola, quiero más información sobre los paneles solares de VitaSolar"

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
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white hover:text-solar-yellow transition-colors duration-300 cursor-pointer" style={{ color: '#FFFFFF' }}>
                    VitaSolar
                  </span>
                  <p className="text-xs font-medium text-white/90" style={{ color: '#FFFFFF' }}>
                    Energía Solar Colombia
                  </p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed hover:text-white transition-colors duration-300" style={{ color: '#FFFFFF' }}>
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
                  href={generateWhatsAppLink(whatsappNumber, whatsappMessage)}
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
                  <span>contacto@vitasolar.com.co</span>
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
                  href="https://instagram.com/vitasolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-solar-yellow hover:text-graphite-gray transition-all duration-300 hover:scale-110"
                  style={{ color: '#FFFFFF' }}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com/vitasolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-solar-yellow hover:text-graphite-gray transition-all duration-300 hover:scale-110"
                  style={{ color: '#FFFFFF' }}
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://youtube.com/@vitasolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-solar-yellow hover:text-graphite-gray transition-all duration-300 hover:scale-110"
                  style={{ color: '#FFFFFF' }}
                >
                  <Youtube size={20} />
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
              <div className="text-sm text-white/90 hover:text-white transition-colors duration-300" style={{ color: '#FFFFFF' }}>
                Desarrollado con ❤️ por{' '}
                <a
                  href="https://www.linkedin.com/in/samherreras/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-solar-yellow hover:text-white font-semibold transition-all duration-300 hover:scale-105"
                  style={{ color: '#FFD600' }}
                >
                  Sam Herrera
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer 