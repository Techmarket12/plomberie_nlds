import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Clock, Shield, Phone } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import ServiceSchema from "@/components/service-schema"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Dépannage WC | Débouchage Plomberie Service 24",
  description:
    "Service professionnel de dépannage WC à Namur. Réparation de chasse d'eau, remplacement de mécanisme, débouchage. Intervention rapide en moins de 45 minutes.",
}

export default function DepannageWCPage() {
  return (
    <div className="flex flex-col">
      <ServiceSchema
        name="Dépannage WC"
        description="Service professionnel de dépannage WC. Réparation de chasse d'eau, remplacement de mécanisme, débouchage. Intervention rapide en moins de 45 minutes."
        url="https://debouchage-plomberie-service24.be/services/plomberie/depannage-wc"
        imageUrl="/images/reparation-wc.png"
        serviceType="Plomberie"
      />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Dépannage</span>
              <span className="block text-blue-400">WC</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Réparation rapide de tous problèmes de WC. Intervention en moins de 45 minutes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href="tel:+32493415283">Appeler Maintenant</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
              >
                <Link href="/contact">Demander un Devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Nos Services de Dépannage WC</h2>
              <p className="mt-4 text-lg text-gray-600">
                Nous intervenons rapidement pour réparer tous types de problèmes de WC dans votre habitation. Notre
                équipe de plombiers professionnels dispose des compétences et du matériel nécessaires pour résoudre
                efficacement votre problème.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-lg bg-gray-50 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800">Types de problèmes que nous réparons</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 text-blue-500" />
                      <span>Chasse d'eau qui coule en permanence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 text-blue-500" />
                      <span>Chasse d'eau qui ne se remplit pas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 text-blue-500" />
                      <span>WC bouché</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 text-blue-500" />
                      <span>Fuite au niveau du joint de la cuvette</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 text-blue-500" />
                      <span>Remplacement de mécanisme de chasse d'eau</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 text-blue-500" />
                      <span>Installation de WC suspendu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 text-blue-500" />
                      <span>Remplacement complet de WC</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-blue-50 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-blue-800">Pourquoi nous choisir ?</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <Clock className="mt-1 h-5 w-5 text-blue-500" />
                      <div>
                        <span className="font-semibold">Intervention rapide</span>
                        <p className="text-gray-700">Nous intervenons en moins de 45 minutes après votre appel.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="mt-1 h-5 w-5 text-blue-500" />
                      <div>
                        <span className="font-semibold">Garantie 12 mois</span>
                        <p className="text-gray-700">Toutes nos réparations sont garanties 12 mois.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 text-blue-500" />
                      <div>
                        <span className="font-semibold">Devis transparent</span>
                        <p className="text-gray-700">Tarifs clairs et sans surprise avant toute intervention.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="relative mb-8 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/services/depannage_plomberie.webp"
                  alt="Réparation de WC par un plombier professionnel"
                  width={600}
                  height={400}
                  className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Réparation Professionnelle</h3>
                  <p className="mt-2 text-gray-200">
                    Nos techniciens sont formés pour réparer tous types de problèmes de WC rapidement et efficacement.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800">Notre processus d'intervention</h3>

                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Diagnostic précis</h4>
                      <p className="text-gray-600">
                        Nous identifions la source exacte du problème pour proposer la solution la plus adaptée.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Devis détaillé</h4>
                      <p className="text-gray-600">
                        Nous vous proposons un devis clair et transparent avant de commencer les travaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Réparation durable</h4>
                      <p className="text-gray-600">
                        Nous réparons votre WC avec des matériaux de qualité pour une solution durable.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                      <span className="text-lg font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Vérification finale</h4>
                      <p className="text-gray-600">
                        Nous testons l'installation pour nous assurer que le problème est complètement résolu.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-gray-50 p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Conseil de pro</h4>
                  <p className="mt-2 text-gray-600">
                    En cas de WC bouché, évitez d'utiliser des produits chimiques agressifs qui peuvent endommager vos
                    canalisations. Faites appel à un professionnel pour un débouchage efficace et sans risque.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-blue-500 p-6 text-white shadow-md">
                <h3 className="text-xl font-bold">Besoin d'une intervention urgente ?</h3>
                <p className="mt-2">Notre équipe est disponible 24h/24 et 7j/7 pour réparer votre WC en urgence.</p>
                <Button size="lg" variant="secondary" asChild className="mt-4 w-full">
                  <Link href="tel:+32493415283">
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler Maintenant
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">Ce Que Disent Nos Clients</h2>
            <p className="mt-4 text-xl text-gray-600">Témoignages de clients satisfaits de nos services</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Michel Durand</h3>
                  <p className="text-sm text-gray-500">Namur</p>
                </div>
              </div>
              <div className="mt-4 flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4 text-gray-600">
                "Ma chasse d'eau coulait en permanence. Ils sont intervenus rapidement et ont remplacé le mécanisme
                défectueux. Service rapide et prix raisonnable. Je recommande vivement."
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Sophie Martin</h3>
                  <p className="text-sm text-gray-500">Charleroi</p>
                </div>
              </div>
              <div className="mt-4 flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4 text-gray-600">
                "J'ai fait appel à eux pour l'installation d'un nouveau WC suspendu. Travail impeccable, propre et
                soigné. Le technicien était très professionnel et a pris le temps de m'expliquer le fonctionnement."
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Laurent Dubois</h3>
                  <p className="text-sm text-gray-500">Liège</p>
                </div>
              </div>
              <div className="mt-4 flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4 text-gray-600">
                "WC bouché un dimanche soir, ils sont intervenus en 30 minutes. Débouchage efficace et conseils pour
                éviter que ça se reproduise. Service d'urgence vraiment appréciable !"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
