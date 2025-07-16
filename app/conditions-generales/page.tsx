import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conditions Générales | Plombier Professionnel",
  description:
    "Consultez nos conditions générales de service pour nos prestations de plomberie et débouchage en Belgique.",
}

export default function ConditionsGeneralesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Conditions Générales</h1>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Définitions</h2>
          <p>Dans les présentes conditions générales, les termes suivants ont la signification indiquée ci-après :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Prestataire</strong> : l'entreprise de plomberie fournissant les services.
            </li>
            <li>
              <strong>Client</strong> : toute personne physique ou morale qui fait appel aux services du Prestataire.
            </li>
            <li>
              <strong>Services</strong> : tous les travaux de plomberie, débouchage, rénovation et autres prestations
              proposés par le Prestataire.
            </li>
            <li>
              <strong>Devis</strong> : document écrit détaillant les travaux à effectuer et leur coût estimé.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Application des conditions générales</h2>
          <p>
            Les présentes conditions générales s'appliquent à toutes les offres, devis et contrats conclus entre le
            Prestataire et le Client. Toute commande de Services implique l'acceptation sans réserve par le Client des
            présentes conditions générales.
          </p>
          <p>
            Aucune condition particulière ne peut prévaloir sur les présentes conditions générales, sauf acceptation
            formelle et écrite du Prestataire.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Devis et commandes</h2>
          <p>
            Tous les devis émis par le Prestataire sont valables pour une durée de 30 jours à compter de leur date
            d'émission, sauf mention contraire.
          </p>
          <p>
            Les devis sont établis sur la base des informations fournies par le Client. Toute modification des travaux
            non prévue dans le devis initial fera l'objet d'un devis complémentaire.
          </p>
          <p>
            La commande est considérée comme définitive après acceptation écrite du devis par le Client et versement de
            l'acompte éventuel.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Prix et paiement</h2>
          <p>
            Les prix sont indiqués en euros et hors TVA, sauf mention contraire. La TVA applicable est celle en vigueur
            au jour de la facturation.
          </p>
          <p>Sauf convention contraire, les factures sont payables au comptant, à réception.</p>
          <p>
            En cas de retard de paiement, des pénalités de retard seront appliquées au taux légal en vigueur, sans qu'un
            rappel soit nécessaire.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Exécution des travaux</h2>
          <p>
            Le Prestataire s'engage à exécuter les travaux conformément aux règles de l'art et aux normes en vigueur.
          </p>
          <p>
            Le Client s'engage à fournir au Prestataire l'accès nécessaire aux locaux et installations pour l'exécution
            des travaux.
          </p>
          <p>
            Les délais d'exécution sont donnés à titre indicatif et ne constituent pas un engagement ferme du
            Prestataire, sauf stipulation contraire.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Garanties</h2>
          <p>Les travaux réalisés par le Prestataire sont garantis conformément à la législation en vigueur.</p>
          <p>
            La garantie ne s'applique pas en cas de mauvaise utilisation, d'entretien défectueux ou de modification des
            installations par le Client ou un tiers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Responsabilité</h2>
          <p>
            Le Prestataire est responsable des dommages directs causés au Client du fait de l'exécution défectueuse des
            Services.
          </p>
          <p>
            Le Prestataire ne pourra être tenu responsable des dommages indirects ou immatériels subis par le Client.
          </p>
          <p>
            La responsabilité du Prestataire ne peut être engagée en cas de force majeure ou d'événements indépendants
            de sa volonté.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Droit de rétractation</h2>
          <p>
            Conformément à la législation en vigueur, le Client consommateur dispose d'un délai de 14 jours pour exercer
            son droit de rétractation à compter de la conclusion du contrat, sans avoir à justifier de motifs ni à payer
            de pénalités.
          </p>
          <p>
            Le droit de rétractation ne s'applique pas lorsque les Services ont été pleinement exécutés avant la fin du
            délai de rétractation avec l'accord exprès du Client.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Protection des données personnelles</h2>
          <p>
            Le Prestataire collecte et traite les données personnelles du Client conformément à la réglementation
            applicable en matière de protection des données personnelles.
          </p>
          <p>
            Les données collectées sont utilisées uniquement pour la gestion des commandes, la facturation et le service
            après-vente.
          </p>
          <p>
            Le Client dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles, qu'il
            peut exercer en contactant le Prestataire.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Droit applicable et juridiction compétente</h2>
          <p>Les présentes conditions générales sont soumises au droit belge.</p>
          <p>
            En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le litige sera soumis
            aux tribunaux compétents de Belgique.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Dispositions diverses</h2>
          <p>
            Si une ou plusieurs dispositions des présentes conditions générales sont tenues pour non valides ou
            déclarées comme telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive
            d'une juridiction compétente, les autres dispositions garderont toute leur force et leur portée.
          </p>
          <p>
            Le fait pour le Prestataire de ne pas se prévaloir à un moment donné de l'une des dispositions des présentes
            conditions générales ne peut être interprété comme valant renonciation à s'en prévaloir ultérieurement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Quels sont vos délais d'intervention ?</h3>
              <p>Nous intervenons généralement dans les 45 minutes suivant votre appel.</p>
            </div>
            <div>
              <h3 className="font-semibold">Vos devis sont-ils gratuits ?</h3>
              <p>Oui, tous nos devis sont gratuits et sans engagement.</p>
            </div>
            <div>
              <h3 className="font-semibold">Quelle est la durée de la garantie sur vos travaux ?</h3>
              <p>Tous nos travaux sont garantis 12 mois.</p>
            </div>
          </div>
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
