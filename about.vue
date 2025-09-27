<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one title="ABOUT US" subtitle="ABOUT US"></breadcrumb-one>
    <!-- breadcrumb area end -->

    <!-- about area start -->
    <about-area-3></about-area-3>
    <!-- about area end -->

    <!-- services area start -->
    <services-area></services-area>
    <!-- services area end -->

    <!-- team area start -->
    <team-area></team-area>
    <!-- team area end -->
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({ title: "About - MYKD" });
</script>
