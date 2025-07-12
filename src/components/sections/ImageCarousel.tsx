"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Container from "@/components/layout/Container"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const carouselImages = [
  {
    id: 1,
    src: "/images/carrousel/1.png",
    alt: "Paneles solares en casa moderna",
    title: "Energía solar en tu hogar",
    subtitle: "Transforma tu casa en una fuente de energía limpia",
    overlay: "bg-gradient-to-r from-solar-yellow/80 to-nature-green/80"
  },
  {
    id: 2,
    src: "/images/carrousel/2.png", 
    alt: "Instalación profesional de paneles solares",
    title: "Instalación profesional",
    subtitle: "Técnicos certificados garantizan la mejor instalación",
    overlay: "bg-gradient-to-r from-clean-blue/80 to-nature-green/80"
  },
  {
    id: 3,
    src: "/images/carrousel/3.png",
    alt: "Familia ahorrando con energía solar",
    title: "Ahorra desde el primer mes",
    subtitle: "Reduce hasta 90% en tu factura de electricidad",
    overlay: "bg-gradient-to-r from-nature-green/80 to-solar-yellow/80"
  },
  {
    id: 4,
    src: "/images/carrousel/4.png",
    alt: "Paneles solares en edificio comercial",
    title: "Soluciones comerciales",
    subtitle: "Reduce costos operativos en tu empresa",
    overlay: "bg-gradient-to-r from-clean-blue/80 to-graphite-gray/80"
  },
  {
    id: 5,
    src: "/images/carrousel/5.png",
    alt: "cocina solar",
    title: "Soluciones comerciales",
    subtitle: "cocina con la luz solar",
    overlay: "bg-gradient-to-r from-clean-blue/80 to-graphite-gray/80"
  }
]

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <section id="beneficios" className="relative h-[600px] md:h-[700px] overflow-hidden bg-graphite-gray">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image with Parallax Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${carouselImages[currentIndex].src}')`,
                transform: 'scale(1.1)'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 ${carouselImages[currentIndex].overlay}`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <Container className="relative z-10 h-full">
        <div className="flex items-center justify-center h-full text-center text-white">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {carouselImages[currentIndex].title}
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {carouselImages[currentIndex].subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-nature-green text-white font-bold text-lg rounded-xl hover:bg-solar-yellow transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
                Cotizar ahora
              </button>
              <button 
                onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-nature-green transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'white' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white'
                  e.currentTarget.style.color = '#43A047'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'white'
                }}
              >
                Calcular ahorro
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={goToPrevious}
          className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={goToNext}
          className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-solar-yellow scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play Control */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={toggleAutoPlay}
          className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            isAutoPlay 
              ? 'bg-solar-yellow/80 text-graphite-gray' 
              : 'bg-white/20 text-white'
          }`}
          aria-label={isAutoPlay ? "Pausar carrusel" : "Reanudar carrusel"}
        >
          <Play className={`w-5 h-5 ${!isAutoPlay ? '' : 'pause-icon'}`} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-solar-yellow"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          key={currentIndex}
        />
      </div>
    </section>
  )
}

export default ImageCarousel 