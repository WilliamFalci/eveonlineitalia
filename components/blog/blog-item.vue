<template>
  <div class="blog-post-item">
    <div class="blog-post-content">
      <div class="blog-post-meta">
        <ul class="list-wrap justify-content-space-between">
          <li>
            By {{ blog.author }}
          </li>
          <li @click="changeLang" class="pointer">
            <i class="far fa-flag color-primary"></i> Leggi titolo in {{ currentLang == 'ita' ? 'Inglese' : 'Italiano' }}
          </li>
        </ul>
      </div>
      <h2 class="title">
        <a :href="`/blog/${blog.guid}`">{{ currentLang == 'ita' ? blog.title_ita : blog.title_eng }}</a>
      </h2>
      <div class="blog-post-bottom align-items-center">
        <div class="blog-post-read">
          <a :href="`/blog/${blog.guid}`">
            LEGGI ARTICOLO <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div>
          <i class="far fa-calendar-alt color-primary"></i> {{ dataIta }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBlogTranslated } from "@/types/blog-type";
import { ref } from "vue";

const currentLang = ref('ita')
const props = defineProps<{ blog: IBlogTranslated }>()
const dataIta = computed(() => capitalizeAll(formatDate(props.blog.pubDate.substring(0,10))))

const changeLang = () => {
  currentLang.value = currentLang.value === 'ita' ? 'eng' : 'ita'
}

</script>
