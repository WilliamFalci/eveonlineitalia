<template>
  <div v-if="killStats !== null">
    <!-- breadcrumb area start -->
    <breadcrumb-one :title="`[${killStats.info.ticker}] ${killStats.info.name}`" subtitle="corporazione"
      bg="/images/bg/breadcrumb_bg01.jpg"
      :brd_img="`https://images.evetech.net/corporations/${route.params.id}/logo?size=512`" />
    <!-- breadcrumb area end -->

    <!-- team info area start -->
    <team-info-area v-if="ceo !== null"
      :img="`https://images.evetech.net/characters/${zkillboard?.info?.ceo_id}/portrait?size=512`" label_1="CEO"
      :value_1="ceo?.name" label_2="Membri" :value_2="killStats.info.member_count.toString()" label_3="Tasse"
      :value_3="`${Math.round(killStats.info.tax_rate * 100)}%`" icon_1="fa-users" icon_2="fa-percent"></team-info-area>
    <!-- team info area end -->

    <!-- stats area start -->
    <big-stats-area :stats="killStats"></big-stats-area>
    <!-- stats area end-->

    <!-- corporations area start -->
    <big-stats-box-area :stats="killStats" type="corp"></big-stats-box-area>
    <!-- corporations area end -->

    <!-- team details area start -->
    <team-details-area :propaganda="propaganda" v-if="propaganda"></team-details-area>
    <!-- team details area end -->

    <hr class="border-color-primary" />

    <div class="seo-text container p-5 mb-5">
      <h1>[{{killStats.info.ticker}}] {{killStats.info.name}} – EVE Italia</h1>

      <p>Benvenuto nella pagina ufficiale di <strong>[{{killStats.info.ticker}}] {{killStats.info.name}}</strong>, una realtà della <strong>Community
          Italiana di EVE Online</strong> pronta a condividere la propria esperienza e i propri obiettivi all’interno
        dell’universo di <strong>New Eden</strong>.</p>

      <article id="descrizione-corp">
        <h2>Chi siamo</h2>
        <p><strong>[{{killStats.info.ticker}}] {{killStats.info.name}}</strong> è una corporazione attiva su <strong>EVE Online Italia</strong> che
          punta a fornire ai propri membri supporto, organizzazione e opportunità di crescita. Ogni CEO e membro
          contribuisce a creare un ambiente collaborativo e competitivo, in linea con i valori della <strong>Community
            Italiana EVE Online</strong>.</p>
      </article>

      <article id="statistiche">
        <h2>Statistiche e attività</h2>
        <p>Queste statistiche vengono aggiornate regolarmente per garantire trasparenza e mostrare la vitalità della
          corporazione all’interno di <strong>EVE Italia</strong>.</p>
      </article>

      <article id="reclutamento">
        <h2>Reclutamento</h2>
        <p>Se sei interessato a unirti a <strong>[{{killStats.info.ticker}}] {{killStats.info.name}}</strong>, puoi contattare direttamente il CEO o i
          responsabili della corporazione in-game o discord.</p>
      </article>

      <article id="join-community">
        <h2>Unisciti alla Community Italiana di EVE Online</h2>
        <p><strong>[{{killStats.info.ticker}}] {{killStats.info.name}}</strong> fa parte della più ampia <strong>Community Italiana EVE
            Online</strong>, un network di giocatori italiani che condividono esperienze, eventi e strategie su EVE
          Online Italia. Unisciti a noi e contribuisci alla crescita della nostra galassia!</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch, useRoute, useSeoMeta } from 'nuxt/app';
import { ref } from 'vue';

const route = useRoute();
const killStats = ref()
const ceo = ref(null)
const propaganda = ref()

const { data: zkillboard } = await useFetch(`https://zkillboard.com/api/stats/corporationID/${route.params.id}/`) as any
const { data: userData } = await useFetch(`/api/eve-ceo-data-by-corp-id?eve_corp_id=${route.params.id}`) as any
const { data: ceoData } = await useFetch(`https://esi.evetech.net/characters/${zkillboard?.value?.info?.ceo_id}`) as any
const { data: _propaganda } = await useFetch(`https://eveonlineitalia.it/public/corpBulletin?discord_id=${userData.value.discord_id}`)

killStats.value = zkillboard.value
ceo.value = ceoData.value
propaganda.value = _propaganda.value

useSeoMeta({ 
  title: `[${killStats.value.info.ticker}] ${killStats.value.info.name} - EVE Online Italia`,
  description: `Scopri [${killStats.value.info.ticker}] ${killStats.value.info.name} su EVE Italia: una corporazione italiana attiva nella Community Italiana EVE Online, con statistiche aggiornate, attività e opportunità di reclutamento per nuovi membri.`
});
</script>
