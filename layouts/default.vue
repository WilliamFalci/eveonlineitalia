<template>
  <div>
    <header-three></header-three>
    <main class="main--area">
      <slot/>
    </main>
    <footer-two></footer-two>
    <back-to-top></back-to-top>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.color-primary{
  color: var(--tg-theme-primary);
}
.border-color-primary{
  border-color: var(--tg-theme-primary);
}
.justify-content-space-between{
  justify-content: space-between;
}
.font-italic {
  font-style: italic!important;
}
</style>
