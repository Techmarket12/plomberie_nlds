"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, CheckCircle, Camera, Zap, Droplets, AlertTriangle } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import ServiceSchema from "@/components/service-schema"
import GoogleReviewsSection from "@/components/google-reviews-section"

export default function EgoutsClientPage() {
  const services = [
    {
      title: "Débouchage Égouts Haute Pression",
      description: "Débouchage professionnel avec équipement haute pression",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Hydrocurage haute pression",
        "Débouchage égout principal",
        "Nettoyage collecteur",
        "Élimination des bouchons",
        "Intervention rapide 24h/24",
      ],
    },
    {
      title: "Inspection Caméra Égouts",
      description: "Diagnostic précis par inspection vidéo",
      icon: <Camera className="h-6 w-6" />,
      features: [
        "Caméra haute définition",
        "Localisation précise",
        "Rapport détaillé",
        "Diagnostic complet",
        "Devis personnalisé",
      ],
    },
    {
      title: "Curage et Entretien",
      description: "Maintenance préventive des égouts",
      icon: <Droplets className="h-6 w-6" />,
      features: [
        "Curage préventif",
        "Nettoyage régulier",
        "Contrat d'entretien",
        "Éviter les bouchons",
        "Garantie longue durée",
      ],
    },
  ]

  const urgencySignals = [
    "Remontée d'odeurs d'égout",
    "Évacuation lente ou impossible",
    "Refoulement dans les canalisations",
    "Bruits anormaux dans les tuyaux",
    "Inondation par débordement",
  ]

  const processSteps = [
    { step: "1", title: "Diagnostic", desc: "Inspection caméra pour localiser le problème" },
    { step: "2", title: "Devis", desc: "Devis gratuit et transparent avant intervention" },
    { step: "3", title: "Débouchage", desc: "Hydrocurage haute pression professionnel" },
    { step: "4", title: "Contrôle", desc: "Vérification finale et garantie du résultat" },
  ]

  const faqItems = [
    {
      question: "Comment savoir si mon égout est bouché ?",
      answer:
        "Les signes principaux sont : évacuation lente de l'eau, remontées d'odeurs, refoulements dans les canalisations, ou bruits anormaux. En cas de doute, notre équipe peut effectuer un diagnostic gratuit.",
    },
    {
      question: "Combien coûte un débouchage d'égout ?",
      answer:
        "Le prix varie selon la complexité du bouchon et la méthode utilisée. Un débouchage simple coûte entre 150-300€, tandis qu'un hydrocurage complet peut coûter 300-600€. Devis gratuit avant intervention.",
    },
    {
      question: "Intervenez-vous en urgence pour les égouts ?",
      answer:
        "Oui, nous intervenons 24h/24 et 7j/7 pour tous les problèmes urgents d'égouts. En cas d'inondation ou de refoulement, nous pouvons être chez vous en moins de 45 minutes.",
    },
    {
      question: "Proposez-vous des contrats d'entretien ?",
      answer:
        "Oui, nous proposons des contrats d'entretien préventif pour éviter les bouchons récurrents. Cela inclut des curages réguliers et des inspections caméra périodiques.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema
        name="Débouchage Égouts"
        description="Service professionnel de débouchage d'égouts. Intervention rapide 24h/24, équipement spécialisé, inspection caméra."
        url="https://aquaetdeb.be/services/debouchage/egouts"
        imageUrl="https://aquaetdeb.be/images/debouchage-egouts.jpg"
        serviceType="Débouchage - Égouts"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm font-medium">🚨 Urgence 24h/24</p>
            <p className="text-xs opacity-90">Intervention immédiate</p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-500 hover:bg-red-600">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Service d'Urgence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Débouchage <span className="text-yellow-400">Égouts</span>
              <br />
              Service Professionnel
            </h1>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Aqua&Deb - Spécialiste du débouchage d'égouts. Hydrocurage haute pression, inspection caméra, intervention
              d'urgence 24h/24. Équipement professionnel et garantie satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                <Link href="tel:+32493415283">
                  <Phone className="mr-2 h-5 w-5" />
                  Urgence 24h/24
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Link href="#devis">Devis Gratuit</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-400" />
                <span>Intervention &lt; 45 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-yellow-400" />
                <span>Équipement professionnel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services de Débouchage Égouts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solutions professionnelles pour tous vos problèmes d'égouts. Équipement spécialisé et intervention rapide
              24h/24.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">{service.icon}</div>
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

      {/* Signaux d'Urgence Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Signaux d'Alerte Égouts</h2>
            <p className="text-gray-600 text-center mb-8">
              Reconnaissez les signes d'un égout bouché pour éviter les dégâts importants. Notre équipe intervient
              rapidement pour résoudre le problème.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {urgencySignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
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

      {/* Processus Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Processus d'Intervention</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
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
