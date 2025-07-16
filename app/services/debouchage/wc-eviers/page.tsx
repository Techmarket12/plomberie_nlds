import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, PlugIcon as PipeValve } from "lucide-react"

export const metadata: Metadata = {
  title: "Débouchage WC & Éviers | Services de Débouchage",
  description:
    "Services professionnels de débouchage de WC, éviers, douches et baignoires. Intervention rapide en moins de 45 minutes, disponible 24h/24 et 7j/7.",
}

export default function DebouchageWCEviers() {
  const services = [
    "Débouchage WC",
    "Débouchage WC broyeur",
    "Débouchage évier cuisine",
    "Débouchage lavabo salle de bain",
    "Débouchage douche",
    "Débouchage baignoire",
    "Débouchage siphon",
    "Élimination des mauvaises odeurs",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#111827] text-white">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Débouchage</span>
              <span className="block text-blue-400">WC & Éviers</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Débouchage rapide et efficace de vos toilettes, éviers, douches et baignoires
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
              <h2 className="text-3xl font-bold text-gray-800">Services Professionnels de Débouchage</h2>
              <p className="mt-4 text-lg text-gray-600">
                Un WC bouché, un évier qui se vide lentement ou une douche qui déborde peuvent rapidement perturber
                votre quotidien. Notre équipe de techniciens qualifiés intervient rapidement pour déboucher tous types
                d'installations sanitaires.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Grâce à notre équipement professionnel et notre expertise, nous pouvons résoudre efficacement tous vos
                problèmes de bouchons, qu'ils soient causés par des déchets, du papier, des cheveux, des graisses ou du
                calcaire.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Débouchage de tous types d'installations sanitaires</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Intervention rapide en moins de 45 minutes</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Équipement professionnel pour des résultats efficaces</p>
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
                src="/images/services/debouchage_canalisation.webp"
                alt="Débouchage de WC"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Débouchage Rapide</h3>
                <p className="mt-2 text-gray-200">
                  Nos techniciens interviennent rapidement pour résoudre tous vos problèmes de bouchons.
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
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Débouchage</h2>
            <p className="mt-4 text-xl text-gray-600">Solutions professionnelles pour tous vos problèmes de bouchons</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage WC</h3>
              <p className="text-gray-600">
                Débouchage rapide et efficace de vos toilettes bouchées, quelle que soit la cause du problème. Notre
                équipement professionnel permet d'éliminer les obstructions les plus tenaces sans endommager vos
                installations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/debouchage_canalisation.webp"
                  alt="Débouchage d'évier professionnel"
                  width={400}
                  height={300}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage Évier</h3>
              <p className="text-gray-600">
                Élimination des bouchons dans vos éviers de cuisine causés par des résidus alimentaires, des graisses ou
                des objets. Nettoyage des siphons et des canalisations pour un écoulement optimal.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage Lavabo</h3>
              <p className="text-gray-600">
                Débouchage de lavabos de salle de bain obstrués par des cheveux, du dentifrice, du savon ou du calcaire.
                Intervention propre et efficace pour restaurer un écoulement normal.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage Douche</h3>
              <p className="text-gray-600">
                Résolution des problèmes d'évacuation lente ou bouchée dans votre douche. Élimination des accumulations
                de cheveux, savon et calcaire qui obstruent les canalisations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage Baignoire</h3>
              <p className="text-gray-600">
                Débouchage de baignoires qui se vident lentement ou qui sont complètement bouchées. Nettoyage des
                siphons et des canalisations pour restaurer un écoulement normal.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage WC Broyeur</h3>
              <p className="text-gray-600">
                Intervention spécialisée pour déboucher les WC broyeurs sans les endommager. Réparation et remise en
                service de votre installation en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Prestations de Débouchage</h2>
            <p className="mt-4 text-xl text-gray-600">Des solutions adaptées à tous vos problèmes de bouchons</p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Causes Courantes de Bouchons</h2>
            <p className="mt-4 text-xl text-gray-600">Comprendre les causes pour mieux prévenir les problèmes futurs</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">WC Bouchés</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Excès de papier toilette</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Objets jetés par erreur (lingettes, coton, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Jouets d'enfants</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Accumulation de calcaire</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Éviers Bouchés</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Résidus alimentaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Graisses et huiles solidifiées</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Petits objets tombés dans l'évier</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Accumulation de produits ménagers</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Douches et Baignoires Bouchées</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Accumulation de cheveux</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Résidus de savon et shampooing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Dépôts de calcaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span>Sable et autres débris</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Conseils de Prévention</h2>
            <p className="mt-4 text-xl text-gray-600">Comment éviter les bouchons dans vos installations sanitaires</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Pour les WC</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Ne jetez que du papier toilette dans les WC, rien d'autre.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-600">Évitez de jeter des lingettes, même celles dites "biodégradables".</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-600">Utilisez régulièrement un produit détartrant adapté aux WC.</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Pour les Éviers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Ne jetez jamais d'huiles ou de graisses dans l'évier.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-600">Utilisez une crépine pour retenir les résidus alimentaires.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-600">
                    Faites couler de l'eau chaude après chaque utilisation pour évacuer les résidus.
                  </p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Pour les Douches et Baignoires</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Installez un filtre à cheveux sur votre bonde de douche ou baignoire.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-600">Nettoyez régulièrement les filtres et les bondes.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-600">
                    Utilisez un produit anti-calcaire régulièrement pour éviter les dépôts.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Questions Fréquentes</h2>
            <p className="mt-4 text-xl text-gray-600">Réponses aux questions les plus courantes sur le débouchage</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Les produits de débouchage du commerce sont-ils efficaces ?
              </h3>
              <p className="mt-2 text-gray-600">
                Les produits de débouchage du commerce peuvent être efficaces pour les petits bouchons superficiels,
                mais ils sont souvent inefficaces pour les obstructions importantes. De plus, ils peuvent endommager vos
                canalisations à long terme et sont nocifs pour l'environnement. Un débouchage professionnel est toujours
                plus efficace et sécuritaire.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Combien de temps faut-il pour déboucher un WC ou un évier ?
              </h3>
              <p className="mt-2 text-gray-600">
                La durée d'intervention dépend de la nature et de la localisation du bouchon. Dans la plupart des cas,
                nos techniciens peuvent déboucher un WC ou un évier en 30 minutes à 1 heure. Les cas plus complexes
                peuvent nécessiter plus de temps.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Que faire en cas d'urgence avant l'arrivée du plombier ?
              </h3>
              <p className="mt-2 text-gray-600">
                En cas d'urgence, fermez le robinet d'arrivée d'eau pour limiter les dégâts. Pour un WC bouché, évitez
                de tirer la chasse d'eau à répétition. Pour un évier ou un lavabo, évitez d'utiliser des produits
                chimiques agressifs qui pourraient compliquer l'intervention du plombier.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Comment savoir si le problème vient de mes canalisations ou du réseau public ?
              </h3>
              <p className="mt-2 text-gray-600">
                Si plusieurs de vos installations sanitaires sont bouchées simultanément (WC, éviers, douches), le
                problème vient probablement de votre canalisation principale ou du réseau public. Si une seule
                installation est affectée, le bouchon est généralement localisé dans cette installation ou dans sa
                canalisation d'évacuation.
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
