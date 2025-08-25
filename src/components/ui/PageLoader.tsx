"use client"

import { useEffect, useState } from "react"

interface PageLoaderProps {
  force?: boolean
}

const PageLoader = ({ force = false }: PageLoaderProps) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (force) return
    const mediaElements = [
      ...Array.from(document.images),
      ...Array.from(document.querySelectorAll("video"))
    ]
    let loaded = 0
    let timeout: NodeJS.Timeout | null = null

    if (mediaElements.length === 0) {
      setLoading(false)
      return
    }

    const checkLoaded = () => {
      loaded++
      if (loaded >= mediaElements.length) {
        if (timeout) clearTimeout(timeout)
        setLoading(false)
      }
    }

    mediaElements.forEach((el) => {
      if ((el as HTMLImageElement).complete || (el as HTMLVideoElement).readyState >= 3) {
        checkLoaded()
      } else {
        el.addEventListener("load", checkLoaded)
        el.addEventListener("error", checkLoaded)
        if (el.tagName === "VIDEO") {
          el.addEventListener("loadeddata", checkLoaded)
        }
      }
    })

    // Timeout máximo de 3.3 segundos
    timeout = setTimeout(() => {
      setLoading(false)
    }, 3300)

    return () => {
      if (timeout) clearTimeout(timeout)
      mediaElements.forEach((el) => {
        el.removeEventListener("load", checkLoaded)
        el.removeEventListener("error", checkLoaded)
        if (el.tagName === "VIDEO") {
          el.removeEventListener("loadeddata", checkLoaded)
        }
      })
    }
  }, [force])

  if (!loading && !force) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="animate-spin-slow"
        style={{ display: "block" }}
      >
        {/* Azul */}
        <path
          d="M10,40 a30,30 0 0,1 20,-28"
          stroke="#43A047"
          strokeWidth="4"
          fill="none"
          opacity="0.7"
        />
        {/* Amarillo */}
        <path
          d="M30,12 a30,30 0 0,1 28,20"
          stroke="#FFD600"
          strokeWidth="4"
          fill="none"
          opacity="0.7"
        />
        {/* Naranja */}
        <path
          d="M68,40 a30,30 0 0,1 -20,28"
          stroke="#FF7043"
          strokeWidth="4"
          fill="none"
          opacity="0.7"
        />
        {/* Rojo claro */}
        <path
          d="M50,68 a30,30 0 0,1 -28,-20"
          stroke="#FFB6B6"
          strokeWidth="4"
          fill="none"
          opacity="0.7"
        />
        {/* Amarillo claro */}
        <path
          d="M40,70 a30,30 0 0,1 0,-60"
          stroke="#FFF9C4"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        {/* Azul claro */}
        <path
          d="M12,30 a30,30 0 0,1 56,20"
          stroke="#B3E5FC"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </svg>
      <span className="mt-6 text-green-700 font-bold text-xl">Cargando...</span>
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 1.5s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default PageLoader 