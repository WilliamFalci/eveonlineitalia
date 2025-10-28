import { defineNuxtPlugin } from 'nuxt/app'
import { watchEffect } from 'vue'
import { onLCP, onCLS, onINP, onTTFB } from 'web-vitals'
import { useCookieConsent } from '../composables/useCookieConsent'

export default defineNuxtPlugin(() => {
  const { consent } = useCookieConsent()

  // Funzione per inviare i dati a GTM
  function sendToGTM(metric: any) {
    if (consent.value !== 'accepted') return
    if (!(window as any).dataLayer) return
    console.log(`[Web Vitals] ${metric.name}: ${metric.value} (${metric.rating})`)

    window.dataLayer.push({
      event: 'web_vital',
      event_category: 'Web Vitals',
      event_action: metric.name,
      event_label: metric.id,
      value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
    })
  }

  watchEffect(() => {
    if (consent.value !== 'accepted') return

    // Registra i listener
    onLCP(sendToGTM)
    onCLS(sendToGTM)
    onINP(sendToGTM)
    onTTFB(sendToGTM)
  })
})
