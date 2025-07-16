"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, CheckCircle, Calendar, Wrench, Droplets, TrendingUp } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import ServiceSchema from "@/components/service-schema"
import GoogleReviewsSection from "@/components/google-reviews-section"

export default function CurageEntretienClientPage() {
  const services = [
    {
      title: "Curage Haute Pression",
      description: "Nettoyage complet par hydrocurage professionnel",
      icon: <Droplets className="h-6 w-6" />,
      features: [
        "Hydrocurage haute pression",
        "Élimination des dépôts",
        "Nettoyage en profondeur",
        "Restauration du débit",
        "Équipement professionnel",
      ],
    },
    {
      title: "Entretien Préventif",
      description: "Maintenance régulière pour éviter les bouchons",
      icon: <Calendar className="h-6 w-6" />,
      features: [
        "Planification personnalisée",
        "Inspections régulières",
        "Nettoyage préventif",
        "Rapport d'intervention",
        "Conseils d'utilisation",
      ],
    },
    {
      title: "Contrats d'Entretien",
      description: "Solutions sur mesure pour particuliers et professionnels",
      icon: <Wrench className="h-6 w-6" />,
      features: [
        "Contrats annuels",
        "Tarifs préférentiels",
        "Interventions prioritaires",
        "Suivi personnalisé",
        "Garantie étendue",
      ],
    },
  ]

  const benefits = [
    {
      title: "Économies à Long Terme",
      description: "Évitez les coûts élevés des interventions d'urgence",
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Prévention des Bouchons",
      description: "Maintenez vos canalisations en parfait état",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Hygiène Optimale",
      description: "Éliminez les odeurs et les bactéries",
      icon: <Droplets className="h-8 w-8 text-cyan-500" />,
    },
  ]

  const contractTypes = [
    {
      name: "Particuliers",
      frequency: "2 fois par an",
      price: "À partir de 150€/an",
      features: [
        "Curage préventif bi-annuel",
        "Inspection visuelle",
        "Conseils d'entretien",
        "Intervention prioritaire",
        "Tarif réduit urgences",
      ],
    },
    {
      name: "Copropriétés",
      frequency: "4 fois par an",
      price: "Sur devis",
      features: [
        "Curage trimestriel",
        "Inspection caméra",
        "Rapport détaillé",
        "Suivi personnalisé",
        "Garantie étendue",
      ],
    },
    {
      name: "Professionnels",
      frequency: "Mensuel",
      price: "Sur devis",
      features: [
        "Curage mensuel",
        "Inspection caméra",
        "Rapport technique",
        "Intervention 24h/24",
        "Contrat sur mesure",
      ],
    },
  ]

  const faqItems = [
    {
      question: "À quelle fréquence faut-il faire un curage ?",
      answer:
        "Pour les particuliers, nous recommandons un curage préventif tous les 6 mois. Pour les professionnels (restaurants, hôtels), un curage mensuel est conseillé selon l'utilisation.",
    },
    {
      question: "Quelle est la différence entre curage et débouchage ?",
      answer:
        "Le débouchage résout un problème ponctuel de bouchon, tandis que le curage est un nettoyage préventif complet qui élimine tous les dépôts et résidus pour éviter les futurs bouchons.",
    },
    {
      question: "Proposez-vous des contrats d'entretien ?",
      answer:
        "Oui, nous proposons des contrats d'entretien adaptés aux particuliers, copropriétés et professionnels. Ces contrats incluent des interventions régulières à tarifs préférentiels.",
    },
    {
      question: "Le curage endommage-t-il les canalisations ?",
      answer:
        "Non, notre équipement professionnel est calibré pour nettoyer efficacement sans endommager vos canalisations. Nous adaptons la pression selon le type de tuyauterie.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema
        name="Curage et Entretien Canalisations"
        description="Service de curage et entretien préventif des canalisations. Hydrocurage, maintenance, contrats d'entretien."
        url="https://aquaetdeb.be/services/debouchage/curage-entretien"
        imageUrl="https://aquaetdeb.be/images/curage-entretien.jpg"
        serviceType="Débouchage - Curage et Entretien"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20">
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm font-medium">🔧 Service Préventif</p>
            <p className="text-xs opacity-90">Évitez les problèmes</p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-500 hover:bg-green-600">
              <Calendar className="w-4 h-4 mr-1" />
              Entretien Préventif
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Curage & <span className="text-yellow-400">Entretien</span>
              <br />
              Canalisations
            </h1>
            <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">
              Aqua&Deb - Service de curage et entretien préventif. Hydrocurage haute pression, contrats d'entretien
              personnalisés. Évitez les bouchons et économisez sur le long terme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="tel:+32493415283">
                  <Phone className="mr-2 h-5 w-5" />
                  Devis Gratuit
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
              >
                <Link href="#contrats">Nos Contrats</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span>Planification flexible</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Tarifs préférentiels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services de Curage et Entretien</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solutions préventives pour maintenir vos canalisations en parfait état. Économisez sur le long terme avec
              nos services d'entretien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600">{service.icon}</div>
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

      {/* Avantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Avantages de l'Entretien Préventif</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contrats Section */}
      <section id="contrats" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Contrats d'Entretien</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{contract.name}</h3>
                    <p className="text-gray-600 mb-2">{contract.frequency}</p>
                    <p className="text-xl font-semibold text-cyan-600">{contract.price}</p>
                  </div>
                  <ul className="space-y-3">
                    {contract.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">
                    <Link href="tel:+32493415283">Demander un Devis</Link>
                  </Button>
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
