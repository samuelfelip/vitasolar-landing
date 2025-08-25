"use client"

import { useState } from "react"
import { Calculator, Home, Building, MapPin, Zap, DollarSign, Calendar, TrendingUp, CheckCircle } from "lucide-react"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { calculateSolarSavings, formatCurrency } from "@/lib/utils"

const SolarCalculator = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    city: '',
    propertyType: 'residential' as 'residential' | 'commercial',
    monthlyBill: '',
    roofType: 'tile',
    roofSize: '',
    electricityUsage: '',
    hasShading: false
  })
  const [results, setResults] = useState<ReturnType<typeof calculateSolarSavings> | null>(null)

  const cities = [
    { name: 'Bogotá', sunHours: 5.0, factor: 1.0 },
    { name: 'Medellín', sunHours: 5.5, factor: 1.1 },
    { name: 'Cali', sunHours: 6.0, factor: 1.2 },
    { name: 'Barranquilla', sunHours: 6.5, factor: 1.3 },
    { name: 'Cartagena', sunHours: 6.8, factor: 1.35 },
    { name: 'Bucaramanga', sunHours: 5.8, factor: 1.15 },
    { name: 'Pereira', sunHours: 5.3, factor: 1.05 },
    { name: 'Manizales', sunHours: 5.2, factor: 1.04 },
    { name: 'Otra ciudad', sunHours: 5.5, factor: 1.1 }
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateResults = () => {
    const monthlyBill = parseFloat(formData.monthlyBill) || 0
    const cityData = cities.find(city => city.name === formData.city) || cities[0]
    
    // Cálculo más preciso basado en datos reales
    const baseResults = calculateSolarSavings(monthlyBill, formData.propertyType)
    
    // Ajustar por factores locales
    const adjustedResults = {
      ...baseResults,
      monthlySavings: Math.round(baseResults.monthlySavings * cityData.factor),
      annualSavings: Math.round(baseResults.annualSavings * cityData.factor),
      systemSize: Math.round(baseResults.systemSize * cityData.factor * 100) / 100,
      paybackPeriod: Math.round((baseResults.paybackPeriod / cityData.factor) * 100) / 100,
      totalSavings20Years: Math.round(baseResults.totalSavings20Years * cityData.factor)
    }
    
    setResults(adjustedResults)
    setStep(4)
  }

  const resetCalculator = () => {
    setStep(1)
    setFormData({
      city: '',
      propertyType: 'residential',
      monthlyBill: '',
      roofType: 'tile',
      roofSize: '',
      electricityUsage: '',
      hasShading: false
    })
    setResults(null)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <MapPin className="w-16 h-16 text-solar-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-graphite-gray mb-2">
                ¿Dónde está tu propiedad?
              </h3>
              <p className="text-gray-600">
                La ubicación afecta la cantidad de energía solar que puedes generar
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cities.map((city) => (
                <motion.button
                  key={city.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleInputChange('city', city.name)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    formData.city === city.name
                      ? 'border-solar-yellow bg-solar-yellow/10'
                      : 'border-gray-200 hover:border-solar-yellow'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold text-graphite-gray">{city.name}</div>
                    <div className="text-sm text-gray-600">{city.sunHours} horas sol/día</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Home className="w-16 h-16 text-solar-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-graphite-gray mb-2">
                Tipo de propiedad
              </h3>
              <p className="text-gray-600">
                Esto nos ayuda a calcular el sistema solar ideal para ti
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInputChange('propertyType', 'residential')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  formData.propertyType === 'residential'
                    ? 'border-solar-yellow bg-solar-yellow/10'
                    : 'border-gray-200 hover:border-solar-yellow'
                }`}
              >
                <Home className="w-12 h-12 text-solar-yellow mx-auto mb-4" />
                <div className="text-center">
                  <div className="font-semibold text-graphite-gray text-lg">Residencial</div>
                  <div className="text-sm text-gray-600">Casa, apartamento, finca</div>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInputChange('propertyType', 'commercial')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  formData.propertyType === 'commercial'
                    ? 'border-solar-yellow bg-solar-yellow/10'
                    : 'border-gray-200 hover:border-solar-yellow'
                }`}
              >
                <Building className="w-12 h-12 text-solar-yellow mx-auto mb-4" />
                <div className="text-center">
                  <div className="font-semibold text-graphite-gray text-lg">Comercial</div>
                  <div className="text-sm text-gray-600">Empresa, oficina, local</div>
                </div>
              </motion.button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Zap className="w-16 h-16 text-solar-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-graphite-gray mb-2">
                Consumo eléctrico
              </h3>
              <p className="text-gray-600">
                Información sobre tu consumo actual de electricidad
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-graphite-gray mb-3">
                  ¿Cuánto pagas mensualmente por electricidad?
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={formData.monthlyBill}
                    onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
                    placeholder="Ej: 450000"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-solar-yellow focus:outline-none text-lg"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Puedes encontrar este valor en tu factura de electricidad
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-graphite-gray mb-3">
                  Consumo mensual aproximado (kWh)
                </label>
                <input
                  type="number"
                  value={formData.electricityUsage}
                  onChange={(e) => handleInputChange('electricityUsage', e.target.value)}
                  placeholder="Ej: 350"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-solar-yellow focus:outline-none text-lg"
                />
                <p className="text-sm text-gray-600 mt-2">
                  También está en tu factura de electricidad
                </p>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            {results && (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-nature-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-graphite-gray mb-2">
                  ¡Tus resultados están listos!
                </h3>
                <p className="text-gray-600 mb-8">
                  Mira cuánto podrías ahorrar con energía solar
                </p>

                {/* Resultados principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-nature-green/10 rounded-xl p-6">
                    <TrendingUp className="w-8 h-8 text-nature-green mx-auto mb-2" />
                    <div className="text-2xl font-bold text-nature-green">
                      {formatCurrency(results.monthlySavings)}
                    </div>
                    <div className="text-sm text-gray-600">Ahorro mensual</div>
                  </div>
                  
                  <div className="bg-clean-blue/10 rounded-xl p-6">
                    <Calendar className="w-8 h-8 text-clean-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-clean-blue">
                      {formatCurrency(results.annualSavings)}
                    </div>
                    <div className="text-sm text-gray-600">Ahorro anual</div>
                  </div>
                  
                  <div className="bg-solar-yellow/10 rounded-xl p-6">
                    <Zap className="w-8 h-8 text-graphite-gray mx-auto mb-2" />
                    <div className="text-2xl font-bold text-graphite-gray">
                      {results.systemSize} kW
                    </div>
                    <div className="text-sm text-gray-600">Sistema recomendado</div>
                  </div>
                  
                  <div className="bg-graphite-gray/10 rounded-xl p-6">
                    <Calculator className="w-8 h-8 text-graphite-gray mx-auto mb-2" />
                    <div className="text-2xl font-bold text-graphite-gray">
                      {results.paybackPeriod} años
                    </div>
                    <div className="text-sm text-gray-600">Recuperación</div>
                  </div>
                </div>

                {/* Ahorro a 20 años */}
                <div className="bg-gradient-to-r from-solar-yellow to-nature-green rounded-xl p-8 text-white mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      {formatCurrency(results.totalSavings20Years)}
                    </div>
                    <div className="text-lg opacity-90">
                      Ahorro total en 20 años
                    </div>
                  </div>
                </div>

                {/* Detalles del sistema */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-graphite-gray mb-4">
                    Detalles de tu sistema solar
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ciudad:</span>
                      <span className="font-semibold">{formData.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tipo:</span>
                      <span className="font-semibold">
                        {formData.propertyType === 'residential' ? 'Residencial' : 'Comercial'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Factura actual:</span>
                      <span className="font-semibold">{formatCurrency(parseInt(formData.monthlyBill))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nueva factura:</span>
                      <span className="font-semibold text-nature-green">
                        {formatCurrency(parseInt(formData.monthlyBill) - results.monthlySavings)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="calculadora" className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-graphite-gray mb-6">
              Calculadora Solar VitaSolar
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre cuánto puedes ahorrar con energía solar en menos de 3 minutos
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNum 
                      ? 'bg-solar-yellow text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`w-8 h-0.5 mx-2 ${
                      step > stepNum 
                        ? 'bg-solar-yellow' 
                        : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 shadow-xl">
              {renderStep()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                  variant="outline"
                  className="px-6 py-3"
                >
                  Anterior
                </Button>
                
                <div className="flex space-x-4">
                  {step < 3 && (
                    <Button
                      onClick={() => setStep(step + 1)}
                      disabled={
                        (step === 1 && !formData.city) ||
                        (step === 2 && !formData.propertyType)
                      }
                      variant="primary"
                      className="px-6 py-3"
                    >
                      Siguiente
                    </Button>
                  )}
                  
                  {step === 3 && (
                    <Button
                      onClick={calculateResults}
                      disabled={!formData.monthlyBill}
                      variant="primary"
                      className="px-6 py-3"
                    >
                      Calcular ahorro
                    </Button>
                  )}
                  
                  {step === 4 && (
                    <div className="flex space-x-4">
                      <Button
                        onClick={resetCalculator}
                        variant="outline"
                        className="px-6 py-3"
                      >
                        Calcular otra vez
                      </Button>
                      <Button
                        onClick={() => window.open(`https://wa.me/573003440025?text=¡Hola! Acabo de usar la calculadora solar y me interesa saber más. Mi ahorro estimado es de ${formatCurrency(results?.monthlySavings || 0)} mensuales.`, '_blank')}
                        variant="primary"
                        className="px-6 py-3"
                      >
                        Solicitar cotización
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <Card className="p-6 text-center">
              <Calculator className="w-12 h-12 text-solar-yellow mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-graphite-gray mb-2">
                Cálculo Preciso
              </h3>
              <p className="text-gray-600 text-sm">
                Basado en datos reales de radiación solar y tarifas eléctricas
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-nature-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-graphite-gray mb-2">
                Sin Compromiso
              </h3>
              <p className="text-gray-600 text-sm">
                Calculadora gratuita sin necesidad de registro
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Zap className="w-12 h-12 text-clean-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-graphite-gray mb-2">
                Resultados Inmediatos
              </h3>
              <p className="text-gray-600 text-sm">
                Conoce tu ahorro potencial en menos de 3 minutos
              </p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default SolarCalculator 