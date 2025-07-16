import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Si vous avez un sitemap spécifique pour le néerlandais, changez l'URL ici.
    // Par exemple, si c'est sur un sous-domaine comme nl.aquaetdeb.be/sitemap.xml
    // Ou si votre sitemap gère l'i18n, l'URL pourrait rester la même mais son contenu varier.
    // Pour l'instant, je le mets sur le domaine principal que nous avons utilisé précédemment.
    sitemap: "https://aquaetdeb.be/sitemap.xml",
  }
}
