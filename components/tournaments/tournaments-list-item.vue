<template>
  <div
    class="tournament__list-item wow fadeInUp"
    :data-wow-delay="`.${index + 2}s`"
    >
    <svg-t-list-bg-path />
      <div class="tournament__list-content">
        <div class="tournament__list-thumb">
          <nuxt-link to="/tournament-details">
            <img
              :src="item.thumb"
              alt="thumb"
            />
          </nuxt-link>
        </div>
        <div class="tournament__list-name">
          <h5 class="team-name">{{item.team_name}}</h5>
          <span class="status">{{item.status}}</span>
        </div>
        <div class="tournament__list-prize">
          <h6 class="title">Prize</h6>
          <i class="fas fa-trophy"></i>
          <span>${{item.box_price}}</span>
        </div>
        <div class="tournament__list-time">
          <h6 class="title">Time</h6>
          <i class="fas fa-clock"></i>
          <span>{{timer.hours}}h : {{timer.minutes}}m : {{timer.seconds}}s</span>
        </div>
        <div class="tournament__list-live">
          <nuxt-link :to="item.live_link" target="_blank">
            Live now <i class="far fa-play-circle"></i>
          </nuxt-link>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useTimer, type UseTimer } from "vue-timer-hook";
import type { ITournament } from "@/types/tournament-type";

const props = defineProps<{ item: ITournament;index:number}>();

let timer: UseTimer;
const endTime = new Date(props.item.coming_time);
const endTimeMs = endTime.getTime();
timer = useTimer(endTimeMs);
</script>
