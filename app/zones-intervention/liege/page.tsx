import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Débouchage et Plomberie à Liège et alentours | Service 24/7",
  description:
    "Service de débouchage et plomberie à Liège et dans toute la région liégeoise. Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes de canalisations.",
  keywords:
    "débouchage Liège, plombier Liège, débouchage canalisation Liège, débouchage WC Liège, débouchage évier Liège, plomberie Ans, débouchage Awans, plombier Aywaille, débouchage Beyne-Heusay, plombier Bassenge, débouchage Blegny, plombier Chaudfontaine, débouchage Comblain-au-Pont, plombier Dalhem, débouchage Esneux, plombier Flémalle, débouchage Fléron, plombier Grâce-Hollogne, débouchage Herstal, plombier Juprelle, débouchage Neupré, plombier Oupeye, débouchage Saint-Nicolas, plombier Seraing, débouchage Soumagne, plombier Sprimont, débouchage Trooz, plombier Visé",
}

export default function LiegePage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Débouchage et Plomberie à Liège
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Service professionnel disponible 24h/24 et 7j/7 dans toute la région liégeoise
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="tel:+32493415283">
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler maintenant
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nos services à Liège et alentours</h2>
              <p className="text-gray-500 mb-6">
                Notre équipe de plombiers professionnels intervient rapidement pour tous vos problèmes de plomberie et
                débouchage à Liège et dans les communes environnantes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">✓</span>
                  <span>Débouchage de canalisations, WC, éviers et douches</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">✓</span>
                  <span>Inspection caméra et détection de fuites</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">✓</span>
                  <span>Réparation et remplacement de canalisations</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">✓</span>
                  <span>Dépannage plomberie d'urgence</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">✓</span>
                  <span>Installation et réparation sanitaire</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/plumber-fixing-leak.png" alt="Plombier à Liège" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Communes desservies à Liège et alentours</h2>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Liège</h3>
                <p className="text-sm text-gray-500">
                  Service de débouchage et plomberie disponible dans toute la ville de Liège.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Ans</h3>
                <p className="text-sm text-gray-500">Intervention rapide pour tous vos problèmes de plomberie à Ans.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Awans</h3>
                <p className="text-sm text-gray-500">Service de débouchage professionnel disponible à Awans.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Aywaille</h3>
                <p className="text-sm text-gray-500">Plombiers expérimentés pour vos travaux à Aywaille.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Beyne-Heusay</h3>
                <p className="text-sm text-gray-500">Service de débouchage disponible 24/7 à Beyne-Heusay.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Bassenge</h3>
                <p className="text-sm text-gray-500">
                  Intervention rapide pour tous vos problèmes de plomberie à Bassenge.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Blegny</h3>
                <p className="text-sm text-gray-500">Service de débouchage professionnel disponible à Blegny.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Chaudfontaine</h3>
                <p className="text-sm text-gray-500">Plombiers expérimentés pour vos travaux à Chaudfontaine.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Comblain-au-Pont</h3>
                <p className="text-sm text-gray-500">Service de débouchage disponible 24/7 à Comblain-au-Pont.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Dalhem</h3>
                <p className="text-sm text-gray-500">
                  Intervention rapide pour tous vos problèmes de plomberie à Dalhem.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Esneux</h3>
                <p className="text-sm text-gray-500">Service de débouchage professionnel disponible à Esneux.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Flémalle</h3>
                <p className="text-sm text-gray-500">Plombiers expérimentés pour vos travaux à Flémalle.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Fléron</h3>
                <p className="text-sm text-gray-500">Service de débouchage disponible 24/7 à Fléron.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Grâce-Hollogne</h3>
                <p className="text-sm text-gray-500">
                  Intervention rapide pour tous vos problèmes de plomberie à Grâce-Hollogne.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Herstal</h3>
                <p className="text-sm text-gray-500">Service de débouchage professionnel disponible à Herstal.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Juprelle</h3>
                <p className="text-sm text-gray-500">Plombiers expérimentés pour vos travaux à Juprelle.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Neupré</h3>
                <p className="text-sm text-gray-500">Service de débouchage disponible 24/7 à Neupré.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Oupeye</h3>
                <p className="text-sm text-gray-500">
                  Intervention rapide pour tous vos problèmes de plomberie à Oupeye.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Saint-Nicolas</h3>
                <p className="text-sm text-gray-500">Service de débouchage professionnel disponible à Saint-Nicolas.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Seraing</h3>
                <p className="text-sm text-gray-500">Plombiers expérimentés pour vos travaux à Seraing.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Soumagne</h3>
                <p className="text-sm text-gray-500">Service de débouchage disponible 24/7 à Soumagne.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Sprimont</h3>
                <p className="text-sm text-gray-500">
                  Intervention rapide pour tous vos problèmes de plomberie à Sprimont.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Trooz</h3>
                <p className="text-sm text-gray-500">Service de débouchage professionnel disponible à Trooz.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Visé</h3>
                <p className="text-sm text-gray-500">Plombiers expérimentés pour vos travaux à Visé.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir notre service de débouchage à Liège ?</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold">Intervention rapide</h3>
                    <p className="text-gray-500">
                      Nous intervenons en moins de 45 minutes dans toute la région liégeoise.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold">Disponibilité 24/7</h3>
                    <p className="text-gray-500">Notre service est disponible 24h/24 et 7j/7, même les jours fériés.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold">Techniciens qualifiés</h3>
                    <p className="text-gray-500">
                      Nos plombiers sont formés et expérimentés pour résoudre tous types de problèmes.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold">Équipement professionnel</h3>
                    <p className="text-gray-500">
                      Nous utilisons des outils de pointe pour un débouchage efficace et durable.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold">Tarifs transparents</h3>
                    <p className="text-gray-500">Devis gratuit et prix fixe sans surprise après diagnostic.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/debouchage-canalisation.png"
                alt="Débouchage canalisation à Liège"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Besoin d'un débouchage en urgence à Liège ?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Notre équipe est disponible 24h/24 et 7j/7 pour intervenir rapidement dans toute la région liégeoise.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="tel:+32493415283">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes sur notre service à Liège</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Dans quel délai intervenez-vous à Liège ?</h3>
              <p className="text-gray-500">
                Nous intervenons en moins de 45 minutes dans toute la région liégeoise, 24h/24 et 7j/7, y compris les
                week-ends et jours fériés.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Quels types de problèmes de plomberie traitez-vous ?</h3>
              <p className="text-gray-500">
                Nous traitons tous types de problèmes : débouchage de WC, éviers, douches, canalisations, détection et
                réparation de fuites, remplacement de tuyauterie, etc.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Comment se déroule une intervention de débouchage ?</h3>
              <p className="text-gray-500">
                Après votre appel, notre technicien se rend sur place, effectue un diagnostic, vous propose un devis
                gratuit, et procède au débouchage avec l'équipement adapté.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Quels sont vos tarifs pour un débouchage à Liège ?</h3>
              <p className="text-gray-500">
                Nos tarifs dépendent de la nature du problème et de la complexité de l'intervention. Nous vous proposons
                toujours un devis gratuit et transparent avant de commencer les travaux.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Proposez-vous des contrats d'entretien pour les entreprises à Liège ?
              </h3>
              <p className="text-gray-500">
                Oui, nous proposons des contrats d'entretien adaptés aux besoins des entreprises, commerces et
                copropriétés de la région liégeoise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Utilisez-vous des produits respectueux de l'environnement ?</h3>
              <p className="text-gray-500">
                Oui, nous privilégions les méthodes mécaniques et, lorsque nécessaire, des produits biodégradables
                respectueux de l'environnement et de vos installations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
