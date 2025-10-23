<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-three :title="(currentLang == 'ita') ? blog.post.title_ita : blog.post.title_eng"
      :subtitle="blog.post.author"></breadcrumb-three>
    <!-- breadcrumb area end -->

    <!-- blog details area start -->
    <blog-details-area :blog="blog.post" @update-current-lang="handleUpdateCurrLang"></blog-details-area>
    <!-- blog details area end -->

    <hr class="border-color-primary"/>

    <div class="blog-post-bottom align-items-center" style="justify-content: space-around;">
      <div class="blog-post-read" v-if="blog.prevPost">
        <a :href="`/blog/${blog.prevPost.slug}`">
          LEGGI: {{ currentLang == 'ita' ? blog.prevPost.title_ita : blog.prevPost.title_eng }}<i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="blog-post-read" v-if="blog.nextPost">
        <a :href="`/blog/${blog.nextPost.slug}`">
          LEGGI: {{ currentLang == 'ita' ? blog.nextPost.title_ita : blog.nextPost.title_eng }}<i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <hr class="border-color-primary"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFetch, useRoute, useSeoMeta } from "nuxt/app";
import type { BlogPostTranslated } from "@/types/blog-type";

const route = useRoute();
const currentLang = ref('ita')
const { data: news } = await useFetch(`/api/eve-news-by-slug?slug=${route.params.id}`)
const blog = news.value as BlogPostTranslated
useSeoMeta({ title: `${blog.post.title_ita} - EO Italia` });

const handleUpdateCurrLang = async (newValue: string) => {
  currentLang.value = newValue
}
</script>
