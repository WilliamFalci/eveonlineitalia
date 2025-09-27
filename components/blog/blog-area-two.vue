<template>
    <section :class="`blog-area3 position-relative section-pb-120 ${style_2 ? '' : 'section-pt-240 bg-img-center bg-img-cover'}`">
        <div v-if="!style_2" class="blog-area3-bg-thumb" style="background-image: url(/images/bg/blog_bg3.png)">
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div v-if="!style_2" class="section__title text-center mb-60 title-shape-none">
                        <span class="sub-title2">Professional Esports Team</span>
                        <h3 class="title2">
                            Latest
                            <span class="text-theme d-inline-block position-relative">
                                <img class="section-line" src="/images/others/section-line.png" alt="img" />
                                Blog Posts
                            </span>
                        </h3>
                    </div>

                    <div v-else class="section__title text-center mb-60 title-shape-none">
                        <span class="sub-title2">Professional Esports Team</span>
                        <h3 class="title2">Latest Blog Posts</h3>
                    </div>
                </div>
            </div>

            <div class="row gy-4 justify-content-center">
                <div v-for="blog in blogData" :key="blog.id" class="col-lg-6">
                    <div class="blog-card">
                        <div class="blog-card-img">
                            <img :src="blog.imgSrc" alt="Blog Thumbnail" />
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-post-meta">
                                <ul class="list-wrap">
                                    <li>
                                        <i class="far fa-calendar-alt"></i> {{ blog.date }}
                                    </li>
                                    <li>
                                        <i class="far fa-comments"></i>
                                        <a href="#">{{ blog.comments }}</a>
                                    </li>
                                </ul>
                            </div>
                            <h4 class="blog-card-title">
                                <nuxt-link href="/blog-details">{{ blog.title }}</nuxt-link>
                            </h4>
                            <div class="blog-post-read">
                                <nuxt-link href="/blog-details">Read Details</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script setup lang="ts">

interface Props {
    style_2?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    style_2: false
});

const blogData = [
    {
        id: 1,
        imgSrc: "/images/blog/blog_card3-1.jpg",
        date: "Aug 19, 2024",
        comments: "No comments",
        title: "Special edition boots campaign year end sale for you",
    },
    {
        id: 2,
        imgSrc: "/images/blog/blog_card3-2.jpg",
        date: "Aug 19, 2024",
        comments: "No comments",
        title: "Special edition boots campaign year end sale for you",
    },
];

</script>