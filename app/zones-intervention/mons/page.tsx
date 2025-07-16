import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Plomberie et Débouchage Canalisation Mons | Service 24h/24 et 7j/7",
  description:
    "Service de plomberie et débouchage de canalisations à Mons et ses communes environnantes. Intervention rapide en 45 minutes, disponible 24h/24 et 7j/7. Devis gratuit.",
  keywords:
    "plombier Mons, plomberie Mons, débouchage Mons, débouchage canalisation Mons, débouchage WC Mons, débouchage évier Mons, débouchage baignoire Mons, débouchage douche Mons, débouchage tuyaux Mons, curage canalisation Mons, inspection caméra Mons, débouchage haute pression Mons, débouchage La Louvière, débouchage Binche, débouchage Saint-Ghislain, débouchage Soignies, débouchage Frameries, débouchage urgence Mons",
}

export default function MonsPage() {
  // Liste des communes de Mons et alentours
  const communes = [
    "Flénu",
    "Binche",
    "Braine-le-Comte",
    "Chièvres",
    "Dour",
    "Enghien",
    "La Louvière",
    "Quiévrain",
    "Saint-Ghislain",
    "Soignies",
    "Seneffe",
    "Jurbise",
    "Chappelle-Lez-Herlaimont",
    "Hensies",
    "Morlanwelz",
    "Brugelette",
    "Honnelles",
    "Quévy",
    "Ciply",
    "Cuesmes",
    "Ghlin",
    "Harmignies",
    "Harveng",
    "Havré",
    "Hyon",
    "Le Rœulx",
    "Estinnes",
    "Frameries",
    "Quaregnon",
    "Nimy",
    "Obourg",
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Services de plomberie et débouchage de canalisations à Mons et ses alentours
              </h1>
              <p className="text-xl mb-6">Service professionnel disponible 24h/24 et 7j/7</p>
              <p className="mb-8">
                Intervention rapide en moins de 45 minutes sur Mons et toutes les communes environnantes. Nos
                techniciens expérimentés résolvent tous vos problèmes de plomberie et de canalisations bouchées.
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
                alt="Débouchage canalisation à Mons"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services de débouchage à Mons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Débouchage WC</h3>
              <p>
                Toilettes bouchées? Nos techniciens interviennent rapidement avec l'équipement adapté pour résoudre le
                problème sans endommager vos installations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Débouchage évier et lavabo</h3>
              <p>
                Éviers et lavabos qui se vident lentement? Nous éliminons les bouchons et résidus pour retrouver un
                écoulement parfait.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Débouchage baignoire et douche</h3>
              <p>
                Eau stagnante dans votre douche ou baignoire? Nos solutions de débouchage éliminent efficacement les
                accumulations de cheveux et savon.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Débouchage canalisation extérieure</h3>
              <p>
                Canalisations extérieures obstruées? Notre équipement haute pression vient à bout des racines et autres
                obstacles.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Curage et hydrocurage</h3>
              <p>
                Nettoyage préventif ou curatif de vos canalisations par hydrocurage haute pression pour éliminer tous
                les dépôts et garantir un écoulement optimal.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Inspection caméra</h3>
              <p>
                Localisation précise des problèmes grâce à notre caméra d'inspection qui explore vos canalisations et
                identifie l'origine des obstructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services de Plomberie Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services de plomberie à Mons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Dépannage plomberie</h3>
              <p>
                Fuite d'eau, robinet qui goutte, problème de chasse d'eau? Nos plombiers interviennent rapidement pour
                tous vos dépannages d'urgence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Installation sanitaire</h3>
              <p>
                Installation de douche, baignoire, WC, lavabo, évier. Nous réalisons tous vos travaux d'installation
                sanitaire avec des finitions soignées.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Réparation chaudière et boiler</h3>
              <p>
                Problème de chauffage ou d'eau chaude? Nos techniciens qualifiés réparent et entretiennent tous types de
                chaudières et boilers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Détection de fuites</h3>
              <p>
                Localisation précise des fuites cachées grâce à notre équipement de détection non destructif pour
                limiter les dégâts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Rénovation de salle de bain</h3>
              <p>
                Transformation complète de votre salle de bain, du conseil à la réalisation, en passant par le choix des
                équipements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Remplacement de tuyauterie</h3>
              <p>
                Remplacement de tuyaux anciens ou endommagés par des matériaux modernes et durables pour prévenir les
                fuites futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos zones d'intervention à Mons et alentours</h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Nous intervenons dans toute la région montoise pour vos problèmes de plomberie et débouchage. Notre équipe
            se déplace rapidement dans Mons et toutes les communes environnantes.
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir nos services de plomberie et débouchage à Mons ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
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
              <p>Nous intervenons en moins de 45 minutes sur Mons et ses environs.</p>
            </div>
            <div className="text-center p-6">
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
              <p>Tous nos travaux de débouchage sont garantis pendant 12 mois.</p>
            </div>
            <div className="text-center p-6">
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
              <p>Devis gratuit et prix fixe sans surprise après diagnostic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un plombier ou d'un débouchage en urgence à Mons ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Notre équipe de plombiers professionnels est disponible 24h/24 et 7j/7 pour tous vos problèmes de plomberie
            et de canalisations bouchées à Mons et dans toute la région.
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
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes sur nos services à Mons</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Quel est le délai d'intervention pour un débouchage à Mons ?</h3>
              <p>
                Nous intervenons en moins de 45 minutes sur Mons et toutes les communes environnantes. Notre service
                d'urgence est disponible 24h/24 et 7j/7.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Combien coûte un débouchage de canalisation à Mons ?</h3>
              <p>
                Le prix dépend de la nature et de la complexité du bouchon. Nous établissons un devis gratuit après
                diagnostic. Nos tarifs sont transparents et sans surprise.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Quelles méthodes utilisez-vous pour déboucher les canalisations ?
              </h3>
              <p>
                Nous utilisons plusieurs techniques selon la situation : furet électrique, hydrocurage haute pression,
                traitement chimique professionnel, et inspection caméra pour les cas complexes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Intervenez-vous aussi pour les entreprises et commerces à Mons ?
              </h3>
              <p>
                Oui, nous proposons des services de débouchage pour les particuliers, les entreprises, les commerces et
                les collectivités sur Mons et toute la région.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Quels types de services de plomberie proposez-vous à Mons ?</h3>
              <p>
                Nous proposons une gamme complète de services de plomberie : dépannage d'urgence, installation et
                rénovation sanitaire, réparation de chaudières et boilers, détection de fuites, et remplacement de
                tuyauterie.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Êtes-vous disponibles pour des urgences plomberie le week-end à Mons ?
              </h3>
              <p>
                Oui, notre service d'urgence plomberie est disponible 24h/24 et 7j/7, y compris les week-ends et jours
                fériés sur Mons et toutes les communes environnantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Services de plomberie et débouchage à Mons - Professionnels à votre service
            </h2>
            <div className="prose max-w-none">
              <p>
                Notre entreprise de <strong>plomberie et débouchage à Mons</strong> intervient rapidement pour résoudre
                tous vos problèmes de sanitaires et d'évacuation. Que vous soyez confronté à une{" "}
                <strong>fuite d'eau à Mons</strong>, un <strong>WC bouché à Mons</strong>, un{" "}
                <strong>évier bouché à La Louvière</strong>, une <strong>baignoire bouchée à Binche</strong> ou des{" "}
                <strong>canalisations bouchées à Saint-Ghislain</strong>, notre équipe de professionnels dispose de
                l'expertise et du matériel nécessaires pour intervenir efficacement.
              </p>
              <p>
                Nous proposons un <strong>service de plomberie et débouchage 24h/24 et 7j/7</strong> sur toute la région
                montoise. Notre équipe peut se déplacer rapidement à Mons, La Louvière, Binche, Soignies et toutes les
                communes environnantes pour réaliser des <strong>travaux de plomberie, curage et débouchage</strong> de
                vos installations.
              </p>
              <p>
                Notre entreprise est spécialisée dans la <strong>plomberie générale</strong>, le{" "}
                <strong>débouchage de canalisations à haute pression</strong>, l'<strong>inspection par caméra</strong>,
                le <strong>curage d'égouts</strong> et la <strong>vidange de fosses septiques</strong> à Mons et dans
                toute la région. Nous intervenons aussi bien pour les particuliers que pour les professionnels.
              </p>
              <p>
                Pour un <strong>service de plomberie fiable</strong> ou un{" "}
                <strong>débouchage de canalisation pas cher à Mons</strong> ou un <strong>dépannage en urgence</strong>,
                n'hésitez pas à nous contacter. Nous vous proposons un devis gratuit et des tarifs transparents pour
                tous vos travaux de plomberie et débouchage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
