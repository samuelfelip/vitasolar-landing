export interface MenuItem {
  label: string
  href: string
  icon?: string
}

export interface HeroSectionProps {
  title: string
  subtitle: string
  ctaButtons: {
    text: string
    variant: "primary" | "secondary" | "outline"
    href?: string
    onClick?: () => void
  }[]
  backgroundImage?: string
  heroForm?: boolean
}

export interface AboutSectionProps {
  title: string
  description: string
  features: {
    icon: string
    text: string
  }[]
}

export interface BenefitsSectionProps {
  title: string
  benefits: {
    icon: string
    title: string
    description: string
  }[]
}

export interface ProcessSectionProps {
  title: string
  steps: {
    number: number
    title: string
    description: string
    icon: string
  }[]
}

export interface FinancingSectionProps {
  title: string
  description: string
  options: {
    title: string
    icon: string
    description: string
  }[]
  partners: string[]
}

export interface PartnersSectionProps {
  title: string
  description: string
  partners: {
    name: string
    logo: string
    description: string
  }[]
}

export interface TestimonialsSectionProps {
  title: string
  testimonials: {
    name: string
    location: string
    testimonial: string
    rating: number
    avatar: string
  }[]
}

export interface ContactSectionProps {
  title: string
  form: {
    fields: {
      name: string
      label: string
      type: string
      required: boolean
      options?: { value: string; label: string }[]
    }[]
    submitText: string
  }
}

export interface FooterProps {
  contact: {
    whatsapp: string
    email: string
    address: string
  }
  socialMedia: {
    instagram: string
    facebook: string
    tiktok: string
  }
  legal: {
    privacy: string
    terms: string
  }
}

export interface SolarCalculatorProps {
  inputs: {
    monthlyBill: number
    propertyType: "residential" | "commercial"
    roofSize: number
    sunHours: number
  }
  outputs: {
    systemSize: number
    monthlySavings: number
    annualSavings: number
    paybackPeriod: number
    totalSavings20Years: number
  }
}

export interface FormFieldProps {
  name: string
  label: string
  type: "text" | "email" | "tel" | "select" | "radio" | "checkbox" | "textarea" | "number"
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: object
  className?: string
}

export interface ButtonProps {
  variant: "primary" | "secondary" | "outline" | "ghost"
  size: "sm" | "md" | "lg"
  children: React.ReactNode
  onClick?: () => void
  href?: string
  disabled?: boolean
  loading?: boolean
  icon?: string
  className?: string
}

export interface CardProps {
  title?: string
  description?: string
  image?: string
  icon?: string
  children?: React.ReactNode
  className?: string
  variant?: "default" | "highlight" | "outline"
}

export interface BadgeProps {
  variant: "default" | "success" | "warning" | "danger" | "info"
  children: React.ReactNode
  className?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export interface TooltipProps {
  content: string
  children: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right"
  className?: string
}

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "white"
  className?: string
}

export interface AlertProps {
  variant: "success" | "error" | "warning" | "info"
  title?: string
  children: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

export interface SolarSystemData {
  systemSize: number // kW
  monthlyGeneration: number // kWh
  annualGeneration: number // kWh
  monthlySavings: number // COP
  annualSavings: number // COP
  paybackPeriod: number // years
  totalSavings20Years: number // COP
  co2Reduction: number // kg/year
  treesEquivalent: number // trees
}

export interface InstallationData {
  estimatedDuration: number // days
  panelCount: number
  inverterType: string
  batteryIncluded: boolean
  warranty: number // years
  maintenanceRequired: boolean
}

export interface FinancingOption {
  provider: string
  interestRate: number // %
  termMonths: number
  monthlyPayment: number // COP
  totalCost: number // COP
  requirements: string[]
}

export interface ContactInfo {
  name: string
  email: string
  phone: string
  city: string
  propertyType: "residential" | "commercial"
  monthlyBill: number
  roofArea?: number
  urgency: "immediate" | "month" | "quarter" | "year"
  budget?: string
  additionalInfo?: string
}

export interface WeatherData {
  city: string
  averageSunHours: number // hours/day
  seasonalVariation: number // %
  optimalTilt: number // degrees
  optimalAzimuth: number // degrees
}

export interface Partner {
  id: string
  name: string
  logo: string
  description: string
  services: string[]
  certifications: string[]
  experience: number // years
  rating: number // 1-5
  completedProjects: number
}

export interface Testimonial {
  id: string
  name: string
  location: string
  propertyType: "residential" | "commercial"
  testimonial: string
  rating: number
  avatar: string
  installationDate: string
  systemSize: number
  monthlySavings: number
  verified: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: "general" | "financing" | "installation" | "maintenance" | "technical"
}

export interface NewsletterSubscription {
  email: string
  name?: string
  interests?: string[]
  subscriptionDate: Date
  isActive: boolean
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  canonicalUrl: string
  schemaMarkup: object
}

export interface AnalyticsEvent {
  eventName: string
  eventCategory: string
  eventAction: string
  eventLabel?: string
  eventValue?: number
  customParameters?: Record<string, unknown>
} 