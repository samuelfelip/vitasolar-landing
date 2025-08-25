"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
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
    <section id="carrusel" className="relative h-[600px] md:h-[700px] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ scale: 1.05, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 1.05, opacity: 0, x: -100 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0"
          >
            {/* Background Image with Enhanced Parallax Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="w-full h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 10, ease: "easeOut" }}
              >
                <Image
                  src={carouselImages[currentIndex].src}
                  alt={carouselImages[currentIndex].alt}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                  sizes="100vw"
                  quality={85}
                />
              </motion.div>
            </div>
            
            {/* Gradient Overlay with Animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`absolute inset-0 ${carouselImages[currentIndex].overlay}`} 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <Container className="relative z-10 h-full">
        <div className="flex items-center justify-center h-full text-center text-white">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ y: 80, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -50, opacity: 0, scale: 1.1 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 120,
              delay: 0.4
            }}
            className="max-w-4xl w-full mx-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10"
            >
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ y: 40, opacity: 0, rotateX: -20 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.7
                }}
              >
                {carouselImages[currentIndex].title}
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl mb-8 opacity-90"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  delay: 0.9
                }}
              >
                {carouselImages[currentIndex].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 1.1
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-nature-green text-white font-bold text-lg rounded-xl shadow-lg relative overflow-hidden group cursor-pointer"
                  style={{ backgroundColor: '#43A047' }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-solar-yellow"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  />
                  <span className="relative z-10 group-hover:text-nature-green transition-colors duration-300">
                    Cotizar ahora
                  </span>
                </motion.button>
                <motion.button 
                  onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl relative overflow-hidden group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { type: "spring", stiffness: 200, damping: 15 }
                    }}
                  />
                  <span className="relative z-10 group-hover:text-nature-green transition-colors duration-300">
                    Calcular ahorro
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={goToPrevious}
          className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-[1px] transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={goToNext}
          className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-[1px] transition-all duration-300 hover:scale-110 cursor-pointer"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
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
          className={`p-3 rounded-full backdrop-blur-[1px] transition-all duration-300 hover:scale-110 cursor-pointer ${
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