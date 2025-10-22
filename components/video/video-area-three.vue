<template>
    <section class="video__area fix section-pb-120 section-pt-120 bg-img-cover bg-img-center" style="background-image: url(/images/bg/video_bg4.png)">
        <div class="container">
            <div class="row justify-content-center justify-content-center">
                <div class="col-lg-auto">
                    <div class="section__title mb-60 text-center title-shape-none">
                        <h6 class="sub-title2">Dalla community</h6>
                        <h3 class="title2">I NOSTRI ULTIMI VIDEO</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="video__slider">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-12">
                        <swiper class="swiper-container gallery-active" :slides-per-view="1" :space-between="30" :centeredSlides="true" :observer="true" :observeParents="true">
                            <swiper-slide v-for="(item) in videoItemData" :key="item.id">
                                <div class="video__item2">
                                    <div class="video__thumb">
                                        <NuxtImg format="webp" :src="item.imgSrc" alt="img" />
                                        <a @click="playVideo(item.videoId)" class="popup-video video-play-btn pointer">
                                            <svg-video-icon />
                                        </a>
                                    </div>
                                    <a :href="`https://youtu.be/${item.videoId}`" target="_blank" class="video-card-title">
                                        <span class="icon"><i class="fas fa-link"></i></span>
                                        <span class="title">
                                            {{ item.cardTitle }}
                                        </span>
                                    </a>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>

  <!-- video popup start -->
  <popup-video/>
  <!-- video popup end -->
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useFetch } from "nuxt/app";
const {playVideo} = useVideoPopup();

// Video data

const {data: videoItemData} = await useFetch(`https://eveonlineitalia.it/public/videos`)
</script>