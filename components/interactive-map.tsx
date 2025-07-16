"use client"

export default function InteractiveMap() {
  const regions = [
    "Province de Namur",
    "Province de Liège",
    "Province du Hainaut",
    "Région de Bruxelles-Capitale",
    "Province du Brabant wallon",
    "Province du Brabant flamand",
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos zones d'intervention</h3>
        <p className="text-gray-600 mb-6">
          Nous intervenons dans toutes les principales régions de Belgique avec des équipes locales pour garantir un
          service rapide et efficace.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          {regions.map((region, index) => (
            <div key={index} className="p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
              <h4 className="font-semibold text-gray-800">{region}</h4>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-blue-600 font-semibold">
            Intervention rapide dans toute la Belgique en moins de 45 minutes
          </p>
        </div>
      </div>

      <div className="relative w-full" style={{ height: "700px" }}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-05-11_%C3%A0_08.40.24_7d692def-removebg-preview-do65dhmOcUBRRxIXOQhuwd5kDG0Uaf.png"
          alt="Carte des services en Belgique"
          className="w-full h-full object-contain"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  )
}
