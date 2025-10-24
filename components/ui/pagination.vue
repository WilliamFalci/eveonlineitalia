<template>
  <ul class="list-wrap d-flex flex-wrap justify-content-center" v-if="totPages">
    <li v-for="n in 5" :key="n">
      <template v-if="n == 1 && currPage == 1">
        <span :href="`${url}?page=${n}&take=${take}${(q) ? `&q=${q}` : '' }`" class="page-numbers current"> {{n}} </span>
      </template>

      <template v-else-if="n == 1 && currPage >= 2">
        <a :href="`${url}?page=${currPage - 1}&take=${take}${(q) ? `&q=${q}` : '' }`" class="page-numbers"> < </a>
      </template>

      <template v-else-if="n == 2 && currPage >= 2">
        <a :href="`${url}?page=${currPage - 1}&take=${take}${(q) ? `&q=${q}` : '' }`" class="page-numbers"> {{currPage - 1}} </a>
      </template>

      <template v-else-if="n == 3 && currPage > 1">
        <span :href="`${url}?page=${currPage}&take=${take}${(q) ? `&q=${q}` : '' }`" class="page-numbers current"> {{currPage}} </span>
      </template>

      <template v-else-if="n == 4 && currPage >= 2 && currPage < totPages">
        <a :href="`${url}?page=${currPage + 1}&take=${take}${(q) ? `&q=${q}` : '' }`" class="page-numbers"> {{currPage + 1}} </a>
      </template>

      <template v-else-if="n == 5 && totPages >= 5 && currPage < totPages">
        <a :href="`${url}?page=${currPage +1}&take=${take}${(q) ? `&q=${q}` : '' }`" class="page-numbers"> > </a>
      </template>

      <template v-else-if="n <= totPages && n > currPage">
        <a :href="`${url}?page=${n}&take=${take}${(q) ? `&q=${q}` : '' }`" class="page-numbers"> {{n}} </a>
      </template>

      
    </li>

  </ul>
</template>

<script setup lang="ts">
defineProps<{totPages:number, currPage:number, url:string, take:number, q:string|null}>()
</script>
