<template>
  <section class="services-area services__bg-color section-pt-120 section-pb-120">
    <div class="container">
        <div class="row align-items-end align-items-xl-start">
            <div class="col-lg-6">
                <div class="section__title text-start mb-65">
                    <span class="sub-title tg__animate-text">powerful services</span>
                    <h3 class="title">Our Powerful Services Done on time</h3>
                </div>
                <div class="services__wrapper">
                    <div v-for="(item,i) in service_items" :key="i" class="services__item" @mouseenter="handleMouseOver(i)" @mouseout="handleMouseOver(i)">
                        <div class="services__icon">
                            <i :class="item.icon"></i>
                        </div>
                        <div class="services__content">
                            <h4 class="title">
                              <nuxt-link to="/service-details">{{item.title}}</nuxt-link>
                            </h4>
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="services__images">
                    <div v-for="(s,i) in service_images" :key="i" :class="`services__images-item ${activeIndex === i ? 'active' : ''}`">
                        <img :src="s" alt="img" />
                        <nuxt-link to="/service-details" class="services__link">
                            <i class="flaticon-next"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
let activeIndex = ref<number | null>(0);
  const handleMouseOver = (index: number) => {
    activeIndex.value = index;
  };

  const handleMouseOut = (index: number) => {
    activeIndex.value = index;
  };
// service images
const service_images = [
  '/images/others/services_img01.jpg',
  '/images/others/services_img02.jpg',
  '/images/others/services_img03.jpg',
  '/images/others/services_img04.jpg'
];
const service_items:{
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id:1,
    icon:'flaticon-diamond',
    title:'Year Experience',
    desc:'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods'
  },
  {
    id:2,
    icon:'flaticon-user-profile',
    title:'Expert Teams',
    desc:'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods'
  },
  {
    id:3,
    icon:'flaticon-ethereum',
    title:'Best NFT Game',
    desc:'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods'
  },
  {
    id:4,
    icon:'flaticon-settings-1',
    title:'Worldwide Client',
    desc:'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods'
  }
];
</script>
