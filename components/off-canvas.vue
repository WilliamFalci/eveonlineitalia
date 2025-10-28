<template>
  <div :class="`${isOffCanvasOpen ? 'offCanvas__menu-visible' : ''}`">
    <div class="offCanvas__wrap">
      <div class="offCanvas__body">
        <div class="offCanvas__top" style="justify-content: center;">
          <div class="offCanvas__logo logo">
            <NuxtImg format="webp" src="/images/logo/logo.png" alt="Logo" />
          </div>
        </div>
        <div class="offCanvas__content">
          <h2 class="title text-center">
            EVE ONLINE <span>ITALIA</span>
          </h2>
          <div class="offCanvas__contact">
            <p>Progetto nato e gestito dal giocatore TremalJack con l'obiettivo di aumentarà la visibilità del gioco EVE Online sul piano nazionale.</p>
            <p>Favorendo l'integrazione sociale tra i giocatori nonostante le diversità di pensiero e di appartenza a corporazioni, alleanze e coalizioni.</p>
            <hr style="border: 1px solid var(--tg-theme-primary)"/>
            <p>Vuoi supportare questo progetto?</p>
            <ul class="offCanvas__contact-list list-wrap">
              <li>
                Entra nel sever <nuxt-link to="https://discord.gg/t7ypApFQ7v" target="_blank">DISCORD</nuxt-link>
              </li>
            </ul>
            <br/>
            <br/>
            <p>Vuoi contribuire alle spese di mantenimento e sviluppo?</p>
            <ul class="offCanvas__contact-list list-wrap">
              <li>
                Non si accettano donazioni monetarie, ma se vuoi proprio donare allora puoi donare quanto vuoi in ISK in-game a: TremalJack
              </li>
            </ul>
          </div>
        </div>
        <div class="offCanvas__copyright">
          <p>
            Con dedizione <span>TremalJack</span>
          </p>
        </div>
      </div>
    </div>

    <div @click="closeOffcanvas" class="offCanvas__overlay"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{isOffCanvasOpen:boolean}>();
const emit = defineEmits();

const closeOffcanvas = () => {
  emit('closeOffcanvas', '/audio/remove.wav');
};
</script>
