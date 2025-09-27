<template>
   <div class="shop__item">
      <div class="shop__item-thumb">
        <nuxt-link :to="`/shop-details/${item.id}`">
          <img :src="item.img" alt="img"/>
        </nuxt-link>
        <nuxt-link to="#" class="wishlist-button">
          <i class="far fa-heart"></i>
        </nuxt-link>
      </div>
      <div class="shop__item-line"></div>
      <div class="shop__item-content">
        <div class="shop__item-content-top">
          <h4 class="title">
            <nuxt-link :to="`/shop-details/${item.id}`">{{item.title}}</nuxt-link>
          </h4>
          <div class="shop__item-price">${{item.price}}</div>
        </div>
        <div class="shop__item-cat">
          <nuxt-link to="/shop">{{item.category}}</nuxt-link>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/product-type";

defineProps<{item:IProduct}>()
</script>
