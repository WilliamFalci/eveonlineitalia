<template>
   <div class="shop__item">
      <div class="shop__item-thumb">
        <nuxt-link :to="`/giocatore/${item.eve_online_id}`">
          <img :src="item.picture" alt="img"/>
        </nuxt-link>
        <img :src="item.corp_logo" alt="img" style="position: absolute; right: 5px; bottom: 6px; width: 40px;"/>
      </div>
      <div class="shop__item-line"></div>
      <div class="shop__item-content">
        <div class="shop__item-content-top">
          <h4 class="title text-center">
            <nuxt-link :to="`/giocatore/${item.eve_online_id}`">{{item.char_name}}</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { eveMember } from "@/types/eve";

defineProps<{item:eveMember}>()
</script>
