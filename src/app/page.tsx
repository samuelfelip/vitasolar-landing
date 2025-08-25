import dynamic from 'next/dynamic'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import VideoSection from "@/components/sections/VideoSection"
import HeroSection from "@/components/sections/HeroSection"
import PageLoader from "@/components/ui/PageLoader"

// Lazy load non-critical components
const ImageCarousel = dynamic(() => import("@/components/sections/ImageCarousel"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const BenefitsSection = dynamic(() => import("@/components/sections/BenefitsSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const PartnersSection = dynamic(() => import("@/components/sections/PartnersSection"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse" />
})

const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const MapSection = dynamic(() => import("@/components/sections/MapSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsAppButton"), {
  loading: () => null
})

// import FinancingSection from "@/components/sections/FinancingSection"
// import SolarCalculator from "@/components/sections/SolarCalculator"
// import TestimonialsSection from "@/components/sections/TestimonialsSection"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-smoke-white">
      <PageLoader force={false} />
      <Header />
      <VideoSection />
      <HeroSection />
      <ImageCarousel />
      <AboutSection />
      <BenefitsSection />
      <PartnersSection />
      <ProcessSection />
      {/* <TestimonialsSection /> */} 
      <ContactSection />
      <MapSection />
      <WhatsAppButton />
      <Footer />
      {/*
      
      <SolarCalculator />
      <FinancingSection />
        */}
    </main>
  ) 
}
