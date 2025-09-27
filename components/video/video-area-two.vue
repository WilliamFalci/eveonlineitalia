<template>
    <section class="video__area section-pb-120 section-pt-120 bg-img-cover"
        :style="{ backgroundImage: 'url(/images/bg/video_bg3.png)' }">
        <div class="container">
            <div class="row justify-content-xl-between justify-content-center">
                <div class="col-lg-auto">
                    <div class="section__title mb-50 title-shape-none text-xl-start text-center">
                        <h6 class="sub-title2">Watch My Live Videos</h6>
                        <h3 class="title2">Online STREAMS</h3>
                    </div>
                </div>
                <div class="col-lg-auto text-xl-end align-self-end text-center">
                    <ul class="nav nav-tabs video-tab-wrap mb-60" id="myTab" role="tablist">
                        <li v-for="nav in navData" :key="nav.id" class="nav-item" role="presentation">
                            <button class="nav-link" :class="{ active: activeTab === nav.id }"
                                @click="setActiveTab(nav.id)" type="button" role="tab" :aria-controls="nav.id"
                                :aria-selected="activeTab === nav.id">
                                {{ nav.title }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content" id="myTabContent">
                <div v-for="content in tabContentData" :key="content.id" class="tab-pane"
                    :class="{ show: activeTab === content.id, active: activeTab === content.id }" :id="content.id"
                    role="tabpanel" :aria-labelledby="`${content.id}-tab`">
                    <div class="video__card">
                        <div class="video-card-shape video-card-shape1">
                            <img src="/images/gallery/video3-card-shape1.png" alt="img" />
                        </div>
                        <div class="video-card-shape video-card-shape2">
                            <img src="/images/gallery/video3-card-shape2.png" alt="img" />
                        </div>
                        <div class="video-card-shape video-card-shape3">
                            <img src="/images/gallery/video3-card-shape3.png" alt="img" />
                        </div>
                        <div class="video-card-shape video-card-shape4">
                            <img src="/images/gallery/video3-card-shape4.png" alt="img" />
                        </div>
                        <div class="video-card-img">
                            <img :src="content.imgSrc" :alt="content.title" />
                        </div>
                        <nuxt-link to="/service-details" class="video-card-title">
                            <span class="icon">
                                <i class="fas fa-link"></i>
                            </span>
                            <span class="video-card-title-shape video-card-title-shape2">
                                <img src="/images/gallery/video3-card-title-shape2.png" alt="img" />
                            </span>
                            <span class="title">
                                <span class="video-card-title-shape video-card-title-shape1">
                                    <img src="/images/gallery/video3-card-title-shape1.png" alt="img" />
                                </span>
                                {{ content.title }}
                            </span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">


// nav data
const navData = [
    { id: "about01", title: "CSGO" },
    { id: "about02", title: "Dota-2" },
    { id: "about03", title: "Pubg" },
    { id: "about04", title: "Freefire" },
    { id: "about05", title: "Clash of clan" },
];
// tab content data
const tabContentData = [
    {
        id: "about01",
        imgSrc: "/images/gallery/video3-1.jpg",
        title: "Daniel Barna Klark",
    },
    {
        id: "about02",
        imgSrc: "/images/gallery/video3-2.png",
        title: "Daniel Barna Klark",
    },
    {
        id: "about03",
        imgSrc: "/images/gallery/video3-3.png",
        title: "Daniel Barna Klark",
    },
    {
        id: "about04",
        imgSrc: "/images/gallery/video3-4.jpg",
        title: "Daniel Barna Klark",
    },
    {
        id: "about05",
        imgSrc: "/images/gallery/video3-5.jpg",
        title: "Daniel Barna Klark",
    },
];

const activeTab = ref(navData[0].id);

const setActiveTab = (tabId: string) => {
    activeTab.value = tabId;
};
</script>