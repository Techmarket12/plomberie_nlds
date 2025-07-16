import { Check, Clock, Shield, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"
import type { Metadata } from "next"
import CallToAction from "@/components/call-to-action"
import ServiceArea from "@/components/service-area"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Débouchage Plomberie Service 24 | Intervention en 45 minutes",
  description:
    "Service professionnel de débouchage et plomberie à Namur. Intervention en moins de 45 minutes, garantie 12 mois, disponible 24h/24 et 7j/7.",
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#111827] text-white">
        <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-white">DÉBOUCHAGE PLOMBERIE</span>
                <span className="block text-blue-400">SERVICE 24</span>
              </h1>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-400" />
                  <p className="text-lg">Intervention en moins de 45 minutes</p>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <p className="text-lg">Une garantie de 12 mois</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <p className="text-lg">Disponible 24H/24 et 7J/7</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
                  <Link href="tel:+32493415283">Appeler Maintenant</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-blue-400 bg-white text-[#111827] hover:bg-blue-50"
                >
                  <Link href="/contact">Demander un Devis</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXiw6Hsuq4r4cEVW9efbiVRhjqYdEE.png"
                  alt="Plombier professionnel réparant un évier"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner - CODE AGRANDI, RESTE RÉTRÉCI */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-blue-800 p-6 shadow-lg sm:flex-row">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="mb-1 text-center text-xl font-bold sm:text-left sm:text-2xl">
                -15% sur votre première intervention !
              </h3>
              <p className="text-center text-sm text-blue-100 sm:text-left mb-2">
                Offre valable pour toute nouvelle demande jusqu'au 30 juin
              </p>
              <div className="inline-block animate-pulse rounded-lg bg-yellow-400 px-6 py-3 text-4xl font-extrabold tracking-wider text-blue-900 shadow-lg sm:text-5xl md:text-6xl">
                PLOMB15
              </div>
              <div className="mt-3 flex items-center gap-2 bg-blue-700 p-2 rounded-md">
                <Tag className="h-5 w-5 text-yellow-300" />
                <p className="text-sm text-yellow-300 font-medium">
                  Mentionnez ce code lors de votre appel ou dans le formulaire pour bénéficier de la remise
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-yellow-500 text-sm font-bold text-blue-900 hover:bg-yellow-400 w-full sm:w-auto min-w-[180px]"
              >
                <Link href="tel:+32493415283">Appeler maintenant</Link>
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
      <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Nos Services Professionnels</h2>
      <p className="mt-4 text-xl text-gray-600">
        Solutions complètes pour tous vos besoins en plomberie et débouchage
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
              alt="Service de débouchage de canalisations"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">Débouchage</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            Débouchage rapide et efficace de toutes canalisations, WC, éviers et douches. Intervention d'urgence en moins de 45 minutes.
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
              alt="Service de dépannage plomberie"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">Dépannage Plomberie</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            Réparation de fuites, robinets, chasses d'eau et tous problèmes de plomberie. Service rapide et professionnel.
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
              alt="Service d'urgence 24h/24"
              fill
              className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">Urgence 24h/24</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            Service d'intervention disponible 24h/24 et 7j/7 pour tous vos problèmes urgents de plomberie et débouchage.
          </p>
          <Button asChild className="mt-4 w-full bg-red-600 hover:bg-red-700">
            <Link href="tel:+32493415283">Appeler Maintenant</Link>
          </Button>
        </div>
      </div>

      {/* Carte 4 */}
      <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
        <div className="relative h-56 overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src="/images/services/renovation_plomberie.webp"
              alt="Service de rénovation plomberie"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">Rénovation</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            Installation et remplacement de sanitaires, tuyauterie et systèmes de chauffage. Solutions sur mesure pour votre confort.
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
              alt="Service de détection de fuites"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">Détection de Fuites</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            Localisation précise des fuites visibles et cachées. Technologie avancée pour un diagnostic sans dégâts.
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
              alt="Service d'entretien préventif"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">Entretien Préventif</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            Maintenance régulière de vos installations pour prévenir les pannes et prolonger leur durée de vie. Contrats d'entretien personnalisés.
          </p>
          <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/services/plomberie/entretien">En savoir plus</Link>
          </Button>
        </div>
      </div>

    </div> {/* Fin de la grille */}
  </div>
</section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Pourquoi Nous Choisir</h2>
            <p className="mt-4 text-xl text-gray-600">
              Votre partenaire de confiance pour tous vos besoins en plomberie
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Rapidité</h3>
              <p className="text-gray-600">
                Intervention garantie en moins de 45 minutes pour résoudre rapidement vos urgences.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Garantie</h3>
              <p className="text-gray-600">Tous nos travaux sont garantis 12 mois pour votre tranquillité d'esprit.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Expertise</h3>
              <p className="text-gray-600">
                Techniciens qualifiés et expérimentés pour des solutions durables et efficaces.
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Prix Transparent</h3>
              <p className="text-gray-600">
                Devis gratuit et tarifs clairs sans surprise, avec des solutions adaptées à votre budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Ce Que Disent Nos Clients</h2>
            <p className="mt-4 text-xl text-gray-600">La satisfaction de nos clients est notre priorité absolue</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Laurent Dupont"
              location="Namur"
              rating={5}
              testimonial="Intervention rapide et efficace pour une fuite d'eau urgente. Le technicien était professionnel et a tout expliqué clairement. Je recommande vivement !"
            />
            <TestimonialCard
              name="Marie Lefevre"
              location="Jambes"
              rating={5}
              testimonial="J'ai fait appel à eux pour un débouchage de canalisation. Service impeccable, arrivée en moins de 30 minutes et problème résolu rapidement. Très satisfaite !"
            />
            <TestimonialCard
              name="Thomas Bernard"
              location="Wépion"
              rating={5}
              testimonial="Excellente entreprise pour la rénovation de ma salle de bain. Travail soigné, respect des délais et équipe très professionnelle. Je les recommande sans hésitation."
            />
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
