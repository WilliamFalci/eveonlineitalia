<template>
 <vue-easy-lightbox
    :visible="visible"
    :imgs="images"
    :index="indexVal"
    @hide="handleHideModal"
  ></vue-easy-lightbox>
</template>

<script setup lang="ts">
import VueEasyLightbox from "vue-easy-lightbox";
defineProps<{images:string[];indexVal:number;visible:boolean}>();
const emit = defineEmits();
function handleHideModal() {
  emit('handleHide');
}
</script>
