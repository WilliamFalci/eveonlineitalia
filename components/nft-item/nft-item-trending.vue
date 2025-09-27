<template>
  <section class="trendingNft-area section-pt-120 section-pb-90">
     <div class="container">
        <div class="trendingNft__title-wrap">
            <div class="row">
                <div class="col-md-7">
                    <div class="trendingNft__title">
                        <h2 class="title">top Trending <img src="/images/icons/fire.png" width="35" alt="icon"/></h2>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="trendingNft__nav">
                        <button class="slider-button-prev"><i class="fas fa-angle-left"></i></button>
                        <button class="slider-button-next"><i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <Swiper v-bind="slider_setting" :modules="[Navigation]" class="swiper-container trendingNft-active">

            <SwiperSlide v-for="item in nft_data.filter(n => n.trending)" :key="item.id">
              <div class="trendingNft__item">
                  <div class="trendingNft__item-top">
                      <div class="trendingNft__item-avatar">
                          <div class="image">
                              <nuxt-link to="/shop-details">
                                <img :src="item.creator" alt="img"/>
                              </nuxt-link>
                          </div>
                          <div class="info">
                              <h6 class="name">{{item.title}}</h6>
                              <nuxt-link to="/shop-details" class="userName">
                                @{{item.creator_name}}
                              </nuxt-link>
                          </div>
                      </div>
                      <div class="trendingNft__item-wish">
                          <nuxt-link to="#"><i class="far fa-heart"></i></nuxt-link>
                      </div>
                  </div>
                  <div class="trendingNft__item-image">
                      <nuxt-link to="/shop-details">
                        <img :src="item.img" alt="img" />
                      </nuxt-link>
                  </div>
                  <div class="trendingNft__item-bottom">
                      <div class="trendingNft__item-price">
                          <span class="bid">Last Bid</span>
                          <h6 class="eth"><i class="fab fa-ethereum"></i> {{item.eth}} <span>Eth</span></h6>
                      </div>
                      <nuxt-link to="/shop-details" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
                  </div>
              </div>
            </SwiperSlide>

        </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import nft_data from "@/data/nft-data";

// slider setting 
const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    '1500': {
        slidesPerView: 3,
    },
    '1200': {
        slidesPerView: 3,
    },
    '992': {
        slidesPerView: 2,
    },
    '768': {
        slidesPerView: 2,
    },
    '576': {
        slidesPerView: 1,
    },
    '0': {
        slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  }
}
</script>
