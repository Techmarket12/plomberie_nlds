import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Services de Rénovation Plomberie | Installation et Remplacement",
  description:
    "Services professionnels de rénovation plomberie à Namur. Installation et remplacement de sanitaires, tuyauterie et systèmes de chauffage. Garantie 12 mois.",
}

export default function RenovationPlomberie() {
  const services = [
    "Remplacement boiler",
    "Remplacement chauffe eau",
    "Remplacement chaudière",
    "Remplacement douche",
    "Remplacement wc",
    "Remplacement wc broyeur",
    "Remplacement baignoire par douche",
    "Installation adoucisseur",
    "Installation de nouvelles tuyauterie sanitaire",
    "Remplacement lavabo",
    "Remplacement canalisation extérieur",
    "Remplacement canalisation wc",
    "Remplacement canalisation évier",
    "Remplacement canalisation douche",
    "Remplacement robinet cuisine",
    "Remplacement mitigeur",
    "Installation système de filtration d'eau",
    "Installation adoucisseur",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Rénovation et Installation</span>
              <span className="block text-blue-400">Plomberie</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Solutions complètes pour l'installation et le remplacement de vos équipements sanitaires
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
              <h2 className="text-3xl font-bold text-gray-800">Services de Rénovation Plomberie Professionnels</h2>
              <p className="mt-4 text-lg text-gray-600">
                Notre équipe de plombiers qualifiés est spécialisée dans l'installation et le remplacement de tous types
                d'équipements sanitaires. Que vous souhaitiez rénover votre salle de bain, remplacer votre chaudière ou
                installer un système de filtration d'eau, nous vous proposons des solutions sur mesure.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Tous nos travaux de rénovation sont garantis 12 mois et nous utilisons des matériaux de qualité pour
                assurer la durabilité de vos installations.
              </p>

              <div className="mt-8 space-y-4">
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
                  <p className="text-lg text-gray-700">Matériaux et équipements de qualité</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Garantie de 12 mois sur tous nos travaux</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/images/bathroom-renovation.png"
                alt="Rénovation de salle de bain"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Rénovation Complète</h3>
                <p className="mt-2 text-gray-200">
                  Transformez votre salle de bain ou votre cuisine avec nos services de rénovation professionnels.
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

      {/* Services List */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Rénovation</h2>
            <p className="mt-4 text-xl text-gray-600">
              Solutions complètes pour tous vos projets de rénovation plomberie
            </p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Réalisations</h2>
            <p className="mt-4 text-xl text-gray-600">Découvrez quelques-uns de nos projets de rénovation récents</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/project-bathroom.png"
                  alt="Rénovation de salle de bain"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Rénovation Salle de Bain</h3>
                <p className="mt-2 text-gray-600">
                  Remplacement complet de la douche, du lavabo et des canalisations pour une salle de bain moderne et
                  fonctionnelle.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/project-kitchen.png"
                  alt="Rénovation de cuisine"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Plomberie Cuisine</h3>
                <p className="mt-2 text-gray-600">
                  Installation de nouvelles canalisations et d'un système de filtration d'eau pour une cuisine
                  entièrement rénovée.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/project-boiler.png"
                  alt="Installation de chaudière"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Remplacement Chaudière</h3>
                <p className="mt-2 text-gray-600">
                  Installation d'une nouvelle chaudière à condensation pour un système de chauffage plus efficace et
                  économique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Notre Processus de Rénovation</h2>
            <p className="mt-4 text-xl text-gray-600">Une approche méthodique pour des résultats de qualité</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Consultation</h3>
              <p className="text-gray-600">
                Nous discutons de votre projet, évaluons vos besoins et vous conseillons sur les meilleures solutions.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Devis détaillé</h3>
              <p className="text-gray-600">
                Nous vous fournissons un devis transparent et détaillé, incluant les matériaux et la main-d'œuvre.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réalisation</h3>
              <p className="text-gray-600">
                Nos techniciens qualifiés réalisent les travaux dans les délais convenus, avec un souci du détail.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Suivi et garantie</h3>
              <p className="text-gray-600">
                Nous vérifions votre satisfaction et offrons une garantie de 12 mois sur tous nos travaux de rénovation.
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
