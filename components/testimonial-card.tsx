import { Star, StarHalf } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  testimonial: string
}

export default function TestimonialCard({ name, location, rating, testimonial }: TestimonialCardProps) {
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-gray-300" />)
    }

    return stars
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">{renderStars()}</div>
        <div className="flex items-center gap-1">
          <Image src="/images/google-logo.png" alt="Avis Google" width={16} height={16} className="opacity-80" />
          <span className="text-xs text-gray-500">Google</span>
        </div>
      </div>
      <p className="mb-4 italic text-gray-600">"{testimonial}"</p>
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  )
}
