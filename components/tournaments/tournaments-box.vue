<template>
   <div :class="`tournament__box-wrap ${item.active ? 'active' : ''}`">
      <svg-t-box-bg />
      <div class="tournament__box-price">
        <i class="fas fa-trophy"></i>
        <span>{{item.box_price}}</span>
      </div>
      <div class="tournament__box-countdown">
        <div class="coming-time" data-countdown="2023/5/16">
          <client-only>
            <countdown-timer :date="item.coming_time" />
          </client-only>
        </div>
      </div>
      <div class="tournament__box-caption">
        <span class="sub">{{item.subtitle}}</span>
        <h4 class="title">{{item.title}}</h4>
      </div>
      <div class="tournament__box-prize">
        <i class="fas fa-trophy"></i>
        <span>{{item.places}} prize Places</span>
      </div>
      <ul class="tournament__box-list list-wrap">
          <li v-for="l in item.list_items" :key="l.id">
            <div class="tournament__box-list-item">
              <div class="tournament__player-thumb">
                <img :src="l.img" alt="img" />
              </div>
              <h6 class="tournament__player-name">{{l.name}}</h6>
              <span class="tournament__player-price">
                $ {{l.price}} <i class="fas fa-bolt"></i>
              </span>
            </div>
          </li>
      </ul>
  </div>
</template>

<script setup lang="ts">
import type { ITournament } from "@/types/tournament-type";

defineProps<{ item: ITournament}>()
</script>
