"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Phone, ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPlomberie, setShowPlomberie] = useState(false)
  const [showDebouchage, setShowDebouchage] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [showZones, setShowZones] = useState(false)
  const [showConseils, setShowConseils] = useState(false)

  const closeAllMenus = () => {
    setShowServices(false)
    setShowPlomberie(false)
    setShowDebouchage(false)
    setShowZones(false)
    setShowConseils(false)
  }

  // Fonction pour naviguer directement vers une page
  const goToPage = (url: string) => {
    window.location.href = url
  }

  // Ajouter un effet pour fermer les menus lors d'un clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".services-menu") && !target.closest(".services-button")) {
        setShowServices(false)
      }
      if (!target.closest(".zones-menu") && !target.closest(".zones-button")) {
        setShowZones(false)
      }
      if (!target.closest(".conseils-menu") && !target.closest(".conseils-button")) {
        setShowConseils(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-H-sur-blanc.png-Rq7ya5nseMxuPd2MfHvoEoPLfWtXa2.webp"
            alt="Débouchage Plomberie Service Logo"
            width={180}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-base font-medium text-gray-800 hover:text-blue-500">
              Accueil
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-base font-medium text-gray-800 hover:text-blue-500 services-button"
                onClick={() => setShowServices(!showServices)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {showServices && (
                <div className="absolute left-0 top-full mt-2 w-[600px] rounded-md bg-white p-4 shadow-lg services-menu">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Link
                        href="/services/plomberie"
                        className="block rounded-md bg-blue-500 p-4 text-white"
                        onClick={() => setShowServices(false)}
                      >
                        <h3 className="text-lg font-bold">Plomberie</h3>
                        <p className="mt-1 text-sm text-blue-100">
                          Dépannage, rénovation et entretien de vos installations.
                        </p>
                      </Link>
                      <div className="mt-2 space-y-1 pl-2">
                        <Link
                          href="/services/plomberie/depannage-fuites"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Dépannage Fuites
                        </Link>
                        <Link
                          href="/services/plomberie/depannage-sanitaires"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Dépannage Sanitaires
                        </Link>
                        <Link
                          href="/services/plomberie/depannage-chauffage"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Dépannage Chauffage
                        </Link>
                        <Link
                          href="/services/plomberie/renovation-sanitaires"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Rénovation Sanitaires
                        </Link>
                        <Link
                          href="/services/plomberie/entretien"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Entretien
                        </Link>
                        <Link
                          href="/services/plomberie/robinetterie"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Service de robinetterie
                        </Link>
                        <Link
                          href="/services/plomberie/boiler-chauffe-eau"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Service de boiler / chauffe‑eau
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link
                        href="/services/debouchage"
                        className="block rounded-md bg-blue-500 p-4 text-white"
                        onClick={() => setShowServices(false)}
                      >
                        <h3 className="text-lg font-bold">Débouchage</h3>
                        <p className="mt-1 text-sm text-blue-100">
                          Solutions professionnelles pour tous vos problèmes de canalisations.
                        </p>
                      </Link>
                      <div className="mt-2 space-y-1 pl-2">
                        <Link
                          href="/services/debouchage/wc-eviers"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Débouchage WC & Éviers
                        </Link>
                        <Link
                          href="/services/debouchage/canalisations"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Débouchage Canalisations
                        </Link>
                        <Link
                          href="/services/debouchage/inspection-camera"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Inspection Caméra
                        </Link>
                        <Link
                          href="/services/debouchage/egouts"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Service de débouchage égout
                        </Link>
                        <Link
                          href="/services/debouchage/curage-entretien"
                          className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                          onClick={() => setShowServices(false)}
                        >
                          Service de curage et entretien
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center text-base font-medium text-gray-800 hover:text-blue-500 zones-button"
                onClick={() => setShowZones(!showZones)}
              >
                Zones d'intervention <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {showZones && (
                <div className="absolute left-0 top-full mt-2 w-[300px] rounded-md bg-white p-4 shadow-lg zones-menu">
                  <div className="space-y-2">
                    <Link
                      href="/zones-intervention"
                      className="block rounded-md bg-blue-500 p-2 text-white"
                      onClick={() => setShowZones(false)}
                    >
                      <h3 className="text-lg font-bold">Toutes nos zones</h3>
                    </Link>
                    <Link
                      href="/zones-intervention/namur"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                      onClick={() => setShowZones(false)}
                    >
                      Namur et alentours
                    </Link>
                    <Link
                      href="/zones-intervention/charleroi"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                      onClick={() => setShowZones(false)}
                    >
                      Charleroi et alentours
                    </Link>
                    <Link
                      href="/zones-intervention/liege"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                      onClick={() => setShowZones(false)}
                    >
                      Liège et alentours
                    </Link>
                    <Link
                      href="/zones-intervention/verviers"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                      onClick={() => setShowZones(false)}
                    >
                      Verviers et alentours
                    </Link>
                    <Link
                      href="/zones-intervention/mons"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                      onClick={() => setShowZones(false)}
                    >
                      Mons et alentours
                    </Link>
                    <Link
                      href="/zones-intervention/brabant"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                      onClick={() => setShowZones(false)}
                    >
                      Brabant wallon et flamand
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Conseils Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-base font-medium text-gray-800 hover:text-blue-500 conseils-button"
                onClick={() => setShowConseils(!showConseils)}
              >
                Conseils <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {showConseils && (
                <div className="absolute left-0 top-full mt-2 w-[300px] rounded-md bg-white p-4 shadow-lg conseils-menu">
                  <div className="space-y-2">
                    <Link
                      href="/conseils/fuites-eau"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                      onClick={() => setShowConseils(false)}
                    >
                      Fuites d'eau
                    </Link>
                    {/* Emplacement pour d'autres pages de conseils à l'avenir */}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-base font-medium text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden bg-blue-500 hover:bg-blue-600 md:flex">
            <Link href="tel:+32493415283">
              <Phone className="mr-2 h-4 w-4" />
              +32 493 41 52 83
            </Link>
          </Button>

          {/* Mobile Menu - Sans transition */}
          {isOpen ? (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
              <div className="fixed right-0 top-0 h-full w-[300px] overflow-auto bg-white p-6 sm:w-[400px]">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-H-sur-blanc.png-Rq7ya5nseMxuPd2MfHvoEoPLfWtXa2.webp"
                        alt="Débouchage Plomberie Service Logo"
                        width={150}
                        height={40}
                      />
                    </Link>
                    <Button variant="outline" size="icon" onClick={() => setIsOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <span className="sr-only">Fermer le menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-lg font-medium transition-colors hover:text-blue-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Accueil
                    </Link>

                    {/* Mobile Services Menu */}
                    <div>
                      <button
                        className="flex w-full items-center justify-between text-lg font-medium"
                        onClick={() => setShowPlomberie(!showPlomberie)}
                      >
                        <span>Plomberie</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${showPlomberie ? "rotate-180" : ""}`} />
                      </button>

                      {showPlomberie && (
                        <div className="mt-2 space-y-2 pl-4">
                          <Link
                            href="/services/plomberie"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Tous les services plomberie
                          </Link>
                          <Link
                            href="/services/plomberie/depannage-fuites"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Dépannage Fuites
                          </Link>
                          <Link
                            href="/services/plomberie/depannage-sanitaires"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Dépannage Sanitaires
                          </Link>
                          <Link
                            href="/services/plomberie/depannage-chauffage"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Dépannage Chauffage
                          </Link>
                          <Link
                            href="/services/plomberie/renovation-sanitaires"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Rénovation Sanitaires
                          </Link>
                          <Link
                            href="/services/plomberie/entretien"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Entretien
                          </Link>
                          <Link
                            href="/services/plomberie/robinetterie"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Service de robinetterie
                          </Link>
                          <Link
                            href="/services/plomberie/boiler-chauffe-eau"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Service de boiler / chauffe‑eau
                          </Link>
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        className="flex w-full items-center justify-between text-lg font-medium"
                        onClick={() => setShowDebouchage(!showDebouchage)}
                      >
                        <span>Débouchage</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${showDebouchage ? "rotate-180" : ""}`} />
                      </button>

                      {showDebouchage && (
                        <div className="mt-2 space-y-2 pl-4">
                          <Link
                            href="/services/debouchage"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Tous les services débouchage
                          </Link>
                          <Link
                            href="/services/debouchage/wc-eviers"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Débouchage WC & Éviers
                          </Link>
                          <Link
                            href="/services/debouchage/canalisations"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Débouchage Canalisations
                          </Link>
                          <Link
                            href="/services/debouchage/inspection-camera"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Inspection Caméra
                          </Link>
                          <Link
                            href="/services/debouchage/egouts"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Service de débouchage égout
                          </Link>
                          <Link
                            href="/services/debouchage/curage-entretien"
                            className="block text-base transition-colors hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Service de curage et entretien
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Lien direct vers Fuites d'eau avec icône */}
                    <Button
                      variant="ghost"
                      className="justify-start p-0 h-auto text-lg font-medium transition-colors hover:text-blue-500 hover:bg-transparent"
                      onClick={() => {
                        setIsOpen(false)
                        setTimeout(() => {
                          goToPage("/conseils/fuites-eau")
                        }, 10)
                      }}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 mr-2 flex items-center justify-center bg-[#00b8e6] rounded-md">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-csxVGrQBuAM6x9wasJA0SngFt8ZlxX.png"
                            alt="Icône robinet"
                            width={24}
                            height={24}
                          />
                        </div>
                        Fuites d'eau
                      </div>
                    </Button>

                    {/* Lien direct vers la page HTML statique pour les zones */}
                    <a
                      href="/zones-menu.html"
                      className="text-lg font-medium transition-colors hover:text-blue-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Zones d'intervention
                    </a>

                    <Link
                      href="/contact"
                      className="text-lg font-medium transition-colors hover:text-blue-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                      <Link href="tel:+32493415283" onClick={() => setIsOpen(false)}>
                        <Phone className="mr-2 h-4 w-4" />
                        +32 493 41 52 83
                      </Link>
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Intervention en moins de 45 minutes
                      <br />
                      Disponible 24h/24 et 7j/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <Button variant="outline" size="icon" className="lg:hidden bg-transparent" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
