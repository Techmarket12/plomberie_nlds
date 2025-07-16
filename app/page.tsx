import { Check, Clock, Shield, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import CallToAction from "@/components/call-to-action"
import ServiceArea from "@/components/service-area"
import Image from "next/image"
import GoogleReviewsSection from "@/components/google-reviews-section"

export const metadata: Metadata = {
  title: "Aqua&Deb - Plombier Déboucheur Urgence 24h/24 | Intervention Express 45 Minutes",
  description:
    "Aqua&Deb - Service professionnel de plomberie et débouchage 24h/24. Intervention rapide en 45 minutes, dépannage fuites d'eau, débouchage canalisations WC éviers. Devis gratuit sans engagement, garantie 12 mois. Particuliers et professionnels Wallonie & Bruxelles.",
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
<section className="relative bg-[#111827] text-white">
  <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-white">AQUA&DEB</span>
          <span className="block text-blue-400">PLOMBIER DÉBOUCHEUR</span>
          <span className="block text-blue-400 text-3xl sm:text-4xl">URGENCE 24H/24</span>
        </h1>

        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Check className="h-6 w-6 text-blue-400" />
            <p className="text-lg">Intervention Express en 45 Minutes</p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Shield className="h-6 w-6 text-blue-400" />
            <p className="text-lg">Intervention Garantie 12 Mois</p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Clock className="h-6 w-6 text-blue-400" />
            <p className="text-lg">Service Professionnel 24H/24 et 7J/7</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
          <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="tel:+32493415283">Appelez Maintenant</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-blue-400 bg-white text-[#111827] hover:bg-blue-50"
          >
            <Link href="/contact">Devis Gratuit Sans Engagement</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXiw6Hsuq4r4cEVW9efbiVRhjqYdEE.png"
            alt="Aqua&Deb - Plombier professionnel intervention urgence 24h/24"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Promo Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-blue-800 p-6 shadow-lg sm:flex-row">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="mb-1 text-center text-xl font-bold sm:text-left sm:text-2xl">
                -15% sur votre première intervention !
              </h3>
              <p className="text-center text-sm text-blue-100 sm:text-left mb-2">
                Offre valable pour toute nouvelle demande - Devis gratuit sans engagement
              </p>
              <div className="inline-block animate-pulse rounded-lg bg-yellow-400 px-6 py-3 text-4xl font-extrabold tracking-wider text-blue-900 shadow-lg sm:text-5xl md:text-6xl">
                AQUA15
              </div>
              <div className="mt-3 flex items-center gap-2 bg-blue-700 p-2 rounded-md">
                <Tag className="h-5 w-5 text-yellow-300" />
                <p className="text-sm text-yellow-300 font-medium">
                  Mentionnez ce code lors de votre appel pour bénéficier de la remise
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-yellow-500 text-sm font-bold text-blue-900 hover:bg-yellow-400 w-full sm:w-auto min-w-[180px]"
              >
                <Link href="tel:+32493415283">Appelez maintenant</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white bg-white text-sm font-bold text-blue-900 hover:bg-blue-50 w-full sm:w-auto min-w-[180px]"
              >
                <Link href="/contact">Devis gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Solutions Complètes de Plomberie - Particuliers et Professionnels
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Service professionnel 24h/24 pour tous vos besoins en plomberie et débouchage - Wallonie & Bruxelles
            </p>
          </div>
          {/* Grille contenant toutes les cartes */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Carte 1 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/debouchage_canalisation.webp"
                    alt="Service débouchage professionnel 24h/24 - Débouchage canalisations WC éviers"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Débouchage WC et Éviers</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Service de débouchage professionnel 24h/24. Urgence canalisation bouchée ? Intervention rapide en 45
                  minutes pour débouchage canalisations, WC, éviers et douches.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/debouchage">En savoir plus</Link>
                </Button>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/depannage_plomberie.webp"
                    alt="Dépannage fuites d'eau - Intervention rapide 24h/24"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Dépannage Fuites d'Eau</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Dépannage fuites d'eau, robinets, chasses d'eau et tous problèmes urgents de plomberie. Intervention
                  rapide 24h/24 avec garantie 12 mois.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/depannage">En savoir plus</Link>
                </Button>
              </div>
            </div>

            {/* Carte 3 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/urgence_24.webp"
                    alt="Intervention express 45 min - Service professionnel urgence 24h/24"
                    fill
                    className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Intervention Express 45 Min</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Service professionnel d'intervention express en 45 minutes. Disponible 24h/24 et 7j/7 pour toutes vos
                  urgences de plomberie et débouchage.
                </p>
                <Button asChild className="mt-4 w-full bg-red-600 hover:bg-red-700">
                  <Link href="tel:+32493415283">Appelez Maintenant</Link>
                </Button>
              </div>
            </div>

            {/* Carte 4 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/renovation_plomberie.webp"
                    alt="Rénovation et entretien plomberie - Solutions complètes"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Rénovation et Entretien</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Solutions complètes de plomberie : installation et remplacement de sanitaires, tuyauterie et systèmes
                  de chauffage. Devis gratuit sans engagement.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/renovation">En savoir plus</Link>
                </Button>
              </div>
            </div>

            {/* Carte 5 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/detection_fuites.webp"
                    alt="Inspection par caméra - Détection fuites professionnelle"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Inspection par Caméra</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Inspection par caméra et détection précise des fuites visibles et cachées. Technologie avancée pour un
                  diagnostic professionnel sans dégâts.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/depannage-fuites">En savoir plus</Link>
                </Button>
              </div>
            </div>

            {/* Carte 6 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/entretien_preventif.webp"
                    alt="Dépannage sanitaires - Entretien préventif plomberie"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Dépannage Sanitaires</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Dépannage sanitaires et maintenance préventive de vos installations. Interventions garanties pour
                  prévenir les pannes et prolonger la durée de vie.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/entretien">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviewsSection />

      {/* Nos Réalisations */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Nos Réalisations - Interventions Garanties Aqua&Deb
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Découvrez nos interventions récentes avec résultats avant/après - Service professionnel 24h/24
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Réalisation 1: Chauffe-eau */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/chauffe-eau-avant-apres.png"
                  alt="Installation chauffe-eau Bulex - Intervention garantie Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Installation Chauffe-eau</h3>
                <p className="text-gray-600 text-sm">
                  Remplacement complet d'un chauffe-eau défaillant par un modèle Bulex haute performance. Intervention
                  garantie 12 mois.
                </p>
              </div>
            </div>

            {/* Réalisation 2: Rénovation WC */}


            {/* Réalisation 3: Réparation tuyauterie */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/reparation-tuyauterie-avant-apres.png"
                  alt="Dépannage fuites d'eau tuyauterie - Intervention rapide Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Dépannage Fuites d'Eau</h3>
                <p className="text-gray-600 text-sm">
                  Réparation professionnelle d'une fuite sur tuyauterie en cuivre. Intervention rapide avec raccords
                  étanches garantis.
                </p>
              </div>
            </div>

            {/* Réalisation 4: Fuite WC */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/fuite-wc-avant-apres.png"
                  alt="Réparation fuite WC - Service professionnel urgence Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Réparation Fuite WC</h3>
                <p className="text-gray-600 text-sm">
                  Intervention rapide 24h/24 pour réparer une fuite importante au niveau du réservoir de WC. Service
                  professionnel garanti.
                </p>
              </div>
            </div>

            {/* Réalisation 5: Fuite siphon */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/fuite-siphon-avant-apres.png"
                  alt="Réparation fuite siphon évier - Intervention express Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Réparation Siphon</h3>
                <p className="text-gray-600 text-sm">
                  Remplacement d'un siphon défaillant sous évier avec étanchéité parfaite. Intervention express en 45
                  minutes.
                </p>
              </div>
            </div>

            {/* Réalisation 6: Réparation robinet */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/reparation-robinet-avant-apres.png"
                  alt="Réparation fuite robinet - Solutions complètes plomberie Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Réparation Robinet</h3>
                <p className="text-gray-600 text-sm">
                  Réparation d'une fuite de robinet avec remplacement des joints et raccords. Solutions complètes de
                  plomberie garanties.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Chaque intervention est réalisée avec soin et professionnalisme pour garantir des résultats durables.
              Service professionnel 24h/24.
            </p>
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Devis Gratuit Sans Engagement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Pourquoi Choisir Aqua&Deb - Entreprise de Plomberie
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Service professionnel pour particuliers et professionnels en Wallonie & Bruxelles
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Intervention Express 45 Min</h3>
              <p className="text-gray-600">
                Intervention rapide garantie en moins de 45 minutes pour résoudre rapidement toutes vos urgences de
                plomberie.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Interventions Garanties 12 Mois</h3>
              <p className="text-gray-600">
                Toutes nos interventions sont garanties 12 mois pour votre tranquillité d'esprit et votre satisfaction.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Service Professionnel</h3>
              <p className="text-gray-600">
                Techniciens qualifiés et expérimentés pour des solutions durables et efficaces. Interventions rapides et
                garanties.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Devis Gratuit Sans Engagement</h3>
              <p className="text-gray-600">
                Devis gratuit sans engagement et tarifs transparents. Solutions adaptées à votre budget pour
                particuliers et professionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <ServiceArea />

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
