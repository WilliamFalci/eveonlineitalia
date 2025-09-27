<template>
  <div class="match__winner-wrap">
    <div class="match__winner-info">
      <h4 class="name">{{ name }}</h4>
      <span class="price-amount">${{ amount }}</span>
    </div>
    <div class="match__winner-img tg-svg">
      <div class="team-logo-img">
        <nuxt-link to="/team-details">
          <img :src="img" alt="img" />
        </nuxt-link>
      </div>
      <svg-animate-icon icon="/images/icons/win_shape.svg" :id="`svg-${id}`" />
      <h3 class="match__winner-place">{{ place }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  amount: string;
  img: string;
  id: string;
  place: string;
}>();
</script>
