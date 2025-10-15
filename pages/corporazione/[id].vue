<template>
  <div v-if="killStats !== null">
    <!-- breadcrumb area start -->
    <breadcrumb-one
      :title="`[${killStats.info.ticker}] ${killStats.info.name}`"
      subtitle="corporazione"
      bg="/images/bg/breadcrumb_bg01.jpg"
      :brd_img="`https://images.evetech.net/corporations/${route.params.id}/logo?size=512`"
    />
    <!-- breadcrumb area end -->

    <!-- team info area start -->
    <team-info-area v-if="ceo !== null" :img="`https://images.evetech.net/characters/${zkillboard?.info?.ceo_id}/portrait?size=512`" label_1="CEO" :value_1="ceo?.name" label_2="Membri" :value_2="killStats.info.member_count.toString()" label_3="Tasse" :value_3="`${Math.round(killStats.info.tax_rate*100)}%`" icon_1="fa-users" icon_2="fa-percent"></team-info-area>
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
  </div>
</template>

<script setup lang="ts">
import { useFetch, useRoute, useSeoMeta } from 'nuxt/app';
import { ref } from 'vue';

const route = useRoute();
const killStats = ref()
const ceo = ref(null)
const propaganda = ref()

const {data: zkillboard} = await useFetch(`https://zkillboard.com/api/stats/corporationID/${route.params.id}/`) as any
const {data: userData} = await useFetch(`/api/eve-ceo-data-by-corp-id?eve_corp_id=${route.params.id}`) as any
const {data: ceoData} = await useFetch(`https://esi.evetech.net/characters/${zkillboard?.value?.info?.ceo_id}`) as any
const {data: _propaganda} = await useFetch(`https://eveonlineitalia.it/public/corpBulletin?discord_id=${userData.value.discord_id}`)

killStats.value = zkillboard.value
ceo.value = ceoData.value
propaganda.value = _propaganda.value

useSeoMeta({ title: `[${killStats.value.info.ticker}] ${killStats.value.info.name} - Corporazione Italiana della Comunnity EVE Online` });
</script>
