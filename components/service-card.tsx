import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Wrench, Construction, PlugIcon as PipeValve, Search, Settings, AlarmClock } from "lucide-react"
import type { JSX } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
  highlight?: boolean
}

export default function ServiceCard({ title, description, icon, link, highlight = false }: ServiceCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "Wrench":
        return <Wrench className="h-10 w-10" />
      case "Construction":
        return <Construction className="h-10 w-10" />
      case "PipeValve":
        return <PipeValve className="h-10 w-10" />
      case "Search":
        return <Search className="h-10 w-10" />
      case "Settings":
        return <Settings className="h-10 w-10" />
      case "AlarmClock":
        return <AlarmClock className="h-10 w-10" />
      default:
        return <Wrench className="h-10 w-10" />
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg p-6 shadow-md transition-transform hover:scale-105",
        highlight ? "bg-blue-50 border border-blue-200" : "bg-white",
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-16 w-16 items-center justify-center rounded-full",
          highlight ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-700",
        )}
      >
        {getIcon()}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-6 flex-grow text-gray-600">{description}</p>
      <Button asChild className={cn(highlight ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-800 hover:bg-gray-700")}>
        <Link href={link}>En savoir plus</Link>
      </Button>
    </div>
  )
}
