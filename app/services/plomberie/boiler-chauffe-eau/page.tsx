import type { Metadata } from "next"
import BoilerClientPage from "./BoilerClientPage"

export const metadata: Metadata = {
  title: "Service Boiler et Chauffe-eau | Aqua&Deb - Installation et Réparation",
  description:
    "Service professionnel de boiler et chauffe-eau à Namur. Installation, réparation, entretien. Intervention rapide 24h/24, toutes marques, garantie 12 mois.",
  keywords: [
    "service boiler",
    "chauffe-eau",
    "réparation boiler",
    "installation chauffe-eau",
    "boiler électrique",
    "boiler gaz",
    "chauffe-eau thermodynamique",
    "entretien boiler",
    "remplacement chauffe-eau",
    "fuite boiler",
    "aqua&deb boiler",
    "boiler Namur",
    "chauffe-eau Wallonie",
  ],
}

export default function BoilerPage() {
  return <BoilerClientPage />
}
