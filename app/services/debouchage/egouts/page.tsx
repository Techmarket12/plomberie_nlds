import type { Metadata } from "next"
import EgoutsClientPage from "./EgoutsClientPage"

export const metadata: Metadata = {
  title: "Débouchage Égouts | Aqua&Deb - Service Professionnel 24h/24",
  description:
    "Service professionnel de débouchage d'égouts à Namur. Intervention rapide 24h/24, équipement spécialisé, inspection caméra. Devis gratuit, garantie satisfaction.",
  keywords: [
    "débouchage égouts",
    "débouchage égout bouché",
    "nettoyage égouts",
    "curage égouts",
    "inspection égouts caméra",
    "débouchage collecteur",
    "égout principal bouché",
    "service débouchage égouts",
    "débouchage égouts urgence",
    "aqua&deb égouts",
    "débouchage égouts Namur",
    "débouchage égouts Wallonie",
  ],
}

export default function EgoutsPage() {
  return <EgoutsClientPage />
}
