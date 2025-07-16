import { Check, Clock, Shield, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import CallToAction from "@/components/call-to-action"
import ServiceArea from "@/components/service-area"
import Image from "next/image"
import GoogleReviewsSection from "@/components/google-reviews-section"

export const metadata: Metadata = {
  title: "Aqua&Deb - Loodgieter Ontstopper Spoeddienst 24/7 | Spoedinterventie 45 Minuten",
  description:
    "Aqua&Deb - Professionele loodgieters- en ontstoppingsdienst 24/7. Snelle interventie binnen 45 minuten, noodreparaties waterlekken, ontstoppen van afvoeren, toiletten, wastafels. Gratis vrijblijvende offerte, 12 maanden garantie. Particulieren en bedrijven Wallonië & Brussel.",
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
          <span className="block text-blue-400">LOODGIETER ONTSTOPPER</span>
          <span className="block text-blue-400 text-3xl sm:text-4xl">SPOEDDIENST 24/7</span>
        </h1>

        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Check className="h-6 w-6 text-blue-400" />
            <p className="text-lg">Spoedinterventie Binnen 45 Minuten</p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Shield className="h-6 w-6 text-blue-400" />
            <p className="text-lg">Interventie 12 Maanden Garantie</p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Clock className="h-6 w-6 text-blue-400" />
            <p className="text-lg">Professionele Service 24/7</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
          <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="tel:+32493415283">Bel Nu</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-blue-400 bg-white text-[#111827] hover:bg-blue-50"
          >
            <Link href="/contact">Gratis Vrijblijvende Offerte</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXiw6Hsuq4r4cEVW9efbiVRhjqYdEE.png"
            alt="Aqua&Deb - Professionele loodgieter spoedinterventie 24/7"
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
                -15% op uw eerste interventie!
              </h3>
              <p className="text-center text-sm text-blue-100 sm:text-left mb-2">
                Aanbieding geldig voor elke nieuwe aanvraag - Gratis vrijblijvende offerte
              </p>
              <div className="inline-block animate-pulse rounded-lg bg-yellow-400 px-6 py-3 text-4xl font-extrabold tracking-wider text-blue-900 shadow-lg sm:text-5xl md:text-6xl">
                AQUA15
              </div>
              <div className="mt-3 flex items-center gap-2 bg-blue-700 p-2 rounded-md">
                <Tag className="h-5 w-5 text-yellow-300" />
                <p className="text-sm text-yellow-300 font-medium">
                  Vermeld deze code bij uw oproep om van de korting te profiteren
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-yellow-500 text-sm font-bold text-blue-900 hover:bg-yellow-400 w-full sm:w-auto min-w-[180px]"
              >
                <Link href="tel:+32493415283">Bel nu</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white bg-white text-sm font-bold text-blue-900 hover:bg-blue-50 w-full sm:w-auto min-w-[180px]"
              >
                <Link href="/contact">Gratis offerte</Link>
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
              Complete Loodgietersoplossingen - Particulieren en Bedrijven
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Professionele 24/7 service voor al uw loodgieters- en ontstoppingsbehoeften - Wallonië & Brussel
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
                    alt="Professionele ontstoppingsdienst 24/7 - Afvoeren, toiletten, wastafels ontstoppen"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Toiletten en Wastafels Ontstoppen</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Professionele ontstoppingsdienst 24/7. Verstopte afvoer spoed? Snelle interventie binnen 45 minuten voor het ontstoppen van afvoeren, toiletten, wastafels en douches.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/debouchage">Meer informatie</Link>
                </Button>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/depannage_plomberie.webp"
                    alt="Waterlekkage reparatie - Snelle interventie 24/7"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Waterlekkage Reparatie</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Reparatie van waterlekken, kranen, stortbakken en alle dringende loodgietersproblemen. Snelle interventie 24/7 met 12 maanden garantie.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/depannage">Meer informatie</Link>
                </Button>
              </div>
            </div>

            {/* Carte 3 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/urgence_24.webp"
                    alt="Spoedinterventie 45 min - Professionele spoeddienst 24/7"
                    fill
                    className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Spoedinterventie 45 Min</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Professionele spoedinterventie binnen 45 minuten. 24/7 beschikbaar voor al uw loodgieters- en ontstoppingsnoodgevallen.
                </p>
                <Button asChild className="mt-4 w-full bg-red-600 hover:bg-red-700">
                  <Link href="tel:+32493415283">Bel Nu</Link>
                </Button>
              </div>
            </div>

            {/* Carte 4 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/renovation_plomberie.webp"
                    alt="Loodgieter renovatie en onderhoud - Complete oplossingen"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Renovatie en Onderhoud</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Complete loodgietersoplossingen: installatie en vervanging van sanitair, leidingen en verwarmingssystemen. Gratis vrijblijvende offerte.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/renovation">Meer informatie</Link>
                </Button>
              </div>
            </div>

            {/* Carte 5 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/detection_fuites.webp"
                    alt="Camera inspectie - Professionele lekdetectie"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Camera Inspectie</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Camera inspectie en nauwkeurige detectie van zichtbare en verborgen lekken. Geavanceerde technologie voor professionele diagnose zonder schade.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/depannage-fuites">Meer informatie</Link>
                </Button>
              </div>
            </div>

            {/* Carte 6 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/services/entretien_preventif.webp"
                    alt="Sanitair herstel - Preventief loodgietersonderhoud"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Sanitair Herstel</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Sanitair herstel en preventief onderhoud van uw installaties. Gegarandeerde interventies om storingen te voorkomen en de levensduur te verlengen.
                </p>
                <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/plomberie/entretien">Meer informatie</Link>
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
              Onze Realisaties - Gegarandeerde Interventies Aqua&Deb
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Ontdek onze recente interventies met voor/na resultaten - Professionele 24/7 service
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Réalisation 1: Chauffe-eau */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/chauffe-eau-avant-apres.png"
                  alt="Bulex boiler installatie - Gegarandeerde interventie Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Boiler Installatie</h3>
                <p className="text-gray-600 text-sm">
                  Complete vervanging van een defecte boiler door een hoogwaardig Bulex model. 12 maanden garantie op de interventie.
                </p>
              </div>
            </div>

            {/* Réalisation 2: Rénovation WC - Ce bloc est vide dans votre original, je ne le traduis pas */}
            {/* Si vous avez du contenu pour ce bloc, n'hésitez pas à me l'envoyer. */}

            {/* Réalisation 3: Réparation tuyauterie */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/reparation-tuyauterie-avant-apres.png"
                  alt="Waterlekkage reparatie leidingen - Snelle interventie Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Waterlekkage Reparatie</h3>
                <p className="text-gray-600 text-sm">
                  Professionele reparatie van een lek in koperen leidingen. Snelle interventie met gegarandeerde waterdichte koppelingen.
                </p>
              </div>
            </div>

            {/* Réalisation 4: Fuite WC */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/fuite-wc-avant-apres.png"
                  alt="WC lek reparatie - Professionele spoeddienst Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">WC Lek Reparatie</h3>
                <p className="text-gray-600 text-sm">
                  Snelle 24/7 interventie voor het repareren van een groot lek in de WC-spoelbak. Gegarandeerde professionele service.
                </p>
              </div>
            </div>

            {/* Réalisation 5: Fuite siphon */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/fuite-siphon-avant-apres.png"
                  alt="Wastafel sifon lek reparatie - Spoedinterventie Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sifon Reparatie</h3>
                <p className="text-gray-600 text-sm">
                  Vervanging van een defecte sifon onder de wastafel met perfecte waterdichtheid. Spoedinterventie binnen 45 minuten.
                </p>
              </div>
            </div>

            {/* Réalisation 6: Réparation robinet */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/realisations/reparation-robinet-avant-apres.png"
                  alt="Kraan lek reparatie - Complete loodgietersoplossingen Aqua&Deb"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Kraan Reparatie</h3>
                <p className="text-gray-600 text-sm">
                  Reparatie van een kraanlek met vervanging van pakkingen en koppelingen. Gegarandeerde complete loodgietersoplossingen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Elke interventie wordt met zorg en professionaliteit uitgevoerd om duurzame resultaten te garanderen. Professionele 24/7 service.
            </p>
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Gratis Vrijblijvende Offerte</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Waarom Kiezen voor Aqua&Deb - Loodgietersbedrijf
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Professionele service voor particulieren en bedrijven in Wallonië & Brussel
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Spoedinterventie 45 Min</h3>
              <p className="text-gray-600">
                Gegarandeerde snelle interventie binnen 45 minuten om al uw loodgietersnoodgevallen snel op te lossen.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Interventies 12 Maanden Garantie</h3>
              <p className="text-gray-600">
                Al onze interventies zijn 12 maanden gegarandeerd voor uw gemoedsrust en tevredenheid.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Professionele Service</h3>
              <p className="text-gray-600">
                Gekwalificeerde en ervaren technici voor duurzame en effectieve oplossingen. Snelle en gegarandeerde interventies.
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
              <h3 className="mb-3 text-xl font-bold text-gray-800">Gratis Vrijblijvende Offerte</h3>
              <p className="text-gray-600">
                Gratis vrijblijvende offerte en transparante tarieven. Oplossingen afgestemd op uw budget voor particulieren en bedrijven.
              </p>
            </div>
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
