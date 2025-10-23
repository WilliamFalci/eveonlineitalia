<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-three
      title="EVE ITALIA BLOG"
      subtitle="EVE ONLINE"
    ></breadcrumb-three>
    <!-- breadcrumb area end -->

    <!-- shop area start -->
    <blog-area-with-sidebar></blog-area-with-sidebar>
    <!-- shop area end -->
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "nuxt/app";

useSeoMeta({ title: "EVE Online Italia - Blog" });
</script>
