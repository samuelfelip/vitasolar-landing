import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PrivacyPolicyPopup from "@/components/ui/PrivacyPolicyPopup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VitaSolar - Paneles Solares en Colombia | Ahorra hasta 90% en tu factura de luz",
  description: "Expertos en energía solar en Colombia. Instala paneles solares y ahorra hasta 90% en tu factura de electricidad. Financiamiento disponible con 0% inicial. Cotización gratis.",
  keywords: [
    "paneles solares Colombia",
    "energia solar Colombia",
    "VitaSolar",
    "ahorro energia electrica",
    "paneles solares residenciales",
    "energia renovable Colombia",
    "sistemas solares",
    "instalacion paneles solares",
    "financiamiento paneles solares",
    "Solvitech",
    "reducir factura luz",
    "energia limpia Colombia"
  ],
  authors: [{ name: "VitaSolar Colombia" }],
  creator: "VitaSolar",
  publisher: "VitaSolar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/logo/vitasolar_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo/vitasolar_logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/images/logo/vitasolar_logo.png',
  },
  metadataBase: new URL('https://vitasolar.com.co'),
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/es-co',
      'es': '/es',
    },
  },
  openGraph: {
    title: "VitaSolar - Paneles Solares en Colombia | Ahorra hasta 90% en tu factura",
    description: "Expertos en energía solar en Colombia. Instala paneles solares y ahorra hasta 90% en tu factura de electricidad. Financiamiento disponible con 0% inicial.",
    url: 'https://vitasolar.com.co',
    siteName: 'VitaSolar',
    images: [
      {
        url: '/images/vitasolar-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VitaSolar - Paneles Solares en Colombia',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VitaSolar - Paneles Solares en Colombia',
    description: 'Ahorra hasta 90% en tu factura de luz con paneles solares. Financiamiento disponible.',
    images: ['/images/vitasolar-twitter-image.jpg'],
    creator: '@VitaSolarCO',
    site: '@VitaSolarCO',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CO">
      <head>
        {/* Favicon */}
        {/* eslint-disable-next-line @next/next/no-head-element */}
        <link rel="apple-touch-icon" href="/images/logo/vitasolar_logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://vitasolar.com.co/" />
        <meta name="geo.region" content="CO" />
        <meta name="geo.placename" content="Colombia" />
        <meta name="geo.position" content="4.6097;-74.0817" />
        <meta name="ICBM" content="4.6097, -74.0817" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VitaSolar Colombia",
              "image": "https://vitasolar.com.co/images/vitasolar-logo.png",
              "description": "Expertos en instalación de paneles solares en Colombia. Ahorra hasta 90% en tu factura de electricidad con energía solar.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 123 #45-67",
                "addressLocality": "Bogotá",
                "addressRegion": "Cundinamarca",
                "postalCode": "110111",
                "addressCountry": "CO"
              },
              "telephone": "+573003440025",
              "url": "https://vitasolar.com.co",
              "sameAs": [
                "https://www.facebook.com/VitaSolarCO",
                "https://www.instagram.com/vitasolar_co",
                "https://www.linkedin.com/company/vitasolar-colombia"
              ],
              "priceRange": "$$$",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-14:00"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Colombia"
              },
              "serviceType": "Instalación de paneles solares",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Energía Solar",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación de paneles solares residenciales"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación de paneles solares comerciales"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mantenimiento de sistemas solares"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Instalación de Paneles Solares",
              "description": "Instalación profesional de sistemas de energía solar para hogares y empresas en Colombia",
              "provider": {
                "@type": "Organization",
                "name": "VitaSolar Colombia"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Colombia"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Catálogo de Servicios Solares",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Sistema Solar Residencial 5kW",
                      "description": "Sistema completo de paneles solares para hogares"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuánto puedo ahorrar con paneles solares?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Con VitaSolar puedes ahorrar hasta 90% en tu factura de electricidad. El ahorro exacto depende de tu consumo actual y la radiación solar de tu zona."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tiempo toma la instalación?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La instalación típica toma entre 1-3 días dependiendo del tamaño del sistema. Nuestros técnicos certificados garantizan una instalación rápida y segura."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Ofrecen financiamiento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, ofrecemos múltiples opciones de financiamiento incluyendo créditos verdes con tasas preferenciales y la posibilidad de 0% inicial."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <PrivacyPolicyPopup />
      </body>
    </html>
  )
}
