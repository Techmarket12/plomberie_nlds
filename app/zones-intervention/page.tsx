import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Interventiezones | Ontstoppings- en Loodgietersdienst in België", // Traduction
  description:
    "Ontdek al onze interventiezones in België. Ontstoppings- en loodgietersdienst beschikbaar in Luik, Verviers, Namen, Charleroi, Bergen en de Brabantse regio.", // Traduction
  keywords:
    "ontstopping België, loodgieter België, loodgieter interventiezones, ontstoppingsdienst Luik, ontstoppingsdienst Verviers, ontstoppingsdienst Namen, ontstoppingsdienst Charleroi, ontstoppingsdienst Bergen, ontstoppingsdienst Brabant", // Traduction
}

export default function ZonesInterventionPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Onze Interventiezones
              </h1> {/* Traduction */}
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Ontstoppings- en loodgietersdienst beschikbaar in heel België
              </p> {/* Traduction */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Luik en omgeving</h2> {/* Traduction */}
                <p className="text-gray-500 mb-4">
                  Ontstoppings- en loodgietersdienst in Luik, Ans, Awans, Aywaille, en de hele Luikse regio.
                </p> {/* Traduction */}
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/liege">Bekijk details</Link> {/* Traduction */}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Verviers en omgeving</h2> {/* Traduction */}
                <p className="text-gray-500 mb-4">
                  Ontstoppings- en loodgietersdienst in Verviers, Spa, Malmedy, en de hele Vervierse regio.
                </p> {/* Traduction */}
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/verviers">Bekijk details</Link> {/* Traduction */}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Namen en omgeving</h2> {/* Traduction */}
                <p className="text-gray-500 mb-4">
                  Ontstoppings- en loodgietersdienst in Namen, Ciney, Andenne, en de hele Naamse regio.
                </p> {/* Traduction */}
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/namur">Bekijk details</Link> {/* Traduction */}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Charleroi en omgeving</h2> {/* Traduction */}
                <p className="text-gray-500 mb-4">
                  Ontstoppings- en loodgietersdienst in Charleroi, Gosselies, Jumet, en de hele Carolorégienne regio.
                </p> {/* Traduction */}
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/charleroi">Bekijk details</Link> {/* Traduction */}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Bergen en omgeving</h2> {/* Traduction */}
                <p className="text-gray-500 mb-4">
                  Ontstoppings- en loodgietersdienst in Bergen, La Louvière, Soignies, en de hele Bergen-regio.
                </p> {/* Traduction */}
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/mons">Bekijk details</Link> {/* Traduction */}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Waals- en Vlaams-Brabant</h2> {/* Traduction */}
                <p className="text-gray-500 mb-4">
                  Ontstoppings- en loodgietersdienst in Waver, Nijvel, Waterloo, en heel Brabant.
                </p> {/* Traduction */}
                <Button asChild className="w-full">
                  <Link href="/zones-intervention/brabant">Bekijk details</Link> {/* Traduction */}
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
              <h2 className="text-3xl font-bold mb-4">Dringende service nodig?</h2> {/* Traduction */}
              <p className="text-blue-100 mb-6">
                Onze teams zijn 24/7 beschikbaar voor al uw loodgieters- en ontstoppingsproblemen in heel België.
              </p> {/* Traduction */}
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="tel:+32493415283">
                  <Phone className="mr-2 h-5 w-5" />
                  Nu bellen
                </Link> {/* Traduction */}
              </Button>
            </div>
            <div className="lg:text-right">
              <ul className="space-y-2 text-blue-100">
                <li>✓ Snelle interventie in minder dan 45 minuten</li> {/* Traduction */}
                <li>✓ Service 24 uur per dag en 7 dagen per week beschikbaar</li> {/* Traduction */}
                <li>✓ Gekwalificeerde en ervaren technici</li> {/* Traduction */}
                <li>✓ Professionele en geavanceerde uitrusting</li> {/* Traduction */}
                <li>✓ Transparante tarieven zonder verrassingen</li> {/* Traduction */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
