"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import ServiceSchema from "@/components/service-schema"

const services = [
  {
    title: "Débouchage WC et Éviers",
    description: "Débouchage rapide et efficace de vos WC, éviers et autres installations sanitaires bouchées.",
    link: "/services/debouchage/wc-eviers",
  },
  {
    title: "Débouchage Canalisations",
    description:
      "Débouchage professionnel de toutes canalisations extérieures et intérieures avec équipement spécialisé.",
    link: "/services/debouchage/canalisations",
  },
  {
    title: "Inspection Caméra",
    description:
      "Inspection vidéo des canalisations pour identifier avec précision la cause et l'emplacement des problèmes.",
    link: "/services/debouchage/inspection-camera",
  },
]

export default function DebouchageClientPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 bg-[#111827] text-white">
        {/* Message promotionnel en haut à droite */}
        <div className="absolute right-4 top-4 z-10 rounded-md bg-yellow-100 p-2 text-center text-xs font-medium text-gray-900 shadow-md md:right-8 md:top-6 md:text-sm md:p-3">
          Prix mini, Service rapide : <span className="text-red-600 font-bold">10%</span> de réduction en plus
          aujourd'hui seulement.
        </div>
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Colonne de texte */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Services de Débouchage Professionnels</h1>
              <p className="mt-6 text-sm text-gray-300">
                Solutions rapides et efficaces pour tous vos problèmes de canalisations bouchées. Intervention en moins
                de 45 minutes, disponible 24h/24 et 7j/7.
              </p>

              {/* Texte incitatif avant le bouton d'appel */}
              <div className="mt-6 rounded bg-red-600 p-3 text-white shadow-md">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-xs leading-tight">
                    <h3 className="text-sm font-bold leading-tight">Urgence canalisation bouchée ?</h3>
                    <p className="mt-0.5">
                      <span className="block font-bold mt-0.5">
                        Appelez maintenant pour une intervention en 45 minutes ou moins.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center md:items-start gap-4 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold border border-yellow-600 shadow-sm"
                  onClick={() => {
                    if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
                      return window.gtag_report_conversion("tel:+32493415283")
                    }
                  }}
                >
                  <Link href="tel:+32493415283">Appeler aujourd'hui</Link>
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

            {/* Colonne d'image */}
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/debouchage-toilette-ventouse.jpg"
                alt="Dépannage sanitaires et débouchage professionnel"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Nos Services de Débouchage</h2>
            <p className="mt-4 text-xl text-gray-600">
              Solutions professionnelles pour tous types de canalisations bouchées
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h3 className="mb-3 text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href={service.link}>En savoir plus</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Pourquoi Choisir Notre Service de Débouchage
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Des solutions rapides, efficaces et durables pour tous vos problèmes de canalisations
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Intervention Rapide</h3>
              <p className="text-gray-600">
                Nos techniciens interviennent en moins de 45 minutes pour résoudre rapidement vos problèmes de
                canalisations bouchées.
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
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Équipement Spécialisé</h3>
              <p className="text-gray-600">
                Nous utilisons des équipements professionnels de pointe pour déboucher efficacement tous types de
                canalisations.
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Garantie de Satisfaction</h3>
              <p className="text-gray-600">
                Nous garantissons un service de qualité et des solutions durables pour tous vos problèmes de
                canalisations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Keywords Section - AJOUTÉ */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services de Débouchage Complets</h2>
            <p className="mt-4 text-gray-600">
              Nous proposons une gamme complète de services de débouchage pour répondre à tous vos besoins
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Débouchage curatif canalisation",
              "Débouchage préventif canalisation",
              "Débouchage domestique",
              "Débouchage industriel",
              "Débouchage canalisation Bruxelles",
              "Débouchage haute pression",
              "Nettoyage haute pression canalisation",
              "Entretien canalisation",
              "Inspection vidéo des égouts",
              "Vidange fosse septique",
              "Réparation de canalisation",
              "Débouchage évier",
              "Débouchage égouts",
              "Débouchage cuisine",
              "Débouchage salle de bain",
              "Débouchage WC",
              "Débouchage douche",
              "Débouchage baignoire",
              "Débouchage tuyaux",
              "Débouchage canalisation bouchée",
              "Débouchage urgent 24/7",
              "Débouchage siphon",
              "Débouchage fosse septique",
              "Débouchage citerne d'eau de pluie",
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center text-gray-700 shadow-sm"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Clients Section - AJOUTÉ */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Solutions pour Tous Types de Clients</h2>
            <p className="mt-4 text-gray-600">
              Nos services de débouchage s'adaptent à tous les secteurs et types de bâtiments
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-5 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-blue-600">Résidentiel</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Maisons individuelles</li>
                <li>• Appartements</li>
                <li>• Immeubles résidentiels</li>
                <li>• Copropriétés</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-blue-600">Commercial</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Restaurants</li>
                <li>• Hôtels</li>
                <li>• Bureaux</li>
                <li>• Centres commerciaux</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-blue-600">Industriel</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Usines</li>
                <li>• Entrepôts</li>
                <li>• Bâtiments industriels</li>
                <li>• Stations de pompage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

      {/* Schema.org markup */}
      <ServiceSchema
        name="Services de Débouchage de Canalisations"
        description="Services professionnels de débouchage de canalisations, WC, éviers et douches. Intervention rapide 24/7, équipement spécialisé et garantie de satisfaction."
        url="https://www.debouchage-plomberie-service24.be/services/debouchage"
        image="/images/debouchage-canalisations-hero.png"
      />
    </div>
  )
}
