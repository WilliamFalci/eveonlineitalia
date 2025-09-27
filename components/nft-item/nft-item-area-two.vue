<template>
    <section class="nft-item__area4 section-pt-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__title text-center mb-60 title-shape-none">
                        <h6 class="sub-title2">Our Recent Games</h6>
                        <h3 class="title2">Popular Launched Games</h3>
                    </div>
                </div>
            </div>
            <div class="row gy-4 justify-content-center">
                <div v-for="item in nftItemData" :key="item.id" class="col-xl-4 col-md-6">
                    <div class="nft-card">
                        <div class="nft-card-thumb">
                            <NuxtLink href="/shop">
                                <NuxtImg :src="item.imgSrc" alt="NFT" />
                            </NuxtLink>
                        </div>
                        <div class="nft-card-content">
                            <span class="subtitle">{{ item.subtitle }}</span>
                            <h4 class="title">
                                <NuxtLink href="/shop">{{ item.title }}</NuxtLink>
                            </h4>
                            <div class="btn-wrap">
                                <a href="#">
                                    <NuxtImg src="/images/icons/play-slore-btn.png" alt="Play Store" />
                                </a>
                                <a href="#">
                                    <NuxtImg src="/images/icons/apple-slore-btn.png" alt="Apple Store" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const nftItemData = [
    {
        id: 1,
        imgSrc: "/images/nft/nft_img3-1.png",
        subtitle: "SUPPORT",
        title: "The Monster Claw",
    },
    {
        id: 2,
        imgSrc: "/images/nft/nft_img3-2.png",
        subtitle: "SUPPORT",
        title: "The Monster Claw",
    },
    {
        id: 3,
        imgSrc: "/images/nft/nft_img3-3.png",
        subtitle: "SUPPORT",
        title: "The Monster Claw",
    },
];
</script>