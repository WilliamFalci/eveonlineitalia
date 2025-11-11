import { useState } from "nuxt/app"
import { onMounted } from "vue"

export function useCookieConsent() {
  const consent = useState<'accepted' | 'rejected' | 'unknown'>('cookie-consent', () => 'unknown')

  function accept() {
    consent.value = 'accepted'
    localStorage.setItem('cookie-consent', 'accepted')
  }

  function reject() {
    consent.value = 'rejected'
    localStorage.setItem('cookie-consent', 'rejected')
  }

  return { consent, accept, reject }
}
