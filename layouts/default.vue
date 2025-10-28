<template>
  <div>
    <ClientOnly>
      <CookieConsentBanner />
    </ClientOnly>
    <header-three></header-three>
    <main class="main--area">
      <slot />
    </main>
    <footer-two></footer-two>
    <back-to-top></back-to-top>
  </div>
  <!-- Noscript fallback per GTM -->
  <noscript v-if="consent === 'accepted'">
    <iframe :src="`https://www.googletagmanager.com/ns.html?id=${gtmId}`" height="0" width="0"
      style="display:none;visibility:hidden"></iframe>
  </noscript>
</template>

<script setup lang="ts">
import { useCookieConsent } from '../composables/useCookieConsent';

const { consent } = useCookieConsent()
const gtmId = useRuntimeConfig().public.gtmId
</script>

<style>
.seo-text > h1 , .seo-text > h2, .seo-text > article > h2 {
  font-size: 1rem;
}

.seo-text > p , .seo-text > ul > li {
  font-size: 0.9rem;
}

.color-primary {
  color: var(--tg-theme-primary);
}

.border-color-primary {
  border-color: var(--tg-theme-primary);
}

.justify-content-space-between {
  justify-content: space-between;
}

.font-italic {
  font-style: italic !important;
}
</style>
