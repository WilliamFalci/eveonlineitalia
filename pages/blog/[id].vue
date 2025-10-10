<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-three
      :title="(currentLang == 'ita') ? blog.title_ita : blog.title_eng"
      :subtitle="blog.author"
    ></breadcrumb-three>
    <!-- breadcrumb area end -->

    <!-- blog details area start -->
    <blog-details-area :blog="blog" @update-current-lang="handleUpdateCurrLang"></blog-details-area>
    <!-- blog details area end -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFetch, useRoute, useSeoMeta } from "nuxt/app";
import type { IBlogTranslated } from "@/types/blog-type";

useSeoMeta({ title: "EVE Online Italia - Blog" });
const route = useRoute();
const currentLang = ref('ita')
const { data: news } = await useFetch(`/api/eve-news-by-slug?slug=${route.params.id}`)
const blog = news.value as IBlogTranslated

const handleUpdateCurrLang = async (newValue: string) => {
  currentLang.value = newValue
}
</script>
