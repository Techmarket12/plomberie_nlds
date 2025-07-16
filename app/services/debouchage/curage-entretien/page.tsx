import type { Metadata } from "next"
import CurageEntretienClientPage from "./CurageEntretienClientPage"

export const metadata: Metadata = {
  title: "Curage et Entretien Canalisations | Aqua&Deb - Service Préventif",
  description:
    "Service de curage et entretien préventif des canalisations. Hydrocurage, nettoyage haute pression, contrats d'entretien. Évitez les bouchons récurrents.",
  keywords: [
    "curage canalisations",
    "entretien canalisations",
    "nettoyage canalisations",
    "hydrocurage préventif",
    "maintenance canalisations",
    "contrat entretien",
    "curage haute pression",
    "nettoyage préventif",
    "entretien tuyauterie",
    "aqua&deb curage",
    "curage Namur",
    "entretien préventif plomberie",
  ],
}

export default function CurageEntretienPage() {
  return <CurageEntretienClientPage />
}
