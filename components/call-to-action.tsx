import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, FileText } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Prêt à rénover vos sanitaires ?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement. Notre équipe de professionnels est
            à votre disposition pour répondre à toutes vos questions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-blue-500 hover:bg-blue-400 min-w-[200px] flex items-center justify-center gap-2"
            >
              <Link href="tel:+32493415283">
                <Phone className="h-5 w-5" />
                Appeler Maintenant
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 min-w-[200px] flex items-center justify-center gap-2"
            >
              <Link href="/contact">
                <FileText className="h-5 w-5" />
                Demander un Devis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
