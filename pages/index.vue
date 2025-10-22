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
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({ title: "EVE Italia - Community Italiana di EVE Online", description: `EVE Italia - La community italiana di EVE Online. Condividi strategie, esperienze e unisciti al nostro Discord per vivere l’universo di EVE!` });
</script>
