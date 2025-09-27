<template>
  <div>
    <div
        ref="eRef"
        :class="`mouseCursor cursor-outer ${mouse?'cursor-big':''}`"
        style="visibility: visible"
      ></div>
      <div
        ref="tRef"
        :class="`mouseCursor cursor-inner ${mouse?'cursor-big':''}`"
        style="visibility: visible"
      >
        <span>View <br/> Image</span>
      </div>
  </div>
</template>

<script setup lang="ts">
const mouse = useBigMouse();
const eRef = ref<HTMLDivElement | null>(null);
const tRef = ref<HTMLDivElement | null>(null);
const nRef = ref<number>(0);
const iRef = ref<number>(0);
const oRef = ref<boolean>(false);

onMounted(() => {
  const handleMouseMove = (s: MouseEvent) => {
      if (!oRef.value) {
        if (tRef.value) {
          tRef.value.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
        }
      }
      if (eRef.value) {
        eRef.value.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      }
      nRef.value = s.clientY;
      iRef.value = s.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    
});
</script>
