import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, PlugIcon as PipeValve } from "lucide-react"

export const metadata: Metadata = {
  title: "Débouchage Canalisations | Services de Débouchage",
  description:
    "Services professionnels de débouchage de canalisations intérieures et extérieures. Hydrocurage haute pression. Intervention rapide en moins de 45 minutes.",
}

export default function DebouchageCanalisations() {
  const services = [
    "Débouchage canalisations intérieures",
    "Débouchage canalisations extérieures",
    "Débouchage égouts",
    "Hydrocurage haute pression",
    "Nettoyage regards",
    "Débouchage colonnes d'évacuation",
    "Élimination racines",
    "Curage préventif",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white py-20">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Débouchage</span>
              <span className="block text-blue-400">Canalisations</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Débouchage professionnel de toutes canalisations intérieures et extérieures
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
              <h2 className="text-3xl font-bold text-gray-800">Services Professionnels de Débouchage Canalisations</h2>
              <p className="mt-4 text-lg text-gray-600">
                Des canalisations bouchées peuvent causer de sérieux problèmes dans votre habitation : mauvaises odeurs,
                remontées d'eau, inondations et dégâts structurels. Notre équipe de techniciens qualifiés intervient
                rapidement pour déboucher tous types de canalisations, qu'elles soient intérieures ou extérieures.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Grâce à notre équipement professionnel, incluant des furets électriques, des nettoyeurs haute pression
                et des caméras d'inspection, nous pouvons localiser et éliminer efficacement tous types de bouchons,
                même les plus tenaces.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Débouchage de tous types de canalisations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Hydrocurage haute pression</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Intervention rapide en moins de 45 minutes</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Garantie de 12 mois sur nos interventions</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Service disponible 24h/24 et 7j/7</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/images/debouchage-canalisation.png"
                alt="Débouchage professionnel de canalisations"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Débouchage Professionnel</h3>
                <p className="mt-2 text-gray-200">
                  Nos techniciens utilisent des équipements de pointe pour déboucher efficacement vos canalisations.
                </p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="tel:+32493415283">
                    <PipeValve className="mr-2 h-4 w-4" />
                    Appeler pour un débouchage
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
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Débouchage Canalisations</h2>
            <p className="mt-4 text-xl text-gray-600">
              Solutions professionnelles pour tous vos problèmes de canalisations
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage Canalisations Intérieures</h3>
              <p className="text-gray-600">
                Débouchage des canalisations d'évacuation à l'intérieur de votre habitation : tuyaux d'évacuation,
                colonnes d'évacuation, siphons de sol. Intervention propre et efficace pour restaurer un écoulement
                normal.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage Canalisations Extérieures</h3>
              <p className="text-gray-600">
                Débouchage des canalisations extérieures, égouts et systèmes d'évacuation des eaux usées. Élimination
                des bouchons causés par des racines, des déchets ou des dépôts.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Hydrocurage Haute Pression</h3>
              <p className="text-gray-600">
                Nettoyage en profondeur de vos canalisations à l'aide d'un jet d'eau à haute pression. Cette technique
                permet d'éliminer efficacement les dépôts, graisses et autres obstructions tenaces.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Nettoyage Regards</h3>
              <p className="text-gray-600">
                Nettoyage et débouchage des regards d'égout et siphons de cour. Élimination des déchets, boues et dépôts
                qui obstruent l'écoulement des eaux.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Élimination Racines</h3>
              <p className="text-gray-600">
                Élimination des racines qui ont pénétré dans vos canalisations. Utilisation d'équipements spécialisés
                pour couper et retirer les racines sans endommager vos canalisations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Curage Préventif</h3>
              <p className="text-gray-600">
                Nettoyage préventif de vos canalisations pour éviter les bouchons et les problèmes d'écoulement.
                Intervention régulière recommandée pour maintenir vos canalisations en bon état.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Prestations de Débouchage Canalisations</h2>
            <p className="mt-4 text-xl text-gray-600">Des solutions adaptées à tous vos problèmes de canalisations</p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Hydrocurage Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Hydrocurage Haute Pression</h2>
            <p className="mt-4 text-xl text-gray-600">
              Une solution puissante pour les canalisations fortement obstruées
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
              <Image src="/images/services/debouchage-canalisation.png" alt="Hydrocurage haute pression" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Qu'est-ce que l'hydrocurage ?</h3>
              <p className="mt-4 text-lg text-gray-600">
                L'hydrocurage est une technique de nettoyage des canalisations qui utilise un jet d'eau à haute pression
                pour éliminer les obstructions et les dépôts. Cette méthode est particulièrement efficace pour les
                bouchons tenaces, les accumulations de graisse, les dépôts de calcaire et les racines.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-700">Nettoyage en profondeur des canalisations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-700">Élimination des dépôts et incrustations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-700">Respect de l'intégrité des canalisations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-700">Solution écologique sans produits chimiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Problèmes Courants de Canalisations</h2>
            <p className="mt-4 text-xl text-gray-600">
              Reconnaître les signes qui indiquent que vos canalisations ont besoin d'un débouchage
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Écoulement Lent</h3>
              <p className="text-gray-600">
                Si l'eau s'écoule lentement dans vos éviers, douches ou baignoires, cela indique généralement un bouchon
                partiel dans vos canalisations. Un débouchage préventif peut éviter que le problème ne s'aggrave.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Mauvaises Odeurs</h3>
              <p className="text-gray-600">
                Des odeurs désagréables émanant de vos canalisations peuvent indiquer une accumulation de déchets
                organiques ou un problème de siphon. Un débouchage professionnel peut éliminer la source des odeurs.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Bruits Étranges</h3>
              <p className="text-gray-600">
                Des gargouillements ou des bruits de succion dans vos canalisations peuvent indiquer un problème de
                ventilation ou un bouchon partiel. Ces bruits ne doivent pas être ignorés.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Refoulements</h3>
              <p className="text-gray-600">
                Si l'eau remonte dans vos éviers, douches ou toilettes lorsque vous utilisez d'autres installations
                sanitaires, cela indique un bouchon dans votre canalisation principale.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débordements</h3>
              <p className="text-gray-600">
                Des débordements d'eau au niveau des regards ou des siphons de cour indiquent généralement un bouchon
                important dans vos canalisations extérieures ou votre système d'égout.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Zones Humides</h3>
              <p className="text-gray-600">
                Des zones humides inhabituelles dans votre jardin peuvent indiquer une fuite ou un bouchon dans vos
                canalisations enterrées. Une inspection caméra peut aider à localiser le problème.
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
              Réponses aux questions les plus courantes sur le débouchage de canalisations
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Quelle est la différence entre le débouchage mécanique et l'hydrocurage ?
              </h3>
              <p className="mt-2 text-gray-600">
                Le débouchage mécanique utilise un furet ou une spirale pour percer et retirer les bouchons localisés.
                L'hydrocurage utilise un jet d'eau à haute pression pour nettoyer les parois des canalisations et
                éliminer les dépôts sur toute leur longueur. L'hydrocurage est généralement plus efficace pour les
                bouchons tenaces et le nettoyage en profondeur.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                À quelle fréquence faut-il faire curer ses canalisations ?
              </h3>
              <p className="mt-2 text-gray-600">
                Pour les habitations, un curage préventif tous les 2 à 3 ans est généralement recommandé. Pour les
                restaurants et commerces qui génèrent plus de graisses et de déchets, un curage annuel est conseillé. La
                fréquence peut varier en fonction de l'âge de vos canalisations et de votre utilisation.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">L'hydrocurage peut-il endommager mes canalisations ?</h3>
              <p className="mt-2 text-gray-600">
                Lorsqu'il est réalisé par des professionnels, l'hydrocurage ne présente aucun risque pour vos
                canalisations, même les plus anciennes. Nos techniciens adaptent la pression en fonction du type et de
                l'état de vos canalisations pour garantir un nettoyage efficace sans dommages.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Comment savoir si le problème vient de mes canalisations ou du réseau public ?
              </h3>
              <p className="mt-2 text-gray-600">
                Si plusieurs de vos installations sanitaires sont affectées simultanément, le problème vient
                probablement de votre canalisation principale ou du réseau public. Nos techniciens peuvent effectuer une
                inspection caméra pour localiser précisément l'origine du problème et déterminer si la responsabilité
                incombe au propriétaire ou à la commune.
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
