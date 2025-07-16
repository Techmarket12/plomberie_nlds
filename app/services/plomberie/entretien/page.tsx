import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceList from "@/components/service-list"
import CallToAction from "@/components/call-to-action"
import { Check, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Services d'Entretien Plomberie | Maintenance Préventive",
  description:
    "Services professionnels d'entretien plomberie à Namur. Maintenance préventive de vos installations pour éviter les pannes et prolonger leur durée de vie.",
}

export default function EntretienPlomberie() {
  const services = [
    "Entretien boiler",
    "Entretien chauffe eau",
    "Netoyage calcaire tuyauterie",
    "Entretien Pompe à eau",
    "Entretien adoucisseur",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white py-20">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Services d'Entretien</span>
              <span className="block text-blue-400">Plomberie</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Maintenance préventive pour prolonger la durée de vie de vos installations
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
              <h2 className="text-3xl font-bold text-gray-800">Services d'Entretien Plomberie Professionnels</h2>
              <p className="mt-4 text-lg text-gray-600">
                L'entretien régulier de vos installations de plomberie est essentiel pour prévenir les pannes et
                prolonger leur durée de vie. Notre équipe de techniciens qualifiés propose des services d'entretien
                complets pour tous vos équipements.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Nous recommandons un entretien annuel de vos installations pour garantir leur bon fonctionnement et
                éviter les réparations coûteuses. Nos contrats d'entretien vous offrent une tranquillité d'esprit
                totale.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Entretien préventif de vos équipements</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Détection précoce des problèmes potentiels</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Prolongation de la durée de vie de vos installations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Économies d'énergie et d'eau</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-500" />
                  <p className="text-lg text-gray-700">Contrats d'entretien personnalisés</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/images/entretien-plomberie.png"
                alt="Entretien d'installations de plomberie"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Maintenance Préventive</h3>
                <p className="mt-2 text-gray-200">
                  Un entretien régulier permet d'éviter les pannes et de prolonger la durée de vie de vos équipements.
                </p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/contact">
                    <Settings className="mr-2 h-4 w-4" />
                    Demander un contrat d'entretien
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
            <h2 className="text-3xl font-bold text-gray-800">Nos Services d'Entretien</h2>
            <p className="mt-4 text-xl text-gray-600">Maintenance préventive pour tous vos équipements de plomberie</p>
          </div>
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Avantages de l'Entretien Régulier</h2>
            <p className="mt-4 text-xl text-gray-600">
              Pourquoi l'entretien préventif est essentiel pour vos installations
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Économies financières</h3>
              <p className="text-gray-600">
                Prévenir les pannes coûteuses et prolonger la durée de vie de vos équipements vous permet de réaliser
                des économies significatives à long terme.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Efficacité énergétique</h3>
              <p className="text-gray-600">
                Des équipements bien entretenus consomment moins d'énergie, ce qui réduit votre empreinte écologique et
                vos factures d'électricité.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Fiabilité accrue</h3>
              <p className="text-gray-600">
                Un entretien régulier garantit le bon fonctionnement de vos installations et réduit les risques de
                pannes inattendues.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Qualité de l'eau</h3>
              <p className="text-gray-600">
                L'entretien des systèmes de filtration et des adoucisseurs garantit une eau de qualité pour votre foyer.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Sécurité</h3>
              <p className="text-gray-600">
                Un entretien régulier permet d'identifier et de corriger les problèmes potentiels avant qu'ils ne
                deviennent dangereux.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Tranquillité d'esprit</h3>
              <p className="text-gray-600">
                Avec un contrat d'entretien, vous n'avez plus à vous soucier de vos installations de plomberie et pouvez
                vous concentrer sur l'essentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Formules d'Entretien</h2>
            <p className="mt-4 text-xl text-gray-600">Des solutions adaptées à vos besoins et à votre budget</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Formule Essentielle</h3>
              <p className="mb-6 text-gray-600">
                Entretien annuel de base pour les installations résidentielles standard.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Entretien annuel du chauffe-eau</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Vérification des robinets et joints</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Inspection des canalisations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Rapport d'entretien détaillé</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
            <div className="rounded-lg bg-blue-50 p-6 shadow-md">
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                Recommandé
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Formule Confort</h3>
              <p className="mb-6 text-gray-600">Solution complète pour l'entretien de toutes vos installations.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Tout ce qui est inclus dans la formule Essentielle</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Entretien de l'adoucisseur d'eau</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Nettoyage des canalisations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Détartrage des équipements</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Remise de 10% sur les réparations</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Formule Premium</h3>
              <p className="mb-6 text-gray-600">La solution tout-en-un pour une tranquillité d'esprit totale.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Tout ce qui est inclus dans la formule Confort</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Deux visites d'entretien par an</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Intervention prioritaire en cas d'urgence</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Remise de 20% sur les réparations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Garantie étendue sur les pièces remplacées</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
