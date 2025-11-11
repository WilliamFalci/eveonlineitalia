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
          <ui-pagination :totPages="totPages" :currPage="page" url="/blog" :take="take" :q="q" />
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
const q = ref((route.query.q) ? route.query.q.toString() : null)
const totPages = ref()
const list = ref()

const initNews = await $fetch(`/api/eve-news?page=${page.value}&take=${take.value}${(route.query.q) ? `&q=${route.query.q}` : ''}`)
list.value = (initNews as any)?.elements as IBlogTranslated[]
totPages.value = (initNews as any)?.totPages

const handleUpdateQ = async (newValue: string|null) => {
    page.value = 1
    take.value = 3
    q.value = newValue

    const queries = {...route.query}
    
    if (!q.value) {
      delete queries['q']
    }else{
      queries.q = newValue
    }

    router.push({
      path: route.path,
      query: queries
    })
    
    let url = `/api/eve-news?page=${page.value}&take=${take.value}${(newValue) ? `&q=${newValue}` : ''}`
    const news = await $fetch(url)
    list.value = (news as any)?.elements as IBlogTranslated[]
    totPages.value = (news as any)?.totPages
}
</script>
