<template>
  <div
    class="upcoming-match__item tg-svg wow fadeInUp"
    :data-wow-delay="`${delay}s`"
  >
    <svg-animate-icon icon="/images/icons/match.svg" id="svg-7" />
    <div class="upcoming-match__position">

      <div class="upcoming-match__content">
        <div class="team--info info-left">
          <span class="game-name">{{ label_1 }}</span>
          <h3 class="name">
            {{ value_1 }}
          </h3>
        </div>
        <div class="upcoming-match__time">
          <h2 class="time">{{ avg }}</h2>
        </div>
        <div class="team--info info-right">
          <span class="game-name">{{ label_2 }}</span>
          <h3 class="name">
            {{ value_2 }}
          </h3>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label_1?: string;
  value_1?: string;
  avg?: string;
  label_2?: string;
  value_2: string;
  delay?: string;
}>();
</script>
