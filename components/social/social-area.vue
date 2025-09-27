<template>
 <section class="social__area social-bg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10">
                <div class="section__title text-center mb-60">
                    <text-animation title='DIVENTA UNO DI NOI'/>
                    <h3 class="title">TI ASPETTIAMO!</h3>
                </div>
            </div>
        </div>
        <div class="row justify-content-center gutter-20 row-cols-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-3">
            <div v-for="(s,i) in social_data" :key="i" class="col">
                <div class="social__item">
                    <nuxt-link :to="s.link" target='_blank'>
                        <i :class="s.icon"></i>
                        <span>{{s.title}}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5">
                          <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)" />
                        </svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">

// social item 
const social_data:{
    id: number;
    link: string;
    icon: string;
    title: string;
}[] = [
    {
        id:1,
        link:'https://discord.gg/t7ypApFQ7v',
        icon:'flaticon-discord',
        title:'discord'
    },
    /* {
        id:1,
        link:'https://www.facebook.com/',
        icon:'flaticon-facebook',
        title:'facebook'
    },
    {
        id:2,
        link:'https://twitter.com/',
        icon:'flaticon-twitter',
        title:'twitter'
    },
    {
        id:3,
        link:'https://www.instagram.com/',
        icon:'flaticon-instagram',
        title:'instagram'
    },
    {
        id:4,
        link:'https://www.youtube.com/',
        icon:'flaticon-youtube',
        title:'youtube'
    },
    
    {
        id:6,
        link:'https://www.twitch.tv/',
        icon:'flaticon-twitch',
        title:'twitch'
    }, */
]

</script>
