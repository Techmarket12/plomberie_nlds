import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import ServiceSchema from "@/components/service-schema"
import FaqSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Que faire en cas de fuite d'eau ? | Guide pratique et conseils",
  description:
    "Découvrez comment détecter et gérer une fuite d'eau dans votre installation. Conseils pratiques, impact sur votre facture et solutions rapides par des professionnels.",
  alternates: {
    canonical: "https://debouchage-plomberie-service24.be/conseils/fuites-eau",
  },
}

export default function FuitesEauPage() {
  // FAQ pour le schéma structuré
  const faqItems = [
    {
      question: "Comment détecter une fuite d'eau cachée ?",
      answer:
        "Pour détecter une fuite cachée, relevez votre compteur d'eau le soir avant de vous coucher (en vous assurant qu'aucun appareil n'utilise d'eau), puis vérifiez à nouveau le matin. Une différence indique une fuite. Vous pouvez aussi surveiller les zones humides sur les murs ou plafonds, les moisissures inexpliquées ou une baisse de pression d'eau.",
    },
    {
      question: "Que faire en cas de fuite d'eau urgente ?",
      answer:
        "En cas de fuite urgente, fermez immédiatement le robinet d'arrêt général, coupez l'électricité si nécessaire pour éviter tout risque d'électrocution, et contactez un plombier professionnel. Essayez de récupérer l'eau qui s'écoule avec des serviettes ou des récipients pour limiter les dégâts.",
    },
    {
      question: "Combien coûte une fuite d'eau non réparée ?",
      answer:
        "Une fuite non réparée peut coûter très cher : un simple robinet qui goutte représente environ 224€ par an, un mince filet d'eau en continu environ 896€ par an, et une chasse d'eau qui fuit peut atteindre 1402€ par an. Sans compter les dégâts potentiels à votre habitation.",
    },
    {
      question: "Qui est responsable en cas de fuite d'eau ?",
      answer:
        "La responsabilité dépend de l'emplacement de la fuite. Si elle se situe avant votre compteur, c'est généralement la compagnie des eaux qui est responsable. Si elle est après le compteur, dans votre installation privée, vous êtes responsable. Dans un immeuble, certaines fuites peuvent relever de la copropriété.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire en cas de fuite d'eau sur votre installation ?
            </h1>
            <p className="text-xl mb-8">
              Votre consommation est anormalement élevée ? Découvrez comment détecter et gérer les fuites d'eau pour
              éviter les mauvaises surprises sur votre facture.
            </p>
          </div>
        </div>
      </div>

      {/* Image principale */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/fuite_eau.jpg"
              alt="Plombier réparant une fuite d'eau sous un évier"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-lg font-semibold">Une intervention rapide peut vous éviter des dégâts importants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Détecter une fuite d'eau : les bons gestes</h2>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">1. Surveiller son compteur</h3>
              <p className="mb-4">
                Faites régulièrement le relevé de votre compteur avant d'aller vous coucher. Assurez-vous que personne
                n'utilise d'eau pendant la nuit et que tous les appareils consommant de l'eau sont éteints
                (lave-vaisselle, lave-linge, etc.).
              </p>
              <p className="mb-4">
                Le lendemain matin, relevez à nouveau les chiffres. Une différence indique probablement une fuite sur
                votre installation. Dans ce cas, inspectez minutieusement toute votre installation.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                <p className="font-medium">
                  Conseil de pro : Nous recommandons d'effectuer ce contrôle plusieurs fois par an pour détecter
                  rapidement toute anomalie.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">2. Surveiller son boiler</h3>
              <p className="mb-4">
                Vérifiez l'état de la soupape de sécurité de votre boiler. Lorsque la pression interne dépasse la limite
                de réglage, cette soupape s'ouvre pour laisser s'écouler un petit volume d'eau.
              </p>
              <p className="mb-4">
                Si cette soupape s'encrasse ou s'use, elle peut rester bloquée en position ouverte, provoquant une fuite
                continue. Assurez-vous que l'écoulement d'eau soit visible pour faciliter la détection d'un problème.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                <p className="font-medium">
                  Important : Pour réparer ce type de fuite, contactez rapidement votre installateur professionnel.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">3. Surveiller sa chasse d'eau</h3>
              <p className="mb-4">
                Après avoir tiré la chasse d'eau et que le réservoir est rempli, vérifiez si l'écoulement d'eau le long
                des parois s'est bien arrêté. Un écoulement persistant indique un mécanisme défectueux qui nécessite un
                remplacement.
              </p>
              <p className="mb-4">
                Si vous ne parvenez pas à localiser la source d'une fuite malgré ces vérifications, n'hésitez pas à
                contacter un plombier professionnel sans tarder.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Conséquences d'une fuite d'eau sur votre facture</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center">
                <div className="mb-4 h-48 relative overflow-hidden rounded-lg">
                  <Image src="/images/robinet_qui_goute.jpg" alt="Robinet qui goutte" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Robinet qui goutte</h3>
                <p className="text-gray-600 mb-2">4 litres/heure</p>
                <p className="text-gray-600 mb-2">35 m³ par an</p>
                <p className="text-2xl font-bold text-red-600 mt-4">224 € / an</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center">
                <div className="mb-4 h-48 relative overflow-hidden rounded-lg">
                  <Image src="/images/filet_eau_continu.jpg" alt="Filet d'eau continu" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Filet d'eau continu</h3>
                <p className="text-gray-600 mb-2">16 litres/heure</p>
                <p className="text-gray-600 mb-2">140 m³ par an</p>
                <p className="text-2xl font-bold text-red-600 mt-4">896 € / an</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center">
                <div className="mb-4 h-48 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/chasse_eau_qui_fuit.jpg"
                    alt="Chasse d'eau qui fuit"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Chasse d'eau qui fuit</h3>
                <p className="text-gray-600 mb-2">25 litres/heure</p>
                <p className="text-gray-600 mb-2">219 m³ par an</p>
                <p className="text-2xl font-bold text-red-600 mt-4">1 402 € / an</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Infos-clés à retenir</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Même les petites fuites peuvent avoir un impact significatif sur votre facture d'eau</li>
                <li>Une chasse d'eau qui fuit est la plus coûteuse des fuites courantes</li>
                <li>La détection précoce des fuites peut vous faire économiser des centaines d'euros</li>
                <li>Les fuites non traitées peuvent également causer des dommages structurels à votre habitation</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Questions fréquentes</h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="bg-blue-800 text-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour une fuite d'eau ?</h2>
              <p className="text-xl mb-6">
                Nos plombiers professionnels sont disponibles 24h/24 et 7j/7 pour intervenir rapidement et résoudre
                votre problème de fuite.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Nous contacter
                </Link>
                <Link
                  href="tel:+32493415283"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Appeler maintenant
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Schémas structurés pour le SEO */}
      <ServiceSchema
        name="Détection et réparation de fuites d'eau"
        description="Service professionnel de détection et réparation de fuites d'eau. Intervention rapide, diagnostic précis et solutions durables pour tous types de fuites."
        price="À partir de 85€"
        imageUrl="/images/detection-fuite.png"
      />

      <FaqSchema faqs={faqItems} />
    </div>
  )
}
