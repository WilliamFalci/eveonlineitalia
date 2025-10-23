import { useCookieConsent } from "./useCookieConsent"

export function useGtm() {
  const { consent } = useCookieConsent()

  const pushEvent = (event: string, data?: Record<string, any>) => {
    if (consent.value !== 'accepted') return
    if (!(window as any).dataLayer) return
    (window as any).dataLayer.push({ event, ...data })
  }

  return { pushEvent }
}
