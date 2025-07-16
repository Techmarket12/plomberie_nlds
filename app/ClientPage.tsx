"use client"

import { Check, Clock, Shield, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"
import CallToAction from "@/components/call-to-action"
import ServiceArea from "@/components/service-area"
import Image from "next/image"
import { useEffect, useState } from "react"

// Composant pour l'image alternante
function AlternatingImage() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["/images/services/debouchage_canalisation.webp", "/images/services/debouchage_toilette.webp"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-56 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={index === 0 ? "Ontstoppingsdienst riolering" : "Ontstoppingsdienst toiletten"} // Traduction des alt texts
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-xl font-bold text-white">Ontstopping</h3> {/* Traduction */}
      </div>
    </div>
  )
}

export default function ClientPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#111827] text-white">
        <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-white">ONTSTOPPINGS- & LOODGIETERSDIENST</span> {/* Traduction */}
                <span className="block text-blue-400">SERVICE 24</span>
              </h1>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-blue-400" />
                  <p className="text-lg">Interventie binnen 45 minuten</p> {/* Traduction */}
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <p className="text-lg">12 maanden garantie</p> {/* Traduction */}
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <p className="text-lg">Beschikbaar 24/7</p> {/* Traduction */}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
                  <Link href="tel:+32493415283">Nu bellen</Link> {/* Traduction */}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-blue-400 bg-white text-[#111827] hover:bg-blue-50"
                >
                  <Link href="/contact">Offerte aanvragen</Link> {/* Traduction */}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXiw6Hsuq4r4cEVW9efbiVRhjqYdEE.png"
                  alt="Professionele loodgieter die een gootsteen repareert" // Traduction de l'alt text
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
                -15% op uw eerste interventie!
              </h3> {/* Traduction */}
              <p className="text-center text-sm text-blue-100 sm:text-left mb-2">
                Aanbieding geldig voor elke nieuwe aanvraag tot 30 juni
              </p> {/* Traduction */}
              <div className="inline-block animate-pulse rounded-lg bg-yellow-400 px-6 py-3 text-4xl font-extrabold tracking-wider text-blue-900 shadow-lg sm:text-5xl md:text-6xl">
                PLOMB15
              </div>
              <div className="mt-3 flex items-center gap-2 bg-blue-700 p-2 rounded-md">
                <Tag className="h-5 w-5 text-yellow-300" />
                <p className="text-sm text-yellow-300 font-medium">
                  Vermeld deze code bij uw oproep of in het formulier om van de korting te profiteren
                </p> {/* Traduction */}
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-yellow-500 text-sm font-bold text-blue-900 hover:bg-yellow-400 w-full sm:w-auto min-w-[180px]"
              >
                <Link href="tel:+32493415283">Nu bellen</Link> {/* Traduction */}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white bg-white text-sm font-bold text-blue-900 hover:bg-blue-50 w-full sm:w-auto min-w-[180px]"
              >
                <Link href="/contact">Gratis offerte</Link> {/* Traduction */}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Onze Professionele Diensten</h2> {/* Traduction */}
            <p className="mt-4 text-xl text-gray-600">
              Complete oplossingen voor al uw loodgieters- en ontstoppingsbehoeften
            </p> {/* Traduction */}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Carte 1: Ontstopping - met afwisselende afbeeldingen */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <AlternatingImage />
              <div className="p-6">
                <p className="text-gray-600">
                  Snelle en effectieve ontstopping van alle leidingen, toiletten, wastafels en douches. Spoedinterventie
                  binnen 45 minuten.
                </p> {/* Traduction */}
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/debouchage">Meer informatie</Link> {/* Traduction */}
                </Button>
              </div>
            </div>

            {/* Carte 2: Loodgieter Depannage */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/depannage_plomberie.webp"
                  alt="Loodgieter nooddienst" // Traduction
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Loodgieter Depannage</h3> {/* Traduction */}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Reparatie van lekken, kranen, stortbakken en alle dringende loodgietersproblemen. Snelle en
                  professionele service.
                </p> {/* Traduction */}
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/depannage">Meer informatie</Link> {/* Traduction */}
                </Button>
              </div>
            </div>

            {/* Carte 3: Renovatie */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/renovation_plomberie.webp"
                  alt="Loodgieter renovatiewerken" // Traduction
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Renovatie</h3> {/* Traduction */}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Installatie en vervanging van sanitair, leidingen en verwarmingssystemen. Oplossingen op maat
                  voor uw comfort.
                </p> {/* Traduction */}
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/renovation">Meer informatie</Link> {/* Traduction */}
                </Button>
              </div>
            </div>

            {/* Carte 4: Lekdetectie */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/detection_fuites.webp"
                  alt="Professionele lekdetectie" // Traduction
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Lekdetectie</h3> {/* Traduction */}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Nauwkeurige lokalisatie van zichtbare en verborgen lekken. Geavanceerde technologie voor een diagnose zonder
                  schade.
                </p> {/* Traduction */}
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/depannage-fuites">Meer informatie</Link> {/* Traduction */}
                </Button>
              </div>
            </div>

            {/* Carte 5: Preventief Onderhoud */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/entretien_preventif.webp"
                  alt="Preventief loodgietersonderhoud" // Traduction
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Preventief Onderhoud</h3> {/* Traduction */}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Regelmatig onderhoud van uw installaties om storingen te voorkomen en hun levensduur te verlengen.
                  Gepersonaliseerde onderhoudscontracten.
                </p> {/* Traduction */}
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/entretien">Meer informatie</Link> {/* Traduction */}
                </Button>
              </div>
            </div>

            {/* Carte 6: Spoeddienst 24/7 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/urgence_24.webp"
                  alt="24/7 loodgieter spoedhulp" // Traduction
                  fill
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Spoeddienst 24/7</h3> {/* Traduction */}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Interventiedienst 24 uur per dag en 7 dagen per week beschikbaar voor al uw dringende loodgieters- en
                  ontstoppingsproblemen.
                </p> {/* Traduction */}
                <Button asChild className="mt-4 w-full bg-red-600 hover:bg-red-700">
                  <Link href="tel:+32493415283">Nu bellen</Link> {/* Traduction */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Zij hebben onze ontstoppingsdiensten vertrouwd
            </h2> {/* Traduction */}
            <p className="mt-3 text-gray-600">
              We werken met de beste merken in de sector om optimale resultaten te garanderen
            </p> {/* Traduction */}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
              <img src="/images/logo-grohe.webp" alt="Logo Grohe" className="h-auto max-h-16 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
              <img src="/images/logo-bulex.webp" alt="Logo Bulex" className="h-auto max-h-16 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
              <img src="/images/logo-geberit.webp" alt="Logo Geberit" className="h-auto max-h-16 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.image.webp-bixXB6HyxhfjHUyLRnZzfRymlRvPJ7.png"
                alt="Logo Villeroy & Boch"
                className="h-auto max-h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ideal_Standard_International.webp-gsSwrIhFlhgnuTQ6vfOnNvmSHJ6CmQ.png"
                alt="Logo Ideal Standard"
                className="h-auto max-h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaillant.webp-Al6LMn6meFDDOiubrRwQIU7mulDONn.png"
                alt="Logo Vaillant"
                className="h-auto max-h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Waarom Kiezen voor Ons</h2> {/* Traduction */}
            <p className="mt-4 text-xl text-gray-600">
              Uw betrouwbare partner voor al uw loodgietersbehoeften
            </p> {/* Traduction */}
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Snelheid</h3> {/* Traduction */}
              <p className="text-gray-600">
                Gegarandeerde interventie binnen 45 minuten om uw noodsituaties snel op te lossen.
              </p> {/* Traduction */}
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Garantie</h3> {/* Traduction */}
              <p className="text-gray-600">Al onze werkzaamheden zijn 12 maanden gegarandeerd voor uw gemoedsrust.</p> {/* Traduction */}
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Expertise</h3> {/* Traduction */}
              <p className="text-gray-600">
                Gekwalificeerde en ervaren technici voor duurzame en effectieve oplossingen.
              </p> {/* Traduction */}
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Transparante Prijs</h3> {/* Traduction */}
              <p className="text-gray-600">
                Gratis offerte en duidelijke tarieven zonder verrassingen, met oplossingen afgestemd op uw budget.
              </p> {/* Traduction */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Wat Onze Klanten Zeggen</h2> {/* Traduction */}
            <p className="mt-4 text-xl text-gray-600">De tevredenheid van onze klanten is onze hoogste prioriteit</p> {/* Traduction */}
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Laurent Dupont"
              location="Namen" // Traduction de Namur
              rating={5}
              testimonial="Snelle en efficiënte interventie voor een urgent waterlek. De technicus was professioneel en legde alles duidelijk uit. Ik raad het ten zeerste aan!" // Traduction
            />
            <TestimonialCard
              name="Marie Lefevre"
              location="Jambes" // Conserver si c'est un nom propre ou traduire si usage courant existe
              rating={5}
              testimonial="Ik heb hen ingeschakeld voor een ontstopping van de riolering. Onberispelijke service, aankomst in minder dan 30 minuten en het probleem was snel opgelost. Zeer tevreden!" // Traduction
            />
            <TestimonialCard
              name="Thomas Bernard"
              location="Wépion" // Conserver si c'est un nom propre ou traduire si usage courant existe
              rating={5}
              testimonial="Uitstekend bedrijf voor de renovatie van mijn badkamer. Netjes werk, respect voor deadlines en een zeer professioneel team. Ik beveel hen zonder aarzeling aan." // Traduction
            />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <ServiceArea /> {/* Assuming ServiceArea component already handles NL content or is passed props for translation */}

      {/* Call to Action */}
      <CallToAction /> {/* Assuming CallToAction component already handles NL content or is passed props for translation */}
    </div>
  )
}
