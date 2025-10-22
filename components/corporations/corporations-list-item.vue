<template>
  <div
    class="tournament__list-item wow fadeInUp"
    :data-wow-delay="`.${index + 2}s`"
    >
    <svg-t-list-bg-path />
      <div class="tournament__list-content mt-2">
        <div class="tournament__list-thumb">
          <a :href="`/corporazione/${item.eve_corp_id}`">
            <NuxtImg format="webp"
              :src="item.corp_logo"
              alt="thumb"
            />
          </a>
        </div>
        <div class="tournament__list-name">
          <h5 class="team-name">{{item.corp_name}}</h5>
        </div>
        <div class="tournament__list-time">
          <h6 class="title">Ticker</h6>
          <i class="fas fa-chevron-left" style="color: var(--tg-theme-primary);"></i>
          <span style="margin-right: 5px;">{{item.corp_ticker}}</span>
          <i class="fas fa-chevron-right" style="color: var(--tg-theme-primary);"></i>
        </div>
        <div class="tournament__list-prize">
          <h6 class="title">Membri</h6>
          <i class="fas fa-users mr-5"></i> {{ item.corp_member_count }}
        </div>
        
        <div class="tournament__list-live">
          <a :href="`/corporazione/${item.eve_corp_id}`">
            Dettagli <i class="far fa-play-circle"></i>
          </a>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { eveCorp } from "@/types/eve";

defineProps<{ item: eveCorp; index:number}>();
</script>
