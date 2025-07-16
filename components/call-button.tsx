"use client"

import type React from "react"

import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

export default function CallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "+32493415283"

  useEffect(() => {
    // Afficher le bouton après un court délai pour ne pas perturber le chargement initial
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Fonction qui sera appelée lors du clic
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Appeler la fonction de conversion Google Ads
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      e.preventDefault()
      window.gtag_report_conversion(`tel:${phoneNumber}`)
    }
  }

  return (
    <>
      {isVisible && (
        <a
          href={`tel:${phoneNumber}`}
          className="fixed bottom-6 right-6 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-18 md:w-18"
          aria-label="Appelez-nous"
          onClick={handleClick}
        >
          <div className="relative flex items-center justify-center">
            {/* Animation de pulsation */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

            {/* Icône de téléphone */}
            <Phone className="relative z-10 h-10 w-10 md:h-8 md:w-8" />

            {/* Texte qui apparaît au survol (visible uniquement sur desktop) */}
            <span className="absolute left-full ml-3 hidden whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
              Appelez-nous
            </span>
          </div>
        </a>
      )}
    </>
  )
}
