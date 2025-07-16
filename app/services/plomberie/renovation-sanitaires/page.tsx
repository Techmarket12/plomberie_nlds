import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Rénovation Sanitaires | Services de Plomberie",
  description:
    "Services professionnels de rénovation et installation de sanitaires. Remplacement de WC, douches, lavabos et plus. Devis gratuit et travail garanti 12 mois.",
}

export default function RenovationSanitaires() {
  const services = [
    "Remplacement douche",
    "Remplacement WC",
    "Remplacement WC broyeur",
    "Remplacement baignoire par douche",
    "Remplacement lavabo",
    "Remplacement robinet cuisine",
    "Remplacement mitigeur",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Rénovation</span>
              <span className="block text-blue-400">Sanitaires</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Installation et remplacement professionnels de tous vos sanitaires : WC, douches, lavabos et plus
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
              <h2 className="text-3xl font-bold text-gray-800">Services Professionnels de Rénovation Sanitaires</h2>
              <p className="mt-4 text-lg text-gray-600">
                Vous souhaitez moderniser votre salle de bain ou votre cuisine ? Notre équipe de plombiers qualifiés
                vous propose des services complets d'installation et de remplacement de sanitaires pour transformer vos
                espaces.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Que vous ayez besoin de remplacer un WC, une douche, un lavabo ou de transformer une baignoire en
                douche, nous vous garantissons un travail soigné, réalisé avec des matériaux de qualité et dans les
                délais convenus.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Installation de tous types de sanitaires</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Devis détaillé et gratuit</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Conseils personnalisés pour optimiser vos installations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Travaux réalisés dans les délais convenus</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Garantie de 12 mois sur tous nos travaux</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/images/services/renovation_plomberie.webp"
                alt="Installation de sanitaires"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Installation de Sanitaires</h3>
                <p className="mt-2 text-gray-200">
                  Nos techniciens sont formés pour installer tous types de sanitaires avec précision et soin.
                </p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/contact">
                    <Construction className="mr-2 h-4 w-4" />
                    Demander un devis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Rénovation Sanitaires</h2>
            <p className="mt-4 text-xl text-gray-600">Solutions professionnelles pour tous vos projets de rénovation</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation WC</h3>
              <p className="text-gray-600">
                Installation et remplacement de tous types de WC : suspendus, au sol, avec ou sans réservoir, WC
                broyeurs. Raccordement aux évacuations et à l'alimentation en eau.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation Douche</h3>
              <p className="text-gray-600">
                Installation de cabines de douche, receveurs, parois et colonnes de douche. Transformation de baignoire
                en douche pour plus d'accessibilité.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation Lavabo</h3>
              <p className="text-gray-600">
                Installation et remplacement de lavabos, vasques et meubles de salle de bain. Raccordement à
                l'alimentation en eau et aux évacuations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Robinetterie</h3>
              <p className="text-gray-600">
                Installation et remplacement de robinets, mitigeurs et mélangeurs pour cuisine, salle de bain et WC.
                Solutions économiques et écologiques disponibles.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Baignoire</h3>
              <p className="text-gray-600">
                Installation et remplacement de baignoires classiques, balnéo ou à porte. Raccordement à l'alimentation
                en eau et aux évacuations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Accessibilité PMR</h3>
              <p className="text-gray-600">
                Solutions adaptées pour les personnes à mobilité réduite : douches à l'italienne, barres d'appui, sièges
                de douche, WC surélevés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Notre Processus d'Intervention</h2>
            <p className="mt-4 text-xl text-gray-600">Une approche professionnelle pour des résultats garantis</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Évaluation</h3>
              <p className="mt-2 text-gray-600">
                Visite sur place pour évaluer vos besoins et prendre les mesures nécessaires.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Devis Détaillé</h3>
              <p className="mt-2 text-gray-600">Proposition d'un devis clair et détaillé, sans frais cachés.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Installation</h3>
              <p className="mt-2 text-gray-600">Intervention rapide et soignée par nos techniciens qualifiés.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Garantie</h3>
              <p className="mt-2 text-gray-600">
                Tous nos travaux sont garantis 12 mois pour votre tranquillité d'esprit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Questions Fréquentes</h2>
            <p className="mt-4 text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos services de rénovation sanitaires
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Combien de temps prend l'installation d'une douche ?
              </h3>
              <p className="text-gray-600">
                L'installation d'une douche complète prend généralement entre 1 et 2 jours, selon la complexité des
                travaux et si des modifications de plomberie sont nécessaires.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Faut-il couper l'eau dans tout le logement pendant les travaux ?
              </h3>
              <p className="text-gray-600">
                Nous coupons l'eau uniquement dans la zone concernée et seulement pendant la durée nécessaire aux
                raccordements. Nous vous informons à l'avance de ces coupures.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Proposez-vous la fourniture et pose ou uniquement la pose ?
              </h3>
              <p className="text-gray-600">
                Nous proposons les deux options. Vous pouvez fournir vos propres équipements ou nous pouvons les fournir
                à des tarifs avantageux grâce à nos partenariats avec les fournisseurs.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Quelles sont les garanties sur vos travaux ?</h3>
              <p className="text-gray-600">
                Tous nos travaux d'installation et de rénovation sont garantis 12 mois. Les équipements bénéficient de
                la garantie fabricant, généralement de 2 ans minimum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Prêt à Rénover Vos Sanitaires ?</h2>
            <p className="mt-4 text-xl">Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="tel:+32493415283">Appeler Maintenant</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-blue-700">
                <Link href="/contact">Demander un Devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
