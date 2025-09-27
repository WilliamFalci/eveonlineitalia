<!-- <template>
    <section class="team__area3 section-pt-120 section-pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__title text-center mb-60 title-shape-none">
                        <span class="sub-title2">Professional Esports Team</span>
                        <h3 class="title2">Pro Skilled <span class="text-theme d-inline-block position-relative">
                            <img class="section-line" src="/images/others/section-line.png" alt="img">
                            Gamers</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row gy-4 justify-content-center">
                <div v-for="item in teamData" :key="item.id" class="col-xl-4 col-md-6 wow fadeInUp" :data-wow-delay="item.delay">
                    <div class="team__item2">
                        <div class="team__thumb">
                            <nuxt-link href="/team-details">
                                <img :src="item.imgSrc" alt="img">
                            </nuxt-link>
                        </div>
                        <div class="team__content">
                            <h4 class="name">
                                <nuxt-link href="/team-details">{{ item.name }}</nuxt-link>
                            </h4>
                            <span class="designation">{{ item.designation }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const teamData = [
    {
        id: 1,
        imgSrc: "/images/team/team3-1.png",
        name: "Moolin Lexo",
        designation: "SUPPORT",
        delay: ".2s",
    },
    {
        id: 2,
        imgSrc: "/images/team/team3-2.png",
        name: "Moolin Lexo",
        designation: "SUPPORT",
        delay: ".4s",
    },
    {
        id: 3,
        imgSrc: "/images/team/team3-3.png",
        name: "Moolin Lexo",
        designation: "SUPPORT",
        delay: ".6s",
    },
];
</script> -->



<template>
    <section :class="[style_2 ? 'team__area4' : 'team__area3 section-pt-120', 'section-pb-120']"
        :style="style_2 ? { backgroundImage: 'url(/images/bg/team_bg4.png)' } : {}">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__title text-center mb-60 title-shape-none">
                        <span class="sub-title2">Professional Esports Team</span>
                        <h3 class="title2">
                            {{ style_2 ? 'MEET OUR ELITE TEAM' : 'Pro Skilled ' }}
                            <template v-if="!style_2">
                                <span class="text-theme d-inline-block position-relative">
                                    <img class="section-line" src="/images/others/section-line.png" alt="img" />
                                    Gamers
                                </span>
                            </template>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row gy-4 justify-content-center">
                <div v-for="team in teamData" :key="team.id" class="col-xl-4 col-md-6 wow fadeInUp"
                    :data-wow-delay="team.delay">
                    <div class="team__item2">
                        <div class="team__thumb">
                            <NuxtLink href="/team-details">
                                <img :src="team.imgSrc" alt="img" />
                            </NuxtLink>
                        </div>
                        <div class="team__content">
                            <h4 class="name">
                                <NuxtLink href="/team-details">{{ team.name }}</NuxtLink>
                            </h4>
                            <span class="designation">{{ team.designation }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ style_2?: boolean }>(), {
    style_2: false
})
const teamData = [
    {
        id: 1,
        imgSrc: "/images/team/team3-1.png",
        name: "Moolin Lexo",
        designation: "SUPPORT",
        delay: ".2s",
    },
    {
        id: 2,
        imgSrc: "/images/team/team3-2.png",
        name: "Moolin Lexo",
        designation: "SUPPORT",
        delay: ".4s",
    },
    {
        id: 3,
        imgSrc: "/images/team/team3-3.png",
        name: "Moolin Lexo",
        designation: "SUPPORT",
        delay: ".6s",
    },
];
</script>