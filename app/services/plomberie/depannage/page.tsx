import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Services de Dépannage Plomberie | Intervention Rapide",
  description:
    "Services professionnels de dépannage plomberie à Namur. Intervention rapide pour fuites, recherche de pannes et réparations urgentes. Disponible 24h/24 et 7j/7.",
}

export default function DepannagePlomberie() {
  const services = [
    "Recherche de fuite",
    "Inspection caméra",
    "Recherche Fuite canalisation",
    "Fuite robinet extérieur",
    "Réparation fuite robinet évier",
    "Réparation fuite siphon qui coule",
    "Robinet machine à laver fuite",
    "Réparation robinet cave",
    "Fuite d'eau cave",
    "Réparation fuite d'eau tuyauterie",
    "Douche Fuite siphon",
    "Fuite d'eau plafond",
    "Fuite d'eau",
    "Fuite chasse d'eau",
    "Fuite wc coule",
    "Réparation boiler",
    "Réparation boiler fuite",
    "Réparation Fuite chauffe eau",
    "Réparation wc broyeur",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Service de Dépannage</span>
              <span className="block text-blue-400">Plomberie</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Intervention rapide pour tous vos problèmes de plomberie. Disponible 24h/24 et 7j/7.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href="tel:+32493415283">Appeler Maintenant</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
              >
                <Link href="/contact">Demander un Devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Services de Dépannage Plomberie Professionnels</h2>
              <p className="mt-4 text-lg text-gray-600">
                Notre équipe de plombiers qualifiés est disponible pour résoudre rapidement tous vos problèmes de
                plomberie. Que ce soit une fuite d'eau, un problème de robinet ou une panne de chauffe-eau, nous
                intervenons en moins de 45 minutes pour vous dépanner.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Tous nos services de dépannage sont garantis 12 mois et nous utilisons des équipements de pointe pour
                diagnostiquer et réparer efficacement vos problèmes de plomberie.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Intervention rapide en moins de 45 minutes</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Diagnostic précis avec caméra d'inspection</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Réparation durable avec garantie de 12 mois</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Service disponible 24h/24 et 7j/7</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Devis gratuit et transparent</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/images/plumber-fixing-leak.png"
                alt="Plombier réparant une fuite d'eau"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Intervention Rapide</h3>
                <p className="mt-2 text-gray-200">
                  Nos techniciens sont formés pour intervenir rapidement et efficacement sur tous types de problèmes de
                  plomberie.
                </p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="tel:+32493415283">
                    <Wrench className="mr-2 h-4 w-4" />
                    Appeler pour un dépannage
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Dépannage</h2>
            <p className="mt-4 text-xl text-gray-600">Nous intervenons sur tous types de problèmes de plomberie</p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Notre Processus d'Intervention</h2>
            <p className="mt-4 text-xl text-gray-600">
              Une approche professionnelle pour résoudre efficacement vos problèmes
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Appel d'urgence</h3>
              <p className="text-gray-600">
                Contactez-nous par téléphone pour une intervention rapide. Nous vous posons quelques questions pour
                évaluer le problème.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Arrivée rapide</h3>
              <p className="text-gray-600">
                Notre technicien arrive à votre domicile en moins de 45 minutes avec tout l'équipement nécessaire.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Diagnostic précis</h3>
              <p className="text-gray-600">
                Nous identifions la cause exacte du problème grâce à des outils professionnels comme la caméra
                d'inspection.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation durable</h3>
              <p className="text-gray-600">
                Nous réparons le problème avec des pièces de qualité et vous offrons une garantie de 12 mois sur notre
                travail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Questions Fréquentes</h2>
            <p className="mt-4 text-xl text-gray-600">
              Réponses aux questions les plus courantes sur nos services de dépannage
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Combien de temps faut-il pour arriver ?</h3>
              <p className="mt-2 text-gray-600">
                Nous garantissons une intervention en moins de 45 minutes après votre appel, quelle que soit l'heure du
                jour ou de la nuit.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Quels sont vos tarifs ?</h3>
              <p className="mt-2 text-gray-600">
                Nos tarifs dépendent du type d'intervention. Nous vous fournissons toujours un devis gratuit et
                transparent avant de commencer les travaux.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">La garantie couvre-t-elle toutes les réparations ?</h3>
              <p className="mt-2 text-gray-600">
                Oui, toutes nos réparations sont couvertes par une garantie de 12 mois, pièces et main-d'œuvre incluses.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Intervenez-vous les week-ends et jours fériés ?</h3>
              <p className="mt-2 text-gray-600">
                Absolument, notre service est disponible 24h/24 et 7j/7, y compris les week-ends et jours fériés, sans
                supplément de prix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
