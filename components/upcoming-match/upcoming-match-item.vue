<template>
  <div
    class="upcoming-match__item tg-svg wow fadeInUp"
    :data-wow-delay="`${delay}s`"
  >
    <svg-animate-icon icon="/images/icons/match.svg" id="svg-7" />
    <div class="upcoming-match__position">
      <div class="upcoming-match__team team-left">
        <nuxt-link to="/team-details">
          <img :src="team_1" alt="img" />
        </nuxt-link>
      </div>
      <div class="upcoming-match__content">
        <div class="team--info info-left">
          <span class="game-name">{{ game_name_1 }}</span>
          <h3 class="name">
            <nuxt-link to="/team-details">{{ match_name }}</nuxt-link>
          </h3>
        </div>
        <div class="upcoming-match__time">
          <h2 class="time">{{ time }}</h2>
        </div>
        <div class="team--info info-right">
          <span class="game-name">{{ game_name_2 }}</span>
          <h3 class="name">
            <nuxt-link to="/team-details">{{ match_name_2 }}</nuxt-link>
          </h3>
        </div>
      </div>
      <div class="upcoming-match__team team-right">
        <nuxt-link to="/team-details">
          <img :src="team_2" alt="img" />
        </nuxt-link>
      </div>
    </div>
    <div class="upcoming-match__date">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="287"
        height="24"
        viewBox="0 0 287 24"
      >
        <path
          id="bottom-svg1"
          d="M1104,3760l-20,24H837l-20-24"
          transform="translate(-817 -3760)"
        />
      </svg>
      <span>{{ date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  team_1: string;
  game_name_1: string;
  game_name_2: string;
  time: string;
  match_name: string;
  date: string;
  team_2: string;
  match_name_2: string;
  delay: string;
}>();
</script>
