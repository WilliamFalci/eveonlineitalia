<template>
  <div class="trending__matches-item">
    <div class="trending__matches-thumb">
      <nuxt-link to="#">
        <NuxtImg :src="item.thumb" alt="img" />
      </nuxt-link>
    </div>
    <div class="trending__matches-content">
      <div class="info">
        <h5 class="title">
          <nuxt-link to="#">{{item.team_name}}</nuxt-link>
        </h5>
        <span class="price">$ {{item.box_price}}</span>
      </div>
      <div class="play">
        <a class="popup-video pointer" @click="playVideo(item.video_id)">
          <i class="far fa-play-circle"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{item: {
    thumb: string;
    team_name: string;
    box_price: number;
    video_id:string;
  }}>();
const {playVideo} = useVideoPopup();
</script>

