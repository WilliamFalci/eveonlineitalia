<template>
  <div class="nft-item__box" style="align-items: center;">
    <div class="nft-item__thumb d-flex">
      <NuxtImg :src="item.img" alt="img" style="width: 128px;" />
    </div>
    <div class="nft-item__content">
      <h4 class="title">
        {{ item.title }}
      </h4>
      <div class="nft-item__avatar">
        <div class="avatar-img">
          <a :href="item.creator_url" target="_blank">
            <NuxtImg :src="item.creator" :alt="item.creator_name" />
          </a>
        </div>
        <div class="avatar-name">
          <h5 class="name">
            {{ item.creator_name }}
          </h5>
        </div>
      </div>
      <div class="nft-item__bid">
        <div class="nft-item__price">
          <p>
            {{ item.eth }}
            <span class="currency">ISK</span>
          </p>
          <a :href="item.url" target="_blank" class="bid-btn" style="margin-left: 10px">
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
