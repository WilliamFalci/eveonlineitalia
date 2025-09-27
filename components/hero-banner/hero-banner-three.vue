<template>
    <section class="banner__area banner__area-two">
        <div class="banner__bg-shape" style="background-image: url(/images/slider/banner_bg_shape3-2.jpg);">
            <NuxtImg src="/images/slider/banner_bg_shape3-1.jpg" alt="img">
        </div>
        <div class="banner__bg tg-jarallax">
            <NuxtImg src="/images/slider/banner_bg3.png" alt="img">
        </div>
        <div class="banner__shape banner__shape3-1 jump">
            <NuxtImg src="/images/slider/slider_shape3-1.svg" alt="img">
        </div>
        <div class="banner__shape banner__shape3-2 movingX">
            <NuxtImg src="/images/slider/slider_shape3-2.svg" alt="img">
        </div>
        <div class="banner__shape banner__shape3-3 jump-reverse">
            <NuxtImg src="/images/slider/slider_shape3-3.svg" alt="img">
        </div>
        <div class="container custom-container2">
            <div class="row gy-5 align-items-center flex-row-reverse">
                <div class="col-xl-6">
                    <div class="banner__img wow bounceInRight" data-wow-delay=".4s">
                        <div class="banner__img-shape">
                            <NuxtImg src="/images/slider/thumb_bg_shape3-1.jpg" alt="img">
                        </div>
                        <div class="thumb">
                            <NuxtImg src="/images/slider/slider_img03.png" alt="img">
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="banner__content slider__content">
                        <span class="sub-title2 wow bounceInLeft" data-wow-delay=".1s">Professional Esports Team</span>
                        <h2 class="title wow bounceInLeft" data-wow-delay=".2s">Game Live</h2>
                        <p class="wow bounceInLeft" data-wow-delay=".4s">Lorem ipsum dolor sit amet consectetur
                            adipiscing elit, non parturient nulla eleifend in sagittis, torquent semper cubilia cras
                            donec vehicula. Ultrices cubilia venenatis mattis senectus vestibulum etiam...</p>
                        <div class="banner__btn d-flex wow bounceInLeft" data-wow-delay=".6s">
                            <nuxt-link href="/contact" class="tg-btn-4">
                                <span>Explore Items</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>