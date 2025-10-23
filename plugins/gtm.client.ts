import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app"
import { watchEffect } from "vue"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const { consent } = useCookieConsent()
  const gtmId = config.public.gtmId

  if (!gtmId) return

  // Guarda il cambiamento di consenso
  watchEffect(() => {
    if (consent.value !== 'accepted') return

    // Evita doppio caricamento
    if (document.getElementById('gtm-script')) return

    // --- Inserisci il codice GTM ---
    const script = document.createElement('script')
    script.id = 'gtm-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
    document.head.appendChild(script)

    const scriptHrefs = document.createElement('script')
    scriptHrefs.id = 'hrefs-script'
    scriptHrefs.async = true
    scriptHrefs.src = `https://analytics.ahrefs.com/analytics.js`
    scriptHrefs.setAttribute('data-key','dhj5IAcEHRVuvqw6eH9Vzw')
    document.head.appendChild(scriptHrefs)

    // Inizializza dataLayer
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

    // --- Traccia automaticamente le route ---
    nuxtApp.hook('page:finish', () => {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname,
        page_title: document.title,
      })
    })
  })
})
