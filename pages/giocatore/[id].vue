<template>
  <div v-if="killStats !== null">
    <!-- breadcrumb area start -->
    <breadcrumb-one :title="`${char.name}`" subtitle="Giocatore" bg="/images/bg/breadcrumb_bg01.jpg"
      :brd_img="`https://images.evetech.net/characters/${route.params.id}/portrait?size=512`" />
    <!-- breadcrumb area end -->

    <!-- team info area start -->
    <team-info-area :img="`https://images.evetech.net/corporations/${char.corporationID}/logo?size=128`"
      label_1="Corporazione" :value_1="corporation.name"></team-info-area>
    <!-- team info area end -->

    <!-- stats area start -->
    <big-stats-area v-if="killStats" :stats="killStats"></big-stats-area>
    <!-- stats area end-->

    <!-- corporations area start -->
    <big-stats-box-area v-if="killStats" :stats="killStats" type="char"></big-stats-box-area>
    <!-- corporations area end -->

    <hr class="border-color-primary" />

    <div class="seo-text container p-5 mb-5">
      <h1>{{char.name}} – EVE Italia</h1>

      <p>Benvenuto nella pagina del giocatore <strong>{{ char.name }}</strong> di <strong>EVE Italia</strong>, il
        punto di riferimento per la <strong>Community Italiana EVE Online</strong>. Qui
        <strong>{{ char.name }}</strong> può mostrare le proprie statistiche, condividere le esperienze di gioco e
        farsi conoscere all’interno della comunità.</p>

      <h2>Sponsorizza le tue statistiche in EVE Online Italia</h2>

      <p>Se sei un appassionato di <strong>EVE Online Italia</strong>, questa pagina ti permette di valorizzare il tuo
        profilo di gioco. <strong>{{ char.name }}</strong> può pubblicare le proprie performance, il livello di
        esperienza, le flotte a cui partecipa e tutte le informazioni che rendono unica la propria presenza nel gioco.
        La <strong>Community Italiana EVE Online</strong> è il luogo perfetto per confrontarsi con altri giocatori e
        farsi notare da nuovi alleati o squadre di gioco.</p>

      <h2>Perché far parte della Community Italiana EVE Online</h2>

      <p>Essere attivi nella <strong>Community Italiana EVE Online</strong> significa non solo giocare, ma anche
        partecipare a eventi, missioni collettive e iniziative speciali. Grazie a questa pagina, ogni giocatore ha la
        possibilità di:</p>

      <ul>
        <li><strong>Mostrare le proprie statistiche di gioco</strong></li>
        <li><strong>Condividere successi e progressi</strong></li>
        <li><strong>Connettersi con altri appassionati di EVE Online Italia</strong></li>
        <li><strong>Partecipare a competizioni e iniziative interne</strong></li>
      </ul>

      <h2>Come pubblicare le tue statistiche</h2>

      <p>Pubblicare le proprie statistiche è semplice e immediato. Basta registrarsi nella nostra piattaforma, inserire
        i dettagli del proprio profilo di gioco e aggiornare le informazioni periodicamente per restare visibile nella
        <strong>Community Italiana EVE Online</strong>.</p>

      <p>Unisciti a <strong>EVE Italia</strong> e fai crescere la tua reputazione tra i giocatori italiani di
        <strong>EVE Online</strong>. Mostra le tue abilità, confrontati con altri piloti e diventa parte attiva della
        nostra community!</p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch, useRoute, useSeoMeta, useHead } from 'nuxt/app';
import { ref } from 'vue';

const route = useRoute();
const killStats = ref()
const corporation = ref()
const char = ref()

const { data: _char } = await useFetch(`https://esi.evetech.net/characters/${route.params.id}`)
char.value = _char.value
const { data: zkillboard } = await useFetch(`https://zkillboard.com/api/stats/characterID/${route.params.id}/`) as any
const { data: corp } = await useFetch(`https://esi.evetech.net/corporations/${char.value.corporation_id}`)
killStats.value = zkillboard.value
corporation.value = corp.value

const title = `${char.value.name} - EVE Online Italia`
const description = `Scopri ${char.value.name} su EVE Online Italia. Visualizza le statistiche e l’esperienza di gioco in EVE Online Italia.`
const image = `https://images.evetech.net/characters/${route.params.id}/portrait?size=512`
const url = 'https://eveonlineitalia.it' + route.path

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
