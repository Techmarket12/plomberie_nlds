import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Rénovation Chauffage | Services de Plomberie",
  description:
    "Services professionnels de rénovation et installation de systèmes de chauffage. Remplacement de boilers, chauffe-eau et chaudières pour plus d'efficacité énergétique.",
}

export default function RenovationChauffage() {
  const services = [
    "Remplacement boiler",
    "Remplacement chauffe eau",
    "Remplacement chaudière",
    "Installation pompe à chaleur",
    "Installation chauffage au sol",
    "Installation radiateurs",
    "Remplacement thermostat",
    "Installation système de régulation",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white py-20">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Rénovation</span>
              <span className="block text-blue-400">Chauffage</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Installation et remplacement professionnels de systèmes de chauffage pour plus d'efficacité énergétique
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
              <h2 className="text-3xl font-bold text-gray-800">Services Professionnels de Rénovation Chauffage</h2>
              <p className="mt-4 text-lg text-gray-600">
                Vous souhaitez moderniser votre système de chauffage pour plus d'efficacité énergétique et de confort ?
                Notre équipe de techniciens qualifiés vous propose des solutions complètes pour l'installation et le
                remplacement de tous types de systèmes de chauffage.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Que vous ayez besoin de remplacer un boiler, un chauffe-eau ou une chaudière, nous vous garantissons un
                travail soigné, réalisé avec des équipements de qualité et dans les délais convenus.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Installation de tous types de systèmes de chauffage</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Devis détaillé et gratuit</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">
                    Conseils personnalisés pour optimiser votre consommation énergétique
                  </p>
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
                src="/images/installation-chaudiere.png"
                alt="Installation de chaudière"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Installation de Systèmes de Chauffage</h3>
                <p className="mt-2 text-gray-200">
                  Nos techniciens sont formés pour installer tous types de systèmes de chauffage avec précision et soin.
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
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Rénovation Chauffage</h2>
            <p className="mt-4 text-xl text-gray-600">Solutions professionnelles pour tous vos projets de rénovation</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Remplacement Boiler</h3>
              <p className="text-gray-600">
                Remplacement de boilers électriques ou au gaz par des modèles plus performants et économiques.
                Installation de boilers à pompe à chaleur pour une meilleure efficacité énergétique.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Remplacement Chauffe-eau</h3>
              <p className="text-gray-600">
                Installation de chauffe-eau instantanés ou à accumulation. Remplacement de votre ancien chauffe-eau par
                un modèle plus économique et performant.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Remplacement Chaudière</h3>
              <p className="text-gray-600">
                Installation de chaudières à condensation, à basse température ou à biomasse. Remplacement de votre
                ancienne chaudière par un modèle plus économique et respectueux de l'environnement.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation Pompe à Chaleur</h3>
              <p className="text-gray-600">
                Installation de pompes à chaleur air-eau ou géothermiques pour un chauffage écologique et économique.
                Solution idéale pour réduire votre consommation énergétique.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation Chauffage au Sol</h3>
              <p className="text-gray-600">
                Installation de systèmes de chauffage au sol hydrauliques ou électriques. Solution confortable et
                économique pour chauffer votre habitation de manière homogène.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Installation Radiateurs</h3>
              <p className="text-gray-600">
                Remplacement de vos anciens radiateurs par des mod��les plus performants. Installation de radiateurs à
                basse température ou de convecteurs électriques nouvelle génération.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Prestations de Rénovation Chauffage</h2>
            <p className="mt-4 text-xl text-gray-600">Des solutions adaptées à tous vos besoins en chauffage</p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Avantages de la Rénovation Chauffage</h2>
            <p className="mt-4 text-xl text-gray-600">Pourquoi moderniser votre système de chauffage</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Économies d'énergie</h3>
              <p className="text-gray-600">
                Les systèmes de chauffage modernes sont beaucoup plus efficaces que les anciens modèles, ce qui vous
                permet de réaliser des économies significatives sur vos factures d'énergie.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Confort accru</h3>
              <p className="text-gray-600">
                Les nouveaux systèmes de chauffage offrent un meilleur confort thermique, avec une chaleur plus homogène
                et une meilleure régulation de la température.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Fiabilité</h3>
              <p className="text-gray-600">
                Les nouveaux systèmes de chauffage sont plus fiables et nécessitent moins d'entretien que les anciens
                modèles, ce qui réduit les risques de pannes et les coûts de maintenance.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Impact environnemental réduit</h3>
              <p className="text-gray-600">
                Les systèmes de chauffage modernes sont plus respectueux de l'environnement, avec des émissions de CO2
                réduites et une meilleure efficacité énergétique.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Valorisation du bien immobilier</h3>
              <p className="text-gray-600">
                Un système de chauffage moderne et efficace augmente la valeur de votre bien immobilier et améliore son
                diagnostic de performance énergétique.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Aides et primes</h3>
              <p className="text-gray-600">
                De nombreuses aides financières et primes sont disponibles pour la rénovation énergétique, ce qui peut
                réduire considérablement le coût de votre investissement.
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
              Réponses aux questions les plus courantes sur la rénovation de chauffage
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Quel système de chauffage choisir pour ma maison ?</h3>
              <p className="mt-2 text-gray-600">
                Le choix du système de chauffage dépend de plusieurs facteurs : la taille et l'isolation de votre
                habitation, vos besoins en chauffage, votre budget et vos préférences en matière d'énergie. Nos
                techniciens peuvent vous conseiller sur la solution la plus adaptée à votre situation lors d'une visite
                technique.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Combien coûte le remplacement d'une chaudière ?</h3>
              <p className="mt-2 text-gray-600">
                Le coût de remplacement d'une chaudière varie en fonction du type de chaudière, de sa puissance et des
                travaux annexes nécessaires. En général, il faut compter entre 3000€ et 8000€ pour une chaudière à
                condensation, installation comprise. Nous vous proposons un devis détaillé et gratuit après une visite
                technique.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Combien de temps dure l'installation d'un nouveau système de chauffage ?
              </h3>
              <p className="mt-2 text-gray-600">
                La durée d'installation dépend du type de système et de la complexité des travaux. Le remplacement d'une
                chaudière peut prendre 1 à 2 jours, tandis que l'installation d'un système de chauffage au sol peut
                nécessiter plusieurs jours. Nous vous communiquons un planning précis avant le début des travaux.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Existe-t-il des aides financières pour la rénovation du chauffage ?
              </h3>
              <p className="mt-2 text-gray-600">
                Oui, plusieurs aides financières sont disponibles pour la rénovation énergétique, comme les primes
                énergie, les réductions d'impôts ou les prêts à taux zéro. Ces aides varient selon votre situation et le
                type de travaux. Nous pouvons vous informer sur les aides auxquelles vous pourriez avoir droit.
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
