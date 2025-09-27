<template>
  <section :class="top_cls">
    <div class="container">
      <div v-if="!hideTitle" class="row">
        <div class="col-12">
          <div class="brand__title text-center">
            <h2 class="title">they trust us</h2>
          </div>
        </div>
      </div>
      <Swiper v-bind="slider_setting" class="brand-active">
        <SwiperSlide v-for="(b, i) in brands" :key="i">
          <div
            class="brand__item"
            @mouseenter="setHoveredIndex(i)"
            @mouseleave="setHoveredIndex(null)"
            :style="{
              opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.3,
              transition: 'opacity 0.3s',
            }"
          >
            <nuxt-link to="#" class="brand__link">
              <NuxtImg :src="b" alt="brand" />
            </nuxt-link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
const hoveredIndex = ref<number | null>(null);

const setHoveredIndex = (index: number | null) => {
  hoveredIndex.value = index;
};
type IProps = {
	top_cls?: string;
	hideTitle?: boolean
}
withDefaults(defineProps<IProps>(), {
  top_cls: 'brand-area',
  hideTitle: false
})

// brands
const brands = [
  "/images/brand/brand01.png",
  "/images/brand/brand02.png",
  "/images/brand/brand03.png",
  "/images/brand/brand04.png",
  "/images/brand/brand05.png",
  "/images/brand/brand06.png",
  "/images/brand/brand07.png",
  "/images/brand/brand02.png",
  "/images/brand/brand05.png",
];

// slider setting
const slider_setting = {
  slidesPerView: 6,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  },
};
</script>
