"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"

type Region = {
  id: string
  name: string
  cities: string[]
  interventionTime: number
  phone: string
  coordinates: { x: number; y: number }
  radius: number
}

export default function ServiceAreaMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const regions: Region[] = [
    {
      id: "namur",
      name: "Province de Namur",
      cities: ["Namur", "Dinant", "Ciney", "Andenne", "Gembloux"],
      interventionTime: 30,
      phone: "+32 493 41 52 83",
      coordinates: { x: 50, y: 55 },
      radius: 18,
    },
    {
      id: "liege",
      name: "Province de Liège",
      cities: ["Liège", "Verviers", "Huy", "Waremme", "Spa"],
      interventionTime: 35,
      phone: "+32 493 41 52 84",
      coordinates: { x: 75, y: 40 },
      radius: 20,
    },
    {
      id: "hainaut",
      name: "Province du Hainaut",
      cities: ["Mons", "Charleroi", "Tournai", "La Louvière", "Mouscron"],
      interventionTime: 40,
      phone: "+32 493 41 52 85",
      coordinates: { x: 25, y: 60 },
      radius: 22,
    },
    {
      id: "bruxelles",
      name: "Région de Bruxelles-Capitale",
      cities: ["Bruxelles", "Schaerbeek", "Ixelles", "Anderlecht", "Uccle"],
      interventionTime: 30,
      phone: "+32 493 41 52 86",
      coordinates: { x: 40, y: 30 },
      radius: 15,
    },
    {
      id: "brabant-wallon",
      name: "Province du Brabant wallon",
      cities: ["Nivelles", "Wavre", "Ottignies", "Louvain-la-Neuve", "Waterloo"],
      interventionTime: 35,
      phone: "+32 493 41 52 87",
      coordinates: { x: 35, y: 40 },
      radius: 16,
    },
    {
      id: "brabant-flamand",
      name: "Province du Brabant flamand",
      cities: ["Louvain", "Vilvorde", "Hal", "Aarschot", "Diest"],
      interventionTime: 40,
      phone: "+32 493 41 52 88",
      coordinates: { x: 45, y: 20 },
      radius: 19,
    },
  ]

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Zones d'intervention</h3>

      <div className="relative h-[400px] w-full mb-6">
        <Image
          src="/images/belgium-service-map.png"
          alt="Carte des zones d'intervention en Belgique"
          fill
          className="object-contain"
        />

        {regions.map((region) => (
          <div key={region.id}>
            {/* Zone circle */}
            <div
              className={`absolute rounded-full border-2 ${
                activeRegion === region.id ? "border-blue-600 bg-blue-100/20" : "border-blue-400 bg-blue-100/10"
              } transition-all duration-300`}
              style={{
                left: `${region.coordinates.x}%`,
                top: `${region.coordinates.y}%`,
                width: `${region.radius * 2}%`,
                height: `${region.radius * 2}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
            ></div>

            {/* Center point */}
            <button
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10`}
              style={{
                left: `${region.coordinates.x}%`,
                top: `${region.coordinates.y}%`,
              }}
              onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
              aria-label={`Voir les informations pour ${region.name}`}
            >
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full ${
                  activeRegion === region.id ? "bg-blue-600" : "bg-blue-500"
                } text-white shadow-md transition-all duration-300 hover:bg-blue-600`}
              >
                <span className="text-xs font-bold">{region.interventionTime}</span>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div className="text-sm text-gray-600 mb-6 text-center">
        <p>Les chiffres indiquent le délai d'intervention moyen en minutes</p>
        <p>Cliquez sur une région pour voir plus de détails</p>
      </div>

      {activeRegion && (
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 animate-fadeIn">
          {regions
            .filter((region) => region.id === activeRegion)
            .map((region) => (
              <div key={region.id}>
                <h3 className="text-xl font-bold text-gray-800">{region.name}</h3>
                <p className="mt-2 text-gray-600">
                  Délai d'intervention moyen :{" "}
                  <span className="font-bold text-blue-600">{region.interventionTime} minutes</span>
                </p>

                <div className="mt-3">
                  <p className="font-medium text-gray-700">Villes principales :</p>
                  <p className="text-gray-600">{region.cities.join(", ")}</p>
                </div>

                <div className="mt-4 flex items-center">
                  <a
                    href={`tel:${region.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Appeler cette agence</span>
                  </a>
                </div>
              </div>
            ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
