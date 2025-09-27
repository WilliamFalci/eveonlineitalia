<template>
  <section class="project-area project-bg section-pt-120 section-pb-140">
    <div class="container custom-container">
      <div class="project__wrapper">
        <div class="section__title text-start">
          <h3 class="title">EVE ONLINE</h3>
          <text-animation title="Gallery" />
        </div>
        <Swiper
          v-bind="slider_setting"
          :modules="[Navigation, Scrollbar]"
          class="swiper-container project-active"
        >
          <SwiperSlide v-for="(image, i) in project_images" :key="i">
            <div class="project__item">
              <a @click.prevent="handleShowImage(i)" class="popup-image pointer">
                <img :src="image" alt="img" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="slider-button-prev">
          <i class="flaticon-right-arrow"></i>
          <i class="flaticon-right-arrow"></i>
        </div>
      </div>
    </div>
    <div class="swiper-scrollbar"></div>
  </section>

  <!-- image lightbox start -->
  <popup-image-lightbox :images="project_images" :indexVal="index" :visible="visible" @handleHide="handleHide"></popup-image-lightbox>
  <!-- image lightbox end -->
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper/modules";

// project data
const project_images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
];

// image popup
const visible = ref(false);
const index = ref(0);
function handleHide() {
  visible.value = false;
}
const handleShowImage = (indexNum: number) => {
  index.value = indexNum;
  visible.value = true;
};

// slider setting
const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 15,
  breakpoints: {
    "1500": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 4,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1.5,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 24,
  },
};
</script>
