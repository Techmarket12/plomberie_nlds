"use client"

import { useEffect } from "react"

export default function PreloadImages() {
  useEffect(() => {
    // Précharger l'image du héros
    const preloadLink = document.createElement("link")
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    preloadLink.href = "/images/hero-plumber.webp"
    preloadLink.type = "image/webp"
    document.head.appendChild(preloadLink)
  }, [])

  return null
}
