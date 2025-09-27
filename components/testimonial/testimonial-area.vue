<template>
    <section class="testimonial__area section-pb-120" style="background-image: url(/images/bg/team_bg4.png)">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__title mb-60 title-shape-none">
                        <h3 class="testimonial-title"><span>15k+ Active Customer Review</span></h3>
                    </div>
                </div>
            </div>
            <swiper v-bind="slider_setting" class="swiper-container testimonial-active">
                <swiper-slide v-for="(item) in testimonialData" :key="item.id">
                    <div class="testimonial__item">
                        <div class="testimonial__thumb">
                            <img :src="item.thumb" alt="img">
                        </div>
                        <div class="testimonial__content">
                            <p class="content">{{ item.content }}</p>
                            <h4 class="name">{{ item.name }}</h4>
                            <span class="desig">{{ item.designation }}</span>
                        </div>
                        <div class="quote-shape"></div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper/modules";

const slider_setting = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
    },
}


const testimonialData = [
    {
        id: 1,
        thumb: "/images/others/testimonial-thumb.png",
        content: `“Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, orci nulla nam est facilisi pretium class curae rutrum, tempus curabitur ante sociis dui erat vivamus. Porta massa volutpat in vulputate ad congue taciti ligula scelerisque urna, tincidunt odio gravida felis”`,
        name: "Moolin Lexo",
        designation: "SUPPORT",
    },
    {
        id: 2,
        thumb: "/images/others/testimonial-thumb.png",
        content: `“Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, orci nulla nam est facilisi pretium class curae rutrum, tempus curabitur ante sociis dui erat vivamus. Porta massa volutpat in vulputate ad congue taciti ligula scelerisque urna, tincidunt odio gravida felis”`,
        name: "Moolin Lexo",
        designation: "SUPPORT",
    },
];
</script>