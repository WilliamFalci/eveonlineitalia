<template>
  <section class="nft-item__area">
    <div class="container custom-container">
      <div class="section__title text-center mb-60 title-shape-none">
        <span class="sub-title2">KILLBOARD</span>
        <h3 class="title2">LE ULTIME KILLS/LOSSES</h3>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <swiper class="swiper-container gallery-active" :slides-per-view="1" :space-between="30" :centeredSlides="true" :observer="true" :observeParents="true">
            <swiper-slide v-for="(item) in nft_data" :key="item.id" class="kill" style="width:auto!important;">
              <nft-item-box :item="item" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useFetch } from 'nuxt/app';

const {data: nft_data} = await useFetch(`https://eveonlineitalia.it/public/killboard`)
</script>

<style lang="css" scoped>
.kill  {
  width: auto!important;
}
</style>
