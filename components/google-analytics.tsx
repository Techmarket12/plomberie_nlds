"use client"

import Script from "next/script"
import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Définir la fonction gtag_report_conversion globalement
    window.gtag_report_conversion = (url: string | undefined) => {
      const callback = () => {
        if (typeof url !== "undefined") {
          window.location.href = url
        }
      }

      window.gtag("event", "conversion", {
        send_to: "AW-17024011541/Kh3NCKi1yMYaEJWa17U_",
        event_callback: callback,
      })

      return false
    }
  }, [])

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17024011541" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17024011541');

          // Fonction de conversion pour les clics sur les numéros de téléphone
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-17024011541/Kh3NCKi1yMYaEJWa17U_',
              'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
    </>
  )
}
