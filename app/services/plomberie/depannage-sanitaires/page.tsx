import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Dépannage Sanitaires | Services de Plomberie",
  description:
    "Services professionnels de dépannage pour tous types de sanitaires. Réparation de WC, douches, robinets et plus. Intervention rapide en moins de 45 minutes.",
}

export default function DepannageSanitaires() {
  const services = [
    "Fuite chasse d'eau",
    "Fuite WC coule",
    "Réparation WC broyeur",
    "Douche fuite siphon",
    "Réparation fuite robinet évier",
    "Réparation fuite siphon qui coule",
    "Robinet machine à laver fuite",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white py-20">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Dépannage</span>
              <span className="block text-blue-400">Sanitaires</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Réparation rapide et efficace de tous vos sanitaires : WC, douches, robinets et plus
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
              <h2 className="text-3xl font-bold text-gray-800">Dépannage Professionnel pour Sanitaires</h2>
              <p className="mt-4 text-lg text-gray-600">
                Des problèmes avec vos sanitaires peuvent perturber votre quotidien et causer des dégâts importants.
                Notre équipe de plombiers qualifiés intervient rapidement pour réparer tous types de sanitaires : WC,
                douches, robinets, siphons et plus.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Que vous ayez une chasse d'eau qui fuit, un WC bouché, un robinet qui goutte ou un siphon qui coule,
                nous avons l'expertise et l'équipement nécessaires pour résoudre votre problème rapidement et
                efficacement.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Réparation de tous types de sanitaires</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Intervention rapide en moins de 45 minutes</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Diagnostic précis du problème</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Garantie de 12 mois sur nos réparations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Service disponible 24h/24 et 7j/7</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/images/depannage-sanitaires.png"
                alt="Réparation de WC"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Réparation de Sanitaires</h3>
                <p className="mt-2 text-gray-200">
                  Nos techniciens sont formés pour réparer tous types de sanitaires rapidement et efficacement.
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

      {/* Types of Repairs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Dépannage Sanitaires</h2>
            <p className="mt-4 text-xl text-gray-600">
              Solutions professionnelles pour tous vos problèmes de sanitaires
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation WC</h3>
              <p className="text-gray-600">
                Réparation de chasses d'eau qui fuient, WC bouchés, mécanismes défectueux et problèmes d'étanchéité.
                Intervention sur tous types de WC, y compris les WC broyeurs.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation Douche</h3>
              <p className="text-gray-600">
                Réparation de fuites de siphons, robinets qui gouttent, problèmes de pression d'eau et remplacement de
                flexibles et pommeaux de douche.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation Robinets</h3>
              <p className="text-gray-600">
                Réparation de robinets qui fuient, remplacement de joints, cartouches et têtes céramiques. Intervention
                sur tous types de robinets : cuisine, salle de bain, extérieur.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation Siphons</h3>
              <p className="text-gray-600">
                Réparation ou remplacement de siphons qui fuient sous les éviers, lavabos, douches et baignoires.
                Nettoyage de siphons bouchés.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation Électroménager</h3>
              <p className="text-gray-600">
                Réparation des raccordements et fuites liées aux appareils électroménagers comme les machines à laver et
                lave-vaisselle. Installation de robinets d'arrêt.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Débouchage</h3>
              <p className="text-gray-600">
                Débouchage de WC, éviers, lavabos, douches et baignoires. Utilisation de techniques professionnelles
                pour éliminer efficacement les bouchons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Problèmes de Sanitaires que Nous Réparons</h2>
            <p className="mt-4 text-xl text-gray-600">
              Nos plombiers sont formés pour réparer tous types de problèmes de sanitaires
            </p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Notre Processus de Réparation</h2>
            <p className="mt-4 text-xl text-gray-600">
              Une approche méthodique pour résoudre efficacement vos problèmes de sanitaires
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Diagnostic</h3>
              <p className="text-gray-600">
                Examen approfondi du problème pour identifier la cause exacte et déterminer la meilleure solution.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Devis transparent</h3>
              <p className="text-gray-600">
                Présentation d'un devis clair et détaillé avant de commencer les travaux, sans frais cachés.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation</h3>
              <p className="text-gray-600">
                Intervention professionnelle avec des pièces de qualité pour une réparation durable et efficace.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Vérification</h3>
              <p className="text-gray-600">
                Tests complets après la réparation pour s'assurer que tout fonctionne parfaitement et qu'il n'y a plus
                de fuites.
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
              Réponses aux questions les plus courantes sur les problèmes de sanitaires
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Pourquoi ma chasse d'eau fuit-elle en permanence ?</h3>
              <p className="mt-2 text-gray-600">
                Une chasse d'eau qui fuit en permanence est généralement due à un mécanisme usé, un joint défectueux ou
                un flotteur mal réglé. Ce problème peut gaspiller des centaines de litres d'eau par jour et augmenter
                considérablement votre facture d'eau.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Faut-il remplacer un robinet qui goutte ou peut-on le réparer ?
              </h3>
              <p className="mt-2 text-gray-600">
                Dans la plupart des cas, un robinet qui goutte peut être réparé en remplaçant simplement le joint ou la
                cartouche. Cependant, si le robinet est ancien ou très endommagé, un remplacement complet peut être plus
                économique à long terme.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Que faire si mon WC broyeur ne fonctionne plus ?</h3>
              <p className="mt-2 text-gray-600">
                Si votre WC broyeur ne fonctionne plus, vérifiez d'abord l'alimentation électrique. Si le problème
                persiste, il peut s'agir d'un blocage du mécanisme de broyage ou d'une panne du moteur. Dans tous les
                cas, il est recommandé de faire appel à un professionnel pour éviter d'endommager l'appareil.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Combien de temps dure une intervention pour réparer un sanitaire ?
              </h3>
              <p className="mt-2 text-gray-600">
                La durée d'une intervention dépend du type de problème. Les réparations simples comme le remplacement
                d'un joint de robinet peuvent prendre 30 minutes, tandis que les réparations plus complexes comme le
                remplacement d'un mécanisme de WC peuvent prendre 1 à 2 heures.
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
