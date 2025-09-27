<template>
    <section class="deal__area fix section-pb-120 section-pt-120"
        style="background-image: url(/images/bg/deal-area_bg.png);">
        <div class="container custom-container4">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__title mb-60 text-center title-shape-none">
                        <h3 class="title">Deal Of The Day</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <swiper v-bind="slider_setting" :modules="[Navigation, Scrollbar]" class="swiper-container deal-active">
                <swiper-slide v-for="(item) in shopDealData" :key="item.id">
                    <div class="shop__item2">
                        <div class="shop__item-thumb">
                            <nuxt-link href="/shop-details">
                                <img :src="item.img" alt="img">
                            </nuxt-link>
                        </div>
                        <div class="shop__item-content">
                            <div class="shop__item-rating"><i class="fas fa-star"></i>{{ item.rating }}</div>
                            <h4 class="title"><nuxt-link href="/shop-details">{{ item.title }}</nuxt-link></h4>
                            <div class="shop__item-price">${{ item.price }}</div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="container custom-container4">
                    <!-- scrollbar -->
                    <div class="swiper-scrollbar"></div>
                </div>
            </swiper>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper/modules";



// slider setting
const slider_setting = {
    loop: true,
    centeredSlides: true,
    spaceBetween: 24,
    observer: true,
    observeParents: true,
    breakpoints: {
        1920: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 3
        },
        320: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 200
    }
}

const shopDealData = [
    {
        id: 1,
        img: '/images/products/product-01.png',
        title: "Streaming Microphone",
        price: 59.99,
        rating: 4.8,
    },
    {
        id: 2,
        img: '/images/products/product-02.png',
        title: "Wired Headphone With Mic",
        price: 89.99,
        rating: 4.8,
    },
    {
        id: 3,
        img: '/images/products/product-03.png',
        title: "Xbox Wireless Controller",
        price: 39.99,
        rating: 4.8,
    },
    {
        id: 4,
        img: '/images/products/product-04.png',
        title: "Mini Portable Speaker 2.0",
        price: 29.99,
        rating: 4.8,
    },
    {
        id: 5,
        img: '/images/products/product-05.png',
        title: "Logitech G502 X PLUS Mouse",
        price: 69.99,
        rating: 4.8,
    },
    {
        id: 6,
        img: '/images/products/product-06.png',
        title: "Microsoft Xbox Series S 10GB",
        price: 149.99,
        rating: 4.8,
    },
];
</script>