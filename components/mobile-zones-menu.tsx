"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface MobileZonesMenuProps {
  onClose: () => void
}

export default function MobileZonesMenu({ onClose }: MobileZonesMenuProps) {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    // Fermer le menu après un court délai pour permettre au clic de se terminer
    setTimeout(() => {
      onClose()
      router.push(path)
    }, 100)
  }

  return (
    <div className="mt-2 space-y-2 pl-4 bg-gray-50 rounded-md p-2">
      <Button
        variant="ghost"
        className="w-full justify-start font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 h-auto"
        onClick={() => handleNavigation("/zones-intervention")}
      >
        Toutes nos zones
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 h-auto"
        onClick={() => handleNavigation("/zones-intervention/namur")}
      >
        Namur et alentours
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 h-auto"
        onClick={() => handleNavigation("/zones-intervention/charleroi")}
      >
        Charleroi et alentours
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 h-auto"
        onClick={() => handleNavigation("/zones-intervention/liege")}
      >
        Liège et alentours
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 h-auto"
        onClick={() => handleNavigation("/zones-intervention/verviers")}
      >
        Verviers et alentours
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 h-auto"
        onClick={() => handleNavigation("/zones-intervention/mons")}
      >
        Mons et alentours
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 h-auto"
        onClick={() => handleNavigation("/zones-intervention/brabant")}
      >
        Brabant wallon et flamand
      </Button>
    </div>
  )
}
