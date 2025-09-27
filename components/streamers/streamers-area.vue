<template>
 <section class="streamers__area section-pt-95 section-pb-120">
     <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10">
                <div class="section__title text-center mb-60">
                    <text-animation title="Our top streamers" />
                    <h3 class="title">top rated streamers</h3>
                </div>
            </div>
        </div>
        <Swiper v-bind="slider_setting" :modules="[Navigation,Pagination]" class="swiper-container streamers-active">
            <SwiperSlide v-for="item in streamers_data" :key="item.id">
                <div class="streamers__item">
                    <div class="streamers__thumb">
                        <nuxt-link to="/team-details">
                          <img :src="item.img" alt="img" />
                        </nuxt-link>
                    </div>
                    <div class="streamers__content">
                        <h4 class="name">{{item.title}}</h4>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="streamers__pagination">
            <div class="slider-button-prev streamers__pagination-arrow">
              <i class="fas fa-angle-left"></i>
            </div>
            <div class="swiper-pagination streamers__pagination-dots"></div>
            <div class="slider-button-next streamers__pagination-arrow">
              <i class="fas fa-angle-right"></i>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

// slider data
const streamers_data: {
  id: number;
  img: string;
  title: string;
}[] = [
  {
    id:1,
    img:'/images/team/streamers01.png',
    title:'sky hunter'
  },
  {
    id:2,
    img:'/images/team/streamers02.png',
    title:'Phoenix'
  },
  {
    id:3,
    img:'/images/team/streamers03.png',
    title:'Max Jett'
  },
  {
    id:4,
    img:'/images/team/streamers04.png',
    title:'Brimstone'
  },
  {
    id:5,
    img:'/images/team/streamers05.png',
    title:'Mad Raze'
  },
  {
    id:6,
    img:'/images/team/streamers06.png',
    title:'Jackie Welles'
  },
  {
    id:7,
    img:'/images/team/streamers07.png',
    title:'Yorinobu Ara'
  },
]

// slider setting
const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    '1500': {
        slidesPerView: 5,
    },
    '1200': {
        slidesPerView: 4,
    },
    '992': {
        slidesPerView: 4,
    },
    '768': {
        slidesPerView: 3,
    },
    '576': {
        slidesPerView: 2,
    },
    '0': {
        slidesPerView: 1.5,
        centeredSlides: true,
        centeredSlidesBounds: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  }
};
</script>
