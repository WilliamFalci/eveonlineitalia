<template>
  <div>
    <!-- hero banner start -->
    <hero-banner-two></hero-banner-two>
    <!-- hero banner end -->

    <!-- match area start -->
    <match-area></match-area>
    <!-- match area end -->

    <!-- video-area-three -->
    <video-area-three></video-area-three>
    <!-- video-area-three -->

    <!-- blog area start -->
    <blog-area id="news"/>
    <!-- blog area end -->

    <!-- video-area-warlock -->
    <video-area-warlock></video-area-warlock>
    <!-- video-area-warlock -->

    
    <!-- nft item area start -->
    <nft-item-area></nft-item-area>
    <!-- nft item area end -->


    <!-- project area start -->
    <project-area></project-area>
    <!-- project area end -->

    <!-- team area start -->
    <team-area></team-area>
    <!-- team area end -->

    <!-- social area start -->
    <social-area></social-area>
    <!-- social area end -->
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta, useHead } from 'nuxt/app';

const title = 'EVE Italia - Community Italiana di EVE Online'
const description = 'EVE Italia - La community italiana di EVE Online. Condividi strategie, esperienze e unisciti al nostro Discord per vivere l’universo di EVE!'
const image = '/images/logo/logo.png'
const url = 'https://eveonlineitalia.it'

useSeoMeta({
  title: title,
  description: description
});

useHead({
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]
})
</script>
