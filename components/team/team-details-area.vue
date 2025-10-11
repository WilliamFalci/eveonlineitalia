<template>
    <section class="team__details-area section-pt-120 section-pb-120">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="team__details-content" v-if="propaganda">
                        <div v-html="propaganda.content_html"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{ propaganda: any }>()
</script>
