<template>
  <button class="scroll__top scroll-to-target" data-target="html">
    <i class="flaticon-right-arrow"></i>
  </button>
</template>

<script setup lang="ts">
onMounted(() => {
  const result = document.querySelector('.scroll__top') as HTMLElement;
  if (result) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        result.classList.add('open')
      } else {
        result.classList.remove('open')
      }
    });
    result.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
</script>
