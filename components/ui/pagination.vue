<template>
  <ul class="list-wrap d-flex flex-wrap justify-content-center" v-if="totPages">
    <li v-for="n in 5" :key="n">
      <template v-if="n == 1 && currPage == 1">
        <button to="#" class="page-numbers current"> {{n}} </button>
      </template>

      <template v-else-if="n == 1 && currPage >= 2">
        <button to="#" class="page-numbers" @click="changePage(currPage - 1)"> < </button>
      </template>

      <template v-else-if="n == 2 && currPage >= 2">
        <button to="#" class="page-numbers" @click="changePage(currPage - 1)"> {{currPage - 1}} </button>
      </template>

      <template v-else-if="n == 3 && currPage > 1">
        <button to="#" class="page-numbers current"> {{currPage}} </button>
      </template>

      <template v-else-if="n == 4 && currPage >= 2 && currPage < totPages">
        <button class="page-numbers" @click="changePage(currPage + 1)"> {{currPage + 1}} </button>
      </template>

      <template v-else-if="n == 5 && totPages >= 5 && currPage < totPages">
        <button class="page-numbers" @click="changePage(currPage +1)"> > </button>
      </template>

      <template v-else-if="n <= totPages && n > currPage">
        <button class="page-numbers" @click="changePage(n)"> {{n}} </button>
      </template>

      
    </li>

  </ul>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

defineProps<{totPages:number, currPage:number}>()
const emit = defineEmits<{
  (e: 'update-curr-page', value: number): void
}>()

const changePage = (value:number) => {
  emit('update-curr-page', value)
}
</script>
