<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one title="CORPORAZIONI" subtitle="Corporazioni" bg="/images/bg/breadcrumb_bg03.jpg"></breadcrumb-one>
    <!-- breadcrumb area end -->

    <!-- tournament list area start  -->
    <corporations-list-area />
    <!-- tournament list area end  -->

    <hr class="border-color-primary" />

    <div class="seo-text container mb-5 p-5">
      <h1>Corporazioni – EVE Italia</h1>

      <p>Benvenuto nella sezione <strong>Corporazioni di EVE Italia</strong>, il punto di riferimento ufficiale per
        tutti i <strong>CEO e i membri della Community Italiana di EVE Online</strong> che desiderano far conoscere la
        propria realtà nel vasto universo di <strong>New Eden</strong>.</p>

      <p>In questa pagina troverai un elenco aggiornato delle <strong>corporazioni italiane attive su EVE
          Online</strong>, con dettagli sulle loro attività, obiettivi e statistiche di gioco. Che tu sia un nuovo
        pilota alla ricerca di una squadra con cui iniziare la tua avventura, oppure un veterano in cerca di una nuova
        sfida, qui troverai la <strong>corporazione perfetta per il tuo stile di gioco</strong>.</p>

      <h2>Un servizio dedicato ai CEO italiani</h2>

      <p>La <strong>Community Italiana EVE Online</strong>, attraverso <strong>EVE Italia</strong>, offre ai CEO delle
        corporazioni la possibilità di <strong>promuovere gratuitamente la propria organizzazione</strong> all’interno
        della piattaforma.</p>

      <ul>
        <li>Le <strong>statistiche aggiornate</strong> del gruppo (membri, killboard, attività, alleanze);</li>
        <li>Una <strong>descrizione dettagliata</strong> dei propri obiettivi e valori;</li>
        <li>I <strong>requisiti di ingresso</strong> per nuovi membri;</li>
        <li>I <strong>contatti diretti</strong> per il reclutamento.</li>
      </ul>

      <p>Questo servizio nasce per <strong>rafforzare il legame tra i giocatori italiani</strong> e facilitare la
        collaborazione tra le diverse realtà presenti su EVE Online.</p>

      <h2>Unisciti alla Community Italiana di EVE Online</h2>

      <p><strong>EVE Italia</strong> non è solo un portale informativo: è una <strong>community viva e unita</strong>,
        punto d’incontro per tutti i piloti italiani che vogliono condividere esperienze, partecipare a eventi e restare
        aggiornati sulle ultime novità dell’universo di <strong>EVE Online Italia</strong>.</p>

      <p>Scopri le <strong>corporazioni italiane</strong>, entra in contatto con altri giocatori e contribuisci alla
        crescita della <strong>Community Italiana di EVE Online</strong>.</p>

      <p>Che tu sia un esploratore, un industriale o un comandante di flotta, <strong>EVE Italia</strong> ti offre lo
        spazio perfetto per <strong>mettere in luce la tua corporazione</strong> e farla conoscere a tutta la galassia.
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta, useHead } from 'nuxt/app';

const title = `Corporazioni - EVE Online Italia`
const description = `Scopri le corporazioni italiane su EVE Italia: uno spazio dedicato ai CEO della Community Italiana EVE Online per promuovere la propria corporazione, mostrare statistiche e facilitare il reclutamento di nuovi membri`
const image = `/images/logo/logo.png`
const url = 'https://eveonlineitalia.it/corporazioni'

useSeoMeta({ 
  title: title,
  description: description
});

useHead({
  link: [{
    rel: 'canonical',
    href: url
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
