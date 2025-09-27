<template>
  <div :class="`${isMobileOffCanvasOpen?'mobile-menu-visible':''}`">
    <div class="tgmobile__menu">
      <nav class="tgmobile__menu-box">
        <div class="close-btn" @click="closeMobileOffcanvas">
          <i class="flaticon-swords-in-cross-arrangement"></i>
        </div>
        <div class="nav-logo">
          <nuxt-link to="/">
            <img src="/images/logo/logo.png" alt="Logo" />
          </nuxt-link>
        </div>
        <div class="tgmobile__search">
          <form action="#">
            <input type="text" placeholder="Search here..." />
            <button>
              <i class="flaticon-loupe"></i>
            </button>
          </form>
        </div>
        <div class="tgmobile__menu-outer">
          <mobile-menus/>
        </div>
        <div class="social-links">
          <ul class="list-wrap">
            <li v-for="(s, i) in social_data" :key="i">
              <nuxt-link :to="s.link" target="_blank">
                <i :class="s.icon"></i>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="tgmobile__menu-backdrop" @click="closeMobileOffcanvas" ></div>
  </div>
</template>

<script setup lang="ts">
import social_data from "@/data/social-data";
defineProps<{isMobileOffCanvasOpen:boolean}>();
const emit = defineEmits();

const closeMobileOffcanvas = () => {
  emit('closeMobileOffcanvas', '/audio/remove.wav');
};
</script>
