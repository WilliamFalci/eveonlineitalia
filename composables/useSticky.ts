import { ref, onMounted } from 'vue';

export function useSticky() {
  let isSticky = ref<boolean>(false);
  let isStickyVisible = ref<boolean>(false);
  
  const handleScroll = () => {
    const headerElement = document.getElementById('sticky-header');
    const headerHeight = headerElement?.offsetHeight || 0;
    const windowTop = window.scrollY;

    if (windowTop >= headerHeight) {
      isSticky.value = true;
    } else {
      isSticky.value = false;
      isStickyVisible.value = false;
    }

    if (isSticky.value) {
      if (windowTop < lastScrollTop) {
        isStickyVisible.value = true;
      } else {
        isStickyVisible.value = false;
      }
    }

    lastScrollTop = windowTop;
  };

  let lastScrollTop = 0;

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));
  return { isSticky,isStickyVisible }
}