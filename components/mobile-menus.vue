<template>
  <ul class="navigation">
    <template v-for="(menu, i) in menu_data" :key="i">
      <li v-if="menu.sub_menu" class="menu-item-has-children">
        <nuxt-link :to="menu.link">{{menu.title}}</nuxt-link>
        <ul class="sub-menu" :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
          <li v-for="(sub, i) in menu.sub_menu" :key="i">
            <nuxt-link :to="sub.link">{{ sub.title }}</nuxt-link>
          </li>
        </ul>
        <div
          @click="openMobileMenu(menu.title, '/audio/click.wav')"
          :class="['dropdown-btn', { open: navTitle === menu.title }]"
        >
          <span class="plus-line"></span>
        </div>
      </li>

      <li v-if="!menu.sub_menu">
        <nuxt-link :to="menu.link">{{ menu.title }}</nuxt-link>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import menu_data from "@/data/menu-data";
const navTitle = ref<string>("");
const openMobileMenu = (menu: string, audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
  if (navTitle.value === menu) {
    navTitle.value = "";
  } else {
    navTitle.value = menu;
  }
};
</script>
