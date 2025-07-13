import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ImageCarousel from "@/components/sections/ImageCarousel"
import VideoSection from "@/components/sections/VideoSection"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import BenefitsSection from "@/components/sections/BenefitsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import PartnersSection from "@/components/sections/PartnersSection"
// import FinancingSection from "@/components/sections/FinancingSection"
// import TestimonialsSection from "@/components/sections/TestimonialsSection"
// import SolarCalculator from "@/components/sections/SolarCalculator"
import ContactSection from "@/components/sections/ContactSection"
import MapSection from "@/components/sections/MapSection"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-smoke-white">
      <Header />
      <VideoSection />
      <HeroSection />
      <ImageCarousel />
      <AboutSection />
      <BenefitsSection />
      <PartnersSection />
      <ProcessSection />
      <ContactSection />
      <MapSection />
      <WhatsAppButton />
      <Footer />
      {/*
      
      <TestimonialsSection />
      <SolarCalculator />
      <FinancingSection />
        */}
    </main>
  )
}
