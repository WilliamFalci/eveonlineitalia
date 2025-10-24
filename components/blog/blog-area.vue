<template>
  <section class="blog-area">
    <div class="container">
      <div class="section__title text-center mb-60 title-shape-none">
        <span class="sub-title2">Dal sito ufficial di Eve Online</span>
        <h3 class="title2">LE ULTIME NEWS</h3>
      </div>
      <div class="row justify-content-center">
        <div class="blog-post-wrapper">
          <!-- blog item start -->
          <blog-item v-for="blog in news" :key="blog.guid" :blog="blog" />
          <!-- blog item end -->
        </div>

        <div class="pagination__wrap" v-if="totPages">
          <!-- pagination start -->
          <ui-pagination :totPages="totPages" :currPage="page" :take="take" url="blog" />
          <!-- pagination end -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IBlogTranslated } from '@/types/blog-type';
import { useFetch } from 'nuxt/app';
import { ref } from 'vue';

const page = ref(1)
const take = ref(3)
const totPages = ref()
const news = ref()

const {data: initNews} = await useFetch(`/api/eve-news?page=${page.value}&take=${take.value}`)
news.value = (initNews.value as any)?.elements as IBlogTranslated[]
totPages.value =  (initNews.value as any)?.totPages

const handleUpdateCurrPage = async (newValue: number) => {
  page.value = newValue
  const {data: initNews} = await useFetch(`/api/eve-news?page=${page.value}&take=${take.value}`)
  news.value = (initNews.value as any)?.elements as IBlogTranslated[]
  totPages.value =  (initNews.value as any)?.totPages
}
</script>
