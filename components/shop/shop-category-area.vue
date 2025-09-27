<template>
    <section class="product-category__area section-pt-120 section-pb-120"
        style="background-image: url('/images/bg/item-category-bg.png');">
        <div class="container custom-container4">
            <div class="row gy-4">
                <div v-for="category in categoryData" :key="category.id" :class="category.columnClass">
                    <div class="shop__category">
                        <div class="shop__category-thumb">
                            <NuxtImg :src="category.imgSrc" :alt="category.title" />
                        </div>
                        <div class="shop__category-content">
                            <h4 class="title">
                                <NuxtLink href="/shop">{{ category.title }}</NuxtLink>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const categoryData = [
    {
        id: 1,
        imgSrc: '/images/products/product-5-1.png',
        title: "Keyboard",
        columnClass: "col-lg-6",
    },
    {
        id: 2,
        imgSrc: '/images/products/product-5-2.png',
        title: "Headset",
        columnClass: "col-xl-3 col-lg-6",
    },
    {
        id: 3,
        imgSrc: '/images/products/product-5-3.png',
        title: "Joystick",
        columnClass: "col-xl-3 col-lg-6",
    },
    {
        id: 4,
        imgSrc: '/images/products/product-5-4.png',
        title: "Accessories",
        columnClass: "col-xl-3 col-lg-6",
    },
    {
        id: 5,
        imgSrc: '/images/products/product-5-5.png',
        title: "Microphone",
        columnClass: "col-xl-3 col-lg-6",
    },
    {
        id: 6,
        imgSrc: '/images/products/product-5-6.png',
        title: "Desk Table",
        columnClass: "col-lg-6",
    },
];
</script>
