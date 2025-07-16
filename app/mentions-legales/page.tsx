import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mentions Légales | Débouchage Plomberie Service 24",
  description: "Informations légales concernant notre entreprise de plomberie et débouchage.",
}

export default function MentionsLegalesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Mentions Légales</h1>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informations sur l'entreprise</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Dénomination sociale</strong> : Débouchage Plomberie Service 24
            </li>
            <li>
              <strong>Forme juridique</strong> : Entreprise Individuelle
            </li>
            <li>
              <strong>Adresse du siège social</strong> : Av. des dessus de Lives 2, 5101 Namur
            </li>
            <li>
              <strong>Numéro de téléphone</strong> : +32 493 41 52 83
            </li>
            <li>
              <strong>Adresse e-mail</strong> :{" "}
              <a href="mailto:contact@debouchplomb24@gmail.com">contact@debouchplomb24@gmail.com</a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Responsable de la publication</h2>
          <p>Le responsable de la publication est [Nom du responsable], gérant de Débouchage Plomberie Service 24.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Hébergeur du site</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Nom de l'hébergeur</strong> : Vercel Inc.
            </li>
            <li>
              <strong>Adresse de l'hébergeur</strong> : 340 S Lemon Ave #4133, Walnut, CA 91789
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de
            Débouchage Plomberie Service 24 ou de leurs auteurs respectifs. Toute reproduction, représentation,
            modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le
            procédé utilisé, est interdite, sauf autorisation écrite préalable de Débouchage Plomberie Service 24.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation de responsabilité</h2>
          <p>
            Débouchage Plomberie Service 24 s'efforce de fournir des informations précises et à jour sur ce site.
            Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou la pertinence des informations
            disponibles sur ce site. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa
            responsabilité exclusive.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont soumises au droit belge. Tout litige relatif à l'interprétation ou à
            l'exécution des présentes mentions légales sera de la compétence exclusive des tribunaux belges.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
