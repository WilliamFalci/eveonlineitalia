<template>
    <section class="blog-area blog-details-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="blog-post-wrapper">
                    <div class="blog-post-item">
                        <div class="blog-post-content blog-details-content">
                            <div class="blog-post-meta">
                                <ul class="list-wrap justify-content-space-between">
                                    <li>By<nuxt-link to="#">{{ blog.author }}</nuxt-link></li>
                                    <li><i class="far fa-calendar-alt"></i> {{ dataIta }}</li>
                                    <li @click="changeLang" class="pointer">
                                        <i class="far fa-flag color-primary"></i> Leggi articolo in {{ currentLang ==
                                        'ita' ? 'Inglese' : 'Italiano' }}
                                    </li>
                                </ul>
                            </div>
                            <hr class="border-color-primary"/>
                            <p v-if ="currentLang == 'ita'" class="small text-center font-italic">Stai leggendo questo articolo tradotto in italiano. Alcune parti potrebbero non essere perfette: se vuoi, puoi leggere l’articolo in lingua originale cliccando su “LEGGI L’ARTICOLO IN INGLESE”</p>
                            <hr v-if ="currentLang == 'ita'" class="border-color-primary"/>
                            <div v-html="currentLang == 'ita' ? content_ita : content_eng"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { IBlogTranslated } from "@/types/blog-type";
import { capitalizeAll, formatDate } from "../../utils/utils";

const props = defineProps<{ blog: IBlogTranslated }>()

const currentLang = ref('ita')

const content_ita = props.blog.content_ita.replace(/<a(?![^>]*\btarget=)([^>]*)>/gi, '<a target="_blank"$1>');
const content_eng = props.blog.content_eng.replace(/<a(?![^>]*\btarget=)([^>]*)>/gi, '<a target="_blank"$1>');
const dataIta = computed(() => capitalizeAll(formatDate(props.blog.pubDate.toString().substring(0,10))))


const changeLang = () => {
  currentLang.value = currentLang.value === 'ita' ? 'eng' : 'ita'
  emit('update-current-lang', currentLang.value)
}

const emit = defineEmits<{
  (e: 'update-current-lang', value: string): void
}>()
</script>

<style lang="css" scoped>
img {
    margin: auto;
    display: flex;
}
</style>
