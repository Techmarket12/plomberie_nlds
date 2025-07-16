import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Dépannage Chauffage | Services de Plomberie",
  description:
    "Services professionnels de dépannage pour systèmes de chauffage. Réparation de boilers, chauffe-eau et chaudières. Intervention rapide en moins de 45 minutes.",
}

export default function DepannageChauffage() {
  const services = [
    "Réparation boiler",
    "Réparation boiler fuite",
    "Réparation Fuite chauffe eau",
    "Dépannage chaudière",
    "Réparation thermostat",
    "Remplacement résistance",
    "Purge radiateurs",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white py-20">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Dépannage</span>
              <span className="block text-blue-400">Chauffage</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Réparation rapide et efficace de vos systèmes de chauffage : boilers, chauffe-eau et chaudières
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
              <h2 className="text-3xl font-bold text-gray-800">Dépannage Professionnel pour Systèmes de Chauffage</h2>
              <p className="mt-4 text-lg text-gray-600">
                Une panne de chauffage peut rapidement devenir un problème majeur, surtout pendant les mois d'hiver.
                Notre équipe de techniciens qualifiés intervient rapidement pour réparer tous types de systèmes de
                chauffage : boilers, chauffe-eau et chaudières.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Que vous ayez un boiler qui fuit, un chauffe-eau qui ne produit plus d'eau chaude ou une chaudière en
                panne, nous avons l'expertise et l'équipement nécessaires pour diagnostiquer et résoudre votre problème
                rapidement et efficacement.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Réparation de tous types de systèmes de chauffage</p>
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
                src="/images/services/depannage_plomberie.webp"
                alt="Réparation de boiler"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Réparation de Systèmes de Chauffage</h3>
                <p className="mt-2 text-gray-200">
                  Nos techniciens sont formés pour réparer tous types de systèmes de chauffage rapidement et
                  efficacement.
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
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Dépannage Chauffage</h2>
            <p className="mt-4 text-xl text-gray-600">
              Solutions professionnelles pour tous vos problèmes de chauffage
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation Boiler</h3>
              <p className="text-gray-600">
                Réparation de boilers qui fuient, ne chauffent plus ou produisent des bruits anormaux. Remplacement de
                résistances, thermostats et anodes.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation Chauffe-eau</h3>
              <p className="text-gray-600">
                Réparation de chauffe-eau instantanés ou à accumulation. Résolution des problèmes de température, de
                pression et de fuites.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Dépannage Chaudière</h3>
              <p className="text-gray-600">
                Diagnostic et réparation de chaudières en panne. Intervention sur les problèmes d'allumage, de pression,
                de circulation et de régulation.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation Fuites</h3>
              <p className="text-gray-600">
                Détection et réparation de fuites sur vos systèmes de chauffage. Remplacement de joints, vannes et
                raccords défectueux.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Purge Radiateurs</h3>
              <p className="text-gray-600">
                Purge professionnelle de vos radiateurs pour éliminer l'air et optimiser leur performance. Résolution
                des problèmes de chauffage inégal.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Réparation Thermostat</h3>
              <p className="text-gray-600">
                Diagnostic et réparation de thermostats défectueux. Installation et programmation de nouveaux
                thermostats pour une meilleure efficacité énergétique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Problèmes de Chauffage que Nous Réparons</h2>
            <p className="mt-4 text-xl text-gray-600">
              Nos techniciens sont formés pour réparer tous types de problèmes de chauffage
            </p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Problèmes Courants de Chauffage</h2>
            <p className="mt-4 text-xl text-gray-600">
              Reconnaître les signes qui indiquent que votre système de chauffage a besoin d'une réparation
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Eau Chaude Insuffisante</h3>
              <p className="text-gray-600">
                Si votre eau chaude est insuffisante ou inexistante, cela peut être dû à une résistance défectueuse, un
                thermostat mal réglé ou une accumulation de calcaire dans votre boiler ou chauffe-eau.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Fuites d'Eau</h3>
              <p className="text-gray-600">
                Des fuites sur votre boiler, chauffe-eau ou chaudière peuvent indiquer un joint défectueux, une
                corrosion interne ou une pression excessive. Ces fuites doivent être réparées rapidement pour éviter des
                dégâts importants.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Bruits Anormaux</h3>
              <p className="text-gray-600">
                Des bruits de claquement, de sifflement ou de bouillonnement peuvent indiquer une accumulation de
                calcaire, une pompe défectueuse ou des problèmes de pression dans votre système de chauffage.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Chauffage Inégal</h3>
              <p className="text-gray-600">
                Si certains radiateurs sont plus chauds que d'autres ou si votre chauffage est inégal, cela peut être dû
                à de l'air dans le système, un déséquilibre hydraulique ou une pompe défaillante.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Pression Incorrecte</h3>
              <p className="text-gray-600">
                Une pression trop basse ou trop élevée dans votre chaudière peut causer des dysfonctionnements. Cela
                peut être dû à une fuite, un vase d'expansion défectueux ou une vanne de remplissage mal réglée.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Consommation Excessive</h3>
              <p className="text-gray-600">
                Une augmentation soudaine de votre consommation d'énergie peut indiquer un problème d'efficacité de
                votre système de chauffage, comme un entartrage, un brûleur mal réglé ou un thermostat défectueux.
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
              Réponses aux questions les plus courantes sur les problèmes de chauffage
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Pourquoi mon boiler ne produit-il plus d'eau chaude ?</h3>
              <p className="mt-2 text-gray-600">
                Plusieurs raisons peuvent expliquer ce problème : une résistance défectueuse, un thermostat en panne, un
                disjoncteur déclenché ou une accumulation excessive de calcaire. Notre équipe peut diagnostiquer
                précisément la cause et effectuer la réparation nécessaire.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Est-il dangereux d'avoir une fuite sur mon boiler ?</h3>
              <p className="mt-2 text-gray-600">
                Oui, une fuite sur un boiler peut être dangereuse car elle peut entraîner des courts-circuits
                électriques, des dégâts d'eau importants et, dans certains cas, une surpression dangereuse. Il est
                recommandé de faire appel à un professionnel dès que vous constatez une fuite.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Combien de temps dure une intervention pour réparer un système de chauffage ?
              </h3>
              <p className="mt-2 text-gray-600">
                La durée d'une intervention dépend du type de problème. Les réparations simples comme le remplacement
                d'un thermostat peuvent prendre 1 heure, tandis que les réparations plus complexes comme le remplacement
                d'une résistance de boiler peuvent prendre 2 à 3 heures.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Faut-il remplacer ou réparer un boiler qui fuit ?</h3>
              <p className="mt-2 text-gray-600">
                Cela dépend de l'âge du boiler et de la nature de la fuite. Si le boiler a plus de 10 ans et que la
                fuite provient de la cuve elle-même (due à la corrosion), un remplacement est généralement recommandé.
                Pour des fuites au niveau des raccords, vannes ou joints, une réparation est souvent possible et plus
                économique.
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
