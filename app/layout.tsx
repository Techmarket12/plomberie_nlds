import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SchemaOrg from "@/components/schema-org"
import PreloadImages from "@/components/preload-images"
import CookieConsent from "@/components/cookie-consent"
import CallButton from "@/components/call-button"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Aqua&Deb - Plombier Déboucheur Urgence 24h/24 | Intervention en 45 Minutes",
    template: "%s | Aqua&Deb - Service Professionnel de Plomberie",
  },
  description:
    "Aqua&Deb - Service professionnel de plomberie et débouchage 24h/24. Intervention rapide en 45 minutes, dépannage fuites d'eau, débouchage canalisations WC éviers. Devis gratuit, garantie 12 mois. Particuliers et professionnels Wallonie & Bruxelles.",
  keywords: [
    // Mots-clés principaux de la campagne
    "Aqua&Deb",
    "plombier déboucheur urgence 24h/24",
    "service professionnel plomberie",
    "intervention en 45 minutes",
    "intervention rapide 24h/24",
    "intervention express 45 min",
    "interventions garanties",
    "intervention garantie 12 mois",

    // Services spécifiques
    "dépannage fuites d'eau",
    "débouchage canalisations",
    "débouchage WC et éviers",
    "urgence canalisation bouchée",
    "service débouchage professionnel 24h/24",
    "inspection par caméra",
    "dépannage sanitaires",
    "rénovation et entretien",
    "solutions complètes plomberie",

    // Géolocalisation
    "plombier Wallonie",
    "plombier Bruxelles",
    "plomberie Namur",
    "débouchage Wallonie",
    "débouchage Bruxelles",

    // Mots-clés commerciaux
    "devis gratuit sans engagement",
    "appelez maintenant",
    "particuliers et professionnels",
    "entreprise de plomberie",
    "service 24h",
    "fuites pannes et urgences",

    // Mots-clés longue traîne
    "plombier fuite d'eau cannalisation pvc",
    "plombier problem de canalisation",
    "plombier rapide pres de chez moi",
    "plombier fuite d'eau non visible",
    "chasse wc coule plombier",
    "plombier reparation fuite",
    "plombier cannalisation casser",
    "entreprise plomberie renovation",
    "plombier a domicile",
    "plombier depanneur",
    "service plomberie",
    "instalation plomberie",
    "plombier rapide nuit",
  ],
  metadataBase: new URL("https://aquaetdeb.be"),
  openGraph: {
    title: "Aqua&Deb - Plombier Déboucheur Urgence 24h/24 | Intervention en 45 Minutes",
    description:
      "Service professionnel de plomberie et débouchage 24h/24. Intervention rapide en 45 minutes, garantie 12 mois, Wallonie & Bruxelles.",
    url: "https://aquaetdeb.be",
    siteName: "Aqua&Deb - Service Professionnel de Plomberie",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "https://aquaetdeb.be/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aqua&Deb - Service professionnel de plomberie et débouchage 24h/24",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua&Deb - Plombier Déboucheur Urgence 24h/24",
    description:
      "Service professionnel de plomberie et débouchage. Intervention rapide en 45 minutes, disponible 24h/24.",
    images: ["https://aquaetdeb.be/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/icon.png",
        color: "#00b8e6",
      },
    ],
  },
  alternates: {
    canonical: "https://aquaetdeb.be",
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "Aqua&Deb",
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
    url: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="mask-icon" href="/icon.png" color="#00b8e6" />
        <meta name="theme-color" content="#00b8e6" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aquaetdeb.be/" />
        <meta
          property="og:title"
          content="Aqua&Deb - Plombier Déboucheur Urgence 24h/24 | Intervention en 45 Minutes"
        />
        <meta
          property="og:description"
          content="Service professionnel de plomberie et débouchage 24h/24. Intervention rapide en 45 minutes, garantie 12 mois, Wallonie & Bruxelles."
        />
        <meta property="og:image" content="https://aquaetdeb.be/opengraph-image.png" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <PreloadImages />
        <SchemaOrg
          url="https://aquaetdeb.be"
          title="Aqua&Deb - Plombier Déboucheur Urgence 24h/24 | Intervention en 45 Minutes"
          description="Aqua&Deb - Service professionnel de plomberie et débouchage 24h/24. Intervention rapide en 45 minutes, dépannage fuites d'eau, débouchage canalisations. Particuliers et professionnels Wallonie & Bruxelles."
          imageUrl="https://aquaetdeb.be/logo.png"
          keywords={[
            "Aqua&Deb",
            "plombier déboucheur urgence 24h/24",
            "service professionnel plomberie",
            "intervention en 45 minutes",
            "dépannage fuites d'eau",
            "débouchage canalisations",
            "Wallonie",
            "Bruxelles",
          ]}
        />
        <Header />
        <main className="min-h-screen">
          <Suspense>{children}</Suspense>
        </main>
        <Footer />
        <CookieConsent />
        <CallButton />
      </body>
    </html>
  )
}
