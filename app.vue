<template>
  <NuxtLayout>
    <NuxtPage />
    <animated-mouse></animated-mouse>
  </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(async () => {
	const wow = await import('wow.js')
	new wow.default().init()
})
</script>