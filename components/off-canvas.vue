<template>
  <div :class="`${isOffCanvasOpen ? 'offCanvas__menu-visible' : ''}`">
    <div class="offCanvas__wrap">
      <div class="offCanvas__body">
        <div class="offCanvas__top">
          <div class="offCanvas__logo logo">
            <nuxt-link to="/">
              <img src="/images/logo/logo.png" alt="Logo" />
            </nuxt-link>
          </div>
          <div
            class="offCanvas__toggle"
            @click="closeOffcanvas"
          >
            <i class="flaticon-swords-in-cross-arrangement"></i>
          </div>
        </div>
        <div class="offCanvas__content">
          <h2 class="title">
            Best Seller of Month Ideas for <span>NFT Wallet</span>
          </h2>
          <div class="offCanvas__contact">
            <h4 class="small-title">CONTACT US</h4>
            <ul class="offCanvas__contact-list list-wrap">
              <li>
                <nuxt-link to="tel:93332225557">+9 333 222 5557</nuxt-link>
              </li>
              <li>
                <nuxt-link to="mailto:info@webmail.com">
                  info@webmail.com
                </nuxt-link>
              </li>
              <li>New Central Park W7 Street,New York</li>
            </ul>
          </div>
          <div class="offCanvas__newsletter">
            <h4 class="small-title">Subscribe</h4>
            <form action="#" class="offCanvas__newsletter-form">
              <input type="email" placeholder="Get News & Updates" />
              <button type="submit">
                <i class="flaticon-send"></i>
              </button>
            </form>
            <p>
              Subscribe dolor sitamet, consectetur adiping eli. Duis esollici
              tudin augue.
            </p>
          </div>
          <ul class="offCanvas__social list-wrap">
              <li v-for="(s, i) in social_data" :key="i">
                <nuxt-link :to="s.link" target="_blank">
                  <i :class="s.icon"></i>
                </nuxt-link>
              </li>
          </ul>
        </div>
        <div class="offCanvas__copyright">
          <p>
            Copyright © {{new Date().getFullYear()}} - By <span>MYKD</span>
          </p>
        </div>
      </div>
    </div>

    <div @click="closeOffcanvas" class="offCanvas__overlay"></div>
  </div>
</template>

<script setup lang="ts">
import social_data from "@/data/social-data";
defineProps<{isOffCanvasOpen:boolean}>();
const emit = defineEmits();

const closeOffcanvas = () => {
  emit('closeOffcanvas', '/audio/remove.wav');
};
</script>
