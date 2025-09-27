<template>
  <template v-if="!style_2">
    <span ref="target" class="sub-title tg__animate-text">{{ title }}</span>
  </template>
  <template v-if="style_2">
    <p ref="target" class="tg__animate-text style2">{{ title }}</p>
  </template>
</template>

<script setup lang="ts">
defineProps<{title:string;style_2?:boolean}>();
import { useIntersectionObserver } from '@vueuse/core';

const isView = ref(false)
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting;
      console.log(isIntersecting)
      if (isIntersecting) {
        isView.value = true;
      }
  },
)

watch(isView, (newValue) => {
  if (newValue) {
    useTextAnimation()
  }
})
</script>