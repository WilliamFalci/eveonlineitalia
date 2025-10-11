<template>
<aside class="shop-sidebar">
    <div class="shop__widget">
        <h4 class="shop__widget-title">CERCA</h4>
        <div class="shop__widget-inner">
            <div class="shop__search">
                <input type="text" placeholder="Cerca personaggio" v-model="query" @keyup.enter="changeQ"/>
                <button class="p-0 border-0"><i class="flaticon-search" @click="changeQ"></i></button>
            </div>
            <hr v-if="query" style="border: 1px solid var(--tg-theme-primary)"/>
            <div>
              <buton class="btn btn-primary d-flex justify-content-center" @click="removeFilter" v-if="query">Rimuovi Filtro</buton>
            </div>
        </div>
    </div>
</aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const query = ref()

const emit = defineEmits<{
  (e: 'update-q', value: string): void
}>()

const changeQ = () => {
  emit('update-q', query.value)
}

const removeFilter = () => {
  query.value = null
  changeQ()
}
</script>
