"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlayButtonHovered, setIsPlayButtonHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clean up timeout on unmount
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  const handlePlayPause = async () => {
    if (videoRef.current && !isLoading) {
      setIsLoading(true)
      
      try {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          await videoRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log('Video play/pause error:', error)
        // Reset state if there's an error
        setIsPlaying(videoRef.current?.paused === false)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (isFullscreen) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if ((document as unknown as { webkitExitFullscreen?: () => void }).webkitExitFullscreen) {
        (document as unknown as { webkitExitFullscreen: () => void }).webkitExitFullscreen()
      } else if ((document as unknown as { mozCancelFullScreen?: () => void }).mozCancelFullScreen) {
        (document as unknown as { mozCancelFullScreen: () => void }).mozCancelFullScreen()
      } else if ((document as unknown as { msExitFullscreen?: () => void }).msExitFullscreen) {
        (document as unknown as { msExitFullscreen: () => void }).msExitFullscreen()
      }
    } else {
      // Enter fullscreen
      if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen()
        } else if ((videoRef.current as unknown as { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
          // Safari
          (videoRef.current as unknown as { webkitRequestFullscreen: () => void }).webkitRequestFullscreen()
        } else if ((videoRef.current as unknown as { msRequestFullscreen?: () => void }).msRequestFullscreen) {
          // IE/Edge
          (videoRef.current as unknown as { msRequestFullscreen: () => void }).msRequestFullscreen()
        }
      }
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    setIsLoading(false)
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
    setIsLoading(false)
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
    setIsLoading(false)
  }

  const handleVideoError = () => {
    setIsPlaying(false)
    setIsLoading(false)
  }

  const handleMouseEnter = () => {
    setShowControls(true)
  }

  const handleMouseLeave = () => {
    if (isPlaying) {
      setTimeout(() => setShowControls(false), 2000)
    }
  }

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    
    if (clickTimeoutRef.current) {
      // Double click detected
      clearTimeout(clickTimeoutRef.current)
      clickTimeoutRef.current = null
      handleFullscreen()
    } else {
      // Single click - wait to see if there's a second click
      clickTimeoutRef.current = setTimeout(() => {
        handlePlayPause()
        clickTimeoutRef.current = null
      }, 300) // 300ms delay to detect double click
    }
  }

  return (
    <section id="video" className="w-full">
      <div className="w-full">
        {/* Header */}


        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group w-full"
        >
          <div 
            className="relative w-full aspect-video bg-black overflow-hidden cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleVideoClick}
          >
            {/* Video Preview Image */}
            {!isPlaying && (
              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/video-preview/video preview.png"
                  alt="Vista previa del video de VitaSolar"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={85}
                  priority
                />
              </div>
            )}

            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onError={handleVideoError}
              preload="none"
              playsInline
              muted={isMuted}
            >
              <source src="/videos/landing.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>

            {/* Play Button Overlay */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-24 h-24 md:w-32 md:h-32 bg-solar-yellow rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-300 group relative overflow-hidden cursor-pointer"
                    onClick={handleVideoClick}
                    disabled={isLoading}
                    onMouseEnter={() => setIsPlayButtonHovered(true)}
                    onMouseLeave={() => setIsPlayButtonHovered(false)}
                  >
                    {/* Play Icon */}
                    <motion.div
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ 
                        opacity: isPlayButtonHovered ? 0 : 1,
                        scale: isPlayButtonHovered ? 0.8 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-graphite-gray ml-1 group-hover:text-solar-yellow transition-colors duration-300" />
                    </motion.div>

                    {/* VitaSolar Logo */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: isPlayButtonHovered ? 1 : 0,
                        scale: isPlayButtonHovered ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src="/images/logo/vitasolar_logo.png"
                        alt="VitaSolar"
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    </motion.div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video Controls */}
            <AnimatePresence>
              {isPlaying && showControls && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={async (e) => {
                          e.stopPropagation()
                          await handlePlayPause()
                        }}
                        disabled={isLoading}
                        className="p-2 bg-solar-yellow rounded-full hover:bg-white transition-colors duration-300 group cursor-pointer"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-graphite-gray group-hover:text-solar-yellow" />
                        ) : (
                          <Play className="w-5 h-5 text-graphite-gray group-hover:text-solar-yellow ml-0.5" />
                        )}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleMuteToggle()
                        }}
                        className="p-2 text-white hover:text-solar-yellow transition-colors duration-300 cursor-pointer"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleFullscreen()
                      }}
                      className="p-2 text-white hover:text-solar-yellow transition-colors duration-300 cursor-pointer"
                      aria-label="Pantalla completa"
                    >
                      {isFullscreen ? (
                        <Minimize className="w-5 h-5" />
                      ) : (
                        <Maximize className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video Info Overlay */}
            {isFullscreen && (
              <div className="absolute top-4 right-4 z-30">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm">
                  Doble clic para salir de pantalla completa
                </div>
              </div>
            )}

          </div>

          {/* Decorative Elements */}

        </motion.div>



      </div>
    </section>
  )
}

export default VideoSection 