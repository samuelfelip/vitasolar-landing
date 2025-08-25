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
  { label: "Nosotros", href: "#about" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Aliados", href: "#aliados" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverVideo, setIsOverVideo] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si el header está sobre el componente de video
      const scrollPosition = window.scrollY
      const videoHeight = window.innerHeight
      setIsOverVideo(scrollPosition < videoHeight)

      // Detectar sección activa
      const sections = menuItems.map(item => item.href.replace("#", ""))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClick = (href: string) => {
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
    setIsMenuOpen(false)
    setActiveSection(sectionId)
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg border-b border-green-500/20 transition-all duration-300",
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
              <span className="text-2xl font-bold text-green-600 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                VitaSolar
              </span>
              <p className="text-sm font-medium text-green-600">
                Energía Solar Colombia
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item.href)}
                className={cn(
                  "text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group px-2 py-1 cursor-pointer",
                  activeSection === item.href.replace("#", "") && "text-green-600 font-semibold"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full",
                  activeSection === item.href.replace("#", "") && "w-full"
                )}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleMenuClick("#contacto")}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-yellow-500 hover:text-green-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm cursor-pointer"
            >
              Cotiza ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-green-600 hover:text-yellow-500 hover:bg-green-50 transition-all duration-300 cursor-pointer"
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
            isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 border-t border-green-500/20 bg-white/90 rounded-b-xl">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.href)}
                  className={cn(
                    "text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 font-medium rounded-lg cursor-pointer",
                    activeSection === item.href.replace("#", "") && "text-green-600 bg-green-50/50 font-semibold"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4 mt-2 border-t border-green-500/20">
                <button
                  onClick={() => handleMenuClick("#contacto")}
                  className="w-full py-3 px-4 bg-green-500 text-white font-bold rounded-xl hover:bg-yellow-500 hover:text-green-900 transition-all duration-300 hover:scale-105 text-sm cursor-pointer"
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