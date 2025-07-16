"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

type ServiceStat = {
  region: string
  interventions: number
  satisfaction: number
  color: string
}

export default function ServiceAreaStats() {
  const [activeTab, setActiveTab] = useState<"interventions" | "satisfaction">("interventions")

  const stats: ServiceStat[] = [
    { region: "Namur", interventions: 1250, satisfaction: 98, color: "#3B82F6" },
    { region: "Liège", interventions: 980, satisfaction: 97, color: "#2563EB" },
    { region: "Hainaut", interventions: 870, satisfaction: 96, color: "#1D4ED8" },
    { region: "Bruxelles", interventions: 1420, satisfaction: 95, color: "#1E40AF" },
    { region: "Brabant W.", interventions: 760, satisfaction: 98, color: "#1E3A8A" },
    { region: "Brabant F.", interventions: 680, satisfaction: 94, color: "#3B82F6" },
  ]

  const data = stats.map((stat) => ({
    name: stat.region,
    value: activeTab === "interventions" ? stat.interventions : stat.satisfaction,
    color: stat.color,
  }))

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-gray-800">Statistiques par région</h3>
        <div className="flex rounded-md border border-gray-300">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "interventions" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            } rounded-l-md transition-colors`}
            onClick={() => setActiveTab("interventions")}
          >
            Interventions
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "satisfaction" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            } rounded-r-md transition-colors`}
            onClick={() => setActiveTab("satisfaction")}
          >
            Satisfaction (%)
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#6B7280" }} tickLine={false} axisLine={{ stroke: "#E5E7EB" }} />
            <YAxis
              tick={{ fill: "#6B7280" }}
              tickLine={false}
              axisLine={{ stroke: "#E5E7EB" }}
              domain={activeTab === "satisfaction" ? [90, 100] : [0, "auto"]}
              tickFormatter={(value) => (activeTab === "satisfaction" ? `${value}%` : value.toString())}
            />
            <Tooltip
              formatter={(value) => [
                activeTab === "satisfaction" ? `${value}%` : value,
                activeTab === "satisfaction" ? "Taux de satisfaction" : "Nombre d'interventions",
              ]}
              labelFormatter={(label) => `Région: ${label}`}
              contentStyle={{
                backgroundColor: "#FFF",
                border: "1px solid #E5E7EB",
                borderRadius: "0.375rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        {activeTab === "interventions"
          ? "Nombre d'interventions réalisées au cours des 12 derniers mois"
          : "Pourcentage de clients satisfaits de nos services"}
      </div>
    </div>
  )
}
