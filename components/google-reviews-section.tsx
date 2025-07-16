"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function GoogleReviewsSection() {
  const [showAll, setShowAll] = useState(false)

  const reviews = [
    {
      name: "Hamza Aymaz",
      date: "il y a 3 semaines",
      rating: 5,
      comment: "Excellent plombier, je vous le recommande fortement !",
      initial: "H",
      color: "bg-blue-500",
    },
    {
      name: "Maxime Vanus",
      date: "il y a une semaine",
      rating: 5,
      comment:
        "Super service à recommandé il sont venu pour un dépannage d'une fuite tous c'est bien passer prix avantageux super",
      initial: "M",
      color: "bg-green-500",
    },
    {
      name: "Christelle Vandendris",
      date: "il y a 4 jours",
      rating: 5,
      comment:
        "Un grand merci pour votre service merci mes canalisations son déboucher et le curage des tuyaux on bien été effectué je recommande fortement votre entreprise sur chatelineau merci",
      initial: "C",
      color: "bg-purple-500",
    },
    {
      name: "Notec Maintenance",
      date: "il y a 3 semaines",
      rating: 5,
      comment:
        "J'ai appelé, et ils sont intervenus le jour même, seulement deux heures plus tard. Ils ont débouché toute mon installation, ce qui m'a beaucoup rassuré, car mon garage était complètement inondé. Leur intervention a été très professionnelle. Je recommande vivement leurs services.",
      initial: "N",
      color: "bg-orange-500",
    },
    {
      name: "Johny Gruber",
      date: "il y a 5 jours",
      rating: 5,
      comment:
        "Enterprise serieuse et un service de qualiter il son intervenue pour un debouchage evier et nous on conseiller des solutions pour que le problème ne revienne plus merci encore !",
      initial: "J",
      color: "bg-red-500",
    },
    {
      name: "Tiago Miguel Monteiro",
      date: "il y a une semaine",
      rating: 5,
      comment: "Super entreprise pour un debouchage wc a recomander",
      initial: "T",
      color: "bg-indigo-500",
    },
    {
      name: "Job Kaa",
      date: "il y a 5 jours",
      rating: 5,
      comment:
        "Il son intervenu en urgence le soir pour un débouchage canalisation et tout c'est super bien passer prix prévenue respecter à recommander",
      initial: "J",
      color: "bg-teal-500",
    },
    {
      name: "Martyna",
      date: "il y a une semaine",
      rating: 5,
      comment: "Super! Travail bien fait!",
      initial: "M",
      color: "bg-pink-500",
    },
    {
      name: "Juliette Marit",
      date: "il y a 2 semaines",
      rating: 5,
      comment: "Merci pour le service de qualité !",
      initial: "J",
      color: "bg-yellow-500",
    },
    {
      name: "Léa Hardenne",
      date: "il y a une semaine",
      rating: 5,
      comment: "Super expérience !",
      initial: "L",
      color: "bg-cyan-500",
    },
    {
      name: "Advora Marketing",
      date: "il y a 6 jours",
      rating: 5,
      comment: "Super service!",
      initial: "A",
      color: "bg-emerald-500",
    },
    {
      name: "Samantha Leroy",
      date: "il y a une semaine",
      rating: 5,
      comment: "Au top",
      initial: "S",
      color: "bg-violet-500",
    },
    {
      name: "Max",
      date: "il y a 4 jours",
      rating: 5,
      comment: "Top super",
      initial: "M",
      color: "bg-rose-500",
    },
    {
      name: "Jodie Mertens",
      date: "il y a 5 jours",
      rating: 5,
      comment:
        "Merci pour votre service ils son intervenue à domicile pour un problème de plomberie et nous on replacer les tuyaux de canalisation tout c'est super bien passer merci pour votre rapidité encore, prestation de service super polie et très explicite sur le travail je recommande fortement sur brugelette 7940",
      initial: "J",
      color: "bg-amber-500",
    },
    {
      name: "Federico Bernaldo de Quirós Díaz",
      date: "il y a 5 jours",
      rating: 5,
      comment:
        "Il son intervenue pour une intervention de fuite d eau wc service de qualiter je recomande des vrais plombier",
      initial: "F",
      color: "bg-lime-500",
    },
    {
      name: "Clementina Lol",
      date: "il y a une semaine",
      rating: 5,
      comment: "Service excellent, très professionnel !",
      initial: "C",
      color: "bg-sky-500",
    },
  ]

  const displayedReviews = showAll ? reviews : reviews.slice(0, 8)
  const totalReviews = reviews.length
  const averageRating = 5.0

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/images/google-logo.png" alt="Google" width={80} height={27} className="object-contain" />
              <span className="text-lg font-medium text-gray-700">Évaluation</span>
            </div>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="https://maps.app.goo.gl/kizreB5md6TmTF5b9" target="_blank" rel="noopener noreferrer">
                Laisser un avis
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">{averageRating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-gray-600">{totalReviews} avis</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedReviews.map((review, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-semibold`}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 line-clamp-3">{review.comment}</p>

                <Link
                  href="https://maps.app.goo.gl/kizreB5md6TmTF5b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-xs mt-2 inline-block"
                >
                  Lire la suite
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {reviews.length > 8 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              {showAll ? "Voir moins d'avis" : `Voir tous les ${totalReviews} avis`}
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Vous avez utilisé nos services ? Partagez votre expérience !</p>
          <Button asChild className="bg-green-500 hover:bg-green-600">
            <Link href="tel:+32493415283">Contactez-nous maintenant</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
