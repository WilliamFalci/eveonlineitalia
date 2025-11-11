<template>
    <ul class="navigation">
        <template v-for="menu in menu_data" :key="menu.id">
            <li v-if="menu.sub_menu"
                :class="{ 'menu-item-has-children active': menu.sub_menu && menu.sub_menu.some(sub => route.path === sub.link) }">
                <nuxt-link to="#">
                    {{ menu.title }}
                </nuxt-link>
                <ul v-if="menu.sub_menu" class="sub-menu">
                    <li v-for="(sub, i) in menu.sub_menu" :key="i" :class="{ active: route.path === sub.link }">
                        <a :href="sub.link">{{ sub.title }}</a>
                    </li>
                </ul>
            </li>
            <li v-else :class="{ active: route.path === menu.link }">
                <nuxt-link :to="menu.link">
                    {{ menu.title }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script setup lang="ts">
import menu_data from '@/data/menu-data';
const route = useRoute();
</script>