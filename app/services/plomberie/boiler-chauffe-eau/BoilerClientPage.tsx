"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, CheckCircle, Zap, Thermometer, Wrench, AlertTriangle } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import ServiceSchema from "@/components/service-schema"
import GoogleReviewsSection from "@/components/google-reviews-section"

export default function BoilerClientPage() {
  const services = [
    {
      title: "Installation Boiler/Chauffe-eau",
      description: "Installation complète de tous types de chauffe-eau",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Boiler électrique",
        "Chauffe-eau gaz",
        "Chauffe-eau thermodynamique",
        "Installation selon normes",
        "Mise en service complète",
      ],
    },
    {
      title: "Réparation et Dépannage",
      description: "Réparation rapide de tous problèmes de chauffe-eau",
      icon: <Wrench className="h-6 w-6" />,
      features: [
        "Fuite boiler",
        "Panne électrique",
        "Problème de chauffe",
        "Remplacement pièces",
        "Intervention 24h/24",
      ],
    },
    {
      title: "Entretien et Maintenance",
      description: "Entretien préventif pour prolonger la durée de vie",
      icon: <Thermometer className="h-6 w-6" />,
      features: [
        "Détartrage complet",
        "Contrôle sécurité",
        "Remplacement anode",
        "Vérification thermostat",
        "Contrat d'entretien",
      ],
    },
  ]

  const boilerTypes = [
    {
      name: "Boiler Électrique",
      capacity: "50L à 300L",
      features: ["Installation simple", "Économique à l'achat", "Idéal petits espaces"],
    },
    {
      name: "Chauffe-eau Gaz",
      capacity: "Instantané ou à accumulation",
      features: ["Chauffe rapide", "Économique à l'usage", "Haut rendement"],
    },
    {
      name: "Thermodynamique",
      capacity: "200L à 300L",
      features: ["Très économique", "Écologique", "Éligible aux primes"],
    },
  ]

  const urgencySignals = [
    "Plus d'eau chaude",
    "Fuite d'eau sous le boiler",
    "Bruit anormal du chauffe-eau",
    "Eau tiède ou froide",
    "Disjoncteur qui saute",
  ]

  const brands = ["Bulex", "Vaillant", "Atlantic", "Ariston", "Thermor"]

  const faqItems = [
    {
      question: "Quelle est la durée de vie d'un boiler ?",
      answer:
        "Un boiler électrique dure en moyenne 10-15 ans, un chauffe-eau gaz 15-20 ans, et un thermodynamique 15-20 ans. L'entretien régulier peut prolonger significativement cette durée.",
    },
    {
      question: "Comment savoir si mon boiler doit être remplacé ?",
      answer:
        "Les signes principaux sont : âge supérieur à 10 ans, fuites récurrentes, eau tiède, consommation électrique élevée, ou pannes fréquentes. Notre équipe peut évaluer l'état de votre installation.",
    },
    {
      question: "Intervenez-vous en urgence pour les boilers ?",
      answer:
        "Oui, nous intervenons 24h/24 et 7j/7 pour tous les problèmes urgents de chauffe-eau. En cas de fuite importante ou de panne totale, nous pouvons être chez vous en moins de 45 minutes.",
    },
    {
      question: "Proposez-vous des contrats d'entretien ?",
      answer:
        "Oui, nous proposons des contrats d'entretien annuel incluant détartrage, contrôle de sécurité et remplacement des pièces d'usure. Cela prolonge la durée de vie et maintient les performances.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema
        name="Service Boiler et Chauffe-eau"
        description="Service professionnel de boiler et chauffe-eau. Installation, réparation, entretien. Intervention rapide 24h/24."
        url="https://aquaetdeb.be/services/plomberie/boiler-chauffe-eau"
        imageUrl="https://aquaetdeb.be/images/boiler-service.jpg"
        serviceType="Plomberie - Boiler et Chauffe-eau"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm font-medium">🔥 Service Chauffage</p>
            <p className="text-xs opacity-90">Toutes marques</p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-500 hover:bg-red-600">
              <Thermometer className="w-4 h-4 mr-1" />
              Spécialiste Chauffe-eau
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Service <span className="text-yellow-400">Boiler</span>
              <br />& Chauffe-eau
            </h1>
            <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Aqua&Deb - Spécialiste boiler et chauffe-eau. Installation, réparation, entretien. Toutes marques,
              intervention rapide 24h/24, garantie 12 mois sur nos installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                <Link href="tel:+32493415283">
                  <Phone className="mr-2 h-5 w-5" />
                  Dépannage Urgent
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                <Link href="#devis">Devis Installation</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-400" />
                <span>Intervention &lt; 45 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-yellow-400" />
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
            <h2 className="text-3xl font-bold mb-4">Nos Services Boiler & Chauffe-eau</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solutions complètes pour tous vos besoins en eau chaude. Installation, réparation et entretien par des
              professionnels certifiés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">{service.icon}</div>
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

      {/* Types de Boilers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types de Chauffe-eau</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {boilerTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{type.capacity}</p>
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
            <h2 className="text-3xl font-bold text-center mb-6">Signaux d'Urgence Boiler</h2>
            <p className="text-gray-600 text-center mb-8">
              Reconnaissez les signes d'un problème de chauffe-eau pour éviter les dégâts. Notre équipe intervient
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
