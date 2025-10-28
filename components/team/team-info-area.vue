<template>
    <section class="team__info-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="team__info-wrap">
                        <div class="team__info-discord">
                            <div class="about__content-circle">
                                <NuxtImg format="webp" src="/images/icons/circle02.svg" alt="img" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text>
                                        <textPath href="#textPath">EVE ONLINE ITALIA</textPath>
                                    </text>
                                </svg>
                                <i class="flaticon-discord"></i>
                            </div>
                            <div class="team__info-discord-info">
                                <span class="sub">ENTRA NEL SERVER</span>
                                <h5 class="title"><nuxt-link to="https://discord.gg/t7ypApFQ7v" aria-label="EVE Online Italia Discord"
                                        target="_blank">DISCORD</nuxt-link></h5>
                            </div>
                        </div>
                        <div class="team__info-list">
                            <ul class="list-wrap">
                                <li v-if="props.value_1">
                                    <div class="team__info-item">
                                        <div class="team__info-icon">
                                            <NuxtImg format="webp" :src="props.img" :alt="props.value_1"
                                                style="border-radius: 100%;" />
                                        </div>
                                        <div class="team__info-content">
                                            <span class="sub">{{ props.label_1 }}</span>
                                            <h5 class="title">{{ props.value_1 }}</h5>
                                        </div>
                                    </div>
                                </li>
                                <li v-if="props.value_2">
                                    <div class="team__info-item">
                                        <div class="team__info-icon">
                                            <i :class="`fas ${props.icon_1}`"></i>
                                        </div>
                                        <div class="team__info-content">
                                            <span class="sub">{{ props.label_2 }}</span>
                                            <h5 class="title">{{ props.value_2 }}</h5>
                                        </div>
                                    </div>
                                </li>
                                <li v-if="props.value_3">
                                    <div class="team__info-item">
                                        <div class="team__info-icon">
                                            <i :class="`fas ${props.icon_2}`"></i>
                                        </div>
                                        <div class="team__info-content">
                                            <span class="sub">{{ props.label_3 }}</span>
                                            <h5 class="title">{{ props.value_3 }}</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ 
    label_1?: string, 
    label_2?: string, 
    label_3?: string, 
    value_1?: string, 
    value_2?: string, 
    value_3?: string, 
    icon_1?: string, 
    icon_2?: string 
    img?: string, 
    }>()
</script>
