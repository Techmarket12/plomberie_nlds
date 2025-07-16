import { Check } from "lucide-react"

interface ServiceListProps {
  services: string[]
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div key={index} className="flex items-start gap-2">
          <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
          <span className="text-gray-700">{service}</span>
        </div>
      ))}
    </div>
  )
}
