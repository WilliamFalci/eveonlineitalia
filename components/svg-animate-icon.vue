<template>
  <div class="svg-icon" :id="id" ref="svgRef" @mouseenter="handleMouseEnter"></div>
</template>

<script setup lang="ts">
import Vivus from 'vivus';

const props = defineProps(['icon', 'id']);

const svgRef = ref<HTMLElement | null>(null);
const vivusRef = ref<Vivus | null>(null);

const handleMouseEnter = () => {
  if (vivusRef.value) {
    vivusRef.value.reset().play();
  }
};

onMounted(() => {
  if (svgRef.value && !vivusRef.value) {
    vivusRef.value = new Vivus(svgRef.value, {
      duration: 180,
      file: props.icon,
    });
  }
});

onUnmounted(() => {
  if (svgRef.value) {
    svgRef.value.removeEventListener('mouseenter', handleMouseEnter);
  }
});
</script>
