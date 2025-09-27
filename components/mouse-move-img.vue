<template>
  <span class="mykd_mousemove">
    <img :src="imgSrc" :data-depth="dataDepth" alt="img">
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{imgSrc:string;dataDepth:string}>(),{
  dataDepth: '.2',
});
onMounted(() => {
  useMouseMove();
})
</script>
