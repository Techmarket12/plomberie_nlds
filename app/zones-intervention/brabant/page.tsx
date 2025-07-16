import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Débouchage Canalisation Brabant wallon et flamand | Service 24h/24 et 7j/7",
  description:
    "Service de débouchage de canalisations dans le Brabant wallon et flamand. Intervention rapide en 45 minutes, disponible 24h/24 et 7j/7. Devis gratuit.",
  keywords:
    "débouchage Brabant wallon, débouchage canalisation Brabant, débouchage WC Brabant, débouchage évier Brabant, débouchage baignoire Brabant, débouchage douche Brabant, débouchage tuyaux Brabant, curage canalisation Brabant, inspection caméra Brabant, débouchage haute pression Brabant, débouchage Wavre, débouchage Waterloo, débouchage Nivelles, débouchage Ottignies, débouchage Louvain-la-Neuve, débouchage urgence Brabant",
}

export default function BrabantPage() {
  // Liste des communes du Brabant wallon et flamand
  const communes = [
    "Beauvechain",
    "Braine-l'Alleud",
    "Braine-le-Château",
    "Chastre",
    "Chaumont-Gistoux",
    "Court-Saint-Étienne",
    "Genappe",
    "Grez-Doiceau",
    "Hélécine",
    "Incourt",
    "Ittre",
    "Jodoigne",
    "La Hulpe",
    "Lasne",
    "Mont-Saint-Guibert",
    "Nivelles",
    "Orp-Jauche",
    "Ottignies-Louvain-la-Neuve",
    "Perwez",
    "Ramillies",
    "Rebecq",
    "Rixensart",
    "Tubize",
    "Villers-la-Ville",
    "Walhain",
    "Waterloo",
    "Wavre",
    "Asse",
    "Beersel",
    "Dilbeek",
    "Hoeilaart",
    "Meise",
    "Overijse",
    "Leeuw-Saint-Pierre",
    "Tervuren",
    "Vilvorde",
    "Zaventem",
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Débouchage de canalisations dans le Brabant wallon et flamand
              </h1>
              <p className="text-xl mb-6">Service professionnel disponible 24h/24 et 7j/7</p>
              <p className="mb-8">
                Intervention rapide en moins de 45 minutes dans tout le Brabant wallon et flamand. Nos techniciens
                expérimentés résolvent tous vos problèmes de canalisations bouchées.
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
                alt="Débouchage canalisation dans le Brabant"
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
          <h2 className="text-3xl font-bold text-center mb-12">Nos services de débouchage dans le Brabant</h2>
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

      {/* Zone d'intervention */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos zones d'intervention dans le Brabant wallon et flamand
          </h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Nous intervenons dans tout le Brabant wallon et flamand pour vos problèmes de plomberie et débouchage. Notre
            équipe se déplace rapidement dans toutes les communes du Brabant.
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
            Pourquoi choisir notre service de débouchage dans le Brabant ?
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
              <p>Nous intervenons en moins de 45 minutes dans tout le Brabant wallon et flamand.</p>
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
          <h2 className="text-3xl font-bold mb-6">Besoin d'un débouchage en urgence dans le Brabant ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Notre équipe de plombiers professionnels est disponible 24h/24 et 7j/7 pour tous vos problèmes de
            canalisations bouchées dans le Brabant wallon et flamand.
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
            Questions fréquentes sur le débouchage dans le Brabant
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Quel est le délai d'intervention pour un débouchage dans le Brabant ?
              </h3>
              <p>
                Nous intervenons en moins de 45 minutes dans tout le Brabant wallon et flamand. Notre service d'urgence
                est disponible 24h/24 et 7j/7.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Combien coûte un débouchage de canalisation dans le Brabant ?</h3>
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
                Intervenez-vous aussi pour les entreprises et commerces dans le Brabant ?
              </h3>
              <p>
                Oui, nous proposons des services de débouchage pour les particuliers, les entreprises, les commerces et
                les collectivités dans tout le Brabant wallon et flamand.
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
              Débouchage de canalisations dans le Brabant - Service professionnel
            </h2>
            <div className="prose max-w-none">
              <p>
                Notre entreprise de <strong>débouchage de canalisations dans le Brabant</strong> intervient rapidement
                pour résoudre tous vos problèmes d'évacuation. Que vous soyez confronté à un{" "}
                <strong>WC bouché à Wavre</strong>, un <strong>évier bouché à Waterloo</strong>, une{" "}
                <strong>baignoire bouchée à Nivelles</strong> ou des{" "}
                <strong>canalisations bouchées à Ottignies-Louvain-la-Neuve</strong>, notre équipe de professionnels
                dispose de l'expertise et du matériel nécessaires pour intervenir efficacement.
              </p>
              <p>
                Nous proposons un <strong>service de débouchage 24h/24 et 7j/7</strong> dans tout le Brabant wallon et
                flamand. Notre <strong>camion hydrocureur</strong> peut se déplacer rapidement à Wavre, Waterloo,
                Nivelles, Ottignies et toutes les communes environnantes pour réaliser des{" "}
                <strong>travaux de curage et débouchage</strong> de vos canalisations.
              </p>
              <p>
                Notre entreprise est spécialisée dans le <strong>débouchage de canalisations à haute pression</strong>,
                l'<strong>inspection par caméra</strong>, le <strong>curage d'égouts</strong> et la{" "}
                <strong>vidange de fosses septiques</strong> dans le Brabant wallon et flamand. Nous intervenons aussi
                bien pour les particuliers que pour les professionnels.
              </p>
              <p>
                Pour un <strong>débouchage de canalisation pas cher dans le Brabant</strong> ou un{" "}
                <strong>débouchage en urgence</strong>, n'hésitez pas à nous contacter. Nous vous proposons un devis
                gratuit et des tarifs transparents pour tous vos travaux de plomberie et débouchage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
