import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-lg font-bold">À propos de nous</h3>
            <p className="text-gray-300">
              Aqua&Deb est votre partenaire de confiance pour tous vos besoins en plomberie et
              débouchage. Intervention rapide, garantie 12 mois, disponible 24h/24 et 7j/7.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Nos services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/plomberie" className="hover:text-blue-400">
                  Services de plomberie
                </Link>
              </li>
              <li>
                <Link href="/services/debouchage" className="hover:text-blue-400">
                  Services de débouchage
                </Link>
              </li>
              <li>
                <Link href="/services/plomberie/depannage" className="hover:text-blue-400">
                  Dépannage plomberie
                </Link>
              </li>
              <li>
                <Link href="/services/plomberie/renovation" className="hover:text-blue-400">
                  Rénovation plomberie
                </Link>
              </li>
              <li>
                <Link href="/services/plomberie/entretien" className="hover:text-blue-400">
                  Entretien plomberie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Zones d'intervention</h3>
            <ul className="space-y-2 text-gray-300 grid grid-cols-2 gap-x-4">
              <li>
                <Link href="/zones-intervention/liege" className="hover:text-blue-400">
                  Liège
                </Link>
              </li>
              <li>
                <Link href="/zones-intervention/namur" className="hover:text-blue-400">
                  Namur
                </Link>
              </li>
              <li>
                <Link href="/zones-intervention/charleroi" className="hover:text-blue-400">
                  Charleroi
                </Link>
              </li>
              <li>
                <Link href="/zones-intervention/mons" className="hover:text-blue-400">
                  Mons
                </Link>
              </li>
              <li>
                <Link href="/zones-intervention/brabant" className="hover:text-blue-400">
                  Brabant wallon et flamand
                </Link>
              </li>
              <li>
                <Link href="/zones-intervention/verviers" className="hover:text-blue-400">
                  Verviers
                </Link>
              </li>
              <li>
                <Link href="/zones-intervention" className="hover:text-blue-400 font-semibold">
                  Toutes les zones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+32493415283" className="hover:text-blue-400">
                  +32 493 41 52 83
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:aquadeb22@gmail.com" className="hover:text-blue-400">
                  aquadeb22@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Informations légales</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/conditions-generales" className="hover:text-blue-300 transition-colors">
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-blue-400">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-blue-400">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Aqua&Deb. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
