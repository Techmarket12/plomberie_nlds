import { MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceArea() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Zone d'Intervention</h2>
          <p className="mt-4 text-xl text-gray-600">
            Plombier près de chez vous - Intervention rapide dans toute la Belgique
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Nos zones d'intervention</h3>
              <p className="mb-6 text-lg text-gray-600">
                Notre équipe de plombiers professionnels intervient rapidement dans toute la Belgique pour vos besoins
                en plomberie et débouchage.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-gray-800">Régions desservies</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span>Namur</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span>Charleroi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span>Liège</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span>Verviers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span>Mons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span>Brabant wallon</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span>Brabant flamand</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-gray-800">Services d'urgence</h4>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="font-medium text-blue-800">
                      Intervention en moins de 45 minutes pour tous vos problèmes de plomberie urgents :
                    </p>
                    <ul className="mt-2 space-y-1 text-blue-700">
                      <li>• Fuite d'eau</li>
                      <li>• Tuyau cassé</li>
                      <li>• Canalisation bouchée</li>
                      <li>• WC bouché</li>
                      <li>• Robinet qui fuit</li>
                      <li>• Chauffe-eau en panne</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Pourquoi choisir un plombier local ?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-500 text-xs font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>Intervention rapide</strong> - Un plombier près de chez vous arrive plus vite
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-500 text-xs font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>Connaissance locale</strong> - Familiarité avec les systèmes de plomberie de votre région
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-500 text-xs font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>Disponibilité</strong> - Service à domicile 24h/24 et 7j/7, même la nuit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-500 text-xs font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>Suivi personnalisé</strong> - Relation de confiance avec un plombier de proximité
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="mt-6 rounded-lg bg-blue-500 p-6 text-white shadow-md">
              <h3 className="mb-3 text-2xl font-bold">Besoin d'un plombier en urgence ?</h3>
              <p className="mb-4">
                Notre service de dépannage plomberie est disponible 24h/24 et 7j/7 pour tous vos problèmes urgents :
                fuite d'eau, tuyau cassé, canalisation bouchée, WC bouché...
              </p>
              <div className="rounded-lg bg-white p-4 text-center text-blue-800">
                <p className="text-lg font-bold">Appelez-nous maintenant</p>
                <p className="text-2xl font-bold">+32 493 41 52 83</p>
                <p className="mt-1 text-sm">Intervention en moins de 45 minutes</p>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/zones-intervention">Voir toutes nos zones d'intervention</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
