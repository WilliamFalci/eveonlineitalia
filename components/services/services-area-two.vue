<template>
    <section class="service__area3 section-pt-120 section-pb-120" style="background-image:url(/images/bg/service_bg3.png)">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__title text-center mb-60 title-shape-none">
                        <span class="sub-title2">Professional Esports Team</span>
                        <h3 class="title2">TOURNAMENTS <span class="text-theme">I’VE
                             <span class="d-inline-block position-relative">
                                <img class="section-line" src="/images/others/section-line.png" alt="img">
                                BEEN A PART OF
                            </span>
                          </span>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row gy-4 justify-content-center">
                <div v-for="(item) in serviceData" :key="item.id" class="col-xl-4 col-md-6">
                    <div class="service-card">
                        <div class="service-card-img">
                            <img :src="item.img" alt="img">
                        </div>
                        <div class="service-card-details">
                            <div class="service-card-meta">
                                <a href="#">{{ item.date }}</a>
                                <a href="#">{{ item.time }}</a>
                                <a href="#">{{ item.match }}</a>
                            </div>
                            <h4 class="service-card-title">
                                <nuxt-link href="/service-details">{{ item.title }}</nuxt-link>
                            </h4>
                            <div class="service-card-tag">
                                <a href="#"><i class="fas fa-eye"></i>{{ item.views }}</a>
                                <a href="#"><i class="fas fa-gamepad"></i>{{ item.game }}</a>
                                <a href="#"><i class="fas fa-users"></i>{{ item.groups }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const serviceData = [
    {
        id: 1,
        img: "/images/service/service3-1.png",
        date: "25th March, 2024",
        time: "18:00",
        match: "HU v/s Lm",
        title: "Daniel Barna Klark",
        views: "280k",
        game: "CK (vs) UO",
        groups: "2 Groups",
    },
    {
        id: 2,
        img: "/images/service/service3-2.png",
        date: "25th March, 2024",
        time: "18:00",
        match: "HU v/s Lm",
        title: "Daniel Barna Klark",
        views: "280k",
        game: "CK (vs) UO",
        groups: "2 Groups",
    },
    {
        id: 3,
        img: "/images/service/service3-3.png",
        date: "25th March, 2024",
        time: "18:00",
        match: "HU v/s Lm",
        title: "Daniel Barna Klark",
        views: "280k",
        game: "CK (vs) UO",
        groups: "2 Groups",
    },
];
</script>