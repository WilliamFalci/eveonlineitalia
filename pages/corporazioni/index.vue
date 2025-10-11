<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one
      title="Corporazioni"
      subtitle="Corporazioni"
      bg="/images/bg/breadcrumb_bg03.jpg"
    ></breadcrumb-one>
    <!-- breadcrumb area end -->

    <!-- tournament list area start  -->
    <corporations-list-area />
    <!-- tournament list area end  -->
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({ title: "Corporazioni Italiane della community EVE Online" });
</script>
