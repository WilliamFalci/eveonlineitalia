<template>
   <section class="gallery__area fix section-pb-130">
      <div class="gallery__slider">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-9 col-lg-10 col-md-11">
              <swiper
                v-bind="slider_setting"
                :modules="[Navigation, Scrollbar]"
                class="swiper-container gallery-active"
                :centeredSlides="true"
                :observer="true"
                :observeParents="true"
              >
                  <swiper-slide v-for="(item,index) in gallery_data" :key="item.id">
                    <div class="gallery__item">
                      <div class="gallery__thumb">
                        <a
                          data-cursor="-theme"
                          data-cursor-text="View <br> Image"
                          class="popup-image pointer"
                          :title="item.title"
                          @click.prevent="handleShowImage(index)"
                          @mouseenter="handleMouseEnter"
                          @mouseleave="handleMouseLeave"
                        >
                          <img :src="item.img" alt="img" />
                        </a>
                      </div>
                      <div class="gallery__content">
                        <h3 class="title">{{item.title}}</h3>
                        <span class="rate">rate {{item.rate}}</span>
                      </div>
                    </div>
                  </swiper-slide>
                <div class="swiper-scrollbar"></div>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

   <!-- image lightbox start -->
  <popup-image-lightbox :images="gallery_data.map(p => p.img)" :indexVal="index" :visible="visible" @handleHide="handleHide"></popup-image-lightbox>
  <!-- image lightbox end -->
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper/modules"; 
import gallery_data from '@/data/gallery-data';
const mouse = useBigMouse();

const handleMouseEnter = () => {
   mouse.value = true
 }
const handleMouseLeave = () => {
  mouse.value = false
}
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
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 30,
  freeMode: false,
  observer: true,
  observeParents: true,
  breakpoints: {
    1920: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
};
</script>
