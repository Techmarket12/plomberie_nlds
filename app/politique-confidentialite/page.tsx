import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Débouchage Plomberie Service 24",
  description:
    "Consultez notre politique de confidentialité pour savoir comment nous protégeons vos données personnelles.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Politique de Confidentialité</h1>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Votre vie privée est importante pour nous. Cette politique de confidentialité explique comment nous
            collectons, utilisons, partageons et protégeons vos informations personnelles.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Collecte d'informations</h2>
          <p>Nous collectons les informations suivantes :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Informations d'identification</strong> : nom, adresse, numéro de téléphone, adresse e-mail.
            </li>
            <li>
              <strong>Informations de paiement</strong> : détails de carte de crédit ou autres informations de paiement.
            </li>
            <li>
              <strong>Informations de navigation</strong> : adresse IP, type de navigateur, pages visitées, etc.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Utilisation des informations</h2>
          <p>Nous utilisons vos informations pour :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fournir et améliorer nos services.</li>
            <li>Traiter les paiements.</li>
            <li>Communiquer avec vous concernant votre compte ou nos services.</li>
            <li>Personnaliser votre expérience sur notre site.</li>
            <li>Détecter, prévenir et traiter les activités frauduleuses ou illégales.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Partage des informations</h2>
          <p>Nous pouvons partager vos informations avec :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Prestataires de services</strong> : entreprises qui nous aident à fournir nos services (par
              exemple, traitement des paiements, hébergement web).
            </li>
            <li>
              <strong>Autorités légales</strong> : si la loi l'exige ou pour protéger nos droits.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sécurité des informations</h2>
          <p>
            Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre la
            perte, le vol, l'accès non autorisé, la divulgation, l'altération ou la destruction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Vos droits</h2>
          <p>Vous avez le droit de :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Accéder à vos informations personnelles.</li>
            <li>Rectifier vos informations personnelles.</li>
            <li>Supprimer vos informations personnelles.</li>
            <li>Vous opposer au traitement de vos informations personnelles.</li>
            <li>Limiter le traitement de vos informations personnelles.</li>
            <li>Porter plainte auprès d'une autorité de contrôle.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez contrôler
            l'utilisation des cookies dans les paramètres de votre navigateur.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications de cette politique</h2>
          <p>
            Nous pouvons modifier cette politique de confidentialité de temps à autre. Toute modification sera affichée
            sur cette page avec une date de mise à jour.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
          <p>
            Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
            <a href="mailto:contact@debouchplomb24@gmail.com">contact@debouchplomb24@gmail.com</a>
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
