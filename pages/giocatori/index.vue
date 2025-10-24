<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-three title="GIOCATORI ITALIANI" subtitle="GIOCATORI"></breadcrumb-three>
    <!-- breadcrumb area end -->

    <!-- shop area start -->
    <giocatori-area></giocatori-area>
    <!-- shop area end -->

    <hr class="border-color-primary" />

    <div class="seo-text container p-5 mb-5">
      <h1>Giocatori – EVE Italia</h1>

      <p>Benvenuto nella sezione <strong>Giocatori</strong> di <strong>EVE Italia</strong>, il punto di riferimento per
        la <strong>Community Italiana EVE Online</strong>. Qui tutti i membri possono mostrare le proprie statistiche,
        condividere le proprie esperienze e farsi conoscere all’interno della comunità.</p>

      <h2>Sponsorizza le tue statistiche in EVE Online Italia</h2>

      <p>Se sei un appassionato di <strong>EVE Online Italia</strong>, questa sezione ti permette di valorizzare il tuo
        profilo di gioco. Potrai pubblicare le tue performance, il tuo livello di esperienza, le flotte a cui partecipi
        e tutte le informazioni che rendono unica la tua presenza nel gioco. La <strong>Community Italiana EVE
          Online</strong> è il luogo perfetto per confrontarti con altri giocatori e farti notare da nuovi alleati o
        squadre di gioco.</p>

      <h2>Perché far parte della Community Italiana EVE Online</h2>

      <p>Essere attivi nella <strong>Community Italiana EVE Online</strong> significa non solo giocare, ma anche
        partecipare a eventi, missioni collettive e iniziative speciali. Grazie alla sezione <strong>Giocatori</strong>,
        ogni membro ha la possibilità di:</p>

      <ul>
        <li><strong>Mostrare le proprie statistiche di gioco</strong></li>
        <li><strong>Condividere successi e progressi</strong></li>
        <li><strong>Connettersi con altri appassionati di EVE Online Italia</strong></li>
        <li><strong>Partecipare a competizioni e iniziative interne</strong></li>
      </ul>

      <h2>Come pubblicare le tue statistiche</h2>

      <p>Pubblicare le tue statistiche è semplice e immediato. Basta registrarsi nella nostra piattaforma, inserire i
        dettagli del proprio profilo di gioco e aggiornare le informazioni periodicamente per restare visibile nella
        <strong>Community Italiana EVE Online</strong>.
      </p>

      <p>Unisciti a <strong>EVE Italia</strong> e fai crescere la tua reputazione tra i giocatori italiani di
        <strong>EVE Online</strong>. Mostra le tue abilità, confrontati con altri piloti e diventa parte attiva della
        nostra community!
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta, useRoute } from 'nuxt/app';

const route = useRoute()
const title = 'Giocatori – EVE Online Italia'
const description = 'Scopri i profili dei membri della Community Italiana EVE Online su EVE Italia. Mostra le tue statistiche, confrontati con altri giocatori e valorizza la tua esperienza in EVE Online Italia.'
const image = '/images/logo/logo.png'
const url = 'https://eveonlineitalia.it' + route.path

useSeoMeta({
  title: title,
  description: description
});

useHead({
  link: [{
    rel: 'canonical',
    href: (!route.query.page || (route.query.page == '1' && route.query.take == '3')) ? 'https://eveonlineitalia.it/giocatori' : `https://eveonlineitalia.it/giocatori?page=${route.query.page}&take=${route.query.take}${(route.query.q) ? `&q=${route.query.q}` : ''}`
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
