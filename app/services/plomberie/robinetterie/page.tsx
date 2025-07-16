import type { Metadata } from "next"
import RobinetterieClientPage from "./RobinetterieClientPage"

export const metadata: Metadata = {
  title: "Service de Robinetterie - Installation et Réparation | Aqua&Deb",
  description:
    "Service professionnel de robinetterie. Installation, réparation et remplacement de robinets. Intervention rapide 24h/24 en Wallonie et Bruxelles.",
  keywords:
    "robinetterie, installation robinet, réparation robinet, mitigeur, robinet cuisine, robinet salle de bain, plombier robinetterie, Aqua&Deb",
  openGraph: {
    title: "Service de Robinetterie - Installation et Réparation | Aqua&Deb",
    description:
      "Service professionnel de robinetterie. Installation, réparation et remplacement de robinets. Intervention rapide 24h/24.",
    url: "https://aquaetdeb.be/services/plomberie/robinetterie",
    siteName: "Aqua&Deb",
    images: [
      {
        url: "https://aquaetdeb.be/images/robinetterie-service.jpg",
        width: 1200,
        height: 630,
        alt: "Service de robinetterie professionnel",
      },
    ],
    locale: "fr_BE",
    type: "website",
  },
}

export default function RobinetteriePage() {
  return <RobinetterieClientPage />
}
