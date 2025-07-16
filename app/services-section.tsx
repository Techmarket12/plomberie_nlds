"use client"

import Link from "next/link"
import Image from "next/image"

export default function ServicesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Nos Services Professionnels</h2>
          <p className="mt-4 text-xl text-gray-600">
            Solutions complètes pour tous vos besoins en plomberie et débouchage
          </p>
        </div>

        {/* Première rangée de services */}
        <div className="flex flex-wrap -mx-4 mb-8">
          {/* Service 1: Débouchage */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/debouchage_canalisation.webp"
                  alt="Service de débouchage de canalisations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Débouchage</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Débouchage rapide et efficace de toutes canalisations, WC, éviers et douches. Intervention d'urgence
                  en moins de 45 minutes.
                </p>
                <Link
                  href="/services/debouchage"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2: Dépannage Plomberie */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/depannage_plomberie.webp"
                  alt="Service de dépannage plomberie"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Dépannage Plomberie</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Réparation de fuites, robinets, chasses d'eau et tous problèmes de plomberie. Service rapide et
                  professionnel.
                </p>
                <Link
                  href="/services/plomberie/depannage"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3: Urgence 24h/24 */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/urgence_24.webp"
                  alt="Service d'urgence 24h/24"
                  fill
                  className="object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Urgence 24h/24</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Service d'intervention disponible 24h/24 et 7j/7 pour tous vos problèmes urgents de plomberie et
                  débouchage.
                </p>
                <Link
                  href="tel:+32493415283"
                  className="mt-4 inline-block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  Appeler Maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième rangée de services */}
        <div className="flex flex-wrap -mx-4">
          {/* Service 4: Rénovation */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/renovation_plomberie.webp"
                  alt="Service de rénovation plomberie"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Rénovation</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Installation et remplacement de sanitaires, tuyauterie et systèmes de chauffage. Solutions sur mesure
                  pour votre confort.
                </p>
                <Link
                  href="/services/plomberie/renovation"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

          {/* Service 5: Détection de Fuites */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/detection_fuites.webp"
                  alt="Service de détection de fuites"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Détection de Fuites</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Localisation précise des fuites visibles et cachées. Technologie avancée pour un diagnostic sans
                  dégâts.
                </p>
                <Link
                  href="/services/plomberie/depannage-fuites"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

          {/* Service 6: Entretien Préventif */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/entretien_preventif.webp"
                  alt="Service d'entretien préventif"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Entretien Préventif</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Maintenance régulière de vos installations pour prévenir les pannes et prolonger leur durée de vie.
                  Contrats d'entretien personnalisés.
                </p>
                <Link
                  href="/services/plomberie/entretien"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
