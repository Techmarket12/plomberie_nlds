import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Zones d'intervention | Débouchage et Plomberie en Belgique",
  description:
    "Découvrez toutes nos zones d'intervention en Belgique. Service de débouchage et plomberie disponible à Liège, Verviers, Namur, Charleroi, Mons et dans le Brabant.",
  keywords:
    "débouchage Belgique, plombier Belgique, zones intervention plombier, débouchage Liège, débouchage Verviers, débouchage Namur, débouchage Charleroi, débouchage Mons, débouchage Brabant",
}

export default function ZonesInterventionPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nos Zones d'Intervention
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Service de débouchage et plomberie disponible dans toute la Belgique
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Liège et alentours</h2>
                <p className="text-gray-500 mb-4">
                  Service de débouchage et plomberie à Liège, Ans, Awans, Aywaille, et toute la région liégeoise.
                </p>
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/liege">Voir les détails</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Verviers et alentours</h2>
                <p className="text-gray-500 mb-4">
                  Service de débouchage et plomberie à Verviers, Spa, Malmedy, et toute la région verviétoise.
                </p>
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/verviers">Voir les détails</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Namur et alentours</h2>
                <p className="text-gray-500 mb-4">
                  Service de débouchage et plomberie à Namur, Ciney, Andenne, et toute la région namuroise.
                </p>
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/namur">Voir les détails</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Charleroi et alentours</h2>
                <p className="text-gray-500 mb-4">
                  Service de débouchage et plomberie à Charleroi, Gosselies, Jumet, et toute la région carolorégienne.
                </p>
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/charleroi">Voir les détails</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Mons et alentours</h2>
                <p className="text-gray-500 mb-4">
                  Service de débouchage et plomberie à Mons, La Louvière, Soignies, et toute la région montoise.
                </p>
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/mons">Voir les détails</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Brabant wallon et flamand</h2>
                <p className="text-gray-500 mb-4">
                  Service de débouchage et plomberie à Wavre, Nivelles, Waterloo, et tout le Brabant.
                </p>
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/brabant">Voir les détails</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Besoin d'un service urgent ?</h2>
              <p className="text-blue-100 mb-6">
                Nos équipes sont disponibles 24h/24 et 7j/7 pour tous vos problèmes de plomberie et débouchage dans
                toute la Belgique.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="tel:+32493415283">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </Link>
              </Button>
            </div>
            <div className="lg:text-right">
              <ul className="space-y-2 text-blue-100">
                <li>✓ Intervention rapide en moins de 45 minutes</li>
                <li>✓ Service disponible 24h/24 et 7j/7</li>
                <li>✓ Techniciens qualifiés et expérimentés</li>
                <li>✓ Équipement professionnel de pointe</li>
                <li>✓ Tarifs transparents sans surprise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
