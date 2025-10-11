<template>
  <div v-if="killStats !== null">
    <!-- breadcrumb area start -->
    <breadcrumb-one
      :title="`${killStats.info.name}`"
      subtitle="Giocatore"
      bg="/images/bg/breadcrumb_bg01.jpg"
      :brd_img="`https://images.evetech.net/characters/${route.params.id}/portrait?size=512`"
    />
    <!-- breadcrumb area end -->

    <!-- team info area start -->
    <team-info-area :img="`https://images.evetech.net/corporations/${killStats.info.corporationID}/logo?size=128`" label_1="Corporazione" :value_1="corporation.name" ></team-info-area>
    <!-- team info area end -->

    <!-- stats area start -->
    <big-stats-area :stats="killStats"></big-stats-area>
    <!-- stats area end-->

    <!-- corporations area start -->
    <big-stats-box-area :stats="killStats" type="char"></big-stats-box-area>
    <!-- corporations area end -->
  </div>
</template>

<script setup lang="ts">
import { useFetch, useRoute, useSeoMeta } from 'nuxt/app';
import { ref } from 'vue';

const route = useRoute();
const killStats = ref()
const corporation = ref()

const {data: zkillboard} = await useFetch(`https://zkillboard.com/api/stats/characterID/${route.params.id}/`) as any
const {data: corp} = await useFetch(`https://esi.evetech.net/corporations/${zkillboard.value.info.corporationID}`)
killStats.value = zkillboard.value
corporation.value = corp.value

useSeoMeta({ title: `${killStats.value.info.name} - Giocatore Italiano della Comunnity EVE Online` });
</script>
