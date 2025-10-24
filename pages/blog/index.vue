<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-three title="EVE ITALIA BLOG" subtitle="EVE ONLINE"></breadcrumb-three>
    <!-- breadcrumb area end -->

    <!-- shop area start -->
    <blog-area-with-sidebar></blog-area-with-sidebar>
    <!-- shop area end -->

    <hr class="border-color-primary" />

    <div class="seo-text container p-5 mb-5">
      <h1>Blog di EVE Italia: Tutte le news su EVE Online in italiano</h1>

      <p>Benvenuti nel <strong>Blog di EVE Italia</strong>, la risorsa dedicata alla <strong>Community Italiana di EVE
          Online</strong>. Qui troverai tutte le ultime notizie, aggiornamenti e comunicati ufficiali direttamente dalla
        CCP, disponibili sia in lingua originale che in <strong>italiano grazie al nostro servizio di
          auto-traduzione</strong>.</p>

      <p>Il nostro obiettivo è rendere le informazioni su <strong>EVE Online Italia</strong> accessibili a tutti i
        giocatori italiani, dalla lore più recente agli aggiornamenti di gameplay, eventi e patch note. La traduzione
        automatica, curata dal nostro sistema, ti permette di comprendere rapidamente le novità senza perdere la
        precisione dei contenuti ufficiali della CCP.</p>

      <p>Navigando nel <strong>Blog di EVE Italia</strong>, potrai:</p>
      <ul>
        <li>Leggere le news ufficiali della CCP in <strong>italiano e inglese</strong>.</li>
        <li>Restare aggiornato su <strong>EVE Online Italia</strong>, dagli eventi della community alle nuove feature
          del gioco.</li>
        <li>Condividere articoli e discutere le novità con altri membri della <strong>Community Italiana EVE
            Online</strong>.</li>
      </ul>

      <p>Che tu sia un veterano di <strong>EVE Online Italia</strong> o un nuovo pilota nella nostra community, il blog
        di <strong>EVE Italia</strong> è il punto di riferimento per tutte le informazioni ufficiali e aggiornate sul
        tuo universo virtuale preferito.</p>

      <p>Unisciti alla <strong>Community Italiana di EVE Online</strong> e non perderti più nessuna news ufficiale della
        CCP grazie al nostro servizio esclusivo di traduzione automatica.</p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta, useRoute } from "nuxt/app";

const route = useRoute()
const title = 'EVE Online Italia - Blog'
const description = 'Scopri il Blog di EVE Italia, la fonte ufficiale per tutte le news su EVE Online Italia. Aggiornamenti, eventi e comunicati CCP disponibili in italiano e in lingua originale per la Community Italiana EVE Online.'
const image = '/images/logo/logo.png'
const url = 'https://eveonlineitalia.it' + route.path

useSeoMeta({
  title: title,
  description: description
});

useHead({
  link: [{
    rel: 'canonical',
    href: (!route.query.page || (route.query.page == '1' && route.query.take == '3')) ? 'https://eveonlineitalia.it/blog' : `https://eveonlineitalia.it/blog?page=${route.query.page}&take=${route.query.take}${(route.query.q) ? `&q=${route.query.q}` : ''}`
  }],
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]
})
</script>
