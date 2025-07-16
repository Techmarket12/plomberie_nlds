"use client"

import Link from "next/link"
import Image from "next/image"

export default function ServicesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Onze Professionele Diensten</h2>
          <p className="mt-4 text-xl text-gray-600">
            Complete oplossingen voor al uw loodgieters- en ontstoppingsbehoeften
          </p>
        </div>

        {/* Eerste rij van diensten */}
        <div className="flex flex-wrap -mx-4 mb-8">
          {/* Service 1: Ontstopping */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/debouchage_canalisation.webp"
                  alt="Professionele ontstoppingsdienst riolering"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Ontstopping</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Snelle en effectieve ontstopping van alle leidingen, toiletten, wastafels en douches. Spoedinterventie
                  binnen 45 minuten.
                </p>
                <Link
                  href="/services/debouchage"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2: Loodgieter Depannage */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/depannage_plomberie.webp"
                  alt="Loodgieter nooddienst"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Loodgieter Depannage</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Reparatie van lekken, kranen, stortbakken en alle dringende loodgietersproblemen. Snelle en
                  professionele service.
                </p>
                <Link
                  href="/services/plomberie/depannage"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3: Spoeddienst 24/7 */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/urgence_24.webp"
                  alt="24/7 loodgieter spoedhulp"
                  fill
                  className="object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Spoeddienst 24/7</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Interventiedienst 24 uur per dag en 7 dagen per week beschikbaar voor al uw dringende loodgieters- en
                  ontstoppingsproblemen.
                </p>
                <Link
                  href="tel:+32493415283"
                  className="mt-4 inline-block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  Nu bellen
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tweede rij van diensten */}
        <div className="flex flex-wrap -mx-4">
          {/* Service 4: Renovatie */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/renovation_plomberie.webp"
                  alt="Loodgieter renovatiewerken"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Renovatie</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Installatie en vervanging van sanitair, leidingen en verwarmingssystemen. Oplossingen op maat
                  voor uw comfort.
                </p>
                <Link
                  href="/services/plomberie/renovation"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          </div>

          {/* Service 5: Lekdetectie */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/detection_fuites.webp"
                  alt="Professionele lekdetectie"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Lekdetectie</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Nauwkeurige lokalisatie van zichtbare en verborgen lekken. Geavanceerde technologie voor een diagnose zonder
                  schade.
                </p>
                <Link
                  href="/services/plomberie/depannage-fuites"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          </div>

          {/* Service 6: Preventief Onderhoud */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/services/entretien_preventif.webp"
                  alt="Preventief loodgietersonderhoud"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Preventief Onderhoud</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Regelmatig onderhoud van uw installaties om storingen te voorkomen en hun levensduur te verlengen.
                  Gepersonaliseerde onderhoudscontracten.
                </p>
                <Link
                  href="/services/plomberie/entretien"
                  className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
