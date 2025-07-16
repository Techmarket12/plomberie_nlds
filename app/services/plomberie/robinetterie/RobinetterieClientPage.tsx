"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, CheckCircle, Wrench, Droplets, Settings, AlertTriangle } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import ServiceSchema from "@/components/service-schema"
import GoogleReviewsSection from "@/components/google-reviews-section"

export default function RobinetterieClientPage() {
  const services = [
    {
      title: "Installation Robinetterie",
      description: "Installation complète de tous types de robinets",
      icon: <Wrench className="h-6 w-6" />,
      features: [
        "Robinets cuisine",
        "Robinets salle de bain",
        "Mitigeurs thermostatiques",
        "Robinets extérieurs",
        "Installation selon normes",
      ],
    },
    {
      title: "Réparation et Dépannage",
      description: "Réparation rapide de tous problèmes de robinetterie",
      icon: <Settings className="h-6 w-6" />,
      features: [
        "Fuite robinet",
        "Robinet qui goutte",
        "Pression faible",
        "Remplacement cartouche",
        "Intervention 24h/24",
      ],
    },
    {
      title: "Remplacement et Modernisation",
      description: "Remplacement de votre ancienne robinetterie",
      icon: <Droplets className="h-6 w-6" />,
      features: [
        "Robinets économiques",
        "Design moderne",
        "Technologie LED",
        "Robinets sans contact",
        "Garantie fabricant",
      ],
    },
  ]

  const faucetTypes = [
    {
      name: "Robinets Cuisine",
      description: "Mitigeurs et robinets pour évier de cuisine",
      features: ["Bec haut", "Douchette extractible", "Mitigeur thermostatique"],
    },
    {
      name: "Robinets Salle de Bain",
      description: "Robinetterie pour lavabo, douche et baignoire",
      features: ["Design élégant", "Économie d'eau", "Finitions variées"],
    },
    {
      name: "Robinets Extérieurs",
      description: "Robinets de jardin et extérieurs",
      features: ["Résistant au gel", "Robinet de puisage", "Installation murale"],
    },
  ]

  const urgencySignals = [
    "Robinet qui goutte constamment",
    "Pression d'eau très faible",
    "Eau qui ne chauffe plus",
    "Fuite à la base du robinet",
    "Robinet bloqué ou dur à tourner",
  ]

  const brands = ["Grohe", "Hansgrohe", "Geberit", "Jacob Delafon", "Ideal Standard"]

  const faqItems = [
    {
      question: "Combien coûte le remplacement d'un robinet ?",
      answer:
        "Le prix varie selon le type de robinet (50€ à 300€ pour le robinet + main d'œuvre). Nous proposons un devis gratuit et des robinets de qualité à tous les budgets.",
    },
    {
      question: "Pourquoi mon robinet goutte-t-il ?",
      answer:
        "Un robinet qui goutte est généralement dû à une cartouche usée, un joint défaillant ou un problème de siège. Notre équipe peut diagnostiquer et réparer rapidement le problème.",
    },
    {
      question: "Intervenez-vous en urgence pour les robinets ?",
      answer:
        "Oui, nous intervenons 24h/24 pour les fuites importantes de robinetterie. En cas de fuite majeure, nous pouvons être chez vous en moins de 45 minutes.",
    },
    {
      question: "Proposez-vous une garantie sur vos installations ?",
      answer:
        "Oui, nous offrons une garantie de 12 mois sur nos installations et réparations, plus la garantie fabricant sur les robinets neufs installés.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema
        name="Service de Robinetterie"
        description="Service professionnel de robinetterie. Installation, réparation, remplacement. Intervention rapide 24h/24."
        url="https://aquaetdeb.be/services/plomberie/robinetterie"
        imageUrl="https://aquaetdeb.be/images/robinetterie-service.jpg"
        serviceType="Plomberie - Robinetterie"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm font-medium">🚿 Service Robinetterie</p>
            <p className="text-xs opacity-90">Toutes marques</p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-cyan-500 hover:bg-cyan-600">
              <Droplets className="w-4 h-4 mr-1" />
              Spécialiste Robinetterie
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Service de <span className="text-cyan-400">Robinetterie</span>
              <br />
              Professionnel
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Aqua&Deb - Spécialiste robinetterie. Installation, réparation, remplacement de tous types de robinets.
              Intervention rapide 24h/24, garantie 12 mois sur nos installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link href="tel:+32493415283">
                  <Phone className="mr-2 h-5 w-5" />
                  Dépannage Urgent
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="#devis">Devis Installation</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-400" />
                <span>Intervention &lt; 45 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-400" />
                <span>Garantie 12 mois</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services de Robinetterie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solutions complètes pour tous vos besoins en robinetterie. Installation, réparation et remplacement par
              des professionnels certifiés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{service.icon}</div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Robinets Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types de Robinetterie</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {faucetTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signaux d'Urgence Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Signaux d'Urgence Robinetterie</h2>
            <p className="text-gray-600 text-center mb-8">
              Reconnaissez les signes d'un problème de robinetterie pour éviter les dégâts. Notre équipe intervient
              rapidement pour résoudre le problème.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {urgencySignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-1 bg-red-100 rounded-full">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  <span className="font-medium">{signal}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild className="bg-red-500 hover:bg-red-600">
                <Link href="tel:+32493415283">
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler en Urgence
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marques Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Marques Partenaires</h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-lg font-semibold text-gray-700">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-lg">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviewsSection />

      {/* CTA Section */}
      <CallToAction />
    </div>
  )
}
