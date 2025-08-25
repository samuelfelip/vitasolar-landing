import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-CO').format(num)
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function calculateSolarSavings(monthlyBill: number, propertyType: 'residential' | 'commercial'): {
  systemSize: number
  monthlySavings: number
  annualSavings: number
  paybackPeriod: number
  totalSavings20Years: number
} {
  // Cálculos aproximados para sistema solar
  const efficiency = propertyType === 'residential' ? 0.8 : 0.85
  const avgSunHours = 5.5 // Promedio Colombia
  const systemSize = (monthlyBill * 12) / (avgSunHours * 365 * 0.15) // kW
  const monthlySavings = monthlyBill * efficiency
  const annualSavings = monthlySavings * 12
  const systemCost = systemSize * 3000000 // $3M COP por kW aprox
  const paybackPeriod = systemCost / annualSavings
  const totalSavings20Years = (annualSavings * 20) - systemCost

  return {
    systemSize: Math.round(systemSize * 100) / 100,
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    paybackPeriod: Math.round(paybackPeriod * 100) / 100,
    totalSavings20Years: Math.round(totalSavings20Years)
  }
}

export function validateWhatsAppNumber(number: string): boolean {
  const whatsappRegex = /^(\+57|57)?[0-9]{10}$/
  return whatsappRegex.test(number.replace(/\s/g, ''))
}

export function formatWhatsAppNumber(number: string): string {
  const cleaned = number.replace(/\D/g, '')
  if (cleaned.startsWith('57')) {
    return '+' + cleaned
  }
  return '+57' + cleaned
}

export function generateWhatsAppLink(number: string, message: string): string {
  const formattedNumber = formatWhatsAppNumber(number)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${formattedNumber.replace('+', '')}?text=${encodedMessage}`
}

export function sendWhatsAppMessage(message: string, number: string = '+573003440025'): void {
  const whatsappLink = generateWhatsAppLink(number, message)
  window.open(whatsappLink, '_blank')
}

// Privacy Policy Utilities
export function hasAcceptedPrivacyPolicy(): boolean {
  if (typeof window === 'undefined') return true // SSR
  return localStorage.getItem("vitasolar-privacy-accepted") === "true"
}

export function resetPrivacyPolicy(): void {
  if (typeof window === 'undefined') return // SSR
  localStorage.removeItem("vitasolar-privacy-accepted")
  localStorage.removeItem("vitasolar-privacy-date")
}

export function getPrivacyPolicyAcceptanceDate(): string | null {
  if (typeof window === 'undefined') return null // SSR
  return localStorage.getItem("vitasolar-privacy-date")
} 