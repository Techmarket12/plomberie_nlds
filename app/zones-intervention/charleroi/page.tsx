import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Plomberie et Débouchage Charleroi | Service 24h/24 et 7j/7",
  description:
    "Services professionnels de plomberie et débouchage à Charleroi et ses communes environnantes. Intervention rapide en 45 minutes, disponible 24h/24 et 7j/7. Devis gratuit.",
  keywords:
    "plombier Charleroi, plomberie Charleroi, débouchage Charleroi, débouchage canalisation Charleroi, débouchage WC Charleroi, débouchage évier Charleroi, réparation fuite Charleroi, installation sanitaire Charleroi, rénovation salle de bain Charleroi, dépannage plomberie Charleroi, plombier Gosselies, plombier Marcinelle, débouchage Montignies-sur-Sambre, plombier Jumet, débouchage Couvin, urgence plomberie Charleroi",
}

export default function CharleroiPage() {
  // Liste des communes de Charleroi et alentours
  const communes = [
    "Philippeville",
    "Momignies",
    "Chimay",
    "Couvin",
    "Viroinval",
    "Sambreville",
    "Gosselies",
    "Goutroux",
    "Jumet",
    "Lodelinsart",
    "Marchienne-au-Pont",
    "Marcinelle",
    "Monceau-sur-Sambre",
    "Montignies-sur-Sambre",
    "Mont-sur-Marchienne",
    "Ransart",
    "Roux",
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Plomberie et Débouchage à Charleroi et ses alentours
              </h1>
              <p className="text-xl mb-6">Service professionnel disponible 24h/24 et 7j/7</p>
              <p className="mb-8">
                Intervention rapide en moins de 45 minutes sur Charleroi et toutes les communes environnantes. Nos
                techniciens expérimentés résolvent tous vos problèmes de plomberie et canalisations bouchées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+32493415283"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </a>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/debouchage-canalisation.png"
                alt="Plomberie et débouchage à Charleroi"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services de Plomberie Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services de plomberie à Charleroi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Dépannage plomberie</h3>
              <p>
                Fuite d'eau, problème de robinet ou panne de chauffe-eau ? Notre équipe intervient rapidement pour tous
                vos dépannages de plomberie à Charleroi et ses environs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Réparation de fuites</h3>
              <p>
                Nos plombiers détectent et réparent efficacement toutes les fuites d'eau, même les plus difficiles à
                localiser, pour éviter les dégâts des eaux et les factures excessives.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Installation sanitaire</h3>
              <p>
                Installation de lavabos, douches, baignoires, WC et autres équipements sanitaires par des professionnels
                qualifiés pour garantir fiabilité et durabilité.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Rénovation salle de bain</h3>
              <p>
                Transformation complète de votre salle de bain, du conseil à la réalisation. Nous nous occupons de la
                plomberie, des revêtements et des installations sanitaires.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Remplacement chauffe-eau</h3>
              <p>
                Installation et remplacement de chauffe-eau électriques, au gaz ou thermodynamiques par des
                professionnels certifiés pour une eau chaude en toute sécurité.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Entretien plomberie</h3>
              <p>
                Services d'entretien préventif pour éviter les pannes et prolonger la durée de vie de vos installations
                de plomberie. Contrats d'entretien disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services de Débouchage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services de débouchage à Charleroi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Débouchage WC</h3>
              <p>
                Toilettes bouchées? Nos techniciens interviennent rapidement avec l'équipement adapté pour résoudre le
                problème sans endommager vos installations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Débouchage évier et lavabo</h3>
              <p>
                Éviers et lavabos qui se vident lentement? Nous éliminons les bouchons et résidus pour retrouver un
                écoulement parfait.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Débouchage baignoire et douche</h3>
              <p>
                Eau stagnante dans votre douche ou baignoire? Nos solutions de débouchage éliminent efficacement les
                accumulations de cheveux et savon.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Débouchage canalisation extérieure</h3>
              <p>
                Canalisations extérieures obstruées? Notre équipement haute pression vient à bout des racines et autres
                obstacles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Curage et hydrocurage</h3>
              <p>
                Nettoyage préventif ou curatif de vos canalisations par hydrocurage haute pression pour éliminer tous
                les dépôts et garantir un écoulement optimal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Inspection caméra</h3>
              <p>
                Localisation précise des problèmes grâce à notre caméra d'inspection qui explore vos canalisations et
                identifie l'origine des obstructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos zones d'intervention à Charleroi et alentours</h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Nous intervenons dans toute la région de Charleroi pour vos problèmes de plomberie et débouchage. Notre
            équipe se déplace rapidement dans Charleroi et toutes les communes environnantes.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Communes desservies :</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {communes.map((commune) => (
                <div key={commune} className="bg-gray-100 px-3 py-2 rounded">
                  {commune}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir nos services de plomberie et débouchage à Charleroi ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Intervention rapide</h3>
              <p>Nous intervenons en moins de 45 minutes sur Charleroi et ses environs, 24h/24 et 7j/7.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Garantie 12 mois</h3>
              <p>Tous nos travaux de plomberie et débouchage sont garantis pendant 12 mois.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Tarifs transparents</h3>
              <p>Devis gratuit et prix fixe sans surprise après diagnostic pour tous nos services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un plombier ou d'un débouchage en urgence à Charleroi ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Notre équipe de plombiers professionnels est disponible 24h/24 et 7j/7 pour tous vos problèmes de plomberie
            et canalisations bouchées à Charleroi et dans toute la région.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+32493415283"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              +32 493 41 52 83
            </a>
            <Link
              href="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions fréquentes sur nos services de plomberie et débouchage à Charleroi
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Quel est le délai d'intervention pour un plombier ou un débouchage à Charleroi ?
              </h3>
              <p>
                Nous intervenons en moins de 45 minutes sur Charleroi et toutes les communes environnantes. Notre
                service d'urgence est disponible 24h/24 et 7j/7 pour tous types de problèmes de plomberie et débouchage.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Quels types de problèmes de plomberie pouvez-vous résoudre ?</h3>
              <p>
                Nous intervenons pour tous types de problèmes : fuites d'eau, robinets qui gouttent, chasse d'eau
                défectueuse, remplacement de sanitaires, installation de douche ou baignoire, rénovation complète de
                salle de bain, et bien plus encore.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Combien coûte une intervention de plomberie ou débouchage ?</h3>
              <p>
                Le prix dépend de la nature et de la complexité du problème. Nous établissons un devis gratuit après
                diagnostic. Nos tarifs sont transparents et sans surprise, avec des forfaits clairs pour les
                interventions courantes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Intervenez-vous aussi pour les entreprises et commerces à Charleroi ?
              </h3>
              <p>
                Oui, nous proposons des services de plomberie et débouchage pour les particuliers, les entreprises, les
                commerces et les collectivités sur Charleroi et toute la région. Nous offrons également des contrats
                d'entretien adaptés aux besoins professionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Plomberie et débouchage à Charleroi - Services professionnels</h2>
            <div className="prose max-w-none">
              <p>
                Notre entreprise de <strong>plomberie et débouchage à Charleroi</strong> intervient rapidement pour
                résoudre tous vos problèmes. Que vous soyez confronté à une <strong>fuite d'eau à Charleroi</strong>, un{" "}
                <strong>WC bouché à Gosselies</strong>, une <strong>panne de chauffe-eau à Marcinelle</strong> ou des{" "}
                <strong>canalisations bouchées à Montignies-sur-Sambre</strong>, notre équipe de professionnels dispose
                de l'expertise et du matériel nécessaires pour intervenir efficacement.
              </p>
              <p>
                Nous proposons un <strong>service de plomberie et débouchage 24h/24 et 7j/7</strong> sur toute la région
                de Charleroi. Nos <strong>plombiers qualifiés</strong> et notre <strong>camion hydrocureur</strong>{" "}
                peuvent se déplacer rapidement à Charleroi, Gosselies, Marcinelle, Jumet et toutes les communes
                environnantes pour réaliser tous types de <strong>travaux de plomberie et débouchage</strong>.
              </p>
              <p>
                Notre entreprise est spécialisée dans l'<strong>installation et réparation sanitaire</strong>, la{" "}
                <strong>rénovation de salle de bain</strong>, le{" "}
                <strong>débouchage de canalisations à haute pression</strong>, l'
                <strong>inspection par caméra</strong>, le <strong>curage d'égouts</strong> et la{" "}
                <strong>détection de fuites</strong> à Charleroi et dans toute la région. Nous intervenons aussi bien
                pour les particuliers que pour les professionnels.
              </p>
              <p>
                Pour un <strong>plombier pas cher à Charleroi</strong>, un{" "}
                <strong>débouchage de canalisation en urgence</strong> ou une{" "}
                <strong>rénovation complète de votre salle de bain</strong>, n'hésitez pas à nous contacter. Nous vous
                proposons un devis gratuit et des tarifs transparents pour tous vos travaux de plomberie et débouchage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
