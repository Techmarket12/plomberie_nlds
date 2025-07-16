"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PlomberieClientPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 bg-[#111827] text-white">
        {/* Message promotionnel en haut à droite */}
        <div className="absolute right-4 top-4 z-10 rounded-md bg-yellow-100 p-2 text-center text-xs font-medium text-gray-900 shadow-md md:right-8 md:top-6 md:text-sm md:p-3">
          Prix mini, Service rapide : <span className="text-red-600 font-bold">10%</span> de réduction en plus
          aujourd'hui seulement.
        </div>

        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Texte du hero */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-white">Services de</span>
                <span className="block text-blue-400">Plomberie</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Solutions complètes pour tous vos besoins en plomberie. Dépannage, rénovation et entretien.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link
                    href="tel:+32493415283"
                    onClick={() => {
                      if (typeof window !== "undefined" && window.gtag_report_conversion) {
                        window.gtag_report_conversion("tel:+32493415283")
                      }
                    }}
                  >
                    Appeler aujourd'hui
                  </Link>
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

            {/* Image du hero */}
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/renovation-plomberie.png"
                alt="Services de plomberie professionnels"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Nos Services de Plomberie</h2>
            <p className="mt-4 text-xl text-gray-600">
              Des solutions professionnelles pour tous vos besoins en plomberie
            </p>
          </div>

          {/* Dépannage Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Dépannage Plomberie</h3>
              <p className="mt-2 text-lg text-gray-600">
                Intervention rapide pour tous types de fuites, pannes et problèmes urgents de plomberie.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Dépannage Fuites</h4>
                <p className="mb-4 text-gray-600">
                  Recherche et réparation de tous types de fuites dans votre habitation.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Recherche de fuite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Réparation fuite robinet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Fuite d'eau plafond</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/depannage-fuites">En savoir plus</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Dépannage Sanitaires</h4>
                <p className="mb-4 text-gray-600">
                  Réparation rapide de vos sanitaires : WC, douches, robinets et plus.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Fuite chasse d'eau</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Réparation WC broyeur</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Douche fuite siphon</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/depannage-sanitaires">En savoir plus</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Dépannage Chauffage</h4>
                <p className="mb-4 text-gray-600">
                  Réparation de vos systèmes de chauffage : boilers, chauffe-eau et chaudières.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Réparation boiler</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Réparation boiler fuite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Réparation chauffe-eau</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/depannage-chauffage">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Rénovation Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Rénovation Plomberie</h3>
              <p className="mt-2 text-lg text-gray-600">
                Installation et remplacement de sanitaires, tuyauterie et systèmes de chauffage.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Rénovation Sanitaires</h4>
                <p className="mb-4 text-gray-600">
                  Installation et remplacement de tous types de sanitaires pour votre salle de bain et cuisine.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Remplacement douche</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Remplacement WC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Remplacement lavabo</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/renovation-sanitaires">En savoir plus</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Rénovation Chauffage</h4>
                <p className="mb-4 text-gray-600">
                  Installation et remplacement de systèmes de chauffage pour plus d'efficacité énergétique.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Remplacement boiler</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Remplacement chauffe-eau</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Remplacement chaudière</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/renovation-chauffage">En savoir plus</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Rénovation Canalisations</h4>
                <p className="mb-4 text-gray-600">
                  Remplacement et installation de canalisations et systèmes de filtration d'eau.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Remplacement canalisation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Installation système filtration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Installation adoucisseur</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/renovation-canalisations">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Entretien Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Entretien Plomberie</h3>
              <p className="mt-2 text-lg text-gray-600">
                Maintenance préventive de vos installations pour éviter les pannes et prolonger leur durée de vie.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Entretien Sanitaires</h4>
                <p className="mb-4 text-gray-600">
                  Maintenance régulière de vos sanitaires pour prévenir les fuites et dysfonctionnements.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Entretien robinetterie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Entretien WC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Entretien douche</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/entretien-sanitaires">En savoir plus</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Entretien Chauffage</h4>
                <p className="mb-4 text-gray-600">
                  Maintenance de vos systèmes de chauffage pour une performance optimale et économies d'énergie.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Entretien boiler</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Entretien chauffe-eau</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Entretien chaudière</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/entretien-chauffage">En savoir plus</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                <h4 className="mb-3 text-xl font-bold text-gray-800">Entretien Canalisations</h4>
                <p className="mb-4 text-gray-600">
                  Nettoyage et maintenance de vos canalisations pour prévenir les bouchons et obstructions.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Nettoyage canalisation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Entretien système filtration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Entretien adoucisseur</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/services/plomberie/entretien-canalisations">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Besoin d'un service de plomberie professionnel ?
            </h2>
            <p className="mt-4 text-xl text-white">Contactez-nous dès maintenant pour un service rapide et fiable.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link
                  href="tel:+32493415283"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag_report_conversion) {
                      window.gtag_report_conversion("tel:+32493415283")
                    }
                  }}
                >
                  Appeler aujourd'hui
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Demander un Devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
