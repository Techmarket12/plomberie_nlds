"use client"

import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { name: "Grohe", logo: "/images/logo-grohe.webp" },
    { name: "Bulex", logo: "/images/logo-bulex.webp" },
    { name: "Geberit", logo: "/images/logo-geberit.webp" },
    { name: "Villeroy & Boch", logo: "/images/logo-villeroy-boch.webp" },
    { name: "Ideal Standard", logo: "/images/logo-ideal-standard.webp" },
    { name: "Vaillant", logo: "/images/logo-vaillant.webp" },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          Nous travaillons avec les meilleures marques du secteur pour garantir des résultats optimaux
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-transform hover:scale-105"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`Logo ${partner.name}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
