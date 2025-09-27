<template>
    <section class="shop-area">
        <div class="container custom-container4">
            <div class="section__title text-center mb-60 title-shape-none">
                <h3 class="title">NEW COLLECTION</h3>
            </div>
            <div class="row justify-content-center gy-4">
                <div v-for="(item) in product_data_two" :key="item.id" class="col-xl-3 col-md-6">
                    <div class="shop__item2">
                        <div class="shop__item-thumb">
                            <nuxt-link href="/shop-details">
                                <NuxtImg :src="item.img" alt="img">
                            </nuxt-link>
                            <div class="actions-btn-wrap">
                                <span class="icon-btn">
                                    <i class="fas fa-plus"></i>
                                </span>
                                <div class="action-btn">
                                    <a href="#" class="icon-btn"><i class="far fa-heart"></i></a>
                                    <a href="#" class="icon-btn">
                                        <svg-compare/>
                                    </a>
                                    <a href="#" class="icon-btn"><i class="far fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="shop__item-content">
                            <div class="shop__item-rating"><i class="fas fa-star"></i>{{item.rating}}</div>
                            <h4 class="title"><nuxt-link href="/shop-details">{{item.title}}</nuxt-link></h4>
                            <div class="shop__item-price">${{item.price}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { product_data_two } from '@/data/product-data';
</script>