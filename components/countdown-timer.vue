<template>
    <div class="time-count day">
      <span>{{ timer.days }}</span>Day
    </div>
    <div class="time-count hour">
      <span>{{ timer.hours }}</span>hour
    </div>
    <div class="time-count min">
      <span>{{ timer.minutes }}</span>min
    </div>
    <div class="time-count sec">
      <span>{{ timer.seconds }}</span>sec
    </div>
</template>

<script setup lang="ts">
import { useTimer, type UseTimer } from "vue-timer-hook";
const props = defineProps<{date: string}>()
let timer: UseTimer;
const endTime = new Date(props.date);
const endTimeMs = endTime.getTime();
timer = useTimer(endTimeMs);
</script>
