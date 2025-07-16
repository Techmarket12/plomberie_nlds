"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem("cookie-consent")

    // Si pas de consentement stocké, afficher la bannière
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    // Stocker le consentement
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    // Stocker le refus
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-4 md:mb-0 pr-4">
          <p className="text-sm md:text-base">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous
            acceptez notre utilisation des cookies. Pour en savoir plus, consultez nos{" "}
            <Link href="/conditions-generales" className="underline hover:text-blue-300">
              conditions générales
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={acceptCookies}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={declineCookies}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Refuser
          </button>
          <button onClick={() => setIsVisible(false)} className="text-gray-300 hover:text-white" aria-label="Fermer">
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
