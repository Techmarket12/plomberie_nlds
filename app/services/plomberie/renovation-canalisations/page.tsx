import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Rénovation Canalisations | Services de Plomberie",
  description:
    "Services professionnels de rénovation et installation de canalisations. Remplacement de tuyauterie, installation de systèmes de filtration d'eau et d'adoucisseurs.",
}

export default function RenovationCanalisations() {
  const services = [
    "Remplacement canalisation extérieur",
    "Remplacement canalisation wc",
    "Remplacement canalisation évier",
    "Remplacement canalisation douche",
    "Installation de nouvelles tuyauterie sanitaire",
    "Installation système de filtration d'eau",
    "Installation adoucisseur",
    "Remplacement colonnes d'évacuation",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white py-20">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Rénovation</span>
              <span className="block text-blue-400">Canalisations</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Remplacement et installation professionnels de canalisations et systèmes de filtration d'eau
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
              <h2 className="text-3xl font-bold text-gray-800">Services Professionnels de Rénovation Canalisations</h2>
              <p className="mt-4 text-lg text-gray-600">
                Des canalisations vétustes ou endommagées peuvent causer de nombreux problèmes : fuites, mauvaises
                odeurs, baisse de pression ou contamination de l'eau. Notre équipe de plombiers qualifiés vous propose
                des solutions complètes pour le remplacement et l'installation de tous types de canalisations.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Que vous souhaitiez remplacer des canalisations existantes ou installer de nouvelles tuyauteries, nous
                vous garantissons un travail soigné, réalisé avec des matériaux de qualité et dans les délais convenus.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Remplacement de tous types de canalisations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Installation de systèmes de filtration d'eau</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Devis détaillé et gratuit</p>
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
                src="/images/installation-canalisation.png"
                alt="Installation de canalisations"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Installation de Canalisations</h3>
                <p className="mt-2 text-gray-200">
                  Nos techniciens sont formés pour installer tous types de canalisations avec précision et soin.
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
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Rénovation Canalisations</h2>
            <p className="mt-4 text-xl text-gray-600">Solutions professionnelles pour tous vos projets de rénovation</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Remplacement Canalisations</h3>
              <p className="text-gray-600">
                Remplacement de canalisations vétustes ou endommagées par des tuyaux modernes en cuivre, PER,
                multicouche ou PVC. Intervention propre et soignée pour minimiser les dégâts.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation Nouvelles Tuyauteries</h3>
              <p className="text-gray-600">
                Installation de nouvelles tuyauteries pour l'alimentation en eau ou l'évacuation. Création de nouveaux
                points d'eau pour cuisine, salle de bain ou buanderie.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation Système Filtration</h3>
              <p className="text-gray-600">
                Installation de systèmes de filtration d'eau pour améliorer la qualité de votre eau potable. Élimination
                des impuretés, du chlore et des métaux lourds.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation Adoucisseur</h3>
              <p className="text-gray-600">
                Installation d'adoucisseurs d'eau pour réduire la dureté de l'eau et protéger vos équipements contre le
                calcaire. Solution idéale pour prolonger la durée de vie de vos installations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Remplacement Colonnes d'Évacuation</h3>
              <p className="text-gray-600">
                Remplacement de colonnes d'évacuation dans les immeubles collectifs. Intervention coordonnée pour
                minimiser les désagréments pour les occupants.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Rénovation Complète Plomberie</h3>
              <p className="text-gray-600">
                Rénovation complète de la plomberie de votre habitation. Remplacement de toutes les canalisations
                d'alimentation et d'évacuation pour une installation moderne et durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Prestations de Rénovation Canalisations</h2>
            <p className="mt-4 text-xl text-gray-600">Des solutions adaptées à tous vos besoins en plomberie</p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Matériaux Utilisés</h2>
            <p className="mt-4 text-xl text-gray-600">Des matériaux de qualité pour des installations durables</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Cuivre</h3>
              <p className="text-gray-600">
                Matériau traditionnel reconnu pour sa durabilité et sa résistance. Idéal pour l'alimentation en eau
                chaude et froide. Durée de vie supérieure à 50 ans.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">PER (Polyéthylène Réticulé)</h3>
              <p className="text-gray-600">
                Matériau moderne, flexible et résistant à la corrosion. Facile à installer et économique. Idéal pour les
                rénovations sans gros travaux.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Multicouche</h3>
              <p className="text-gray-600">
                Combine les avantages du métal et du plastique. Résistant, flexible et facile à installer. Excellente
                isolation thermique pour limiter les pertes de chaleur.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">PVC</h3>
              <p className="text-gray-600">
                Utilisé principalement pour les évacuations. Léger, économique et résistant aux produits chimiques.
                Facile à installer et à entretenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Questions Fréquentes</h2>
            <p className="mt-4 text-xl text-gray-600">
              Réponses aux questions les plus courantes sur la rénovation de canalisations
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Comment savoir si mes canalisations ont besoin d'être remplacées ?
              </h3>
              <p className="mt-2 text-gray-600">
                Plusieurs signes indiquent que vos canalisations ont besoin d'être remplacées : fuites récurrentes,
                baisse de pression, eau décolorée, bruits dans les tuyaux, ou canalisations de plus de 50 ans. Une
                inspection par un professionnel peut confirmer l'état de vos canalisations.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Combien coûte le remplacement des canalisations ?</h3>
              <p className="mt-2 text-gray-600">
                Le coût dépend de plusieurs facteurs : l'étendue des travaux, le type de matériaux utilisés,
                l'accessibilité des canalisations et les éventuels travaux de finition. Nous vous proposons un devis
                détaillé et gratuit après une visite technique pour évaluer précisément vos besoins.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Combien de temps durent les travaux de remplacement de canalisations ?
              </h3>
              <p className="mt-2 text-gray-600">
                La durée des travaux varie selon l'ampleur du projet. Le remplacement de canalisations dans une salle de
                bain peut prendre 1 à 2 jours, tandis qu'une rénovation complète de la plomberie d'une maison peut
                nécessiter 1 à 2 semaines. Nous vous communiquons un planning précis avant le début des travaux.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Quel est le meilleur matériau pour remplacer mes canalisations ?
              </h3>
              <p className="mt-2 text-gray-600">
                Le choix du matériau dépend de plusieurs facteurs : votre budget, le type d'installation, la qualité de
                votre eau et vos préférences personnelles. Le cuivre est durable mais plus coûteux, tandis que le PER et
                le multicouche offrent un bon rapport qualité-prix. Nos techniciens peuvent vous conseiller sur la
                meilleure option pour votre situation.
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
