import Script from "next/script"

interface SchemaOrgProps {
  url: string
  title: string
  description: string
  imageUrl?: string
  keywords?: string[]
}

export default function SchemaOrg({ url, title, description, imageUrl, keywords }: SchemaOrgProps) {
  // Création du schéma JSON-LD pour les moteurs de recherche
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aqua&Deb - Plombier Déboucheur Urgence 24h/24",
    alternateName: ["Aqua&Deb", "AquaDeb", "Service Professionnel Plomberie"],
    description: description,
    url: url,
    telephone: "+32493415283",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. des dessus de Lives 2",
      addressLocality: "Namur",
      postalCode: "5101",
      addressCountry: "BE",
      addressRegion: "Wallonie",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.4763889",
      longitude: "4.9107889",
    },
    image: imageUrl,
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: ["https://www.facebook.com/aquaetdeb", "https://www.instagram.com/aquaetdeb"],
    keywords: keywords?.join(", "),
    serviceArea: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "50.4763889",
          longitude: "4.9107889",
        },
        geoRadius: "100000",
      },
      {
        "@type": "AdministrativeArea",
        name: "Wallonie",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bruxelles",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Professionnels de Plomberie et Débouchage 24h/24",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intervention Express 45 Minutes",
            description:
              "Service professionnel d'intervention rapide en 45 minutes pour tous problèmes urgents de plomberie",
            provider: {
              "@type": "LocalBusiness",
              name: "Aqua&Deb",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Débouchage Canalisations WC Éviers",
            description:
              "Service de débouchage professionnel 24h/24 pour canalisations, WC, éviers et douches bouchées",
            provider: {
              "@type": "LocalBusiness",
              name: "Aqua&Deb",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dépannage Fuites d'Eau",
            description:
              "Dépannage fuites d'eau, robinets qui coulent, réparation de fuites avec intervention garantie",
            provider: {
              "@type": "LocalBusiness",
              name: "Aqua&Deb",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Solutions Complètes Plomberie",
            description:
              "Rénovation et entretien, installation sanitaires, solutions complètes pour particuliers et professionnels",
            provider: {
              "@type": "LocalBusiness",
              name: "Aqua&Deb",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Inspection par Caméra",
            description: "Inspection par caméra et détection de fuites avec technologie avancée",
            provider: {
              "@type": "LocalBusiness",
              name: "Aqua&Deb",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dépannage Sanitaires",
            description: "Dépannage sanitaires et maintenance préventive avec interventions garanties 12 mois",
            provider: {
              "@type": "LocalBusiness",
              name: "Aqua&Deb",
            },
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Johny Gruber",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Entreprise sérieuse et un service de qualité! Ils sont intervenus pour un débouchage évier et nous ont conseillé des solutions pour que le problème ne revienne plus. Merci encore !",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Jodie Mertens",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Merci pour votre service, ils sont intervenus à domicile pour un problème de plomberie et nous ont remplacé les tuyaux de canalisation. Tout s'est super bien passé, merci pour votre rapidité encore. Prestation de service super polie et très explicite sur le travail, je recommande fortement !",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Christelle Vandendris",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Un grand merci pour votre service ! Mes canalisations sont débouchées et le curage des tuyaux a bien été effectué. Je recommande fortement cette entreprise. Merci !",
      },
    ],
  }

  return (
    <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  )
}
