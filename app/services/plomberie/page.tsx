import type { Metadata } from "next"
import PlomberieClientPage from "./PlomberieClientPage"

export const metadata: Metadata = {
  title: "Services de Plomberie | Débouchage Plomberie Service 24",
  description:
    "Services professionnels de plomberie à Namur. Dépannage, rénovation et entretien. Intervention rapide, garantie 12 mois, disponible 24h/24 et 7j/7.",
}

export default function PlomberiePage() {
  return <PlomberieClientPage />
}
