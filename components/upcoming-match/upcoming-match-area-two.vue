<template>
    <section class="upcoming-match__area3 section-pt-170 section-pb-120 bg-img-cover bg-img-center"
         style="background-image:url(/images/bg/match_bg3.png)">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__title text-center mb-60 title-shape-none">
                        <span class="sub-title2">Upcoming Schedule</span>
                        <h3 class="title2">My STREAM <span class="text-theme d-inline-block position-relative">
                            <NuxtImg class="section-line" src="/images/others/section-line.png" alt="img">
                            TIMETABLE</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row gy-5">
                <div v-for="item in upcomingMatchData" :key="item.id" class="col-12">
                    <div class="upcoming-match__item2">
                        <div class="upcoming-match__wrap">
                            <div class="upcoming-match__team team-left">
                                <nuxt-link href="/team-details">
                                    <NuxtImg :src="item.leftTeamLogo" alt="img">
                                </nuxt-link>
                            </div>
                            <div class="upcoming-match__content">
                                <div class="team--info info-left">
                                    <span class="social-wrap">
                                        <span>Stream On: </span>
                                        <a v-for="icon in item.streamOn" href="#">
                                            <i :class="`fab fa-${icon}`"></i>
                                        </a>
                                    </span>
                                    <h3 class="name">
                                        <nuxt-link href="/team-details">{{ item.leftTeamName }}</nuxt-link>
                                    </h3>
                                </div>
                                <div class="upcoming-match__versus">
                                    <h2 class="versus">V/S</h2>
                                </div>
                                <div class="team--info info-right">
                                    <span class="game-name">
                                        {{ item.gameName }}
                                    </span>
                                    <h3 class="name">
                                        <nuxt-link href="/team-details">{{ item.rightTeamName }}</nuxt-link>
                                    </h3>
                                </div>
                            </div>
                            <div class="upcoming-match__team team-right">
                                <nuxt-link href="/team-details">
                                    <NuxtImg :src="item.rightTeamLogo" alt="img">
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="upcoming-match__date">
                            <span>{{ item.time }}</span>
                        </div>
                        <div class="upcoming-match__day">
                            <span>{{ item.day }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const upcomingMatchData = [
    {
        id: 1,
        leftTeamLogo: '/images/others/match-logo3-1.png',
        streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
        leftTeamName: "MARVEL STADIUM",
        gameName: "CALL OF DUTY Live Stream",
        rightTeamLogo: '/images/others/match-logo3-2.png',
        rightTeamName: "MARVEL STADIUM",
        time: "7:00 Pm - 4:00 Am Cet",
        day: "Monday",
    },
    {
        id: 2,
        leftTeamLogo: '/images/others/match-logo3-3.png',
        streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
        leftTeamName: "MARVEL STADIUM",
        gameName: "CALL OF DUTY Live Stream",
        rightTeamLogo: '/images/others/match-logo3-4.png',
        rightTeamName: "MARVEL STADIUM",
        time: "7:00 Pm - 4:00 Am Cet",
        day: "Tuesday",
    },
    {
        id: 3,
        leftTeamLogo: '/images/others/match-logo3-5.png',
        streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
        leftTeamName: "MARVEL STADIUM",
        gameName: "CALL OF DUTY Live Stream",
        rightTeamLogo: '/images/others/match-logo3-6.png',
        rightTeamName: "MARVEL STADIUM",
        time: "7:00 Pm - 4:00 Am Cet",
        day: "Friday",
    },
];
</script>