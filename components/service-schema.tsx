import Script from "next/script"

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  imageUrl?: string
  areaServed?: string[]
  serviceType?: string
}

export default function ServiceSchema({
  name,
  description,
  url,
  imageUrl,
  areaServed = ["Namur", "Charleroi", "Liège", "Verviers", "Mons", "Brabant wallon", "Brabant flamand"],
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "Débouchage Plomberie Service 24",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. des dessus de Lives 2",
        addressLocality: "Namur",
        postalCode: "5101",
        addressCountry: "BE",
      },
      telephone: "+32493415283",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: serviceType,
    url: url,
    image: imageUrl,
  }

  return (
    <Script
      id={`service-schema-${name.replace(/\s+/g, "-").toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(schema)}
    </Script>
  )
}
