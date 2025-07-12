import { z } from "zod"

export const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres."
  }),
  city: z.string().min(1, {
    message: "Por favor selecciona tu ciudad."
  }),
  whatsapp: z.string().regex(/^(\+57|57)?[0-9]{10}$/, {
    message: "Por favor ingresa un número de WhatsApp válido."
  }),
  monthlyBill: z.string().min(1, {
    message: "Por favor selecciona tu rango de factura mensual."
  }),
  propertyType: z.enum(["residential", "commercial"]),
  email: z.string().email({
    message: "Por favor ingresa un email válido."
  }).optional(),
  message: z.string().max(500, {
    message: "El mensaje no puede exceder 500 caracteres."
  }).optional()
})

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres."
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido."
  }),
  phone: z.string().regex(/^(\+57|57)?[0-9]{10}$/, {
    message: "Por favor ingresa un número de teléfono válido."
  }),
  city: z.string().min(1, {
    message: "Por favor selecciona tu ciudad."
  }),
  address: z.string().min(10, {
    message: "Por favor ingresa una dirección completa."
  }),
  monthlyBill: z.number().min(50000, {
    message: "La factura mensual debe ser de al menos $50,000."
  }),
  propertyType: z.enum(["residential", "commercial"]),
  roofArea: z.number().min(20, {
    message: "El área del techo debe ser de al menos 20 m²."
  }).optional(),
  hasShading: z.boolean().default(false),
  urgency: z.enum(["immediate", "month", "quarter", "year"]),
  budget: z.string().optional(),
  additionalInfo: z.string().max(1000, {
    message: "La información adicional no puede exceder 1000 caracteres."
  }).optional()
})

export const calculatorFormSchema = z.object({
  monthlyBill: z.number().min(50000, {
    message: "La factura mensual debe ser de al menos $50,000."
  }),
  propertyType: z.enum(["residential", "commercial"]),
  roofSize: z.number().min(20, {
    message: "El tamaño del techo debe ser de al menos 20 m²."
  }),
  city: z.string().min(1, {
    message: "Por favor selecciona tu ciudad."
  }),
  hasShading: z.boolean().default(false),
  roofOrientation: z.enum(["south", "southeast", "southwest", "east", "west", "north"]).optional()
})

export const newsletterSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un email válido."
  }),
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres."
  }).optional()
})

export const callbackSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres."
  }),
  phone: z.string().regex(/^(\+57|57)?[0-9]{10}$/, {
    message: "Por favor ingresa un número de teléfono válido."
  }),
  preferredTime: z.enum(["morning", "afternoon", "evening"]),
  city: z.string().min(1, {
    message: "Por favor selecciona tu ciudad."
  })
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type QuoteFormData = z.infer<typeof quoteFormSchema>
export type CalculatorFormData = z.infer<typeof calculatorFormSchema>
export type NewsletterData = z.infer<typeof newsletterSchema>
export type CallbackData = z.infer<typeof callbackSchema>

// Opciones para los selects
export const CITIES = [
  "Bogotá",
  "Medellín", 
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Bucaramanga",
  "Pereira",
  "Manizales",
  "Ibagué",
  "Montería",
  "Villavicencio",
  "Pasto",
  "Neiva",
  "Cúcuta",
  "Armenia",
  "Popayán",
  "Valledupar",
  "Santa Marta",
  "Sincelejo",
  "Riohacha",
  "Otras"
] as const

export const MONTHLY_BILL_RANGES = [
  { value: "50000-100000", label: "$50,000 - $100,000" },
  { value: "100000-200000", label: "$100,000 - $200,000" },
  { value: "200000-300000", label: "$200,000 - $300,000" },
  { value: "300000-500000", label: "$300,000 - $500,000" },
  { value: "500000-1000000", label: "$500,000 - $1,000,000" },
  { value: "1000000+", label: "Más de $1,000,000" }
] as const

export const URGENCY_OPTIONS = [
  { value: "immediate", label: "Inmediatamente" },
  { value: "month", label: "En el próximo mes" },
  { value: "quarter", label: "En los próximos 3 meses" },
  { value: "year", label: "En el próximo año" }
] as const

export const BUDGET_RANGES = [
  { value: "10-20", label: "$10M - $20M" },
  { value: "20-50", label: "$20M - $50M" },
  { value: "50-100", label: "$50M - $100M" },
  { value: "100+", label: "Más de $100M" },
  { value: "unsure", label: "No estoy seguro" }
] as const 