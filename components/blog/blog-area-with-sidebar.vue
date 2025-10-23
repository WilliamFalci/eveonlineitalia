<template>
  <section class="blog-area">
    <div class="container">
      <div class="section__title text-center mb-60 title-shape-none">
        <span class="sub-title2">Dal sito ufficial di Eve Online</span>
        <h3 class="title2">TRADOTTE PER VOI</h3>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-3 col-lg-4 col-md-11 order-2 order-lg-0">
          <!-- sidebar start  -->
          <search-sidebar @update-q="handleUpdateQ" tPlaceholder="Cerca titolo" />
          <!-- sidebar end  -->
        </div>

        <div class="blog-post-wrapper">
          <!-- blog item start -->
          <blog-item v-for="blog in list" :key="blog.guid" :blog="blog" />
          <!-- blog item end -->
        </div>

        <div class="pagination__wrap" v-if="totPages">
          <!-- pagination start -->
          <ui-pagination :totPages="totPages" :currPage="page" @update-curr-page="handleUpdateCurrPage" />
          <!-- pagination end -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IBlogTranslated } from '@/types/blog-type';
import { useFetch, useRoute, useRouter } from 'nuxt/app';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const page = ref((route.query.page && Number(route.query.page) > 0) ? Number(route.query.page) : 1)
const take = ref((route.query.take && Number(route.query.take) > 0) ? Number(route.query.take) : 3)
const totPages = ref()
const list = ref()
const q = ref()

const { data: initNews } = await useFetch(`/api/eve-news?page=${page.value}&take=${take.value}`)
list.value = (initNews.value as any)?.elements as IBlogTranslated[]
totPages.value = (initNews.value as any)?.totPages

const handleUpdateCurrPage = async (newValue: number) => {
    page.value = newValue
    let url = `api/eve-news?page=${page.value}&take=${take.value}`
    if (q.value) url = `${url}&q=${q.value}`
    const { data: news } = await useFetch(url)
    router.push({
        path: route.path,
        query: { ...route.query, page: page.value, take: take.value }
    })
    list.value = (news.value as any)?.elements as IBlogTranslated[]
    totPages.value = (news.value as any)?.totPages
}

if (route.query.page && Number(route.query.page) > Number(totPages.value)){
    await handleUpdateCurrPage(totPages.value)
}

const handleUpdateQ = async (newValue: string) => {
    page.value = 1
    take.value = 3
    router.push({
        path: route.path,
        query: { ...route.query, page: page.value, take: take.value }
    })
    q.value = newValue
    let url = `/api/eve-news?page=${page.value}&take=${take.value}`
    if (q.value) url = `${url}&q=${q.value}`
    const { data: news } = await useFetch(url)
    list.value = (news.value as any)?.elements as IBlogTranslated[]
    totPages.value = (news.value as any)?.totPages
}
</script>
