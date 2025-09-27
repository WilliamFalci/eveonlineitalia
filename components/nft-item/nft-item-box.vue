<template>
  <div class="nft-item__box">
    <div class="nft-item__thumb">
      <nuxt-link to="/shop-details">
        <img :src="item.img" alt="img" />
      </nuxt-link>
    </div>
    <div class="nft-item__content">
      <h4 class="title">
        <nuxt-link to="/shop-details">{{ item.title }}</nuxt-link>
      </h4>
      <div class="nft-item__avatar">
        <div class="avatar-name">
          <h5 class="name">
            <nuxt-link to="/shop-details">{{ item.creator_name }}</nuxt-link>
          </h5>
        </div>
      </div>
      <div class="nft-item__bid">
        <div class="nft-item__price">
          <p>
            {{ item.eth }}
            <span class="currency">ISK</span>
          </p>
          <a :href="item.url" target="_blank" class="bid-btn">
            zKill <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['item']);
</script>
