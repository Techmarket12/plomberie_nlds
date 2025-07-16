"use client"

import type React from "react"

import { Phone } from "lucide-react"

interface PhoneLinkProps {
  phoneNumber: string
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
  iconSize?: number
}

export default function PhoneLink({
  phoneNumber,
  className = "",
  children,
  showIcon = false,
  iconSize = 16,
}: PhoneLinkProps) {
  // Formater le numéro pour l'affichage si nécessaire
  const displayNumber = children || phoneNumber

  // Formater le numéro pour l'URL tel:
  const formattedNumber = phoneNumber.replace(/\s+/g, "")
  const telUrl = `tel:${formattedNumber}`

  // Fonction qui sera appelée lors du clic
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Appeler la fonction de conversion Google Ads
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      e.preventDefault()
      window.gtag_report_conversion(telUrl)
    }
  }

  return (
    <a href={telUrl} className={className} onClick={handleClick} aria-label={`Appeler le ${phoneNumber}`}>
      {showIcon && <Phone size={iconSize} className="mr-2 inline-block" />}
      {displayNumber}
    </a>
  )
}
