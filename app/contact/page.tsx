import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Contact | Débouchage Plomberie Service 24",
  description:
    "Contactez notre équipe de plombiers professionnels pour tous vos besoins de débouchage et plomberie en Belgique. Intervention rapide en moins de 45 minutes.",
}

export default function ContactPage() {
  const faqs = [
    {
      question: "Quel est votre délai d'intervention pour un dépannage plomberie urgent ?",
      answer:
        "Nous garantissons une intervention en moins de 45 minutes après votre appel, quelle que soit l'heure du jour ou de la nuit, même pour les urgences comme une fuite d'eau ou un WC bouché.",
    },
    {
      question: "Quels sont vos tarifs pour réparer une fuite d'eau ou un tuyau cassé ?",
      answer:
        "Nos tarifs dépendent du type d'intervention. Nous vous fournissons toujours un devis gratuit et transparent avant de commencer les travaux de réparation de fuite ou de tuyau cassé.",
    },
    {
      question: "Intervenez-vous pour les problèmes de canalisation dans toute la Belgique ?",
      answer:
        "Oui, nous intervenons dans toute la Belgique : Namur, Charleroi, Liège, Verviers, Mons, Brabant wallon et Brabant flamand pour tous vos problèmes de canalisation.",
    },
    {
      question: "Proposez-vous des services d'entretien pour éviter les fuites de robinet ou de chasse d'eau ?",
      answer:
        "Oui, nous proposons des contrats d'entretien personnalisés pour les particuliers et les professionnels afin de prévenir les problèmes comme les fuites de robinet ou de chasse d'eau.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-[#111827] text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">CONTACT</h1>
          <div className="text-sm breadcrumbs">
            <ul className="flex">
              <li>
                <Link href="/" className="text-blue-300 hover:text-blue-100">
                  Accueil
                </Link>
              </li>
              <li className="before:content-['>'] before:mx-2">Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Formulaire de rappel - Placé en haut */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-lg mb-6">Notre équipe à votre disposition</p>
            <p className="max-w-2xl mx-auto text-gray-600">
              Si vous avez une question ou souhaitez demander un devis pour un débouchage ou la vidange de votre fosse
              septique, n&apos;hésitez pas à nous contacter! Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
          <ContactForm />

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Régions</h3>
              <p className="text-gray-600">
                Région Bruxelles
                <br />
                Région Wallonie
                <br />
                Province de Namur
                <br />
                Province de Liège
                <br />
                Province du Hainaut
                <br />
                Brabant wallon et flamand
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:aquadeb22@gmail.comm" className="text-blue-500 hover:underline">
                aquadeb22@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Téléphone</h3>
              <a href="tel:+32493415283" className="text-blue-500 hover:underline text-lg font-bold">
                +32 493 41 52 83
              </a>
              <p className="text-gray-600 mt-1">7j/7 et 24h/24</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold">Nos Horaires</h3>
              </div>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Lundi</td>
                    <td className="py-2 text-right font-medium">24/24</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Mardi</td>
                    <td className="py-2 text-right font-medium">24/24</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Mercredi</td>
                    <td className="py-2 text-right font-medium">24/24</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Jeudi</td>
                    <td className="py-2 text-right font-medium">24/24</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Vendredi</td>
                    <td className="py-2 text-right font-medium">24/24</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Samedi</td>
                    <td className="py-2 text-right font-medium">24/24</td>
                  </tr>
                  <tr>
                    <td className="py-2">Dimanche</td>
                    <td className="py-2 text-right font-medium">24/24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Notre zone d'intervention</h3>

          <div className="mb-8">
            <p className="mb-4">
              Nous intervenons dans votre ville avec des équipes de plombier locales près de chez vous pour une intervention rapide ou que vous soyez
            </p>

            <div className="flex justify-center mb-8">
              <img
                src="/images/belgium-map-services.png"
                alt="Carte des zones d'intervention en Belgique - Services de plomberie et débouchage 24h/24"
                className="max-w-full h-auto rounded-lg shadow-md"
                style={{ maxHeight: "500px" }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-bold">Province de Namur</h4>
                <p className="text-sm text-gray-600">Siège principal</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-bold">Province de Liège</h4>
                <p className="text-sm text-gray-600">entrepo</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-bold">Province du Hainaut</h4>
                <p className="text-sm text-gray-600">entrepo</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-bold">Bruxelles-Capitale</h4>
                <p className="text-sm text-gray-600">entrepo</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-bold">Brabant wallon</h4>
                <p className="text-sm text-gray-600">entrepo</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-bold">Brabant flamand</h4>
                <p className="text-sm text-gray-600">entrepo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Questions Fréquentes</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call Section */}
      <section className="py-8 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Besoin d'une intervention urgente ?</h3>
              <p>Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences.</p>
            </div>
            <a
              href="tel:+32493415283"
              className="mt-4 md:mt-0 px-6 py-3 bg-white text-green-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
