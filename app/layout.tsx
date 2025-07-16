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
    // Titre par défaut pour le néerlandais
    default: "Aqua&Deb - Loodgieter Ontstopper Spoeddienst 24/7 | Interventie Binnen 45 Minuten",
    template: "%s | Aqua&Deb - Professionele Loodgietersdienst",
  },
  description:
    "Aqua&Deb - Professionele loodgieters- en ontstoppingsdienst 24/7. Snelle interventie binnen 45 minuten, noodreparaties waterlekken, ontstoppen van afvoeren, toiletten, wastafels. Gratis offerte, 12 maanden garantie. Particulieren en bedrijven Wallonië & Brussel.",
  keywords: [
    // Mots-clés principaux de la campagne (néerlandais)
    "Aqua&Deb",
    "loodgieter ontstopper spoeddienst 24/7",
    "professionele loodgietersdienst",
    "interventie binnen 45 minuten",
    "snelle interventie 24/7",
    "spoedinterventie 45 min",
    "gegarandeerde interventies",
    "12 maanden garantie interventie",

    // Services spécifiques (néerlandais)
    "waterlekkage reparatie",
    "afvoer ontstoppen",
    "toilet en wastafel ontstoppen",
    "verstopte afvoer spoed",
    "professionele ontstoppingsdienst 24/7",
    "camera inspectie",
    "sanitair herstel",
    "renovatie en onderhoud",
    "complete loodgietersoplossingen",

    // Géolocalisation (néerlandais)
    "loodgieter Wallonië",
    "loodgieter Brussel",
    "loodgietersdienst Namen", // Pour Namur, "Namen" en néerlandais
    "ontstoppingsdienst Wallonië",
    "ontstoppingsdienst Brussel",

    // Mots-clés commerciaux (néerlandais)
    "gratis vrijblijvende offerte",
    "bel nu",
    "particulieren en bedrijven",
    "loodgietersbedrijf",
    "24-uurs service",
    "lekken storingen en noodgevallen",

    // Mots-clés longue traîne (néerlandais)
    "loodgieter waterlek riolering pvc",
    "loodgieter afvoerproblemen",
    "snelle loodgieter bij mij in de buurt",
    "loodgieter onzichtbaar waterlek",
    "wc stortbak loopt loodgieter",
    "loodgieter lek reparatie",
    "loodgieter gebroken riool",
    "loodgietersbedrijf renovatie",
    "loodgieter aan huis",
    "loodgieter hersteller",
    "loodgietersservice",
    "loodgieter installatie",
    "loodgieter spoed nacht",
  ],
  metadataBase: new URL("https://aquaetdeb.be"), // Garder l'URL principale pour le domaine
  openGraph: {
    title: "Aqua&Deb - Loodgieter Ontstopper Spoeddienst 24/7 | Interventie Binnen 45 Minuten",
    description:
      "Professionele loodgieters- en ontstoppingsdienst 24/7. Snelle interventie binnen 45 minuten, 12 maanden garantie, Wallonië & Brussel.",
    url: "https://aquaetdeb.be",
    siteName: "Aqua&Deb - Professionele Loodgietersdienst",
    locale: "nl_BE", // Changer la locale pour le néerlandais belge
    type: "website",
    images: [
      {
        url: "https://aquaetdeb.be/opengraph-image.png", // Conserver la même image si elle est générique
        width: 1200,
        height: 630,
        alt: "Aqua&Deb - Professionele loodgieters- en ontstoppingsdienst 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua&Deb - Loodgieter Ontstopper Spoeddienst 24/7",
    description:
      "Professionele loodgieters- en ontstoppingsdienst. Snelle interventie binnen 45 minuten, 24/7 beschikbaar.",
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
    canonical: "https://aquaetdeb.be", // Garder la canonique si c'est une version linguistique sur le même domaine
    // Si vous utilisez un sous-domaine (nl.aquaetdeb.be) ou un autre domaine (aquaetdeb.nl), ajustez ici.
    // Ou si c'est un chemin (aquaetdeb.be/nl) alors vous devrez gérer les alternates avec Next.js pour l'i18n.
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
    <html lang="nl"> {/* Changer la langue de la balise HTML */}
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="mask-icon" href="/icon.png" color="#00b8e6" />
        <meta name="theme-color" content="#00b8e6" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aquaetdeb.be/" /> {/* L'URL OGP doit pointer vers la page NL si elle existe */}
        <meta
          property="og:title"
          content="Aqua&Deb - Loodgieter Ontstopper Spoeddienst 24/7 | Interventie Binnen 45 Minuten"
        />
        <meta
          property="og:description"
          content="Professionele loodgieters- en ontstoppingsdienst 24/7. Snelle interventie binnen 45 minuten, 12 maanden garantie, Wallonië & Brussel."
        />
        <meta property="og:image" content="https://aquaetdeb.be/opengraph-image.png" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <PreloadImages />
        <SchemaOrg
          url="https://aquaetdeb.be" // L'URL doit pointer vers la page NL si elle existe
          title="Aqua&Deb - Loodgieter Ontstopper Spoeddienst 24/7 | Interventie Binnen 45 Minuten"
          description="Aqua&Deb - Professionele loodgieters- en ontstoppingsdienst 24/7. Snelle interventie binnen 45 minuten, noodreparaties waterlekken, ontstoppen van afvoeren. Particulieren en bedrijven Wallonië & Brussel."
          imageUrl="https://aquaetdeb.be/logo.png"
          keywords={[
            "Aqua&Deb",
            "loodgieter ontstopper spoeddienst 24/7",
            "professionele loodgietersdienst",
            "interventie binnen 45 minuten",
            "waterlekkage reparatie",
            "afvoer ontstoppen",
            "Wallonië",
            "Brussel",
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
