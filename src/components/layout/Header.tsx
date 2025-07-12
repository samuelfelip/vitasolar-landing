"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Container from "./Container"
import { cn } from "@/lib/utils"
import { scrollToSection } from "@/lib/utils"

interface MenuItem {
  label: string
  href: string
  icon?: React.ReactNode
}

const menuItems: MenuItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Nosotros", href: "#about" },
  { label: "Contáctanos", href: "#contacto" },
  { label: "Ubicación", href: "#ubicacion" }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverVideo, setIsOverVideo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si el header está sobre el componente de video
      // Asumiendo que el video tiene una altura aproximada de 100vh
      const scrollPosition = window.scrollY
      const videoHeight = window.innerHeight // Aproximadamente la altura del video
      
      setIsOverVideo(scrollPosition < videoHeight)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClick = (href: string) => {
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg border-b border-nature-green/20 transition-all duration-300",
        isOverVideo ? "bg-white/30" : "bg-white/95"
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="hover:scale-125 transition-transform duration-300">
              <Image
                src="/images/logo/vitasolar_logo.png" 
                alt="VitaSolar Logo" 
                width={72}
                height={72}
                className="h-[72px] w-auto"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-nature-green hover:text-solar-yellow transition-colors duration-300 cursor-pointer" style={{ color: '#43A047' }}>
                VitaSolar
              </span>
              <p className="text-xs font-medium" style={{ color: '#43A047' }}>
                Energía Solar Colombia
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item.href)}
                className="text-nature-green hover:text-solar-yellow transition-all duration-300 font-semibold relative group hover:scale-105"
                style={{ color: '#43A047' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nature-green group-hover:bg-solar-yellow transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#43A047' }}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleMenuClick("#contacto")}
              className="px-6 py-3 bg-nature-green text-white font-bold rounded-xl hover:bg-solar-yellow transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#43A047' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD600'
                e.currentTarget.style.color = '#43A047'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#43A047'
                e.currentTarget.style.color = 'white'
              }}
            >
              Cotiza ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-nature-green hover:text-solar-yellow hover:bg-nature-green/10 transition-all duration-300 hover:scale-110"
            style={{ color: '#43A047' }}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 border-t border-nature-green/20 bg-white/90 rounded-b-xl">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-left py-3 px-4 text-nature-green hover:text-solar-yellow hover:bg-nature-green/10 transition-all duration-300 font-semibold rounded-lg hover:scale-105 hover:translate-x-2"
                  style={{ color: '#43A047' }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-nature-green/20">
                <button
                  onClick={() => handleMenuClick("#contacto")}
                  className="w-full py-3 px-4 bg-nature-green text-white font-bold rounded-xl hover:bg-solar-yellow transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#43A047' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFD600'
                    e.currentTarget.style.color = '#43A047'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#43A047'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  Cotiza ahora
                </button>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header 