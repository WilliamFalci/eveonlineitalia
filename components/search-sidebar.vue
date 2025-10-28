<template>
<aside class="shop-sidebar">
    <div class="shop__widget">
        <h4 class="shop__widget-title">CERCA</h4>
        <div class="shop__widget-inner">
            <div class="shop__search">
                <input type="text" :placeholder="tPlaceholder" v-model="query" @keyup.enter="changeQ"/>
                <button class="p-0 border-0" name="search"><i class="flaticon-search" @click="changeQ"></i></button>
            </div>
            <hr v-if="query" style="border: 1px solid var(--tg-theme-primary)"/>
            <div>
              <button name="remove-filter" class="btn btn-primary d-flex justify-content-center m-auto" @click="removeFilter" v-if="query">Rimuovi Filtro</button>
            </div>
        </div>
    </div>
</aside>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'nuxt/app';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const query = ref((route.query.q) ? route.query.q.toString() : null)

const props = defineProps<{tPlaceholder:string}>()

const emit = defineEmits<{
  (e: 'update-q', value: string|null): void
}>()

const changeQ = () => {
  emit('update-q', query.value)
}

const removeFilter = () => {
  query.value = null
  changeQ()
}
</script>
