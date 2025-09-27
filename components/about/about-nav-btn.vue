<template>
  <li class="nav-item" role="presentation">
    <button
      :class="`nav-link ${isActive ? 'active' : ''}`"
      :id="`about${id}-tab`"
      data-bs-toggle="tab"
      :data-bs-target="`#about${id}`"
      type="button"
      role="tab"
      :aria-controls="`about${id}`"
      :aria-selected="`${isActive ? 'true' : 'false'}`"
      :tabindex="-1"
      @click="handleClickSound('/audio/tab.mp3')"
    >
      <span class="img-shape"></span>
      <img :src="img" alt="img" />
    </button>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(['id', 'img', 'isActive']);

const handleClickSound = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
};
</script>