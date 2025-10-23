<template>
  <header>
    <div id="sticky-header" :class="`tg-header__area transparent-header ${isSticky?'tg-sticky-menu':''} ${isStickyVisible?'sticky-menu__show':''}`">
      <div class="container custom-container">
        <div class="row">
          <div class="col-12">
            <div class="mobile-nav-toggler" 
             @click="handleOpenMobileOffCanvas('/audio/click.wav')">
              <i class="fas fa-bars"></i>
            </div>
            <div class="tgmenu__wrap">
              <nav class="tgmenu__nav">
                <div class="logo">
                  <nuxt-link to="/">
                    <NuxtImg format="webp" src="/images/logo/logo.png" alt="Logo" />
                  </nuxt-link>
                </div>
                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                  <!-- nav menus start -->
                   <header-nav-menus/>
                  <!-- nav menus end -->
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  off canvas start -->
    <off-canvas :isOffCanvasOpen="isOffCanvasOpen" @closeOffcanvas="handleCloseOffCanvas" />
    <!--  off canvas end -->

    <!-- mobile off canvas start -->
    <mobile-offcanvas :isMobileOffCanvasOpen="isMobileOffCanvasOpen" @closeMobileOffcanvas="handleCloseMobileOffCanvas" />
    <!-- mobile off canvas end -->
  </header>
</template>

<script setup lang="ts">
defineProps<{style_2?:boolean}>();
const {isSticky,isStickyVisible} = useSticky();
const isActive = ref<boolean>(false);
const isOffCanvasOpen = ref<boolean>(false);
const isMobileOffCanvasOpen = ref<boolean>(false);

const handleOpenSearch = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isActive.value = !isActive.value;
};

const handleCloseSearch = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isActive.value = !isActive.value;
};
// off canvas
const handleOpenOffCanvas = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};

const handleCloseOffCanvas = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};
// mobile off canvas
const handleOpenMobileOffCanvas = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isMobileOffCanvasOpen.value = !isMobileOffCanvasOpen.value;
};

const handleCloseMobileOffCanvas = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  isMobileOffCanvasOpen.value = !isMobileOffCanvasOpen.value;
};
</script>
