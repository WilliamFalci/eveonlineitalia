<template>
 <section class="slider__area slider__bg" style="background-image: url(/images/slider/slider_bg.jpg);" data-background="/images/slider/slider_bg.jpg">
      <div class="slider-activee">
          <div class="single-slider">
              <div class="container custom-container">
                  <div class="row justify-content-between">
                      <div class="col-lg-6">
                          <div class="slider__content">
                              <h6 class="sub-title wow fadeInUp" data-wow-delay=".2s">live gaming</h6>
                              <h2 class="title wow fadeInUp" data-wow-delay=".5s">steaming</h2>
                              <p class="wow fadeInUp" data-wow-delay=".8s">video games online</p>
                              <div class="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                <nuxt-link href="/contact" class="tg-btn-1">
                                    <span>contact us</span>
                                    <svg-btn-bg-two/>
                                 </nuxt-link>
                              </div>
                          </div>
                      </div>
                      <div class="col-xxl-6 col-xl-5 col-lg-6">
                          <div class="slider__img text-center">
                              <mouse-move-img imgSrc="/images/slider/slider_img01.png" dataDepth=".2" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="slider__shapes">
          <img src="/images/slider/slider_shape01.png" alt="shape">
          <img src="/images/slider/slider_shape02.png" alt="shape">
          <img src="/images/slider/slider_shape03.png" alt="shape">
          <img src="/images/slider/slider_shape04.png" alt="shape">
      </div>
      <div class="slider__brand-wrap">
          <div class="container custom-container">
              <ul class="slider__brand-list list-wrap">
                  <li
                    v-for="(brand, i) in brands"
                    :key="i"
                    @mouseenter="setHoveredIndex(i)"
                    @mouseleave="setHoveredIndex(null)"
                    :style="{ opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.3, transition: 'opacity 0.3s' }"
                  >
                    <nuxt-link to="#">
                      <img :src="brand" alt="brand" />
                    </nuxt-link>
                  </li>
              </ul>
          </div>
      </div>
  </section>
</template>

<script setup lang="ts">
const hoveredIndex = ref<number | null>(null);

const setHoveredIndex = (index:number | null) => {
  hoveredIndex.value = index;
};
// brands
const brands:string[] = [
  '/images/brand/brand_logo01.png',
  '/images/brand/brand_logo02.png',
  '/images/brand/brand_logo03.png'
]
</script>
