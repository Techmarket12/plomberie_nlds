"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface AlternatingImageProps {
  images: string[]
  alts: string[]
  interval?: number
  title?: string
}

export default function AlternatingImage({ images, alts, interval = 2000, title }: AlternatingImageProps) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative h-56 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={alts[index] || `Image ${index + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      {title && (
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      )}
    </div>
  )
}
