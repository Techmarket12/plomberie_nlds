import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, PlugIcon as PipeValve } from "lucide-react"

export const metadata: Metadata = {
  title: "Inspection Caméra | Services de Débouchage",
  description:
    "Services professionnels d'inspection caméra pour canalisations. Localisation précise des problèmes. Diagnostic complet de vos canalisations.",
}

export default function InspectionCamera() {
  const services = [
    "Inspection caméra canalisations",
    "Localisation précise des bouchons",
    "Détection des fissures et dommages",
    "Diagnostic complet des canalisations",
    "Recherche de fuites cachées",
    "Vérification après travaux",
    "Inspection préventive",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white py-20">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Inspection</span>
              <span className="block text-blue-400">Caméra</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Diagnostic précis et visualisation de l'intérieur de vos canalisations
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
              <h2 className="text-3xl font-bold text-gray-800">Services Professionnels d'Inspection Caméra</h2>
              <p className="mt-4 text-lg text-gray-600">
                L'inspection caméra est une technique non invasive qui permet de visualiser l'intérieur de vos
                canalisations pour identifier avec précision la nature et l'emplacement des problèmes. Notre équipe
                utilise des caméras d'inspection de pointe pour diagnostiquer efficacement tous types de problèmes de
                canalisations.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Que vous ayez des bouchons récurrents, des odeurs inexpliquées, des refoulements ou simplement besoin
                d'un diagnostic préventif, notre service d'inspection caméra vous fournit des informations précises sur
                l'état de vos canalisations.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Localisation précise des problèmes</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Diagnostic complet de vos canalisations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Intervention non destructive</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Enregistrement vidéo disponible</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Rapport détaillé avec recommandations</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/images/camera-inspection-pro.png"
                alt="Inspection caméra professionnelle"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Diagnostic Précis</h3>
                <p className="mt-2 text-gray-200">
                  Nos caméras d'inspection permettent de visualiser l'intérieur de vos canalisations pour un diagnostic
                  précis.
                </p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="tel:+32493415283">
                    <PipeValve className="mr-2 h-4 w-4" />
                    Demander une inspection
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Comment Fonctionne l'Inspection Caméra</h2>
            <p className="mt-4 text-xl text-gray-600">
              Une technologie avancée pour un diagnostic précis de vos canalisations
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/camera-inspection-pro.png"
                alt="Caméra d'inspection professionnelle"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Qu'est-ce que l'inspection caméra ?</h3>
              <p className="mt-4 text-lg text-gray-600">
                L'inspection caméra est une technique non invasive qui utilise une caméra miniature fixée à un câble
                flexible pour visualiser l'intérieur de vos canalisations. Cette technologie de pointe nous permet
                d'identifier avec précision la nature et l'emplacement des problèmes sans avoir à effectuer de travaux
                destructifs.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-700">Localisation précise des problèmes</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-700">Diagnostic complet sans dégâts</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-700">Visualisation en temps réel</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-700">Enregistrement vidéo disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Avantages de l'Inspection Caméra</h2>
            <p className="mt-4 text-xl text-gray-600">
              Pourquoi choisir l'inspection caméra pour diagnostiquer vos canalisations
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Diagnostic Précis</h3>
              <p className="text-gray-600">
                L'inspection caméra permet de visualiser directement l'intérieur de vos canalisations pour identifier
                avec précision la nature et l'emplacement des problèmes. Fini les interventions à l'aveugle !
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Intervention Non Destructive</h3>
              <p className="text-gray-600">
                Contrairement aux méthodes traditionnelles qui peuvent nécessiter de casser des murs ou de creuser des
                tranchées, l'inspection caméra est totalement non invasive et ne cause aucun dégât.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Économie de Temps et d'Argent</h3>
              <p className="text-gray-600">
                En localisant précisément les problèmes, l'inspection caméra permet d'intervenir directement à l'endroit
                concerné, évitant les travaux inutiles et réduisant les coûts de réparation.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Prévention des Problèmes</h3>
              <p className="text-gray-600">
                Une inspection préventive permet de détecter les problèmes potentiels avant qu'ils ne deviennent graves,
                vous évitant des réparations coûteuses et des désagréments.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Documentation Visuelle</h3>
              <p className="text-gray-600">
                L'inspection caméra fournit des preuves visuelles de l'état de vos canalisations, utiles pour les
                assurances, les litiges ou simplement pour suivre l'évolution de l'état de vos installations.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Solutions Adaptées</h3>
              <p className="text-gray-600">
                Grâce à un diagnostic précis, nous pouvons vous proposer les solutions les plus adaptées à votre
                situation, qu'il s'agisse d'un simple débouchage ou de travaux plus importants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services d'Inspection Caméra</h2>
            <p className="mt-4 text-xl text-gray-600">Des solutions adaptées à tous vos besoins de diagnostic</p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Questions Fréquentes</h2>
            <p className="mt-4 text-xl text-gray-600">
              Réponses aux questions les plus courantes sur l'inspection caméra
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Pour quels types de canalisations l'inspection caméra est-elle adaptée ?
              </h3>
              <p className="mt-2 text-gray-600">
                L'inspection caméra peut être utilisée pour tous types de canalisations : évacuations d'eaux usées,
                canalisations d'eau potable, drains, égouts, etc. Nos caméras sont disponibles en différentes tailles
                pour s'adapter à des canalisations de 20 mm à 300 mm de diamètre.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Combien de temps dure une inspection caméra ?</h3>
              <p className="mt-2 text-gray-600">
                La durée d'une inspection caméra dépend de la longueur et de la complexité des canalisations à
                inspecter. En général, une inspection standard prend entre 1 et 2 heures. Pour des systèmes plus
                complexes ou des bâtiments plus grands, l'inspection peut prendre plus de temps.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Puis-je obtenir un enregistrement de l'inspection ?</h3>
              <p className="mt-2 text-gray-600">
                Oui, nous pouvons vous fournir un enregistrement vidéo de l'inspection ainsi qu'un rapport détaillé
                indiquant les problèmes identifiés et nos recommandations. Ces documents peuvent être utiles pour vos
                archives, pour les assurances ou pour planifier des travaux futurs.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Faut-il préparer les canalisations avant une inspection caméra ?
              </h3>
              <p className="mt-2 text-gray-600">
                Pour obtenir les meilleurs résultats, il est préférable que les canalisations soient relativement
                propres. Si vos canalisations sont très sales ou obstruées, nous pouvons effectuer un nettoyage
                préalable. Dans certains cas, un débouchage ou un hydrocurage peut être nécessaire avant l'inspection.
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
